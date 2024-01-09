import React from 'react'
import {Box,Typography,styled,Divider} from '@mui/material'

const Parent = styled(Box)({

    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    marginTop:"50px",
    opacity:".8",
    width:"100%",
})

const Line = styled(Divider)({
    width:"100%",
    marginTop:10
})

const noMails = ({message}) => {
  return (
    <Parent>
        <Typography>{message.heading}</Typography>
        <Typography>{message.subHeading}</Typography>
        <Line />
    </Parent>
  )
}

export default noMails
