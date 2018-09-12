// @flow
/* eslint-disable */

import { css } from "styled-components";
import normalized from "./normalized";

export const globalStyles = css`
	${normalized}

	html {
		font-size: 10px;
		font-family: ${props => props.theme.fontFamily.cormorant};
		font-weight: 300;
	}

	/* TODO: refactor to add support in IE and Mozilla */

	::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
	}

	body {
		color: ${props => props.theme.color.darkGray};
	}

	form {
		margin: 0;
	}

	button, input, select, option, textarea {
		background: white;

		font-family: ${props => props.theme.fontFamily.cormorant};
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
		color: ${props => props.theme.colors.red};;
		font-weight: ${props => props.theme.fontWeight.medium};
		margin: 0;
		font-size: ${props => props.theme.fontSize.header};
		font-size: 1em!important;
	}

	p{
		font-size: ${props => props.theme.fontSize.body};
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
