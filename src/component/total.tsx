import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
    const Counters = useSelector((state) => state.counters);
    const totalValue = Counters.reduce(
        (total: number, counter: { value: number }) => total + counter.value,
        0
    );
    return (
        <div className="m-10 border border-gray-950">
            Total Value is : {totalValue}
        </div>
    );
};

export default Total;
