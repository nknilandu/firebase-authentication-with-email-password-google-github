import { NavLink } from "react-router";

import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

import { updateProfile } from "firebase/auth";
import { auth } from "./firebase/firebase.init";



const handleReg =(e)=>{

  e.preventDefault();
  const mail = e.target.email.value;
  const pass = e.target.password.value;
  const name = e.target.username.value;
  const purl = e.target.photourl.value;
  console.log(mail, pass, name, purl)

  createUserWithEmailAndPassword(auth, mail, pass)
    .then(res=>{
      console.log(res)

      // update profile
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: purl
      }).then(()=> {
        alert('Registration Successful')
      }).catch(e => {
        console.log(e)
      })


      // sendEmailVerification
      sendEmailVerification(auth.currentUser)
        .then(()=>{
          alert('Email verification sent!')
        }).catch((e)=>{
          alert('Failed!', e)
        })


    })
    .catch(e => {
      console.log(e)
    })

}



export function Register() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6 max-w-sm">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleReg}>
                <fieldset className="fieldset">
                  <label className="label">Username</label>
                  <input type="text" name="username" className="input" placeholder="Your name" />
                  <label className="label">Photo Url</label>
                  <input type="text" name="photourl" className="input" placeholder="Photo url" />
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
                    {/* <a className="link link-hover">Forgot password?</a> */}
                  </div>
                  <button className="btn btn-neutral mt-4">Rregister Now</button>
                  <NavLink to="/login" className="link link-hover">
                    Already have an account?{" "}
                    <span className="text-blue-600 underline">Log in</span>
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