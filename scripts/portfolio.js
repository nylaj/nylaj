
// Portfolio Items
//Site
const site = document.getElementById("mySite");
site.addEventListener("click", (e) => {
    console.log(e);
    window.location.href = "./home.html";
})

//Github
const github = document.getElementById("myGithub");
github.addEventListener("click", (e) => {
    console.log(e);
    window.location.href = "https://github.com/nylaj";
})

const housePrices = document.getElementById("housePrices");
housePrices.addEventListener("click", (e) => {
    console.log(e);
    window.location.href = "https://github.com/groupgiteight/Predicting-House-Prices";
})

const php = document.getElementById("PHP");
php.addEventListener("click", (e) => {
    console.log(e)
    window.location.href = "https://github.com/nylaj/gamedatabase";
})