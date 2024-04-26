let body = document.querySelector(body);
let sun__btn = document.querySelector('.sun__btn');
let moon__btn = document.querySelector('.moon__btn');

sun__btn.addEventListener('click', function(){
    body.classList.toggle('dark');
})

moon__btn.addEventListener('click', function(){
    body.classList.toggle('dark');
})

