const express = require( 'express' );
const path = require( 'path' );
const dotenv = require( 'dotenv' )
const axios = require( 'axios' );
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config( { path: path.join( __dirname, '../../.env' ) } );

// Serve static files from the public directory
app.use( express.static( path.join( __dirname, '../../public' ) ) );

// [ Insert the route to fetch Gravatar data here ]
app.get( '/api/profile/:identifier', async ( req, res ) => {
    const { identifier } = req.params;
 
    try {
        const hash = crypto.createHash( 'sha256' ).update( identifier.trim().toLowerCase() ).digest( 'hex' );
 
        const response = await axios.get( `https://api.gravatar.com/v3/profiles/${ hash }`, {
            headers: {
                Authorization: `Bearer ${ process.env.API_KEY }`,
            },
        } );
 
        res.json( response.data );
    } catch ( error ) {
        res.status( error.response ? error.response.status : 500 ).json( {
            error: error.message
        } );
    }
} );

// Serve the HTML file for all other routes
app.get( '*', ( req, res ) => {
	res.sendFile( path.join( __dirname, '../../public/index.html' ) );
} );

app.listen( PORT, () => {
	console.log( `Server is running on port ${ PORT }` );
} );
