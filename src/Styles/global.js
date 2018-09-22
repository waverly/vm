// @flow
/* eslint-disable */

import { css } from "styled-components";
import normalized from "./normalized";

export const globalStyles = css`
	${normalized}

	@font-face {
	    font-family: futura;

			src: url(a3756428-debf-4a86-aed0-a834a3df9bd7.eot); /* IE9 Compat Modes */
			src: url('a3756428-debf-4a86-aed0-a834a3df9bd7.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
					 url(5f081b13-e570-4277-9283-091a6f6cab04.woff2) format('woff2'), /* Super Modern Browsers */
					 url(588b3f3a-c193-4962-8e01-d4caef90f58b.woff) format('woff'), /* Pretty Modern Browsers */
					 url(cdced636-4488-4c04-809c-e6e1379600ec.ttf);/* Safari, Android, iOS */
	}

	@font-face {
		font-family: futura-medium;
		src: url(9a9fb331-0d04-4a0f-94d6-4c7c9132678e.eot); /* IE9 Compat Modes */
		src: url('9a9fb331-0d04-4a0f-94d6-4c7c9132678e.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
				 url(91597685-99ad-4a3c-81b0-84491562b714.woff2) format('woff2'), /* Super Modern Browsers */
				 url(717bc962-d7ad-40ef-b37b-808824c7f061.woff) format('woff'), /* Pretty Modern Browsers */
				 url(dfe1dfa8-1fb9-4c68-a199-4f31e702d3c5.ttf); /* Safari, Android, iOS */


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
		margin: 0;
		font-family: futura, helvetica, sans-serif;
		font-weight: 400;
	}

	h1, h2, h3{
		font-size: 12px;
		line-height: 18px;
		font-family: futura-medium, helvetica, sans-serif;
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
