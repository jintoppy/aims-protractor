
var util = {


    waitUntilElementPresent: function(driver, locator){
        
    }

    /*
    waitUntilElementPresent: function(driver, locator){
        var deferred = webdriver.promise.defer();
        driver.wait(function(){
            return driver.isElementPresent(locator);
        }).then(function(isPresent){
            deferred.fulfill(driver.findElement(locator));
        });
        return deferred.promise;
    },

    waitUntilElementVisible: function(driver, locator){
        var deferred = webdriver.promise.defer();
        util.waitUntilElementPresent(driver, locator)
            .then(function(){
                driver.wait(function(){
                   return driver.findElement(locator).isDisplayed();
                }).then(function(isDisplayed){
                    deferred.fulfill(driver.findElement(locator));
                });
            });
        return deferred.promise;
    }
    */

};

exports.util = util;
