const openBtn = document.querySelector('.button-spec-open');
const closeBtn = document.querySelector('.button-spec-close');
const offcanvasMenu = document.querySelector('.offcanvas-menu');

openBtn.addEventListener('click', function(e) {
  e.preventDefault();
  offcanvasMenu.classList.add('active');

});

closeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  offcanvasMenu.classList.remove('active');

});



laptop.forEach((dataCard) => {

  let listCardWeb = `<div class="container-card-pcv">
                      <div class="content-row-pcv">
                        <div class="box-first box">
                          <p class="box-title-text">${dataCard.title}</p>
                          <img src="${dataCard.name}.png">
                        </div>
                        <div class="boxOne box">
                          <h5>${dataCard.name}</h5>
                          <p class="card-text">${dataCard.content}</p>
                        </div>
                        <div class="boxTwo box">
                          <ul>
                            <p class="card-text-true">장점</p>
                            <li class="box-nav-item">${dataCard.true1}</li>
                            <li class="box-nav-item">${dataCard.true2}</li>
                            <li class="box-nav-item">${dataCard.true3}</li>
                            <li class="box-nav-item">${dataCard.true4}</li>
                          </ul>
                          <ul>
                            <p class="card-text-false">단점</p>
                            <li class="box-nav-item">${dataCard.false1}</li>
                            <li class="box-nav-item">${dataCard.false1}</li>
                            <li class="box-nav-item">${dataCard.false1}</li>
                          </ul>
                        </div>
                        <div class="boxFour box">
                          <img src="${dataCard.title}.png">
                        </div>
                        <div class="boxFive box">
                          <p class="card-text">금액 :</p>
                          <p class="card-text">${dataCard.price}</p>
                        </div>
                        <div class="boxSix box">
                          <div>
                            <button type="button" class="btn-size">구매링크</button>
                          </div>
                          <div>
                            <button type="button" class="btn-size">상세스펙 보기</button>
                          </div>
                        </div>
                      </div>`;
  
                $('.container-card-pcv').append(listCardWeb);
  
      });
  