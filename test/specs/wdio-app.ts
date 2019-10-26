import HomePage from "../pages/HomePage";
import FormsPage from "../pages/FormsPage";
import {expect} from 'chai'

describe("Sample tests for WebdriverIO・Appium", function () {
  it("should move home to forms by tab", function () {
    const homePage: HomePage = new HomePage();
    homePage.tabSection.waitForTabShown();
    const formsPage: FormsPage = homePage.tabSection.goToForms();
    expect(formsPage.inputExists).to.true;
  });
});
