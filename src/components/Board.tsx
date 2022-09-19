import React from "react";

import {ColumnOne} from "./columns/ColumnOne";
import {CreateCardsForColOne} from "./create_cards/CreateCardsForColOne";
import {CreateCardsForColTwo} from "./create_cards/CreateCardsForColTwo";
import {CreateCardsForColThree} from "./create_cards/CreateCardsForColThree";
import {CreateCardsForColFour} from "./create_cards/CreateCardsForColFour";

export const Board = () => {

    return (
        <>
            <div className="container text-center"
                 style={{marginTop: "2%"}}>
                <div className="row">
                    <div className="col">
                        <ColumnOne name={`To do`}/>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        </>
    )
}