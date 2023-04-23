import * as React from 'react';
import './Modules.css';
import Navbar from './Navbar';
import SideNav from './SideNav';
import ModuleSidebar from './ModuleSidebar';
import Footer from './Footer';
function Modules() {
    return(
        <div className="modules">
        <Navbar />
        <SideNav title="modules" />
        <ModuleSidebar />
        <Footer/>
        </div>
    );
}
export default Modules;