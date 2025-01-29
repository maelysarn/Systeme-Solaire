function createStars(){
    const planet = document.querySelector("body");
    for(let i=0; i < 500; i++){
        const star1 = document.createElement("div");
        star1.className = "star1";
        star1.style.height = "2px";
        star1.style.width = "2px";

        star1.style.top =  Math.random() * 100 + "%";
        star1.style.left =  Math.random() * 100 + "%";

        planet.appendChild(star1);

        const star2 = document.createElement("div");
        star2.className = "star1";
        star2.style.height = "1px";
        star2.style.width = "1px";

        star2.style.top =  Math.random() * 100 + "%";
        star2.style.left =  Math.random() * 100 + "%";

        planet.appendChild(star2);
    }
}

createStars();

const infoBox = document.getElementById("info-box");
const planetImages = document.querySelectorAll(".planet-body"); 

planetImages.forEach(img => {
    img.addEventListener("mouseover", () => {
        const planet = img.parentElement; // parent div .planet
        const text = planet.getAttribute("data-text"); 

        infoBox.textContent = text;
        infoBox.style.opacity = "1"; 
    });

    img.addEventListener("mouseout", () => {
        infoBox.style.opacity = "0"; 
    });
});
