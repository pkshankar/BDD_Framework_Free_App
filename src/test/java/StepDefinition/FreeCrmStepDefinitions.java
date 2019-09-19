package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FreeCrmStepDefinitions {

	WebDriver driver;

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

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_email_address_and_password(String uName, String pwd) {

		driver.findElement(By.name("email")).sendKeys(uName);
		driver.findElement(By.name("password")).sendKeys(pwd);

	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {

		driver.findElement(By.xpath("//div[text()='Login']")).click();
	}

	@Then("^user lands on home page and home page title is displayed$")
	public void correct_title_on_home_page() {

		Assert.assertEquals("CRM", driver.getTitle());

	}

	@Then("^user clicks contacts$")
	public void user_on_home_page_clicks_contacts() {

		WebDriverWait wait = new WebDriverWait(driver, 20);
		wait.until(ExpectedConditions
				.visibilityOf(driver.findElement(By.xpath("//i[@class='users icon']/parent::a/span"))));

		driver.findElement(By.xpath("//i[@class='users icon']/parent::a/span")).click();

	}

	@Then("^user clicks on new button$")
	public void user_clicks_new() {

		driver.findElement(By.xpath("(//button[@class='ui linkedin button']/i)[2]")).click();
	}

	@Then("^user enters contact details \"(.*)\" and \"(.*)\"$")
	public void user_enters_fname_and_lname(String fName, String lName) {

		driver.findElement(By.name("first_name")).sendKeys(fName);
		driver.findElement(By.name("last_name")).sendKeys(lName);
	}

	@Then("^user clicks save$")
	public void user_clicks_save() {

		driver.findElement(By.xpath("//button/i[@class='save icon']")).click();
	}

	@Then("^user quits the browser$")
	public void user_quits_the_browser() {

		driver.quit();
	}

}
