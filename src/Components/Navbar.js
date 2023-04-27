/*This page is not meant to be used in this website. 
It was only meant for demonstration purpose*/

import React from 'react'
import { Menubar } from 'primereact/menubar';
import items from './Item';
import { InputText } from 'primereact/inputtext';

export default function Navbar() {
  return (
    <div>
      <nav>
      <Menubar
          className='main-nav'
          model={items}
          end={<InputText placeholder="Search" type="text"/>}
        />
      </nav>
    </div>
  )
}