import {CtxRendering, randomWithinRange,debounce} from 'mkcvs';

export class A extends CtxRendering{
  private ctx:CanvasRenderingContext2D;
  private cvs:HTMLCanvasElement;
  private loc:{x:number,y:number};
  private layer;
  constructor(layer:any){
    super(layer);
    this.layer = layer;
    this.init();
  }
  init(){
    this.loc = {
      x:randomWithinRange(0,this.cvs.width),
      y:randomWithinRange(0,this.cvs.height)
    };
    this.layer.onFrame =this.draw.bind(this);
   
  }
  draw(){
    this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);
    this.ctx.arc(
      this.loc.x,
      this.loc.y,
      20,
      0,
      Math.PI*2
    );
    this.ctx.fillStyle = '#000';
    this.ctx.fill();
  }
}

export class B{
  private cvs:HTMLCanvasElement;
  private ctx:CanvasRenderingContext2D;
  private loc:{x:number,y:number};
  constructor(cvs:HTMLCanvasElement){
    this.cvs = cvs;
    this.ctx = cvs.getContext('2d');
    this.init();
  }
  init(){
    this.resize();
    this.loc = {
      x:randomWithinRange(0,this.cvs.width),
      y:randomWithinRange(0,this.cvs.height)
    };
    window.addEventListener('resize',debounce(()=>{this.resize()},200));
    this.draw();
  }
  resize(){
    this.cvs.width = window.innerWidth;
    this.cvs.height = window.innerHeight;
  }
  draw(){
    this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);
    this.ctx.arc(
      this.loc.x,
      this.loc.y,
      20,
      0,
      Math.PI*2
    );
    this.ctx.fillStyle = '#000';
    this.ctx.fill();
    requestAnimationFrame(()=>{
      this.draw();
    })
  }
}