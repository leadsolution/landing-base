import React from "react";
import "./form.scss";

export default class Form extends React.Component {
  render() {
    return (
      <div className="form-container">
        <form role="form">
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" className="form-control" />
          </div>

          <div className="form-group">
            <label htmlFor="phone_number">Telefone</label>
            <input type="tel" name="phone_number" id="phone_number" className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    );
  }
}