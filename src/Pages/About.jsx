

const About = () => {
    return (
        <div className="hero max-w-[92%] my-4 rounded-lg mx-auto  bg-blue-gray-200">
            <div className="hero-content grid text-center p-5">
                <div className="max-w-lg my-5">
                    <h1 className="text-5xl font-bold">About Blog</h1>
                    <p className="py-6">If you are looking to organize your blog section based on different programming languages like CSS, HTML, JavaScript, Python, and C++, you can create dedicated categories or tags for each language. Here as a structured outline for your blog section:</p>
                <nav className="flex gap-6 w-full text-center font-bold px-14">
                    <a className="link link-hover">Html</a>
                    <a className="link link-hover">CSS</a>
                    <a className="link link-hover">JavaScript</a>
                    <a className="link link-hover">Python</a>
                    <a className="link link-hover">C++</a>
                </nav>
                </div>
            </div>
        </div>
    );
};

export default About;