import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Box, Provider, Navbar, Link, Form} from 'rendition';

ReactDOM.render(
    <Provider>
    <Navbar>
    <Link href="/downloads/" color="white">
    Download images
    </Link>
    <Link href="https://github.com/balena-io-playground/autophoto" color="white">
    Source code
    </Link>
    </Navbar>
    <Box my={3} mx={['auto', 15]}>
    <div>
	    <Form
	    onFormSubmit={function noRefCheck(){alert("Success");}}
	    schema={{
		properties: {
		    Direction: {
			oneOf: [
			    {
				const: -1,
				title: 'Clockwise'
			    },
			    {
				const: 1,
				title: 'Counter Clockwise'
			    },
			    {
				const: 0,
				title: 'Stationary'
			    }			    
			],
			type:'number'
		    },
		    Speed: {
			oneOf: [
			    {
				const: 5,
				title: '5'
			    },
			    {
				const: 10,
				title: '10'
			    },
			    {
				const: 15,
				title: '15'
			    }			    
			],
			type:'number'
		    },
		},
		title: 'Turntable',
		type: 'object'
		    
	    }}
		/>	    
    </div>
    <div>
    <Form
	    onFormSubmit={function noRefCheck(){alert("Success");}}
	    schema={{
		properties: {
		    Zoom: {
			oneOf: [
			    {
				const: 'F16',
				title: 'F16'
			    },
			    {
				const: 'F8',
				title: 'F8'
			    },
			    {
				const: 'F2',
				title: 'F2'
			    }			    
			],
			type:'string'
		    },
		},
		title: 'Camera',
		type: 'object'
		    
	    }}
		/>
	    </div>
 <div>
	    <Form
	    onFormSubmit={function noRefCheck(){alert("Success");}}
	    schema={{
		properties: {
		    Power: {
			type: 'boolean'
		    },
		},
		title: 'Lights',
		type: 'object'		
	    }}
    />
    </div>

    </Box>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
