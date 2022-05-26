/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
  //Calculate calories
  const result = document.querySelector('.calculating__result span'); //ispolzuem dannie esli oni est' v localStorage
  //izza baga (t.k net nachalnogo znacheniya a class activnosti na nih est' poluchaetsa bag kogda ne raschitivaets) dobavlyaem bazovoe znachenie

  let sex = "female",
      height,
      weight,
      age,
      ratio = 1.375;

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = "female";
    localStorage.setItem('sex', 'female');
  }

  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = "1.375";
    localStorage.setItem('ratio', '1.375');
  } //function po opredeleniu kakaya knopka active iz localStorage


  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      elem.classList.remove(activeClass);

      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }

      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSettings('#gender div', 'calculating__choose-item_active');
  initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '____';
      return;
    }

    if (sex === "female") {
      result.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
    } else {
      result.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    }
  }

  calcTotal();

  function getStaticInfo(selector, activeClass) {
    //vnutri roditelya vse divi poluchaem
    const elements = document.querySelectorAll(selector); //izza baga (nazhatoe mezdu knopkami),vmesto naveshivania obrabotchik na roditelya veshaem na kazdii element 

    elements.forEach(elem => {
      elem.addEventListener('click', e => {
        //esli polzovatel klick na umerennuu activnost' mi vzyali i vitashili activnost v data atribute
        //CALCTOTAL vizivaem kazdii raz neskolko raz v konce kazdoi fu-ii
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio'); //localStorage

          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }

        elements.forEach(elem => {
          elem.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  getStaticInfo('#gender div', 'calculating__choose-item_active');
  getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');

  function getDynamicInfo(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {
        input.style.border = '1px solid red';
      } else {
        input.style.border = 'none';
      } //switch case- sootvetstvie stroki
      //kogda chtoto vvodim  orientir na id  i zapis v opred peremennuu


      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;

        case 'weight':
          weight = +input.value;
          break;

        case 'age':
          age = +input.value;
          break;
      }

      calcTotal();
    });
  }

  getDynamicInfo('#height');
  getDynamicInfo('#weight');
  getDynamicInfo('#age');
} //bolee sloznii variant slider
//v html vse slaidi obernuli v eshe odnu obertku,eto tipo okoshka cherez kotoroe mi vidim slaid
//est' bolshaya oberka kak slider-wrapper - svoistvo overflow hidden-vse chto ne podhodit pod shirinu bloka-skrito
//slidder inner- block v vide karuseli zaimet stolko mesta skolko slaidov v shirinu - 4 slide-400% ot 1 slide na str-toest peredvigaem po otnosheniu wrapper
//PROstoi variant slider
//         showSlides(slideIndex);
// if (slides.length < 10) {
//     total.textContent = `0${slides.length}`;
// }
// else {
//     total.textContent = slides.length;
// }
//         function showSlides(n) {
//             //proveryaem poslednuu granicu(bolshe chem kolvo slides voobshe)
//             if (n > slides.length) {
//                 slideIndex = 1;
//             }
//             if (n < 1) {
//                 //peremeshyaem index v konec
//                 slideIndex = slides.length;
//             }
// //scrili vse slides(inline stili) mozno s pomoshu classov
//             slides.forEach(item => item.style.display = 'none');
//             slides[slideIndex - 1].style.display = 'block';
//             if (slides.length < 10) {
//                 current.textContent = `0${slideIndex}`;
//             }
//             else {
//                 current.textContent = slideIndex;
//             }
//         }
//         function plusSlides(n) {
//             showSlides(slideIndex += n );
//         }
//         prev.addEventListener('click', () => {
//             plusSlides(-1);
//         });
//         next.addEventListener('click', () => {
//             plusSlides(1);
//         });


/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price; //classes = massive

      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }

      this.classes = classes; //v parent lezhit DOM element

      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');

      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        //t.k classes massiv prohodim po kazdomu elementu i vitaskivaeem ih
        //element=novosozdanii div.obrashaemsya c ego classlist i dobavlyaem kazdii class nahodyashiisya  v massive
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `        
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
      this.parent.append(element);
    }

  } //vinosim getResource v servises
  //pri pomoshi server zaprosa poluchyaem massiv s objs,massiv pereberaem forEach i obj kotorii vnutri destrukturiziruem po otdelnim chastam i ih peredaem constructoru(classu),kotorii sozdaet novuu kartochku na str i renderit ee 
  //___---____-__--__- ispolzuem bibleoteku vmesto koda snizu 
  // getResource('http://localhost:3000/menu')
  // .then(data => {
  //     data.forEach(({img, altimg, title, descr, price}) => {
  //         //konstuctor stolko raz sozdaetcya skolko obj vnutri massiva kotorii idet ot servera
  //         //+sintahis destrukturizacii obj
  //         //.menu . container -roditel kuda pushim
  //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
  //     });
  // });
  //vmesto axios.get etot eblan isp getResource


  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu').then(data => {
    data.forEach(_ref => {
      let {
        img,
        altimg,
        title,
        descr,
        price
      } = _ref;
      new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function forms(formSelector, modalTimerId) {
  //FORMS
  //nado vzyat' formi iz nih otpravlyta dannie na server  
  //vinosim selector 'form' kak argument-teper formSelector 
  const forms = document.querySelectorAll(formSelector); //soobsheniya posle otpravki

  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Spasibo,Skoro svyashemsya',
    failure: 'choto ne tak'
  }; //kazdoi forme podvyazivaem function postData

  forms.forEach(item => {
    bindPostData(item);
  }); //____--- do sozdaniya f-i postData
  //postdata budet otvechat za post dannih
  //function exspression uzayem (v potoke koda fi= viglayadit klak prisvaivanie peremennoi)
  //nastraivaet zapros
  //s pomoshuu async govorim chto vnutri async code
  //teper postData v services 
  //function posting dannih, prinimaet v sebya formu
  //__-__bilo f-i postdata
  //teper fi otvechyaet za privyazku postinga

  function bindPostData(form) {
    form.addEventListener('submit', e => {
      //ctobi otmenit standart povedenie brausera mi dolszni postavit e v skobki a adlshe e.preventdefault
      e.preventDefault(); //sozdaem dinamisheckii block na str i vivodim sooomshenie kartinku i td
      //izza kartinki v loading vmesto div img
      //sozdali izobr

      let statusMessage = document.createElement('img'); //udalyaem class tk ego ne sushestvovalo i et nepravilno
      // statusMessage.classList.add('status');
      //podstavili atribut src kotorii polushaem iz str 257( loading)

      statusMessage.src = message.loading; //kak tolko proizoshel submit
      // statusMessage.textContent = message.loading;
      //delaem izobr css stily s pomochu cssText(stili inline)

      statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;`; //k forme dobavim soobshenie 
      //izze insertAdjacentElement sled stroka ne nuzna
      // form.append(statusMessage);
      //kuda vstavlyaem element i kakoi element vstavlyaem

      form.insertAdjacentElement('afterend', statusMessage); //+MI ISPOLZUEM FETCH API VMESTO XMLHTTPREQUEST 
      //Peremeshyaem fetch v drugoe mesto
      // const request = new XMLHttpRequest();
      //vsegda posle request metod open ctobi nastroit zapros vnutr nuzhnie dannie s kotorimi rabotaem
      // request.open('POST', 'server.php');
      //form- otkuda mi pomeshyaem dannie v formdata]
      //nastraivaem zagolovki kotorie govoryat servereu chto imenno prihodit
      //KOGDA ISPOLZ SCYAZKU XTMHTTPRequest obj + FormDaata ne nado ustanavlivat' zagolovok.on ust avt
      //iza sled stroki server ne poluchil danie 
      // request.setRequestHeader('Content-type', 'multipart/form-data');
      //NO ESLI NADO OTPRRAVIT NA BACKEND V FORMATE JSON a ne FORMDATA 
      //+ FETCH ,v headers pihaem content type
      // request.setRequestHeader('Content-type', 'application/json');
      //verstalshik v forme dolzhen ukazat u inputa name !!!!!

      const formData = new FormData(form); //est' obj formdata kotorii nado v json
      //  const object = {};
      // formData.forEach(function(value, key){
      //     object[key] = [value];
      // });
      //__-__ bolee eleganto formData  v json
      //metod entries vozrashyaet massiv sobstvennih perechislyaemih svoistv  u ukazzannogo obj
      //obvolakivaem s skobki i iz massiva massivov entries delaem obichii obj formentries metod
      //__--__- esli naglyadno berem formData  ee prevrashyaem v massiv massivov  chtobi normalno s nei rabotat  posle v classicheskii obj prevrashyaem  a pozhe classicheskii obj prevrashyaem v json

      const json = JSON.stringify(Object.fromEntries(formData.entries())); //konvertiruem objv json
      //+etot obj json mi peredaem v body
      // const json = JSON.stringify(object);
      //otpravlyaem dannie .v skobkah chto imenno otpravlyaem
      // request.send(formData)
      //json pomeshyaem vmesto formData
      // request.send(json);'
      // fetch('server.php', {
      //     method: "POST",
      //     headers: {
      //         'Content-type':'application/json'
      //     },
      //     //vmesto formadata JSON.stringify(object);
      //     body: JSON.stringify(object)          
      //        })
      //__-__ispolzuem POSTDATA
      //prosto berem otpravlyaem json na server

      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json) //modificiruem otvet chtob prishli te dannie kotorie vveeli
      //ubiraem next str  tk tranbsform ne nuznha bolshe
      // .then(data => data.text())
      //obrabativaem rezultat zaprosa
      .then(data => {
        //data-dannie iz promise.kotorie vernul server
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      }); //dannie ushli na server teper' chtoto delaem
      //  request.addEventListener('load', () => {
      //      if (request.status === 200) {
      //          console.log(request.response);
      //          //esli vse ok prishglo to soobhenie
      //          //vmesto statusMessage isp modal,tozhe samoe s blokom else
      //         // - statusMessage.textContent = message.success;
      //         showThanksModal(message.success);
      //          //ochishaem formu 
      //          form.reset();
      //         //udalyaem block 
      //         //+osvobozhdaem statusMessage remove ot setTimeout potomuchto status message tolko dlya loading dlya spinnera kotorii budet na str
      //         // -setTimeout(() => {
      //         statusMessage.remove();
      //         // }, 2000);
      //      } else {
      //         showThanksModal(message.failure);
      //         // -statusMessage.textContent = message.failure;
      //      }
      //  });
    });
  } //sozdaem blagodarnost posle otpravki
  //+peredaem soobhenie kak argument
  //message berem iz obj = const message


  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog'); //skrivaem content pered tem kak pokazat modal

    prevModalDialog.classList.add('hide'); //otkrivaem class modal i dobavlyaem show

    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId); //sozdaem novii content

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog'); //formiruem verstku kotoraya v modal dialog

    thanksModal.innerHTML = `
            <div class="modal__content">
                    <div class="modal__close" data-close>×
                </div>
                    <div class="modal__title">${message}</div>
            </div>`; //pomestit na str
    //poluchaem modal i append block

    document.querySelector('.modal').append(thanksModal); //esli polzovatel zahochet snova otrkit' modal vse shlo zanogo

    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
    }, 4000);
  } //obrashaemsya k 'bd'
  //podstavlyaem adres json servera vmesto puti k failu 'db.json' tem samim polychyaa ne obj a massiv


  fetch('http://localhost:3000/menu') //berem otvet data i prevrashayem v JS obj
  .then(data => data.json()).then(res => console.log(res));
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; },
/* harmony export */   "openModal": function() { return /* binding */ openModal; }
/* harmony export */ });
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
} //esli function open modal rabotaet s modalTimerId, mi hotim poluchat ee argumentom 


function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide'); //ctob bez prokrutki

  document.body.style.overflow = 'hidden';
  console.log(modalTimerId); //hotim sprosit ,esli  id voobshe bil peredan to tolko v etom sluchae zapusk clearInterval

  if (modalTimerId) {
    clearInterval(modalTimerId);
  } //esli polzovatel sam otkril modal wind bez nashego uchastiya ochishaem interval


  clearInterval(modalTimerId);
} //takzhe ponadobitsya modaltimerId v kachestve argumenta tak kak ee ispolz


function modal(triggerSelector, modalSelector, modalTimerId) {
  //modal
  const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector); //udalyaem,tk teper nado chtobi rabotalo s dinamicheskim zakrivaniem
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
  }); //tozhe udalyaem
  // modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    //esli e.target(kuda click)  strogo sovpadaet  s modal zakrivaem modal window
    //+dobavlyaem uslovie k modal ili e.target budet krestikom,poluchaem atribut data close,esli on est na elemente zakrivaem modal okno. data-close = pustoi stroke
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  }); //zakritie na esc/ keydown-sobitie 

  document.addEventListener('keydown', e => {
    //kak otslezhivat nachatie-- svoistvo code
    //chtob modal window reagirovalo na esc tolko kogda ono active
    //esli modal window sodershit class show 
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  }); //funtion esli polzovatel dolistal str do konca pokazat modal
  //pageYoffset= prokruchenaya chast'
  //doc.docEl.clientheight= vidimaya chast kotoruu pryam vidim bez kakoi to prokrutki i esli eta konstrukciya(summa) bolshe ili ravna doc.docEl.scrollHeight=== polzovatel dolistal do konca

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelector, modalTimerId); // remove obrabotchika sobitiya posle 1 raza dolistivaniya do konca

      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll); //dobavlyaem nastroiki k obrabotchiku sobitii-obj- once true==== rabotat ne budet tk povesili scroll na window i kak tolko 1 raz na 1 delenie prolistnuli- once true ne rabotaet
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

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//ispolzuem destructurizaciu dlya vozmoznogo dalneishego primeneniya i izm slider
//container -- slider = document.querySelector('.offer__slider')-glavn slider
//slide -arugment kazxdogo otdelnogo slaida- slides = document.querySelectorAll('.offer__slide'),
function slider(_ref) {
  let {
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field
  } = _ref;
  //SLIDER
  const slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        //s pomoshu computed styles poluchaem width okna
  width = window.getComputedStyle(slidesWrapper).width; //opredelyaem index tekushego polozheniya slider

  let slideIndex = 1; //chobi ponimat' naskolko mi otstupili vpravo ili vlevo

  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  } //ustanavlivaem shirinu ,kolvo slaidov  umnozhaem na 100 % ,delaetsa dlya ppomesheniya vseh slaidov na str v slidesField i oni u nas polnosnu pomeshalis'


  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all'; //ogranishivaem pokaz elementov vnutri wrapper

  slidesWrapper.style.overflow = 'hidden'; //vse slaidi izza vozmozhnogo otloichiya ih razmerov

  slides.forEach(slide => {
    //kazdomu slide ustanovim shirinu
    slide.style.width = width;
  });
  slider.style.position = 'relative';
  const indicators = document.createElement('ol'),
        dots = [];
  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
     position: absolute;
     right: 0;
     bottom: 0;
     left: 0;
     z-index: 15;
     display: flex;
     justify-content: center;
     margin-right: 15%;margin-left: 15%;
     list-style: none;
     `;
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li'); //kazdoi tochke ustanavlivaem atribut data-slide-to

    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
         box-sizing: content-box;
     flex: 0 1 auto;
     width: 30px;
     height: 6px;
     margin-right: 3px;
     margin-left: 3px;
     cursor: pointer;
     background-color: #fff;
     background-clip: padding-box;
     border-top: 10px solid transparent;
     border-bottom: 10px solid transparent;
     opacity: .5;
     transition: opacity .6s ease;
         `;

    if (i == 0) {
      dot.style.opacity = 1;
    }

    indicators.append(dot);
    dots.push(dot);
  }

  next.addEventListener('click', () => {
    //mehanizm proverki offset
    //kogda dvigaem pravo (next) predusmatrivaem konechnii variant
    //esli otstup == shirine 1 slide  * na kolichestvo slides  - 1 ustanavlivaem offset v 0- dolistali do konca i nad vernutsa v nachalo
    //tak kak width stroka- (uslovno polushim 500px) s pomoshu slice ubiraem px, s pomoshu + delaem chislom
    //ispolzuem regulyarnie virazheniya vmesto slice
    if (offset == strToNumWithoutLetters(width) * (slides.length - 1)) {
      // if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0; //esli ne poslednii slide,dobavlyaem smeshenie
      //uslovno kogda click strelka vpered  k offset dobavlyaet shirina eshe odnogo slide i on smeshyaetsya na opred velechinu;
    } else {
      offset += strToNumWithoutLetters(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    dotsEnum();
  });
  prev.addEventListener('click', () => {
    //kogda uznali chto u nas 1 slide
    if (offset == 0) {
      offset = strToNumWithoutLetters(width) * (slides.length - 1);
    } else {
      offset -= strToNumWithoutLetters(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    dotsEnum();
  });
  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = strToNumWithoutLetters(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      dotsEnum();
    });
  });

  function slidesNum() {
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function dotsEnum() {
    slidesNum();
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  }

  function strToNumWithoutLetters(str) {
    return +str.replace(/\D/g, '');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  //videm chto mi mizhem podstavit arguments v 4-5-6-17 stroki
  //tabs
  const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector); //1 zadacha  scrit vse tabi

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    }); //kogda scrivaem vse tabi  ubiraem class activnosti u vseh tabov

    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });
  } //finctia pokazivaushaa tabi 
  // передаем ай= 0 если функция вызывается без аргумета то  по умолчанию выставится 1й таб


  function showTabContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  } //ispolzuem function


  hideTabContent();
  showTabContent(); //delegirovanie sobitii i naznachit obtabotchik sobitiya clicka

  tabsParent.addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains(tabsSelector.slice(1))) {
      //kogda click na punct nado opredelit nomer v spiske tabov i vizvat opred tab i ego pokazat-obichnii perebor.perebor vseh tabov lezhashih v tabs i sravnivaem. esli element v psevdo massive tabs sovpadaet s elementom kuda mi clkick - berem nomer i pokazivaem na str
      tabs.forEach((item, i) => {
        //esli element v kotorii clik sovpadaet s elementom kotorii perebiraem
        if (target == item) {
          hideTabContent(); //i  nomer elementa kotorii sovpal

          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadline) {
  function getTimeRemaining(endtime) {
    //poluchaem kolichestvo ms v poluchaemom konechnom vremeni do kotorogo nado doschitat'
    const t = Date.parse(endtime) - Date.parse(new Date()),
          //nado prevratit v kolvo dnei chasov secund i minut 
    //kolvo dnei kotorie otobrazhautcya v taimere   = kolvo ms delim na kolvo ms v dne okruglyaa
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
          //kolvo chasov. %24 = eto ostatok chtobi chasi perehodili v dni
    hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor(t / (1000 * 60) % 60),
          seconds = Math.floor(t / 1000 % 60); //vozrashaem ob'ect(s pomochu return i {})
    //t(total)-kolvo ms

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  } //pishem fun-u pomoshnik zanimauchuusya proverkoi togo kakie chisla vihodat v days-hours-minutes-seconds ,if < 10 to stavim 0


  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  } //f-ya ustanavlivaushaa taimer na str


  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000); //chtobi izbavitsya ot baga obnovleniya raznici chasov v verstke i skripte chobi ne zhdat' 1s(str 75) vizivaem updateClock

    updateClock(); //f-ya obnovlaushaa taimer kazhduu secundu

    function updateClock() {
      //3 deistviya 
      //1-raschet vremeni ostalos na etu secundu
      //endtime- tot deadline peredayotsa setClock
      const t = getTimeRemaining(endtime); //2-rashetnie velechini kotorie poluchili pomestt a str

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds); //update clock nado zapuskat everysecond(str 74)
      //3- zadacha ostanavlivaem interval str 74
      //esli vremya vislo(idet v - to  taimer ne obnablyaem)

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(id, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": function() { return /* binding */ getResource; },
/* harmony export */   "postData": function() { return /* binding */ postData; }
/* harmony export */ });
//postData kak i  getResource rabotet s serverom i mozhet prigoditsya gde ugodno,oni zovutsya servicami i vinisyatsya v otdelnii fail
const postData = async (url, data) => {
  //delaem zapros + obrabativaem dannie kotorie prishli 
  //fetchit(posilaet zapros) poluchaet otvet
  //!!!!! TK kod async to res snachala poluchaet obeshyanie i pri return budet oshibka
  //prevrashyaem async v sync
  //await(vsegda v pare s async) stavim pered operations kotorie nado dozdatsya .
  const res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  }); //vozrashaem promise,transformiruet otvet v json. dozhidaet okonshyania res.json i vozrashaet  promise

  return await res.json();
}; //kartochki iz bd
//?????? etot eblan izmenil kod 
// const getResource = async (url) => {


async function getResource(url) {
  let res = await fetch(url); //.ok- eto esli ok,toest esli choto ne ok

  if (!res.ok) {
    //obj oshibki
    //etot mehanizm pozvolyuaet izbezhat oshibki
    //vikidivaem novuu oshibku
    throw new Error(`Couldnt fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
}




/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof __webpack_require__.g !== 'undefined') {
    local = __webpack_require__.g;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map


/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/***/ (function() {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");
/* harmony import */ var nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodelist_foreach_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
(__webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").polyfill)();

 //koda paketi ust vnutri npm- oni zanosyatsya v nodemodules i ottuda import









window.addEventListener('DOMContentLoaded', () => {
  //vizov modal cherez vremya
  //dop- sozdaem modaltimerid  kotoray zapissivaet UID timer  kotorii vipoknen cherez 30cek i zapusk openmodal,no open modal dolzhna prinimat' 2 argumenta,selsctor modal okna i UID timer,vmesto open modal,toest snachala zapustitsya function strelocnaya potom vnutri sebya openmodal
  const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)('.modal', modalTimerId), 300000);
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]', '.modal', modalTimerId);
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__["default"])('.timer', '2022-09-11');
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_6__["default"])('form', modalTimerId);
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__["default"])({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    slide: '.offer__slide',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map