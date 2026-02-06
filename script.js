const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const final = document.getElementById("final");

const dogs = [
    "https://media.tenor.com/0pK0n9y9jpsAAAAC/cute-puppy.gif",
    "https://media.tenor.com/7KxJ7oP1ZqMAAAAC/dog-love.gif",
    "https://media.tenor.com/QsYz6vKrrZkAAAAC/puppy-kiss.gif"
];

noBtn.addEventListener("mouseover", () => {
    noBtn.style.transform = `translate(${Math.random() * 240}px,${Math.random() * 80}px)`;
    spawnDog();
});

function spawnDog() {
    const img = document.createElement("img");
    img.src = dogs[Math.floor(Math.random() * dogs.length)];
    img.className = "dog";
    img.style.left = Math.random() * 90 + "%";
    img.style.top = Math.random() * 80 + "%";
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 1600);
}

yesBtn.addEventListener("click", () => {
    document.querySelector(".buttons").style.display = "none";
    final.style.display = "block";
});

setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "%";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
}, 250);
