import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Accordion, Button, Checkbox, Box, Provider, Navbar,DropDownButton, Txt, Link} from 'rendition';

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
    <Accordion
    items={[
	{
	    label: 'Turntable',
	    panel: <div>
	    <DropDownButton label="Direction">
	    <React.Fragment key=".0">
	    <div>
	    Clockwise
	    </div>
	    <div>
	    Counter Clockwise
	    </div>
	    <div>
	    Stationary
	    </div>
	    </React.Fragment>
	    </DropDownButton>
	    </div>
	},
	{
	    label: 'Camera',
	    panel: <div>
	    <Txt>Here you can configure some of the settings exposed by the DSLR. A lot more settings can be accessed by using the gphoto2 CLI directly</Txt>
	    <br/><Checkbox label="Flash"/>
	    </div>
	},
	{
	    label: 'Lights',
	    panel: 'Tweak the lighting here'
	},
    ]}
    />

    <br/>
    <br/>
    <Button primary emphasized>Capture!</Button>

    </Box>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
