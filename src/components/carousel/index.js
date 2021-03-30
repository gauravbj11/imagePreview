import { Card } from "..";
import "./carousel.css";

function Carousel(props) {
  const { cards = [], onPrevClick, onNextClick, ...rest } = props;

  return (
    <div className="carousel">
      <button onClick={onPrevClick}>Prev</button>
      {cards.map((cardObj, index) => {
        const { login, type, avatar_url } = cardObj;
        return (
          <Card
            login={login}
            type={type}
            avatarUrl={avatar_url}
            cardIndex={index}
            {...rest}
          />
        );
      })}
      <button onClick={onNextClick}>Next</button>
    </div>
  );
}

export default Carousel;
