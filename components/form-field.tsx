import "cleave.js/dist/addons/cleave-phone.br";
import Cleave from "cleave.js/react";

type FormFieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  children?: React.ReactNode;
  disabled?: boolean;
};

export default function FormField({ name, label, type = "text", required = true, children = [], placeholder = undefined, disabled = false }: FormFieldProps) {
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
            options={{ phone: true, phoneRegionCode: "br" }}
          />
        );

      case "tax":
        return (
          <Cleave
            type="tel"
            className="form-control"
            id={name}
            name={name}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            options={{
              blocks: [3, 3, 3, 2],
              delimiters: [".", ".", "-"],
              numericOnly: true
            }}
          />
        );

      case "select":
        return (
          <select className="form-control" id={name} name={name} required={required} disabled={disabled}>
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
            options={{ blocks: [5, 3], delimiter: "-", numericOnly: true }}
          />
        );

      default:
        return <input type={type} className="form-control" id={name} name={name} required={required} disabled={disabled} placeholder={placeholder} />;
    }
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {input()}
    </div>
  );
}
