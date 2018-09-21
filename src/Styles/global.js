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

	.fade-leave {
	  opacity: 1;
	}
	.fade-leave.fade-leave-active {
	  opacity: 0;
	  transition: opacity 0.5s ease-in;
	}

	.fade-enter {
	  opacity: 0;
	}
	.fade-enter.fade-enter-active {
	  opacity: 1;
	  /* Delay the enter animation until the leave completes */
	  transition: opacity 0.4s ease-in 0.6s;
	}

	.fade-height {
	  transition: height 0s ease-in-out;
	}

	html {
		font-size: 11px;
		font-family: futura, 'helvetica', sans-serif;
		font-weight: 300;
	}

	/* TODO: refactor to add support in IE and Mozilla */

	::-webkit-scrollbar {
    ${"" /* width: 0px; 
    background: transparent;   */}
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
		font-family: futura, 'times new roman';
	}

	h1, h2, h3{
		font-size: 12px;
		line-height: 18px;
	}

	p{
		font-size: 12px;
		line-height: 18px;
		font-weight: 400;
	}

	a {
		text-decoration: none;
		color: inherit;
		&:hover{
			color: #BABABA;
		}
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
