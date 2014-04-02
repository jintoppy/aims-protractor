
var HomePage = function(){

	var ptor = protractor.getInstance();

    this.el = {
        aimstv: element(by.css('#home-aims_tv')),
        insight: element(by.css('#home-insight')),
        
        // colorbox : element(by.css('#colorbox')),
        // colorboxCloseBtn: element(by.css('#colorbox')),
        // cqbox: element(by.css('#cq-sk')),
        // cqpreviewbtn: element(by.css('#cq-sk .x-window-mc button.cq-sidekick-preview'))
        
    }; 

    this.closeColorBox = function(){
    	//colorbox
    };

    this.clickToPreviewMode = function(){
    	//this.el.cqpreviewbtn.click();
    };

    this.openTV = function(){
    	this.el.aimstv.click();
    };

    this.openInsight = function(){
    	this.el.insight.click();
    }

    
};

module.exports = new HomePage();