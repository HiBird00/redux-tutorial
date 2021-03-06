import React from 'react';
import { connect } from "react-redux";
import Counter from "./Counter";
import { increase, decrease, increaseAsync, decreaseAsync } from "../modules/couter";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    return (
        <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />
    );
};

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer);