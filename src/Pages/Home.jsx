import Cover from "../Conpunents/Cover";
import Footer from "../Conpunents/Footer";
import Navbar from "../Conpunents/Navbar";
import Email from "./Email";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Cover></Cover>
            <Email></Email>
            <Footer></Footer>
        </div>
    );
};

export default Home;