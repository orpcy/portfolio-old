import React from "react";

const FormInput = () => {
  return (
    <div className="row">
      <form className="col s12 bg-dark z-depth-5">
        <div className="row">
          <div className="input-field col s12">
            <input id="first_name" type="text" className="validate" />
            <label for="first_name">Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="textarea2"
              className="materialize-textarea"
              data-length="120"
            />
            <label for="textarea2">Message</label>
          </div>
        </div>
        <button className="btn-flat waves-effect waves-teal btn-dark float-right m-2 border submit">Submit</button>
      </form>
    </div>
  );
};

export default FormInput;
