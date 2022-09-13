import React from "react";

const Login = () => {
  return (
    <div className="hero min-h-screen bg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-blue-900 text-center">
            Login now!
          </h1>
          <p className="py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            nesciunt cumque rem, itaque placeat minus vitae quo deserunt sit
            rerum nulla, illum odit unde! Cupiditate magnam ea assumenda dolore
            asperiores.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="auth-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
