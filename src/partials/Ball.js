import { SVG_NS } from '../settings';

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;

    this.reset();
  }

  wallCollision(){
      const hitLeft =  this.x - this.radius <= 0;
      const hitRight = this.x + this.radius >= this.boardWidth;
      const hitTop = this.y - this.radius <= 0;
      const hitBottom = this.y + this.radius >= this.boardHeight;

      if (hitLeft || hitRight) {
          this.vx = -this.vx;


      } else if(hitTop || hitBottom){
          this.vy = -this.vy;
      }
  }
  
  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;
    
    this.vy = 0;

    while( this.vy === 0){
    this.vy = Math.floor(Math.random() * 10 - 5);   // a number between -5 and 5
    }

    this.vx = this.direction * (6 - Math.abs(this.vy));
    }
  render(svg){
    this.x += this.vx;
    this.y += this.vy;

    this.wallCollision();

     
      let ball = document.createElementNS(SVG_NS,'circle');
      ball.setAttributeNS(null, 'stroke', 'white');
      ball.setAttributeNS(null, 'fill', 'white');
      ball.setAttributeNS(null, 'r', this.radius);
      ball.setAttributeNS(null,'cx', this.x); //x of the top left corner
      ball.setAttributeNS(null, 'cy', this.y); // y of the top left corner

      svg.appendChild(ball);
  }
}