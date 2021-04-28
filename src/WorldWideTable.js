/* eslint-disable indent */
import React from "react";
import allCountryScores from "./scores";

const WorldWideTable = () => {
    let array = [];
    // let sortedArray;
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
                 <table>
                     <thead>
                            <tr>
                                <th>Country Name</th>
                                <th>Player Name</th>
                                <th>Player Score</th>
                            </tr>
                     </thead>
                     <tbody>
                {sortedArray.map(({ countryName, playerScore, playerName }, index) => {
                    return (
                        <tr key={index}>
                            <td>{countryName}</td>
                            <td>{playerName}</td>
                            <td>{playerScore}</td>
                        </tr>
                    );
                })
            };
            </tbody>;
         </table>
        </div>
    );
};

export default WorldWideTable;