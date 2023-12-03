import Footer from "../Conpunents/Footer";
import Navbar from "../Conpunents/Navbar";
import { useQuery } from '@tanstack/react-query';
import { axiosSecure } from '../hooks/useAxios';



const FeaturedBlogs = () => {
    const { data: blogs } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await axiosSecure.get('/language/create')
            return res;
        }
    })
    console.log(blogs?.data);
    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-[92%] mx-auto bg-red-50 mt-3 my-5 p-4">
                <h2 className="text-3xl font-serif font-semibold text-center p-6 bg-blue-gray-200 rounded-lg"> Feature Blog </h2>
                {
                    blogs?.data?.slice(1, 11).map((blog, index) =>
                    <div key={blog._id} className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>
                            {index + 1}
                          </th>
                          <th>Owner Profile</th>
                          <th>Blog Owner</th>
                          <th>Blog Title</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          {/* <td>
                          </td> */}
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img src={blog?.user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                                {blog?.user?.displayName}
                            </div>
                          </td>
                          <td>
                            {blog?.longDescription}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                    )
                }

            </div>
            <Footer></Footer>
        </>
    );
};

export default FeaturedBlogs;