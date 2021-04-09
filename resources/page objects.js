//ES6
class Element {
    openPage(url){
        browser.url(url); 
        expect(browser).toHaveUrl(url);
    }
};
export default new Element(); 