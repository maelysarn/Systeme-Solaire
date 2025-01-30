function createStars(){
    const body = document.querySelector("body");
    for(let i=0; i < 500; i++){
        const star1 = document.createElement("div");
        star1.className = "star";
        star1.id = "star1";
        star1.style.height = "1px";
        star1.style.width = "1px";

        star1.style.top =  Math.random() * 100 + "%";
        star1.style.left =  Math.random() * 100 + "%";

        body.appendChild(star1);

        const star2 = document.createElement("div");
        star2.className = "star";
        star2.id = "star2";
        star2.style.height = "1px";
        star2.style.width = "1px";

        star2.style.top =  Math.random() * 100 + "%";
        star2.style.left =  Math.random() * 100 + "%";

        body.appendChild(star2);
    }
}

createStars();

const infoBox = document.getElementById("info-box");
const planets = document.querySelectorAll(".planet"); 

planets.forEach(img => {
    img.addEventListener("mouseover", () => {
        const text = img.getAttribute("data-text"); 

        infoBox.textContent = text;
        infoBox.style.opacity = "1"; 
    });

    img.addEventListener("mouseout", () => {
        infoBox.style.opacity = "0"; 
    });
});
