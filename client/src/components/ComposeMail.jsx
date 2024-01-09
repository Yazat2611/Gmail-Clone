import React from 'react'
import { useState } from 'react';
import { Dialog,Box,Typography,styled,InputBase,TextField,Button} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.url';

const dialogStyle = {
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0',

}


const HeaderStyle = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    padding:"10px 10px 15px 15px",
    background:"#f2f6fc",
    '& > p':{
        fontSize:14,
        fontWeight:500
    }
})

const TextWrapper = styled(Box)({
    display:"flex",
    flexDirection:"column",
    padding:"0px 15px",
    '& > div':{
        fontSize:14,
        borderBottom:'1px solid lightgrey',
        marginTop:"10px"
    }
})

const FooterStyle = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    padding:"10px 15px",

})

const SendButton = styled(Button)({
    background:"blue",
    color:"white",
    fontWeight:500,
    textTransform:"none",
    borderRadius:20,
    width:100

})

const ComposeMail = ({openDi ,setOpenDi}) => {

    const [data,setData] = useState({});

    const sentMail = useApi(API_URLS.saveSentEmail);
    const saveDraft = useApi(API_URLS.saveDraftEmails); 
    
    const config ={
        Host : "smtp.elasticemail.com",
        Username : import.meta.env.VITE_USERNAME,
        Password : import.meta.env.VITE_PASSWORD,
        Port :2525,
    }

    const closeComposeMail = (e) => {
        e.preventDefault();        
        const payload = {
            to:data.to,
            from:'yazatbhardvaj2611@gmail.com',
            subject:data.subject,
            body:data.body,
            date: new Date(),
            image : '',
            name : 'Yazat Sharma',
            starred : false,
            type : 'drafts'
        }

        saveDraft.call(payload);

        if(!saveDraft.error)
        {
            setOpenDi(false);
            setData({});
        }

    }   


    const sendMail = (e) => {

        e.preventDefault();
        if(window.Email)
        {
            window.Email.send({
                ...config,
                To : data.to,
                From : "yazatbhardvaj2611@gmail.com",
                Subject : data.subject,
                Body : data.body
            }).then(
              message => alert(message)
            );
        }
        
        const payload = {
            to:data.to,
            from:'yazatbhardvaj2611@gmail.com',
            subject:data.subject,
            body:data.body,
            date: new Date(),
            image : '',
            name : 'Yazat Sharma',
            starred : false,
            type : 'sent'
        }

        sentMail.call(payload);

        if(!sentMail.error)
        {
            setOpenDi(false);
            setData({});
        }

        setOpenDi(false);
    }

    const onValueChange = (e) => 
    {
        setData({...data,[e.target.name]:e.target.value})
        // console.log(data);
    }
  return (

        <Dialog
            open={openDi}
            PaperProps={{sx:dialogStyle}}
        >
            <HeaderStyle>
                <Typography>New Mail</Typography>
                <CloseIcon fontSize='small' onClick={(e) => closeComposeMail(e)} cursor="pointer"/>

            </HeaderStyle>


            <TextWrapper>
                <InputBase placeholder='Recipients' name = "to" onChange={(e) => onValueChange(e)}/>
                <InputBase placeholder='Subject'  name = "subject" onChange={(e) => onValueChange(e)}/>
            </TextWrapper>


            <TextField multiline rows={14} 
            sx={{"& .MuiOutlinedInput-notchedOutline":{border:"none"}}}
            onChange={(e) => onValueChange(e)} name = "body"/>
            <FooterStyle>
                <SendButton onClick = {(e) => sendMail(e)} cursor="pointer">Send</SendButton>
                <DeleteOutlineOutlinedIcon onClick={() => setOpenDi(false)} cursor="pointer"/>
            </FooterStyle>
        </Dialog>               
  )
}

export default ComposeMail
