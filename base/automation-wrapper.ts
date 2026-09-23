import { type Page,expect } from "@playwright/test";
export class playwrightKeywords{
    public _page:Page;

    constructor(page:Page){
        this._page=page;
    }
    protected async sendTextToElement(locator: string,text:string){
        await this._page.locator(locator).fill(text);
    }

    protected async clickElement(locator:string){
        await this._page.locator(locator).first().click({force:true});
    }

    protected async hoverElement(locator:string){
        await this._page.locator(locator).first().hover();
    }

    protected async selectDropdownWithLabel(locator:string,labelDetails:string){
        await this._page.locator(locator).selectOption({label:labelDetails})
    }

    protected async waitForLoadState(state: Parameters<Page['waitForLoadState']>[0] = 'domcontentloaded') {
        await this._page.waitForLoadState(state);
    }

    protected async assertText(locator:string,expectedValue:string):Promise<void>{
        await expect(this._page.locator(locator)).toHaveText(expectedValue);
    }
     protected async clickUntilLocatorPresent(expectedLocator: string, clickableLocator: string): Promise<void> {
        while (await this._page.locator(expectedLocator).count() == 0) {
            if (await this._page.locator(clickableLocator).count() == 1) {
                await this._page.locator(clickableLocator).click()
            }
        }
    }
    protected async clickElementInsideFrame(frameLocator: string,locator: string): Promise<void> {
    await this._page.frameLocator(frameLocator).locator(locator).first().click();
}
}