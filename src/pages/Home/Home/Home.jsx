import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import SmallBanner from "../SmallBanner/SmallBanner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <SmallBanner></SmallBanner>
        </div>
    );
};

export default Home;