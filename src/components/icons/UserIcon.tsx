import React from "react";

type Props = {
    fill: string;
}
export const UserIcon = ( {fill}:Props ) => {

    return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 48 48"
            >
                <path
                    fill={fill}
                    d="M31.64 27.72a13.94 13.94 0 01-15.28 0A18 18 0 006.05 42.94a1 1 0 00.27.75 1 1 0 00.73.31H41a1 1 0 00.73-.31 1 1 0 00.27-.75 18 18 0 00-10.36-15.22z"
                ></path>
                <circle cx="24" cy="16" r="12" fill={fill}></circle>
            </svg>
    )
}