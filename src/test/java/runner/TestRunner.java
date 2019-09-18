package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(value = Cucumber.class)
@CucumberOptions(features = "C:\\Users\\pkshank\\eclipse-workspace\\BDD_Framework_Free_App\\src\\test\\java\\features\\freeCrmFeatures.feature", 
glue = {"StepDefinition" }, 
plugin = { "pretty", "html:test-outout" }, 
monochrome = true, 
strict = true, 
dryRun = false)

public class TestRunner {

}
