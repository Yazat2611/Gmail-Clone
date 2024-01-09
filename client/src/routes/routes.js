import { lazy } from "react";

const Main = lazy(()=> import( "../pages/Mains"))
const Emails = lazy(()=> import("../components/emails"))
const ViewEmails = lazy(()=>import("../components/ViewEmails"))
const routes = {

    main : {
        path:'/',
        element : Main
    },
    emails: {
        path : '/emails',
        element : Emails
    },
    view : {
        path : '/view',
        element : ViewEmails
    },
    invalid : {
        path :'/*',
        element : Emails
    },
}

export {routes};