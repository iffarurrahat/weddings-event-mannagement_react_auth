import PropTypes from 'prop-types';
import WeddingOptionsCard from './WeddingOptionsCard';

const WeddingOptions = ({ services }) => {

    return (
        <div className='mt-10'>
            <div className='text-center mb-12'>
                <h2 className='text-3xl font-semibold mb-3'>Wedding Styles</h2>
                <p>A wedding coordinator is a professional who assists couples in planning <br /> and executing their wedding day, ensuring a smooth and memorable event.</p>
            </div>
            <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-2 md:px-3 lg:px-1'>
                {
                    services?.map(service => <WeddingOptionsCard key={service.id} service={service}></WeddingOptionsCard>)
                }
            </div>
        </div>
    );
};

export default WeddingOptions;

WeddingOptions.propTypes = {
    services: PropTypes.array,
}