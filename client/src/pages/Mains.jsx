import React, { Suspense } from 'react'
import Header from '../components/Header'
import SlideBar from '../components/SlideBar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SuspenseLoader from '../components/common/SuspenseLoader'
import { Box } from '@mui/material'
const main = () => {

    const [openDrawer,setOpenDrawer] = useState(true);

    const toggleDrawer = () =>
    {
        setOpenDrawer(prev => !prev);
    }

  return (
    <>
      <Header toggleDrawer={toggleDrawer}/>
      <Box>
      <SlideBar openDrawer={openDrawer}/>
      <Suspense fallback={<SuspenseLoader/>}>
        <Outlet context={{openDrawer}}/>
      </Suspense>
      </Box>
    </>
  )
}

export default main
