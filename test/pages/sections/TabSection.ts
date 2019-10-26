import Section from "./section";

export default class TabSection extends Section {

  private get homeButton(): WebdriverIO.Element {
    return $('~Home');
  }

  private get formsButton(): WebdriverIO.Element {
    return $('~Forms');
  }
}
