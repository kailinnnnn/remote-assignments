const button = document.querySelector("button");
const p = document.createElement("p");

button.addEventListener("click", () => {
  const num = document.querySelector("input").value;
  fetch(`http://localhost:3000/getData/?number=${num}`)
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      console.log(res);

      p.innerText = res;
      document.querySelector("body").appendChild(p);
    })
    .catch((err) => {
      console.log(err);
    });
});
