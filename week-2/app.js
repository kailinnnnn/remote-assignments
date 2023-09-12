//Click to Change Text.
const title = document.querySelector(".section-top .title");
const button = document.querySelector(".menu-btn");

title.addEventListener("click", () => {
  title.innerText = "Have a Good Time!";
});

//Click to Show/Close Menu
const asideMenu = document.createElement("div");
asideMenu.classList.add("asideMenu");

const ul = document.createElement("ul");
ul.classList.add("asideMenu_ul");
asideMenu.appendChild(ul);

const icon = document.createElement("i");
icon.classList.add("fa-solid", "fa-xmark");
asideMenu.appendChild(icon);

const liNumber = 4;
for (let i = 0; i < liNumber; i++) {
  const li = document.createElement("li");
  li.classList.add("asideMenu_ul_li", `asideMenu_ul_li-${liNumber}`);
  li.innerText = "Item " + (i + 1);
  ul.appendChild(li);
}

button.addEventListener("click", () => {
  document.body.appendChild(asideMenu);
});

icon.addEventListener("click", () => {
  document.body.removeChild(asideMenu);
});

//Click to Show More Content Boxes.
const section = document.querySelector(".section-bottom");
const content = document.createElement("div");
content.classList.add("content");
const belowDivNumber = 4;
for (let i = 5; i < 5 + belowDivNumber; i++) {
  const contentBox = document.createElement("div");
  contentBox.classList.add(`content__box-${i}`, "hidden");
  const boxContent = document.createElement("span");
  boxContent.classList.add(`box-${i}__content`);
  boxContent.innerText = `Content Box ${i}`;
  contentBox.appendChild(boxContent);
  content.appendChild(contentBox);
}
section.appendChild(content);

const bottomBtn = document.querySelector(".section-bottom button");
bottomBtn.addEventListener("click", () => {
  const hiddenDiv = document.querySelectorAll(".hidden");
  hiddenDiv.forEach((div) => {
    div.classList.remove("hidden");
  });
});
