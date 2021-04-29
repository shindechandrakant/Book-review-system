# Book-review-system

* #### Tool used
    ```
        React js
        node js
        mySql
    ```
* ##### To run this project on your machine do following steps

    1. clone this repository using this command 
        ```bash
            git clone https://github.com/shindechandrakant/book-review-system.git
        ```
    1. then run command 
        ```bash
            npm install
        ```
    1. go to ```book-review-system/src/Database/globalObject.js ``` file
        ```javascript
            let mysqlDatabaseConnectionObj = {

                host:"localhost",
                user:"root",
                port : "PORT", // specify mySql port e.g. 3306 default port
                password:"PASSWORD", // Enter your mysql password if it is not set then leave "" (blank)
                database:"bookreviewsystem"

            };

            module.exports =  mysqlDatabaseConnectionObj;
        ```
    1. now open your mySql command line Client(tool) and use this commands.
        in your book-recview-system folder there is ``` bookreviewsystem.sql``` file. copy file path and paste in place of PATH
        ```mysql
            mysql> create bookreviewsystem;
            mysql> use bookreviewsystem;
            mysql> source PATH(Here you need to import the path of the sql file);
            eg:
            mysql> source E:/desktop/bookreviewsystem.sql;
        ```
        it will add database into your machine

    1. after adding databse successfully in your machine
        navigate to ``` book-review-system/tools/ ``` file in project. open cmd in it and run fillowing command
        ```bash
            node server.js
        ```
        it will start backend and will show ```Database connected sucessfully ``` message
    1. now open cmd and navigate to book-review-system and run following command
        ```bash
            npm start
        ```
        it will open the app in the development mode.
        Open http://localhost:3000 to view it in the browser.


> design of project/ user interface

* ##### Home page / Landing page
    * User will land here <br> 
    ![img_testing](https://github.com/shindechandrakant/book-review-system/blob/main/UI/Home_page.png?raw=true)

* ##### search page

    * Here user can search base on Author name, Book name, Gener <br>
    ![search page](https://github.com/shindechandrakant/book-review-system/blob/main/UI/search.png?raw=true)

* ##### Book info
    * After clicking on Book name you will be able to see Detail about that Book. and if you are logged in you can review that book. 
![book info](https://github.com/shindechandrakant/book-review-system/blob/main/UI/detail.png?raw=true)

* review form
    * Rate book in scale ``` 1 - 10 ```
![review form](https://github.com/shindechandrakant/book-review-system/blob/main/UI/review_form.png?raw=true)

* book reviews
    * Other peoples review
![book reviews](https://github.com/shindechandrakant/book-review-system/blob/main/UI/Useres_review.png?raw=true)


* ##### login page
![img_testing](https://github.com/shindechandrakant/book-review-system/blob/main/UI/Login.png?raw=true)

* ##### Register page
![register page](https://github.com/shindechandrakant/book-review-system/blob/main/UI/register.png?raw=true)

* ##### user profile
    * In your profile you can see your reviews and update your profile
    * if you are admin then you will be able to modify book info. too 
![user profile](https://github.com/shindechandrakant/book-review-system/blob/main/UI/user_profile.png?raw=true)
___
* ##### admin tool
    * In Admin tool variours options are provided
        1. Add Book
        1. List of Users
        1. Reviews of Books (you can't change review)
        1. Update Book
![admin tool](https://github.com/shindechandrakant/book-review-system/blob/main/UI/Admin_tool.png?raw=true)

* ##### book list
    * Here Admin will see all books and he can delete or update books
![book list](https://github.com/shindechandrakant/book-review-system/blob/main/UI/book-list.png?raw=true)
