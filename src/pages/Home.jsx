import React from 'react';
import HeroBanner from '../component/home/HeroBanner';
import FeaturesSection from '../component/home/FeaturesSection';

const Home = () => {
    return (
        <div>
            <section>
                <HeroBanner/>
            </section>
            <section>
                <FeaturesSection/>
            </section>
            
        </div>
    );
};

export default Home;