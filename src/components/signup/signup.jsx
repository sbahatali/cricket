import React, { Component } from 'react';
import Joi from 'joi-browser';
import logo from "../../assets/images/logo.png";
import userService from "../../services/userService/userService.jsx";
import "./signup.css";
class Signup extends Component {
    state = {
        account: { name: '', username: '', password: '' },
        errors: {}
    }

    schema = {
        name: Joi.string().required().label('Name'),
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
    validate = () => {
        let options = { abortEarly: false };
        let { error } = Joi.validate(this.state.account, this.schema, options);
        if (!error) return null;
        let errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    validateProperty = ({ name, value }) => {
        let obj = { [name]: value };
        let schema = { [name]: this.schema[name] };
        let { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        let errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors)
            return;
        // call the server
        try {
            let result = await userService.register(this.state.account);
            window.location = '/';
        } catch (ex) {
            console.log('exception', ex);
        }
    }

    handleChange = ({ currentTarget: input }) => {
        let account = { ...this.state.account };
        let errors = { ...this.state.errors };
        let errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        account[input.name] = input.value;
        this.setState({ account, errors });
    }

    render() {
        let { account } = this.state;
        let { errors } = this.state;
        return (
            <React.Fragment>
                <div className="text-center">
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <img className="mb-4" src={logo} alt="" width="72" height="72" />
                        <h2 className="h3 mb-3 font-weight-normal">www.cricket.com</h2><br />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>

                        <label htmlFor="name" className="sr-only">Name</label>
                        <input type="text" name="name" value={account.name} onChange={this.handleChange} id="name" className="form-control" placeholder="name" />
                        {errors.name && <div className="alert alert-danger">{errors.name}</div>}

                        <label htmlFor="username" className="sr-only">Username</label>
                        <input type="text" name="username" value={account.username} onChange={this.handleChange} id="username" className="form-control" placeholder="Username / Email" />
                        {errors.username && <div className="alert alert-danger">{errors.username}</div>}

                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" value={account.password} onChange={this.handleChange} id="password" className="form-control" placeholder="password" />
                        {errors.password && <div className="alert alert-danger">{errors.password}</div>}

                        <button disabled={this.validate()} className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Signup;