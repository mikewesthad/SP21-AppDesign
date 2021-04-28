import "./form-components.css";

function Form({ onSubmit, disabled, children }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset disabled={disabled} className="form__fieldset-wrapper">
        {children}
      </fieldset>
    </form>
  );
}

function TextInput({ label, name, value, onChange }) {
  return (
    <div className="form__block">
      <label htmlFor={name} className="form__label">
        {label}:
      </label>
      <input
        className="form__field"
        placeholder={label}
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function SelectInput({ label, name, options, value, onChange }) {
  return (
    <div className="form__block">
      <label htmlFor={name} className="form__label">
        {label}:
      </label>
      <select id={name} name={name} value={value} onChange={onChange} className="form__field">
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export { TextInput, SelectInput, Form };
