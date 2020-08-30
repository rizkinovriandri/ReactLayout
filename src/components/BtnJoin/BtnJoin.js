import React from 'react';
// import React, { Component } from 'react';
import ButtonToolbar from '@bit/react-bootstrap.react-bootstrap.button-toolbar';
import Button from '@bit/react-bootstrap.react-bootstrap.button';
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

import './BtnJoin.css';

const BtnJoin = (props) => {
    return (
        <>
        <button variant="primary">{props.text}</button>
        <ButtonToolbar>
				<Button variant="primary" size="lg" active>
					Primary button
          </Button>
				<Button variant="secondary" size="lg" active style={{ marginLeft: 5 }}>
					Button
          </Button>
			</ButtonToolbar>
        </>
    );
}

export default BtnJoin;