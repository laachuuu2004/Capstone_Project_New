import { type Page, expect } from "@playwright/test";
import { playwrightKeywords } from "../base/automation-wrapper.js"

const WHY_ACKO_LOCATOR = "xpath=//span[text()='Why ACKO?']";
const CAREERS_LOCATOR = "xpath=//a[@href='/careers/' and normalize-space()='Careers']";
const SEE_OPEN_POSITION = "xpath=//button[text()='See open positions']"
const CAREERS_FRAME = "xpath=//iframe[@title='acko-careers']";
const ALL_DEPARTMENT_LOCATOR = "xpath=//button[@aria-haspopup='menu'][.//p[normalize-space()='All departments']]"
const TECHNOLOGY_LOCATOR = "xpath=//p[text()='Technology']";
const DESIGN_LOCATOR = "xpath=//p[text()='Design']"
const CLICK_ALL_LOCATIONS_LOCATOR = "xpath=//button[@aria-haspopup='menu' and @aria-expanded='false'][.//*[normalize-space()='All locations']]"
//const DROPDOWN_ALL_LOCATIONS_LOCATOR ="xpath=//button[@aria-haspopup='menu' and @aria-expanded='true'][.//*[normalize-space()='All locations']]";
//const BANGALORE_LOCATOR="xpath=//p[text()='Bengaluru, Karnataka, India']"
const LEAD_DEVOPS_ENGINEER_LOCATOR = "xpath=//*[normalize-space()='Senior Product Designer']";
const APPLY_FOR_POSITION_LOCATOR = "xpath=//button[normalize-space()='Apply for this position']";
export class AckoCaereerPage extends playwrightKeywords {
    constructor(page: Page) {
        super(page)
    }

    //trying without Login
    
    public async clickOnWhyAcko(): Promise<void> {
        await super.clickElement(WHY_ACKO_LOCATOR)
    }

    public async clickOnCareers(): Promise<Page> {
        const popupPromise = this._page.waitForEvent("popup").catch(() => null);
        await super.clickElement(CAREERS_LOCATOR);
        const newPage = await popupPromise;
        if (newPage) {
            await newPage.waitForLoadState("domcontentloaded");
            return newPage;
        }
        await super.waitForLoadState("domcontentloaded");
        return this._page;
    }

    public async clickOnSeeOpenPosition(): Promise<void> {
        await super.clickElement(SEE_OPEN_POSITION);
    }

    public async clickOnAllDepartments(): Promise<void> {
        await super.clickElementInsideFrame(CAREERS_FRAME, ALL_DEPARTMENT_LOCATOR);
    }
    public async selectTechnologyDepartment(): Promise<void> {
        await super.clickElementInsideFrame(CAREERS_FRAME, TECHNOLOGY_LOCATOR);
    }
    public async selectDesignDepartment(): Promise<void> {
        await super.clickElementInsideFrame(CAREERS_FRAME, DESIGN_LOCATOR);
    }
    /*- correct 
    public async clickOnAllLocations(): Promise<void> {
        await super.clickElementInsideFrame(CAREERS_FRAME,CLICK_ALL_LOCATIONS_LOCATOR);
    }*/
    public async selectLocation(location: string): Promise<void> {
        const LOCATION_LOCATOR = `xpath=//*[normalize-space()='${location}']`;

        await super.clickElementInsideFrame(CAREERS_FRAME, LOCATION_LOCATOR);
    }
    /*public async selectBengaluruLocation(): Promise<void> {
        await super.clickElementInsideFrame(CAREERS_FRAME,);
    }*/
    public async clickLeadDevOpsEngineer(): Promise<void> {
        await super.clickElementInsideFrame(CAREERS_FRAME,LEAD_DEVOPS_ENGINEER_LOCATOR);
    }

    public async clickApplyForThisPosition(): Promise<void> {
        await super.clickElementInsideFrame(CAREERS_FRAME,APPLY_FOR_POSITION_LOCATOR);
    }
    



}