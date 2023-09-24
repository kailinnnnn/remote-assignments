// Assignment 2: HTML DOM and AJAX
// Complete the functions below to make an AJAX call to a URL by Fetch API, and show the
// response data in the page. You may render UI with any style.
function ajax(url) {
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        return Error(res.statusText);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((e) => {
      return e;
    });
}
function render(data) {
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h2.textContent = data[i].name;
    h3.textContent = data[i].price;
    p.textContent = data[i].description;
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    div.classList.add(`product-${i}`);
    document.body.appendChild(div);
  }
}
const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url)
  .then((data) => {
    render(data);
  })
  .catch((error) => {
    console.error(error);
  });
// you should get product information in JSON format and render data in the page
