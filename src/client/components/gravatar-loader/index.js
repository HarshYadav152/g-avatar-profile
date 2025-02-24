// GravatarLoader will be created here
import React, { useState } from 'react';
import GravatarCard from '../gravatar-card';
import GravatarSearch from '../gravatar-search';
import './style.scss'
 
export default function GravatarLoader() {
    const [ email, setEmail ] = useState( '' );
    const [ gravatarData, setGravatarData ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ hasError, setHasError ] = useState( false );
 
    const onSearchProfile = async () => {
        if ( ! email ) {
            return;
        }
 
        setGravatarData( null );
        setHasError( false );
        setIsLoading( true );
 
        const response = await fetch( '/api/profile/' + email );
 
        if ( ! response.ok ) {
            setIsLoading( false );
            setHasError( true );
            return;
        }
 
        const data = await response.json();
        setGravatarData( data );
        setIsLoading( false );
    }
 
    return (
        <div className="gravatar-loader">
            <GravatarSearch email={ email } onSearchProfile={ onSearchProfile } onSetEmail={ setEmail } />
            <GravatarCard gravatarData={ gravatarData } hasError={ hasError } isLoading={ isLoading } />
        </div>
    )
}