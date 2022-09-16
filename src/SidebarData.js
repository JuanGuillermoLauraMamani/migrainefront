import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [

  {
    title: 'Diagnostico',
    path: '/dashboard/diagnostico',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    permiso: ['62ba6877fd1b0b43c84d9512','62ba6877fd1b0b43c84d9514','62ba6877fd1b0b43c84d9513']
  },
  {
    title: 'Tratamiento - Muy Pronto!!',
    path: '/dashboard/tratamiento',
    icon: <FaIcons.FaHeartbeat />,
    cName: 'nav-text',
    permiso: ['62ba6877fd1b0b43c84d9512','62ba6877fd1b0b43c84d9514','62ba6877fd1b0b43c84d9513']
  },

  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
    permiso: ['62ba6877fd1b0b43c84d9512','62ba6877fd1b0b43c84d9514','62ba6877fd1b0b43c84d9513']
  },
  {
    title: 'Regitrar Doctor',
    path: '/dashboard/admin',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    permiso: ['62ba6877fd1b0b43c84d9514']
  },

  {
    title: 'Registro de Pacientes',
    path: '/dashboard/doctor',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    permiso: ['62ba6877fd1b0b43c84d9513']
  },
 

  {
    title: 'Pacientes',
    path: '/dashboard/doctor/pacientes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    permiso: ['62ba6877fd1b0b43c84d9513']
  },
 
 


 
];


