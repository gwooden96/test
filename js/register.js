// 정규식 조건
const regexId = /^\w{8,20}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;


      // const regexid = /^\w{8,20}$/;
      // const regexpw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
      // const regexemail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
      // const regexphone = /^\d{2,3}-\d{3,4}-\d{4}$/;



// 올바르게 입력했는지를 저장해주는 변수들
let isId = false;
let isPw = false;
let isEmail = false;
let isPhone = false;


      // let isid = false;
      // let ispw = false;
      // let isemail = false;
      // let isphone = false;


//버튼들
const idBtn = document.querySelector('#id_confirm');
const pwBtn = document.querySelector('#pw_confirm');
const emailBtn = document.querySelector('#email_confirm');
const phoneBtn = document.querySelector('#phone_confirm');


// 유효성 검사 후 결과를 표시해주는 p태그들
let idCheck = document.querySelector('.id_input_check');
let pwCheck = document.querySelector('.pw_input_check');
let emailCheck = document.querySelector('.email_input_check');
let phoneCheck = document.querySelector('.phone_input_check');





/* 리펙토링 */

// 아이디
idBtn.addEventListener('click', function(event) {

  let val = document.querySelector('#id_txt').value;
  event.preventDefault();


  isId = regexId.test(val);
  showMsg(isId, idCheck);
});


// 비번
pwBtn.addEventListener('click', function(event) {

  let val = document.querySelector('#pw_txt').value;
  event.preventDefault();


  isPw = regexPw.test(val);
  showMsg(isPw, pwCheck);
});



// 이메일
emailBtn.addEventListener('click', function(event) {

  let val = document.querySelector('#email_txt').value;
  event.preventDefault();


  isEmail = regexMail.test(val);
  showMsg(isEmail, emailCheck);
});



// 전화번호
phoneBtn.addEventListener('click', function(event) {

  let val = document.querySelector('#phone_txt').value;
  event.preventDefault();


  isPhone = regexTel.test(val);
  showMsg(isPhone, phoneCheck);
});





//if문 공통 부분 통합
function showMsg(isX, xCheck) {
  if(isX) {
    xCheck.innerHTML = "사용가능";
    xCheck.style.color = 'green';
  } else {
    xCheck.innerHTML = "불가능";
    xCheck.style.color = 'red';
  }
  isTrue();
}



// 버튼 함수 공통 부분 통합
function isTrue() {
  if(isId && isPw && isEmail && isPhone) {
    document.querySelector('.reg_req_btn').style.background = 'blue';
  }
}