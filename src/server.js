import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './app';
import template from './template';
import celebData from './data';
import fs from 'fs';

const app = express();
const port = 8080;

app.use('/assets', express.static('assets'));

app.get('/:celeb', (req, res) => {

  	const celeb = req.params.celeb;
	const name = celebData.people[celeb]
	const initialState = { name };
	const appString = renderToString(<App {...initialState} />);

	res.send(template({
	  body: appString,
	  title: 'Hello World from the server',
	  initialState: JSON.stringify(initialState)
	}));
});

app.listen(port);
console.log(`listening: ${port}`);
