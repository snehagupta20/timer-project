import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [userName, setUserName] = useState("unknown entity");
  // let userName = "unknown entity";

  const handleClick = () => {
    setUserName(playerName.current.value);
    // userName = playerName.current.value;
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