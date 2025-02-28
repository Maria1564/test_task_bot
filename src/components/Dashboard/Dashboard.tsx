import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import style from "./Dashboard.module.css"
import { Outlet } from 'react-router'

const Dashboard: React.FC = () => {
  return (
    <div className={style.dashboard}>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard