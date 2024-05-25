document.addEventListener('DOMContentLoaded', () => {
    let sections = document.querySelectorAll('section');
    let currentSection = 0;

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSection = index;
    }

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0 && currentSection < sections.length - 1) {
            scrollToSection(currentSection + 1);
        } else if (event.deltaY < 0 && currentSection > 0) {
            scrollToSection(currentSection - 1);
        }
    });
});
document.getElementById("enterButton").addEventListener("click", function() {
    window.location.href = "main.html"; // Rediriger vers la page principale
});
