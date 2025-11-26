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

let pages = document.querySelectorAll(".page");
let z = 1;

pages.forEach((page) => {
    page.addEventListener("click", () => {
        page.style.transform = "rotateY(-180deg)";
        page.style.zIndex = z;
        z++;
    });
});

