import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import RenderList from './components/example/Session 04/RenderList';
import Session03 from './components/example/Session03/Session03';
import BasicUI1 from './components/homework/Session2/BasicUI1';
import BasicUI2 from "./components/homework/Session2/BasicUI2";
import BasicUI3 from './components/homework/Session2/BasicUI3';
import BasicUI4 from './components/homework/Session2/BasicUI4';
import 'bootstrap/dist/css/bootstrap.min.css';
import Like from './components/homework/Session3/Like';
import Rating from './components/homework/Session3/Rating';
import Tabs from './components/homework/Session3/Tabs';
import Detail from './components/pages/User/Detail/Detail';
import List from './components/pages/User/List/List';
import Form from './components/pages/User/Form/Form';
import BaseWebRouter from './components/pages/BaseWebRouter';
import Login from './components/pages/Auth/Login';


function App() {

    const [isLogin, setIsLogin] = useState(false);
    

    return (
        <>
            {/* Basic UI 1 */}
            {/* <BasicUI1 text='BANDWIDTH' color1='red' color2='indianred' percent={20} /> */}
            {/*<BasicUI1 text='STORAGE' color1='gray' color2='lightcoral' percent={50} />
            <BasicUI1 text='USERS' color1='green' color2='lightsalmon' percent={70} />
            <BasicUI1 text='VISITORS' color1='yellow' color2='salmon' percent={30} />
            <BasicUI1 text='EMAILS' color1='blue' color2='darksalmon' percent={45} />
            <BasicUI1 text='BASIC' color1='pink' color2='gold' percent={80} />
            <BasicUI1 text='OTHERS' color1='purple' color2='light yellow' percent={37} /> */}
            {/* Basic UI 2 */}
            {/* <BasicUI2 logo='logo' text='HTML' color='red' percent={60} />  */}
            {/* Basic UI 3 */}
            {/* <BasicUI3 title='Facebook' following='Likes' follow={10000} color='blue' logo='https://www.facebook.com/images/fb_icon_325x325.png'/>
            <BasicUI3 title='Twitter' following='Tweets' follow={10000} color='lightblue' logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYeb_5PVn43NJ3TZqG81mKzphwcKHQV81c-vSjLqU&s'/>
            <BasicUI3 title='Google +' following='Plus' follow={10000} color='orange' logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIjm7egWOIjEJFuI2S4ysED-yyc0mKTRqeQg&usqp=CAU'/>
            <BasicUI3 title='Pinterest' following='Pins' follow={10000} color='crimson' logo='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSePZKqAlHNdKg_39uh2W0zeN95qW-TfTJbQ&usqp=CAU'/>
             */}
            {/* <Session03 /> */}
            {/* <Like/> */}
            {/* <Rating/> */}
            {/* <List /> */}
            {/* <Tabs /> */}
            {/* <Detail/> */}
            {/* <RenderList/> */}
            {/* <Form/> */}
            {isLogin ? (<BaseWebRouter setIsLogin={setIsLogin}/>) : (<Login setIsLogin={setIsLogin}/>)}
            
            
        </>
    );
}

export default App;


