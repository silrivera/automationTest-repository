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
});