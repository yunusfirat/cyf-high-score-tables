/* eslint-disable indent */
import React from "react";
import allCountryScores from "./scores";

const PlayerScore = () => {
  let sortedScores =  allCountryScores.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
	return (
		<div>
			{sortedScores.map((score, i) => {
                const { scores, name } =score;
                let sortScore = scores.sort((a, b) => {
                    return b.s - a.s;
                });
                return(
                    <div key={i}>
                    <div className="scoretable">{
                        <div>
                        <h1> {name} </h1>
                        <div>
                      {  sortScore.map((score, index) => {
                            const { n, s } = score;
                            return (
                                <div key={index} style={{ border: "2px solid black", display:"flex", justifyContent:"space-around", margin:"10px" }}>
                                    <div className="m-4"><h2>{n}</h2></div>
                                    <div className="m-4" style={{ color:"#A52A2A" }}><h2>{s}</h2></div>
                                </div>
                            );
                        })}
                        </div>
                        </div>
                    }
                </div>
                </div>
                );
			})}
		</div>
	);
};


export default PlayerScore;