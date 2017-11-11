import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

const tabs = [
	{ title: "one", content: "first" },
	{ title: "two", content: "second"},
	{ title: "three", content: "third"}
];

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(
		<Tabs tabs={tabs} />,
		root);
});
