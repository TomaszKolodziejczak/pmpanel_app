import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';

export class Register extends Component {
    state = {
        email: '',
        password: '',
        password2: '',
        first_name: '',
        last_name: '',
        age: '',
        sex: '',
        phone: '',
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = event => {
        event.preventDefault();
        const { email, password, password2, first_name, last_name, age, sex, phone } = this.state;
        if (password !== password2) {
            alert('Passwords do not match');
        } else {
            const newUser = {
                email,
                password,
                first_name,
                last_name,
                sex: Number(sex),
                age: Number(age),
                phone
            };
            this.props.register(newUser);
            console.log(newUser)
        }
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { email, password, password2, first_name, last_name, age, sex, phone } = this.state;
        return (
            <div className="container" style={{ maxWidth: 400, alignContent: 'center', textAlign: 'center' }}>
                <div className="card card-body mt-5">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Email adress</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={this.onChange}
                                value={email}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                onChange={this.onChange}
                                value={first_name}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password2"
                                onChange={this.onChange}
                                value={password2}
                                required
                            />
                        </div>
                        <br /><br />
                        <p style={{ fontStyle: 'italic' }}>optional data below</p>
                        <hr />

                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                onChange={this.onChange}
                                value={last_name}
                            />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input
                                type="number"
                                className="form-control"
                                name="age"
                                onChange={this.onChange}
                                value={age}
                            />
                        </div>
                        <div className="form-group">
                            <label>Sex</label>
                            <select
                                // type="radio"
                                className="form-control"
                                name="sex"
                                onChange={this.onChange}
                                value={sex}
                            >

                                <option value='0'>Choose..</option>
                                <option value='1'>Male</option>
                                <option value='2'>Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="phone"
                                onChange={this.onChange}
                                value={phone}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                                placeholder="123-456-789"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" style={{ margin: 5 }}>
                                Register
                            </button>
                        </div>
                        <p>
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);