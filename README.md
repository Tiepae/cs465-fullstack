# cs465-fullstack
CS-465  Full Stack Development with MEAN

## Architecture ##

When building this project, I used three different frontend development technologies: Express HTML, JavaScript, and a single-page application (SPA). Each one contributed to the overall project in its own way. 
Express HTML was used to serve and render the webpages, JavaScript added interactivity for the user, and the SPA updated page content dynamically without requiring a full page refresh. 
Unlike the SPA, which refreshes only the necessary content, Express HTML typically reloads the entire page when new data is requested.

I used MongoDB because it provides a flexible way to store information as JSON-like documents. It is also scalable, making it easier to expand the project as the number of users grows.
In addition, MongoDB can improve data reliability through replication by saving multiple copies of data across different servers when configured to do so.

## Functionality ##

While JSON is built off JavaScript, it by itself is not Javascript. It instead is a data format that acts differently from programming languages. I like to think of it like a template for
storing data. 

During this process I was able to refactor the code to have buttons for the UI so that the user can edit their trip, add trips, and update their trips.

## Testing ##

The methods I established in this project would outline a lot of security features present, such as login, logout, and create account functionality. Each endpoint had a specific purpose, whether it was retrieving trip information, creating new data, updating existing data, or deleting records. 
These endpoints allowed the frontend and backend to communicate with one another while keeping the application organized. Testing these methods and endpoints helped confirm that valid requests worked as expected while unauthorized or invalid requests were handled correctly.


## Reflection ##

Overall, this course helped me get a better look into what full-stack development actually is. I always knew it involved tying frontend and backend development together, but until now I had never developed a full-stack project myself. The exposure was definitely needed.

I learned about endpoints, single-page applications (SPAs), and JavaScript, while also improving my skills using Windows PowerShell to run local servers and GitHub to manage and upload my project files. These are all valuable skills that have given me more exposure to technologies and tools that many companies expect developers to know, making me a more marketable candidate in the field.
