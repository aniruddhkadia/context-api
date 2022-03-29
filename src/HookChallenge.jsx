import React, { useState, useEffect } from "react";

const HookChallenge = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    // alert("hi");
    document.title = `you Clicked me ${num} times`;
  });
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}>
        Clieck me {num}
      </button>
    </>
  );
};

export default HookChallenge;
