import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="bg-gray-500 max-w-screen-xl p-20 mx-auto">
            <div className="flex py-10 items-center justify-center" >
                <img src="https://i.ibb.co/qRj8H6d/404-dark-1-removebg-preview.png" alt="" />
            </div>
            <div className="text-center ">
                <h2 className="md:text-4xl text-2xl font-bold text-center md:my-12 my-7 text-white">Oops..... looks like you got lost</h2>
                <Link to='/'>
                    <Button color="green">GO to Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default Error;