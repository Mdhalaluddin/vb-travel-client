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
            <div className="w-[290px] gap-4 flex p-7 justify-center items-center">
                <form onSubmit={handleEmailBtn}>
                    <div className="w-[120px] flex">
                        <Input onChange={handleInputEmailChange} type="email" value={email} color="white" label="Email Address" />
                        <input type="submit" className="btn-sm rounded-lg text-lg font-serif font-bold ml-1 mt-1 bg-red-100" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Email;