import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Navbar from "../Conpunents/Navbar";
import Footer from "../Conpunents/Footer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Registration = () => {
    const handleLoginBtn =e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=> console.log(error))

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center justify-center my-7">
            <Card className="bg-gray-400 p-5" color="transparent" shadow={false}>
                <Typography className="text-center" variant="h4" color="blue-gray">
                    Register Now
                </Typography>
                {/* <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to .
                </Typography> */}
                <form onSubmit={handleLoginBtn} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            name='name'
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-red-200 focus:!border-t-red-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            name="email"
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            name="password"
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <input className="mt-6 w-full text-white bg-black p-2 rounded-lg" type="submit" value="Registration" />
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        {/* Already have an account?{" "} */}
                        Already have an account?{" "}
                        <Link to='/login'>
                            <a href="#" className="font-medium text-gray-900">
                                Login now
                            </a>
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Registration;