import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Box, Provider, Navbar, Link, Form, Img} from 'rendition';


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
	    <Img src="http://10.2.233.34:8080/autophoto.mjpg/?action=stream" />

    <div>
    <Form
    submitButtonText="Shoot!"
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
	    Rotation: {
		title : 'Rotation',
		oneOf: [
		    {
			const : '-5',
			title: '-5'
		    },
		    {
			const: '-3',
			title: '-3'
		    },
		    {
			const: '-1',
			title: '-1'
		    },
		    {
			const : '0',
			title: '0'
		    },
		    {
			const : '1',
			title: '1'
		    },
		    {
			const: '3',
			title: '3'
		    },
		    {
			const: '5',
			title: '5'
		    }
		],
		type:'string'
	    },
	    Focus: {
		title : 'Lens Focus',
		oneOf: [
		    {
			const: 'Near 1',
			title: 'Near 1'
		    },
		    {
			const: 'Near 2',
			title: 'Near 2'
		    },
		    {
			const: 'Near 3',
			title: 'Near 3'
		    },
		    {
			const: 'None',
			title: 'None'
		    },
		    {
			const: 'Far 1',
			title: 'Far 1'
		    },
		    {
			const: 'Far 2',
			title: 'Far 2'
		    },
		    {
			const: 'Far 3',
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
			const : 'Auto',
			      title: 'Auto'
		    }
		],
		type: 'string'
	    },
	    Exposure : {
		oneOf:[
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
			title: '0.4'
		    },
		    {
			const: '0.3',
			title: '0.3'
		    },
		    {
			const: '1/4',
			title: '1/4'
		    },
		    {
			const: '1/5',
			title: '1/5'
		    },
		    {
			const: '1/6',
			title: '1/6'
		    },
		    {
			const: '1/8',
			title: '1/8'
		    },
		    {
			const: '1/10',
			title: '1/10'
		    },
		    {
			const: '1/13',
			title: '1/13'
		    },
		    {
			const: '1/15',
			title: '1/15'
		    },
		    {
			const: '1/20',
			title: '1/20'
		    },
		    {
			const: '1/25',
			title: '1/25'
		    },
		    {
			const: '1/30',
			title: '1/30'
		    },
		    {
			const: '1/40',
			title: '1/40'
		    },
		    {
			const: '1/50',
			title: '1/50'
		    },
		    {
			const: '1/60',
			title: '1/60'
		    },
		    {
			const: '1/80',
			title: '1/80'
		    },
		    {
			const: '1/100',
			title: '1/100'
		    },
		    {
			const: '1/125',
			title: '1/125'
		    },
		    {
			const: '1/160',
			title: '1/160'
		    },
		    {
			const: '1/200',
			title: '1/200'
		    },
		    {
			const: '1/250',
			title: '1/250'
		    },
		    {
			const: '1/320',
			title: '1/320'
		    },
		    {
			const: '1/400',
			title: '1/400'
		    },
		    {
			const: '1/500',
			title: '1/500'
		    },
		    {
			const: '1/640',
			title: '1/640'
		    },
		    {
			const: '1/800',
			title: '1/800'
		    },
		    {
			const: '1/1000',
			title: '1/1000'
		    },
		    {
			const: '1/1250',
			title: '1/1250'
		    },
		    {
			const: '1/1600',
			title: '1/1600'
		    },
		    {
			const: '1/2000',
			title: '1/2000'
		    },
		    {
			const: '1/2500',
			title: '1/2500'
		    },
		    {
			const: '1/3200',
			title: '1/3200'
		    },
		    {
			const: '1/4000',
			title: '1/4000'
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
