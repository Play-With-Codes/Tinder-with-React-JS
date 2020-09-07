import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { Link, useHistory } from "react-router-dom";

function Header({ backButton })
{
    const history = useHistory();
    return(
        //BEM
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="Large" className="header__icon" />
                </IconButton>
            ): (
                <Link to="/profile">
                    <IconButton>
                        <PersonIcon className="header__icon" fontSize="Large" />
                    </IconButton>
                </Link>
            )}
            
            
            <Link to="/">
                <img className="header__logo" src="tinder-logo.png" alt="tinder logo" />
            </Link>

            <Link to="/chat">
                <IconButton>
                    <QuestionAnswerIcon className="header__icon" fontSize="Large" />
                    <span className="Notification__Dot"></span>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;