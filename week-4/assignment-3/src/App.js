import React, { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import "./styles/style.css";

const App = () => {
  const [title, setTitle] = useState("Welcome Message");
  const [asideMenu, setAsideMenu] = useState(false);
  const [hiddenBox, setHiddenBox] = useState(true);

  return (
    <div className="app">
      <Header asideMenu={asideMenu} setAsideMenu={setAsideMenu} />
      <Main
        title={title}
        setTitle={setTitle}
        hiddenBox={hiddenBox}
        setHiddenBox={setHiddenBox}
      />
    </div>
  );
};

export default App;
