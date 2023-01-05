let loginSnsList = $('.loginSns-list');
let loginSnsListDiv = $('.loginSns-list div');
let footerImg = $('#footer img');

const mediaViewContent = window.matchMedia(`(max-width: 768px)`)	// 1

    let viewChangeHandler = (mediaViewContent) => {  					// 3
    	if(mediaViewContent.matches === true){
        //alert('모바일 사이즈 입니다.');
        $('#container').css('width', '400px'); 
        $('.headerImg').css('width', '100%'); 
        $('#wrapper').css('padding', '30px 100px 100px 100px'); 

        $('.serchWrap a').css('font-size', '5px').css('margin', '0px');

        loginSnsList.css('display', 'block');
        loginSnsListDiv.css('width', 'auto'); 
        loginSnsListDiv.css('margin-bottom', '30px').css('margin-top', '20px'); 

        footerImg.css('width', '30%');



      } else {
      // alert('원본 사이즈 입니다.');
      $('#container').css('width', '700px'); 
      $('.headerImg').css('width', '50%'); 
      $('#wrapper').css('padding', '100px'); 

      $('.serchWrap a').css('font-size', '15px').css('margin', '0 15px');

      loginSnsList.css('display', 'flex');
      loginSnsListDiv.css('width', '25%'); 
      loginSnsListDiv.css('margin-top', '20px'); 


      footerImg.css('width', '30%');

      }
      
    }
    viewChangeHandler(mediaViewContent);
    mediaViewContent.addEventListener("change", viewChangeHandler);
