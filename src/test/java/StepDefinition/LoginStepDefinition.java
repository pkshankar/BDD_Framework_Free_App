package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {

	WebDriver driver;
	WebDriverWait wait;

	@Given("^user is on login page$")
	public void user_is_on_login_page() {

		System.setProperty("webdriver.gecko.driver",
				"C:\\Users\\pkshank\\eclipse-workspace\\Enrich_Automation_Framework\\Browser Drivers\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://ui.freecrm.com/");

	}

	@When("^title of login page is CRM$")
	public void title_of_login_page_is_crm() {

		Assert.assertEquals("CRM", driver.getTitle());

	}

	@Then("^user enters email address and password$")
	public void user_enters_email_address_and_password() {

		driver.findElement(By.name("email")).sendKeys("shankarpk89@gmail.com");
		driver.findElement(By.name("password")).sendKeys("freecrm@Pks89");

	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {

		driver.findElement(By.xpath("//div[text()='Login']")).click();
	}

	@Then("^user lands on home page and the home page menu is displayed$")
	public void correct_username_on_home_page() {

		wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("(//div[@class='header'])[1]"))));

		Assert.assertTrue(driver.findElement(By.xpath("(//div[@class='header'])[1]")).isDisplayed());

	}

}
