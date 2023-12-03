import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../hooks/useAxios";
import Blogs from "./Blogs";



const ResentBlog = () => {
    const {data: resents}= useQuery({
        queryKey:['resent'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/language/resent')
            return res;
        }
    })
    console.log(resents?.data);
    return (
        <div className="bg-blue-gray-100 my-5 ">
            <h1 className="text-3xl bg-gray-200 rounded-lg my-4 font-semibold font-sans  text-center p-5">-----Resents Blog-----</h1>
            <div className="grid md:grid-cols-3 gap-4 max-w-[92%] mx-auto py-3">
                {
                    resents?.data?.slice(1, 7).map(resent => <Blogs key={resent._id} resent={resent}></Blogs>)
                }
            </div>
        </div>
    );
};

export default ResentBlog;