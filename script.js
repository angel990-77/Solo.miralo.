// ❤️ corazones flotando
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 500);


// ⭐ constelación
const canvas = document.getElementById("constellation");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 300;

let stars = [
    {x:50, y:200}, {x:120, y:80}, {x:200, y:150},
    {x:300, y:50}, {x:380, y:140}
];

ctx.strokeStyle = "#ff8ccf";
ctx.lineWidth = 3;
ctx.fillStyle = "#ff8ccf";

stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, 5, 0, Math.PI*2);
    ctx.fill();
});

ctx.beginPath();
for (let i = 0; i < stars.length; i++) {
    ctx.lineTo(stars[i].x, stars[i].y);
}
ctx.stroke();