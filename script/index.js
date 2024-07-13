function showNavbar() {
    const navbar = document.querySelector('#navbar');
    const computedStyle = getComputedStyle(navbar);
    const coner = document.querySelector('#container');

    if (computedStyle.display === 'none'||computedStyle.display === '') {
        navbar.style.display = 'flex';
        coner.style.display = 'none';
    } else {
        navbar.style.display = 'none';
        coner.style.display = 'block';
    }
}


function aboutclicked() {
   
    const navbar = document.querySelector('#navbar');
    const coner = document.querySelector('#container');
    
    const computedStyle = getComputedStyle(navbar);

    if (computedStyle.display === 'none' || computedStyle.display === '') {
        navbar.style.display = 'flex';
        coner.style.display = 'none';
    } else {
        navbar.style.display = 'none';
        coner.style.display = 'block';
    }

    document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
}

// function scrolll() {
//     var opener = document.getElementById('opener');
//     var navbar = document.getElementById('navbar');
//     var html= document.html;
    
//     if (window.scrollY > opener.offsetHeight) {
//         // Mengubah warna body mengikuti navbar saat scroll melewati opener
//         // body.style.backgroundColor = '#524094'; // Warna sama dengan navbar
//         body.style.color = 'white'; // Contoh, mengubah warna teks
//     } else {
//         // Mengembalikan warna body mengikuti opener jika belum melewati opener
//         // body.style.backgroundColor = '#7fffd4'; // Warna sama dengan opener
//         body.style.color = 'black'; // Contoh, mengubah warna teks
//     }
// }

