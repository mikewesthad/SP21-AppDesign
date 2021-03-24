import "./error-message.css";

/**
 * Simple error message display.
 * @param {object} props
 * @param {React.ReactNode} props.children Message to display.
 */
function ErrorMessage({ children }) {
  return <p className="error-message">{children}</p>;
}

export default ErrorMessage;
