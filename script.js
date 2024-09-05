document.addEventListener("scroll", function() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');

    if (window.scrollY > 200) {
        header.classList.add('discord');
        sections.forEach(section => {
            section.classList.toggle('discord', window.scrollY > section.offsetTop);
        });
    } else {
        header.classList.remove('discord');
        sections.forEach(section => {
            section.classList.remove('discord');
        });
    }
});
