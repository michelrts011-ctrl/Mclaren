const CARS=[
 {id:"720s",name:"720S",tag:"Papaya orange",alt:"Orange McLaren 720S",img:"img/720s.webp",power:"720 PS",accel:"2.9 s",top:"341 km/h",video:"https://www.tiktok.com/@ransrgg/video/7458972895503453448?_r=1&_t=ZS-91miEYPkonF"},
 {id:"765lt",name:"765LT",tag:"Purple",alt:"Purple McLaren 765LT",img:"img/765lt.webp",power:"765 PS",accel:"2.8 s",top:"330 km/h",video:"https://www.tiktok.com/@yannsilva100/video/7485847508963314974?q=mclaren%20765lt%20roxa&t=1764450936835"},
 {id:"p1",name:"P1",tag:"Black",alt:"Black McLaren P1",img:"img/p1.webp",power:"916 PS",accel:"2.8 s",top:"350 km/h",video:"https://www.tiktok.com/@dbmp4_/video/7407614092552326442?q=mclaren%20p1%20preta&t=1764450882687"}
];
const $=id=>document.getElementById(id);
let current=0,busy=false;
const picker=$("picker"),stage=$("stage");

CARS.forEach((c,i)=>{
 const b=document.createElement("button");
 b.type="button";b.setAttribute("aria-pressed",i===0);
 b.innerHTML='<img src="'+c.img+'" alt=""><span>'+c.name+'<em>'+c.tag+'</em></span>';
 b.addEventListener("click",()=>show(i));
 picker.appendChild(b);
});

function render(i){
 const c=CARS[i];
 $("car").src=c.img;$("car").alt=c.alt;
 $("name").textContent=c.name;
 $("s-power").textContent=c.power;$("s-accel").textContent=c.accel;$("s-top").textContent=c.top;
 document.body.dataset.car=c.id;
 [...picker.children].forEach((b,k)=>b.setAttribute("aria-pressed",k===i));
}
function show(i){
 if(i===current||busy)return;
 busy=true;current=i;
 stage.classList.add("swap");
 document.body.dataset.car=CARS[i].id;
 setTimeout(()=>{render(i);requestAnimationFrame(()=>{stage.classList.remove("swap");busy=false});},260);
}
$("video").addEventListener("click",()=>window.open(CARS[current].video,"_blank","noopener,noreferrer"));
render(0);
