let mysqlConnection =  require('./dbConnection');
let queries = require("./queries");

// Defination of data retrive methods
let dataRetriveDatabaseMethods = {



    getReviewStatus : (user, resolve, reject) => {

        const query = queries.detailInfoQuery.reviewStatus;
        mysqlConnection.query(query, [user.userId, user.ISBN], (err, data, fields) => {

            if(!!err) {
                reject(err);
                console.log(`Error occured for review status ${ err.message } in ${ __dirname }`);
            }
            else {
                var temp = data.map((_data) => Object.assign({ },_data))
                resolve(temp);
            }
        })
    },

    getAllData: (resolve,reject) => {

        const getAllDataQuery = queries.getAllDataQuery;


        // console.log(getAllDataQuery);
        mysqlConnection.query(getAllDataQuery,(err,data,fields) => {
            if(!!err) {
                reject(err);
                console.log(err.message);
            }
            else {
                var temp = data.map((_data) => Object.assign({ },_data))//connvert SQL data in JSON format
                console.log(`data retrived from database in getAll Data function  ` );
                resolve(temp);
            }
        });
    },

    getDataForQuery: (query ,resolve, reject) => {

        let mysqlQuery =  queries.categoryQuery;
        mysqlConnection.query(mysqlQuery,[query] ,(err,data,fields) => {

            if(!!err) {
                reject(err);
                console.log(`Error occured for ${query} ${ err.message } in ${ __dirname }`);
            }
            else {
                var temp = data.map((_data) => Object.assign({ },_data));
                console.log(`data retrived for Query ${ query }${temp}`)
                resolve(temp);
            }
        })
    },

    getDataBySearch : (searchFor , resolve, reject) => {
        searchFor = "%"+ searchFor + "%";
        let mysqlQuery =  queries.dynamicSearchQuery;
        mysqlConnection.query(mysqlQuery,[searchFor, searchFor, searchFor, searchFor] ,(err,data,fields) => {

            if(!!err) {
                reject(err);
                console.log(`Error occured for ${ searchFor } ${ err.message } in ${ __dirname }`);
            }
            else {
                var temp = data.map((_data) => Object.assign({ },_data));
                console.log(`data retrived for Query ${ searchFor }${temp}`)
                resolve(temp);
            }
        })
    },
    getDataByAuthor : (searchFor , resolve, reject) => {
        
        let mysqlQuery = queries.authorQuery;
        mysqlConnection.query(mysqlQuery,[searchFor, searchFor] ,(err,data,fields) => {

            if(!!err) {
                reject(err);
                console.log(`Error occured for ${searchFor} ${ err.message } in ${ __dirname }`);
            }
            else {
                var temp = data.map((_data) => Object.assign({ },_data));
                console.log(`data retrived for Author Query ${ searchFor }${temp}`)
                resolve(temp);
            }
        })
    },

    getDataByCategory : (searchFor , resolve, reject) => {
        let mysqlQuery =  queries.categoryQuery;
        if(searchFor === "trending")
            mysqlQuery = queries.trendingQuery;
        mysqlConnection.query(mysqlQuery,[searchFor, searchFor] ,(err,data,fields) => {

            if(!!err) {
                reject(err);
                console.log(`Error occured for ${searchFor} ${ err.message } in ${ __dirname }`);
            }
            else {
                var temp = data.map((_data) => Object.assign({ },_data));
                console.log(`data retrived for Category Query ${ searchFor }${temp}`)
                resolve(temp);
            }
        })
    },
    getDetailInfornation : (ISBN, task, resolve, reject) => {

        let query = "";
        if(task === "header") 
            query = queries.detailInfoQuery.headerQuery;
        else if(task === "rating") 
            query = queries.detailInfoQuery.averageReviewQuery;
        else if(task == "reviews") 
            query = queries.detailInfoQuery.userReviewQuery;

        mysqlConnection.query(query, [ISBN], (err,data,fields) => {

            if(!!err) {
                console.log(`Error occured for ${query} and error is ${err.message}`);
                reject(err);
            } else {
                let temp = data.map( (_data) => Object.assign({ }, _data));
                console.log(`Data is ${ task } ${ data, temp } `);
                resolve(temp);
            }
        })
    }
};

module.exports =  dataRetriveDatabaseMethods;











