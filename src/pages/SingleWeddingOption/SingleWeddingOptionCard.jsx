import PropTypes from 'prop-types';

const SingleWeddingOptionCard = ({ option }) => {
    const { image, title, description, price } = option || {}
    return (
        <div>
            <div className="bg-sky-50 text-center py-20 mb-5">
                <h2 className="font-semibold text-3xl">{title}</h2>
                <h2 className='text-lg font-bold mt-2'>Event Cost: ${price}</h2>
            </div>
            <div className="max-w-screen-xl mx-auto px-2 md:px-3 lg:px-1 my-4 md:my-8">
                <div>
                    <img className="mx-auto mb-5" src={image} alt="" />
                </div>
                <h2 className=' text-lg text-gray-400'>{description}</h2>
            </div>
        </div>
    );
};

export default SingleWeddingOptionCard;


SingleWeddingOptionCard.propTypes = {
    option: PropTypes.object,
}