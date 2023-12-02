import { Input } from "@material-tailwind/react";
import { useState } from "react";
import Swal from "sweetalert2";

const Email = () => {
    const [email, setEmail] = useState();
    const handleInputEmailChange = (e) => {
        setEmail(e.target.value);

    }
    const handleEmailBtn = e => {
        e.preventDefault();

        Swal.fire({
            icon: "success",
            title: "Thank you for subscribing to our newsletter",
            showConfirmButton: false,
            timer: 1500
        });
        setEmail('');

    }
    return (
        <div className="max-w-[92%] mx-auto my-8 rounded-xl bg-gray-900">
            <div className="py-8">
                <h1 className="text-center text-2xl font-serif text-white">Subscribe Us</h1>
                <h2 className="text-white text-center my-2">Get the latest creative news from Atlas resent Blog</h2>
                <div className="gap-4 flex my-5 justify-center items-center">
                    <form onSubmit={handleEmailBtn}>
                        <div className=" flex">
                            <Input onChange={handleInputEmailChange} type="email" value={email} color="white" label="Email Address" />
                            <input type="submit" className="btn-sm rounded-lg text-lg font-serif font-bold ml-1 mt-1 bg-red-100" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Email;