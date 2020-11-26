import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';


export const LayoutData = [
    {
        title : 'Your Details',
        path : '/userDetails',
        icons: <BiIcons.BiDetail />,
        
        cName : 'nav-text'
    },
    {
        title : 'Car Details',
        path : '/carDetails',
        icons: <AiIcons.AiFillHome />,
        cName : 'nav-text'
    },
    {
        title : 'Add Car+',
        path : '/carRegister',
        icons: <FaIcons.FaCar />,
        cName : 'nav-text'
    }

]