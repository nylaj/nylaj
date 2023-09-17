const form = document.getElementById("contactMe");
const submitButton = document.getElementById("submitButton");
const picture = document.querySelector("img");
let counter = 0;


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Form sent!");
    form.remove();
})


picture.addEventListener("click", (e) => {
    if (counter >= 25) {
    picture.src = "./img/pics/secret.jpg";
    } else {
        counter += 1;
    }
})