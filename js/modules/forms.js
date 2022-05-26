import {closeModal, openModal} from './modal';
import {postData} from '../services/services';
function forms(formSelector, modalTimerId) {
    
        //FORMS
        //nado vzyat' formi iz nih otpravlyta dannie na server  
        //vinosim selector 'form' kak argument-teper formSelector 
        const forms = document.querySelectorAll(formSelector);
        //soobsheniya posle otpravki
        const message = {
            loading: 'img/form/spinner.svg',
            success: 'Spasibo,Skoro svyashemsya',
            failure: 'choto ne tak'
        };
        //kazdoi forme podvyazivaem function postData
        forms.forEach(item => {
            bindPostData(item);
        });
        //____--- do sozdaniya f-i postData
        //postdata budet otvechat za post dannih
        //function exspression uzayem (v potoke koda fi= viglayadit klak prisvaivanie peremennoi)
        //nastraivaet zapros
        //s pomoshuu async govorim chto vnutri async code


//teper postData v services 



        //function posting dannih, prinimaet v sebya formu
        //__-__bilo f-i postdata
        //teper fi otvechyaet za privyazku postinga
        function bindPostData(form) {
            form.addEventListener('submit', (e) => {
                //ctobi otmenit standart povedenie brausera mi dolszni postavit e v skobki a adlshe e.preventdefault
                e.preventDefault();
                //sozdaem dinamisheckii block na str i vivodim sooomshenie kartinku i td
                //izza kartinki v loading vmesto div img
                //sozdali izobr
                let statusMessage = document.createElement('img');
                //udalyaem class tk ego ne sushestvovalo i et nepravilno
                // statusMessage.classList.add('status');
                //podstavili atribut src kotorii polushaem iz str 257( loading)
                statusMessage.src = message.loading;
                //kak tolko proizoshel submit
                // statusMessage.textContent = message.loading;
                //delaem izobr css stily s pomochu cssText(stili inline)
                statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;`;
                //k forme dobavim soobshenie 
                //izze insertAdjacentElement sled stroka ne nuzna
                // form.append(statusMessage);
                //kuda vstavlyaem element i kakoi element vstavlyaem
                form.insertAdjacentElement('afterend', statusMessage);
                //+MI ISPOLZUEM FETCH API VMESTO XMLHTTPREQUEST 



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
                const formData = new FormData(form);
                 //est' obj formdata kotorii nado v json
                //  const object = {};
                // formData.forEach(function(value, key){
                //     object[key] = [value];
                    
                // });
                //__-__ bolee eleganto formData  v json
                //metod entries vozrashyaet massiv sobstvennih perechislyaemih svoistv  u ukazzannogo obj
                //obvolakivaem s skobki i iz massiva massivov entries delaem obichii obj formentries metod
                //__--__- esli naglyadno berem formData  ee prevrashyaem v massiv massivov  chtobi normalno s nei rabotat  posle v classicheskii obj prevrashyaem  a pozhe classicheskii obj prevrashyaem v json
                const json = JSON.stringify(Object.fromEntries(formData.entries()));
                
                //konvertiruem objv json
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
                    postData('http://localhost:3000/requests', json)
                    //modificiruem otvet chtob prishli te dannie kotorie vveeli
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
                });
                
            //dannie ushli na server teper' chtoto delaem
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
        }
//sozdaem blagodarnost posle otpravki
//+peredaem soobhenie kak argument
//message berem iz obj = const message
        function showThanksModal (message) {
            const prevModalDialog = document.querySelector('.modal__dialog');
            //skrivaem content pered tem kak pokazat modal
            prevModalDialog.classList.add('hide');
            //otkrivaem class modal i dobavlyaem show
            openModal('.modal', modalTimerId);
            //sozdaem novii content
            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            //formiruem verstku kotoraya v modal dialog
            thanksModal.innerHTML = `
            <div class="modal__content">
                    <div class="modal__close" data-close>×
                </div>
                    <div class="modal__title">${message}</div>
            </div>`;
            //pomestit na str
            //poluchaem modal i append block
            document.querySelector('.modal').append(thanksModal);
            //esli polzovatel zahochet snova otrkit' modal vse shlo zanogo
            setTimeout(() => {
                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeModal('.modal');
            }, 4000);
        }
        //obrashaemsya k 'bd'
//podstavlyaem adres json servera vmesto puti k failu 'db.json' tem samim polychyaa ne obj a massiv
        fetch('http://localhost:3000/menu')
        //berem otvet data i prevrashayem v JS obj
        .then(data => data.json())
        .then(res => console.log(res));

}
export default forms;