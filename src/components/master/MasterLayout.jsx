import React from 'react';
import AppNavbar from "@/components/master/AppNavbar";
import Footer from "@/components/master/Footer";

const MasterLayout = (props) => {
    return (
        <>
           <AppNavbar/>
            {props.children}
            <Footer/>
        </>
    );
};

export default MasterLayout;