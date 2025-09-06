import React from 'react';
import {HeroSection} from "@components/hero-section";
import {ServicesSection} from "@components/services-section";
import {WhyChooseSection} from "@components/why-choose-section";

const HomePage: React.FC = () => {
    return (
        <div className={""}>
            <HeroSection />
            <ServicesSection />
            <WhyChooseSection />
        </div>
    );
};

export default HomePage;