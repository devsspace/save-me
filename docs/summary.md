<h1 style="text-align: center; color: blue;">Save Me</h1>



Search donor  
---
- Search with 
  - `blood group`
  - `location`
  - `time`
- A list of donors available for you will be shown  
- Choose a donor and click on the card.  
- If you are not logged in then you need to `log in first`  
- Contact the donor with the provided information
- Click the found button if confirmed


Blood request  
---
If no donor found by searching:  
- Request blood to admin by providing 
  - `blood group`
  - `location`
  - `time`
  - `number of bags`
- The admins will send you a notification as soon as they find the blood


Dashboard/Profile
---
	Admin: dashboard  
		Donors  
		Donation statistics  
		Pending Request  
		
	User/donor: profile  
		Info  


Routes  
---
    GET /api/donors?bloodGroup=o+&location=dhaka&status=eligible ) => [donor]  
    GET /api/donors/:id => {donor}  

    GET /api/blood-requests => [bloodRequest]
    POST /api/blood-requests => "confirmation"




Contribute
----------

- Contribute on Github: https://github.com/devsspace/save-me

Support
-------

If you are having issues, please let us know here:
devs.spaces@gmail.com

License
-------

The project is licensed under no license.