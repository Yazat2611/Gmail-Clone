import React from 'react'
import { API_URLS } from '../services/api.url';
import { useOutletContext,useParams } from 'react-router-dom'
import useApi from '../hooks/useApi';
import { useEffect ,useState} from 'react';
import {Checkbox,Box,List,ListItem} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DisplayMails from './DisplayMails';
import NoMails from './common/noMails';
import { EMPTY_TABS } from '../constants/constants';
const emails = () => {

    const [selectedMails,setSelectedMails] = useState([]);

    const [refreshScreen,setRefreshScreen] = useState(false);

    const {openDrawer} = useOutletContext();

    const {type} = useParams();

    const getEmailService = useApi(API_URLS.getEmailFromType);
    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
    const deleteEmailService = useApi(API_URLS.deleteEmail);  

    const selectAllEmails = (e) => 
    {
      if(e.target.checked){
        const em = getEmailService?.response?.map(email => email._id);
        setSelectedMails(em);
        
      }

      else
      {
        setSelectedMails([]);
      }


    }

    const deleteSelectedEmails = () => {

      if(type==='bin'){
          deleteEmailService.call(selectedMails);
      }

      else
      { 
        moveEmailsToBinService.call(selectedMails);
      }   

      setRefreshScreen(prev => !prev);
    }



    useEffect(()=> {
      getEmailService.call({},type);
    },[type,refreshScreen])



  return (
    <Box style = {openDrawer ? {marginLeft : 250,width:'calc(100%-250px)'} : {width:'100%'}}>
        <Box style={{padding : '20px 10px 0 10px',display:"flex",alignItems:'center'}}>
            <Checkbox size="small" onChange={(e) => selectAllEmails(e)}/>
            <DeleteOutlineOutlinedIcon  onClick = {(e) => deleteSelectedEmails(e)}/> 
        </Box>
 
    <List>
      {getEmailService?.response?.map(email => (
        <DisplayMails key={email._id} email={email} selectedMails={selectedMails} setRefreshScreen={setRefreshScreen} setSelectedMails ={setSelectedMails}/>
      ))}
    </List>

    {
      getEmailService?.response?.length === 0 && <NoMails message={EMPTY_TABS[type]}/>
    }
    </Box>
  )
}

export default emails
