import CountUp from 'react-countup';

const ProjectCounter = () => {

    return (
        <div className='bg-[#edf3f8] mt-16'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center py-16'>
                <div className='p-3'>
                    <h1 className='text-5xl font-bold mb-4'><CountUp start={0} end={1200} delay={0}></CountUp></h1>
                    <h4 className='text-xl font-semibold'>Happy Couples</h4>
                </div>
                <div className='py-3'>
                    <h1 className='text-5xl font-bold mb-4'><CountUp start={0} end={1545} delay={0} ></CountUp></h1>
                    <h4 className='text-xl font-semibold'>Weddings</h4>
                </div>
                <div className='py-3'>
                    <h1 className='text-5xl font-bold mb-4'><CountUp start={0} end={750} delay={0}></CountUp> +</h1>
                    <h4 className='text-xl font-semibold'>Decoration</h4>
                </div>
                <div className='py-3'>
                    <h1 className='text-5xl font-bold mb-4'><CountUp start={0} end={250} delay={0}></CountUp> +</h1>
                    <h4 className='text-xl font-semibold'>Locations</h4>
                </div>
            </div>
        </div>
    );
};

export default ProjectCounter;