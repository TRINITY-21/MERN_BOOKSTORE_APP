import React from 'react';
import { Menu } from 'antd';

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    {/* <Menu.Item key="mail">
      <a href="/">Home</a>
      </Menu.Item> */}
      
    <Menu.Item key="dashbaord">
      <a href="/">Dashboard</a>
      </Menu.Item>
      
    <Menu.Item key="upload">
      <a href="/upload">Upload</a>
      </Menu.Item>

      <Menu.Item key="booklist">
      <a href="/booklist">booklist</a>
      </Menu.Item>
      
      {/* <Menu.Item key="favorite">
      <a href="/favorite">Favorite</a>
    </Menu.Item>
     */}
  </Menu>
  )
}

export default LeftMenu