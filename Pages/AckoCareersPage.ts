import {type Page,expect} from "@playwright/test";
import {playwrightKeywords} from "../base/automation-wrapper.js"

const WHY_ACKO_LOCATOR="xpath=//span[text()='Why ACKO?']";
const CAREERS_LOCATOR="xpath=//a[text()='Careers']"

export class AckoCaereerPage extends playwrightKeywords{
    constructor(page:Page)
    {
        super(page)
    }   
    public async clickOnWhyAcko():Promise<void>{
        await super.clickElement(WHY_ACKO_LOCATOR)
    }
    public async clickOnCareers(): Promise<Page> {
    const newPagePromise = this._page.waitForEvent("popup");
    await super.clickElement(CAREERS_LOCATOR);
    const newPage = await newPagePromise;
    await newPage.waitForLoadState();
    return newPage;
}
}