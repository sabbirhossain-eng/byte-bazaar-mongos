import Banner from "../../Components/Banner/Banner";
import FeaturedCategory from "../../Components/FeaturedCategory/FeaturedCategory";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Footer from "../../Components/Footer/Footer";
import Maerquees from "../../Components/Marquees/Maerquees";
import Container from "../../Components/Shear/Container/Container";


const Home = () => {
    return (
        <div>
            <Container>
                <Banner/>
                <Maerquees/>
                <FeaturedCategory/>
                <FeaturedProducts/>
            </Container>
                <Footer/>
        </div>
    );
};

export default Home;