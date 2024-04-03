import React from "react";
import { Link } from "react-router-dom";

export default function HeroFormComponent(props) {
  return (
    <div className="hero min-h-screen bg-transparent text-neutral-600">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={props.handleSubmit}>
            <div className="text-center my-5">
              <h1 className="text-3xl font-bold">{props.title}</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                onChange={props.handleChange}
                value={props.formData.username}
                name="username"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                onChange={props.handleChange}
                value={props.formData.password}
                name="password"
              />
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary text-white">{props.button}</button>
            </div>
            <hr className="my-3"></hr>
            <div className="text-center">
              <Link to={props.toPath}>{props.message}</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
