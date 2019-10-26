import Section from "./section";
import FormsPage from "../FormsPage";
import HomePage from "../HomePage";

export default class TabSection extends Section {

  private get homeButton(): WebdriverIO.Element {
    return $('~Home');
  }

  private get formsButton(): WebdriverIO.Element {
    return $('~Forms');
  }

  public goToForms(): FormsPage {
    this.formsButton.click();
    return new FormsPage();
  }

  public goToHome(): HomePage {
    this.homeButton.click();
    return new HomePage();
  }
}
