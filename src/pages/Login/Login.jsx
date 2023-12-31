import { AiFillGithub, AiOutlineGoogle, } from "react-icons/ai";

import swal from "sweetalert";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    // console.log('location  from login page:', location);
    const [loginError, setLoginError] = useState('');


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // reset error 
        setLoginError('')


        signIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                swal("Good job!", "You are successfully login", "success");

                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message);
                console.log(error.code);
                if (error.code === 'auth/invalid-login-credentials') {
                    setLoginError('Your Email or Password was Wrong!!!!')
                    return;
                }
                else if (error.code === 'auth/too-many-requests') {
                    setLoginError('Please try again in a few minutes later!!')
                    return;
                }
            })
    }


    // SignIn With Google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // SignIn With Github
    const handleGithubSignIn = () => [
        signInWithGithub()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    ]

    return (
        <div className="pt-24 flex flex-col-reverse md:flex-row items-center gap-10 max-w-screen-xl mx-auto px-2 md:px-3 lg:px-1 py-10">
            <div className="w-full md:w-[500px] shadow-md rounded py-12 mb-5 md:mb-0">
                <div className=" ml-8 ">
                    <h2 className="text-3xl font-bold">Login</h2>
                    <p className="text-gray-400">Does not have an account yet ? <Link className="font-bold text-blue-700" to='/register'>Register</Link></p>
                </div>
                <form onSubmit={handleLogin} className="card-body">
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
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary"> Login</button>
                    </div>
                </form>
                <div>
                    <p className="text-center text-gray-400 mb-6">Or Login With</p>
                    <div className="flex gap-4 mx-8">
                        <button onClick={handleGoogleSignIn} className="border border-red-600 text-red-600 py-3 rounded-lg flex-1 flex items-center justify-center gap-3"><AiOutlineGoogle className="text-red-600 text-xl" /> Google</button>
                        <button onClick={handleGithubSignIn} className="border border-gray-900 text-gray-900 rounded-lg flex-1 flex items-center justify-center gap-3"><AiFillGithub className="text-xl text-gray-900" /> Github</button>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <img src='https://i.ibb.co/rGzTwYv/sign-In-svg.png' alt="" />
            </div>
        </div>
    );
};

export default Login;