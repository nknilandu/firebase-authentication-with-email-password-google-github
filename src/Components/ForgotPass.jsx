import { NavLink } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase/firebase.init";

export function ForgotPass() {


  const handleForgot = (e) => {
    e.preventDefault();
    const mail = e.target.mail.value;

    sendPasswordResetEmail(auth, mail)
        .then((()=>{
            alert('Password reset email sent!')
        }))
        .catch((e)=>{
            console.log(e)
        })
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold mb-10">Forgot Password?</h1>
              <form onSubmit={handleForgot}>
                <fieldset className="fieldset">
                  <label className="label">Email Address</label>
                  <input type="email" name='mail' className="input" placeholder="Email" />
                  <div></div>
                  <button className="btn btn-neutral mt-4">Send Mail</button>
                </fieldset>
              </form>
              <NavLink to="/login" className="link link-hover">
                Login to another account?{" "}
                <span className="text-blue-600 underline">Log in</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
