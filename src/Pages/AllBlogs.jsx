import { useEffect, useState } from "react";
import Blog from "./Blog";
import { data } from "autoprefixer";
import Navbar from "../Conpunents/Navbar";
import Footer from "../Conpunents/Footer";


const AllBlogs = () => {
    const [languages, setLanguage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/language')
            .then(res => res.json())
            .then(data => setLanguage(data))
        console.log(data);
    }, [])
    return (
        <div className="bg-blue-gray-50">
            <Navbar></Navbar>
            <div className="p-10 mb-10 bg-blue-gray-100">
                <h2 className="text-2xl font-bold text-center">Blog</h2>
                <p className="font-medium text-center">Our latest news, updates, and stories for developers</p>
            <div>
                <form>
                    <input type="search" name="search" placeholder="search" id="" />
                <input type="submit" value="" />
                </form>
            </div>
            </div>
            <div className="grid my-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 max-w-[92%] mx-auto">
                {
                    languages.map(language => <Blog key={Blog._id} language={language}></Blog>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllBlogs;