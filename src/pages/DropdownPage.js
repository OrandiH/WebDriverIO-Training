import BasePage from './BasePage';

class DropdownPage extends BasePage {
    get open() {
        return browser.url('/dropdown');
    }

    get dropdownElement() {
        return $('#dropdown');
    }
}

export default new DropdownPage();
