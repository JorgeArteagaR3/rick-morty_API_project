let data;
let loading;
const loader = document.getElementById("loadingstatus");
const img = document.querySelector("img");

const init = async () => {
    let y = Math.floor(Math.random() * 826 + 1);
    let URL = `https://rickandmortyapi.com/api/character/${y}`;
    img.style.display = "none";
    loader.style.display = "block";
    const res = await fetch(URL);
    img.style.display = "block";
    loader.style.display = "none";

    data = await res.json();
    rmCharacter();
};
init();

const rmCharacter = () => {
    const namep = document.querySelector(".name");
    const status = document.querySelector(".status");
    const specie = document.querySelector(".specie");
    img.src = data.image;
    namep.innerHTML = data.name;
    status.innerHTML = data.status;
    specie.innerHTML = data.species;
    if (data.status === "Alive") {
        status.style.color = "green";
    } else if (data.status === "Dead") {
        status.style.color = "red";
    } else {
        status.style.color = "white";
    }

    if (loading === false) {
    } else {
    }
};

const handleKeypress = (e) => {
    if (e.keyCode === 32) {
        init();
    }
};
const btn = document.querySelector("button");

btn.onclick = init;
document.addEventListener("keypress", handleKeypress);
