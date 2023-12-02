import Cover from "../Conpunents/Cover";
import Footer from "../Conpunents/Footer";
import Navbar from "../Conpunents/Navbar";
import ResentBlog from "../Conpunents/ResentBlog";
import About from "./About";
import Email from "./Email";



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Cover></Cover>
            <ResentBlog></ResentBlog>
            <Email></Email>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;