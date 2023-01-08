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


                
        let boardLaptop = [
            {img : 'ASUS Zenbook 14 OLED UX3402ZA-KM053', title : 'ASUS Zenbook 14 OLED UX3402ZA-KM053 / 1240P / 2.8K OLED DISPLAY / 경량 사무용 노트북 할인',  content : '생산성이 좋은 16:10비율 고해상도로 문서작업등 사무용으로도 쾌적하게 사용이 가능하며 600니트 밝기, HDR, 트루블랙 500 , 팬톤인증을 받은만큼 밝고 선명하고 풍성한 컬러로 동영상 컨텐츠를 감상하기에도 상당히 좋습니다.', write : '랩탑초이스   2023.01.01'}
            ,{img : '기가바이트 G5 KEz', title : '[핫딜/96만] 기가바이트 G5 KEz / RTX3060 / 12500H / 300nit / 240Hz',  content : '인텔 12세대 G5 KE모델은 디스플레이가 약간 아쉬웠는데요 KEz 모델은 300니트 밝기, sRGB 100% 색역에 240Hz 고주사율을 지원합니다. 그래픽카드 TGP는 115W로 3060 성능내는데는 충분한 수준이고 MUX 스위치도 탑재하였습니다.', write : '랩탑초이스   2023.01.02'}
            ,{img : '기가바이트 A5 K1 R5', title : '[역대가/78만] 기가바이트 A5 K1 R5 / RTX3060 / 5600H / TGP 130W / 512GB / 8GB 게이밍 노트북 할인 / 핫딜',  content : '80만원 이하에서 TGP 130W급 RTX3060제품을 구매할수 있네요! 라이젠 4세대 5600H에 디스플레이도 300니트, NTSC72, 144Hz로 준수합니다. 다만 기본램이 8GB모델이라 램 추가를 해서 사용하시는것이 좋습니다. 현재 쿠팡 기본할인+18만원 쿠폰+카드할인 적용된 가격입니다.', write : '랩탑초이스   2023.01.03'}
            ,{img : '레노버 2022 아이디어패드 플렉스 5 16IAU7', title : '[대박딜/59만] 레노버 2022 아이디어패드 플렉스 5 16IAU7 / 2 in 1 노트북 할인 / 핫딜',  content : '50만원대 가격으로16인치 대화면 2 in 1 모델을 구매 가능합니다. 16:10 비율의 생산성 좋은 멀티터치와 디지털 펜을 지원하는 디스플레이로 활용성이 좋습니다. ​ CPU가 i3모델이지만 싱글코어 성능자체는 i5나 i7모델에비해 뒤쳐지지 않습니다. (멀티태스킹을 하신다면 i5나 i7 에 램 16GB 모델도 옵션에서 선택 가능합니다)', write : '랩탑초이스   2023.01.04'}
          ]

          let reverse = boardLaptop.reverse(); // 배열 역순
  
          boardLaptop.forEach((data) => {
  
  
  let saleBoard = `  <div class="container-card-pcv">
                        <div class="content-row-pcv">
                            <div class="box-first box">
                            <img src="img/${data.img}.png">
                            </div>
                            <div class="boxOne">
                            <h5>
                                ${data.title}</h5>
                                <div class="laptop-info-tf">
                                <div class="laptop-info-tf-left">
                                    <p class="card-text">
                                        ${data.content}
                                    </p>
                                    <div class="footer-card-text">
                                        ${data.write}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>`;

                    $('.container-saleBoard').append(saleBoard);
        
                });
 
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
