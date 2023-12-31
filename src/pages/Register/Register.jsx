import swal from 'sweetalert';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from 'firebase/auth';


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password);

        // reset error
        setRegisterError('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer?')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character!');
            return;
        }
        else if (!/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(password)) {
            setRegisterError('Password must contain at least one special character');
            return;
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                swal("Good job!", "You are successfully registered!", "success");

                //user profile update
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })

            })
            .catch(error => {
                // console.log('error message:', error.message);
                // console.log('error code:', error.code);
                if (error.code === 'auth/email-already-in-use') {
                    swal("Your Already Registered", "Please Login", "info");
                }
                else if (error.code === 'auth/network-request-failed') {
                    swal("Unstable Network!", "Please Solve Your Internet Problem", "info");
                }
            })
    }

    return (
        <div className="pt-24 md:w-1/2 mx-auto">
            <div className="ml-8 text-center">
                <h2 className="text-3xl font-bold">Register Please</h2>
                <p className="text-gray-400">Already have an account ? <Link className="font-bold text-blue-700" to='/login'>Login</Link></p>
            </div>
            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Photo</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        {
                            registerError && <p className='text-red-600'>{registerError}</p>
                        }
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;