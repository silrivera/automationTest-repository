import FocusPage from "../resources/pages/focusServicesPage";
import Element from "../resources/page objects";
import dataFocusServices from "../reusable/dataFocusServices";


const shortTime = 3000;
const mediumTime = 5000;

describe('FocusPageScript', ()=>{
    it('Open Google page : On Chrome Browser',()=>{
        Element.openPage(dataFocusServices.googleUrlPage);    
        browser.pause(shortTime);
    });

    it('Typing in Google’s search : Focus Services',()=>{
        FocusPage.fillInputField('Focus Services');
        browser.pause(shortTime);
    });

    it('Click on “Search button” : To perform the seach', ()=>{
        FocusPage.clickSearchButton();        
        browser.pause(shortTime);
    });

    it('Click on link "https://www.focusservices.com” : Focus Services page', ()=>{
        FocusPage.clickFocusPageLink();
        browser.pause(shortTime);
    });

    it ('Close pop up : Its appear when page is opened', ()=>{
        FocusPage.closePopUp();
        browser.pause(shortTime);
    });

    it ('Verify the “Now Hiring” button exists : Scroll down to the bottom of Focus Services page', ()=> {
        FocusPage.verifyNowHiringButton();
        browser.pause(shortTime);     
    }); 

    it ('Click on Locations Tab : It will move to another page', ()=>{
        FocusPage.clickLocationsTab();
        browser.pause(shortTime);
    });

    it ('Locate North America Link : Do an assert on this link', ()=> {
        FocusPage.locateNorthAmericaLink();
        browser.pause(shortTime);           
    }); 

    it ('Click on Central America location : Go to this link content', ()=>{
        FocusPage.clickCentralAmericaLink();
        browser.pause(shortTime);
    }); 


});