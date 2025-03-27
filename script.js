const earth = document.querySelector(".earth");
const moon = document.querySelector(".moon");

let angleEarth = 0;
let angleMoon = 0;

function animate() {
    // Yerning Quyosh atrofida aylanishi
    let earthX = 150 * Math.cos(angleEarth) + 160; 
    let earthY = 150 * Math.sin(angleEarth) + 160; 
    earth.style.left = `${earthX}px`;
    earth.style.top = `${earthY}px`;

    // Oyning Yer atrofida aylanishi
    let moonX = 30 * Math.cos(angleMoon) + earthX; 
    let moonY = 30 * Math.sin(angleMoon) + earthY; 
    moon.style.left = `${moonX}px`;
    moon.style.top = `${moonY}px`;

    // Harakat burchaklarini yangilash
    angleEarth += 0.01; // Yerning tezligi
    angleMoon += 0.05;  // Oyning tezligi

    requestAnimationFrame(animate);
}

// Animatsiyani boshlash
animate();
