import {Composition} from 'mkcvs';
import {A} from './lib/draw';


(()=>{
  const compEle = document.getElementById('composition');
  const comp = new Composition(compEle);
  for(let i=0;i<10;i++){
    const layer  = comp.newLayer('2d');
    new A(layer);
  }
})()