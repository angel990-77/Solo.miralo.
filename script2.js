// corazones del libro 2
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart2";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 500);