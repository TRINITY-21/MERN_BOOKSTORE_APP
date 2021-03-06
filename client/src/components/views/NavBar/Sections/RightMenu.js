/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Icon,  } from '@ant-design/compatible';
import { Form, Avatar, Card, Badge,Input, Button, Row, Col, } from 'antd';


const { Meta } = Card

function RightMenu(props) {
  const user = useSelector(state => state.user)
  

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };


    /// Add to cart
 // const onlineUser = localStorage.getItem('userId');
 
  // const dataToSubmit = {
  //   onlineUser,
  // }

  

  
  useEffect(() => {

    // axios.post('/api/cart/cartNum', dataToSubmit).then((res) => {
    //   console.log(res);
    //   setCartNum(res.data.cartNum);
    // }
    // );





  }, []);



  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Signup</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>
             
<Menu.Item key="name">
          {/* <p>Welcome, {user.userData
             && user.userData.name
          } */}
     
          <Meta
              avatar={
                <Avatar src={`http://localhost:5000/${ user.userData && user.userData.image}`} />
      
            }
            
              title={
                 user.userData
                  && user.userData.name
               
              }
            
  
  />

 
        </Menu.Item>
        
        {/* <Menu.Item key="cart">
          <a href="/checkout">{user.CARTData && user.CARTData.cartNum} Cart</a>
        </Menu.Item> */}

        <Menu.Item key="cart" style={{ paddingBottom: 5 }}>
          <Badge count={user.CARTData  && user.CARTData.cartNum}>
            <a href="/checkout" style={{ marginRight: -22 , color:'#667777'}}>
              <Icon type="shopping-cart" style={{ fontSize: 22, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>



        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
    
      

      </Menu>
    )
  }
}

export default withRouter(RightMenu);

