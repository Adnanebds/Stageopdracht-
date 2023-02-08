import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

import Stats from "./Stats";

const Home = () => {
    return (
        <div>
        <Navbar />
         <Hero />
         <Stats />
        {/* <Skills /> */}
        <Footer /> 
        </div>
    )
}

export default Home;