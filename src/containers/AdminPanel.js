import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class AdminPanel extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
    };


    render() {
        const { user } = this.props.auth;

        // if (!this.props.isAuthenticated) {
        //     return <Redirect to="/" />;
        // }

        const sexes = {
            1: 'Male',
            2: 'Female'
        }

        const userSex =
            user.sex
                ? sexes[user.sex]
                : ' no data'

        const userAge =
            user.age
                ? user.age
                : ' no data'

        const userPhone =
            user.phone
                ? user.phone
                : ' no data'

        return (
            <div className="container" style={{ maxWidth: 400, alignContent: 'center' }}>
                <div className="card" style={{ margin: 15 }}>

                    <div className="card-header" style={{ backgroundColor: 'navy', color: 'white' }}>
                        {user.first_name} {user.last_name}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Email: {user.email}</li>
                        <li className="list-group-item">
                            Sex: {userSex}, age: {userAge}, phone number {userPhone}
                        </li>
                        <li className="list-group-item">

                        </li>
                    </ul>
                </div></div>

        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
});

export default connect(mapStateToProps, {})(AdminPanel);
