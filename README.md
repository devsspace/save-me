<h2 align="center">Save Me Healthcare Application </h2>

<p align="center">      
      <img src="" alt="Save Me Healthcare"  width="500px" /> </br>
</p>



## Homepage
![Homepage Save Me Healthcare](public/preview.png)
## Documentation

* [How to work with multiple branch or team collaboration](docs/multile-branch-team-collaboration-guideline.md)

* [How to Setup GrapHQL & Next.js Application ](docs/how-to-setup-graphql-nextjs-app.md)


## How to run this project
 * Clone first `git clone https://github.com/samayun/save-me.git save-me`
 * `cd save-me`
 * run command `npm install` 
 * rename file `.default.env` to `.env` & must include database string on ENVIRONMENT VARIABLES
```
  DATABASE_URL  = DATABASE_CONNECTION_STRING_for_production

  JWT_SECRET_KEY=SECRET

```
 * run command `npm run dev`
 * browse: http://localhost:3000 for seeing main application views
 * browse to api query by GraphiQL: http://localhost:3000/api/graphql

## Project Features:

 Technical
* Push notification
* Email marketing
* Collect user experience & feedback
* Multiple payment system : Link
* User Registration
* Admin Panel


Health Sector
   * Speciality wise Doctors categories
   * Doctors appointments
   * Video Call with doctor
   * Follow up appointments with Doctor
   * Digital prescription
   * Emergency Ambulance
   * Emergency Appointment
   * Emergency Medicine Delivery
   * Covid-19 test & Special care
   * Medical Test Sample collection & Report processing

Blood Management
  * Blood Bank management
  * Patient info
  * Donors info
  * Search donors in local place
 
Nursing Home Care
 * Regular Nursing care (6 hrs, 8 hrs, 12 hrs to 24 hrs) from Home
 * Special Nursing Service
 * Install saline
 * Install catheter
 * Injection, Insulin push
 * Surgical dressing

Online Pharmacy
   * All types of medicine (multi vendor)
   * All types of vaccine
   * All types of surgical equipment
   * prescription upload for get proper medicine and save lifetime for future access
   * 64 countries home delivery service
   * Admin panel & Inventory management

# Used Technologies

Backend [API SERVER URI http://localhost:3000/api/graphql ]
*  Language : Node.js
*  Framework : Express.js ( express-graphql wrapper )
*  ORM : Mongoose
*  Database : MongoDB

Frontend

*  Language : JavaScript
*  Framework : NEXT.js 
*  UI component Library/framework : Tailwind CSS
*  State Mangement : Apollo
  