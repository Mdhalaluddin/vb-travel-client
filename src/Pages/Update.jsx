import Footer from "../Conpunents/Footer";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Conpunents/Navbar";


const Update = () => {
    const curses = useLoaderData();
    console.log(curses);
    const navigate = useNavigate()
    const { _id, title, select, shortDescription, longDescription, img } = curses;
    const [selects, setSelects] = useState();
    const handleUpdateBlog = event => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        // const category = form.category.value;
        const select = form.select.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const img = form.img.value;
        const UpdateBlog = { title, select, shortDescription, longDescription, img };
        console.log(UpdateBlog);

        fetch(`http://localhost:5000/language/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Food Update successfully!',
                        'success'
                    )
                    return navigate("/")
                }
            })

    }
    return (
        <>
           <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content lg:w-1/2">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <h2 className="text-center font-serif text-2xl py-3 font-semibold bg-green-300 rounded-lg">Update Blog</h2>
                        <form onSubmit={handleUpdateBlog} className="card-body  w-full">
                            <div className="flex">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input type="text" defaultValue={title} placeholder="Title" name="title" className="input input-bordered" required />
                                </div>
                                <div className="form-control ml-10">
                                    <label className="label grid space-y-4">
                                        <select defaultValue={select} name="select" value={selects} onChange={e => setSelects(e.target.value)}>
                                            <option value="">category</option>
                                            <option value="html">Html</option>
                                            <option value="css">CSS</option>
                                            <option value="java">Java</option>
                                            <option value="python">Python</option>
                                            <option value="C++">C++</option>
                                        </select>
                                        <h2 className="text-2xl">{selects}</h2>
                                    </label>
                                </div>
                            </div>
                            <div className="flex md:flex-row gap-4">
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">short description</span>
                                    </label>
                                    <input type="text" defaultValue={shortDescription} name="shortDescription" placeholder="Short description" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Long description</span>
                                    </label>
                                    <input type="text" defaultValue={longDescription} name="longDescription" placeholder="Long description" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Img Url</span>
                                </label>
                                <input type="img" defaultValue={img} placeholder="Img Url" name="img" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Update Blog" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Update;