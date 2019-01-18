import "cleave.js/dist/addons/cleave-phone.br";
import Cleave from "cleave.js/react";
import React, { FormEvent } from "react";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";
import { discoverSource, formDataToUrlSearchParams } from "../helpers";
import { LeadsolutionResponse } from "../types";

enum FormState {
  Waiting,
  Loading,
  Success,
  Failure,
}

type State = {
  formState: FormState
}

export default class Form extends React.Component<any, State> {
  state = {
    formState: FormState.Waiting,
  }

  async submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      console.info("Submitting...");
      this.setState({ formState: FormState.Loading });

      const response = await fetch("https://brasil.leadsolution.com.br/leads", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataToUrlSearchParams(new FormData(event.currentTarget)),
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
      return <Loading />
    }

    if (this.state.formState === FormState.Success) {
      return <Success />
    }

    if (this.state.formState === FormState.Failure) {
      return <Failure />
    }

    return (
      <div className="form-container">
        <form role="form" onSubmit={this.submit.bind(this)}>
          <input type="hidden" name="source" value={discoverSource("AABBCCC")} required />

          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone_number">Telefone</label>
            <Cleave type="tel" name="phone_number" id="phone_number" className="form-control" options={{ phone: true, phoneRegionCode: "br" }} required />
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
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
