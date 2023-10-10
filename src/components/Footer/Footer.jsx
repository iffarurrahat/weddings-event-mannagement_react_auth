import { FaFacebookSquare, FaGooglePlusSquare, FaInstagramSquare, FaTwitterSquare, FaPhoneAlt, } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-[#edf3f8] py-16">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-4 md:px-3 lg:px-1">
                <div>
                    <img className="mb-4" src="https://i.ibb.co/Dtx9DPM/felling-logo.png" alt="" />
                    <p className="text-gray-400">Please join us in extending a warm welcome to your truest love this year. Using the release procedure</p>
                    <div className='flex gap-2 mt-2'>
                        <a href="#"><FaFacebookSquare className='text-blue-600 text-3xl' /></a>
                        <a href="#"><FaTwitterSquare className='text-sky-600 text-3xl' /></a>
                        <a href="#"><FaInstagramSquare className='text-[#810CE6] text-3xl' /></a>
                        <a href="#"><FaGooglePlusSquare className='text-[#D64C3E] text-3xl' /></a>
                    </div>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>INFORMATION</h3>
                    <ul className='list-none text-gray-400 space-y-2 mt-2'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to=''>About Us</Link></li>
                        <li><Link to=''>Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>CONTACT</h3>
                    <p className="text-gray-400 mt-2">Do you have any questions?Please contact us at any time.</p>
                    <div className='space-y-2 mt-2'>
                        <p className='flex gap-1 items-center'><CgMail className='text-xl text-gray-400' />felling@gmail.com</p>
                        <p className='flex gap-1 items-center'><FaPhoneAlt className='text-sm text-gray-400' />+889271622</p>
                        <p className='flex gap-1 items-center'><MdLocationOn className='text-xl text-gray-400' />NYC New Bazar</p>
                    </div>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>INSTAGRAM</h3>
                    <div className='grid grid-cols-3 gap-2 mt-3'>
                        <img src="https://i.ibb.co/YXbLSLC/1.jpg" alt="" />
                        <img src="https://i.ibb.co/JqNdGKL/2.jpg" alt="" />
                        <img src="https://i.ibb.co/ZW18GB3/3.jpg" alt="" />
                        <img src="https://i.ibb.co/SNyF0hR/4.jpg" alt="" />
                        <img src="https://i.ibb.co/T8LtVsW/5.jpg" alt="" />
                        <img src="https://i.ibb.co/sQB3KYG/6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

