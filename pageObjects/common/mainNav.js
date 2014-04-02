
var MainNav = function(){

    var ptor = protractor.getInstance();

    this.element = {
        home: element(by.css('#main-nav li.home a')),
        workspace: element(by.css('#main-nav li.workspace a')),
        managers: element(by.css('#main-nav li.managerandfund a')),
        insights: element(by.css('#main-nav li.thought-leadership a')),
        search: element(by.css('#main-nav search-btn'))
    };

    this.goto = function(pageName){
        var targetPage;
        switch (pageName){
            case 'managers':
                this.element.managers.click();
                targetPage = require('../managers/managersPage');
                browser.waitForAngular('body');
                break;
            case 'home':
                this.element.managers.click();
                targetPage = require('../home/homePage');
                break;
        }

        return targetPage;
    };

};

module.exports = new MainNav();