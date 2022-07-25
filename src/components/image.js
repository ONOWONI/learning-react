import React from "react";
import profile from '../img/jurnee.jpg';


export default function Image() {
    return (
        <div>
            <img src={profile} alt='profile' className="profile"/>
        </div>
    )
}

