/*
(select book.name, book.ISBN_NO, review_count, author_name, Img_link 
from book, author, images, averagereview 
where book.author_id = author.author_id and 
book.ISBN_NO = images.ISBN_NO and 
book.ISBN_NO = averagereview.ISBN_NO and 
category Like ?)
union
(select book.name, book.ISBN_NO, review_count, author_name, Img_link 
from book, author, images, averagereview 
where book.author_id = author.author_id and 
book.ISBN_NO = images.ISBN_NO and 
book.ISBN_NO = averagereview.ISBN_NO and 
author.author_name Like ?)
union
(select book.name, book.ISBN_NO, review_count, author_name, Img_link 
from book, author, images, averagereview 
where book.author_id = author.author_id and 
book.ISBN_NO = images.ISBN_NO and 
book.ISBN_NO = averagereview.ISBN_NO and 
book.name Like ?)
union
(select book.name, book.ISBN_NO, review_count, author_name, Img_link 
from book, author, images, averagereview 
where book.author_id = author.author_id and 
book.ISBN_NO = images.ISBN_NO and 
book.ISBN_NO = averagereview.ISBN_NO and 
book.ISBN_NO Like '%m%'
*/

let queries = {

    getAllDataQuery: "select book.name, book.ISBN_NO, review_count, author_name, Img_link, descr  from book, author, images, averagereview , description where book.author_id = author.author_id and book.ISBN_NO = images.ISBN_NO and book.ISBN_NO = averagereview.ISBN_NO and description.ISBN_NO = book.ISBN_NO ORDER BY LENGTH (book.name) ;",

    dynamicSearchQuery : "(select book.name, book.ISBN_NO, review_count, author_name, Img_link from book, author, images, averagereview where book.author_id = author.author_id and book.ISBN_NO = images.ISBN_NO and book.ISBN_NO = averagereview.ISBN_NO and category Like ?) union(select book.name, book.ISBN_NO, review_count, author_name, Img_link from book, author, images, averagereview   where book.author_id = author.author_id and book.ISBN_NO = images.ISBN_NO and book.ISBN_NO = averagereview.ISBN_NO and author.author_name Like ?)union (select book.name, book.ISBN_NO, review_count, author_name, Img_link from book, author, images, averagereview where book.author_id = author.author_id and book.ISBN_NO = images.ISBN_NO and book.ISBN_NO = averagereview.ISBN_NO and book.name Like ?) union (select book.name, book.ISBN_NO, review_count, author_name, Img_link from book, author, images, averagereview where book.author_id = author.author_id and book.ISBN_NO = images.ISBN_NO and book.ISBN_NO = averagereview.ISBN_NO and book.ISBN_NO Like ?)",

    // authorQuery : "select book.name, book.ISBN_NO, review_count, author_name, Img_link from book, author, images, averagereview where book.author_id = author.author_id and book.ISBN_NO = images.ISBN_NO and book.ISBN_NO = averagereview.ISBN_NO and author.author_name Like ?",

    authorQuery : "select book.name, book.ISBN_NO, review_count, author_name, Img_link, descr from book, author, images, averagereview, description where book.author_id = author.author_id and book.ISBN_NO = images.ISBN_NO and book.ISBN_NO = averagereview.ISBN_NO and description.ISBN_NO = book.ISBN_NO and author.author_name Like ?",
    
    categoryQuery : "select book.name, book.ISBN_NO, review_count, author_name, descr,Img_link  from book, author, images, averagereview , description where book.author_id = author.author_id and book.ISBN_NO = images.ISBN_NO and book.ISBN_NO = averagereview.ISBN_NO and description.ISBN_NO = book.ISBN_NO and category Like ?",

    trendingQuery : "select book.name, book.ISBN_NO, review_count, author_name,descr, Img_link  from book, author, images, averagereview, description  where book.author_id = author.author_id and book.ISBN_NO = images.ISBN_NO and book.ISBN_NO = averagereview.ISBN_NO and description.ISBN_NO = book.ISBN_NO ORDER BY review_count desc ;",

    detailInfoQuery : {
        reviewStatus : "select review_id from review where user_id = ? and ISBN_NO = ?",
        headerQuery : "select book.name, book.ISBN_NO, publication,pages,price, release_date,language,review_count, author_name, Img_link from book, author, images, averagereview where book.ISBN_NO = ? and book.author_id = author.author_id and book.ISBN_NO = images.ISBN_NO and book.ISBN_NO = averagereview.ISBN_NO",
        averageReviewQuery : "select * from averagereview where ISBN_NO = ?",
        userReviewQuery : "select review.ISBN_NO,user_crediential.name,writing_style,engagement,grip_factor,grammer,worth_read, interactivity from user_crediential, review where review.ISBN_NO = ? and review.user_id = user_crediential.user_id"
    },

    insertUserReview : "insert into review (ISBN_NO, writing_style, engagement, grip_factor, grammer, user_id, worth_read, interactivity) values ?",

    updateAverageReview :"update averagereview set avg_writing_style = avg_writing_style + ? ,avg_engagement = avg_engagement + ? ,avg_grip_factor = avg_grip_factor + ? ,avg_grammer = avg_grammer + ? ,review_count = review_count + ? ,avg_worth_read = avg_worth_read + ? , avg_interactivity = avg_interactivity + ? where ISBN_NO = ?",

    userQuerys : {
        insertNewUser : "insert into user_crediential (name, email, area_of_interest, password, role) values ?",
        getUserDataByid : "select * from user_crediential where user_id = ?",
        getUserDataByemail : "select user_id, email, password, role from user_crediential where email = ?",
        getUserReviews : "select book.name, writing_style, engagement, grip_factor, grammer, worth_read, interactivity from book, review where review.user_id = ? and book.ISBN_NO = review.ISBN_NO ",
        deleteUserAccount :"call delete_user_account( ? )",
        updateUserProfile : " call update_user_profile(?, ?, ?, ?, ?)"
},

    adminQuereies : {

        insertNewBook : "call insert_new_book(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        adminPanelQuery : "select book.name, book.ISBN_NO, review_count from book, averagereview where book.ISBN_NO = averagereview.ISBN_NO order by review_count desc",
        editBookQuery : "SELECT book.ISBN_NO, name, pages, price, category, publication, language, release_date, Img_link, Author_name, email, descr FROM author, book,images , description WHERE book.ISBN_NO = ? and book.ISBN_NO = images.ISBN_NO and book.author_id = author.author_id and description.ISBN_NO = book.ISBN_NO",
        updateBook : "call update_book(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        getUserList : "select user_crediential.user_id, name, email, area_of_interest, role, (select count(user_id) from review where review.user_id = user_crediential.user_id) as reviews from user_crediential",
        deleteBook : "call delete_book( ? )",
        getTotalReviews : "select user_crediential.user_id, user_crediential.name as 'user_Name', book.name as 'Book_Name', review.ISBN_NO, writing_style, engagement, grip_factor, grammer, worth_read, interactivity from review, user_crediential, book where review.ISBN_NO = book.ISBN_NO and review.user_id = user_crediential.user_id",
        databaseStats : "select (select count(*) from book) as books, (select count(*) from review) as reviews, count(user_id) as users from user_crediential"
    
    }
    
}





module.exports = queries;