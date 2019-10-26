import Page from "./Page";
import TabSection from "./sections/TabSection";

class FormsPage extends Page {
  private _tabSection: TabSection = new TabSection();

  public get tabSection(): TabSection {
    return this._tabSection;
  }
}

export default FormsPage;
