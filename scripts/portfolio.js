
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

//housePrices link
const housePrices = document.getElementById("housePrices");
housePrices.addEventListener("click", (e) => {
    console.log(e);
    window.location.href = "https://github.com/groupgiteight/Predicting-House-Prices";
})

//PHP link
const php = document.getElementById("PHP");
php.addEventListener("click", (e) => {
    console.log(e)
    window.location.href = "https://github.com/nylaj/gamedatabase";
})

//filmflix link
const pysql = document.getElementbyId("PyQL");
pysql.addEventListener("click", (e) => {
	console.log(e)
	window.location.href = "https://github.com/nylaj/filmflixdb";
})
