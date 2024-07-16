import Banner from "../../Components/Banner/Banner";
import FeaturedCategory from "../../Components/FeaturedCategory/FeaturedCategory";
import Maerquees from "../../Components/Marquees/Maerquees";
import Container from "../../Components/Shear/Container/Container";


const Home = () => {
    return (
        <div>
            <Container>
                <Banner/>
                <Maerquees/>
                <FeaturedCategory/>
            </Container>
        </div>
    );
};

export default Home;