const toggle = document.querySelector('.toggle');
const ul = document.querySelector('header nav ul');

toggle.addEventListener('click', function () {
    ul.classList.toggle('show');
});

ul.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.className === 'link-item' && window.innerWidth < '768') {

        ul.classList.toggle('show');
    }

});