import React from 'react';
import Navbar from '../component/header/Navbar';
import { Outlet,  useNavigation } from 'react-router';
import Footer from '../component/header/footer/Footer';
import RamadanLoader from '../component/RamadanLoader';

const MainLayout = () => {
    const navigation = useNavigation();
  
    return (
        <div className='bg-base-200'>
           
            <header>
                <Navbar/>
            </header>
            <main className='min-h-screen pt-15.5'>
                {navigation.state === 'loading' && <RamadanLoader/>}
                <Outlet/>
            
            </main>
            <footer>
                <Footer/>
            </footer>

        </div>
    );
};

export default MainLayout;