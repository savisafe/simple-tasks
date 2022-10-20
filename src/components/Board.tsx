import React from "react";

import {Column} from "./columns/Column";

export const Board = () => {

    return (
        <>
            <div className="container text-center"
                 style={{marginTop: "2%"}}>
                <div className="row">
                    <div>
                        <Column name={`To do`}/>
                    </div>
                </div>
            </div>
        </>
    )
}