import { test } from "@playwright/test";
import { AckoCaereerPage } from "../Pages/AckoCareersPage.js";
import { JsonUtils } from "../utils/json-utils.js";

test.describe("To verify that the user can successfully apply for the Senior Product Designer position", () => {
  const ackoCareerData = JsonUtils.getJsonValue("ackoCareerData");

  for (const {location,firstName,lastName,email,phoneNumber,title,company,currentLocation,noticePeriod,currentCTC,expectedCTC,} of ackoCareerData) {
    test(`Apply for Senior Product Designer Position - ${firstName} ${lastName}`, async ({ page }) => {
      await page.goto("/");

      const ackoCareerPage = new AckoCaereerPage(page);
      await ackoCareerPage.clickOnWhyAcko();
      const newPage = await ackoCareerPage.clickOnCareers();
      const careersPage = new AckoCaereerPage(newPage);
      await careersPage.clickOnSeeOpenPosition();
      await careersPage.clickOnAllDepartments();
      await careersPage.selectTechnologyDepartment();
      console.log("Selected Department: Technology");
      await careersPage.selectDesignDepartment();
      console.log("Selected Design")

      //await careersPage.clickOnAllLocations();
      //console.log("Location from JSON:", location);
      await careersPage.selectLocation(location);
      
     await careersPage.clickSeniorProductDesignerApplyNow();

      
      console.log({ location, firstName, lastName, email, phoneNumber, title, company, currentLocation, noticePeriod, currentCTC, expectedCTC });
    });
  }
});