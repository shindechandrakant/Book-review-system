let mysqlConnection =  require('./dbConnection');
let queries = require("./queries");

let AdminRights = {
    insertNewBook : (newBook, resolve, reject) => {

        let adminQuery = queries.adminQuereies.insertNewBook;
        // ISBN_NO, name, author_name, pages, price, publication, category, language , pub_date,auth_email, auth_intrest_area, img_link
        mysqlConnection.query(adminQuery,[newBook.ISBN, newBook.bName, newBook.authorName, newBook.pages, newBook.price, newBook.publication, newBook.genres, newBook.language, newBook.pubDate, newBook.authorEmail, newBook.genres, newBook.imgLink, newBook.description], (err, data, field) => {
            if(!!err) {
                console.log("Something went wrong while inserting new Book \n Error is : " + err.message);
                reject(err);
            }
            else {
                console.log("New Book inserted successfully \n Response is : " + data);
                resolve(data);
            }
        });
    },

    adminPanel : (resolve, reject) => {

        let query = queries.adminQuereies.adminPanelQuery;
        mysqlConnection.query(query, (err, data, field) => {

            if(!!err)
            {
                console.log("Error occured while Admin pannel query" + err.message);
                reject(err);
            }
            else {
                console.log("data occured for Admin pannel query" );

                let temp =  data.map( (_data) =>  Object.assign( { }, _data));
                // console.log(JSON.stringify(temp))
                resolve(temp)
            }
        });

    },

    editBook : ( ISBN,resolve, reject) => {

        let query = queries.adminQuereies.editBookQuery;
        
        mysqlConnection.query(query, [ ISBN ], (err, data, field) => {

            if(!!err)
            {
                console.log("Error occured while retriving Edit book data from DB -> " + err.message);
                reject(err);
            }
            else {
                console.log("Data got for Edit Book " + ISBN);
                console.log(data);
                resolve(data);
            }
            
        });
    },
    
    updatebook: (updatedData, resolve, reject) => {
        let query = queries.adminQuereies.updateBook;
        mysqlConnection.query(query, [updatedData.ISBN, updatedData.bName, 
            updatedData.authorName, updatedData.pages, updatedData.price,
            updatedData.publication, updatedData.genres, updatedData.language, 
            updatedData.pubDate, updatedData.authorEmail, updatedData.imgLink, updatedData.description] , 
            (err, data, field) => {
            if(!!err)
            {
                console.log("Error Occured while Updating Book" + JSON.stringify(updatedData))
                console.log("Error is ------->>>>> " + err.message);
                reject(err);
            }
            else {
                console.log("Book Updated Succesfull ")
                resolve(data)
            }
        })
    },

    getUserList : (resolve, reject) => {

        let query = queries.adminQuereies.getUserList;
        mysqlConnection.query(query, (err, data, field) => {

            if(!!err)
            {
                console.log("Error occured while user List query" + err.message);
                reject(err);
            }
            else {
                console.log("data occured for user List query" );

                let temp =  data.map( (_data) =>  Object.assign( { }, _data));
                // console.log(JSON.stringify(temp))
                resolve(temp)
            }
        });
    },


    deleteBook :(ISBN, resolve, reject) => {

        let query = queries.adminQuereies.deleteBook;
        mysqlConnection.query(query, [ ISBN ], (err, data, field) => {

            if(!!err)
            {
                console.log("Error occured while deleting Book -> " + err.message);
                reject(err);
            }
            else {
                console.log("Book deleted successfully " + ISBN);
                console.log(data);
                resolve(data);
            }
        });
    },


    getTotalReviews : (resolve, reject) => {

        let query = queries.adminQuereies.getTotalReviews;
        mysqlConnection.query(query, (err, data, field) => {

            if(!!err)
            {
                console.log("Error occured while user List query" + err.message);
                reject(err);
            }
            else {
                console.log("data occured for user List query" );

                let temp =  data.map( (_data) =>  Object.assign( { }, _data));
                // console.log(JSON.stringify(temp))
                resolve(temp)
            }
        });
    },


    getAdminStats : (resolve, reject) => {
        let query = queries.adminQuereies.databaseStats;
        mysqlConnection.query(query, (err, data, field) => {

            if(!!err)
            {
                console.log("Error occured while retriving stats -> " + err.message);
                reject(err);
            }
            else {
                console.log("stats retrived successfully ");
                console.log(data);
                resolve(data);
            }
        });
    }






};



module.exports = AdminRights;
















