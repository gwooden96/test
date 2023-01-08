function updateClock(){
    let now = new Date();
    let dname = hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";
    
        if(hou >= 12){
          pe = "PM";
        }
        if(hou == 0){
          hou = 12;
        }
        if(hou > 12){
          hou = hou - 12;
        }
  
        
        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n);
          return n;
        }
  
   
  
        let ids = ["hour", "minutes", "seconds", "period"];
        let values = [hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
  
  function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
  }
  


  
  /* 네비바 PC 맞춤형 저장 변수 */
  
  
  let navPC = `<ul>
                  <a href="saleBoard.html"><li>특가 소식</li></a><span class="nav-menu-gate">|</span>
                  <a href="QnABoard.html"><li>질문 게시판</li></a><span class="nav-menu-gate">|</span>
                  <a href="#"><li>사무용 노트북</li></a><span class="nav-menu-gate">|</span>
                  <a href="#"><li>코딩용 노트북</li></a><span class="nav-menu-gate">|</span>
                  <a href="#"><li>디자인용 노트북</li></a><span class="nav-menu-gate">|</span>
                  <a href="#"><li>게임용 노트북</li></a>
                </ul>`;
  
  let navMB = `  <div class="dropdownBox">
                  <div class="box">
                    <div class="dropdown">Button
                      <span class="left-iocn"></span>
                      <span class="right-iocn"></span>
                      <div class="items">
                        <a href="saleBoard.html"><span></span>특가소식</a>
                        <a href="QnABoard.html"><span></span>질문 게시판</a>
                        <a href="#"><span></span>사무용 노트북</a>
                        <a href="#"><span></span>코딩용 노트북</a>
                        <a href="#"><span></span>디자인용 노트북</a>
                        <a href="#"><span></span>게임용 노트북</a>
                      </div>
                    </div>
                  </div>
                </div>`;


            
 
/* 모바일 크기에 따른 변화 */


let contTbody = $('.container-tip-body');
let laptopChNav = $('.nav-menu-wrap');

const mediaViewContent = window.matchMedia(`(max-width: 986px)`)	// 1 768px

    let viewChangeHandler = (mediaViewContent) => {  					// 3
    	if(mediaViewContent.matches === true){



        $('.nav-menu-wrap').css('width', '100%')
        laptopChNav.html(navMB);

        const dropdown = document.querySelector('.dropdown');

        dropdown.addEventListener('click', () => {

        dropdown.classList.toggle('active');

        });


 
      } else {


        laptopChNav.html(navPC);


        
      }
      
    }
    viewChangeHandler(mediaViewContent);
    mediaViewContent.addEventListener("change", viewChangeHandler);                


    let boardQnA = [
        {number : '1', title : '노트북 학생 코디용으로 쓸만한거 추천해주세요', write : '김하민', writeDate : '2023-01-01', cut : '14'}
        ,{number : '2', title : '가벼운 노트북 vs 무거운 노트북 선택 고민', write : '이민호', writeDate : '2023-01-02', cut : '9'}
        ,{number : '3', title : '게이밍 노트북 뭐가 좋을까요?', write : '신유민', writeDate : '2023-01-02', cut : '5'}
        ,{number : '4', title : '노트북 화면 크기 추천부탁드려요', write : '강철두', writeDate : '2023-01-03', cut : '2'}
    ]

      let reverse = boardQnA.reverse(); // 배열 역순

      boardQnA.forEach((data) => {


let QnABoard = `<tr>
                    <td>${data.number}</td>
                    <td><a href="#">${data.title}</a></td>
                    <td>${data.write}</td>
                    <td>${data.writeDate}</td>
                    <td>${data.cut}</td>
                </tr>`;

                $('.tbody').append(QnABoard );
    
            });


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