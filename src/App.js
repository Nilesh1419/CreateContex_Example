import "./styles.css";
import React, { createContext } from "react";
import Component_A from "../Component-A";

const Fname = createContext();
const Passion = createContext();

export default function App() {
  return (
    <div className="App">
      <Fname.Provider value={"Dhoni"}>
        <Passion.Provider value="Cricket">
          <Component_A />
        </Passion.Provider>
      </Fname.Provider>
      {/* <Component-B />
      <Component-C /> */}
    </div>
  );
}
export { Fname, Passion };
