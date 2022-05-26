//ispolzuem destructurizaciu dlya vozmoznogo dalneishego primeneniya i izm slider
//container -- slider = document.querySelector('.offer__slider')-glavn slider
//slide -arugment kazxdogo otdelnogo slaida- slides = document.querySelectorAll('.offer__slide'),
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
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
     width = window.getComputedStyle(slidesWrapper).width;


 //opredelyaem index tekushego polozheniya slider
 let slideIndex = 1;

 //chobi ponimat' naskolko mi otstupili vpravo ili vlevo
 let offset = 0;

 
 if (slides.length < 10) {
     total.textContent = `0${slides.length}`;
     current.textContent = `0${slideIndex}`;
 }
 else {
     total.textContent = slides.length;
     current.textContent = slideIndex;
 }


//ustanavlivaem shirinu ,kolvo slaidov  umnozhaem na 100 % ,delaetsa dlya ppomesheniya vseh slaidov na str v slidesField i oni u nas polnosnu pomeshalis'

 slidesField.style.width = 100 * slides.length + '%';
 slidesField.style.display = 'flex';
 slidesField.style.transition = '0.5s all';


 //ogranishivaem pokaz elementov vnutri wrapper
 slidesWrapper.style.overflow = 'hidden';


 //vse slaidi izza vozmozhnogo otloichiya ih razmerov
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
         const dot = document.createElement('li');
         //kazdoi tochke ustanavlivaem atribut data-slide-to
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
         offset = 0;

         //esli ne poslednii slide,dobavlyaem smeshenie
         //uslovno kogda click strelka vpered  k offset dobavlyaet shirina eshe odnogo slide i on smeshyaetsya na opred velechinu;

     }else {
         offset += strToNumWithoutLetters(width);
     }
     slidesField.style.transform =   `translateX(-${offset}px)`;
     if (slideIndex == slides.length) {
         slideIndex = 1;
     }else {
         slideIndex++;
     }
     dotsEnum();
 });
 

 prev.addEventListener('click', () => {
     //kogda uznali chto u nas 1 slide
     if ( offset == 0) {
         offset = strToNumWithoutLetters(width) * (slides.length - 1);
     } else {
         offset -= strToNumWithoutLetters(width);
     }
     slidesField.style.transform =   `translateX(-${offset}px)`;
     if (slideIndex == 1) {
         slideIndex = slides.length;
     }else {
         slideIndex--;
     }
     dotsEnum();
 });
 dots.forEach(dot => {
     dot.addEventListener('click', (e) => {
         const slideTo = e.target.getAttribute('data-slide-to');
         slideIndex = slideTo; 
         offset = strToNumWithoutLetters(width) * (slideTo - 1);
         slidesField.style.transform =   `translateX(-${offset}px)`;
         dotsEnum();
     });
 });
 function slidesNum(){
     if (slides.length < 10) {
         current.textContent = `0${slideIndex}`;
     }else{
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
export default slider;