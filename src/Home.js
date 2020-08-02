import React from "react";
import Slider from "./components/slider"
import slidea from "./images/home-slide-1.jpg"
import slideb from "./images/home-slide-2.jpg"
import slidec from "./images/home-slide-3.jpg"
const Home = () =>
{
    return (
        <>
         <section id="section-header" className="">
            <div className="container-fluid nav_bg">
                <div className="col-12 mx-auto">
                    <Slider 
                        slideSourcefirst={slidea}
                         slideSourceSecond={slideb} 
                         slideSourceThird={slidec} 
                         firstheading="I am Chiranjib Bhattacharjee"
                         firstpara="I Design and Develop aesthetic Experiences making lives easier"
                         />
                </div>
            </div>
         </section>
        </>
    );
};

export default Home;