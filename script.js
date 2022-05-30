const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = [
  "black",
  "white",
  "green",
  "blue",
  "brown",
  "yellow",
  "red",
];

button.addEventListener("click", changeBackground);

let sıra = 0;

function changeBackground() {
//rasgele arkaplanrengi

 // const rastgeleSayi = Math.floor(Math.random() * colors.length);
 // const secilenRenk = colors[rastgeleSayi];
// console.log(rastgeleSayi, secilenRenk);
//  body.style.backgroundColor = secilenRenk;

//sırayla arkaplanrengi

if (sıra == 7) sıra = 0;
const secilenRenk = colors[sıra];
sıra++;
body.style.backgroundColor = secilenRenk;

}
