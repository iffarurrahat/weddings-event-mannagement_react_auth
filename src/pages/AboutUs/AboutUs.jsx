

const AboutUs = () => {
    return (
        <div className="py-20 max-w-screen-xl mx-auto px-2 md:px-3 lg:px-1">
            <div className=" md:flex items-center gap-6">
                <img className="w-full md:w-[40%]" src="https://i.ibb.co/6HSPkVS/1.png" alt="" />
                <div className="md:w-[60%]">
                    <h2 className="text-3xl mb-3 font-semibold">Planner of Your Perfect Wedding</h2>
                    <p className="text-gray-400 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                    <p className="text-gray-400 mb-4">Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                    <ul className="pl-5">
                        <li className="list-disc text-gray-400 mb-2">Going through the cites of the word in classical.</li>
                        <li className="list-disc text-gray-400 mb-2">here are many variations of passages.</li>
                        <li className="list-disc text-gray-400 mb-2">Making it look like readable and spoken English.</li>
                    </ul>
                </div>
            </div>

            <div className="pt-10">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold mb-2">Our Team</h2>
                    <h1 className="text-3xl font-bold">MEET OUR PLANNERS</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="text-center">
                        <img className="rounded-full mx-auto mb-3" src="https://i.ibb.co/kXkgxRr/img-1.jpg" alt="" />
                        <h3 className="text-xl font-medium">Saige Fuentes</h3>
                        <p className="text-gray-400 font-medium">Planner</p>
                    </div>
                    <div className="text-center">
                        <img className="rounded-full mx-auto mb-3" src="https://i.ibb.co/s2Hxbqk/img-2.jpg" alt="" />
                        <h3 className="text-xl font-medium">Bowen Higgins</h3>
                        <p className="text-gray-400 font-medium">Makeup Artist</p>
                    </div>
                    <div className="text-center">
                        <img className="rounded-full mx-auto mb-3" src="https://i.ibb.co/hgxJk0S/img-3.jpg" alt="" />
                        <h3 className="text-xl font-medium">Leighton Kramer</h3>
                        <p className="text-gray-400 font-medium">Planner</p>
                    </div>
                    <div className="text-center">
                        <img className="rounded-full mx-auto mb-3" src="https://i.ibb.co/0QdbhVR/img-4.jpg" alt="" />
                        <h3 className="text-xl font-medium">Kylan Gentry</h3>
                        <p className="text-gray-400 font-medium">Photographer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;


