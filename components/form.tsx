import React, { FormEvent } from "react";
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

type State = {
  formState: FormState;
};

export default class Form extends React.Component<any, State> {
  state = {
    formState: FormState.Waiting
  };

  async submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      console.info("Submitting...");
      this.setState({ formState: FormState.Loading });

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

        data.pixels.forEach(this.insertPixelOrTag);
        data.tags.forEach(this.insertPixelOrTag);

        this.setState({ formState: FormState.Success });
      } else {
        this.setState({ formState: FormState.Failure });
      }
    } catch (error) {
      console.error(error);
      this.setState({ formState: FormState.Failure });
    }
  }

  private insertPixelOrTag(pixelOrTag: string) {
    document.body.insertAdjacentHTML("beforeend", pixelOrTag);
  }

  render() {
    if (this.state.formState === FormState.Loading) {
      return <Loading />;
    }

    if (this.state.formState === FormState.Success) {
      return <Success />;
    }

    if (this.state.formState === FormState.Failure) {
      return <Failure />;
    }

    return (
      <div className="form-container">
        <form role="form" onSubmit={this.submit.bind(this)}>
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
}

class Loading extends React.PureComponent {
  render() {
    return (
      <div className="loading">
        <p>Enviando...</p>
      </div>
    );
  }
}

class Success extends React.PureComponent {
  render() {
    return (
      <div className="success">
        <p>Enviado com sucesso.</p>
      </div>
    );
  }
}

class Failure extends React.PureComponent {
  render() {
    return (
      <div className="failure">
        <p>Erro ao enviar. Por favor, tente novamente mais tarde.</p>
      </div>
    );
  }
}
