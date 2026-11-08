/* PDF A4 autonome (aucune dépendance, aucune fenêtre d'impression). */
'use strict';
(function(){
const W=210,H=297,M=10.8,CW=W-2*M,FOOT=284,LIMIT=279.5,SCALE=9.5;
const NAVY='#263d58',INK='#202c3a',MUTED='#65768a',LINE='#bbc9d6',LIGHT='#e0e6ec';
const FONT="Aptos, 'Aptos Display', 'Segoe UI', Carlito, Calibri, Arial, sans-serif";
const styles={title:[4.27,500,5.02,NAVY],body:[3.30,400,4.10,INK],note:[3.23,400,4,INK],reco:[3.52,400,4.35,INK],label:[2.87,400,3.65,MUTED],value:[3.4,400,4.1,INK]};
const nonempty=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
const s=v=>String(v??'').trim();
function font(c,k){const a=styles[k];c.font=`${a[1]} ${a[0]}px ${FONT}`;c.textBaseline='top';c.textAlign='left';c.fillStyle=a[3];}
function wrap(c,text,width,k){font(c,k);const out=[];for(const paragraph of String(text||'').split(/\r?\n/)){if(!paragraph.trim()){out.push('');continue;}let current='';for(const token of paragraph.trim().split(/\s+/)){let word='';const chunks=[];for(const ch of token){if(word&&c.measureText(word+ch).width>width){chunks.push(word);word=ch;}else word+=ch;}if(word)chunks.push(word);for(const chunk of chunks){const next=current?current+' '+chunk:chunk;if(current&&c.measureText(next).width>width){out.push(current);current=chunk;}else current=next;}}out.push(current);}return out;}
function drawLines(c,lines,x,y,k){font(c,k);for(const line of lines){if(line)c.fillText(line,x,y);y+=styles[k][2];}return y;}
function rounded(c,x,y,w,h,r=2.8){c.beginPath();if(c.roundRect)c.roundRect(x,y,w,h,r);else c.rect(x,y,w,h);}
function blankPage(){const p=document.createElement('canvas');p.width=Math.round(W*SCALE);p.height=Math.round(H*SCALE);const c=p.getContext('2d',{alpha:false});c.scale(p.width/W,p.height/H);c.fillStyle='#fff';c.fillRect(0,0,W,H);return {p,c};}
function imgContain(c,img,x,y,w,h){const k=Math.min(w/img.naturalWidth,h/img.naturalHeight),iw=img.naturalWidth*k,ih=img.naturalHeight*k;c.drawImage(img,x+(w-iw)/2,y+(h-ih)/2,iw,ih);}
function stages(c,photos,x,y,w,h){if(!photos.length)return;
 const portrait=photos.every(p=>p.naturalHeight>p.naturalWidth),gap=1.2;
 if(portrait){const iw=(w-gap*(photos.length-1))/photos.length;photos.forEach((p,i)=>imgContain(c,p,x+i*(iw+gap),y,iw,h));}
 else {const ih=(h-gap*(photos.length-1))/photos.length;photos.forEach((p,i)=>imgContain(c,p,x,y+i*(ih+gap),w,ih));}
}
function tableValues(p){p=p||{};let arr=[];if(nonempty(p.sets))arr.push(['Séries',s(p.sets)]);
 if(p.mode==='duration'){if(nonempty(p.duration))arr.push(['Durée',s(p.duration)+' s']);}
 else if(nonempty(p.reps))arr.push(['Répétitions',s(p.reps)]);
 if(nonempty(p.rest))arr.push(['Repos',s(p.rest)+' sec']);
 if(nonempty(p.rir))arr.push(['RIR',s(p.rir)]);
 if(nonempty(p.load))arr.push(['Charge',s(p.load)]);return arr;
}
function table(c,values,x,y,w){if(!values.length)return y;const lh=6.9,vh=7.8,h=lh+vh;
 const needs=values.map(([label,value])=>{font(c,'label');const a=c.measureText(label).width;font(c,'value');return Math.max(a,c.measureText(value).width)+5.5;});const sum=needs.reduce((a,b)=>a+b,0),alloc=needs.map(a=>a*w/sum);
 c.lineWidth=.18;c.strokeStyle=LINE;rounded(c,x,y,w,h,1.7);c.stroke();c.beginPath();c.moveTo(x,y+lh);c.lineTo(x+w,y+lh);c.stroke();
 let px=x;values.forEach(([label,value],i)=>{const cw=alloc[i],mid=px+cw/2;if(i){c.beginPath();c.moveTo(px,y);c.lineTo(px,y+h);c.stroke();}
  font(c,'label');c.textAlign='center';c.fillText(label,mid,y+1.2);font(c,'value');let fs=styles.value[0];while(fs>2.13&&c.measureText(value).width>cw-1.5){fs-=.13;c.font=`400 ${fs}px ${FONT}`;}c.fillText(value,mid,y+lh+1.6);c.textAlign='left';px+=cw;});return y+h;
}
const CARD_H=72.7,GAP=4.1,PAD=3.1,IMG_W=54,IMG_X=M+PAD,DIV=IMG_X+IMG_W+2.6,TX=DIV+4.2,TW=W-M-PAD-TX;
function height(b){return Math.max(CARD_H,PAD*2+b.t.length*5.02+2.1+b.i.length*4.1+(b.p.length?18.9:0)+(b.n.length?3.5+b.n.length*4:0));}
function paint(c,b,y){const h=height(b);c.strokeStyle=LINE;c.lineWidth=.24;rounded(c,M,y,CW,h,3);c.stroke();c.strokeStyle=LIGHT;c.lineWidth=.18;c.beginPath();c.moveTo(DIV,y+PAD);c.lineTo(DIV,y+h-PAD);c.stroke();stages(c,b.images,IMG_X,y+PAD,IMG_W,h-2*PAD);
 let q=drawLines(c,b.t,TX,y+PAD,'title')+2.1;q=drawLines(c,b.i,TX,q,'body');if(b.p.length){q+=4.2;q=table(c,b.p,TX,q,TW);}if(b.n.length){q+=3.5;q=drawLines(c,b.n,TX,q,'note');}if(q>y+h-PAD+.4)throw Error('Mise en page du texte trop chargée.');return h;}
function footer(c){c.strokeStyle=LINE;c.lineWidth=.20;c.beginPath();c.moveTo(M,FOOT);c.lineTo(W-M,FOOT);c.stroke();c.save();c.font=`italic 3.35px ${FONT}`;c.fillStyle=MUTED;c.textBaseline='top';c.textAlign='right';c.fillText('Exercices prescrits par Jules Louis',W-M,FOOT+3);c.restore();}
function blocks(c,ex,item,images){const inst=wrap(c,ex.instructions||'',TW,'body'),note=nonempty(item.notes)?wrap(c,'Commentaire : '+s(item.notes),TW,'note'):[],params=tableValues(item.params);const result=[];let at=0;
 do{const chunk=inst.slice(at,at+23);at+=chunk.length;const last=at>=inst.length,first=result.length===0;
 const b={t:wrap(c,ex.name+(first?'':' (suite)'),TW,'title'),i:chunk,p:last?params:[],n:last?note:[],images:first?images.slice(0,2):[]};
 if(height(b)>246&&b.n.length){const all=b.n;b.n=all.slice(0,12);result.push(b);for(let j=12;j<all.length;j+=24)result.push({t:wrap(c,ex.name+' (commentaire, suite)',TW,'title'),i:[],p:[],n:all.slice(j,j+24),images:[]});}
 else result.push(b);
 }while(at<inst.length);
 for(let i=2;i<images.length;i+=2)result.push({t:wrap(c,ex.name+' (étapes suivantes)',TW,'title'),i:[],p:[],n:[],images:images.slice(i,i+2)});
 return result;
}
function bytes(src){const v=atob(src.slice(src.indexOf(',')+1)),a=new Uint8Array(v.length);for(let i=0;i<v.length;i++)a[i]=v.charCodeAt(i);return a;}
function makePDF(pages){const enc=new TextEncoder(),parts=[],offs=[0];let len=0;const add=v=>{const a=typeof v==='string'?enc.encode(v):v;parts.push(a);len+=a.length;};function object(id,head,stream){offs[id]=len;add(`${id} 0 obj\n${head}`);if(stream){add('\nstream\n');add(stream);add('\nendstream');}add('\nendobj\n');}
 add('%PDF-1.4\n%generated\n');object(1,'<< /Type /Catalog /Pages 2 0 R >>');object(2,`<< /Type /Pages /Count ${pages.length} /Kids [${pages.map((_,i)=>`${3+3*i} 0 R`).join(' ')}] >>`);
 pages.forEach((p,i)=>{const id=3+3*i,jpeg=bytes(p.toDataURL('image/jpeg',.9)),code=enc.encode('q\n595.276 0 0 841.890 0 0 cm\n/Pic Do\nQ\n');object(id,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.276 841.890] /Resources << /XObject << /Pic ${id+1} 0 R >> >> /Contents ${id+2} 0 R >>`);object(id+1,`<< /Type /XObject /Subtype /Image /Width ${p.width} /Height ${p.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>`,jpeg);object(id+2,`<< /Length ${code.length} >>`,code);});const xref=len,n=3+pages.length*3;add(`xref\n0 ${n}\n0000000000 65535 f \n`);for(let i=1;i<n;i++)add(`${String(offs[i]).padStart(10,'0')} 00000 n \n`);add(`trailer\n<< /Size ${n} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);return new Blob(parts,{type:'application/pdf'});}
function image(src){return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>reject(Error('Image introuvable pour un exercice.'));img.src=src;});}
function savePDF(pdf){const link=document.createElement('a'),url=URL.createObjectURL(pdf);link.download='Programme_exercices.pdf';link.href=url;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),25000);}
async function exportPrescription(program,library,recommendation){if(!program.length)throw Error('Ajoute un exercice.');const all=[];for(const item of program){const ex=library.find(x=>x.id===item.exerciseId);if(ex)all.push({ex,item,images:await Promise.all((ex.images||[]).map(i=>image(i.src)))});}if(!all.length)throw Error('Aucun exercice à exporter.');
 const pages=[];let page=blankPage(),c=page.c,y=11.7;pages.push(page.p);function next(){footer(c);page=blankPage();c=page.c;pages.push(page.p);y=11.7;}
 if(nonempty(recommendation)){font(c,'title');c.fillText('Recommandation :',M,y);y+=5.8;const lines=wrap(c,recommendation,CW,'reco');for(const t of lines){if(y+styles.reco[2]>LIMIT-7)next();drawLines(c,[t],M,y,'reco');y+=styles.reco[2];}y+=6;c.strokeStyle=LIGHT;c.lineWidth=.22;c.beginPath();c.moveTo(M,y);c.lineTo(W-M,y);c.stroke();y+=7.2;}else y=14;
 for(const {ex,item,images} of all)for(const b of blocks(c,ex,item,images)){let h=height(b);if(y+h>LIMIT)next();if(y+h>LIMIT)throw Error('Un commentaire est trop long pour tenir sur une page.');y+=paint(c,b,y)+GAP;}
 footer(c);const pdf=makePDF(pages);savePDF(pdf);return {pdf,pages:pages.length};}
window.KinePDF={exportPrescription};
})();
