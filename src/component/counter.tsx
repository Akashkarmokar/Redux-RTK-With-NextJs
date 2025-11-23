"use client";
import React from "react";

const Counter = ({
    value,
    onIncrement,
    onDecrement,
}: {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
}) => {
    return (
        <div className="m-10 border border-gray-950">
            <div>{value}</div>
            <button className="m-2" onClick={onIncrement}>
                Inc:
            </button>
            <button onClick={onDecrement}>Dec:</button>
        </div>
    );
};

export default Counter;
