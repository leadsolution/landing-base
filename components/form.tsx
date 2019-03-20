import React, { FormEvent, useState } from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import { discoverSource, formDataToUrlSearchParams } from "../helpers";
import { LeadsolutionResponse } from "../types";
import FormField from "./form-field";

enum FormState {
  Waiting,
  Loading,
  Success,
  Failure
}

export default function Form() {
  const [formState, setFormState] = useState(FormState.Waiting);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      console.info("Submitting...");
      setFormState(FormState.Loading);

      const response = await fetch("https://brasil.leadsolution.com.br/leads", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToUrlSearchParams(new FormData(event.currentTarget))
      });

      const data: LeadsolutionResponse = await response.json();
      console.log(data);

      if (data.lead && data.errors.length === 0) {
        ReactGA.event({ category: "engagement", action: "generate_lead" });
        ReactPixel.track("Lead");

        data.pixels.forEach(insertPixelOrTag);
        data.tags.forEach(insertPixelOrTag);

        setFormState(FormState.Success);
      } else {
        setFormState(FormState.Failure);
      }
    } catch (error) {
      console.error(error);
      setFormState(FormState.Failure);
    }
  }

  function insertPixelOrTag(pixelOrTag: string) {
    document.body.insertAdjacentHTML("beforeend", pixelOrTag);
  }

  if (formState === FormState.Loading) {
    return <Loading />;
  }

  if (formState === FormState.Success) {
    return <Success />;
  }

  if (formState === FormState.Failure) {
    return <Failure />;
  }

  return (
    <div className="form-container">
      <form role="form" onSubmit={submit}>
        <legend>Lorem ipsum</legend>

        <input type="hidden" name="source" value={discoverSource("AABBCCC")} required />

        <FormField name="name" label="Nome" />
        <FormField name="email" label="E-mail" type="email" />
        <FormField name="phone_number" label="Telefone" type="tel" />

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

function Loading() {
  return (
    <div className="form-state loading">
      <p>Enviando...</p>
    </div>
  );
}

function Success() {
  return (
    <div className="form-state success">
      <p>Enviado com sucesso.</p>
    </div>
  );
}

function Failure() {
  return (
    <div className="form-state failure">
      <p>Erro ao enviar. Por favor, tente novamente mais tarde.</p>
    </div>
  );
}
