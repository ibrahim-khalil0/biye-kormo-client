import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <Carousel autoPlay={true} interval={4000} infiniteLoop={true}>
                <div className="relative">
                    <img src="https://content.jdmagicbox.com/comp/def_content/matrimonial_bureaus/default-matrimonial-bureaus-8.jpg" className="h-[400px] lg:h-[600px] w-full" />
                    <div className="bg-[#000000c2] absolute top-0 w-full h-full text-white pt-36">
                        <div className="flex justify-center items-center">
                            <hr className="w-[50px]" />
                            <h2 className="text-2xl uppercase">Biye Kormo</h2>
                            <hr className="w-[50px]"/>
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold">Find your <br /> <span className="text-[#FF0000]">Right Match</span> here</h1>
                        <p className="text-xl mt-5">Most trusted Matrimony Brand in the Bangladesh</p>
                    </div>
                </div>
                <div>
                    <img src="https://www.wedgatematrimony.com/wp-content/uploads/2019/09/late-marriage-bureau-delhi.jpg" className="max-h-[600px] w-full" />
                    <div className="bg-[#000000c2] absolute top-0 w-full h-full text-white pt-36">
                        <div className="flex justify-center items-center">
                            <hr className="w-[50px]" />
                            <h2 className="text-2xl uppercase">Biye Kormo</h2>
                            <hr className="w-[50px]"/>
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold">Find your <br /> <span className="text-[#FF0000]">Right Match</span> here</h1>
                        <p className="text-xl mt-5">Most trusted Matrimony Brand in the Bangladesh</p>
                    </div>
                </div>
                <div>
                    <img src="https://content.jdmagicbox.com/comp/def_content/matrimonial-websites/oog3x6zjrk-matrimonial-websites-5-ore13.jpg" className="max-h-[600px] w-full" />
                    <div className="bg-[#000000c2] absolute top-0 w-full h-full text-white pt-36">
                        <div className="flex justify-center items-center">
                            <hr className="w-[50px]" />
                            <h2 className="text-2xl uppercase">Biye Kormo</h2>
                            <hr className="w-[50px]"/>
                        </div>
                        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold">Find your <br /> <span className="text-[#FF0000]">Right Match</span> here</h1>
                        <p className="text-xl mt-5">Most trusted Matrimony Brand in the Bangladesh</p>
                    </div>
                </div>
            </Carousel>
    );
};

export default Banner;