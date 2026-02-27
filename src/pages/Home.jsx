import React from 'react';
import HeroBanner from '../component/home/HeroBanner';
import FeaturesSection from '../component/home/FeaturesSection';
import DuaSection from '../component/home/DuaSection';

const Home = () => {
    return (
        <div>
            <section>
                <HeroBanner/>
            </section>
            <section>
                <FeaturesSection/>
            </section>
            <section>
                <DuaSection/>
            </section>
            
        </div>
    );
};

export default Home;