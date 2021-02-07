let mysqlConnection =  require('./dbConnection');
let queries = require("./queries");


let userDBConnections = {
    
    insertNewUser : (newUser, resolve, reject) => {
        let query = queries.userQuerys.insertNewUser;
        let data = [[newUser.name, newUser.email, newUser.area_of_interest, newUser.password, 'user']];

        mysqlConnection.query(query,[data], (err, data, fields) => {
            if(!!err) {
                console.log(`Error occured while inserting new user & Error : ${err.message}`);
                reject(err);
            }
            else {
                console.log(`new user inserted successfully into DB : ${data}`);
                resolve(data)
            }
        });
    },

    getUserInfoByID : (id, resolve, reject) => {

        let query = queries.userQuerys.getUserDataByid;
        mysqlConnection.query(query, [id], (err, data, fields) => {
            if(!!err) {
                console.log(`Error occured while retriving user data ID: ${id} & Error : ${err.message}`);
                reject(err);
            }
            else {
                console.log("User Data " + data);
                let temp = data.map( (_data) => Object.assign({ }, _data))
                resolve(temp);
            }
        });
    },

    getUserInfoByEmail : (email, resolve, reject) => {

        let query = queries.userQuerys.getUserDataByemail;
        mysqlConnection.query(query, [email], (err, data, fields) => {
            if(!!err) {
                console.log(`Error occured while retriving user data email : ${email} & Error : ${err.message}`);
                reject(err);
            }
            else {
                console.log("Data retrived for Login " + data)
                let temp = data.map( (_data) => Object.assign({ }, _data))
                resolve(temp);
            }
        });
    },

    getUserReview : (userID, resolve, reject) => {

        let query = queries.userQuerys.getUserReviews;

        mysqlConnection.query(query, [ userID ], (err, data, fields) => {

            if(!!err) {
                
                console.log("Error occured while getting users review Error is ->>>> " + err.message);
                reject(err);
            }
            else {
                console.log(" data retrived for User reviews")
                let temp = data.map( _data => Object.assign({ }, _data))
                resolve(temp);

            }
        });
    },

    deleteUserProfile : (userID, resolve, reject) => {

        let query = queries.userQuerys.deleteUserAccount;
        console.log("In delete function " + userID);
        mysqlConnection.query(query, [ userID ], (err, data, fields) => {

            if(!!err)
            {
                console.log(" error occured while deleting user Profil  Error is -> " + err.message);
                reject(err);
            }
            else 
            {
                console.log("User account deleted successfull Message -> " + JSON.stringify(data));
                resolve(data);
            }
        })
    },


    updateUserProfile: (userData, resolve, reject) => {

        let query = queries.userQuerys.updateUserProfile;
        // userData.userID, userData.name, userData.password, userData.email, userData.aof
        mysqlConnection.query(query, [userData.userID, userData.name, userData.password, userData.email, userData.aof], (err, data, field) => {

            if(!!err) {

                console.log("error ocured while updating user profile " + err.message)
                reject(err);
            }
            else {
                console.log("user Data updated successfully")
                resolve(data);
            }
        });
    }


};



module.exports = userDBConnections;
