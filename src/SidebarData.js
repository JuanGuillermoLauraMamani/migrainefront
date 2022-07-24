import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [

  {
    title: 'Diagnostico',
    path: '/dashboard/diagnostico',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Tratamiento',
    path: '/dashboard/tratamiento',
    icon: <FaIcons.FaHeartbeat />,
    cName: 'nav-text'
  },

  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
 
  {
    //title: 'Home',
    //path: '/dashboard/home',
   // icon: <AiIcons.AiFillHome />,
    //cName: 'nav-text'
  },


 
];


