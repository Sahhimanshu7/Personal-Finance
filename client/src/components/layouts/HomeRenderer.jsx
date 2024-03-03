import React, { useState } from 'react'

import Groups from '../home/Groups';
import Personal from '../home/Personal';
import Profile from '../account/Profile';
import "../../assests/layouts/homeRenderer.css"

function HomeRenderer() {
  const [selected, setSelected] = useState("Personal");
  return (
      <div className='home-renderer'>
        <div className='menu'>
          <button
            className='Personal'
            onClick={(e) => setSelected("Personal")}
          >
            Personal
          </button>
          <button
            className='Groups'
            onClick={(e) => setSelected("Groups")}
          >
            Groups
          </button>
          <button
            className='Profile'
            onClick={(e) => setSelected("Profile")}
          >
            Profile
          </button>
        </div>
        <div className='horizontal-line'>
        </div>
        <div className='main-content'>
          {selected == "Personal" && <Personal />}
          {selected == "Groups" && <Groups />}
          {selected == "Profile" && <Profile />}
        </div>
      </div> 
  )
}

export default HomeRenderer