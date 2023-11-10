import { Input } from "@material-tailwind/react";

const Email = () => {
    return (
        <div className="max-w-[92%] mx-auto my-8 rounded-xl bg-gray-900">
            <div className="w-[290px] gap-4 flex p-7">
                <Input type="email" color="white" label="Email Address" />
                <input type="submit" className="btn-sm rounded-lg text-lg font-serif font-bold mt-1 bg-red-100" value="Submit" />
            </div>
        </div>
    );
};

export default Email;