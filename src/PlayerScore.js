/* eslint-disable indent */
import React from "react";
import allCountryScores from "./scores";

const PlayerScore = () => {
	return (
		<div>
			{allCountryScores.map((score) => {
                const { scores, name } =score;
                return(
                    <div>
                    <div>
                        <h1> {name} </h1>
                    </div>
                    <div className="scoretable">{
                        scores.map((score, index) => {
                            const { n, s } = score;
                            return (
                                <div key={index} style={{ border: "2px solid black", display:"flex", justifyContent:"space-around" }}>
                                    <div className="m-4"><h2>{n}</h2></div>
                                    <div className="m-4" style={{ color:"#A52A2A" }}><h2>{s}</h2></div>
                                </div>
                            );
                        })
                    //   return ( <h3 key={index}>High scores: {name}</h3>);
                    }
                </div>
                </div>
                );
			})}
		</div>
	);
};


export default PlayerScore;