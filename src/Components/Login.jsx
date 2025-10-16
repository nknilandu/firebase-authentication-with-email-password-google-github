import { NavLink } from "react-router";

import {auth} from './firebase/firebase.init'
import { signInWithEmailAndPassword } from "firebase/auth";


const handleLogin =(e)=>{
  e.preventDefault();
  const mail = e.target.email.value;
  const pass = e.target.password.value;
  // console.log(mail, pass)


  signInWithEmailAndPassword(auth, mail, pass)
    .then(res=>{
      console.log(res.user.email)
      alert('Login Successful')
    })
    .catch(e=>{
      console.log(e)
    })


}



export default function Login() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 max-w-md">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input type="email" name="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <NavLink to="/forgotPassword" className="link link-hover">Forgot password?</NavLink>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                  <NavLink to="/register" className="link link-hover">
                    Don't have an account?{" "}
                    <span className="text-blue-600 underline">Register</span>
                  </NavLink>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
