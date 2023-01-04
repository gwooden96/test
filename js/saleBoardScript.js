

// 다크모드

let cnt = 0; 

let mode = document.querySelector('.mode'); 
let thead = document.querySelector('.thead');
let tbody = document.querySelector('.tbody');
let tbody1 = document.querySelector('.tbody1');
let navbarBlack = document.querySelector('.navbar-bg-bl');

mode.addEventListener('click', function(e){
  
    cnt++;
    

    if(cnt % 2 == 1) {
        document.body.style.background = 'rgb(51, 51, 51)';
        thead.style.color = "white"
        tbody.style.background = "lightgray"
        tbody1.style.background = "lightgray"
        navbarBlack.style.background = "lightgray"
        document.querySelector('.img-mode').src="img/solid-black-sun-symbol.png"

    } else {
        document.body.style.background = 'white';
        document.querySelector('.img-mode').src="img/night-mode.png"
    }
    
    e.preventDefault(); //새로고침 이벤트 막기?

});




// 팝오버 활성화
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

let popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})