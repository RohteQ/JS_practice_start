function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    }

//esli function open modal rabotaet s modalTimerId, mi hotim poluchat ee argumentom 
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  //ctob bez prokrutki
  document.body.style.overflow = 'hidden';
  console.log(modalTimerId);

//hotim sprosit ,esli  id voobshe bil peredan to tolko v etom sluchae zapusk clearInterval
if (modalTimerId){
    clearInterval(modalTimerId);
}

  //esli polzovatel sam otkril modal wind bez nashego uchastiya ochishaem interval
  clearInterval(modalTimerId);
}
//takzhe ponadobitsya modaltimerId v kachestve argumenta tak kak ee ispolz
function modal(triggerSelector, modalSelector, modalTimerId) {
      //modal

  const modalTrigger = document.querySelectorAll(triggerSelector),
  modal = document.querySelector(modalSelector);
  //udalyaem,tk teper nado chtobi rabotalo s dinamicheskim zakrivaniem
  // modalCloseBtn = document.querySelector('[data-close]');

  //2 function
  //1-otkritie
  //2- zakritie
  //ETO ESLI NET CLASSA ESLI EST CLASS NAPRIMER modal hide
  // modalTrigger.addEventListener('click', () => {
  //     modal.classList.add('show');
  //     modal.classList.remove('hide');
  //     //ctob bez prokrutki
  //     document.body.style.overflow = 'hidden';
  // });
  // modalCloseBtn.addEventListener('click', () => {
  //     modal.classList.add('hide');
  //     modal.classList.remove('show');
  //     document.body.style.overflow = '';
  // });


  //perebiraem vse triggeri
modalTrigger.forEach(btn => {
    //cherez callback function mi obhodim vizov function pri otkritii str
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
});


      //tozhe udalyaem
  // modalCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
      //esli e.target(kuda click)  strogo sovpadaet  s modal zakrivaem modal window
      //+dobavlyaem uslovie k modal ili e.target budet krestikom,poluchaem atribut data close,esli on est na elemente zakrivaem modal okno. data-close = pustoi stroke
      if (e.target === modal || e.target.getAttribute('data-close') == '') {
         closeModal(modalSelector);
      }
  });

  //zakritie na esc/ keydown-sobitie 
  document.addEventListener('keydown', (e) => {
      //kak otslezhivat nachatie-- svoistvo code
      //chtob modal window reagirovalo na esc tolko kogda ono active
      //esli modal window sodershit class show 
      if (e.code === "Escape" && modal.classList.contains('show')) {
          closeModal(modalSelector);
      }

  });

  
  //funtion esli polzovatel dolistal str do konca pokazat modal
  //pageYoffset= prokruchenaya chast'
  //doc.docEl.clientheight= vidimaya chast kotoruu pryam vidim bez kakoi to prokrutki i esli eta konstrukciya(summa) bolshe ili ravna doc.docEl.scrollHeight=== polzovatel dolistal do konca
  function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
          openModal(modalSelector, modalTimerId);
          // remove obrabotchika sobitiya posle 1 raza dolistivaniya do konca
          window.removeEventListener('scroll', showModalByScroll);
      }
  }
  window.addEventListener('scroll', showModalByScroll);
  //dobavlyaem nastroiki k obrabotchiku sobitii-obj- once true==== rabotat ne budet tk povesili scroll na window i kak tolko 1 raz na 1 delenie prolistnuli- once true ne rabotaet
  // {once: true}
   

//______---___-----__----- ALTERNATIVA KODU SVERHU

//functia createCard poluchaet data (massive) .nachinaet ee perebirat i destrukturizirovat, sozdaet novii div pomeshyaet ego v novii class ,formiruet verstku,vo vnutr pomeshyaet svoistva kotorii prishli iz servera i appendit kartochku v kakoito element na str
// getResource('http://localhost:3000/menu')
// .then(data => createCard(data));

// function createCard(data) {
//     data.forEach(({img, altimg, title, descr, price}) => {
//         //izza togo chto net shablonizacii kak v proslom varike
//         const element = document.createElement('div');
//         element.classList.add('menu__item');
//         element.innerHTML = `
//         <img src=${img} alt=${altimg}>
//         <h3 class="menu__item-subtitle">${title}</h3>
//         <div class="menu__item-descr">${descr}</div>
//         <div class="menu__item-divider"></div>
//         <div class="menu__item-price">
//             <div class="menu__item-cost">Цена:</div>
//             <div class="menu__item-total"><span>${price}</span> грн/день</div>
//         </div>
//         `;
//         document.querySelector('menu .container').append(element);
//     });
// }



  //___--____- bolzhe ne nado 
  // new MenuCard(
  //     "img/tabs/elite.jpg",
  //     "elite",
  //      'Menu"premium"',
  //      "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
  //      14,
  //      '.menu .container'
  // ).render();
  // new MenuCard(
  //     "img/tabs/vegy.jpg",
  //     "vegy",
  //      'Menu"Fitnes"',
  //      "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
  //      9,
  //      '.menu .container'
  // ).render();
  // new MenuCard(
  //     "img/tabs/post.jpg",
  //     "post",
  //      'Menu"Posts"',
  //      "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
  //      12,
  //      '.menu .container'
  // ).render();
}
export default modal;
export {closeModal};
export {openModal};