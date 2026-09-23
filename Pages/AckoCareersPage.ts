import { type Page, expect } from "@playwright/test";
import { playwrightKeywords } from "../base/automation-wrapper.js"
import { title } from "process";

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
const LEAD_DEVOPS_ENGINEER_LOCATOR = "xpath=//*[normalize-space()='Lead DevOps Engineer']";
const APPLY_FOR_POSITION_LOCATOR = "xpath=//button[normalize-space()='Apply for this position']";
const FIRST_NAME_LOCATOR="xpath=//input[@placeholder='Enter first name']";
const LAST_NAME_LOCATOR="xpath=//input[@placeholder='Enter last name']";
const EMAIL_LOCATOR="xpath=//input[@placeholder='Enter email']";
const PHONE_NUM_LOCATOR="xpath=//input[@placeholder='Add phone number']";
const TITLE_LOCATOR="xpath=//input[@placeholder='Enter title']";
const COMPANY_LOCATOR="xpath=//input[@placeholder='Search company']";
const CURR_LOCATOR="xpath=//input[@placeholder='Search city, state or country']"

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
    public async FillFirstName(firstName:string):Promise<void>
    {
        await super.sendTextToElementInsideFrame(CAREERS_FRAME,FIRST_NAME_LOCATOR,firstName);
    }
    
    public async FillLastName(lastName:string):Promise<void>
    {
        await super.sendTextToElementInsideFrame(CAREERS_FRAME,LAST_NAME_LOCATOR,lastName);
    }
    
    public async FillEmail(email:string):Promise<void>
    {
        await super.sendTextToElementInsideFrame(CAREERS_FRAME,EMAIL_LOCATOR,email);
    }
    public async FillPhoneNumber(phoneNumber:string):Promise<void>
    {
        await super.sendTextToElementInsideFrame(CAREERS_FRAME,PHONE_NUM_LOCATOR,phoneNumber);

    }
    public async FillTitle(title:string):Promise<void>
    {
        await super.sendTextToElementInsideFrame(CAREERS_FRAME,TITLE_LOCATOR,title);
    }
    
    public async FillCompany(company:string):Promise<void>
    {
        await super.sendTextToElementInsideFrame(CAREERS_FRAME,COMPANY_LOCATOR,company);
    }
    public async FillCurrLocation(currentLocation:string):Promise<void>
    {
        await super.sendTextToElementInsideFrame(CAREERS_FRAME,CURR_LOCATOR,currentLocation);
    }
    
}



