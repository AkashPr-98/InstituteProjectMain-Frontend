/*This page is not meant to be used in this website. 
It was only meant for demonstration purpose*/
const items = [
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: () => {
            window.location.href = '/';
        }
        //  items:[
        //    //  {
        //    //     label:'New',
        //    //     icon:'pi pi-fw pi-plus',
        //    //     items:[
        //    //        {
        //    //           label:'Bookmark',
        //    //           icon:'pi pi-fw pi-bookmark'
        //    //        },
        //    //        {
        //    //           label:'Video',
        //    //           icon:'pi pi-fw pi-video'
        //    //        },

        //    //     ]
        //    //  },
        //    //  {
        //    //     label:'Delete',
        //    //     icon:'pi pi-fw pi-trash'
        //    //  },
        //    //  {
        //    //     separator:true
        //    //  },
        //    //  {
        //    //     label:'Export',
        //    //     icon:'pi pi-fw pi-external-link'
        //    //  }
        //  ]
    },
    {
        label: 'About Us',
        icon: 'pi pi-fw pi-info-circle',
        command: () => {
            window.location.href = '/about';
        }
        //  items:[
        //    //  {
        //    //     label:'Left',
        //    //     icon:'pi pi-fw pi-align-left'
        //    //  },
        //    //  {
        //    //     label:'Right',
        //    //     icon:'pi pi-fw pi-align-right'
        //    //  },
        //    //  {
        //    //     label:'Center',
        //    //     icon:'pi pi-fw pi-align-center'
        //    //  },
        //    //  {
        //    //     label:'Justify',
        //    //     icon:'pi pi-fw pi-align-justify'
        //    //  },

        //  ]
    },
    {
        label: 'Contact Us',
        icon: 'pi pi-fw pi-phone',
        command: () => {
            window.location.href = '/contact';
        }
        //  items:[
        //    //  {
        //    //     label:'New',
        //    //     icon:'pi pi-fw pi-user-plus',

        //    //  },
        //    //  {
        //    //     label:'Delete',
        //    //     icon:'pi pi-fw pi-user-minus',

        //    //  },
        //    //  {
        //    //     label:'Search',
        //    //     icon:'pi pi-fw pi-users',
        //    //     items:[
        //    //        {
        //    //           label:'Filter',
        //    //           icon:'pi pi-fw pi-filter',
        //    //           items:[
        //    //              {
        //    //                 label:'Print',
        //    //                 icon:'pi pi-fw pi-print'
        //    //              }
        //    //           ]
        //    //        },
        //    //        {
        //    //           icon:'pi pi-fw pi-bars',
        //    //           label:'List'
        //    //        }
        //    //     ]
        //    //  }
        //  ]
    },
    {
        label: 'Register',
        icon: 'pi pi-fw pi-user',
        //  items:[
        //    //  {
        //    //     label:'Login',
        //    //     icon:'pi pi-fw pi-pencil',
        //    //     items:[
        //    //        {
        //    //           label:'Save',
        //    //           icon:'pi pi-fw pi-calendar-plus'
        //    //        },
        //    //        {
        //    //           label:'Delete',
        //    //           icon:'pi pi-fw pi-calendar-minus'
        //    //        },

        //    //     ]
        //    //  },
        //    //  {
        //    //     label:'Sign Up',
        //    //     icon:'pi pi-fw pi-calendar-times',
        //    //     items:[
        //    //        {
        //    //           label:'Remove',
        //    //           icon:'pi pi-fw pi-calendar-minus'
        //    //        }
        //    //     ]
        //    //  }
        //  ]
    },
    {
        label: 'Login',
        icon: 'pi pi-fw pi-sign-in'
    }
];

export default items;