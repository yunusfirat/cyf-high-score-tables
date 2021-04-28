/* eslint-disable indent */
import React from "react";
import allCountryScores from "./scores";

const WorldWideTable = () => {
    let array = [];
    allCountryScores.map(({ name, scores }) => {
        return (
            scores.map(({ n, s }) => {
                array.push({
                    countryName: name,
                    playerScore: s,
                    playerName: n,
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
                 <table className="table">
                     <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Country Name</th>
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
                            <td>{playerScore}</td>
                        </tr>
                    );
                })};
            </tbody>
         </table>
        </div>
    );
};

export default WorldWideTable;