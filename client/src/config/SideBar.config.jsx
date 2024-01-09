import PhotoIcon from '@mui/icons-material/Photo';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail';
export const SIDEBAR_DATA = [
    {
        name:"inbox",
        title:"Inbox",
        icon:PhotoIcon
    },

    {
        name:"starred",
        title:"Starred",
        icon:StarBorderOutlinedIcon
    },
    {
        name:"sent",
        title:"Sent",
        icon:SendIcon
    },
    {
        name:"drafts",
        title:"Drafts",
        icon:InsertDriveFileIcon
    },
    {
        name:"bin",
        title:"Bin",
        icon:DeleteIcon
    },
    {
        name:"allmail",
        title:"All Mail",
        icon:MailIcon
    }
]
