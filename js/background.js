const images = ["0.jpg", "1.jpg", "2.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${randomImg}`;

document.body.appendChild(bgImg);

