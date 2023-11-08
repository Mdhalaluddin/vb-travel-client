import {
    Card,
    IconButton,
    Input,
    Typography,
} from "@material-tailwind/react";
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Conpunents/Navbar";
import Footer from "../Conpunents/Footer";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const navigate = useNavigate()
    const { singIn, googleSingIn } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [loginError, setLoginError] = useState('')
    const handleLoginBtn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        setLoginError('')
        setSuccess('')

        singIn(email, password)
            .then(result => {
                console.log(result.user)
                if (setSuccess) {
                    Swal.fire("User Login Successfully")
                }
                return navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                if (email) {
                    if (setLoginError) {
                        Swal.fire("email already in use")
                    }
                }
                return;
            })
           
    }
    const handleGoogleSingin =()=>{
        googleSingIn()
        .then(result => {
            console.log(result.user)
            if (setSuccess) {
                Swal.fire("Google Login Successfully")
            }
            return navigate(location?.state ? location.state : '/')
        })
        .catch()
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center justify-center md:mt-10 mt-20 my-7">
                <Card className="bg-gray-400 p-5" color="transparent" shadow={false}>
                    <Typography className="text-center" variant="h4" color="blue-gray">
                        Login Now
                    </Typography>
                    <form onSubmit={handleLoginBtn} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
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
                        <input className="mt-6 w-full bg-black p-2 rounded-lg text-white" type="submit" value="Login" />
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Have a new? Please{" "}
                            <Link to='/registration'>
                                <a href="#" className="font-medium text-gray-900">
                                    Registration
                                </a>
                            </Link>
                        </Typography>
                        <div className="text-center my-3">
                            <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                                <button onClick={handleGoogleSingin} className="text-2xl"><FaGoogle></FaGoogle></button>
                            </IconButton>
                        </div>
                    </form>
                </Card>
                {
                    loginError && { loginError }
                }
                {
                    success && { success }
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;