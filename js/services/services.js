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
            'Content-type':'application/json'
        },
        body: data
    });
//vozrashaem promise,transformiruet otvet v json. dozhidaet okonshyania res.json i vozrashaet  promise
    return await res.json();
};

    //kartochki iz bd
    
    //?????? etot eblan izmenil kod 

    // const getResource = async (url) => {
        async function getResource(url) {

        
            let res = await fetch(url);
            //.ok- eto esli ok,toest esli choto ne ok
            if(!res.ok) {
                //obj oshibki
                //etot mehanizm pozvolyuaet izbezhat oshibki
                //vikidivaem novuu oshibku
                throw new Error(`Couldnt fetch ${url}, status: ${res.status}`);
            }
            return await res.json();
        }

export {postData};
export {getResource};