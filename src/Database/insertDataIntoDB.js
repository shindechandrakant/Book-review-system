let mysqlConnection =  require('./dbConnection');
let queries = require("./queries");


let insertionMethods = {

    insertReview : (reviewData, resolve, reject) => {

        const data = [[reviewData.ISBN, reviewData.writing, reviewData.engagement, reviewData.gripFactor, reviewData.grammer, reviewData.userId, reviewData.readingWorth,reviewData.interactivity]]
        console.log("data for insertion " +  data);
        // const data = [["BOOK-ISBN-1",7,8,7,8,9,8,9],]
        const query = queries.insertUserReview;
        mysqlConnection.query(query, [data], (err, _data, fields) => {
            
            if(!!err) { 
                console.log("Something went wrong while inserting error is : " + err.message + "for + " + reviewData);
                reject(err);
            }
            else {
                console.log("Data inserted succesfully" + _data);
                resolve(data);
            }
        })
    },

    updateAverageReviewTable : (reviewData, resolve, reject) => {
        console.log("data for userReview Updation " + reviewData);
        
        const query = queries.updateAverageReview;

        mysqlConnection.query(query,[ reviewData.writing, reviewData.engagement, reviewData.gripFactor, reviewData.grammer,1, reviewData.readingWorth,reviewData.interactivity, reviewData.ISBN ], (err, _data, fields) => {
            
            if(!!err) { 
                console.log("Something went wrong while inserting error is : " + err.message + "for + " + reviewData);
                reject(err);
            }
            else {
                console.log("Data ART updated succesfull" + _data)
                resolve(_data);
            }
        })
    }
};



module.exports = insertionMethods;











