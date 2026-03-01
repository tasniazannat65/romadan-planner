import React from 'react';
import HeroBanner from '../component/home/HeroBanner';
import FeaturesSection from '../component/home/FeaturesSection';
import DuaSection from '../component/home/DuaSection';
import HomePlannerSection from '../component/home/HomePlannerSection';
import HomeProgressSection from '../component/home/HomeProgressSection';

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
                <HomePlannerSection/>
            </section>
             <section>
                <DuaSection/>
            </section>
            <section>
                <HomeProgressSection/>
            </section>
           
            
        </div>
    );
};

export default Home;