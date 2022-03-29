import React, { createContext } from "react";
import ComA from "./ComA";
import ComB from "./ComB";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Aniruddh"}>
        <LastName.Provider value={"Bhavini"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default App;
// export morethan one componet
export { FirstName, LastName };
