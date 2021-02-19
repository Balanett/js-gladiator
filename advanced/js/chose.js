const form = document.querySelector("form")
const chooseBtn = document.getElementById("chooseBtn")
const chosen = []
const opponent = []

chooseBtn.addEventListener("click", event => {
    event.preventDefault();

    const chosenGlad = form.glad.value
    const chosenWeapon = form.weap.value
    chosen.push(chosenGlad,chosenWeapon)

    const notChosenGlads = []
    const GladClass = document.getElementsByClassName("glad")
    for (let i=0; i<GladClass.length; i++) {
        if (GladClass[i].checked === false)
        notChosenGlads.push(GladClass[i].value)
    }

    const GladOptions = notChosenGlads;
    const Weapons = ["Trident", "Spear", "Club"]
    const randomGlad = Math.floor(Math.random() * GladOptions.length);
    const randomWeap = Math.floor(Math.random() * Weapons.length);
    opponent.push(GladOptions[randomGlad], Weapons[randomWeap]);

    console.log(chosen, opponent)

    window.location = "fight.html"
})