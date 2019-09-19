$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/pkshank/eclipse-workspace/BDD_Framework_Free_App/src/test/java/features/freeCrmFeatures.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM features",
  "description": "",
  "id": "free-crm-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Without Examples keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: Free CRM login scenario"
    },
    {
      "line": 8,
      "value": "#Given user is on login page"
    },
    {
      "line": 9,
      "value": "#When title of login page is CRM"
    },
    {
      "line": 10,
      "value": "#Then user enters \"shankarpk89@gmail.com\" and \"freecrm@Pks89\""
    },
    {
      "line": 11,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 12,
      "value": "#Then user lands on home page and the home page menu is displayed"
    },
    {
      "line": 14,
      "value": "#Using Examples keyword"
    }
  ],
  "line": 15,
  "name": "Free CRM login and create contact scenario",
  "description": "",
  "id": "free-crm-features;free-crm-login-and-create-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"\u003cemail address\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user lands on home page and home page title is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks save",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#\tThen user clicks on contacts"
    },
    {
      "line": 27,
      "value": "#\tThen user validates that the user has been added to the contacts table"
    }
  ],
  "line": 28,
  "name": "user quits the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "free-crm-features;free-crm-login-and-create-contact-scenario;",
  "rows": [
    {
      "cells": [
        "email address",
        "password",
        "firstname",
        "lastname"
      ],
      "line": 33,
      "id": "free-crm-features;free-crm-login-and-create-contact-scenario;;1"
    },
    {
      "cells": [
        "shankarpk89@gmail.com",
        "freecrm@Pks89",
        "Jonathan",
        "Scurry"
      ],
      "line": 34,
      "id": "free-crm-features;free-crm-login-and-create-contact-scenario;;2"
    },
    {
      "cells": [
        "shankarpk89@gmail.com",
        "freecrm@Pks89",
        "Rick",
        "Martin"
      ],
      "line": 35,
      "id": "free-crm-features;free-crm-login-and-create-contact-scenario;;3"
    },
    {
      "cells": [
        "shankarpk89@gmail.com",
        "freecrm@Pks89",
        "Albert",
        "Tin"
      ],
      "line": 36,
      "id": "free-crm-features;free-crm-login-and-create-contact-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "Free CRM login and create contact scenario",
  "description": "",
  "id": "free-crm-features;free-crm-login-and-create-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"shankarpk89@gmail.com\" and \"freecrm@Pks89\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user lands on home page and home page title is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters contact details \"Jonathan\" and \"Scurry\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks save",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#\tThen user clicks on contacts"
    },
    {
      "line": 27,
      "value": "#\tThen user validates that the user has been added to the contacts table"
    }
  ],
  "line": 28,
  "name": "user quits the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "duration": 3153700747,
  "status": "passed"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.title_of_login_page_is_crm()"
});
formatter.result({
  "duration": 32018084,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[CRM]\u003e but was:\u003c[WebDriver]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefinition.FreeCrmStepDefinitions.title_of_login_page_is_crm(FreeCrmStepDefinitions.java:32)\r\n\tat ✽.When title of login page is CRM(C:/Users/pkshank/eclipse-workspace/BDD_Framework_Free_App/src/test/java/features/freeCrmFeatures.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "shankarpk89@gmail.com",
      "offset": 13
    },
    {
      "val": "freecrm@Pks89",
      "offset": 41
    }
  ],
  "location": "FreeCrmStepDefinitions.user_enters_email_address_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.correct_title_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_on_home_page_clicks_contacts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_clicks_new()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jonathan",
      "offset": 29
    },
    {
      "val": "Scurry",
      "offset": 44
    }
  ],
  "location": "FreeCrmStepDefinitions.user_enters_fname_and_lname(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_clicks_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_quits_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "Free CRM login and create contact scenario",
  "description": "",
  "id": "free-crm-features;free-crm-login-and-create-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"shankarpk89@gmail.com\" and \"freecrm@Pks89\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user lands on home page and home page title is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters contact details \"Rick\" and \"Martin\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks save",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#\tThen user clicks on contacts"
    },
    {
      "line": 27,
      "value": "#\tThen user validates that the user has been added to the contacts table"
    }
  ],
  "line": 28,
  "name": "user quits the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "duration": 2083162007,
  "status": "passed"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.title_of_login_page_is_crm()"
});
formatter.result({
  "duration": 44839899,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[CRM]\u003e but was:\u003c[WebDriver]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefinition.FreeCrmStepDefinitions.title_of_login_page_is_crm(FreeCrmStepDefinitions.java:32)\r\n\tat ✽.When title of login page is CRM(C:/Users/pkshank/eclipse-workspace/BDD_Framework_Free_App/src/test/java/features/freeCrmFeatures.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "shankarpk89@gmail.com",
      "offset": 13
    },
    {
      "val": "freecrm@Pks89",
      "offset": 41
    }
  ],
  "location": "FreeCrmStepDefinitions.user_enters_email_address_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.correct_title_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_on_home_page_clicks_contacts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_clicks_new()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rick",
      "offset": 29
    },
    {
      "val": "Martin",
      "offset": 40
    }
  ],
  "location": "FreeCrmStepDefinitions.user_enters_fname_and_lname(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_clicks_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_quits_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Free CRM login and create contact scenario",
  "description": "",
  "id": "free-crm-features;free-crm-login-and-create-contact-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is CRM",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters \"shankarpk89@gmail.com\" and \"freecrm@Pks89\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user lands on home page and home page title is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user clicks contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enters contact details \"Albert\" and \"Tin\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user clicks save",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#\tThen user clicks on contacts"
    },
    {
      "line": 27,
      "value": "#\tThen user validates that the user has been added to the contacts table"
    }
  ],
  "line": 28,
  "name": "user quits the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_is_on_login_page()"
});
formatter.result({
  "duration": 2199501892,
  "status": "passed"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.title_of_login_page_is_crm()"
});
formatter.result({
  "duration": 29490741,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[CRM]\u003e but was:\u003c[WebDriver]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefinition.FreeCrmStepDefinitions.title_of_login_page_is_crm(FreeCrmStepDefinitions.java:32)\r\n\tat ✽.When title of login page is CRM(C:/Users/pkshank/eclipse-workspace/BDD_Framework_Free_App/src/test/java/features/freeCrmFeatures.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "shankarpk89@gmail.com",
      "offset": 13
    },
    {
      "val": "freecrm@Pks89",
      "offset": 41
    }
  ],
  "location": "FreeCrmStepDefinitions.user_enters_email_address_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.correct_title_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_on_home_page_clicks_contacts()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_clicks_new()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Albert",
      "offset": 29
    },
    {
      "val": "Tin",
      "offset": 42
    }
  ],
  "location": "FreeCrmStepDefinitions.user_enters_fname_and_lname(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_clicks_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeCrmStepDefinitions.user_quits_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});