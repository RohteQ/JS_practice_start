import {getResource} from '../services/services';
function cards () {
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            //classes = massive
            this.classes = classes;
            //v parent lezhit DOM element
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        changeToUAH() {
            this.price = this.price * this.transfer;
        }
        render() {
            const element = document.createElement('div');
            if(this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            }
            else{
                //t.k classes massiv prohodim po kazdomu elementu i vitaskivaeem ih
            //element=novosozdanii div.obrashaemsya c ego classlist i dobavlyaem kazdii class nahodyashiisya  v massive
            this.classes.forEach(className => element.classList.add(className));
        }

            element.innerHTML =  `        
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
    }
    //vinosim getResource v servises


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
    getResource('http://localhost:3000/menu')
    .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
        });
    });
}

export default cards;