(()=>{var e,t={741:()=>{},671:(e,t,n)=>{"use strict";n(741);var i=n(398),o=n(440);const a={W:["1   1","1 0 1","11111"],M:["11111","1 0 1","1   1"],C:["1111","0   ","1111"]},s=["W","M","C"],r=["W","M","C"].map(((e,t)=>{const n=a[e],i=n.reduce(((e,t)=>e+t.split("").filter((e=>" "!==e)).length),0),o=[];for(let e=0;e<i;e++)o.push(`/img/hero/cubes/${Math.floor(4*Math.random())}.webp`);return{pattern:n,images:o,text:s[t]}}));var l;const d=document.getElementById("boot-animation"),p=new i.Z58,c=window.innerWidth/window.innerHeight,m=new i.qUd(40*c/-2,40*c/2,20,-20,1,100);m.position.z=40;const h=new i.JeP({canvas:d});function f(e,t,n,o,a,s){const r=(new i.Tap).load(a),l=function(e){const t=document.createElement("canvas"),n=t.getContext("2d"),o=Math.random()>.5;t.width=128,t.height=128,n.fillStyle=o?"#ffffff":"#FF5237",n.fillRect(0,0,t.width,t.height),n.fillStyle=o?"#FF5237":"#ffffff",n.fillRect(10,10,t.width-20,t.height-20),n.font="bold 130px monospace",n.fillStyle="#000000",n.textAlign="center",n.textBaseline="middle",n.fillText(e,t.width/2,t.height/2+10);const a=new i.gPd(t);return a.needsUpdate=!0,a}(s),d=[new i.V9B({map:l}),new i.V9B({map:l}),new i.V9B({map:l}),new i.V9B({map:l}),new i.V9B({map:r}),new i.V9B({map:r})],c=new i.iNn(o,o,o),m=new i.eaF(c,d);return m.position.set(e,t,n),m.matrixAutoUpdate=!0,p.add(m),m}function u(e,t,n,i,o=1){const a=e.pattern,s=.1*o,r=[];for(let l=0;l<a.length;l++)for(let d=0;d<a[l].length;d++)if("1"===a[l][d]||"0"===a[l][d]){const p=t+d*(o+s),c=n-l*(o+s),m=f(p+Math.random()*o*10,c+Math.random()*o*10,i+Math.random()*o*10,o,e.images.pop(),e.text);m.rotation.y="0"===a[l][d]?Math.PI/2-.15:.15,r.push({cube:m,posX:p,posY:c,posZ:i})}return r}h.setSize(window.innerWidth,window.innerHeight);const g=[],w=[-22,-4,14];for(let e=0;e<r.length;e++)g.push(...u(r[e],w[e],0,0,3));function x(){if(h.xr.enabled||requestAnimationFrame(x),!h.xr.isPresenting&&h.xr.enabled)return;const e=new i.tBo;e.setFromCamera(v,m),g.forEach((({cube:t,posX:n,posY:o,posZ:a})=>{const s=t.position.x-n,r=t.position.y-o,l=t.position.z-(h.xr.enabled?-30:a);if(Math.abs(s)<.1&&Math.abs(r)<.1&&Math.abs(l)<.1){const n=new i.Pq0;e.ray.intersectPlane(new i.Zcv(new i.Pq0(0,0,1),a),n),Math.sqrt(Math.pow(n.x-t.position.x,2)+Math.pow(n.y-t.position.y,2))<4?t.rotation.x+=.02:t.rotation.x*=.9}else t.rotation.x+=.01*(s+r),t.position.x-=.01*s,t.position.y-=.01*r,t.position.z-=.01*l})),h.render(p,m)}null===(l=navigator.xr)||void 0===l||l.isSessionSupported("immersive-ar").then((e=>{if(e){const e=o.g.createButton(h);document.getElementById("ar-container").appendChild(e),h.xr.enabled=!0,h.xr.setReferenceSpaceType("viewer"),h.setAnimationLoop((()=>x()))}else x()}));let v=new i.I9Y(1e3,1e3);window.addEventListener("mousemove",(function(e){v.x=e.clientX/window.innerWidth*2-1,v.y=-e.clientY/window.innerHeight*2+1}),!1),window.addEventListener("resize",(function(){m.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight)}),!1),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".about").classList.remove("opacity-0")})),document.getElementById("guestCards").innerHTML=[["Athira T J ","Data Associate","Reap Benefit","/img/guests/athira.jpeg"],["Akhila ","Co-Founder","Tech4Good Community","/img/guests/akhila.jpeg"],["Vidya ","Ex Data Scientist","Tech4Good Community","/img/guests/vidya.jpeg"],["K J"],["Riya"],["Ananya"],["Sumeeti"],["Laya"],["G G"]].map((e=>function(e="",t="",n="",i="/img/guests/woman.png"){return`\n    <div class="shadow-xl ">\n        <div class="w-full h-20 bg-[#FF5237]  ">\n\n        </div>\n        <div class="flex flex-col items-center justify-center -mt-8 pb-12 lg:pb-12">\n            <div class="h-16 w-16 rounded-full border-2 border-white  bg-gray-300">\n                <img class="rounded-full " src="${i}">\n            </div>\n            <div class="flex flex-col items-center justify-center ">\n                <span class="font-semibold " >${e}</span>\n                <span class="text-sm text-[#666666]">${t}</span>\n                <span class="text-xs text-[#666666]">${n}</span>\n            </div>\n        </div>\n    </div>\n    `}(...e))).join("\n");const y={"Day 1 : March 22":[{title:"Opening Ceremony",speaker:"John Doe",time:"10:00 AM"},{title:"Keynote",speaker:"Jane Doe",time:"11:00 AM"},{title:"Lunch",speaker:"N/A",time:"12:00 PM"},{title:"Workshop",speaker:"John Doe",time:"1:00 PM"},{title:"Networking",speaker:"N/A",time:"2:00 PM"},{title:"Closing Ceremony",speaker:"Jane Doe",time:"3:00 PM"}],"Day 2 : March 23":[{title:"Opening Ceremony",speaker:"John Doe",time:"10:00 AM"},{title:"Keynote",speaker:"Jane Doe",time:"11:00 AM"},{title:"Lunch",speaker:"N/A",time:"12:00 PM"},{title:"Workshop",speaker:"John Doe",time:"1:00 PM"},{title:"Networking",speaker:"N/A",time:"2:00 PM"},{title:"Closing Ceremony",speaker:"Jane Doe",time:"3:00 PM"}]};document.getElementById("scheduleContainer").innerHTML=Object.keys(y).map((e=>function(e){return`\n    <p class="text-2xl font-bold py-10">${e}</p>\n        \x3c!-- card-container --\x3e\n        <div class="grid grid-cols-2 md:grid-cols-7  gap-3">\n            ${y[e].map(((e,t)=>function(e,t){return`\n    <div class="w-48 h-52 flex flex-col bg-[#E4DEFF] hover:bg-[#5B36F7] text-[#5B36F7] hover:text-white py-2 px-4">\n        <p class="text-3xl font-light ">${t}</p>\n        <p class=" font-light text-sm mt-2 mb-6">${e.title}</p>\n        <div class="flex-grow"></div>\n        <p class=" font-semibold">${e.speaker}</p>\n        <div class="flex gap-2 py-1 items-center">\n            <span class="material-symbols-outlined  text-base">schedule</span>\n            <p class=" font-semibold text-xs">${e.time}</p>\n        </div>\n    </div>\n    `}(e,t+1))).join("")}\n        </div>\n    </p>\n    `}(e))).join("")}},n={};function i(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,n,o,a)=>{if(!n){var s=1/0;for(p=0;p<e.length;p++){for(var[n,o,a]=e[p],r=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(r=!1,a<s&&(s=a));if(r){e.splice(p--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,o,a]},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[s,r,l]=n,d=0;if(s.some((t=>0!==e[t]))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(l)var p=l(i)}for(t&&t(n);d<s.length;d++)a=s[d],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(p)},n=self.webpackChunkmake_a_ton=self.webpackChunkmake_a_ton||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=i.O(void 0,[659],(()=>i(671)));o=i.O(o)})();