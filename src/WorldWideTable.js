/* eslint-disable indent */
import React from "react";
import allCountryScores from "./scores";
import { GiMp5 } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { HiArrowNarrowDown, HiArrowNarrowUp } from "react-icons/hi";
const WorldWideTable = () => {
    let array = [];
    allCountryScores.map(({ name, scores }) => {
        return (
            scores.map(({ n, s }) => {
                array.push({
                    countryName:name,
                    playerScore:s,
                    playerName:n,
                });
                return array;
            })
        );
    });
    let sortedArray = array.sort((a, b) => {
        return b.playerScore - a.playerScore;
    });
    return (
        <div className="worldwidetable">
            <h1><GiMp5  style={{ color:"black" }} />Highest Score Of The Game <GiMp5 style={{ color:"black" }} /> </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"><ImHome/>Country Name</th>
                        <th scope="col">Player Name</th>
                        <th scope="col">Player Score</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedArray.map(({ countryName, playerScore, playerName }, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{countryName}</td>
                                <td>{playerName}</td>
                                <td>{playerScore < 0 ? <HiArrowNarrowDown style={{ color:"red" }} /> : <HiArrowNarrowUp style={{ color:"green" }}/> }
                                {playerScore}<GiMp5  style={{ color:"black" }} /></td>
                            </tr>
                        );
                    })};
                </tbody>
            </table>
        </div>
    );
};

export default WorldWideTable;