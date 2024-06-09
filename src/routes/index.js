import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import BlankLayout from '../layouts/BlankLayout';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import DetailPage from '../pages/DetailPage';
import Cart from '../pages/Cart';
import EditCustomerAccount from '../pages/EditCusAcc';
import PurchaseHistory from '../pages/PurchaseHistory';
import FinnishRegistration from '../pages/FinnishRegistration';
import ChangePassword from '../pages/ChangePassword';
import OrderList from '../pages/OrderList';
import AdminLayout from '../layouts/AdminLayout';
import WelcomeAdmin from '../adminPages/WelcomeAdmin';
import DashboardPage from '../adminPages/DashboardPage';
import StaffManagement from '../adminPages/StaffManagement';
import CustomerManagement from '../adminPages/CustomerManagement';
import StaffLayout from '../layouts/StaffLayout';
import WelcomeStaff from '../staffPages/WelcomeStaff';
import StaffProductList from '../staffPages/StaffProductList';

import NoBubbleLayout from '../layouts/NoBubbleLayout';
import PostPage from '../pages/PostPage';
import PostCard from '../components/PostCard';
import PostStaff from '../staffPages/PostStaff';
import Error from '../pages/Error';
import Checkout from '../pages/Checkout';
import OrderListStaff from '../staffPages/OrderListStaff';
function Router() {
    return (
        <Routes >
            
            <Route path='/fill' element={<FinnishRegistration/>}/>
            
            <Route path="/" element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path="product/:id" element={<DetailPage />} />
                <Route path='editAcc'   element={<EditCustomerAccount />} />
                <Route path='purchase'element={<PurchaseHistory/>}/>
                <Route path='password' element={<ChangePassword/>}/>
                <Route path="toship" element={<OrderList/>}/>
            </Route>
            <Route element={<BlankLayout />} >

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset" element={<ForgotPassword />} />
                <Route path='*' element={<Error/>}/>
            </Route>
            <Route element={<NoBubbleLayout/>}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/post" element={<PostPage />} />
            <Route path="/checkout" element={<Checkout/>}/>
            </Route>
            
            //admin route
            
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<WelcomeAdmin />} />
        <Route path="dashboard" element={<DashboardPage/>}/>
        <Route path="staff" element={<StaffManagement/>}/>
        <Route path="customer" element={<CustomerManagement/>}/>
      </Route>
      //staff route
      <Route path='staff' element={<StaffLayout/>}>
        <Route index element={<WelcomeStaff/>}/>
        <Route path='product' element={<StaffProductList/>}/>
        <Route path='customer' element={<CustomerManagement/>}/>
        <Route path='post' element={<PostStaff/>}/>
        <Route path='order' element={<OrderListStaff/>}/>
      </Route>
        </Routes>
       
    );
}

export default Router;