import React from 'react'
import {Box,Checkbox,Typography,styled} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useNavigate} from 'react-router-dom';
import {routes} from '../routes/routes';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.url';
import { Star } from '@mui/icons-material';
const EmailWrapper = styled(Box)({

    padding:'0 0 0 10px',
    background : '#f2f6fc',
    display:"flex",
    alignItems:"center",
    cursor:'pointer',
    '& > div' : {
        display:"flex",
        width:'100%',
        '& > p' :{
            fontSize : 14,
        }
    }
});


const In = styled(Typography)({
    fontSize : '12px !important',
    background:'#ddd',
    color:'#222',
    padding :'0 4px',
    borderRadius : '4px',
    marginRight : '6px',

});


const Date = styled(Typography)({
    marginLeft:'auto',
    marginRight:'20px',
    fontSize : '12px',
    color:'#5f6368',
})

const DisplayMails = ({email,selectedMails,setRefreshScreen,setSelectedMails}) => {

  const navigate = useNavigate();

  const  toggleStarredService = useApi(API_URLS.toggleStarredEmail);

  const toggleStarredMails= () =>
  { 
    toggleStarredService.call({id : email._id,value:!email.starred})
    setRefreshScreen(prev => !prev);
  }

  const onValueChange = ()=> {
    if(selectedMails.includes(email._id))
    {
      setSelectedMails(prev => prev.filter(id =>id!=email._id ))
    }

    else
    {
      setSelectedMails(prev => [...prev,email._id])
    }
  }

  return (
    <EmailWrapper>
      <Checkbox 
      size="small"
      checked={selectedMails.includes(email._id)}
      onChange={() => onValueChange()}
      />
      {
        email.starred?
        <Star fontSize='small' style={{marginRight:10,color:"#fff200"}} onClick={()=> toggleStarredMails()} />
        :
        <StarBorderIcon fontSize="small" style={{marginRight:10}} onClick= {() => toggleStarredMails()}/>
      }
      
        <Box onClick = {() => navigate(routes.view.path,{state:{email:email}})}>
        <Typography style={{width:200,overflow:'hidden'}}>{email.name}</Typography>
        <In>Inbox</In>
        <Typography>{email.subject} {email.body &&'-'} {email.body}</Typography>
        <Date>{(new window.Date(email.date)).getDate()}
                {(new window.Date(email.date)).toLocaleString('default',{month:'long'})}
        </Date>
        </Box>
    </EmailWrapper>
  )
}

export default DisplayMails
