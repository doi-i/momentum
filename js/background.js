const images = ["01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImg =  document.createElement("img") ;

bgImg.src = `img/${chosenImg}`;
bgImg.classList.add("backImg");
document.body.appendChild(bgImg);

