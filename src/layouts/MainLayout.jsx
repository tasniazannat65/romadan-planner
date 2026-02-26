import React from 'react';
import Navbar from '../component/header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/header/footer/Footer';

const MainLayout = () => {
  
    return (
        <div>
           
            <header>
                <Navbar/>
            </header>
            <main className='min-h-screen'>
                <Outlet/>
            
            </main>
            <footer>
                <Footer/>
            </footer>

        </div>
    );
};

export default MainLayout;