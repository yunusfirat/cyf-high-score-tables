/* eslint-disable indent */
import React from "react";
import Scores from "./scores";

const WorldWideTable = () => {



    return (
        <div>
            {Scores.map((score, index) => {
                const { scores } = score;
                return (
                    <div key={index}>
                        {
                              scores.map((element,index) => {
                                const { n , s } = element;
                                let array =[];
                                let object = { n:n , s:s };
                                array.push(object);
                             let sortedArray =  array.sort((a,b) =>{
                                    return b.s - a.s;
                                });
                                console.log(sortedArray);
                                return (
                                    <div key={index}>
                                        {
                                         sortedArray.forEach((element, index) => {
                                             const { n, s }  = element;
                                             return (
                                                 <div key={index}>
                                                     <h1>{n} {s}</h1>
                                                 </div>
                                             );
                                         })
                                        }

                                    </div>
                                );
                            })
                        }
                    </div>
                );
            })}
        </div>
    );
};

export default WorldWideTable;