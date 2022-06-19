const img =["0.jpeg","1.jpeg","2.jpeg","3.jpeg"];
const choseImg = img[Math.floor(Math.random()*img.length)];

const body = document.querySelector("body");
body.style.backgroundImage=`url(./img/${choseImg})`;
// const bgImg = document.createElement("img");
// bgImg.src=`img/${choseImg}`;
// document.body.appendChild(bgImg);