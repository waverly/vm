// @flow
/* eslint-disable */

import { css } from "styled-components";
import normalized from "./normalized";

export const globalStyles = css`
	${normalized}

	@font-face {
	    font-family: futura;
	    src: url(cdced636-4488-4c04-809c-e6e1379600ec.ttf);
	}

	html {
		font-size: 10px;
		font-family: futura, 'times new roman';
		font-weight: 300;
	}

	/* TODO: refactor to add support in IE and Mozilla */

	::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
	}

	body {
		color: #454545;
	}

	form {
		margin: 0;
	}

	button, input, select, option, textarea {
		background: white;
		font-weight: 300;
		border: none;
		outline: none;
		line-height: normal;
		padding: 0;
		border-radius: 0;
		color: #454545;
	}

	label{
		color: #454545;
	}

	button {
		cursor: pointer;
	}

	h1, h2, h3, h4, h5, h6, p, li, ol {
		font-weight: 600;
		margin: 0;
		font-size: 1em!important;
		font-family: futura, 'times new roman';
	}

	h1, h2, h3{
		font-size: 14px;
		line-height: 16px;
	}

	p{
		font-size: 12px;
		line-height: 14px;
		font-weight: 400;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	* {
		box-sizing: border-box;
	}

	body {
		padding: 0;
	}

	#root,
	#reactRoot {
		height: 100%;
	}

	figure {
		margin 0;
	}

	img {
		max-width: 100%;
	}


`;
