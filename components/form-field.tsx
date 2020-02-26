import "cleave.js/dist/addons/cleave-phone.br";
import Cleave from "cleave.js/react";
import React from "react";

type FormFieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

export default function FormField({
  name,
  label,
  type = "text",
  required = true,
  children = [],
  placeholder = undefined,
  disabled = false,
}: FormFieldProps) {
  function input() {
    switch (type) {
      case "tel":
        return (
          <Cleave
            type="tel"
            className="form-control"
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            options={{phone: true, phoneRegionCode: "br"}}
          />
        );

      case "itr":
      case "tax-document-1":
      case "cpf":
        return (
          <Cleave
            type="text"
            className="form-control"
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            options={{
              blocks: [3, 3, 3, 2],
              delimiters: [".", ".", "-"],
              numericOnly: true,
            }}
          />
        );

      case "ftin":
      case "tax-document-2":
      case "cnpj":
        return (
          <Cleave
            type="text"
            className="form-control"
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            options={{
              blocks: [2, 3, 3, 4, 2],
              delimiters: [".", ".", "/", "-"],
              numericOnly: true,
            }}
          />
        );

      case "select":
        return (
          <select
            className="form-control"
            id={name}
            name={name}
            required={required}
            disabled={disabled}>
            <option value="" selected disabled>
              {placeholder === undefined ? "Selecione" : placeholder}
            </option>
            {children}
          </select>
        );

      case "cep":
        return (
          <Cleave
            type="text"
            className="form-control"
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            options={{blocks: [5, 3], delimiter: "-", numericOnly: true}}
          />
        );

      case "date":
        return (
          <Cleave
            type="text"
            className="form-control"
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            options={{
              blocks: [2, 2, 4],
              delimiters: ["/", "/"],
              numericOnly: true,
            }}
          />
        );

      case "textarea":
        return (
          <textarea
            className="form-control"
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
          />
        );

      case "money":
      case "currency":
        return (
          <Cleave
            type="text"
            className="form-control"
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            options={{
              prefix: "R$ ",
              numeral: true,
              numeralThousandsGroupStyle: "thousand",
              numeralPositiveOnly: true,
              numeralDecimalMark: ",",
              numeralDecimalScale: 2,
              delimiter: ".",
            }}
          />
        );

      default:
        return (
          <input
            type={type}
            className="form-control"
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
          />
        );
    }
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {input()}
    </div>
  );
}
