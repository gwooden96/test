/* 반응형 꿀팁 그리드 저장변수 */
let cardListWebNew = `<div class="accordion" id="accordionPanelsStayOpenExample">
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      'CPU'종류에 대한 팁!
    </button>
  </h2>
  <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
    <div class="accordion-body">
      <div class="content-tip-grid">
        <img src="img/tip-grid-web-New-01.png">
      </div>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      '모니터'종류에 대한 팁!
    </button>
  </h2>
  <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
    <div class="accordion-body">
      <div class="content-tip-grid">
        <img src="img/tip-grid-web-New-02.png">
      </div>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      '윈도우' 종류에 대한 팁!
    </button>
  </h2>
  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
    <div class="accordion-body">
      <div class="content-tip-grid">
        <img src="img/tip-grid-web-New-03.png">
      </div>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingFour">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
      노트북 '무게'에 대한 팁!
    </button>
  </h2>
  <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
    <div class="accordion-body">
      <div class="content-tip-grid">
        <img src="img/tip-grid-web-New-04.png">
      </div>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="panelsStayOpen-headingFive">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
      '메모리' 종류에 대한 팁!
    </button>
  </h2>
  <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
    <div class="accordion-body">
      <div class="content-tip-grid">
        <img src="img/tip-grid-web-New-05.png">
      </div>
    </div>
  </div>
</div>
</div>`;






let cardListMb = `<div class="container-tip-grid">
  <div class="box-tip-grid">
      <div class="content-tip-grid">
          <img src="img/tip-grid-mobile-01.png">
      </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-mobile-02.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-mobile-03.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-mobile-04.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-mobile-05.png">
    </div>
  </div>
  </div>`


  let cardListWeb = `<div class="container-tip-grid">
  <div class="box-tip-grid">
      <div class="content-tip-grid">
          <img src="img/tip-grid-web-New-01.png">
      </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-web-New-02.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-web-New-03.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-web-New-04.png">
    </div>
  </div>
  <div class="box-tip-grid">
    <div class="content-tip-grid">
      <img src="img/tip-grid-web-New-05.png">
    </div>
  </div>
</div>`

/* 모바일 크기에 따른 변화 */
let contTbody = $('.container-tip-body');

const mediaViewContent = window.matchMedia(`(max-width: 768px)`)	// 1

    let viewChangeHandler = (mediaViewContent) => {  					// 3
    	if(mediaViewContent.matches === true){
        //alert('모바일 사이즈 입니다.');
        contTbody.html(cardListMb);

        $('.box-tip-grid').css('border', '1px dashed lightgray');
        $('.content-tip-grid img').css('width', '100%');
      } else {
      // alert('원본 사이즈 입니다.');
        contTbody.html(cardListWebNew);
        $('.card-list').css('flex-direction', '');
        $('.box-tip-grid').css('border', '1px dashed lightgray');
        $('.content-tip-grid img').css('width', '100%');
      }
      
    }
    viewChangeHandler(mediaViewContent);
    mediaViewContent.addEventListener("change", viewChangeHandler);

  
/* 태블릿 크기에 따른 변화 */

/*미작성*/






/* 반복 되는 것 배열로 통합 구축 작업 (체크박스 구역) */

let checkbox = [
  {name : '화면 크기대', check1 : '1kg 미만', check2 : '1.0~1.5kg', check3 : '1.5~2.0kg', check4 : '2.0~'},
  {name : '무게', check1 : '17인치', check2 : '15인치', check3 : '14인치', check4 : '13인치'},
  {name : '윈도우 설치유무', check1 : '윈도우 미포함', check2 : '윈도우 11 홈', check3 : '윈도우 11 프로', check4 : '윈도우 10 홈'},
  {name : 'CPU 코어 수', check1 : '16코어', check2 : '8코어', check3 : '6코어', check4 : '4코어'},
  {name : '그래픽카드', check1 : '내장그래픽', check2 : 'RTX3070', check3 : 'RTX3060', check4 : 'RTX3050'},
]


checkbox.forEach((data) => {

  let checkboxHtml = `<div class="checkbox-title">
  <span>${data.name}</span>
</div>
<label>
  <div>
    <input type="checkbox" name="">
    <span>${data.check1}</span>
  </div>
</label>
<label>
  <div>
    <input type="checkbox" name="">
    <span>${data.check2}</span>
  </div>
</label>
<label>
  <div>
    <input type="checkbox" name="">
    <span>${data.check3}</span>
  </div>
</label>
<label>
  <div>
    <input type="checkbox" name="">
    <span>${data.check4}</span>
  </div>
</label>`;

$('.container-checkbox').append(checkboxHtml);

});


/* 반복 되는 것 배열로 통합 구축 작업(상품카드 구역) */

let laptop = [
  {title : '가성비 보급형 노트북 No.01', name : '레노버 아이디어패드 Slim1-14ALC R3', content : '라이젠 5000 시리즈 탑재한 가성비 사무용 노트북', true1 : '웹캠 가리개', true2 : '가벼운 무게', true3 : '저렴한 금액대', true4 : '준수한 배터리 용량', false1 : '터치패드 퀄리티 다소 떨어짐', false2 : '윈도우 설치 불편', false3 : '다소 아쉬운 저장장치', price : '399,000원', footerContent : '노트북 / 운영체제(OS): 미포함(프리도스) / 제조사기본상품 / 용도: 사무/인강용 , 휴대용 / 화면정보 35.5cm(14인치) / 1920x1080(FHD) / 220nit / 눈부심 방지 / 슬림형 베젤 / 프로세서 AMD / 라이젠3-4세대 / 루시엔 / 5300U (2.6GHz) / 쿼드(4)코어 / 메모리 DDR4 / 메모리 용량: 8GB / 3200MHz / 메모리 교체: 가능(1슬롯) / 저장장치 M.2(NVMe) / 128GB / 저장 슬롯: 1개 / 그래픽 내장그래픽 / Radeon Graphics / 네트워크 무선랜: 802.11ax(Wi-Fi 6) / 영상입출력 HDMI / 웹캠(HD) / 단자 USB-C: 1개 / USB-A: 2개 / USB 3.0 / USB 2.0 / SD카드 / 부가기능 TPM / 웹캠OFF 지원 / 입력장치 ㅡ형 방향키 / 파워 배터리: 42Wh / 어댑터: 65W / 충전단자: DC / 주요제원 두께: 17.9mm / 무게: 1.38kg / 색상: 그레이'}
  ,{title : '가성비 중급형 노트북 No.02', name : '레노버 아이디어패드 Slim3-15IAU7 5D', content : '인텔 최신 CPU 탑재한 고성능 사무&작업용 노트북', true1 : '웹캠 가리개', true2 : '나름 가벼운 무게', true3 : '많은 코어 수', true4 : '준수한 배터리 용량', false1 : '터치패드 퀄리티 다소 떨어짐', false2 : '아쉬운 배터리 용량', false3 : '-', price : '599,000원', footerContent : '노트북 / 운영체제(OS): 미포함(프리도스) / 구성변경상품 / 용도: 사무/인강용 / 화면정보 39.62cm(15.6인치) / 1920x1080(FHD) / NTSC: 45% / 300nit / IPS / 눈부심 방지 / 광시야각 / 슬림형 베젤 / 프로세서 인텔 / 코어i5-12세대 / 엘더레이크 / i5-1235U (1.3GHz) / 10코어(2P+8E) / 메모리 DDR4 / 메모리 용량: 16GB / 3200MHz / 메모리 교체: 가능(1슬롯) / 저장장치 M.2(NVMe) / 256GB / 저장 슬롯: 2개 / 그래픽 내장그래픽 / Iris Xe / 네트워크 무선랜: 802.11ax(Wi-Fi 6) / 영상입출력 HDMI / 웹캠(HD) / 단자 USB-C: 1개 / USB-A: 2개 / USB 3.0 / USB 2.0 / SD카드 / 부가기능 웹캠OFF 지원 / 입력장치 키보드 라이트 / ㅡ형 방향키 / 숫자 키패드(4열) / 파워 배터리: 38Wh / 충전단자: DC / 주요제원 두께: 19.9mm / 무게: 1.63kg / 색상: 그레이, 블루'}
  ,{title : '가성비 중급형 노트북 No.03', name : 'LG전자 울트라PC 엣지 14UD70Q-GX50K', content : 'LG 고성능 사무&작업용 노트북', true1 : 'USB-PD 기능 탑재(C타입 충전가능)', true2 : '가벼운 무게', true3 : '배터리 용량이 커 충전없이 오래 사용 가능', true4 : '고성능 사무용 성능', false1 : '아쉬운 화면 크기 14인치', false2 : '메모리 추가 불가능', false3 : '-', price : '649,000원', footerContent : '노트북 / 운영체제(OS): 미포함(프리도스) / 제조사기본상품 / 용도: 사무/인강용 , 휴대용 / 화면정보 35.5cm(14인치) / 1920x1200(WUXGA) / IPS / 안티글레어 / 광시야각 / 슬림형 베젤 / 프로세서 AMD / 라이젠5-4세대 / 바르셀로 / 5625U (2.3GHz) / 헥사(6)코어 / 메모리 LPDDR4x(온보드) / 메모리 용량: 8GB / 4266MHz / 메모리 교체: 불가능 / 저장장치 M.2(NVMe) / 256GB / 저장 슬롯: 2개 / 그래픽 내장그래픽 / Radeon Graphics / 네트워크 무선랜: 802.11ax(Wi-Fi 6) / 영상입출력 HDMI / 웹캠(HD) / 단자 USB-C: 1개 / USB-A: 2개 / USB 3.2 / MicroSD카드 / 부가기능 USB-PD / 입력장치 ㅗ형 방향키 / 파워 배터리: 72Wh / 어댑터: 65W / 충전단자: DC / 주요제원 두께: 16.3mm / 무게: 1.29kg / 색상: 그레이'}
  ,{title : '가성비 중급형 노트북 No.03', name : 'LG전자 울트라PC 엣지 14UD70Q-GX50K', content : 'LG 고성능 사무&작업용 노트북', true1 : 'USB-PD 기능 탑재(C타입 충전가능)', true2 : '가벼운 무게', true3 : '배터리 용량이 커 충전없이 오래 사용 가능', true4 : '고성능 사무용 성능', false1 : '아쉬운 화면 크기 14인치', false2 : '메모리 추가 불가능', false3 : '-', price : '649,000원', footerContent : '노트북 / 운영체제(OS): 미포함(프리도스) / 제조사기본상품 / 용도: 사무/인강용 , 휴대용 / 화면정보 35.5cm(14인치) / 1920x1200(WUXGA) / IPS / 안티글레어 / 광시야각 / 슬림형 베젤 / 프로세서 AMD / 라이젠5-4세대 / 바르셀로 / 5625U (2.3GHz) / 헥사(6)코어 / 메모리 LPDDR4x(온보드) / 메모리 용량: 8GB / 4266MHz / 메모리 교체: 불가능 / 저장장치 M.2(NVMe) / 256GB / 저장 슬롯: 2개 / 그래픽 내장그래픽 / Radeon Graphics / 네트워크 무선랜: 802.11ax(Wi-Fi 6) / 영상입출력 HDMI / 웹캠(HD) / 단자 USB-C: 1개 / USB-A: 2개 / USB 3.2 / MicroSD카드 / 부가기능 USB-PD / 입력장치 ㅗ형 방향키 / 파워 배터리: 72Wh / 어댑터: 65W / 충전단자: DC / 주요제원 두께: 16.3mm / 무게: 1.29kg / 색상: 그레이'}



]


laptop.forEach((data) => {

  let listCard =  `<div class="card" style="width: 22rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-title">${data.title}</li>
        </ul>
        <img src="img/${data.name}.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">
            <P class="card-content-title">${data.content}</P>
            <P class="card-content-true">장점</P>
            <ul class="ture-list">
              <li>${data.true1}</li>
              <li>${data.true2}</li>
              <li>${data.true3}</li>
              <li>${data.true4}</li>
            </ul>
            <P class="card-content-false">단점</P>
            <ul class="ture-list">
              <li>${data.false1}</li>
              <li>${data.false2}</li>
              <li>${data.false3}</li>
            </ul>
          </p>
        </div>
        <ul class="list-group list-group-flush card-img-foorter">
          <img src="img/${data.title}.png">
        </ul>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">금액 : ${data.price}</li>
          </ul>
        <div class="card-body">
          <button type="button" class="btn btn-lg btn-danger">구매링크</button>
          <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="노트북 사양" data-bs-content="${data.footerContent}">제품상세정보 보기</button>
        </div>`;

        $('.card-list').append(listCard);

});



// 다크모드

// let cnt = 0; 

// let mode = document.querySelector('.mode'); 

// mode.addEventListener('click', function(){
//     cnt++;
//     console.log(cnt);


//     if(cnt % 2 == 1) {
//         document.body.style.background = 'black';
//         document.querySelector('.container-tip-body-main').style.blackground = '';
//         document.querySelector('.img-mode').src="img/solid-black-sun-symbol.png"


//     } else {
//         document.body.style.background = 'white';
//         document.querySelector('.img-mode').src="img/night-mode.png"
//     }


// });




// 팝오버 활성화
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

let popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})