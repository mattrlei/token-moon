var W2T=1.35;
var nodes=[],wfName='',openCalIdx=-1,wizStep=0,wizNodes=[],curN8nTab='';
var GRN_BTN='padding:8px 14px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;background:#10b981;color:#000;border:2px solid #10b981';
var GRN_BTN_SM='padding:5px 10px;border-radius:5px;font-size:10px;font-weight:700;cursor:pointer;font-family:inherit;background:#10b981;color:#000;border:2px solid #10b981';
var GRN_BTN_DIM='padding:8px 14px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;background:rgba(16,185,129,.2);color:#6ee7b7;border:2px solid rgba(16,185,129,.5)';

function w2t(w){return Math.round(w*W2T);}
function c2t(c){return Math.round(c/4);}
function cc(n,mk){var p=P[mk||n.model];if(!p||!n.isLLM)return 0;return(n.inTok*p.i+n.outTok*p.o)/1e6;}
function mc(n,mk){return cc(n,mk)*n.calls;}
function tot(){return nodes.reduce(function(s,n){return s+mc(n);},0);}
function fmm(v){return'$'+v.toFixed(2);}
function fm4(v){return'$'+v.toFixed(4);}

function switchMode(m){
  ['n8n','api','code','plan'].forEach(function(id){
    var btn=document.getElementById('mbtn-'+id);
    if(btn){btn.style.background=id===m?'#10b981':'rgba(16,185,129,.2)';btn.style.color=id===m?'#000':'#6ee7b7';btn.style.borderColor=id===m?'#10b981':'rgba(16,185,129,.5)';}
    var panel=document.getElementById('mode-'+id);
    if(panel)panel.classList.toggle('on',id===m);
  });
  if(m==='api')initAPI();
  if(m==='code')calcCC();
  if(m==='plan')calcPlan();
}

