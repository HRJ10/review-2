// SidebarData.js

import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHome />,
    subNav: []
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaIcons.FaInfoCircle />,
    subNav: []
  },
  {
    title: 'Manage Faculty',
    path: '#',
    icon: <FaIcons.FaUsers />,
    subNav: [
      {
        title: 'Add Faculty',
        path: '/add-faculty',
        icon: <IoIcons.IoIosAddCircle />
      },
      {
        title: 'Modify Faculty',
        path: '/modify-faculty',
        icon: <IoIcons.IoIosCreate />
      },
      {
        title: 'Remove Faculty',
        path: '/remove-faculty',
        icon: <IoIcons.IoIosRemoveCircle />
      }
    ]
  },
  {
    title: 'Manage Leave Request',
    path: '#',
    icon: <FaIcons.FaClipboardList />,
    subNav: [
      {
        title: 'View Leave Request',
        path: '/view-leave-request',
        icon: <IoIcons.IoIosList />
      },
      {
        title: 'Leave History',
        path: '/leave-history',
        icon: <IoIcons.IoMdDocument />
      }
    ]
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaPhone />,
    subNav: []
  }
];
