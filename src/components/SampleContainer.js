import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Sample from "./Sample";
import { getPost, getUsers } from '../modules/sample';

const SampleContainer = ({ getPost, getUsers, loadingPost, loadingUsers, post, users }) => {
    useEffect(() => {
        getPost(1);
        getUsers();
    }, [getPost, getUsers]);

    return (
        <Sample
            post={post}
            users={users}
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
        />
    );
};

export default connect(
    ({ sample, loading }) => ({
        post: sample.post,
        users: sample.users,
        loadingPost: loading['sample/GET_POST'],
        loadingUsers: loading['sample/GET_USERS']
    }),
    {
        getPost,
        getUsers
    }
)(SampleContainer);