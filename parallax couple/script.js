/*document.addEventListener("mousemove", (e) => {
    document.querySelectorAll('.img').forEach(img => {
        const speed = img.getAttribute('data');
        const yAxis = (window.innerHeight - e.pageY * speed) / 100;
        const xAxis = (window.innerWidth - e.pageX * speed) / 100;
        img.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
    });
});
*/
// Parallax effect for images
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll('.img').forEach(img => {
        const speed = img.getAttribute('data');
        const yAxis = (window.innerHeight - e.pageY * speed) / 100;
        const xAxis = (window.innerWidth - e.pageX * speed) / 100;
        img.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
    });
});

// Typed.js initialization for the typing effect
var typed = new Typed('#typed-output', {
    strings: ["It had to be", "YOU!!!"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

