/* eslint-disable indent */
import React, { useState } from "react";
import allCountryScores from "./scores";

const PlayerScore = () => {
    const [clicked,setClicked] = useState(false);
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
    const toggle = () => {
        if(clicked){
            setClicked(false);
        }else{
            setClicked(true);
        }
    };
	return (
		<div>
            <button className="btn btn-primary" onClick ={toggle}>Toggle Scores!</button>
			{sortedScores.map((score, i) => {
                const { scores, name } =score;
                let sortScore = scores.sort((a, b) => {
                    if(!clicked){
                        return b.s - a.s;
                    }else{
                        return a.s - b.s;
                    }
                });
                return(
                    <div key={i}>
                    <div className="scoretable">{
                        <div>
                        <h1> {name} </h1>
                        <div>
                      {sortScore.map((score, index) => {
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