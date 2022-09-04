import React from "react";

import {Column} from "./Column";
import {Cards} from "./Cards";

export const Board = () => {
    return (
        <>
            <div className="container text-center"
                 style={{marginTop: "2%"}}>
                <div className="row">
                    <div className="col">
                        <Column name={`To do`}/>
                        <Cards/>
                    </div>
                    <div className="col">
                        <Column name={`In progress`}/>

                    </div>
                    <div className="col">
                        <Column name={`Testing`}/>

                    </div>
                    <div className="col">
                        <Column name={`Done`}/>

                    </div>
                </div>
            </div>
        </>
    )
}