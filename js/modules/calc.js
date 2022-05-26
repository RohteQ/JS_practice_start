function calc() {
    
//Calculate calories
const  result = document.querySelector('.calculating__result span');
//ispolzuem dannie esli oni est' v localStorage

//izza baga (t.k net nachalnogo znacheniya a class activnosti na nih est' poluchaetsa bag kogda ne raschitivaets) dobavlyaem bazovoe znachenie
let sex = "female",
 height, weight, age, 
 ratio = 1.375;
 if(localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
} else {
    sex = "female";
    localStorage.setItem('sex', 'female');
}
if(localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
} else {
    ratio = "1.375";
    localStorage.setItem('ratio', '1.375');
}


//function po opredeleniu kakaya knopka active iz localStorage

function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
     
    elements.forEach(elem => {
        elem.classList.remove(activeClass);
        if(elem.getAttribute('id') === localStorage.getItem('sex')) {
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
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age )) * ratio);
    }else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}

calcTotal();
function getStaticInfo(selector, activeClass) {
    //vnutri roditelya vse divi poluchaem
    const elements = document.querySelectorAll(selector);
    //izza baga (nazhatoe mezdu knopkami),vmesto naveshivania obrabotchik na roditelya veshaem na kazdii element 
    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            //esli polzovatel klick na umerennuu activnost' mi vzyali i vitashili activnost v data atribute
            //CALCTOTAL vizivaem kazdii raz neskolko raz v konce kazdoi fu-ii
            if(e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');

                //localStorage
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

            if(input.value.match(/\D/g)) {
                input.style.border = '1px solid red';

            } else {
                input.style.border = 'none';
            }
            //switch case- sootvetstvie stroki
            //kogda chtoto vvodim  orientir na id  i zapis v opred peremennuu
            switch(input.getAttribute('id')) {
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
    }

//bolee sloznii variant slider

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

export default calc;