  describe('aims home page', function() {
    var homePage;
    beforeEach(function(){
      var mainNav = require('../../pageobjects/common/mainNav');
      homePage = mainNav.goto('home');
      //homePage.clickToPreviewMode();
      
    });

    
    it('should show the home', function() {
      homePage.openInsight();
      // managersPage.getHeaderText().then(function(headerText){
      //     expect(headerText.toLowerCase()).toEqual('managers');
      // });
    });


  // it('should open fund preview dialog', function() {
  //   var mainNav = require('../../pageobjects/common/mainNav');
  //   var managersPage = mainNav.goto('managers');
  //   managersPage.openFund();
  //   expect(managersPage.isFundPreviewDisplayed()).toBe(true);  
  // });

  });
