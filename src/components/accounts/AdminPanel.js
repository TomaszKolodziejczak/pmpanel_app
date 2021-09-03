import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editUser } from '../../actions/userActions'


export class AdminPanel extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    state = {
        email: this.props.auth.user.email,
        first_name: this.props.auth.user.first_name,
        last_name: this.props.auth.user.last_name ? this.props.auth.user.last_name : '',
        age: this.props.auth.user.age ? this.props.auth.user.age : '',
        sex: this.props.auth.user.sex ? this.props.auth.user.sex : '',
        phone: this.props.auth.user.phone ? this.props.auth.user.phone : '',
    };

    onSubmit = event => {

        const { email, first_name, last_name, age, sex, phone } = this.state;
        const newUser = {
            email,
            first_name,
            last_name,
            sex: Number(sex),
            age: Number(age),
            phone,
            id: this.props.auth.user.id
        };
        this.props.editUser(newUser);
        console.log(newUser);
        < Redirect to='/admin' />

    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    render() {
        const { user } = this.props.auth;
        const { first_name, last_name, email, age, sex, phone } = this.state

        // if (!this.props.isAuthenticated) {
        //     return <Redirect to="/" />;
        // }

        return (
            <div className="container" style={{ maxWidth: 400, alignContent: 'center' }}>
                <div className="card" style={{ margin: 15 }}>

                    <div className="card-header" style={{ backgroundColor: 'navy', color: 'white' }}>
                        {user.email}
                    </div>
                    <form onSubmit={this.onSubmit} style={{ margin: 15 }}>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                onChange={this.onChange}
                                value={email}
                                placeholder={user.email}
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
                                placeholder={user.first_name}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                onChange={this.onChange}
                                value={last_name}
                                placeholder={user.last_name}
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
                                placeholder={user.age}
                            />
                        </div>
                        <div className="form-group">
                            <label>Sex</label>
                            <select
                                className="form-control"
                                name="sex"
                                onChange={this.onChange}
                                value={sex}
                                placeholder={user.sex}
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
                                placeholder={user.phone}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" style={{ margin: 5 }}>
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
});

export default connect(mapStateToProps, { editUser })(AdminPanel);
