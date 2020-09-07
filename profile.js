import React from "react";
import './profile.css';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Profile()
{
    return (
        <div className="my__profile">
            <div className="profile__image">
                <img src="12.jpg" />
            </div>
            <p className="profile__description">
                <h2>Twister Abhishek, 23</h2>
                <p><b>V</b> less than a kilometer away</p>
                <hr color="lightgray" size="1px" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </p>
        </div>
    );
}

export default Profile;