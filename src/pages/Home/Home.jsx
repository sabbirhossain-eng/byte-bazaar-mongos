import Banner from "../../Components/Banner/Banner";
import Maerquees from "../../Components/Marquees/Maerquees";
import Container from "../../Components/Shear/Container/Container";


const Home = () => {
    return (
        <div>
            <Container>
                <Banner/>
                <Maerquees/>
            </Container>
        </div>
    );
};

export default Home;