import HomePage from "../pages/HomePage";
import FormsPage from "../pages/FormsPage";

describe("Sample tests for WebdriverIO・Appium", function () {
  it("should move home to forms by tab", function () {
    const formsPage: FormsPage = new HomePage().tabSection.goToForms();
  });
});
