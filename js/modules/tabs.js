function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //videm chto mi mizhem podstavit arguments v 4-5-6-17 stroki
    //tabs
    const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);
    
    //1 zadacha  scrit vse tabi
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        //kogda scrivaem vse tabi  ubiraem class activnosti u vseh tabov
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    //finctia pokazivaushaa tabi 
    // передаем ай= 0 если функция вызывается без аргумета то  по умолчанию выставится 1й таб
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }
    //ispolzuem function
    hideTabContent();
    showTabContent();
    
    //delegirovanie sobitii i naznachit obtabotchik sobitiya clicka
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            //kogda click na punct nado opredelit nomer v spiske tabov i vizvat opred tab i ego pokazat-obichnii perebor.perebor vseh tabov lezhashih v tabs i sravnivaem. esli element v psevdo massive tabs sovpadaet s elementom kuda mi clkick - berem nomer i pokazivaem na str
            tabs.forEach((item, i) => {
                //esli element v kotorii clik sovpadaet s elementom kotorii perebiraem
                if (target == item) {
                    hideTabContent();
                    //i  nomer elementa kotorii sovpal
                    showTabContent(i);
                }
            });
        }
    }); 

}

export default tabs;