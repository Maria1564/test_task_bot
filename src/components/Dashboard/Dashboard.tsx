import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import style from "./Dashboard.module.css"

const Dashboard: React.FC = () => {
  return (
    <div className={style.dashboard}>
      <Sidebar/>
    </div>
  )
}

export default Dashboard