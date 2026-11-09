// Main interactions for the raw2reel landing page.
const S = window.ORDER_STEPS;
let O=null;
function save(){try{localStorage.setItem("rf_order",JSON.stringify(O))}catch(e){}}
function load(){try{const v=localStorage.getItem("rf_order");if(v){O=JSON.parse(v);draw()}}catch(e){}}
function draw(){
 if(!O)return;
 const t=O.step>=5?"Delivered ✓":"Estimated delivery: <b>"+O.eta+"</b>";
 let h='<span class="mini">ORDER ID</span><div class="oid">'+O.id+'</div><div class="mini">'+O.name+' · '+O.tier+'</div><div class="eta">'+t+'</div>';
 S.forEach((s,i)=>{const c=i<O.step?"done":i===O.step?"now":"";
  h+='<div class="st '+c+'"><i>'+(i<O.step?"✓":"")+'</i><h4>'+s[0]+'</h4><span>'+(i<=O.step?s[1]+(O.t[i]?" · "+O.t[i]:""):"")+'</span></div>'});
 if(O.step<5)h+='<button class="btn o" id="adv" style="padding:10px 18px;font-size:13px">Demo: advance status</button><p class="mini">In the real app, your editors update this from an admin panel.</p>';
 document.getElementById("tb").innerHTML=h;
 const b=document.getElementById("adv");if(b)b.onclick=()=>{O.step++;O.t[O.step-1]=now();save();draw()};
}
function now(){return new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}
document.getElementById("f").onsubmit=e=>{
 e.preventDefault();
 const tier=document.getElementById("tr").value,hrs=tier.startsWith("Basic")?72:tier.startsWith("Prem")?36:48;
 const d=new Date(Date.now()+hrs*36e5);
 O={id:"RF"+Math.floor(100000+Math.random()*900000),name:document.getElementById("nm").value,tier:tier,eta:d.toLocaleDateString([], {weekday:"short",day:"numeric",month:"short"}),step:1,t:[now()]};
 save();draw();document.getElementById("track").scrollIntoView({behavior:"smooth",block:"center"});
};
document.querySelectorAll("[data-t]").forEach(a=>a.onclick=()=>{const s=document.getElementById("tr");[...s.options].forEach((o,i)=>{if(o.text.startsWith(a.dataset.t))s.selectedIndex=i})});
load();
