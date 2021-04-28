/* eslint-disable indent */
import React from "react";
import allCountryScores from "./scores";

const WorldWideTable = () => {
    let array = [];
    let sortedArray = [];

    return (
        <div className="worldwidetable">
            { allCountryScores.map((score, index) => {
                const { scores, name } = score;
                console.log("blah blah", score);
                return (
                    <div key={index}>
                        {scores.map((element, index) => {
                            array.push(element);
                             sortedArray = array.sort((a, b) => {
                                return b.s - a.s;
                            });
                            console.log(array);
                            return (
                                <div key={index}>
                                    {sortedArray.map((arr, index) => {
                                        const { n, s } = arr;
                                        return (
                                            <div key={index}>
                                                <h1>{name} {n} {s}</h1>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default WorldWideTable;