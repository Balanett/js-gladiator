const form = document.querySelector("form")
const chooseBtn = document.getElementById("chooseBtn")

chooseBtn.addEventListener("click", event => {
    event.preventDefault();
    let chosenGlad = form.glad.value
    let chosenWeapon = form.weap.value
    console.log(chosenGlad, chosenWeapon)
})