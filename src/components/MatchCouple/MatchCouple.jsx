
const MatchCouple = () => {
    return (
        <div className="grid md:grid-cols-3 gap-6 items-center my-20 max-w-screen-xl mx-auto px-2 md:px-3 lg:px-1">
            <div className="text-center md:text-end p-3">
                <div className="relative">
                    <img className="rounded-full mx-auto md:mx-0 md:ml-auto mb-2" src="https://i.ibb.co/xjJp5N2/husband-img.jpg" alt="" />
                </div>
                <h3 className="text-xl font-medium">Gummy Bear </h3>
                <p className="text-lg text-gray-400">My husband values marriage as a partnership built on trust, love, and mutual support. He sees it as a lifelong commitment that brings joy and fulfillment to our lives.</p>
            </div>
            <div className="relative mx-auto h-full">
                <img src="https://i.ibb.co/y87RwTJ/shape-2.png" alt="" />
            </div>
            <div className="text-center md:text-start p-3">
                <img className="rounded-full mx-auto md:mx-0 mb-2" src="https://i.ibb.co/W2n0Xrf/wife-img.jpg" alt="" />
                <h3 className="text-xl font-medium">Jelly Bean </h3>
                <p className="text-lg text-gray-400">My wife believes marriage is a beautiful commitment, a partnership filled with love, growth, and support. Its the foundation of our shared dreams and happiness.</p>
            </div>
        </div>
    );
};

export default MatchCouple;


