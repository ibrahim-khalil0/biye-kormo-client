import React from 'react';
import Banner from './Banner/Banner';
import PremiumMember from './PremiumMember/PremiumMember';
import HowWebsiteWork from './HowWebsiteWork/HowWebsiteWork';
import SuccessCounter from './SuccessCounter/SuccessCounter';
import SuccessStory from '../SuccessStory/SuccessStory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PremiumMember></PremiumMember>
            <HowWebsiteWork></HowWebsiteWork>
            <SuccessCounter></SuccessCounter>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;