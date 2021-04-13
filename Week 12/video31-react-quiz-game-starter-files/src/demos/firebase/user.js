function User({ data }) {
  return (
    <div>
      <p>
        {data.firstName} {data.lastName} ({data.isOnline ? "Online" : "Offline"})
      </p>
      <p>
        {data.firstName}'s high score is {data.highScore}
      </p>
    </div>
  );
}

export default User;
