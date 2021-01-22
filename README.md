<h1>Student Directory Application</h1>

Hello, and thank you all for giving me the opportunity to undergo this assessment! As an aspiring frontend developer, I always strive to refine my skillset and learn new technologies. This assessment allowed me to do both of these things, and for that I am extremely grateful.

My deployed application can be found at this link: https://convergenz-student-table.netlify.app/

Additionally, I'd like to take you through my general process of creating this application so you can all have a better idea of how I approach smaller projects like this:

1. I only needed to construct two backend routes for this project: one for creating new students through the input form, and one for retrieving all students in my database. I started by creating an Express file, and creating two routes: POST /name (for creating new students) and GET /allNames (for retrieving all students)

2. After creating the backend, I created a client side application using the React library. The two functions I created for the routes used a 3rd party HTTP client called Axios, which is essentially equivalent to the built-in Fetch API as of ES6. 

3. I installed the NPM package for Google Recaptcha, retrieved an API key, and forced the application to only allow the POST request to go through once the Recaptcha verified that the user was a human.

4. After I styled my application and had everything working locally, I deployed the backend onto Heroku, and the frontend onto Netlify. After adding config variables in each of the site's control panels and configuring CORS in my Express application, everything that was deployed worked just as it did locally.

At the moment, the application is far from perfect, and is experiencing a bit of slowdown (likely from the Heroku deployed server). However, I wanted to deliver this project to you all in a timely manner and show you what I was capable of under a deadline. 

Once again, thank you all so much for this opportunity! Hoping to hear back from you all in the near future :)
