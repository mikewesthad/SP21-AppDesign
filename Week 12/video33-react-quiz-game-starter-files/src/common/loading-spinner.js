import "./loading-spinner.css";

/**
 * Simple loading spinner, modified from: https://projects.lukehaas.me/css-loaders/.
 * @param {object} props
 * @param {number|string} [props.size="3rem"] Width and height of the spinner.
 * @param {number|string} [props.borderWidth="0.5em"] Thickness of the spinner.
 * @param {string} [props.spinnerColor="#6060ff"] Color of the "active" part of the spinner.
 * @param {string} [props.backgroundColor="rgba(86, 86, 86, 0.1)"] Color of the "inactive" part of
 * the spinner.
 * @param {string} [props.screenReaderMessage="Loading..."] Message to be displayed to screen
 * readers.
 * @param {React.CSSProperties} [props.style={}] Style to be applied to the spinner.
 */
function LoadingSpinner(props) {
  const {
    size = "3rem",
    borderWidth = "0.5em",
    spinnerColor = "#6060ff",
    backgroundColor = "rgba(86, 86, 86, 0.1)",
    screenReaderMessage = "Loading...",
    style = {},
  } = props;

  const loaderStyle = {
    width: size,
    height: size,
    borderColor: backgroundColor,
    borderWidth,
    borderLeftColor: spinnerColor,
    ...style,
  };

  return (
    <div className="loading-spinner">
      <div
        className="loading-spinner__spinner"
        style={loaderStyle}
        aria-label={screenReaderMessage}
      />
    </div>
  );
}

export default LoadingSpinner;
