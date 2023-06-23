import React from "react"
import { Route, Routes } from "react-router"
import {pages} from '../Pages'
import Navbar from "../Navbar"

const Routing = ({ children, ...rest }) => {
  return (
    <>
      <Navbar/>
      <Routes>
          {
              pages.map((val)=>{
                  return <Route key={val.path} path={val.path} element={<val.main/>} />
              })
          }
      </Routes>
    </>
  )
}

export default Routing
