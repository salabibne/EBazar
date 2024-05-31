import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
   {
    label: (
         <span style={{ color: 'white' }}>
            <Link to="/">Home</Link>
         </span>
      ),
      key: 'home',
      
      
   },
   {
     
      key: "AllProducts",
      label: (
         <span style={{ color: 'white' }}>
            <Link to="/allproducts">All Products</Link>
         </span>
      ),
      // label: <Link to="/allproducts">All Products</Link>

   
   },
];

const Navbar: React.FC = () => {
   const [current, setCurrent] = useState('mail');

   const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
   };

   return <Menu  className="mt-0 fixed w-full z-10 p-4 bg-black text-white"onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}  />;
};

export default Navbar;