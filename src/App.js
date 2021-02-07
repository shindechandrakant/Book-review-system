import React from "react";
import { Route, Switch} from 'react-router-dom';
import DetailPage from '../src/components/Detail Page/DetailPage'
import HomePage from '../src/components/Home Page/HomePage'
import User from '../src/components/User/User';
import Register from "../src/components/User/Register"
import InsertNewBook from "../src/components/Admin/InsertNewBook";
import AdminPanel from "../src/components/Admin/AdminPanel";
import EditBook from "../src/components/Admin/EditBook"
import Admin from "../src/components/Admin/Admin";
import UserList from "../src/components/User/UserList"
import ReviewList from "../src/components/Admin/ReviewList"
import { ToastContainer } from 'react-toastify';
import UpdateProfile from '../src/components/User/UpdateProfile';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <>
            <ToastContainer autoClose = { 4000 } hideProgressBar />
            <Switch>

                <Route path = "/" exact component = { HomePage } />

                <Route path = "/user/register" exact component = { Register } />
                <Route path = "/user/update" exact component = { UpdateProfile } />
                <Route path = "/user" exact component = { User } />

                <Route path = "/detail/:slug" component = { DetailPage } />

                <Route path = "/admin/insertbook" component = { InsertNewBook } />
                <Route path = '/admin' exact component = { Admin } />
                <Route path = '/admin/users' component = { UserList } />
                <Route path = '/admin/reviews' component = { ReviewList } />
                <Route path = "/admin/editbook/:slug"  component = { EditBook }/>
                <Route path = "/admin/bookoverview" exact component = { AdminPanel }/>

                <Route path = "/" component = { HomePage } />
                
            </Switch>
        </>
    );
};


export default App;





