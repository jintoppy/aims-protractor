
var LoginPage = function(){

    this.element = {
        username: browser.driver.findElement(by.id('input-username')),
        password: browser.driver.findElement(by.id('input-password')),
        submitBtn: browser.driver.findElement(by.id('input-submit'))
    }; 

    this.login = function(username, password){
        this.element.username.sendKeys('admin');
        this.element.password.sendKeys('admin');
        this.element.submitBtn.click();
        browser.waitForAngular();
    };

};

module.exports = new LoginPage();