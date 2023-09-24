import React from "react";

const Main = (props) => {
  const { title, setTitle, setHiddenBox, hiddenBox } = props;
  //handle title change
  const changeWord = () => {
    setTitle("Have a Good Time!");
  };
  // display boxes
  const buttonHandler = () => {
    setHiddenBox(false);
  };
  // render 4 boxes
  const numberOfBoxes = hiddenBox ? 4 : 8;
  const generateBoxes = () => {
    let boxes = [];
    for (let i = 1; i <= numberOfBoxes; i++) {
      boxes.push(
        <div className={`content__box-${i}`}>
          <span className={`box-${i}__content`}>Content Box {i}</span>{" "}
        </div>
      );
    }
    return boxes;
  };

  return (
    <main>
      <section className="section-top">
        <h1 className="title" onClick={changeWord}>
          {title}
        </h1>
      </section>
      <section className="section-bottom">
        <h2 className="title">Section Title</h2>
        <div className="content">{generateBoxes()}</div>

        <button onClick={buttonHandler}>Call to Action</button>
      </section>
    </main>
  );
};

export default Main;
