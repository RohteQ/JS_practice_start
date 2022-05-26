function timer(id, deadline) {

     function getTimeRemaining(endtime){
         //poluchaem kolichestvo ms v poluchaemom konechnom vremeni do kotorogo nado doschitat'
         const t = Date.parse(endtime) - Date.parse(new Date()),
         //nado prevratit v kolvo dnei chasov secund i minut 
         //kolvo dnei kotorie otobrazhautcya v taimere   = kolvo ms delim na kolvo ms v dne okruglyaa
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
         //kolvo chasov. %24 = eto ostatok chtobi chasi perehodili v dni
         hours = Math.floor((t / (1000 * 60 * 60) % 24)),
         minutes = Math.floor((t / (1000 * 60)) % 60),
         seconds = Math.floor((t / 1000) % 60);
         //vozrashaem ob'ect(s pomochu return i {})
         //t(total)-kolvo ms
         return{
             'total': t,
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds
         };
     } 
     //pishem fun-u pomoshnik zanimauchuusya proverkoi togo kakie chisla vihodat v days-hours-minutes-seconds ,if < 10 to stavim 0
     function getZero(num) {
         if (num >= 0 && num < 10) {
             return `0${num}`;
         }
         else {
             return num;
         }
     }
     //f-ya ustanavlivaushaa taimer na str
     function setClock(selector, endtime) {
         const timer = document.querySelector(selector),
               days = timer.querySelector('#days'),
               hours = timer.querySelector('#hours'),
               minutes = timer.querySelector('#minutes'),
               seconds = timer.querySelector('#seconds'),
               timeInterval = setInterval(updateClock, 1000);
         //chtobi izbavitsya ot baga obnovleniya raznici chasov v verstke i skripte chobi ne zhdat' 1s(str 75) vizivaem updateClock
         updateClock();
         //f-ya obnovlaushaa taimer kazhduu secundu
         function updateClock() {
             //3 deistviya 
             //1-raschet vremeni ostalos na etu secundu
             //endtime- tot deadline peredayotsa setClock
             const t = getTimeRemaining(endtime);
             //2-rashetnie velechini kotorie poluchili pomestt a str
             days.innerHTML = getZero(t.days);
             hours.innerHTML = getZero(t.hours);
             minutes.innerHTML = getZero(t.minutes);
             seconds.innerHTML = getZero(t.seconds);
             //update clock nado zapuskat everysecond(str 74)
             //3- zadacha ostanavlivaem interval str 74
             //esli vremya vislo(idet v - to  taimer ne obnablyaem)
             if (t.total <= 0) {
                 clearInterval(timeInterval);
             }
         }
     }
     setClock(id, deadline);
}
export default timer;