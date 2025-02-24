// GravatarSearch will be created here
import React from 'react';
import './style.scss'
 
export default function GravatarSearch( { email, onSearchProfile, onSetEmail } ) {
    return (
        <div className="gravatar-search">
            <input placeholder="Enter email address" type="text" value={ email } onChange={ ( e ) => onSetEmail( e.target.value ) } />
            <button onClick={ onSearchProfile }>Search profile</button>
        </div>
    )
}