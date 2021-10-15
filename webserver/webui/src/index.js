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
    <Link color="white">
    Live view
    </Link>
    </Navbar>
    <Box my={3} mx={['auto', 15]}>
    <div>
    <Form
    onFormSubmit={
	function noRefCheck(result){
	    console.log(result.formData);

	    try {
		fetch ("/api", {
		    method: "POST",
		    headers: {
			Accept: "application/json",
			
			"Content-Type": "application/json",
		    },
		    body: JSON.stringify(
			result.formData
		    ),
		}).then(response =>  {
		    console.log(response);
		});
	    } catch (e) {
		console.error('Error',e);
	    }	    		
	}
    }
	schema={{
	    properties: {
	    Direction: {
		title: 'Direction of rotation',
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
		title : 'Rotation speed',
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
	    Focus: {
		title : 'Lens Focus',
		oneOf: [
		    {
			const: 'n1',
			title: 'Near 1'
		    },
		    {
			const: 'n2',
			title: 'Near 2'
		    },
		    {
			const: 'n3',
			title: 'Near 3'
		    },
		    {
			const: '0',
			title: 'None'
		    },
		    {
			const: 'f1',
			title: 'Far 1'
		    },
		    {
			const: 'f2',
			title: 'Far 2'
		    },
		    {
			const: 'f3',
			title: 'Far 3'
		    }
		],
		type:'string'
	    },
	    Aperture : {
		oneOf: [
		    {
			const: '4',
			title: '4'
		    },
		    {
			const: '4.5',
			title: '4.5'
		    },
		    {
			const: '5',
			title: '5'
		    },
		    {
			const: '6.3',
			title: '6.3'
		    },
		    {
			const: '7.1',
			title: '7.1'			
		    },
		    {
			const: '8',
			title: '8'
		    },
		    {
			const: '9',
			title: '9'
		    },
		    {
			const: '10',
			title: '10'
		    },
		    {
			const: '11',
			title: '11'
		    },
		    {
			const: '13',
			title: '13'			
		    },
		    {
			const: '14',
			title: '14'
		    },
		    {
			const: '16',
			title: '16'
		    },
		    {
			const: '18',
			title: '18'			
		    },
		    {
			const: '20',
			title: '20'
		    },
		    {
			const: '22',
			title: '22'
		    }		    
		],
		type: 'string'
	    },
		ISO : {
		    oneOf:[
			{
			const : 'auto',
			      title: 'Auto'
		    }
		],
		type: 'string'
	    },
	    Exposure : {
		oneOf: [
		    {
			const: '30',
			title: '30'
		    },
		    {
			const: '25',
			title: '25'
		    },
		    {
			const: '20',
			title: '20'
		    },
		    {
			const: '15',
			title: '15'
		    },
		    {
			const: '13',
			title: '13'			
		    },
		    {
			const: '10',
			title: '10'
		    },
		    {
			const: '8',
			title: '8'
		    },
		    {
			const: '6',
			title: '6'			
		    },
		    {
			const: '5',
			title: '5'
		    },
		    {
			const: '4',
			title: '4'
		    },
		    {
			const: '3.2',
			title: '3.2'
		    },
		    {
			const: '2.5',
			title: '2.5'
		    },
		    {
			const: '2',
			title: '2'
		    },
		    {
			const: '1.6',
			title: '1.6'
		    },
		    {
			const: '1.3',
			title: '1.3'			
		    },
		    {
			const: '1',
			title: '1'
		    },
		    {
			const: '0.8',
			title: '0.8'
		    },
		    {
			const: '0.6',
			title: '0.6'			
		    },
		    {
			const: '0.5',
			title: '0.5'
		    },
		    {
			const: '0.4',
			title: '04'
		    }   
		],
		type : 'string'
	    },
		Power: {
		    title: 'Light on',
		    type: 'boolean'
		},
	    },
	    title: 'Photobooth Settings',
	    type: 'object'		
	}}
    submitButtonText="Smile!"
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
