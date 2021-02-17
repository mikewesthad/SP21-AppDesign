function AlertButton({ buttonText = "Alert", alertMessage }) {
  const displayAlert = () => {
    alert(alertMessage);
  };

  return (
    <button className="speak-button" onClick={displayAlert}>
      📣 {buttonText} 📣
    </button>
  );
}

export default AlertButton;
