const shortTime = 3000;
const mediumTime = 5000;

const FocusPage = {   
    get inputField() {
        return $("//input[@name='q']");
    },

    get searchButton() {
        return $("div[class*=tfB0Bf] input[class='gNO89b']");
    },

    get FocusPageLink() {
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
        this.FocusPageLink.waitForExist(mediumTime);
        this.FocusPageLink.click();
    },


};
module.exports = FocusPage;