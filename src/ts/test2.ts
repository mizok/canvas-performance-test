import {B} from './lib/draw';

window.onload = ()=>{
  const compEle = document.getElementById('composition');
  compEle.querySelectorAll('canvas').forEach((o,i)=>{
    new B(o);
  })
}