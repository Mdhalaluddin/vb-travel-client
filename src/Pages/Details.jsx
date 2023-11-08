import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Conpunents/Footer";
import Navbar from "../Conpunents/Navbar";


const Details = () => {
    const curses = useLoaderData();
    console.log(curses);
    const {id} = useParams();
    // const idInt = parseInt(id)
    const curse = curses.find(curse=> curse._id === id)
    console.log(curse, id,);

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-5">
                <h2 className="text-center text-3xl font-bold my-5 font-serif">Curse Details</h2>
                <div className="hero min-h-screen bg-base-200 max-w-[92%] mx-auto px-4">
                    <form >
                        <div className="hero-content flex-col lg:flex-row ">
                            <img src={curse.img} name="photo" className="max-w-sm mr-5 rounded-lg shadow-2xl shadow-deep-purple-200" />
                            <div>
                                <h1 name="brandName" className="text-3xl font-bold mb-2">{curse.category}</h1>
                                <div className="flex gap-5 my-2">
                                    <p className="font-semibold" >short description: <span className="font-normal">{curse.short_description}</span></p>
                                </div>
                                <p className="py-6 justify-center pr-10">{curse.long_description}</p>
                                <input type="submit" value="ADD TO CART" className="w-1/2 btn btn-info hover:bg-red-500" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Details;