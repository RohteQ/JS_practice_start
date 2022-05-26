require ('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

//koda paketi ust vnutri npm- oni zanosyatsya v nodemodules i ottuda import
import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';
window.addEventListener('DOMContentLoaded', () => {

    
  //vizov modal cherez vremya
  //dop- sozdaem modaltimerid  kotoray zapissivaet UID timer  kotorii vipoknen cherez 30cek i zapusk openmodal,no open modal dolzhna prinimat' 2 argumenta,selsctor modal okna i UID timer,vmesto open modal,toest snachala zapustitsya function strelocnaya potom vnutri sebya openmodal
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);


    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-09-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
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
