window.addEventListener('DOMContentLoaded', event => {
    const spans = document.querySelectorAll('#image-text span');
    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                spans[i].style.top = '0';
                spans[i].style.opacity = '1';
            }, 550 * i);
        }
    }, 800);
});