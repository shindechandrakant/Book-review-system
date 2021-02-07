const express = require("express");
const bodyParser = require("body-parser")
const dataRetriveMethods = require("../src/Database/getDataFromDB");
const dataInsertionMethods = require("../src/Database/insertDataIntoDB");
const userDatabaseMethods = require("../src/Database/userDBconnection");
const AdminRightDatabaseMethods = require("../src/Database/adminRights")
const cores = require("cors");

let app = express();
const port = 7000;

app.use(cores());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true }));

//*******************USER**************

app.get('/user/login', (req, res, next)=> {
    
    let userEmail = req.query.email;
    console.log("In login route looking for ", userEmail);
    userDatabaseMethods.getUserInfoByEmail(userEmail, (data) => {
        console.log(`login for ${ userEmail } & dataRetrived ${ data } `);
        res.status(200).send(data);
    }, (err) => {
        next( new Error(err));
    })
});

app.get('/user/profile', (req,res,next) => {
    
    let userID = req.query.userId;
    console.log("In profile route looking for ", userID);
    userDatabaseMethods.getUserInfoByID(userID, (data) => {
        
        console.log(`Profile for ID: ${ userID } & data is -> ${ data }`, userID);
        res.status(200).send(data);
    }, (err) => {
        next(new Error(err));
    } )
});

app.get('/userreviews', (req, res, next) => {

    let userID = req.query.user_ID;
    console.log("Data retrived foe user Reviews : user ID -> " + userID);

    userDatabaseMethods.getUserReview(userID, (data) => {
        res.status(200).send(data)
    }, (err) => { 

        next(new Error(err));
    });
})

app.put('/updateuserprofile', (req, res, next) => {

    let newUserData = req.body.user;
    console.log("In the user update route")
    userDatabaseMethods.updateUserProfile(newUserData, (data) => {

        res.status(200).send(data)
    }, (err) => {
        next(new Error(err))
    })
})

app.delete('/deleteprofile', (req, res, next) => {

    console.log("in the profile Delete route");
    let ID = req.query.userID;
    console.log("ID is -> " + ID);

    userDatabaseMethods.deleteUserProfile(ID, (data) => {

        res.status(200).send(data);

    }, (err) => {
        next(new Error(err))
    })
});


app.post('/test', (req,res,next) => {
    console.log("Api is connected")
    let newUser = req.body.data;
    console.log("In register route looking for ", newUser.name);
    userDatabaseMethods.insertNewUser(newUser, (data) => {
        console.log('Data inserted sucessfully' + data);
        res.status(200).send(data);
    }, (err) => {
        next(new Error(err));
    });

})

// ******************InsertNewBook***************

app.post("/insertbook", (req, res, next) => {

    let newBook = req.body.book;
    console.log("In the new Book Insert Route" + newBook);
    AdminRightDatabaseMethods.insertNewBook(newBook, (data)=> {
        
        res.status(200).send("Book Inserted successfully" + data);

    }, (err) => {
        next(new Error(err));
    });

});

//********************* Admin Panel ****************** 

app.get('/adminpanel', (req, res, next) => {

    AdminRightDatabaseMethods.adminPanel((data) => { 

        res.status(200).send(data);
    }, (err) => {
        next(err);
    })

});

app.get('/editbook', (req, res, next) => {

    let ISBN = req.query.ISBN;
    console.log("in the editBook route " + ISBN);

    AdminRightDatabaseMethods.editBook(ISBN, (data) => {

        res.status(200).send(data);

    }, (err) =>{
        next(new Error(err));
    })
})

app.put('/updatebook', (req, res, next) => {

    let updatedData = req.body.book;
    console.log("Data got for updation :-> " + JSON.stringify(updatedData));
    AdminRightDatabaseMethods.updatebook(updatedData, (data) => {

        res.status(200).send("data updated");
    }, (err) => {
        next(new Error(err));
    })
})

app.use('/userslist', (req, res, next) => {

    console.log("In the userList route ");
    AdminRightDatabaseMethods.getUserList((data) => {
        res.status(200).send(data);
    }, (err) => {
        next(new Error(err));
    })

})

app.delete('/deletebook', (req, res, next) => {

    let ISBN = req.query.ISBN;
    console.log("In the delete route Req to delete ->>>> ", ISBN);
    AdminRightDatabaseMethods.deleteBook(ISBN ,(data) => {
        res.status(200).send(data);
    }, (err) => {
        next(new Error(err));
    })
})

app.get('/reviewlist', (req, res, next) => {

    console.log("In the review List route ");
    AdminRightDatabaseMethods.getTotalReviews((data) => {
        res.status(200).send(data);
    }, (err) => {
        next(new Error(err));
    })

});

app.get('/adminstats', (req,res, next) => {

    AdminRightDatabaseMethods.getAdminStats((data) => {
        res.status(200).send(data);
    }, (err) => {
        next(new Error(err));
    })

})

//********************* BOOK *********
app.get('/book',(req,res,next) => {
    
    let querydata = req.query.bookName;
    console.log("Data for search" + querydata);
    dataRetriveMethods.getDataForQuery(querydata,(data) => {
        console.log(data);
        res.status(200).send( data )
    }, (err) => {
        next(new Error(err));
    });
})

app.get('/search',(req,res,next) => {

    let searchFor = req.query.bookName;
    console.log("You are in search function and looking for " + searchFor)
    dataRetriveMethods.getDataBySearch(searchFor,(data) => {
        console.log(data);
        res.status(200).send(data);
    }, (err) => {
        next(new Error(err));
    });
})

app.get('/author',(req,res,next) => {

    let searchFor = req.query.authorName;
    console.log("You are in category function and looking for " + searchFor)
    dataRetriveMethods.getDataByAuthor(searchFor,(data) => {
        console.log(data);
        res.status(200).send(data);
    }, (err) => {
        next(new Error(err));
    });
})

app.get('/category',(req,res,next) => {

    let searchFor = req.query.category;
    console.log("You are in category function and looking for " + searchFor)
    dataRetriveMethods.getDataByCategory(searchFor,(data) => {
        console.log(data);
        res.status(200).send(data);
    }, (err) => {
        next(new Error(err));
    });
})

app.get('/alreadysubmitted', (req, res, next) => {

    console.log("*************************");
    let user = {
        ISBN : req.query.ISBN,
        userId : req.query.userId,
    };
    console.log(user.ISBN);
    console.log(user.userId);

    console.log("**************")
    dataRetriveMethods.getReviewStatus(user, (data) => {
        console.log(data);
        res.status(200).send(data);
    }, (err) => {
        next(new Error(err));
    });
})

app.post('/submitreview',(req, res,next) =>{

    let _review = req.body.review;
    console.log("data got for inserting review and that is " + _review);
    dataInsertionMethods.insertReview(_review, (data) => {
        res.status(200).send(data);
        dataInsertionMethods.updateAverageReviewTable(_review, (success) => {
            console.log("Table Updated successfully " + success)
        }, (err) => {
            console.log("Average review Table updation fail " + err.message);
        });
    }, (err) => {
        next(new Error(err));
    })

})

app.get("/detail", (req, res, next) => {

    const task = req.query.get;
    const ISBN = req.query.ISBN;
    console.log("in detail Review and u are looking for " + ISBN);
    dataRetriveMethods.getDetailInfornation(ISBN, task,async (data) => {
        res.status(200).send(data);
        console.log(`Data retrived for ${ task } ${ISBN} and Response is ${data}`);
    }, (err) => {
        next(new Error(err));
    });
});

app.get('/',(req,res,next) => {

    dataRetriveMethods.getAllData((data) => {
        res.status(200).send( data )
    }, (err) => {
        next(new Error(err));
    });
})

// Error route
app.use((err,req,res,next) => {

    res.status(err.status || 500);
    res.send({
        err:{
            status: err.status || 500,
            error : err.message
        }
    })
});

app.listen(port, () => {
    console.log(`server is running on ${port} port`);
})










