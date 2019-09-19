Feature: Free CRM features 

#Without Examples keyword

#Scenario: Free CRM login scenario


#Given user is on login page
#When title of login page is CRM
#Then user enters "shankarpk89@gmail.com" and "freecrm@Pks89"
#Then user clicks on login button
#Then user lands on home page and the home page menu is displayed

#Using Examples keyword
Scenario Outline: Free CRM login and create contact scenario 

	Given user is on login page 
	When title of login page is CRM 
	Then user enters "<email address>" and "<password>" 
	Then user clicks on login button 
	Then user lands on home page and home page title is displayed 
	Then user clicks contacts 
	Then user clicks on new button 
	Then user enters contact details "<firstname>" and "<lastname>" 
	Then user clicks save 
	#	Then user clicks on contacts
	#	Then user validates that the user has been added to the contacts table
	Then user quits the browser 
	
	
	Examples: 
	
		| email address 		| password	   | firstname | lastname |
		|shankarpk89@gmail.com	| freecrm@Pks89| Jonathan  | Scurry   |
		|shankarpk89@gmail.com	| freecrm@Pks89| Rick	   | Martin   |
		|shankarpk89@gmail.com	| freecrm@Pks89| Albert    | Tin      |
		
		
		
		
		
