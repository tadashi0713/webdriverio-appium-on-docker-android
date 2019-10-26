import Page from "./Page";
import TabSection from "./sections/TabSection";

class FormsPage extends Page {
  private _tabSection: TabSection = new TabSection();

  private get input(): WebdriverIO.Element {
    return $('~text-input');
  }

  public get tabSection(): TabSection {
    return this._tabSection;
  }

  public get inputExists(): boolean {
    return this.input.waitForDisplayed();
  }
}

export default FormsPage;
