let menus = document.querySelector(".navbar");
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");

menus_btn.addEventListener("click", function () {
  menus.classList.add("active2");
});

close_btn.addEventListener("click", function () {
  menus.classList.remove("active2");
});


const lenis = new Lenis()
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// Mouse Follow

let circleElement = document.querySelector(".circle");

const mouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.175;

const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

    circleElement.style.transform = `${translateTransform}`;

    window.requestAnimationFrame(tick);
};

tick();


// Animations

let header = document.getElementById("header");

window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        header.classList.add("head__scrolled")
    } else {
        header.classList.remove("head__scrolled")
    }
})

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});
