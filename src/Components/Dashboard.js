// import React, { useRef } from 'react';
import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import '../Css/Dashboard.css'
import { useNavigate } from "react-router-dom"
import { Button } from 'primereact/button'

export default function Dashboard() {
  const menu = useRef(null);
  const navigate = useNavigate();
  const items = [
    {
      label: 'Subjects',
      icon: 'pi pi-fw pi-book',
      command: () => { navigate('/subjects') }
      // items: [
      //     {
      //         label: 'New',
      //         icon: 'pi pi-fw pi-plus',
      //         items: [
      //             {
      //                 label: 'Bookmark',
      //                 icon: 'pi pi-fw pi-bookmark'
      //             },
      //             {
      //                 label: 'Video',
      //                 icon: 'pi pi-fw pi-video'
      //             }
      //         ]
      //     },
      //     {
      //         label: 'Delete',
      //         icon: 'pi pi-fw pi-trash'
      //     },
      //     {
      //         separator: true
      //     },
      //     {
      //         label: 'Export',
      //         icon: 'pi pi-fw pi-external-link'
      //     }
      // ]
    },
    {
      label: 'Subject Questions',
      icon: 'pi pi-fw pi-question',
      command: () => { navigate('/subques') }
      // items: [
      //     {
      //         label: 'Left',
      //         icon: 'pi pi-fw pi-align-left'
      //     },
      //     {
      //         label: 'Right',
      //         icon: 'pi pi-fw pi-align-right'
      //     },
      //     {
      //         label: 'Center',
      //         icon: 'pi pi-fw pi-align-center'
      //     },
      //     {
      //         label: 'Justify',
      //         icon: 'pi pi-fw pi-align-justify'
      //     }
      // ]
    },
    {
      label: 'Student Register',
      icon: 'pi pi-fw pi-user',
      command: () => { navigate('/studentregister') }
      // items: [
      //     {
      //         label: 'New',
      //         icon: 'pi pi-fw pi-user-plus'
      //     },
      //     {
      //         label: 'Delete',
      //         icon: 'pi pi-fw pi-user-minus'
      //     },
      //     {
      //         label: 'Search',
      //         icon: 'pi pi-fw pi-users',
      //         items: [
      //             {
      //                 label: 'Filter',
      //                 icon: 'pi pi-fw pi-filter',
      //                 items: [
      //                     {
      //                         label: 'Print',
      //                         icon: 'pi pi-fw pi-print'
      //                     }
      //                 ]
      //             },
      //             {
      //                 icon: 'pi pi-fw pi-bars',
      //                 label: 'List'
      //             }
      //         ]
      //     }
      // ]
    },
    {
      label: 'Test',
      icon: 'pi pi-fw pi-check-square',
      command: () => { navigate('/test') }
      // items: [
      //     {
      //         label: 'Edit',
      //         icon: 'pi pi-fw pi-pencil',
      //         items: [
      //             {
      //                 label: 'Save',
      //                 icon: 'pi pi-fw pi-calendar-plus'
      //             },
      //             {
      //                 label: 'Delete',
      //                 icon: 'pi pi-fw pi-calendar-minus'
      //             }
      //         ]
      //     },
      //     {
      //         label: 'Archieve',
      //         icon: 'pi pi-fw pi-calendar-times',
      //         items: [
      //             {
      //                 label: 'Remove',
      //                 icon: 'pi pi-fw pi-calendar-minus'
      //             }
      //         ]
      //     }
      // ]
    },
    {
      label: 'Test-Subject',
      icon: 'pi pi-fw pi-sitemap',
      command: () => { navigate('/testsubmap') }
    },
    // {
    //     separator: true
    // },
    // {
    //     label: 'Quit',
    //     icon: 'pi pi-fw pi-power-off'
    // }
  ];


  return (
    <>
      {/* {
        window.screen.width > 767 ?

          <TieredMenu model={items} className="mt-5 mx-2" />
          : <TieredMenu model={items} popup ref={menu} /> &&
          <Button label="Show" icon="pi pi-bars" onClick={(e) => menu.current.toggle(e)} />
      }  */}

      <TieredMenu model={items} className="mt-2 mx-2 md:hidden lg:flex sm:hidden hidden" />
      <TieredMenu model={items} popup ref={menu} />
      <Button label="Show" icon="pi pi-bars" onClick={(e) => menu.current.toggle(e)} 
      className="md:flex lg:hidden sm:flex flex mx-5"/>

      {/* <TieredMenu model={items} className="mt-5 mx-2" /> */}

    </>
  )
}
