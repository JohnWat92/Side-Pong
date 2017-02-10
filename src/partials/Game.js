import {SVG_NS, KEYS} from '../settings';
import Board from './Board';
import Ball from './Ball';

import Paddle from './Paddle';


export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.boardGap = 10;
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.radius = 8;
	
		this.gameElement = document.getElementById(this.element);

		this.board = new Board(this.width, this.height);

		this.player1 = new Paddle(
			this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			this.boardGap, 
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z
			);

		this.player2 = new Paddle(
			this.height,
			this.paddleWidth, 
			this.paddleHeight, 
			(this.width - this.boardGap - this.paddleWidth), 
			((this.height - this.paddleHeight)/2),
			KEYS.up,
			KEYS.down
			);

		this.ball = new Ball(
			this.radius,
			this.width,
			this.height
			);
	}

	render() {
		//empties out the SVGs so page doesn't scroll infinitely
		this.gameElement.innerHTML= '';

		let svg = document.createElementNS(SVG_NS,'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);
		this.ball.render(svg);
	}

}