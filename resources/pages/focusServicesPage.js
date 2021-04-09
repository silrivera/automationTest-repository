const shortTime = 3000;
const mediumTime = 5000;

const FocusPage = {   
    get inputField() {
        return $("//input[@name='q']");
    },

    get searchButton() {
        return $("div[class*=tfB0Bf] input[class='gNO89b']");
    },

    get focusPageLink() {
        return $("//*[text()='Focus Services – Beyond Expectations']");
    },

    get popUp(){
        return $("div[class*='spu-box spu-animation-fade spu-theme-elegant spu-position-centered'] a[class*='spu-close spu-close-popup spu-close-top_right']");
    },

    get nowHiringButton(){
        return $("//span[text()='Now Hiring!']");
    },

    get locationsTab(){
        return $("//span[text()='Locations']");
    },

    get northAmericaLink(){
        return $("a[class='av-section-tab-title av-tab-no-icon av-tab-with-image noHover av-active-tab-title']");
    },


    fillInputField: function(search){
        this.inputField.waitForExist(shortTime);
        this.inputField.setValue(search);
    },

    clickSearchButton: function(){
        this.searchButton.waitForExist(mediumTime);
        this.searchButton.click();
    },

    clickFocusPageLink: function(){ 
        this.focusPageLink.waitForExist(mediumTime);
        this.focusPageLink.click();
    },

    closePopUp: function(){
        this.popUp.waitForExist(mediumTime);
        this.popUp.click();
    },

    verifyNowHiringButton: function(){
        this.nowHiringButton.waitForExist(mediumTime);
        this.nowHiringButton.scrollIntoView();
        this.nowHiringButton.waitForExist(mediumTime);
        expect(this.nowHiringButton).toExist();
    },

    clickLocationsTab: function(){
        this.locationsTab.waitForExist(mediumTime);
        this.locationsTab.click();
    },

    locateNorthAmericaLink: function(){
        this.northAmericaLink.waitForExist(mediumTime);
        this.northAmericaLink.scrollIntoView();
        expect(this.northAmericaLink).toHaveLinkContaining('/#north-america');
    },
    

};
module.exports = FocusPage;