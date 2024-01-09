import React from 'react'
import {Box,Typography} from "@mui/material"
import { useRouteError } from 'react-router-dom'
const ErrorComponent = () => {
const error = useRouteError();
console.log(error); // ignore it 
  return (
    <Box style={{marginLeft:250}}>
        <Typography>There was an error loading </Typography>
    </Box>
  )
}

export default ErrorComponent
