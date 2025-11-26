// Corazones
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 400);

// Libro
let pages = document.querySelectorAll(".page");
let z = 1;

pages.forEach((page, i) => {
    page.addEventListener("click", () => {
        page.style.transform = "rotateY(-180deg)";
        page.style.zIndex = z;
        z++;
    });
});

// Constelación Cáncer
const canvas = document.getElementById("constellation");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const stars = [
    {x:100, y:200},
    {x:180, y:280},
    {x:260, y:200},
    {x:220, y:120}
];

function drawConstellation() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#ff9acb";
    ctx.strokeStyle = "#ffb6d4";
    ctx.lineWidth = 2;

    ctx.beginPath();
    stars.forEach((s,i) => {
        ctx.lineTo(s.x, s.y);
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, 3, 0, Math.PI*2);
    });
    ctx.stroke();

    requestAnimationFrame(drawConstellation);
}
drawConstellation();

