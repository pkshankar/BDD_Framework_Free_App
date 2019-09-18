$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/pkshank/eclipse-workspace/BDD_Framework_Free_App/src/test/java/features/freeCrmFeatures.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM features",
  "description": "",
  "id": "free-crm-features",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM login scenario",
  "description": "",
  "id": "free-crm-features;free-crm-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters email address and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user lands on home page and the home page menu is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 150170228813,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_crm()"
});
formatter.result({
  "duration": 35445799,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_email_address_and_password()"
});
formatter.result({
  "duration": 242142533,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 255151571,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.correct_username_on_home_page()"
});
formatter.result({
  "duration": 28322451,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: (//div[@class\u003d\u0027header\u0027])[1]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WKWIN5154091\u0027, ip: \u002710.102.70.213\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 60.9.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:geckodriverVersion: 0.24.0, moz:headless: false, moz:processID: 19880, moz:profile: C:\\Users\\pkshank\\AppData\\Lo..., moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: XP, platformName: XP, platformVersion: 10.0, rotatable: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: 580c40a2-eb8d-4225-8255-575b214797a6\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027header\u0027])[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDefinition.LoginStepDefinition.correct_username_on_home_page(LoginStepDefinition.java:56)\r\n\tat ✽.Then user lands on home page and the home page menu is displayed(C:/Users/pkshank/eclipse-workspace/BDD_Framework_Free_App/src/test/java/features/freeCrmFeatures.feature:9)\r\n",
  "status": "failed"
});
});