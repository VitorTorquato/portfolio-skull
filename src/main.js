const btnSubmit = document.getElementById('btnSubmit');
const btnHamburguer = document.querySelector('.hamburguer');
//Elements

window.onload = function () {
    window.addEventListener("scroll", function (e) {
        if (window.scrollY > 100) {
            document.querySelector('header').classList.add('is-scrolling');
        } else {
            document.querySelector('header').classList.remove('is-scrolling');
        }
    });
    
    btnHamburguer.addEventListener('click' ,(e) => {
        
        e.preventDefault();
        
        btnHamburguer.classList.toggle('is-active');
        document.querySelector('.mobile-nav').classList.toggle('is-active')
        
    })

    btnSubmit.addEventListener('click' , (e) => {
        e.preventDefault();
    })
};

