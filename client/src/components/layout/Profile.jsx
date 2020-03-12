import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileAction';
import Spinner from './Spinner';

const Profile = ({ getCurrentProfile, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    console.log(profile);
    return loading && profile === null ? (
        <Spinner />
    ) : (
        <Fragment>
            <h2>Miejsce na zdjecie</h2>
            <h2>{profile && profile.data.username}</h2>
            <h2>{profile && profile.data.email}</h2>
            <p>{profile && profile.data.paths}</p>
        </Fragment>
    );
};

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
