import { useEffect, useState } from "react";
import { Carousel, PreviewImage } from "./components";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://api.github.com/users");
        const usersArr = await res.json();
        console.log("users", usersArr);
        setUsers(usersArr);
        updateActiveUsers(usersArr);
        setActiveImage(usersArr[activeIndex]["avatar_url"]);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);

  const getFinalUsers = (startIndex, finalIndex, usersArr) => {
    const inputArr = usersArr || users;
    const finalUsers = [];
    for (let index = startIndex; index < finalIndex; index++) {
      finalUsers.push(inputArr[index]);
    }
    return finalUsers;
  };

  const updateActiveUsers = usersArr => {
    const startIndex = activeIndex;
    const finalIndex = activeIndex + 3;
    const finalUsers = getFinalUsers(startIndex, finalIndex, usersArr);
    setActiveUsers(finalUsers);
  };

  const handlePrevClick = e => {
    if (activeIndex === 0) {
      return;
    }
    const startIndex = activeIndex - 3;
    const finalIndex = startIndex + 3;
    const finalUsers = getFinalUsers(startIndex, finalIndex);
    setActiveIndex(startIndex);
    setActiveUsers(finalUsers);
    setActiveImage(users[startIndex]["avatar_url"]);
  };

  const handleNextClick = e => {
    if (users.length === activeIndex + 3) {
      return;
    }
    const startIndex = activeIndex + 3;
    const finalIndex = startIndex + 3;
    const finalUsers = getFinalUsers(startIndex, finalIndex);
    setActiveIndex(startIndex);
    setActiveUsers(finalUsers);
    setActiveImage(users[startIndex]["avatar_url"]);
  };

  const updatePreviewImage = cardIndex => {
    const card = users[activeIndex + cardIndex];
    setActiveImage(card.avatar_url);
  };

  return (
    <div className="App">
      <PreviewImage avatarUrl={activeImage} />
      <Carousel
        cards={activeUsers}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        onPreview={updatePreviewImage}
      />
    </div>
  );
}

export default App;
