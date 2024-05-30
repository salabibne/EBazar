import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
   {
      label: 'Home',
      key: 'mail',
      icon: <MailOutlined />,
   },
   // {
   //    label: 'Navigation Two',
   //    key: 'app',
   //    icon: <AppstoreOutlined />,
   //    disabled: true,
   // },
   // {
   //    label: 'Navigation Three - Submenu',
   //    key: 'SubMenu',
   //    icon: <SettingOutlined />,
   //    children: [
   //       {
   //          type: 'group',
   //          label: 'Item 1',
   //          children: [
   //             { label: 'Option 1', key: 'setting:1' },
   //             { label: 'Option 2', key: 'setting:2' },
   //          ],
   //       },
   //       {
   //          type: 'group',
   //          label: 'Item 2',
   //          children: [
   //             { label: 'Option 3', key: 'setting:3' },
   //             { label: 'Option 4', key: 'setting:4' },
   //          ],
   //       },
   //    ],
   // },
   {
     
      key: "AllBooks",
      label: <Link to="/allproducts">All Products</Link>

   
   },
];

const Navbar: React.FC = () => {
   const [current, setCurrent] = useState('mail');

   const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
   };

   return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Navbar;