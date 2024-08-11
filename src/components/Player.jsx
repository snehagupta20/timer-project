import { useRef, useState } from "react";

export default function Player() {

  //to get val entered in input field
  const playerName = useRef();

  const [userName, setUserName] = useState("unknown entity");
  // var name = "unknown entity";

  const handleClick = () => {
    // setUserName(name);
    setUserName(playerName.current.value);
  }


  return (
    <section id="player">
      <h2>Welcome {userName}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}

// 1. store the input
// 2. when button clicked, take the stored input and add in h2