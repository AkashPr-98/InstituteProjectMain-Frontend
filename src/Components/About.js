import React from 'react'
import MyMenu from './Mymenu'
import "../../node_modules/primeflex/primeflex.css"


export default function About() {
  return (
    <div>
      <MyMenu />
      <h1>This is the About page</h1>

      <div className="mt-8">
        <div className="line-height-3">
          <div className="md:overflow-hidden md:bg-primary bg-primary-reverse overflow-scroll p-3 border-blue-500 border-2 border-round" style={{height:100}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>


    </div>
  )
}
