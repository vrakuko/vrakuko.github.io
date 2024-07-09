function showNavbar() {
    const navbar = document.querySelector('#navbar');
    const computedStyle = getComputedStyle(navbar);

    if (computedStyle.display === 'none') {
        navbar.style.display = 'inline-flex';
    } else {
        navbar.style.display = 'none';
    }
}
