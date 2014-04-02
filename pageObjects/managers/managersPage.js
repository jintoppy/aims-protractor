
var ManagersPage = function(){


    var ptor = protractor.getInstance();

    this.el = {
        fundGridItem: element(by.css('#assets .grid-item[data-doctype="fund"]'))
    }; 

    this.getHeaderText = function(){
        ptor.waitForAngular('body');
        return ptor.wait(function(){
            return element(by.css('.managerandfund header h1 a'));
        }, 10000).then(function(header){
            return header.getText();
        });
    };


    this.openFund = function(){
        this.el.fundGridItem.click();
    };

    this.isFundPreviewDisplayed = function(){
        return ptor.wait(function(){
            return element(by.css('.fund-preview')).isDisplayed();
        }, 10000);
    };

};

module.exports = new ManagersPage();