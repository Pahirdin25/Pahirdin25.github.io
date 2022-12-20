/*!
 * Fairy Dust Cursor.js
 * - 90's cursors collection
 * -- https://github.com/tholman/90s-cursor-effects
 * -- http://codepen.io/tholman/full/jWmZxZ/
 */
!function(){var t=["#D61C59","#E7D84B","#1B8798"],i=window.innerWidth,e=(window.innerHeight,{x:i/2,y:i/2}),n=[];function o(t){i=window.innerWidth,window.innerHeight}function s(i){if(i.touches.length>0)for(var e=0;e<i.touches.length;e++)a(i.touches[e].clientX,i.touches[e].clientY,t[Math.floor(Math.random()*t.length)])}function h(i){e.x=i.clientX,e.y=i.clientY,a(e.x,e.y,t[Math.floor(Math.random()*t.length)])}function a(t,i,e){var o=new r;o.init(t,i,e),n.push(o)}function l(){requestAnimationFrame(l),function(){for(var t=0;t<n.length;t++)n[t].update();for(t=n.length-1;t>=0;t--)n[t].lifeSpan<0&&(n[t].die(),n.splice(t,1))}()}function r(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"20px","will-change":"transform"},this.init=function(t,i,e){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t-10,y:i-20},this.initialStyles.color=e,console.log(e),this.element=document.createElement("span"),this.element.innerHTML=this.character,function(t,i){for(var e in i)t.style[e]=i[e]}(this.element,this.initialStyles),this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}}document.addEventListener("mousemove",h),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),window.addEventListener("resize",o),l()}();
