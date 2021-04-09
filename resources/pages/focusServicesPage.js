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


};
module.exports = FocusPage;