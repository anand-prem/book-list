import * as React from 'react';
import {Link} from "react-router-dom"
import bookIcon from '../../../../public/book.png';
import authorIcon from '../../../../public/writer.png';
import '../../Less/sideMenuBar.less';


const menuItems = [
    {icon: bookIcon, label: 'Books', to: '/'},
    {icon: authorIcon, label: 'Authors', to: '/authors'}
];

interface IMenuItem {
    icon: string;
    label: string;
    to: string;
}

const getMenuItem = (item: IMenuItem, index: number) => (
    <div key={index}>
        <Link className='menuItem' to={item.to}>
            <img className='menuIcon' src={item.icon}/>
            <label aria-labelledby='menuItemLabel' className='menuLabel'>{item.label}</label>
        </Link>
    </div>
);

function SideMenuBar() {
    return (
        <div className='sideMenuBar'>
            {menuItems.map((menuItem, index) => getMenuItem(menuItem, index))}
        </div>
    );
}

export default SideMenuBar;
