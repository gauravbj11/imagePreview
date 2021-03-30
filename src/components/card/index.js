import "./card.css";

function Card(props) {
  const { login, type, avatarUrl, onPreview, cardIndex } = props;

  return (
    <div className="card">
      <button onClick={() => onPreview(cardIndex)}>
        <img
          className="card-image"
          src={avatarUrl}
          alt={login}
          loading="lazy"
        />
      </button>
      <div className="card-info">
        <div>Login: {login}</div>
        <div>Type: {type}</div>
      </div>
    </div>
  );
}

export default Card;
