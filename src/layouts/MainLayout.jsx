import React from 'react';
import Navbar from '../component/header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/header/footer/Footer';

const MainLayout = () => {
  
    return (
        <div className='bg-base-200'>
           
            <header>
                <Navbar/>
            </header>
            <main className='min-h-screen pt-15.5'>
                <Outlet/>
            
            </main>
            <footer>
                <Footer/>
            </footer>

        </div>
    );
};

export default MainLayout;