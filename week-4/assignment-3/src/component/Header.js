import React from "react";

const Header = (props) => {
  const { asideMenu, setAsideMenu } = props;
  //handle aside menu
  const asideMenuHandler = () => {
    setAsideMenu(!asideMenu);
  };
  //render li for aside menu
  const liNumber = 4;
  const createLi = () => {
    const li = [];
    for (let i = 0; i < liNumber; i++) {
      li.push(
        <li className={`asideMenu_ul_li asideMenu_ul_li-${liNumber}`}>
          {"Item " + (i + 1)}
        </li>
      );
    }
    return li;
  };

  return (
    <div className="header">
      {asideMenu && (
        <div className="asideMenu">
          <ul className="asideMenu_ul">{createLi()}</ul>
          <i className="fa-solid fa-xmark" onClick={asideMenuHandler}></i>
        </div>
      )}
      <header>
        <span className="logo">Website Title / Logo</span>
        <nav>
          <ul className="menu">
            <li className="menu__li-1">
              <a href="#">item 1</a>
            </li>
            <li className="menu__li-2">
              <a href="#">item 2</a>
            </li>
            <li className="menu__li-3">
              <a href="#">item 3</a>
            </li>
            <li className="menu__li-4">
              <a href="#">item 4</a>
            </li>
          </ul>
        </nav>

        <button className="menu-btn" onClick={asideMenuHandler}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>
    </div>
  );
};

export default Header;
