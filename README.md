# Web-Tech-Sem-Project
Blog app using mern stack

This web app was built using mern stack - MongoDB, Express JS, React and Node JS
Front end uses React and is also styled by Bootstrap and CSS.
All the articles are stored in MongoDB
Currently the code uses the local MongoDB (compass)
The user can also use the cloud version of MongoDB (atlas)
This code isnt built for multi users. This works locally and single user.

But the main idea of the app is that the website is devoted to sharing thoughts, photos, reviews, recipes and so much more! 
The main objective is to manage the details of the blog- it’s topics, ideas and entries.
The application will be reduced as much as possible to avoid errors while entering data. 
It would provide an error message on entry of invalid data. 
No formal knowledge is needed for the user to use this system. 
Thus, it proves to be very user-friendly. 
It can assist the user to concentrate on their other activities rather than concentrating on the record-keeping. 
Hence it helps organize all the content that has been posted for better utilization of resources.

## Database changes
The link for the database on MongoDB Atlas (cloud) is stored in the uri variable.
ATLAS_URI has the link. This link can be found in the .env file.
SO if the user prefers to have the link to their own MongoDB Atlas database, the link can be pasted in ATLAS_URI variable which is in .env file
Also, in server.js, use the uri variable in mongoose.connect( )

If the user prefers to use local database (MongoDB compass), they can directly use the existing url in the code (i.e., mongodb://localhost/blog)
Here the database name is 'blog' which is mentioned at the end of the url.
If the user prefers to use another name for database name, then change the url (mongodb://localhost/<database_name>)
Next, create a collection inside the database called articles.

## How to use the app
The app consists of a home page which displays all the articles.
If no articles are there, then the loading animation would appear.
There is a navigation bar with a 'Home' button and and 'New Article' button

Clicking on the 'Home' button will navigate the user back to the first page
Clicking on the 'New Article' button will navigate the user to a new page that contains a form

Each article on the home page has a title, the date it was created on and the author name.
Below these are two buttons - 'Edit article' and 'Delete' button.
Edit article can be used to modify the contents of the already exisitng articles.
Delete will remove the article.

The form has the fields- Author name, Title and Blog Content
The user can fill in the contents. All fields are mandatory
Once filled, on clicking the 'Post Article' button and it gets saved in the database.
Once clicked, an alert message would appear prompting the user if the article was posted.
The user can come back to the home page to see all the articles.

All the article titles are links. Clicking on them would lead the user to another page that displays all the details of the blog.
At the bottom is a 'Back to main' button that will lead the user back to the home page

## How to run the code
1. Fork the repository to your GitHub account by clicking on the 'fork' button on the top right
2. Clone it to your local system
3. Use the command git clone https://github.com/LakshmiNarayanP/Web-Tech-Sem-Project.git
4. Using the terminal or prompt, navigate to this project folder
5. Since there is the front end and the back end, and both have to work simultaneously, use the command: npm run dev
6. This should start the client and the server and the app should automatically load up on the browser with the link: http://localhost:3000
