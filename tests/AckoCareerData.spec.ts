import { test } from "@playwright/test";
import { AckoCaereerPage } from "../Pages/AckoCareersPage.js";
import { JsonUtils } from "../utils/json-utils.js";
import { spawn } from "child_process";

test.describe("To verify that the user can successfully apply for the Senior Product Designer position", () => {
  const ackoCareerData = JsonUtils.getJsonValue("ackoCareerData");

  for (const {location,firstName,lastName,email,phoneNumber,title,company,currentLocation,noticePeriod,currentCTC,expectedCTC,} of ackoCareerData) {
    test(`Apply for Senior Product Designer Position - ${firstName} ${lastName}`, async ({ page }) => {
      await page.goto("/");

      //without login performing the task
      const ackoCareerPage = new AckoCaereerPage(page);
      await ackoCareerPage.clickOnWhyAcko();
      const newPage = await ackoCareerPage.clickOnCareers();//manually clicking the careers
      const careersPage = new AckoCaereerPage(newPage);
      await careersPage.clickOnSeeOpenPosition();
      await careersPage.clickOnAllDepartments();
      await careersPage.selectTechnologyDepartment();
      //await careersPage.selectDesignDepartment();

      //await careersPage.clickOnAllLocations();
      //console.log("Location from JSON:", location);
      await careersPage.selectLocation(location);
      await careersPage.clickLeadDevOpsEngineer();
      await careersPage.clickApplyForThisPosition();
      await careersPage.FillFirstName(firstName);
      await careersPage.FillLastName(lastName);
      await careersPage.FillEmail(email);
      await careersPage.FillPhoneNumber(phoneNumber);
      await careersPage.FillTitle(title);
      await careersPage.FillCompany(company);
      await careersPage.FillCurrLocation(currentLocation);
      await careersPage.FillNoticePeriod(noticePeriod);
      await careersPage.Curr_CTC(currentCTC);
      await careersPage.exp_CTC(expectedCTC);

      console.log({ location, firstName, lastName, email, phoneNumber, title, company, currentLocation, noticePeriod, currentCTC, expectedCTC });
    });
  }
});