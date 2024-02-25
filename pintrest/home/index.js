let texts = ["weeknight dinner idea", "home decor idea", "new look outfit", "green thumb idea"]; // Array of texts to be displayedlet 
let colors = ["rgb(194, 139, 0)", "rgb(97, 140, 123)", "rgb(0, 118, 211)", "rgb(64, 122, 87)"]; 
let currentIndex = 0; // Index to keep track of the current text


let runAnimation = () => {
    let animation = document.querySelector('.decor-txt');
    let dots = document.querySelectorAll(`.dot`)
    animation.classList.remove('slide-top');
    void animation.offsetWidth;
    animation.classList.add('slide-top');

    // Change text content after animation
    setTimeout(() => {
        let colorIndex = Math.floor(Math.random() * colors.length)
        let color = colors[colorIndex]
        animation.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
        animation.style.color = color
        
        dots.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.backgroundColor = color;
            }, index * 200);
        })

        currentIndex = (currentIndex + 1) % texts.length
    }, 0.9); // Adjusted to match the animation duration
}

let startAnimation = () => {
    runAnimation()
    setInterval(runAnimation, 4000); // Adjusted to match the animation duration
}

startAnimation()