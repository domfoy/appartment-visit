(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="169",nu=0,za=1,iu=2,Jl=1,su=2,pn=3,Nn=0,Ct=1,mn=2,Pn=0,Ti=1,Ha=2,ka=3,Va=4,ru=5,Kn=100,ou=101,au=102,lu=103,cu=104,hu=200,du=201,uu=202,fu=203,so=204,ro=205,pu=206,mu=207,gu=208,vu=209,_u=210,xu=211,Mu=212,Eu=213,Su=214,oo=0,ao=1,lo=2,Ri=3,co=4,ho=5,uo=6,fo=7,Ql=0,yu=1,wu=2,Ln=0,ec=1,Tu=2,bu=3,Au=4,Cu=5,Ru=6,Pu=7,tc=300,Pi=301,Li=302,po=303,mo=304,hr=306,go=1e3,Jn=1001,vo=1002,Vt=1003,Lu=1004,Ms=1005,kt=1006,Ar=1007,Rn=1008,xn=1009,nc=1010,ic=1011,os=1012,ra=1013,Qn=1014,gn=1015,cs=1016,oa=1017,aa=1018,Ii=1020,sc=35902,rc=1021,oc=1022,Kt=1023,ac=1024,lc=1025,bi=1026,Ui=1027,cc=1028,la=1029,hc=1030,ca=1031,ha=1033,Gs=33776,Ws=33777,Xs=33778,Ys=33779,_o=35840,xo=35841,Mo=35842,Eo=35843,So=36196,yo=37492,wo=37496,To=37808,bo=37809,Ao=37810,Co=37811,Ro=37812,Po=37813,Lo=37814,Io=37815,Uo=37816,Do=37817,No=37818,Oo=37819,Fo=37820,Bo=37821,qs=36492,zo=36494,Ho=36495,dc=36283,ko=36284,Vo=36285,Go=36286,Iu=3200,Uu=3201,Du=0,Nu=1,Cn="",en="srgb",Mn="srgb-linear",da="display-p3",dr="display-p3-linear",Js="linear",it="srgb",Qs="rec709",er="p3",ii=7680,Ga=519,Ou=512,Fu=513,Bu=514,uc=515,zu=516,Hu=517,ku=518,Vu=519,Wa=35044,Xa="300 es",vn=2e3,tr=2001;class Oi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ya=1234567;const $i=Math.PI/180,as=180/Math.PI;function Fi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_t[t&255]+_t[t>>8&255]+_t[t>>16&255]+_t[t>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[n&63|128]+_t[n>>8&255]+"-"+_t[n>>16&255]+_t[n>>24&255]+_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]).toLowerCase()}function St(t,e,n){return Math.max(e,Math.min(n,t))}function ua(t,e){return(t%e+e)%e}function Gu(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function Wu(t,e,n){return t!==e?(n-t)/(e-t):0}function Zi(t,e,n){return(1-n)*t+n*e}function Xu(t,e,n,i){return Zi(t,e,1-Math.exp(-n*i))}function Yu(t,e=1){return e-Math.abs(ua(t,e*2)-e)}function qu(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function $u(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Zu(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Ku(t,e){return t+Math.random()*(e-t)}function ju(t){return t*(.5-Math.random())}function Ju(t){t!==void 0&&(Ya=t);let e=Ya+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qu(t){return t*$i}function ef(t){return t*as}function tf(t){return(t&t-1)===0&&t!==0}function nf(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function sf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function rf(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),d=o((e+i)/2),f=r((e-i)/2),p=o((e-i)/2),m=r((i-e)/2),v=o((i-e)/2);switch(s){case"XYX":t.set(a*d,l*f,l*p,a*c);break;case"YZY":t.set(l*p,a*d,l*f,a*c);break;case"ZXZ":t.set(l*f,l*p,a*d,a*c);break;case"XZX":t.set(a*d,l*v,l*m,a*c);break;case"YXY":t.set(l*m,a*d,l*v,a*c);break;case"ZYZ":t.set(l*v,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Mt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Ne={DEG2RAD:$i,RAD2DEG:as,generateUUID:Fi,clamp:St,euclideanModulo:ua,mapLinear:Gu,inverseLerp:Wu,lerp:Zi,damp:Xu,pingpong:Yu,smoothstep:qu,smootherstep:$u,randInt:Zu,randFloat:Ku,randFloatSpread:ju,seededRandom:Ju,degToRad:Qu,radToDeg:ef,isPowerOfTwo:tf,ceilPowerOfTwo:nf,floorPowerOfTwo:sf,setQuaternionFromProperEuler:rf,normalize:Mt,denormalize:xi};class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Le{constructor(e,n,i,s,r,o,a,l,c){Le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],p=i[2],m=i[5],v=i[8],x=s[0],h=s[3],u=s[6],w=s[1],S=s[4],T=s[7],N=s[2],C=s[5],b=s[8];return r[0]=o*x+a*w+l*N,r[3]=o*h+a*S+l*C,r[6]=o*u+a*T+l*b,r[1]=c*x+d*w+f*N,r[4]=c*h+d*S+f*C,r[7]=c*u+d*T+f*b,r[2]=p*x+m*w+v*N,r[5]=p*h+m*S+v*C,r[8]=p*u+m*T+v*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,p=a*l-d*r,m=c*r-o*l,v=n*f+i*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(s*c-d*i)*x,e[2]=(a*i-s*o)*x,e[3]=p*x,e[4]=(d*n-s*l)*x,e[5]=(s*r-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Cr.makeScale(e,n)),this}rotate(e){return this.premultiply(Cr.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cr.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new Le;function fc(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function of(){const t=nr("canvas");return t.style.display="block",t}const qa={};function $s(t){t in qa||(qa[t]=!0,console.warn(t))}function af(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function lf(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cf(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $a=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Za=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[Mn]:{transfer:Js,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[en]:{transfer:it,primaries:Qs,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[dr]:{transfer:Js,primaries:er,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Za),fromReference:t=>t.applyMatrix3($a)},[da]:{transfer:it,primaries:er,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Za),fromReference:t=>t.applyMatrix3($a).convertLinearToSRGB()}},hf=new Set([Mn,dr]),Ge={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!hf.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Hi[e].toReference,s=Hi[n].fromReference;return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Hi[t].primaries},getTransfer:function(t){return t===Cn?Js:Hi[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Hi[e].luminanceCoefficients)}};function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Rr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let si;class df{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{si===void 0&&(si=nr("canvas")),si.width=e.width,si.height=e.height;const i=si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=si}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nr("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ai(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uf=0;class pc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pr(s[o].image)):r.push(Pr(s[o]))}else r=Pr(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Pr(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?df.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ff=0;class wt extends Oi{constructor(e=wt.DEFAULT_IMAGE,n=wt.DEFAULT_MAPPING,i=Jn,s=Jn,r=kt,o=Rn,a=Kt,l=xn,c=wt.DEFAULT_ANISOTROPY,d=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Fi(),this.name="",this.source=new pc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=tc;wt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,n=0,i=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],m=l[5],v=l[9],x=l[2],h=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-x)<.01&&Math.abs(v-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+x)<.1&&Math.abs(v+h)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,T=(m+1)/2,N=(u+1)/2,C=(d+p)/4,b=(f+x)/4,F=(v+h)/4;return S>T&&S>N?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=C/i,r=b/i):T>N?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=C/s,r=F/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=b/r,s=F/r),this.set(i,s,r,n),this}let w=Math.sqrt((h-v)*(h-v)+(f-x)*(f-x)+(p-d)*(p-d));return Math.abs(w)<.001&&(w=1),this.x=(h-v)/w,this.y=(f-x)/w,this.z=(p-d)/w,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pf extends Oi{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ot(0,0,e,n),this.scissorTest=!1,this.viewport=new ot(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new wt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new pc(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends pf{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mc extends wt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mf extends wt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],f=i[s+3];const p=r[o+0],m=r[o+1],v=r[o+2],x=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==p||c!==m||d!==v){let h=1-a;const u=l*p+c*m+d*v+f*x,w=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const N=Math.sqrt(S),C=Math.atan2(N,u*w);h=Math.sin(h*C)/N,a=Math.sin(a*C)/N}const T=a*w;if(l=l*h+p*T,c=c*h+m*T,d=d*h+v*T,f=f*h+x*T,h===1-a){const N=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=N,c*=N,d*=N,f*=N}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],f=r[o],p=r[o+1],m=r[o+2],v=r[o+3];return e[n]=a*v+d*f+l*m-c*p,e[n+1]=l*v+d*p+c*f-a*m,e[n+2]=c*v+d*m+a*p-l*f,e[n+3]=d*v-a*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),f=a(r/2),p=l(i/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=p*d*f+c*m*v,this._y=c*m*f-p*d*v,this._z=c*d*v+p*m*f,this._w=c*d*f-p*m*v;break;case"YXZ":this._x=p*d*f+c*m*v,this._y=c*m*f-p*d*v,this._z=c*d*v-p*m*f,this._w=c*d*f+p*m*v;break;case"ZXY":this._x=p*d*f-c*m*v,this._y=c*m*f+p*d*v,this._z=c*d*v+p*m*f,this._w=c*d*f-p*m*v;break;case"ZYX":this._x=p*d*f-c*m*v,this._y=c*m*f+p*d*v,this._z=c*d*v-p*m*f,this._w=c*d*f+p*m*v;break;case"YZX":this._x=p*d*f+c*m*v,this._y=c*m*f+p*d*v,this._z=c*d*v-p*m*f,this._w=c*d*f-p*m*v;break;case"XZY":this._x=p*d*f-c*m*v,this._y=c*m*f-p*d*v,this._z=c*d*v+p*m*f,this._w=c*d*f+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],p=i+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*s+n*this._y,this._z=m*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ka.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ka.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-r*f,this.z=s+l*f+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lr.copy(this).projectOnVector(e),this.sub(Lr)}reflect(e){return this.sub(Lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lr=new I,Ka=new ti;class Bi{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xt.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xt.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xt.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(r,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Es.copy(i.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),Ss.subVectors(this.max,ki),ri.subVectors(e.a,ki),oi.subVectors(e.b,ki),ai.subVectors(e.c,ki),Sn.subVectors(oi,ri),yn.subVectors(ai,oi),Vn.subVectors(ri,ai);let n=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-Vn.z,Vn.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,Vn.z,0,-Vn.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-Vn.y,Vn.x,0];return!Ir(n,ri,oi,ai,Ss)||(n=[1,0,0,0,1,0,0,0,1],!Ir(n,ri,oi,ai,Ss))?!1:(ys.crossVectors(Sn,yn),n=[ys.x,ys.y,ys.z],Ir(n,ri,oi,ai,Ss))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new I,new I,new I,new I,new I,new I,new I,new I],Xt=new I,Es=new Bi,ri=new I,oi=new I,ai=new I,Sn=new I,yn=new I,Vn=new I,ki=new I,Ss=new I,ys=new I,Gn=new I;function Ir(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Gn.fromArray(t,r);const a=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=e.dot(Gn),c=n.dot(Gn),d=i.dot(Gn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const gf=new Bi,Vi=new I,Ur=new I;class fa{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const n=Vi.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Vi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(Ur)),this.expandByPoint(Vi.copy(e.center).sub(Ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new I,Dr=new I,ws=new I,wn=new I,Nr=new I,Ts=new I,Or=new I;class gc{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,n),hn.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Dr.copy(e).add(n).multiplyScalar(.5),ws.copy(n).sub(e).normalize(),wn.copy(this.origin).sub(Dr);const r=e.distanceTo(n)*.5,o=-this.direction.dot(ws),a=wn.dot(this.direction),l=-wn.dot(ws),c=wn.lengthSq(),d=Math.abs(1-o*o);let f,p,m,v;if(d>0)if(f=o*l-a,p=o*a-l,v=r*d,f>=0)if(p>=-v)if(p<=v){const x=1/d;f*=x,p*=x,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p<=-v?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=v?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Dr).addScaledVector(ws,p),m}intersectSphere(e,n){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),s=hn.dot(hn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),d>=0?(r=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,n,i,s,r){Nr.subVectors(n,e),Ts.subVectors(i,e),Or.crossVectors(Nr,Ts);let o=this.direction.dot(Or),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,e);const l=a*this.direction.dot(Ts.crossVectors(wn,Ts));if(l<0)return null;const c=a*this.direction.dot(Nr.cross(wn));if(c<0||l+c>o)return null;const d=-a*wn.dot(Or);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,n,i,s,r,o,a,l,c,d,f,p,m,v,x,h){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,d,f,p,m,v,x,h)}set(e,n,i,s,r,o,a,l,c,d,f,p,m,v,x,h){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=p,u[3]=m,u[7]=v,u[11]=x,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/li.setFromMatrixColumn(e,0).length(),r=1/li.setFromMatrixColumn(e,1).length(),o=1/li.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const p=o*d,m=o*f,v=a*d,x=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+v*c,n[5]=p-x*c,n[9]=-a*l,n[2]=x-p*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const p=l*d,m=l*f,v=c*d,x=c*f;n[0]=p+x*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=m*a-v,n[6]=x+p*a,n[10]=o*l}else if(e.order==="ZXY"){const p=l*d,m=l*f,v=c*d,x=c*f;n[0]=p-x*a,n[4]=-o*f,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*d,n[9]=x-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const p=o*d,m=o*f,v=a*d,x=a*f;n[0]=l*d,n[4]=v*c-m,n[8]=p*c+x,n[1]=l*f,n[5]=x*c+p,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,v=a*l,x=a*c;n[0]=l*d,n[4]=x-p*f,n[8]=v*f+m,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*f+v,n[10]=p-x*f}else if(e.order==="XZY"){const p=o*l,m=o*c,v=a*l,x=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=p*f+x,n[5]=o*d,n[9]=m*f-v,n[2]=v*f-m,n[6]=a*d,n[10]=x*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vf,e,_f)}lookAt(e,n,i){const s=this.elements;return Ut.subVectors(e,n),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Tn.crossVectors(i,Ut),Tn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Tn.crossVectors(i,Ut)),Tn.normalize(),bs.crossVectors(Ut,Tn),s[0]=Tn.x,s[4]=bs.x,s[8]=Ut.x,s[1]=Tn.y,s[5]=bs.y,s[9]=Ut.y,s[2]=Tn.z,s[6]=bs.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],p=i[9],m=i[13],v=i[2],x=i[6],h=i[10],u=i[14],w=i[3],S=i[7],T=i[11],N=i[15],C=s[0],b=s[4],F=s[8],ee=s[12],g=s[1],E=s[5],V=s[9],z=s[13],Y=s[2],Z=s[6],k=s[10],$=s[14],H=s[3],ae=s[7],le=s[11],ge=s[15];return r[0]=o*C+a*g+l*Y+c*H,r[4]=o*b+a*E+l*Z+c*ae,r[8]=o*F+a*V+l*k+c*le,r[12]=o*ee+a*z+l*$+c*ge,r[1]=d*C+f*g+p*Y+m*H,r[5]=d*b+f*E+p*Z+m*ae,r[9]=d*F+f*V+p*k+m*le,r[13]=d*ee+f*z+p*$+m*ge,r[2]=v*C+x*g+h*Y+u*H,r[6]=v*b+x*E+h*Z+u*ae,r[10]=v*F+x*V+h*k+u*le,r[14]=v*ee+x*z+h*$+u*ge,r[3]=w*C+S*g+T*Y+N*H,r[7]=w*b+S*E+T*Z+N*ae,r[11]=w*F+S*V+T*k+N*le,r[15]=w*ee+S*z+T*$+N*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],m=e[14],v=e[3],x=e[7],h=e[11],u=e[15];return v*(+r*l*f-s*c*f-r*a*p+i*c*p+s*a*m-i*l*m)+x*(+n*l*m-n*c*p+r*o*p-s*o*m+s*c*d-r*l*d)+h*(+n*c*f-n*a*m-r*o*f+i*o*m+r*a*d-i*c*d)+u*(-s*a*d-n*l*f+n*a*p+s*o*f-i*o*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],m=e[11],v=e[12],x=e[13],h=e[14],u=e[15],w=f*h*c-x*p*c+x*l*m-a*h*m-f*l*u+a*p*u,S=v*p*c-d*h*c-v*l*m+o*h*m+d*l*u-o*p*u,T=d*x*c-v*f*c+v*a*m-o*x*m-d*a*u+o*f*u,N=v*f*l-d*x*l-v*a*p+o*x*p+d*a*h-o*f*h,C=n*w+i*S+s*T+r*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=w*b,e[1]=(x*p*r-f*h*r-x*s*m+i*h*m+f*s*u-i*p*u)*b,e[2]=(a*h*r-x*l*r+x*s*c-i*h*c-a*s*u+i*l*u)*b,e[3]=(f*l*r-a*p*r-f*s*c+i*p*c+a*s*m-i*l*m)*b,e[4]=S*b,e[5]=(d*h*r-v*p*r+v*s*m-n*h*m-d*s*u+n*p*u)*b,e[6]=(v*l*r-o*h*r-v*s*c+n*h*c+o*s*u-n*l*u)*b,e[7]=(o*p*r-d*l*r+d*s*c-n*p*c-o*s*m+n*l*m)*b,e[8]=T*b,e[9]=(v*f*r-d*x*r-v*i*m+n*x*m+d*i*u-n*f*u)*b,e[10]=(o*x*r-v*a*r+v*i*c-n*x*c-o*i*u+n*a*u)*b,e[11]=(d*a*r-o*f*r-d*i*c+n*f*c+o*i*m-n*a*m)*b,e[12]=N*b,e[13]=(d*x*s-v*f*s+v*i*p-n*x*p-d*i*h+n*f*h)*b,e[14]=(v*a*s-o*x*s-v*i*l+n*x*l+o*i*h-n*a*h)*b,e[15]=(o*f*s-d*a*s+d*i*l-n*f*l-o*i*p+n*a*p)*b,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,d=o+o,f=a+a,p=r*c,m=r*d,v=r*f,x=o*d,h=o*f,u=a*f,w=l*c,S=l*d,T=l*f,N=i.x,C=i.y,b=i.z;return s[0]=(1-(x+u))*N,s[1]=(m+T)*N,s[2]=(v-S)*N,s[3]=0,s[4]=(m-T)*C,s[5]=(1-(p+u))*C,s[6]=(h+w)*C,s[7]=0,s[8]=(v+S)*b,s[9]=(h-w)*b,s[10]=(1-(p+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=li.set(s[0],s[1],s[2]).length();const o=li.set(s[4],s[5],s[6]).length(),a=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yt.copy(this);const c=1/r,d=1/o,f=1/a;return Yt.elements[0]*=c,Yt.elements[1]*=c,Yt.elements[2]*=c,Yt.elements[4]*=d,Yt.elements[5]*=d,Yt.elements[6]*=d,Yt.elements[8]*=f,Yt.elements[9]*=f,Yt.elements[10]*=f,n.setFromRotationMatrix(Yt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=vn){const l=this.elements,c=2*r/(n-e),d=2*r/(i-s),f=(n+e)/(n-e),p=(i+s)/(i-s);let m,v;if(a===vn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===tr)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=vn){const l=this.elements,c=1/(n-e),d=1/(i-s),f=1/(o-r),p=(n+e)*c,m=(i+s)*d;let v,x;if(a===vn)v=(o+r)*f,x=-2*f;else if(a===tr)v=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const li=new I,Yt=new et,vf=new I(0,0,0),_f=new I(1,1,1),Tn=new I,bs=new I,Ut=new I,ja=new et,Ja=new ti;class an{constructor(e=0,n=0,i=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(n){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ja.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ja,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class pa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xf=0;const Qa=new I,ci=new ti,dn=new et,As=new I,Gi=new I,Mf=new I,Ef=new ti,el=new I(1,0,0),tl=new I(0,1,0),nl=new I(0,0,1),il={type:"added"},Sf={type:"removed"},hi={type:"childadded",child:null},Fr={type:"childremoved",child:null};class Tt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new I,n=new an,i=new ti,s=new I(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Le}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ci.setFromAxisAngle(e,n),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,n){return ci.setFromAxisAngle(e,n),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(el,e)}rotateY(e){return this.rotateOnAxis(tl,e)}rotateZ(e){return this.rotateOnAxis(nl,e)}translateOnAxis(e,n){return Qa.copy(e).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(el,e)}translateY(e){return this.translateOnAxis(tl,e)}translateZ(e){return this.translateOnAxis(nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?As.copy(e):As.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Gi,As,this.up):dn.lookAt(As,Gi,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(dn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(il),hi.child=e,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Sf),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(il),hi.child=e,this.dispatchEvent(hi),hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,Mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new I(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qt=new I,un=new I,Br=new I,fn=new I,di=new I,ui=new I,sl=new I,zr=new I,Hr=new I,kr=new I,Vr=new ot,Gr=new ot,Wr=new ot;class Zt{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),qt.subVectors(e,n),s.cross(qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){qt.subVectors(s,n),un.subVectors(i,n),Br.subVectors(e,n);const o=qt.dot(qt),a=qt.dot(un),l=qt.dot(Br),c=un.dot(un),d=un.dot(Br),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const p=1/f,m=(c*l-a*d)*p,v=(o*d-a*l)*p;return r.set(1-m-v,v,m)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Vr.setScalar(0),Gr.setScalar(0),Wr.setScalar(0),Vr.fromBufferAttribute(e,n),Gr.fromBufferAttribute(e,i),Wr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Vr,r.x),o.addScaledVector(Gr,r.y),o.addScaledVector(Wr,r.z),o}static isFrontFacing(e,n,i,s){return qt.subVectors(i,n),un.subVectors(e,n),qt.cross(un).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),qt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zt.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Zt.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;di.subVectors(s,i),ui.subVectors(r,i),zr.subVectors(e,i);const l=di.dot(zr),c=ui.dot(zr);if(l<=0&&c<=0)return n.copy(i);Hr.subVectors(e,s);const d=di.dot(Hr),f=ui.dot(Hr);if(d>=0&&f<=d)return n.copy(s);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(di,o);kr.subVectors(e,r);const m=di.dot(kr),v=ui.dot(kr);if(v>=0&&m<=v)return n.copy(r);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ui,a);const h=d*v-m*f;if(h<=0&&f-d>=0&&m-v>=0)return sl.subVectors(r,s),a=(f-d)/(f-d+(m-v)),n.copy(s).addScaledVector(sl,a);const u=1/(h+x+p);return o=x*u,a=p*u,n.copy(i).addScaledVector(di,o).addScaledVector(ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Xr(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Ge.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ge.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Ge.workingColorSpace){if(e=ua(e,1),n=St(n,0,1),i=St(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Xr(o,r,e+1/3),this.g=Xr(o,r,e),this.b=Xr(o,r,e-1/3)}return Ge.toWorkingColorSpace(this,s),this}setStyle(e,n=en){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=en){const i=vc[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Ge.fromWorkingColorSpace(xt.copy(this),e),Math.round(St(xt.r*255,0,255))*65536+Math.round(St(xt.g*255,0,255))*256+Math.round(St(xt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ge.workingColorSpace){Ge.fromWorkingColorSpace(xt.copy(this),n);const i=xt.r,s=xt.g,r=xt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(xt.copy(this),n),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=en){Ge.fromWorkingColorSpace(xt.copy(this),e);const n=xt.r,i=xt.g,s=xt.b;return e!==en?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+n,bn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bn),e.getHSL(Cs);const i=Zi(bn.h,Cs.h,n),s=Zi(bn.s,Cs.s,n),r=Zi(bn.l,Cs.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Je;Je.NAMES=vc;let yf=0;class ur extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Ti,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ga,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(i.blending=this.blending),this.side!==Nn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==so&&(i.blendSrc=this.blendSrc),this.blendDst!==ro&&(i.blendDst=this.blendDst),this.blendEquation!==Kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ga&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hs extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new I,Rs=new Ke;class rn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wa,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Rs.fromBufferAttribute(this,n),Rs.applyMatrix3(e),this.setXY(n,Rs.x,Rs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)lt.fromBufferAttribute(this,n),lt.applyMatrix3(e),this.setXYZ(n,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)lt.fromBufferAttribute(this,n),lt.applyMatrix4(e),this.setXYZ(n,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)lt.fromBufferAttribute(this,n),lt.applyNormalMatrix(e),this.setXYZ(n,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)lt.fromBufferAttribute(this,n),lt.transformDirection(e),this.setXYZ(n,lt.x,lt.y,lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Mt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xi(n,this.array)),n}setX(e,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xi(n,this.array)),n}setY(e,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xi(n,this.array)),n}setW(e,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Mt(n,this.array),i=Mt(i,this.array),s=Mt(s,this.array),r=Mt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wa&&(e.usage=this.usage),e}}class _c extends rn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class xc extends rn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class on extends rn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wf=0;const zt=new et,Yr=new Tt,fi=new I,Dt=new Bi,Wi=new Bi,ut=new I;class zn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fc(e)?xc:_c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Le().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,n,i){return zt.makeTranslation(e,n,i),this.applyMatrix4(zt),this}scale(e,n,i){return zt.makeScale(e,n,i),this.applyMatrix4(zt),this}lookAt(e){return Yr.lookAt(e),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new on(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Wi.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(Dt.min,Wi.min),Dt.expandByPoint(ut),ut.addVectors(Dt.max,Wi.max),Dt.expandByPoint(ut)):(Dt.expandByPoint(Wi.min),Dt.expandByPoint(Wi.max))}Dt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ut));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)ut.fromBufferAttribute(a,c),l&&(fi.fromBufferAttribute(e,c),ut.add(fi)),s=Math.max(s,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new I,l[F]=new I;const c=new I,d=new I,f=new I,p=new Ke,m=new Ke,v=new Ke,x=new I,h=new I;function u(F,ee,g){c.fromBufferAttribute(i,F),d.fromBufferAttribute(i,ee),f.fromBufferAttribute(i,g),p.fromBufferAttribute(r,F),m.fromBufferAttribute(r,ee),v.fromBufferAttribute(r,g),d.sub(c),f.sub(c),m.sub(p),v.sub(p);const E=1/(m.x*v.y-v.x*m.y);isFinite(E)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(E),h.copy(f).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(E),a[F].add(x),a[ee].add(x),a[g].add(x),l[F].add(h),l[ee].add(h),l[g].add(h))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,ee=w.length;F<ee;++F){const g=w[F],E=g.start,V=g.count;for(let z=E,Y=E+V;z<Y;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const S=new I,T=new I,N=new I,C=new I;function b(F){N.fromBufferAttribute(s,F),C.copy(N);const ee=a[F];S.copy(ee),S.sub(N.multiplyScalar(N.dot(ee))).normalize(),T.crossVectors(C,ee);const E=T.dot(l[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,E)}for(let F=0,ee=w.length;F<ee;++F){const g=w[F],E=g.start,V=g.count;for(let z=E,Y=E+V;z<Y;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,d=new I,f=new I;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),x=e.getX(p+1),h=e.getX(p+2);s.fromBufferAttribute(n,v),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,h),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,h),a.add(d),l.add(d),c.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,m=n.count;p<m;p+=3)s.fromBufferAttribute(n,p+0),r.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)ut.fromBufferAttribute(e,n),ut.normalize(),e.setXYZ(n,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,p=new c.constructor(l.length*d);let m=0,v=0;for(let x=0,h=l.length;x<h;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*d;for(let u=0;u<d;u++)p[v++]=c[m++]}return new rn(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,f=c.length;d<f;d++){const p=c[d],m=e(p,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(n))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rl=new et,Wn=new gc,Ps=new fa,ol=new I,Ls=new I,Is=new I,Us=new I,qr=new I,Ds=new I,al=new I,Ns=new I;class Gt extends Tt{constructor(e=new zn,n=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],f=r[l];d!==0&&(qr.fromBufferAttribute(f,e),o?Ds.addScaledVector(qr,d):Ds.addScaledVector(qr.sub(n),d))}n.add(Ds)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(Ps.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ps,ol)===null||Wn.origin.distanceToSquared(ol)>(e.far-e.near)**2))&&(rl.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(rl),!(i.boundingBox!==null&&Wn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wn)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const h=p[v],u=o[h.materialIndex],w=Math.max(h.start,m.start),S=Math.min(a.count,Math.min(h.start+h.count,m.start+m.count));for(let T=w,N=S;T<N;T+=3){const C=a.getX(T),b=a.getX(T+1),F=a.getX(T+2);s=Os(this,u,e,i,c,d,f,C,b,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=h.materialIndex,n.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let h=v,u=x;h<u;h+=3){const w=a.getX(h),S=a.getX(h+1),T=a.getX(h+2);s=Os(this,o,e,i,c,d,f,w,S,T),s&&(s.faceIndex=Math.floor(h/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const h=p[v],u=o[h.materialIndex],w=Math.max(h.start,m.start),S=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let T=w,N=S;T<N;T+=3){const C=T,b=T+1,F=T+2;s=Os(this,u,e,i,c,d,f,C,b,F),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=h.materialIndex,n.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let h=v,u=x;h<u;h+=3){const w=h,S=h+1,T=h+2;s=Os(this,o,e,i,c,d,f,w,S,T),s&&(s.faceIndex=Math.floor(h/3),n.push(s))}}}}function Tf(t,e,n,i,s,r,o,a){let l;if(e.side===Ct?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Nn,a),l===null)return null;Ns.copy(a),Ns.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ns);return c<n.near||c>n.far?null:{distance:c,point:Ns.clone(),object:t}}function Os(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Ls),t.getVertexPosition(l,Is),t.getVertexPosition(c,Us);const d=Tf(t,e,n,i,Ls,Is,Us,al);if(d){const f=new I;Zt.getBarycoord(al,Ls,Is,Us,f),s&&(d.uv=Zt.getInterpolatedAttribute(s,a,l,c,f,new Ke)),r&&(d.uv1=Zt.getInterpolatedAttribute(r,a,l,c,f,new Ke)),o&&(d.normal=Zt.getInterpolatedAttribute(o,a,l,c,f,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new I,materialIndex:0};Zt.getNormal(Ls,Is,Us,p.normal),d.face=p,d.barycoord=f}return d}class ds extends zn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],f=[];let p=0,m=0;v("z","y","x",-1,-1,i,n,e,o,r,0),v("z","y","x",1,-1,i,n,-e,o,r,1),v("x","z","y",1,1,e,i,n,s,o,2),v("x","z","y",1,-1,e,i,-n,s,o,3),v("x","y","z",1,-1,e,n,i,s,r,4),v("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(d,3)),this.setAttribute("uv",new on(f,2));function v(x,h,u,w,S,T,N,C,b,F,ee){const g=T/b,E=N/F,V=T/2,z=N/2,Y=C/2,Z=b+1,k=F+1;let $=0,H=0;const ae=new I;for(let le=0;le<k;le++){const ge=le*E-z;for(let ke=0;ke<Z;ke++){const qe=ke*g-V;ae[x]=qe*w,ae[h]=ge*S,ae[u]=Y,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[h]=0,ae[u]=C>0?1:-1,d.push(ae.x,ae.y,ae.z),f.push(ke/b),f.push(1-le/F),$+=1}}for(let le=0;le<F;le++)for(let ge=0;ge<b;ge++){const ke=p+ge+Z*le,qe=p+ge+Z*(le+1),G=p+(ge+1)+Z*(le+1),j=p+(ge+1)+Z*le;l.push(ke,qe,j),l.push(qe,G,j),H+=6}a.addGroup(m,H,ee),m+=H,p+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Et(t){const e={};for(let n=0;n<t.length;n++){const i=Di(t[n]);for(const s in i)e[s]=i[s]}return e}function bf(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mc(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Af={clone:Di,merge:Et};var Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ec extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=vn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new I,ll=new Ke,cl=new Ke;class Ot extends Ec{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,n){return this.getViewBounds(e,ll,cl),n.subVectors(cl,ll)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($i*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const pi=-90,mi=1;class Pf extends Tt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ot(pi,mi,e,n);s.layers=this.layers,this.add(s);const r=new Ot(pi,mi,e,n);r.layers=this.layers,this.add(r);const o=new Ot(pi,mi,e,n);o.layers=this.layers,this.add(o);const a=new Ot(pi,mi,e,n);a.layers=this.layers,this.add(a);const l=new Ot(pi,mi,e,n);l.layers=this.layers,this.add(l);const c=new Ot(pi,mi,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(n,d),e.setRenderTarget(f,p,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Sc extends wt{constructor(e,n,i,s,r,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Pi,super(e,n,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lf extends On{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Sc(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ds(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Di(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ct,blending:Pn});r.uniforms.tEquirect.value=n;const o=new Gt(s,r),a=n.minFilter;return n.minFilter===Rn&&(n.minFilter=kt),new Pf(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}const $r=new I,If=new I,Uf=new Le;class $n{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=$r.subVectors(i,n).cross(If.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta($r),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Uf.getNormalMatrix(e),s=this.coplanarPoint($r).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new fa,Fs=new I;class ma{constructor(e=new $n,n=new $n,i=new $n,s=new $n,r=new $n,o=new $n){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],f=s[6],p=s[7],m=s[8],v=s[9],x=s[10],h=s[11],u=s[12],w=s[13],S=s[14],T=s[15];if(i[0].setComponents(l-r,p-c,h-m,T-u).normalize(),i[1].setComponents(l+r,p+c,h+m,T+u).normalize(),i[2].setComponents(l+o,p+d,h+v,T+w).normalize(),i[3].setComponents(l-o,p-d,h-v,T-w).normalize(),i[4].setComponents(l-a,p-f,h-x,T-S).normalize(),n===vn)i[5].setComponents(l+a,p+f,h+x,T+S).normalize();else if(n===tr)i[5].setComponents(a,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xn.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Fs.x=s.normal.x>0?e.max.x:e.min.x,Fs.y=s.normal.y>0?e.max.y:e.min.y,Fs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yc(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Df(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<f.length;m++){const v=f[p],x=f[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++p,f[p]=x)}f.length=p+1;for(let m=0,v=f.length;m<v;m++){const x=f[m];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class fr extends zn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,f=e/a,p=n/l,m=[],v=[],x=[],h=[];for(let u=0;u<d;u++){const w=u*p-o;for(let S=0;S<c;S++){const T=S*f-r;v.push(T,-w,0),x.push(0,0,1),h.push(S/a),h.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<a;w++){const S=w+c*u,T=w+c*(u+1),N=w+1+c*(u+1),C=w+1+c*u;m.push(S,T,C),m.push(T,N,C)}this.setIndex(m),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(x,3)),this.setAttribute("uv",new on(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Of=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$f=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,op=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ap=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Up=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Em=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,km=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ug=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:Nf,alphahash_pars_fragment:Of,alphamap_fragment:Ff,alphamap_pars_fragment:Bf,alphatest_fragment:zf,alphatest_pars_fragment:Hf,aomap_fragment:kf,aomap_pars_fragment:Vf,batching_pars_vertex:Gf,batching_vertex:Wf,begin_vertex:Xf,beginnormal_vertex:Yf,bsdfs:qf,iridescence_fragment:$f,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Jf,clipping_planes_vertex:Qf,color_fragment:ep,color_pars_fragment:tp,color_pars_vertex:np,color_vertex:ip,common:sp,cube_uv_reflection_fragment:rp,defaultnormal_vertex:op,displacementmap_pars_vertex:ap,displacementmap_vertex:lp,emissivemap_fragment:cp,emissivemap_pars_fragment:hp,colorspace_fragment:dp,colorspace_pars_fragment:up,envmap_fragment:fp,envmap_common_pars_fragment:pp,envmap_pars_fragment:mp,envmap_pars_vertex:gp,envmap_physical_pars_fragment:Ap,envmap_vertex:vp,fog_vertex:_p,fog_pars_vertex:xp,fog_fragment:Mp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Sp,lightmap_pars_fragment:yp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Tp,lights_pars_begin:bp,lights_toon_fragment:Cp,lights_toon_pars_fragment:Rp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Up,lights_fragment_begin:Dp,lights_fragment_maps:Np,lights_fragment_end:Op,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:Hp,map_fragment:kp,map_pars_fragment:Vp,map_particle_fragment:Gp,map_particle_pars_fragment:Wp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:Yp,morphinstance_vertex:qp,morphcolor_vertex:$p,morphnormal_vertex:Zp,morphtarget_pars_vertex:Kp,morphtarget_vertex:jp,normal_fragment_begin:Jp,normal_fragment_maps:Qp,normal_pars_fragment:em,normal_pars_vertex:tm,normal_vertex:nm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:om,iridescence_pars_fragment:am,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:hm,project_vertex:dm,dithering_fragment:um,dithering_pars_fragment:fm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:vm,shadowmap_vertex:_m,shadowmask_pars_fragment:xm,skinbase_vertex:Mm,skinning_pars_vertex:Em,skinning_vertex:Sm,skinnormal_vertex:ym,specularmap_fragment:wm,specularmap_pars_fragment:Tm,tonemapping_fragment:bm,tonemapping_pars_fragment:Am,transmission_fragment:Cm,transmission_pars_fragment:Rm,uv_pars_fragment:Pm,uv_pars_vertex:Lm,uv_vertex:Im,worldpos_vertex:Um,background_vert:Dm,background_frag:Nm,backgroundCube_vert:Om,backgroundCube_frag:Fm,cube_vert:Bm,cube_frag:zm,depth_vert:Hm,depth_frag:km,distanceRGBA_vert:Vm,distanceRGBA_frag:Gm,equirect_vert:Wm,equirect_frag:Xm,linedashed_vert:Ym,linedashed_frag:qm,meshbasic_vert:$m,meshbasic_frag:Zm,meshlambert_vert:Km,meshlambert_frag:jm,meshmatcap_vert:Jm,meshmatcap_frag:Qm,meshnormal_vert:eg,meshnormal_frag:tg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:og,meshtoon_frag:ag,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:dg,sprite_vert:ug,sprite_frag:fg},te={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},nn={basic:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Je(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Et([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Et([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Et([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Je(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Et([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Et([te.points,te.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Et([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Et([te.common,te.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Et([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Et([te.sprite,te.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Et([te.common,te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Et([te.lights,te.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};nn.physical={uniforms:Et([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Bs={r:0,b:0,g:0},Yn=new an,pg=new et;function mg(t,e,n,i,s,r,o){const a=new Je(0);let l=r===!0?0:1,c,d,f=null,p=0,m=null;function v(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?n:e).get(S)),S}function x(w){let S=!1;const T=v(w);T===null?u(a,l):T&&T.isColor&&(u(T,1),S=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function h(w,S){const T=v(S);T&&(T.isCubeTexture||T.mapping===hr)?(d===void 0&&(d=new Gt(new ds(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Di(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Yn.copy(S.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(Yn)),d.material.toneMapped=Ge.getTransfer(T.colorSpace)!==it,(f!==T||p!==T.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=T,p=T.version,m=t.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Gt(new fr(2,2),new Fn({name:"BackgroundMaterial",uniforms:Di(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(T.colorSpace)!==it,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||p!==T.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=T,p=T.version,m=t.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,S){w.getRGB(Bs,Mc(t)),i.buffers.color.setClear(Bs.r,Bs.g,Bs.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),l=S,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(a,l)},render:x,addToRenderList:h}}function gg(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=p(null);let r=s,o=!1;function a(g,E,V,z,Y){let Z=!1;const k=f(z,V,E);r!==k&&(r=k,c(r.object)),Z=m(g,z,V,Y),Z&&v(g,z,V,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,T(g,E,V,z),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(g){return t.bindVertexArray(g)}function d(g){return t.deleteVertexArray(g)}function f(g,E,V){const z=V.wireframe===!0;let Y=i[g.id];Y===void 0&&(Y={},i[g.id]=Y);let Z=Y[E.id];Z===void 0&&(Z={},Y[E.id]=Z);let k=Z[z];return k===void 0&&(k=p(l()),Z[z]=k),k}function p(g){const E=[],V=[],z=[];for(let Y=0;Y<n;Y++)E[Y]=0,V[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:z,object:g,attributes:{},index:null}}function m(g,E,V,z){const Y=r.attributes,Z=E.attributes;let k=0;const $=V.getAttributes();for(const H in $)if($[H].location>=0){const le=Y[H];let ge=Z[H];if(ge===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(ge=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(ge=g.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;k++}return r.attributesNum!==k||r.index!==z}function v(g,E,V,z){const Y={},Z=E.attributes;let k=0;const $=V.getAttributes();for(const H in $)if($[H].location>=0){let le=Z[H];le===void 0&&(H==="instanceMatrix"&&g.instanceMatrix&&(le=g.instanceMatrix),H==="instanceColor"&&g.instanceColor&&(le=g.instanceColor));const ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),Y[H]=ge,k++}r.attributes=Y,r.attributesNum=k,r.index=z}function x(){const g=r.newAttributes;for(let E=0,V=g.length;E<V;E++)g[E]=0}function h(g){u(g,0)}function u(g,E){const V=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;V[g]=1,z[g]===0&&(t.enableVertexAttribArray(g),z[g]=1),Y[g]!==E&&(t.vertexAttribDivisor(g,E),Y[g]=E)}function w(){const g=r.newAttributes,E=r.enabledAttributes;for(let V=0,z=E.length;V<z;V++)E[V]!==g[V]&&(t.disableVertexAttribArray(V),E[V]=0)}function S(g,E,V,z,Y,Z,k){k===!0?t.vertexAttribIPointer(g,E,V,Y,Z):t.vertexAttribPointer(g,E,V,z,Y,Z)}function T(g,E,V,z){x();const Y=z.attributes,Z=V.getAttributes(),k=E.defaultAttributeValues;for(const $ in Z){const H=Z[$];if(H.location>=0){let ae=Y[$];if(ae===void 0&&($==="instanceMatrix"&&g.instanceMatrix&&(ae=g.instanceMatrix),$==="instanceColor"&&g.instanceColor&&(ae=g.instanceColor)),ae!==void 0){const le=ae.normalized,ge=ae.itemSize,ke=e.get(ae);if(ke===void 0)continue;const qe=ke.buffer,G=ke.type,j=ke.bytesPerElement,pe=G===t.INT||G===t.UNSIGNED_INT||ae.gpuType===ra;if(ae.isInterleavedBufferAttribute){const ce=ae.data,Ce=ce.stride,Se=ae.offset;if(ce.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)u(H.location+Oe,ce.meshPerAttribute);g.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)h(H.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Oe=0;Oe<H.locationSize;Oe++)S(H.location+Oe,ge/H.locationSize,G,le,Ce*j,(Se+ge/H.locationSize*Oe)*j,pe)}else{if(ae.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)u(H.location+ce,ae.meshPerAttribute);g.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ce=0;ce<H.locationSize;ce++)h(H.location+ce);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let ce=0;ce<H.locationSize;ce++)S(H.location+ce,ge/H.locationSize,G,le,ge*j,ge/H.locationSize*ce*j,pe)}}else if(k!==void 0){const le=k[$];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(H.location,le);break;case 3:t.vertexAttrib3fv(H.location,le);break;case 4:t.vertexAttrib4fv(H.location,le);break;default:t.vertexAttrib1fv(H.location,le)}}}}w()}function N(){F();for(const g in i){const E=i[g];for(const V in E){const z=E[V];for(const Y in z)d(z[Y].object),delete z[Y];delete E[V]}delete i[g]}}function C(g){if(i[g.id]===void 0)return;const E=i[g.id];for(const V in E){const z=E[V];for(const Y in z)d(z[Y].object),delete z[Y];delete E[V]}delete i[g.id]}function b(g){for(const E in i){const V=i[E];if(V[g.id]===void 0)continue;const z=V[g.id];for(const Y in z)d(z[Y].object),delete z[Y];delete V[g.id]}}function F(){ee(),o=!0,r!==s&&(r=s,c(r.object))}function ee(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:ee,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:h,disableUnusedAttributes:w}}function vg(t,e,n){let i;function s(c){i=c}function r(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let m=0;for(let v=0;v<f;v++)m+=d[v];n.update(m,i,1)}function l(c,d,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],d[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,f);let v=0;for(let x=0;x<f;x++)v+=d[x];for(let x=0;x<p.length;x++)n.update(v,i,p[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _g(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Kt&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const F=b===cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==xn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==gn&&!F)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const b=e.get("EXT_clip_control");b.clipControlEXT(b.LOWER_LEFT_EXT,b.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),h=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:h,maxAttributes:u,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:N,maxSamples:C}}function xg(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new $n,a=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,m){const v=f.clippingPlanes,x=f.clipIntersection,h=f.clipShadows,u=t.get(f);if(!s||v===null||v.length===0||r&&!h)r?d(null):c();else{const w=r?0:i,S=w*4;let T=u.clippingState||null;l.value=T,T=d(v,p,S,m);for(let N=0;N!==S;++N)T[N]=n[N];u.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,m,v){const x=f!==null?f.length:0;let h=null;if(x!==0){if(h=l.value,v!==!0||h===null){const u=m+x*4,w=p.matrixWorldInverse;a.getNormalMatrix(w),(h===null||h.length<u)&&(h=new Float32Array(u));for(let S=0,T=m;S!==x;++S,T+=4)o.copy(f[S]).applyMatrix4(w,a),o.normal.toArray(h,T),h[T+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,h}}function Mg(t){let e=new WeakMap;function n(o,a){return a===po?o.mapping=Pi:a===mo&&(o.mapping=Li),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===po||a===mo)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lf(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Eg extends Ec{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ei=4,hl=[.125,.215,.35,.446,.526,.582],jn=20,Zr=new Eg,dl=new Je;let Kr=null,jr=0,Jr=0,Qr=!1;const Zn=(1+Math.sqrt(5))/2,gi=1/Zn,ul=[new I(-Zn,gi,0),new I(Zn,gi,0),new I(-gi,0,Zn),new I(gi,0,Zn),new I(0,Zn,-gi),new I(0,Zn,gi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Kr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kr,jr,Jr),this._renderer.xr.enabled=Qr,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Pi||e.mapping===Li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),Qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:cs,format:Kt,colorSpace:Mn,depthBuffer:!1},s=pl(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sg(r)),this._blurMaterial=yg(r,e,n)}return s}_compileMaterial(e){const n=new Gt(this._lodPlanes[0],e);this._renderer.compile(n,Zr)}_sceneToCubeUV(e,n,i,s){const a=new Ot(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(dl),d.toneMapping=Ln,d.autoClear=!1;const m=new hs({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),v=new Gt(new ds,m);let x=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,x=!0):(m.color.copy(dl),x=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):w===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const S=this._cubeSize;zs(s,w*S,u>2?S:0,S,S),d.setRenderTarget(s),x&&d.render(v,a),d.render(e,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Pi||e.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;zs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Zr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ul[(s-r-1)%ul.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Gt(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*jn-1),x=r/v,h=isFinite(r)?1+Math.floor(d*x):jn;h>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${jn}`);const u=[];let w=0;for(let b=0;b<jn;++b){const F=b/x,ee=Math.exp(-F*F/2);u.push(ee),b===0?w+=ee:b<h&&(w+=2*ee)}for(let b=0;b<u.length;b++)u[b]=u[b]/w;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=v,p.mipInt.value=S-i;const T=this._sizeLods[s],N=3*T*(s>S-Ei?s-S+Ei:0),C=4*(this._cubeSize-T);zs(n,N,C,3*T,2*T),l.setRenderTarget(n),l.render(f,Zr)}}function Sg(t){const e=[],n=[],i=[];let s=t;const r=t-Ei+1+hl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-Ei?l=hl[o-t+Ei-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,v=6,x=3,h=2,u=1,w=new Float32Array(x*v*m),S=new Float32Array(h*v*m),T=new Float32Array(u*v*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,F=C>2?0:-1,ee=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];w.set(ee,x*v*C),S.set(p,h*v*C);const g=[C,C,C,C,C,C];T.set(g,u*v*C)}const N=new zn;N.setAttribute("position",new rn(w,x)),N.setAttribute("uv",new rn(S,h)),N.setAttribute("faceIndex",new rn(T,u)),e.push(N),s>Ei&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function pl(t,e,n){const i=new On(t,e,n);return i.texture.mapping=hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function yg(t,e,n){const i=new Float32Array(jn),s=new I(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ml(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function gl(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ga(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wg(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===po||l===mo,d=l===Pi||l===Li;if(c||d){let f=e.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new fl(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&s(m)?(n===null&&(n=new fl(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Tg(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&$s("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function bg(t,e,n,i){const s={},r=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const x=p.morphAttributes[v];for(let h=0,u=x.length;h<u;h++)e.remove(x[h])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const v in p)e.update(p[v],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const x=m[v];for(let h=0,u=x.length;h<u;h++)e.update(x[h],t.ARRAY_BUFFER)}}function c(f){const p=[],m=f.index,v=f.attributes.position;let x=0;if(m!==null){const w=m.array;x=m.version;for(let S=0,T=w.length;S<T;S+=3){const N=w[S+0],C=w[S+1],b=w[S+2];p.push(N,C,C,b,b,N)}}else if(v!==void 0){const w=v.array;x=v.version;for(let S=0,T=w.length/3-1;S<T;S+=3){const N=S+0,C=S+1,b=S+2;p.push(N,C,C,b,b,N)}}else return;const h=new(fc(p)?xc:_c)(p,1);h.version=x;const u=r.get(f);u&&e.remove(u),r.set(f,h)}function d(f){const p=r.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function Ag(t,e,n){let i;function s(p){i=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){t.drawElements(i,m,r,p*o),n.update(m,i,1)}function c(p,m,v){v!==0&&(t.drawElementsInstanced(i,m,r,p*o,v),n.update(m,i,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,p,0,v);let h=0;for(let u=0;u<v;u++)h+=m[u];n.update(h,i,1)}function f(p,m,v,x){if(v===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<p.length;u++)c(p[u]/o,m[u],x[u]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,r,p,0,x,0,v);let u=0;for(let w=0;w<v;w++)u+=m[w];for(let w=0;w<x.length;w++)n.update(u,i,x[w])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Cg(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Rg(t,e,n){const i=new WeakMap,s=new ot;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(a);if(p===void 0||p.count!==f){let g=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",g)};var m=g;p!==void 0&&p.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let T=0;v===!0&&(T=1),x===!0&&(T=2),h===!0&&(T=3);let N=a.attributes.position.count*T,C=1;N>e.maxTextureSize&&(C=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const b=new Float32Array(N*C*4*f),F=new mc(b,N,C,f);F.type=gn,F.needsUpdate=!0;const ee=T*4;for(let E=0;E<f;E++){const V=u[E],z=w[E],Y=S[E],Z=N*C*4*E;for(let k=0;k<V.count;k++){const $=k*ee;v===!0&&(s.fromBufferAttribute(V,k),b[Z+$+0]=s.x,b[Z+$+1]=s.y,b[Z+$+2]=s.z,b[Z+$+3]=0),x===!0&&(s.fromBufferAttribute(z,k),b[Z+$+4]=s.x,b[Z+$+5]=s.y,b[Z+$+6]=s.z,b[Z+$+7]=0),h===!0&&(s.fromBufferAttribute(Y,k),b[Z+$+8]=s.x,b[Z+$+9]=s.y,b[Z+$+10]=s.z,b[Z+$+11]=Y.itemSize===4?s.w:1)}}p={count:f,texture:F,size:new Ke(N,C)},i.set(a,p),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let h=0;h<c.length;h++)v+=c[h];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:r}}function Pg(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}class wc extends wt{constructor(e,n,i,s,r,o,a,l,c,d=bi){if(d!==bi&&d!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===bi&&(i=Qn),i===void 0&&d===Ui&&(i=Ii),super(null,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Tc=new wt,vl=new wc(1,1),bc=new mc,Ac=new mf,Cc=new Sc,_l=[],xl=[],Ml=new Float32Array(16),El=new Float32Array(9),Sl=new Float32Array(4);function zi(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=_l[s];if(r===void 0&&(r=new Float32Array(s),_l[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pr(t,e){let n=xl[e];n===void 0&&(n=new Int32Array(e),xl[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Lg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ig(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2fv(this.addr,e),dt(n,e)}}function Ug(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(ht(n,e))return;t.uniform3fv(this.addr,e),dt(n,e)}}function Dg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4fv(this.addr,e),dt(n,e)}}function Ng(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),dt(n,e)}else{if(ht(n,i))return;Sl.set(i),t.uniformMatrix2fv(this.addr,!1,Sl),dt(n,i)}}function Og(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),dt(n,e)}else{if(ht(n,i))return;El.set(i),t.uniformMatrix3fv(this.addr,!1,El),dt(n,i)}}function Fg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),dt(n,e)}else{if(ht(n,i))return;Ml.set(i),t.uniformMatrix4fv(this.addr,!1,Ml),dt(n,i)}}function Bg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2iv(this.addr,e),dt(n,e)}}function Hg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ht(n,e))return;t.uniform3iv(this.addr,e),dt(n,e)}}function kg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4iv(this.addr,e),dt(n,e)}}function Vg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Gg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(ht(n,e))return;t.uniform2uiv(this.addr,e),dt(n,e)}}function Wg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(ht(n,e))return;t.uniform3uiv(this.addr,e),dt(n,e)}}function Xg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(ht(n,e))return;t.uniform4uiv(this.addr,e),dt(n,e)}}function Yg(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(vl.compareFunction=uc,r=vl):r=Tc,n.setTexture2D(e||r,s)}function qg(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Ac,s)}function $g(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Cc,s)}function Zg(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||bc,s)}function Kg(t){switch(t){case 5126:return Lg;case 35664:return Ig;case 35665:return Ug;case 35666:return Dg;case 35674:return Ng;case 35675:return Og;case 35676:return Fg;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return Hg;case 35669:case 35673:return kg;case 5125:return Vg;case 36294:return Gg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Zg}}function jg(t,e){t.uniform1fv(this.addr,e)}function Jg(t,e){const n=zi(e,this.size,2);t.uniform2fv(this.addr,n)}function Qg(t,e){const n=zi(e,this.size,3);t.uniform3fv(this.addr,n)}function ev(t,e){const n=zi(e,this.size,4);t.uniform4fv(this.addr,n)}function tv(t,e){const n=zi(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function nv(t,e){const n=zi(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function iv(t,e){const n=zi(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sv(t,e){t.uniform1iv(this.addr,e)}function rv(t,e){t.uniform2iv(this.addr,e)}function ov(t,e){t.uniform3iv(this.addr,e)}function av(t,e){t.uniform4iv(this.addr,e)}function lv(t,e){t.uniform1uiv(this.addr,e)}function cv(t,e){t.uniform2uiv(this.addr,e)}function hv(t,e){t.uniform3uiv(this.addr,e)}function dv(t,e){t.uniform4uiv(this.addr,e)}function uv(t,e,n){const i=this.cache,s=e.length,r=pr(n,s);ht(i,r)||(t.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||Tc,r[o])}function fv(t,e,n){const i=this.cache,s=e.length,r=pr(n,s);ht(i,r)||(t.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Ac,r[o])}function pv(t,e,n){const i=this.cache,s=e.length,r=pr(n,s);ht(i,r)||(t.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Cc,r[o])}function mv(t,e,n){const i=this.cache,s=e.length,r=pr(n,s);ht(i,r)||(t.uniform1iv(this.addr,r),dt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||bc,r[o])}function gv(t){switch(t){case 5126:return jg;case 35664:return Jg;case 35665:return Qg;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return sv;case 35667:case 35671:return rv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return hv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}class vv{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Kg(n.type)}}class _v{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gv(n.type)}}class xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function yl(t,e){t.seq.push(e),t.map[e.id]=e}function Mv(t,e,n){const i=t.name,s=i.length;for(eo.lastIndex=0;;){const r=eo.exec(i),o=eo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yl(n,c===void 0?new vv(a,t,e):new _v(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new xv(a),yl(n,f)),n=f}}}class Zs{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);Mv(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function wl(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ev=37297;let Sv=0;function yv(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function wv(t){const e=Ge.getPrimaries(Ge.workingColorSpace),n=Ge.getPrimaries(t);let i;switch(e===n?i="":e===er&&n===Qs?i="LinearDisplayP3ToLinearSRGB":e===Qs&&n===er&&(i="LinearSRGBToLinearDisplayP3"),t){case Mn:case dr:return[i,"LinearTransferOETF"];case en:case da:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Tl(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+yv(t.getShaderSource(e),o)}else return s}function Tv(t,e){const n=wv(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function bv(t,e){let n;switch(e){case ec:n="Linear";break;case Tu:n="Reinhard";break;case bu:n="Cineon";break;case Au:n="ACESFilmic";break;case Ru:n="AgX";break;case Pu:n="Neutral";break;case Cu:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Hs=new I;function Av(){Ge.getLuminanceCoefficients(Hs);const t=Hs.x.toFixed(4),e=Hs.y.toFixed(4),n=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cv(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function Rv(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Pv(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Yi(t){return t!==""}function bl(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Al(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(t){return t.replace(Lv,Uv)}const Iv=new Map;function Uv(t,e){let n=Pe[e];if(n===void 0){const i=Iv.get(e);if(i!==void 0)n=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wo(n)}const Dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(t){return t.replace(Dv,Nv)}function Nv(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rl(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ov(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Jl?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===su?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Fv(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Pi:case Li:e="ENVMAP_TYPE_CUBE";break;case hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bv(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Li:e="ENVMAP_MODE_REFRACTION";break}return e}function zv(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case yu:e="ENVMAP_BLENDING_MIX";break;case wu:e="ENVMAP_BLENDING_ADD";break}return e}function Hv(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kv(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Ov(n),c=Fv(n),d=Bv(n),f=zv(n),p=Hv(n),m=Cv(n),v=Rv(r),x=s.createProgram();let h,u,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Yi).join(`
`),h.length>0&&(h+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Yi).join(`
`),u.length>0&&(u+=`
`)):(h=[Rl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),u=[Rl(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ln?"#define TONE_MAPPING":"",n.toneMapping!==Ln?Pe.tonemapping_pars_fragment:"",n.toneMapping!==Ln?bv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Tv("linearToOutputTexel",n.outputColorSpace),Av(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Yi).join(`
`)),o=Wo(o),o=bl(o,n),o=Al(o,n),a=Wo(a),a=bl(a,n),a=Al(a,n),o=Cl(o),a=Cl(a),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,u=["#define varying in",n.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=w+h+o,T=w+u+a,N=wl(s,s.VERTEX_SHADER,S),C=wl(s,s.FRAGMENT_SHADER,T);s.attachShader(x,N),s.attachShader(x,C),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(E){if(t.debug.checkShaderErrors){const V=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(N).trim(),Y=s.getShaderInfoLog(C).trim();let Z=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,N,C);else{const $=Tl(s,N,"vertex"),H=Tl(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+V+`
`+$+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||Y==="")&&(k=!1);k&&(E.diagnostics={runnable:Z,programLog:V,vertexShader:{log:z,prefix:h},fragmentShader:{log:Y,prefix:u}})}s.deleteShader(N),s.deleteShader(C),F=new Zs(s,x),ee=Pv(s,x)}let F;this.getUniforms=function(){return F===void 0&&b(this),F};let ee;this.getAttributes=function(){return ee===void 0&&b(this),ee};let g=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(x,Ev)),g},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Sv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=C,this}let Vv=0;class Gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Wv(e),n.set(e,i)),i}}class Wv{constructor(e){this.id=Vv++,this.code=e,this.usedTimes=0}}function Xv(t,e,n,i,s,r,o){const a=new pa,l=new Gv,c=new Set,d=[],f=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,m=s.vertexTextures;let v=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(g){return c.add(g),g===0?"uv":`uv${g}`}function u(g,E,V,z,Y){const Z=z.fog,k=Y.geometry,$=g.isMeshStandardMaterial?z.environment:null,H=(g.isMeshStandardMaterial?n:e).get(g.envMap||$),ae=H&&H.mapping===hr?H.image.height:null,le=x[g.type];g.precision!==null&&(v=s.getMaxPrecision(g.precision),v!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",v,"instead."));const ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ke=ge!==void 0?ge.length:0;let qe=0;k.morphAttributes.position!==void 0&&(qe=1),k.morphAttributes.normal!==void 0&&(qe=2),k.morphAttributes.color!==void 0&&(qe=3);let G,j,pe,ce;if(le){const At=nn[le];G=At.vertexShader,j=At.fragmentShader}else G=g.vertexShader,j=g.fragmentShader,l.update(g),pe=l.getVertexShaderID(g),ce=l.getFragmentShaderID(g);const Ce=t.getRenderTarget(),Se=Y.isInstancedMesh===!0,Oe=Y.isBatchedMesh===!0,je=!!g.map,Fe=!!g.matcap,A=!!H,Pt=!!g.aoMap,Ue=!!g.lightMap,ze=!!g.bumpMap,we=!!g.normalMap,tt=!!g.displacementMap,Ae=!!g.emissiveMap,y=!!g.metalnessMap,_=!!g.roughnessMap,U=g.anisotropy>0,X=g.clearcoat>0,K=g.dispersion>0,W=g.iridescence>0,ve=g.sheen>0,ne=g.transmission>0,he=U&&!!g.anisotropyMap,He=X&&!!g.clearcoatMap,J=X&&!!g.clearcoatNormalMap,de=X&&!!g.clearcoatRoughnessMap,Te=W&&!!g.iridescenceMap,be=W&&!!g.iridescenceThicknessMap,ue=ve&&!!g.sheenColorMap,De=ve&&!!g.sheenRoughnessMap,Re=!!g.specularMap,Qe=!!g.specularColorMap,R=!!g.specularIntensityMap,re=ne&&!!g.transmissionMap,B=ne&&!!g.thicknessMap,q=!!g.gradientMap,ie=!!g.alphaMap,oe=g.alphaTest>0,Be=!!g.alphaHash,at=!!g.extensions;let bt=Ln;g.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(bt=t.toneMapping);const Ve={shaderID:le,shaderType:g.type,shaderName:g.name,vertexShader:G,fragmentShader:j,defines:g.defines,customVertexShaderID:pe,customFragmentShaderID:ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:v,batching:Oe,batchingColor:Oe&&Y._colorsTexture!==null,instancing:Se,instancingColor:Se&&Y.instanceColor!==null,instancingMorph:Se&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ce===null?t.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Mn,alphaToCoverage:!!g.alphaToCoverage,map:je,matcap:Fe,envMap:A,envMapMode:A&&H.mapping,envMapCubeUVHeight:ae,aoMap:Pt,lightMap:Ue,bumpMap:ze,normalMap:we,displacementMap:m&&tt,emissiveMap:Ae,normalMapObjectSpace:we&&g.normalMapType===Nu,normalMapTangentSpace:we&&g.normalMapType===Du,metalnessMap:y,roughnessMap:_,anisotropy:U,anisotropyMap:he,clearcoat:X,clearcoatMap:He,clearcoatNormalMap:J,clearcoatRoughnessMap:de,dispersion:K,iridescence:W,iridescenceMap:Te,iridescenceThicknessMap:be,sheen:ve,sheenColorMap:ue,sheenRoughnessMap:De,specularMap:Re,specularColorMap:Qe,specularIntensityMap:R,transmission:ne,transmissionMap:re,thicknessMap:B,gradientMap:q,opaque:g.transparent===!1&&g.blending===Ti&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:oe,alphaHash:Be,combine:g.combine,mapUv:je&&h(g.map.channel),aoMapUv:Pt&&h(g.aoMap.channel),lightMapUv:Ue&&h(g.lightMap.channel),bumpMapUv:ze&&h(g.bumpMap.channel),normalMapUv:we&&h(g.normalMap.channel),displacementMapUv:tt&&h(g.displacementMap.channel),emissiveMapUv:Ae&&h(g.emissiveMap.channel),metalnessMapUv:y&&h(g.metalnessMap.channel),roughnessMapUv:_&&h(g.roughnessMap.channel),anisotropyMapUv:he&&h(g.anisotropyMap.channel),clearcoatMapUv:He&&h(g.clearcoatMap.channel),clearcoatNormalMapUv:J&&h(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&h(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&h(g.iridescenceMap.channel),iridescenceThicknessMapUv:be&&h(g.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&h(g.sheenColorMap.channel),sheenRoughnessMapUv:De&&h(g.sheenRoughnessMap.channel),specularMapUv:Re&&h(g.specularMap.channel),specularColorMapUv:Qe&&h(g.specularColorMap.channel),specularIntensityMapUv:R&&h(g.specularIntensityMap.channel),transmissionMapUv:re&&h(g.transmissionMap.channel),thicknessMapUv:B&&h(g.thicknessMap.channel),alphaMapUv:ie&&h(g.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(we||U),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!k.attributes.uv&&(je||ie),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:Y.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:qe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:bt,decodeVideoTexture:je&&g.map.isVideoTexture===!0&&Ge.getTransfer(g.map.colorSpace)===it,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===mn,flipSided:g.side===Ct,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:at&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&g.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function w(g){const E=[];if(g.shaderID?E.push(g.shaderID):(E.push(g.customVertexShaderID),E.push(g.customFragmentShaderID)),g.defines!==void 0)for(const V in g.defines)E.push(V),E.push(g.defines[V]);return g.isRawShaderMaterial===!1&&(S(E,g),T(E,g),E.push(t.outputColorSpace)),E.push(g.customProgramCacheKey),E.join()}function S(g,E){g.push(E.precision),g.push(E.outputColorSpace),g.push(E.envMapMode),g.push(E.envMapCubeUVHeight),g.push(E.mapUv),g.push(E.alphaMapUv),g.push(E.lightMapUv),g.push(E.aoMapUv),g.push(E.bumpMapUv),g.push(E.normalMapUv),g.push(E.displacementMapUv),g.push(E.emissiveMapUv),g.push(E.metalnessMapUv),g.push(E.roughnessMapUv),g.push(E.anisotropyMapUv),g.push(E.clearcoatMapUv),g.push(E.clearcoatNormalMapUv),g.push(E.clearcoatRoughnessMapUv),g.push(E.iridescenceMapUv),g.push(E.iridescenceThicknessMapUv),g.push(E.sheenColorMapUv),g.push(E.sheenRoughnessMapUv),g.push(E.specularMapUv),g.push(E.specularColorMapUv),g.push(E.specularIntensityMapUv),g.push(E.transmissionMapUv),g.push(E.thicknessMapUv),g.push(E.combine),g.push(E.fogExp2),g.push(E.sizeAttenuation),g.push(E.morphTargetsCount),g.push(E.morphAttributeCount),g.push(E.numDirLights),g.push(E.numPointLights),g.push(E.numSpotLights),g.push(E.numSpotLightMaps),g.push(E.numHemiLights),g.push(E.numRectAreaLights),g.push(E.numDirLightShadows),g.push(E.numPointLightShadows),g.push(E.numSpotLightShadows),g.push(E.numSpotLightShadowsWithMaps),g.push(E.numLightProbes),g.push(E.shadowMapType),g.push(E.toneMapping),g.push(E.numClippingPlanes),g.push(E.numClipIntersection),g.push(E.depthPacking)}function T(g,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),g.push(a.mask)}function N(g){const E=x[g.type];let V;if(E){const z=nn[E];V=Af.clone(z.uniforms)}else V=g.uniforms;return V}function C(g,E){let V;for(let z=0,Y=d.length;z<Y;z++){const Z=d[z];if(Z.cacheKey===E){V=Z,++V.usedTimes;break}}return V===void 0&&(V=new kv(t,E,g,r),d.push(V)),V}function b(g){if(--g.usedTimes===0){const E=d.indexOf(g);d[E]=d[d.length-1],d.pop(),g.destroy()}}function F(g){l.remove(g)}function ee(){l.dispose()}return{getParameters:u,getProgramCacheKey:w,getUniforms:N,acquireProgram:C,releaseProgram:b,releaseShaderCache:F,programs:d,dispose:ee}}function Yv(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function qv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pl(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ll(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,p,m,v,x,h){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:v,renderOrder:f.renderOrder,z:x,group:h},t[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=x,u.group=h),e++,u}function a(f,p,m,v,x,h){const u=o(f,p,m,v,x,h);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):n.push(u)}function l(f,p,m,v,x,h){const u=o(f,p,m,v,x,h);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):n.unshift(u)}function c(f,p){n.length>1&&n.sort(f||qv),i.length>1&&i.sort(p||Pl),s.length>1&&s.sort(p||Pl)}function d(){for(let f=e,p=t.length;f<p;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function $v(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Ll,t.set(i,[o])):s>=r.length?(o=new Ll,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Zv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Je};break;case"SpotLight":n={position:new I,direction:new I,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function Kv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jv=0;function Jv(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Qv(t){const e=new Zv,n=Kv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new et,o=new et;function a(c){let d=0,f=0,p=0;for(let ee=0;ee<9;ee++)i.probe[ee].set(0,0,0);let m=0,v=0,x=0,h=0,u=0,w=0,S=0,T=0,N=0,C=0,b=0;c.sort(Jv);for(let ee=0,g=c.length;ee<g;ee++){const E=c[ee],V=E.color,z=E.intensity,Y=E.distance,Z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=V.r*z,f+=V.g*z,p+=V.b*z;else if(E.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(E.sh.coefficients[k],z);b++}else if(E.isDirectionalLight){const k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const $=E.shadow,H=n.get(E);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=E.shadow.matrix,w++}i.directional[m]=k,m++}else if(E.isSpotLight){const k=e.get(E);k.position.setFromMatrixPosition(E.matrixWorld),k.color.copy(V).multiplyScalar(z),k.distance=Y,k.coneCos=Math.cos(E.angle),k.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),k.decay=E.decay,i.spot[x]=k;const $=E.shadow;if(E.map&&(i.spotLightMap[N]=E.map,N++,$.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[x]=$.matrix,E.castShadow){const H=n.get(E);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=Z,T++}x++}else if(E.isRectAreaLight){const k=e.get(E);k.color.copy(V).multiplyScalar(z),k.halfWidth.set(E.width*.5,0,0),k.halfHeight.set(0,E.height*.5,0),i.rectArea[h]=k,h++}else if(E.isPointLight){const k=e.get(E);if(k.color.copy(E.color).multiplyScalar(E.intensity),k.distance=E.distance,k.decay=E.decay,E.castShadow){const $=E.shadow,H=n.get(E);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,i.pointShadow[v]=H,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=E.shadow.matrix,S++}i.point[v]=k,v++}else if(E.isHemisphereLight){const k=e.get(E);k.skyColor.copy(E.color).multiplyScalar(z),k.groundColor.copy(E.groundColor).multiplyScalar(z),i.hemi[u]=k,u++}}h>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const F=i.hash;(F.directionalLength!==m||F.pointLength!==v||F.spotLength!==x||F.rectAreaLength!==h||F.hemiLength!==u||F.numDirectionalShadows!==w||F.numPointShadows!==S||F.numSpotShadows!==T||F.numSpotMaps!==N||F.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=h,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+N-C,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=b,F.directionalLength=m,F.pointLength=v,F.spotLength=x,F.rectAreaLength=h,F.hemiLength=u,F.numDirectionalShadows=w,F.numPointShadows=S,F.numSpotShadows=T,F.numSpotMaps=N,F.numLightProbes=b,i.version=jv++)}function l(c,d){let f=0,p=0,m=0,v=0,x=0;const h=d.matrixWorldInverse;for(let u=0,w=c.length;u<w;u++){const S=c[u];if(S.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),f++}else if(S.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),m++}else if(S.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),o.identity(),r.copy(S.matrixWorld),r.premultiply(h),o.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(h),p++}else if(S.isHemisphereLight){const T=i.hemi[x];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(h),x++}}}return{setup:a,setupView:l,state:i}}function Il(t){const e=new Qv(t),n=[],i=[];function s(d){c.camera=d,n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function e_(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Il(t),e.set(s,[a])):r>=o.length?(a=new Il(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class t_ extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n_ extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r_(t,e,n){let i=new ma;const s=new Ke,r=new Ke,o=new ot,a=new t_({depthPacking:Uu}),l=new n_,c={},d=n.maxTextureSize,f={[Nn]:Ct,[Ct]:Nn,[mn]:mn},p=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new zn;v.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Gt(v,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let u=this.type;this.render=function(C,b,F){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||C.length===0)return;const ee=t.getRenderTarget(),g=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Pn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=u!==pn&&this.type===pn,Y=u===pn&&this.type!==pn;for(let Z=0,k=C.length;Z<k;Z++){const $=C[Z],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ae=H.getFrameExtents();if(s.multiply(ae),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ae.x),s.x=r.x*ae.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ae.y),s.y=r.y*ae.y,H.mapSize.y=r.y)),H.map===null||z===!0||Y===!0){const ge=this.type!==pn?{minFilter:Vt,magFilter:Vt}:{};H.map!==null&&H.map.dispose(),H.map=new On(s.x,s.y,ge),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const le=H.getViewportCount();for(let ge=0;ge<le;ge++){const ke=H.getViewport(ge);o.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),V.viewport(o),H.updateMatrices($,ge),i=H.getFrustum(),T(b,F,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===pn&&w(H,F),H.needsUpdate=!1}u=this.type,h.needsUpdate=!1,t.setRenderTarget(ee,g,E)};function w(C,b){const F=e.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new On(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(b,null,F,p,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(b,null,F,m,x,null)}function S(C,b,F,ee){let g=null;const E=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)g=E;else if(g=F.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const V=g.uuid,z=b.uuid;let Y=c[V];Y===void 0&&(Y={},c[V]=Y);let Z=Y[z];Z===void 0&&(Z=g.clone(),Y[z]=Z,b.addEventListener("dispose",N)),g=Z}if(g.visible=b.visible,g.wireframe=b.wireframe,ee===pn?g.side=b.shadowSide!==null?b.shadowSide:b.side:g.side=b.shadowSide!==null?b.shadowSide:f[b.side],g.alphaMap=b.alphaMap,g.alphaTest=b.alphaTest,g.map=b.map,g.clipShadows=b.clipShadows,g.clippingPlanes=b.clippingPlanes,g.clipIntersection=b.clipIntersection,g.displacementMap=b.displacementMap,g.displacementScale=b.displacementScale,g.displacementBias=b.displacementBias,g.wireframeLinewidth=b.wireframeLinewidth,g.linewidth=b.linewidth,F.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const V=t.properties.get(g);V.light=F}return g}function T(C,b,F,ee,g){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===pn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const z=e.update(C),Y=C.material;if(Array.isArray(Y)){const Z=z.groups;for(let k=0,$=Z.length;k<$;k++){const H=Z[k],ae=Y[H.materialIndex];if(ae&&ae.visible){const le=S(C,ae,ee,g);C.onBeforeShadow(t,C,b,F,z,le,H),t.renderBufferDirect(F,null,z,le,C,H),C.onAfterShadow(t,C,b,F,z,le,H)}}}else if(Y.visible){const Z=S(C,Y,ee,g);C.onBeforeShadow(t,C,b,F,z,Z,null),t.renderBufferDirect(F,null,z,Z,C,null),C.onAfterShadow(t,C,b,F,z,Z,null)}}const V=C.children;for(let z=0,Y=V.length;z<Y;z++)T(V[z],b,F,ee,g)}function N(C){C.target.removeEventListener("dispose",N);for(const F in c){const ee=c[F],g=C.target.uuid;g in ee&&(ee[g].dispose(),delete ee[g])}}}const o_={[oo]:ao,[lo]:uo,[co]:fo,[Ri]:ho,[ao]:oo,[uo]:lo,[fo]:co,[ho]:Ri};function a_(t){function e(){let R=!1;const re=new ot;let B=null;const q=new ot(0,0,0,0);return{setMask:function(ie){B!==ie&&!R&&(t.colorMask(ie,ie,ie,ie),B=ie)},setLocked:function(ie){R=ie},setClear:function(ie,oe,Be,at,bt){bt===!0&&(ie*=at,oe*=at,Be*=at),re.set(ie,oe,Be,at),q.equals(re)===!1&&(t.clearColor(ie,oe,Be,at),q.copy(re))},reset:function(){R=!1,B=null,q.set(-1,0,0,0)}}}function n(){let R=!1,re=!1,B=null,q=null,ie=null;return{setReversed:function(oe){re=oe},setTest:function(oe){oe?pe(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(oe){B!==oe&&!R&&(t.depthMask(oe),B=oe)},setFunc:function(oe){if(re&&(oe=o_[oe]),q!==oe){switch(oe){case oo:t.depthFunc(t.NEVER);break;case ao:t.depthFunc(t.ALWAYS);break;case lo:t.depthFunc(t.LESS);break;case Ri:t.depthFunc(t.LEQUAL);break;case co:t.depthFunc(t.EQUAL);break;case ho:t.depthFunc(t.GEQUAL);break;case uo:t.depthFunc(t.GREATER);break;case fo:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=oe}},setLocked:function(oe){R=oe},setClear:function(oe){ie!==oe&&(t.clearDepth(oe),ie=oe)},reset:function(){R=!1,B=null,q=null,ie=null}}}function i(){let R=!1,re=null,B=null,q=null,ie=null,oe=null,Be=null,at=null,bt=null;return{setTest:function(Ve){R||(Ve?pe(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ve){re!==Ve&&!R&&(t.stencilMask(Ve),re=Ve)},setFunc:function(Ve,At,ln){(B!==Ve||q!==At||ie!==ln)&&(t.stencilFunc(Ve,At,ln),B=Ve,q=At,ie=ln)},setOp:function(Ve,At,ln){(oe!==Ve||Be!==At||at!==ln)&&(t.stencilOp(Ve,At,ln),oe=Ve,Be=At,at=ln)},setLocked:function(Ve){R=Ve},setClear:function(Ve){bt!==Ve&&(t.clearStencil(Ve),bt=Ve)},reset:function(){R=!1,re=null,B=null,q=null,ie=null,oe=null,Be=null,at=null,bt=null}}}const s=new e,r=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,p=[],m=null,v=!1,x=null,h=null,u=null,w=null,S=null,T=null,N=null,C=new Je(0,0,0),b=0,F=!1,ee=null,g=null,E=null,V=null,z=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,k=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=k>=1):$.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=k>=2);let H=null,ae={};const le=t.getParameter(t.SCISSOR_BOX),ge=t.getParameter(t.VIEWPORT),ke=new ot().fromArray(le),qe=new ot().fromArray(ge);function G(R,re,B,q){const ie=new Uint8Array(4),oe=t.createTexture();t.bindTexture(R,oe),t.texParameteri(R,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(R,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<B;Be++)R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(re+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return oe}const j={};j[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),j[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),j[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),r.setFunc(Ri),Ue(!1),ze(za),pe(t.CULL_FACE),A(Pn);function pe(R){c[R]!==!0&&(t.enable(R),c[R]=!0)}function ce(R){c[R]!==!1&&(t.disable(R),c[R]=!1)}function Ce(R,re){return d[R]!==re?(t.bindFramebuffer(R,re),d[R]=re,R===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=re),R===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Se(R,re){let B=p,q=!1;if(R){B=f.get(re),B===void 0&&(B=[],f.set(re,B));const ie=R.textures;if(B.length!==ie.length||B[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Be=ie.length;oe<Be;oe++)B[oe]=t.COLOR_ATTACHMENT0+oe;B.length=ie.length,q=!0}}else B[0]!==t.BACK&&(B[0]=t.BACK,q=!0);q&&t.drawBuffers(B)}function Oe(R){return m!==R?(t.useProgram(R),m=R,!0):!1}const je={[Kn]:t.FUNC_ADD,[ou]:t.FUNC_SUBTRACT,[au]:t.FUNC_REVERSE_SUBTRACT};je[lu]=t.MIN,je[cu]=t.MAX;const Fe={[hu]:t.ZERO,[du]:t.ONE,[uu]:t.SRC_COLOR,[so]:t.SRC_ALPHA,[_u]:t.SRC_ALPHA_SATURATE,[gu]:t.DST_COLOR,[pu]:t.DST_ALPHA,[fu]:t.ONE_MINUS_SRC_COLOR,[ro]:t.ONE_MINUS_SRC_ALPHA,[vu]:t.ONE_MINUS_DST_COLOR,[mu]:t.ONE_MINUS_DST_ALPHA,[xu]:t.CONSTANT_COLOR,[Mu]:t.ONE_MINUS_CONSTANT_COLOR,[Eu]:t.CONSTANT_ALPHA,[Su]:t.ONE_MINUS_CONSTANT_ALPHA};function A(R,re,B,q,ie,oe,Be,at,bt,Ve){if(R===Pn){v===!0&&(ce(t.BLEND),v=!1);return}if(v===!1&&(pe(t.BLEND),v=!0),R!==ru){if(R!==x||Ve!==F){if((h!==Kn||S!==Kn)&&(t.blendEquation(t.FUNC_ADD),h=Kn,S=Kn),Ve)switch(R){case Ti:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ha:t.blendFunc(t.ONE,t.ONE);break;case ka:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Va:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ti:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ha:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ka:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Va:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}u=null,w=null,T=null,N=null,C.set(0,0,0),b=0,x=R,F=Ve}return}ie=ie||re,oe=oe||B,Be=Be||q,(re!==h||ie!==S)&&(t.blendEquationSeparate(je[re],je[ie]),h=re,S=ie),(B!==u||q!==w||oe!==T||Be!==N)&&(t.blendFuncSeparate(Fe[B],Fe[q],Fe[oe],Fe[Be]),u=B,w=q,T=oe,N=Be),(at.equals(C)===!1||bt!==b)&&(t.blendColor(at.r,at.g,at.b,bt),C.copy(at),b=bt),x=R,F=!1}function Pt(R,re){R.side===mn?ce(t.CULL_FACE):pe(t.CULL_FACE);let B=R.side===Ct;re&&(B=!B),Ue(B),R.blending===Ti&&R.transparent===!1?A(Pn):A(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),s.setMask(R.colorWrite);const q=R.stencilWrite;o.setTest(q),q&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),tt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(R){ee!==R&&(R?t.frontFace(t.CW):t.frontFace(t.CCW),ee=R)}function ze(R){R!==nu?(pe(t.CULL_FACE),R!==g&&(R===za?t.cullFace(t.BACK):R===iu?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),g=R}function we(R){R!==E&&(Z&&t.lineWidth(R),E=R)}function tt(R,re,B){R?(pe(t.POLYGON_OFFSET_FILL),(V!==re||z!==B)&&(t.polygonOffset(re,B),V=re,z=B)):ce(t.POLYGON_OFFSET_FILL)}function Ae(R){R?pe(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function y(R){R===void 0&&(R=t.TEXTURE0+Y-1),H!==R&&(t.activeTexture(R),H=R)}function _(R,re,B){B===void 0&&(H===null?B=t.TEXTURE0+Y-1:B=H);let q=ae[B];q===void 0&&(q={type:void 0,texture:void 0},ae[B]=q),(q.type!==R||q.texture!==re)&&(H!==B&&(t.activeTexture(B),H=B),t.bindTexture(R,re||j[R]),q.type=R,q.texture=re)}function U(){const R=ae[H];R!==void 0&&R.type!==void 0&&(t.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function X(){try{t.compressedTexImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{t.compressedTexImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{t.texSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{t.texSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{t.texStorage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{t.texImage2D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function be(R){ke.equals(R)===!1&&(t.scissor(R.x,R.y,R.z,R.w),ke.copy(R))}function ue(R){qe.equals(R)===!1&&(t.viewport(R.x,R.y,R.z,R.w),qe.copy(R))}function De(R,re){let B=l.get(re);B===void 0&&(B=new WeakMap,l.set(re,B));let q=B.get(R);q===void 0&&(q=t.getUniformBlockIndex(re,R.name),B.set(R,q))}function Re(R,re){const q=l.get(re).get(R);a.get(re)!==q&&(t.uniformBlockBinding(re,q,R.__bindingPointIndex),a.set(re,q))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},H=null,ae={},d={},f=new WeakMap,p=[],m=null,v=!1,x=null,h=null,u=null,w=null,S=null,T=null,N=null,C=new Je(0,0,0),b=0,F=!1,ee=null,g=null,E=null,V=null,z=null,ke.set(0,0,t.canvas.width,t.canvas.height),qe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:pe,disable:ce,bindFramebuffer:Ce,drawBuffers:Se,useProgram:Oe,setBlending:A,setMaterial:Pt,setFlipSided:Ue,setCullFace:ze,setLineWidth:we,setPolygonOffset:tt,setScissorTest:Ae,activeTexture:y,bindTexture:_,unbindTexture:U,compressedTexImage2D:X,compressedTexImage3D:K,texImage2D:de,texImage3D:Te,updateUBOMapping:De,uniformBlockBinding:Re,texStorage2D:He,texStorage3D:J,texSubImage2D:W,texSubImage3D:ve,compressedTexSubImage2D:ne,compressedTexSubImage3D:he,scissor:be,viewport:ue,reset:Qe}}function Ul(t,e,n,i){const s=l_(i);switch(n){case rc:return t*e;case ac:return t*e;case lc:return t*e*2;case cc:return t*e/s.components*s.byteLength;case la:return t*e/s.components*s.byteLength;case hc:return t*e*2/s.components*s.byteLength;case ca:return t*e*2/s.components*s.byteLength;case oc:return t*e*3/s.components*s.byteLength;case Kt:return t*e*4/s.components*s.byteLength;case ha:return t*e*4/s.components*s.byteLength;case Gs:case Ws:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xs:case Ys:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xo:case Eo:return Math.max(t,16)*Math.max(e,8)/4;case _o:case Mo:return Math.max(t,8)*Math.max(e,8)/2;case So:case yo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Co:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Po:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Do:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qs:case zo:case Ho:return Math.ceil(t/4)*Math.ceil(e/4)*16;case dc:case ko:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vo:case Go:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function l_(t){switch(t){case xn:case nc:return{byteLength:1,components:1};case os:case ic:case cs:return{byteLength:2,components:1};case oa:case aa:return{byteLength:2,components:4};case Qn:case ra:case gn:return{byteLength:4,components:1};case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function c_(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,d=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,_){return m?new OffscreenCanvas(y,_):nr("canvas")}function x(y,_,U){let X=1;const K=Ae(y);if((K.width>U||K.height>U)&&(X=U/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const W=Math.floor(X*K.width),ve=Math.floor(X*K.height);f===void 0&&(f=v(W,ve));const ne=_?v(W,ve):f;return ne.width=W,ne.height=ve,ne.getContext("2d").drawImage(y,0,0,W,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+ve+")."),ne}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function h(y){return y.generateMipmaps&&y.minFilter!==Vt&&y.minFilter!==kt}function u(y){t.generateMipmap(y)}function w(y,_,U,X,K=!1){if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let W=_;if(_===t.RED&&(U===t.FLOAT&&(W=t.R32F),U===t.HALF_FLOAT&&(W=t.R16F),U===t.UNSIGNED_BYTE&&(W=t.R8)),_===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.R8UI),U===t.UNSIGNED_SHORT&&(W=t.R16UI),U===t.UNSIGNED_INT&&(W=t.R32UI),U===t.BYTE&&(W=t.R8I),U===t.SHORT&&(W=t.R16I),U===t.INT&&(W=t.R32I)),_===t.RG&&(U===t.FLOAT&&(W=t.RG32F),U===t.HALF_FLOAT&&(W=t.RG16F),U===t.UNSIGNED_BYTE&&(W=t.RG8)),_===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RG8UI),U===t.UNSIGNED_SHORT&&(W=t.RG16UI),U===t.UNSIGNED_INT&&(W=t.RG32UI),U===t.BYTE&&(W=t.RG8I),U===t.SHORT&&(W=t.RG16I),U===t.INT&&(W=t.RG32I)),_===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RGB8UI),U===t.UNSIGNED_SHORT&&(W=t.RGB16UI),U===t.UNSIGNED_INT&&(W=t.RGB32UI),U===t.BYTE&&(W=t.RGB8I),U===t.SHORT&&(W=t.RGB16I),U===t.INT&&(W=t.RGB32I)),_===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),U===t.UNSIGNED_INT&&(W=t.RGBA32UI),U===t.BYTE&&(W=t.RGBA8I),U===t.SHORT&&(W=t.RGBA16I),U===t.INT&&(W=t.RGBA32I)),_===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),_===t.RGBA){const ve=K?Js:Ge.getTransfer(X);U===t.FLOAT&&(W=t.RGBA32F),U===t.HALF_FLOAT&&(W=t.RGBA16F),U===t.UNSIGNED_BYTE&&(W=ve===it?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function S(y,_){let U;return y?_===null||_===Qn||_===Ii?U=t.DEPTH24_STENCIL8:_===gn?U=t.DEPTH32F_STENCIL8:_===os&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Qn||_===Ii?U=t.DEPTH_COMPONENT24:_===gn?U=t.DEPTH_COMPONENT32F:_===os&&(U=t.DEPTH_COMPONENT16),U}function T(y,_){return h(y)===!0||y.isFramebufferTexture&&y.minFilter!==Vt&&y.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function N(y){const _=y.target;_.removeEventListener("dispose",N),b(_),_.isVideoTexture&&d.delete(_)}function C(y){const _=y.target;_.removeEventListener("dispose",C),ee(_)}function b(y){const _=i.get(y);if(_.__webglInit===void 0)return;const U=y.source,X=p.get(U);if(X){const K=X[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&F(y),Object.keys(X).length===0&&p.delete(U)}i.remove(y)}function F(y){const _=i.get(y);t.deleteTexture(_.__webglTexture);const U=y.source,X=p.get(U);delete X[_.__cacheKey],o.memory.textures--}function ee(y){const _=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let K=0;K<_.__webglFramebuffer[X].length;K++)t.deleteFramebuffer(_.__webglFramebuffer[X][K]);else t.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)t.deleteFramebuffer(_.__webglFramebuffer[X]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=y.textures;for(let X=0,K=U.length;X<K;X++){const W=i.get(U[X]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(U[X])}i.remove(y)}let g=0;function E(){g=0}function V(){const y=g;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),g+=1,y}function z(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function Y(y,_){const U=i.get(y);if(y.isVideoTexture&&we(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qe(U,y,_);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+_)}function Z(y,_){const U=i.get(y);if(y.version>0&&U.__version!==y.version){qe(U,y,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+_)}function k(y,_){const U=i.get(y);if(y.version>0&&U.__version!==y.version){qe(U,y,_);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+_)}function $(y,_){const U=i.get(y);if(y.version>0&&U.__version!==y.version){G(U,y,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+_)}const H={[go]:t.REPEAT,[Jn]:t.CLAMP_TO_EDGE,[vo]:t.MIRRORED_REPEAT},ae={[Vt]:t.NEAREST,[Lu]:t.NEAREST_MIPMAP_NEAREST,[Ms]:t.NEAREST_MIPMAP_LINEAR,[kt]:t.LINEAR,[Ar]:t.LINEAR_MIPMAP_NEAREST,[Rn]:t.LINEAR_MIPMAP_LINEAR},le={[Ou]:t.NEVER,[Vu]:t.ALWAYS,[Fu]:t.LESS,[uc]:t.LEQUAL,[Bu]:t.EQUAL,[ku]:t.GEQUAL,[zu]:t.GREATER,[Hu]:t.NOTEQUAL};function ge(y,_){if(_.type===gn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kt||_.magFilter===Ar||_.magFilter===Ms||_.magFilter===Rn||_.minFilter===kt||_.minFilter===Ar||_.minFilter===Ms||_.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,H[_.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,H[_.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,H[_.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,ae[_.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,ae[_.minFilter]),_.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==Ms&&_.minFilter!==Rn||_.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function ke(y,_){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",N));const X=_.source;let K=p.get(X);K===void 0&&(K={},p.set(X,K));const W=z(_);if(W!==y.__cacheKey){K[W]===void 0&&(K[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[W].usedTimes++;const ve=K[y.__cacheKey];ve!==void 0&&(K[y.__cacheKey].usedTimes--,ve.usedTimes===0&&F(_)),y.__cacheKey=W,y.__webglTexture=K[W].texture}return U}function qe(y,_,U){let X=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=t.TEXTURE_3D);const K=ke(y,_),W=_.source;n.bindTexture(X,y.__webglTexture,t.TEXTURE0+U);const ve=i.get(W);if(W.version!==ve.__version||K===!0){n.activeTexture(t.TEXTURE0+U);const ne=Ge.getPrimaries(Ge.workingColorSpace),he=_.colorSpace===Cn?null:Ge.getPrimaries(_.colorSpace),He=_.colorSpace===Cn||ne===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let J=x(_.image,!1,s.maxTextureSize);J=tt(_,J);const de=r.convert(_.format,_.colorSpace),Te=r.convert(_.type);let be=w(_.internalFormat,de,Te,_.colorSpace,_.isVideoTexture);ge(X,_);let ue;const De=_.mipmaps,Re=_.isVideoTexture!==!0,Qe=ve.__version===void 0||K===!0,R=W.dataReady,re=T(_,J);if(_.isDepthTexture)be=S(_.format===Ui,_.type),Qe&&(Re?n.texStorage2D(t.TEXTURE_2D,1,be,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,be,J.width,J.height,0,de,Te,null));else if(_.isDataTexture)if(De.length>0){Re&&Qe&&n.texStorage2D(t.TEXTURE_2D,re,be,De[0].width,De[0].height);for(let B=0,q=De.length;B<q;B++)ue=De[B],Re?R&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ue.width,ue.height,de,Te,ue.data):n.texImage2D(t.TEXTURE_2D,B,be,ue.width,ue.height,0,de,Te,ue.data);_.generateMipmaps=!1}else Re?(Qe&&n.texStorage2D(t.TEXTURE_2D,re,be,J.width,J.height),R&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,de,Te,J.data)):n.texImage2D(t.TEXTURE_2D,0,be,J.width,J.height,0,de,Te,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Re&&Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,be,De[0].width,De[0].height,J.depth);for(let B=0,q=De.length;B<q;B++)if(ue=De[B],_.format!==Kt)if(de!==null)if(Re){if(R)if(_.layerUpdates.size>0){const ie=Ul(ue.width,ue.height,_.format,_.type);for(const oe of _.layerUpdates){const Be=ue.data.subarray(oe*ie/ue.data.BYTES_PER_ELEMENT,(oe+1)*ie/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,oe,ue.width,ue.height,1,de,Be,0,0)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ue.width,ue.height,J.depth,de,ue.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,B,be,ue.width,ue.height,J.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?R&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,B,0,0,0,ue.width,ue.height,J.depth,de,Te,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,B,be,ue.width,ue.height,J.depth,0,de,Te,ue.data)}else{Re&&Qe&&n.texStorage2D(t.TEXTURE_2D,re,be,De[0].width,De[0].height);for(let B=0,q=De.length;B<q;B++)ue=De[B],_.format!==Kt?de!==null?Re?R&&n.compressedTexSubImage2D(t.TEXTURE_2D,B,0,0,ue.width,ue.height,de,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,B,be,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?R&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,ue.width,ue.height,de,Te,ue.data):n.texImage2D(t.TEXTURE_2D,B,be,ue.width,ue.height,0,de,Te,ue.data)}else if(_.isDataArrayTexture)if(Re){if(Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,be,J.width,J.height,J.depth),R)if(_.layerUpdates.size>0){const B=Ul(J.width,J.height,_.format,_.type);for(const q of _.layerUpdates){const ie=J.data.subarray(q*B/J.data.BYTES_PER_ELEMENT,(q+1)*B/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,J.width,J.height,1,de,Te,ie)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,Te,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,J.width,J.height,J.depth,0,de,Te,J.data);else if(_.isData3DTexture)Re?(Qe&&n.texStorage3D(t.TEXTURE_3D,re,be,J.width,J.height,J.depth),R&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,Te,J.data)):n.texImage3D(t.TEXTURE_3D,0,be,J.width,J.height,J.depth,0,de,Te,J.data);else if(_.isFramebufferTexture){if(Qe)if(Re)n.texStorage2D(t.TEXTURE_2D,re,be,J.width,J.height);else{let B=J.width,q=J.height;for(let ie=0;ie<re;ie++)n.texImage2D(t.TEXTURE_2D,ie,be,B,q,0,de,Te,null),B>>=1,q>>=1}}else if(De.length>0){if(Re&&Qe){const B=Ae(De[0]);n.texStorage2D(t.TEXTURE_2D,re,be,B.width,B.height)}for(let B=0,q=De.length;B<q;B++)ue=De[B],Re?R&&n.texSubImage2D(t.TEXTURE_2D,B,0,0,de,Te,ue):n.texImage2D(t.TEXTURE_2D,B,be,de,Te,ue);_.generateMipmaps=!1}else if(Re){if(Qe){const B=Ae(J);n.texStorage2D(t.TEXTURE_2D,re,be,B.width,B.height)}R&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Te,J)}else n.texImage2D(t.TEXTURE_2D,0,be,de,Te,J);h(_)&&u(X),ve.__version=W.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function G(y,_,U){if(_.image.length!==6)return;const X=ke(y,_),K=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+U);const W=i.get(K);if(K.version!==W.__version||X===!0){n.activeTexture(t.TEXTURE0+U);const ve=Ge.getPrimaries(Ge.workingColorSpace),ne=_.colorSpace===Cn?null:Ge.getPrimaries(_.colorSpace),he=_.colorSpace===Cn||ve===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const He=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,de=[];for(let q=0;q<6;q++)!He&&!J?de[q]=x(_.image[q],!0,s.maxCubemapSize):de[q]=J?_.image[q].image:_.image[q],de[q]=tt(_,de[q]);const Te=de[0],be=r.convert(_.format,_.colorSpace),ue=r.convert(_.type),De=w(_.internalFormat,be,ue,_.colorSpace),Re=_.isVideoTexture!==!0,Qe=W.__version===void 0||X===!0,R=K.dataReady;let re=T(_,Te);ge(t.TEXTURE_CUBE_MAP,_);let B;if(He){Re&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,re,De,Te.width,Te.height);for(let q=0;q<6;q++){B=de[q].mipmaps;for(let ie=0;ie<B.length;ie++){const oe=B[ie];_.format!==Kt?be!==null?Re?R&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,oe.width,oe.height,be,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,De,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,oe.width,oe.height,be,ue,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,De,oe.width,oe.height,0,be,ue,oe.data)}}}else{if(B=_.mipmaps,Re&&Qe){B.length>0&&re++;const q=Ae(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,re,De,q.width,q.height)}for(let q=0;q<6;q++)if(J){Re?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,de[q].width,de[q].height,be,ue,de[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,De,de[q].width,de[q].height,0,be,ue,de[q].data);for(let ie=0;ie<B.length;ie++){const Be=B[ie].image[q].image;Re?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,Be.width,Be.height,be,ue,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,De,Be.width,Be.height,0,be,ue,Be.data)}}else{Re?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,be,ue,de[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,De,be,ue,de[q]);for(let ie=0;ie<B.length;ie++){const oe=B[ie];Re?R&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,be,ue,oe.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,De,be,ue,oe.image[q])}}}h(_)&&u(t.TEXTURE_CUBE_MAP),W.__version=K.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function j(y,_,U,X,K,W){const ve=r.convert(U.format,U.colorSpace),ne=r.convert(U.type),he=w(U.internalFormat,ve,ne,U.colorSpace);if(!i.get(_).__hasExternalTextures){const J=Math.max(1,_.width>>W),de=Math.max(1,_.height>>W);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,W,he,J,de,_.depth,0,ve,ne,null):n.texImage2D(K,W,he,J,de,0,ve,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),ze(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,K,i.get(U).__webglTexture,0,Ue(_)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,K,i.get(U).__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(y,_,U){if(t.bindRenderbuffer(t.RENDERBUFFER,y),_.depthBuffer){const X=_.depthTexture,K=X&&X.isDepthTexture?X.type:null,W=S(_.stencilBuffer,K),ve=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=Ue(_);ze(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,W,_.width,_.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,W,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,W,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,y)}else{const X=_.textures;for(let K=0;K<X.length;K++){const W=X[K],ve=r.convert(W.format,W.colorSpace),ne=r.convert(W.type),he=w(W.internalFormat,ve,ne,W.colorSpace),He=Ue(_);U&&ze(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,he,_.width,_.height):ze(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,he,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,he,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);const X=i.get(_.depthTexture).__webglTexture,K=Ue(_);if(_.depthTexture.format===bi)ze(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0);else if(_.depthTexture.format===Ui)ze(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Ce(y){const _=i.get(y),U=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const X=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=X}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ce(_.__webglFramebuffer,y)}else if(U){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=t.createRenderbuffer(),pe(_.__webglDepthbuffer[X],y,!1);else{const K=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,W)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),pe(_.__webglDepthbuffer,y,!1);else{const X=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,K)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Se(y,_,U){const X=i.get(y);_!==void 0&&j(X.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ce(y)}function Oe(y){const _=y.texture,U=i.get(y),X=i.get(_);y.addEventListener("dispose",C);const K=y.textures,W=y.isWebGLCubeRenderTarget===!0,ve=K.length>1;if(ve||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=_.version,o.memory.textures++),W){U.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ne]=[];for(let he=0;he<_.mipmaps.length;he++)U.__webglFramebuffer[ne][he]=t.createFramebuffer()}else U.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)U.__webglFramebuffer[ne]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ve)for(let ne=0,he=K.length;ne<he;ne++){const He=i.get(K[ne]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),o.memory.textures++)}if(y.samples>0&&ze(y)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){const he=K[ne];U.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ne]);const He=r.convert(he.format,he.colorSpace),J=r.convert(he.type),de=w(he.internalFormat,He,J,he.colorSpace,y.isXRRenderTarget===!0),Te=Ue(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,de,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,U.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(U.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),ge(t.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)j(U.__webglFramebuffer[ne][he],y,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else j(U.__webglFramebuffer[ne],y,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);h(_)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let ne=0,he=K.length;ne<he;ne++){const He=K[ne],J=i.get(He);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),ge(t.TEXTURE_2D,He),j(U.__webglFramebuffer,y,He,t.COLOR_ATTACHMENT0+ne,t.TEXTURE_2D,0),h(He)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ne=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,X.__webglTexture),ge(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)j(U.__webglFramebuffer[he],y,_,t.COLOR_ATTACHMENT0,ne,he);else j(U.__webglFramebuffer,y,_,t.COLOR_ATTACHMENT0,ne,0);h(_)&&u(ne),n.unbindTexture()}y.depthBuffer&&Ce(y)}function je(y){const _=y.textures;for(let U=0,X=_.length;U<X;U++){const K=_[U];if(h(K)){const W=y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ve=i.get(K).__webglTexture;n.bindTexture(W,ve),u(W),n.unbindTexture()}}}const Fe=[],A=[];function Pt(y){if(y.samples>0){if(ze(y)===!1){const _=y.textures,U=y.width,X=y.height;let K=t.COLOR_BUFFER_BIT;const W=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(y),ne=_.length>1;if(ne)for(let he=0;he<_.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<_.length;he++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const He=i.get(_[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,U,X,0,0,U,X,K,t.NEAREST),l===!0&&(Fe.length=0,A.length=0,Fe.push(t.COLOR_ATTACHMENT0+he),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Fe.push(W),A.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,A)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let he=0;he<_.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const He=i.get(_[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Ue(y){return Math.min(s.maxSamples,y.samples)}function ze(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function we(y){const _=o.render.frame;d.get(y)!==_&&(d.set(y,_),y.update())}function tt(y,_){const U=y.colorSpace,X=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||U!==Mn&&U!==Cn&&(Ge.getTransfer(U)===it?(X!==Kt||K!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function Ae(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=E,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=k,this.setTextureCube=$,this.rebindTextures=Se,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=j,this.useMultisampledRTT=ze}function h_(t,e){function n(i,s=Cn){let r;const o=Ge.getTransfer(s);if(i===xn)return t.UNSIGNED_BYTE;if(i===oa)return t.UNSIGNED_SHORT_4_4_4_4;if(i===aa)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sc)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===nc)return t.BYTE;if(i===ic)return t.SHORT;if(i===os)return t.UNSIGNED_SHORT;if(i===ra)return t.INT;if(i===Qn)return t.UNSIGNED_INT;if(i===gn)return t.FLOAT;if(i===cs)return t.HALF_FLOAT;if(i===rc)return t.ALPHA;if(i===oc)return t.RGB;if(i===Kt)return t.RGBA;if(i===ac)return t.LUMINANCE;if(i===lc)return t.LUMINANCE_ALPHA;if(i===bi)return t.DEPTH_COMPONENT;if(i===Ui)return t.DEPTH_STENCIL;if(i===cc)return t.RED;if(i===la)return t.RED_INTEGER;if(i===hc)return t.RG;if(i===ca)return t.RG_INTEGER;if(i===ha)return t.RGBA_INTEGER;if(i===Gs||i===Ws||i===Xs||i===Ys)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_o||i===xo||i===Mo||i===Eo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===So||i===yo||i===wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===So||i===yo)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===To||i===bo||i===Ao||i===Co||i===Ro||i===Po||i===Lo||i===Io||i===Uo||i===Do||i===No||i===Oo||i===Fo||i===Bo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===To)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ao)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Co)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ro)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Po)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Io)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Do)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===No)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qs||i===zo||i===Ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===qs)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dc||i===ko||i===Vo||i===Go)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===qs)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ii?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class d_ extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Si extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u_={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const h=n.getJointPose(x,i),u=this._getHandJoint(c,x);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const f_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new wt,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fn({vertexShader:f_,fragmentShader:p_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gt(new fr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g_ extends Oi{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,p=null,m=null,v=null;const x=new m_,h=n.getContextAttributes();let u=null,w=null;const S=[],T=[],N=new Ke;let C=null;const b=new Ot;b.layers.enable(1),b.viewport=new ot;const F=new Ot;F.layers.enable(2),F.viewport=new ot;const ee=[b,F],g=new d_;g.layers.enable(1),g.layers.enable(2);let E=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=S[G];return j===void 0&&(j=new to,S[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=S[G];return j===void 0&&(j=new to,S[G]=j),j.getGripSpace()},this.getHand=function(G){let j=S[G];return j===void 0&&(j=new to,S[G]=j),j.getHandSpace()};function z(G){const j=T.indexOf(G.inputSource);if(j===-1)return;const pe=S[j];pe!==void 0&&(pe.update(G.inputSource,G.frame,c||o),pe.dispatchEvent({type:G.type,data:G.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let G=0;G<S.length;G++){const j=T[G];j!==null&&(T[G]=null,S[G].disconnect(j))}E=null,V=null,x.reset(),e.setRenderTarget(u),m=null,p=null,f=null,s=null,w=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),h.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(N),s.renderState.layers===void 0){const j={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,n,j),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new On(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let j=null,pe=null,ce=null;h.depth&&(ce=h.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=h.stencil?Ui:bi,pe=h.stencil?Ii:Qn);const Ce={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:r};f=new XRWebGLBinding(s,n),p=f.createProjectionLayer(Ce),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new On(p.textureWidth,p.textureHeight,{format:Kt,type:xn,depthTexture:new wc(p.textureWidth,p.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(G){for(let j=0;j<G.removed.length;j++){const pe=G.removed[j],ce=T.indexOf(pe);ce>=0&&(T[ce]=null,S[ce].disconnect(pe))}for(let j=0;j<G.added.length;j++){const pe=G.added[j];let ce=T.indexOf(pe);if(ce===-1){for(let Se=0;Se<S.length;Se++)if(Se>=T.length){T.push(pe),ce=Se;break}else if(T[Se]===null){T[Se]=pe,ce=Se;break}if(ce===-1)break}const Ce=S[ce];Ce&&Ce.connect(pe)}}const k=new I,$=new I;function H(G,j,pe){k.setFromMatrixPosition(j.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const ce=k.distanceTo($),Ce=j.projectionMatrix.elements,Se=pe.projectionMatrix.elements,Oe=Ce[14]/(Ce[10]-1),je=Ce[14]/(Ce[10]+1),Fe=(Ce[9]+1)/Ce[5],A=(Ce[9]-1)/Ce[5],Pt=(Ce[8]-1)/Ce[0],Ue=(Se[8]+1)/Se[0],ze=Oe*Pt,we=Oe*Ue,tt=ce/(-Pt+Ue),Ae=tt*-Pt;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ae),G.translateZ(tt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ce[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const y=Oe+tt,_=je+tt,U=ze-Ae,X=we+(ce-Ae),K=Fe*je/_*y,W=A*je/_*y;G.projectionMatrix.makePerspective(U,X,K,W,y,_),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ae(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let j=G.near,pe=G.far;x.texture!==null&&(x.depthNear>0&&(j=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),g.near=F.near=b.near=j,g.far=F.far=b.far=pe,(E!==g.near||V!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),E=g.near,V=g.far);const ce=G.parent,Ce=g.cameras;ae(g,ce);for(let Se=0;Se<Ce.length;Se++)ae(Ce[Se],ce);Ce.length===2?H(g,b,F):g.projectionMatrix.copy(b.projectionMatrix),le(G,g,ce)};function le(G,j,pe){pe===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(pe.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=as*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(G){l=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(g)};let ge=null;function ke(G,j){if(d=j.getViewerPose(c||o),v=j,d!==null){const pe=d.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let ce=!1;pe.length!==g.cameras.length&&(g.cameras.length=0,ce=!0);for(let Se=0;Se<pe.length;Se++){const Oe=pe[Se];let je=null;if(m!==null)je=m.getViewport(Oe);else{const A=f.getViewSubImage(p,Oe);je=A.viewport,Se===0&&(e.setRenderTargetTextures(w,A.colorTexture,p.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(w))}let Fe=ee[Se];Fe===void 0&&(Fe=new Ot,Fe.layers.enable(Se),Fe.viewport=new ot,ee[Se]=Fe),Fe.matrix.fromArray(Oe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Oe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(je.x,je.y,je.width,je.height),Se===0&&(g.matrix.copy(Fe.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ce===!0&&g.cameras.push(Fe)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Se=f.getDepthInformation(pe[0]);Se&&Se.isValid&&Se.texture&&x.init(e,Se,s.renderState)}}for(let pe=0;pe<S.length;pe++){const ce=T[pe],Ce=S[pe];ce!==null&&Ce!==void 0&&Ce.update(ce,j,c||o)}ge&&ge(G,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),v=null}const qe=new yc;qe.setAnimationLoop(ke),this.setAnimationLoop=function(G){ge=G},this.dispose=function(){}}}const qn=new an,v_=new et;function __(t,e){function n(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function i(h,u){u.color.getRGB(h.fogColor.value,Mc(t)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function s(h,u,w,S,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(h,u):u.isMeshToonMaterial?(r(h,u),f(h,u)):u.isMeshPhongMaterial?(r(h,u),d(h,u)):u.isMeshStandardMaterial?(r(h,u),p(h,u),u.isMeshPhysicalMaterial&&m(h,u,T)):u.isMeshMatcapMaterial?(r(h,u),v(h,u)):u.isMeshDepthMaterial?r(h,u):u.isMeshDistanceMaterial?(r(h,u),x(h,u)):u.isMeshNormalMaterial?r(h,u):u.isLineBasicMaterial?(o(h,u),u.isLineDashedMaterial&&a(h,u)):u.isPointsMaterial?l(h,u,w,S):u.isSpriteMaterial?c(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,n(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,n(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===Ct&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,n(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===Ct&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,n(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,n(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const w=e.get(u),S=w.envMap,T=w.envMapRotation;S&&(h.envMap.value=S,qn.copy(T),qn.x*=-1,qn.y*=-1,qn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.envMapRotation.value.setFromMatrix4(v_.makeRotationFromEuler(qn)),h.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap&&(h.lightMap.value=u.lightMap,h.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,h.lightMapTransform)),u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,h.aoMapTransform))}function o(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,n(u.map,h.mapTransform))}function a(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function l(h,u,w,S){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*w,h.scale.value=S*.5,u.map&&(h.map.value=u.map,n(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function c(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,n(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function d(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function f(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function p(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,h.roughnessMapTransform)),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function m(h,u,w){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ct&&h.clearcoatNormalScale.value.negate())),u.dispersion>0&&(h.dispersion.value=u.dispersion),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=w.texture,h.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,h.specularIntensityMapTransform))}function v(h,u){u.matcap&&(h.matcap.value=u.matcap)}function x(h,u){const w=e.get(u).light;h.referencePosition.value.setFromMatrixPosition(w.matrixWorld),h.nearDistance.value=w.shadow.camera.near,h.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function x_(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const T=S.program;i.uniformBlockBinding(w,T)}function c(w,S){let T=s[w.id];T===void 0&&(v(w),T=d(w),s[w.id]=T,w.addEventListener("dispose",h));const N=S.program;i.updateUBOMapping(w,N);const C=e.render.frame;r[w.id]!==C&&(p(w),r[w.id]=C)}function d(w){const S=f();w.__bindingPointIndex=S;const T=t.createBuffer(),N=w.__size,C=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,N,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,T),T}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const S=s[w.id],T=w.uniforms,N=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let C=0,b=T.length;C<b;C++){const F=Array.isArray(T[C])?T[C]:[T[C]];for(let ee=0,g=F.length;ee<g;ee++){const E=F[ee];if(m(E,C,ee,N)===!0){const V=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let Y=0;for(let Z=0;Z<z.length;Z++){const k=z[Z],$=x(k);typeof k=="number"||typeof k=="boolean"?(E.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,V+Y,E.__data)):k.isMatrix3?(E.__data[0]=k.elements[0],E.__data[1]=k.elements[1],E.__data[2]=k.elements[2],E.__data[3]=0,E.__data[4]=k.elements[3],E.__data[5]=k.elements[4],E.__data[6]=k.elements[5],E.__data[7]=0,E.__data[8]=k.elements[6],E.__data[9]=k.elements[7],E.__data[10]=k.elements[8],E.__data[11]=0):(k.toArray(E.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(w,S,T,N){const C=w.value,b=S+"_"+T;if(N[b]===void 0)return typeof C=="number"||typeof C=="boolean"?N[b]=C:N[b]=C.clone(),!0;{const F=N[b];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return N[b]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function v(w){const S=w.uniforms;let T=0;const N=16;for(let b=0,F=S.length;b<F;b++){const ee=Array.isArray(S[b])?S[b]:[S[b]];for(let g=0,E=ee.length;g<E;g++){const V=ee[g],z=Array.isArray(V.value)?V.value:[V.value];for(let Y=0,Z=z.length;Y<Z;Y++){const k=z[Y],$=x(k),H=T%N,ae=H%$.boundary,le=H+ae;T+=ae,le!==0&&N-le<$.storage&&(T+=N-le),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=$.storage}}}const C=T%N;return C>0&&(T+=N-C),w.__size=T,w.__cache={},this}function x(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function h(w){const S=w.target;S.removeEventListener("dispose",h);const T=o.indexOf(S.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(const w in s)t.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class M_{constructor(e={}){const{canvas:n=of(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,h=null;const u=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this.toneMapping=Ln,this.toneMappingExposure=1;const S=this;let T=!1,N=0,C=0,b=null,F=-1,ee=null;const g=new ot,E=new ot;let V=null;const z=new Je(0);let Y=0,Z=n.width,k=n.height,$=1,H=null,ae=null;const le=new ot(0,0,Z,k),ge=new ot(0,0,Z,k);let ke=!1;const qe=new ma;let G=!1,j=!1;const pe=new et,ce=new et,Ce=new I,Se=new ot,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Fe(){return b===null?$:1}let A=i;function Pt(M,P){return n.getContext(M,P)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sa}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",ie,!1),n.addEventListener("webglcontextcreationerror",oe,!1),A===null){const P="webgl2";if(A=Pt(P,M),A===null)throw Pt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ue,ze,we,tt,Ae,y,_,U,X,K,W,ve,ne,he,He,J,de,Te,be,ue,De,Re,Qe,R;function re(){Ue=new Tg(A),Ue.init(),Re=new h_(A,Ue),ze=new _g(A,Ue,e,Re),we=new a_(A),ze.reverseDepthBuffer&&we.buffers.depth.setReversed(!0),tt=new Cg(A),Ae=new Yv,y=new c_(A,Ue,we,Ae,ze,Re,tt),_=new Mg(S),U=new wg(S),X=new Df(A),Qe=new gg(A,X),K=new bg(A,X,tt,Qe),W=new Pg(A,K,X,tt),be=new Rg(A,ze,y),J=new xg(Ae),ve=new Xv(S,_,U,Ue,ze,Qe,J),ne=new __(S,Ae),he=new $v,He=new e_(Ue),Te=new mg(S,_,U,we,W,p,l),de=new r_(S,W,ze),R=new x_(A,tt,ze,we),ue=new vg(A,Ue,tt),De=new Ag(A,Ue,tt),tt.programs=ve.programs,S.capabilities=ze,S.extensions=Ue,S.properties=Ae,S.renderLists=he,S.shadowMap=de,S.state=we,S.info=tt}re();const B=new g_(S,A);this.xr=B,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=Ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(Z,k,!1))},this.getSize=function(M){return M.set(Z,k)},this.setSize=function(M,P,D=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,k=P,n.width=Math.floor(M*$),n.height=Math.floor(P*$),D===!0&&(n.style.width=M+"px",n.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(Z*$,k*$).floor()},this.setDrawingBufferSize=function(M,P,D){Z=M,k=P,$=D,n.width=Math.floor(M*D),n.height=Math.floor(P*D),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(g)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,P,D,O){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,P,D,O),we.viewport(g.copy(le).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(ge)},this.setScissor=function(M,P,D,O){M.isVector4?ge.set(M.x,M.y,M.z,M.w):ge.set(M,P,D,O),we.scissor(E.copy(ge).multiplyScalar($).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(M){we.setScissorTest(ke=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){ae=M},this.getClearColor=function(M){return M.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(M=!0,P=!0,D=!0){let O=0;if(M){let L=!1;if(b!==null){const Q=b.texture.format;L=Q===ha||Q===ca||Q===la}if(L){const Q=b.texture.type,se=Q===xn||Q===Qn||Q===os||Q===Ii||Q===oa||Q===aa,fe=Te.getClearColor(),me=Te.getClearAlpha(),Ee=fe.r,ye=fe.g,_e=fe.b;se?(m[0]=Ee,m[1]=ye,m[2]=_e,m[3]=me,A.clearBufferuiv(A.COLOR,0,m)):(v[0]=Ee,v[1]=ye,v[2]=_e,v[3]=me,A.clearBufferiv(A.COLOR,0,v))}else O|=A.COLOR_BUFFER_BIT}P&&(O|=A.DEPTH_BUFFER_BIT,A.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),D&&(O|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",ie,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),he.dispose(),He.dispose(),Ae.dispose(),_.dispose(),U.dispose(),W.dispose(),Qe.dispose(),R.dispose(),ve.dispose(),B.dispose(),B.removeEventListener("sessionstart",La),B.removeEventListener("sessionend",Ia),kn.stop()};function q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const M=tt.autoReset,P=de.enabled,D=de.autoUpdate,O=de.needsUpdate,L=de.type;re(),tt.autoReset=M,de.enabled=P,de.autoUpdate=D,de.needsUpdate=O,de.type=L}function oe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Be(M){const P=M.target;P.removeEventListener("dispose",Be),at(P)}function at(M){bt(M),Ae.remove(M)}function bt(M){const P=Ae.get(M).programs;P!==void 0&&(P.forEach(function(D){ve.releaseProgram(D)}),M.isShaderMaterial&&ve.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,D,O,L,Q){P===null&&(P=Oe);const se=L.isMesh&&L.matrixWorld.determinant()<0,fe=Jd(M,P,D,O,L);we.setMaterial(O,se);let me=D.index,Ee=1;if(O.wireframe===!0){if(me=K.getWireframeAttribute(D),me===void 0)return;Ee=2}const ye=D.drawRange,_e=D.attributes.position;let $e=ye.start*Ee,nt=(ye.start+ye.count)*Ee;Q!==null&&($e=Math.max($e,Q.start*Ee),nt=Math.min(nt,(Q.start+Q.count)*Ee)),me!==null?($e=Math.max($e,0),nt=Math.min(nt,me.count)):_e!=null&&($e=Math.max($e,0),nt=Math.min(nt,_e.count));const st=nt-$e;if(st<0||st===1/0)return;Qe.setup(L,O,fe,D,me);let Lt,We=ue;if(me!==null&&(Lt=X.get(me),We=De,We.setIndex(Lt)),L.isMesh)O.wireframe===!0?(we.setLineWidth(O.wireframeLinewidth*Fe()),We.setMode(A.LINES)):We.setMode(A.TRIANGLES);else if(L.isLine){let xe=O.linewidth;xe===void 0&&(xe=1),we.setLineWidth(xe*Fe()),L.isLineSegments?We.setMode(A.LINES):L.isLineLoop?We.setMode(A.LINE_LOOP):We.setMode(A.LINE_STRIP)}else L.isPoints?We.setMode(A.POINTS):L.isSprite&&We.setMode(A.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)We.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))We.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const xe=L._multiDrawStarts,mt=L._multiDrawCounts,Xe=L._multiDrawCount,Wt=me?X.get(me).bytesPerElement:1,ni=Ae.get(O).currentProgram.getUniforms();for(let It=0;It<Xe;It++)ni.setValue(A,"_gl_DrawID",It),We.render(xe[It]/Wt,mt[It])}else if(L.isInstancedMesh)We.renderInstances($e,st,L.count);else if(D.isInstancedBufferGeometry){const xe=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,mt=Math.min(D.instanceCount,xe);We.renderInstances($e,st,mt)}else We.render($e,st)};function Ve(M,P,D){M.transparent===!0&&M.side===mn&&M.forceSinglePass===!1?(M.side=Ct,M.needsUpdate=!0,xs(M,P,D),M.side=Nn,M.needsUpdate=!0,xs(M,P,D),M.side=mn):xs(M,P,D)}this.compile=function(M,P,D=null){D===null&&(D=M),h=He.get(D),h.init(P),w.push(h),D.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),M!==D&&M.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(h.pushLight(L),L.castShadow&&h.pushShadow(L))}),h.setupLights();const O=new Set;return M.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const Q=L.material;if(Q)if(Array.isArray(Q))for(let se=0;se<Q.length;se++){const fe=Q[se];Ve(fe,D,L),O.add(fe)}else Ve(Q,D,L),O.add(Q)}),w.pop(),h=null,O},this.compileAsync=function(M,P,D=null){const O=this.compile(M,P,D);return new Promise(L=>{function Q(){if(O.forEach(function(se){Ae.get(se).currentProgram.isReady()&&O.delete(se)}),O.size===0){L(M);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let At=null;function ln(M){At&&At(M)}function La(){kn.stop()}function Ia(){kn.start()}const kn=new yc;kn.setAnimationLoop(ln),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(M){At=M,B.setAnimationLoop(M),M===null?kn.stop():kn.start()},B.addEventListener("sessionstart",La),B.addEventListener("sessionend",Ia),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(P),P=B.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,P,b),h=He.get(M,w.length),h.init(P),w.push(h),ce.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),qe.setFromProjectionMatrix(ce),j=this.localClippingEnabled,G=J.init(this.clippingPlanes,j),x=he.get(M,u.length),x.init(),u.push(x),B.enabled===!0&&B.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&yr(Q,P,-1/0,S.sortObjects)}yr(M,P,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(H,ae),je=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,je&&Te.addToRenderList(x,M),this.info.render.frame++,G===!0&&J.beginShadows();const D=h.state.shadowsArray;de.render(D,M,P),G===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=x.opaque,L=x.transmissive;if(h.setupLights(),P.isArrayCamera){const Q=P.cameras;if(L.length>0)for(let se=0,fe=Q.length;se<fe;se++){const me=Q[se];Da(O,L,M,me)}je&&Te.render(M);for(let se=0,fe=Q.length;se<fe;se++){const me=Q[se];Ua(x,M,me,me.viewport)}}else L.length>0&&Da(O,L,M,P),je&&Te.render(M),Ua(x,M,P);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(S,M,P),Qe.resetDefaultState(),F=-1,ee=null,w.pop(),w.length>0?(h=w[w.length-1],G===!0&&J.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function yr(M,P,D,O){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)D=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||qe.intersectsSprite(M)){O&&Se.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);const se=W.update(M),fe=M.material;fe.visible&&x.push(M,se,fe,D,Se.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||qe.intersectsObject(M))){const se=W.update(M),fe=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Se.copy(M.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Se.copy(se.boundingSphere.center)),Se.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(fe)){const me=se.groups;for(let Ee=0,ye=me.length;Ee<ye;Ee++){const _e=me[Ee],$e=fe[_e.materialIndex];$e&&$e.visible&&x.push(M,se,$e,D,Se.z,_e)}}else fe.visible&&x.push(M,se,fe,D,Se.z,null)}}const Q=M.children;for(let se=0,fe=Q.length;se<fe;se++)yr(Q[se],P,D,O)}function Ua(M,P,D,O){const L=M.opaque,Q=M.transmissive,se=M.transparent;h.setupLightsView(D),G===!0&&J.setGlobalState(S.clippingPlanes,D),O&&we.viewport(g.copy(O)),L.length>0&&_s(L,P,D),Q.length>0&&_s(Q,P,D),se.length>0&&_s(se,P,D),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Da(M,P,D,O){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[O.id]===void 0&&(h.state.transmissionRenderTarget[O.id]=new On(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?cs:xn,minFilter:Rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const Q=h.state.transmissionRenderTarget[O.id],se=O.viewport||g;Q.setSize(se.z,se.w);const fe=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(z),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),je&&Te.render(D);const me=S.toneMapping;S.toneMapping=Ln;const Ee=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),h.setupLightsView(O),G===!0&&J.setGlobalState(S.clippingPlanes,O),_s(M,D,O),y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let _e=0,$e=P.length;_e<$e;_e++){const nt=P[_e],st=nt.object,Lt=nt.geometry,We=nt.material,xe=nt.group;if(We.side===mn&&st.layers.test(O.layers)){const mt=We.side;We.side=Ct,We.needsUpdate=!0,Na(st,D,O,Lt,We,xe),We.side=mt,We.needsUpdate=!0,ye=!0}}ye===!0&&(y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q))}S.setRenderTarget(fe),S.setClearColor(z,Y),Ee!==void 0&&(O.viewport=Ee),S.toneMapping=me}function _s(M,P,D){const O=P.isScene===!0?P.overrideMaterial:null;for(let L=0,Q=M.length;L<Q;L++){const se=M[L],fe=se.object,me=se.geometry,Ee=O===null?se.material:O,ye=se.group;fe.layers.test(D.layers)&&Na(fe,P,D,me,Ee,ye)}}function Na(M,P,D,O,L,Q){M.onBeforeRender(S,P,D,O,L,Q),M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),L.onBeforeRender(S,P,D,O,M,Q),L.transparent===!0&&L.side===mn&&L.forceSinglePass===!1?(L.side=Ct,L.needsUpdate=!0,S.renderBufferDirect(D,P,O,L,M,Q),L.side=Nn,L.needsUpdate=!0,S.renderBufferDirect(D,P,O,L,M,Q),L.side=mn):S.renderBufferDirect(D,P,O,L,M,Q),M.onAfterRender(S,P,D,O,L,Q)}function xs(M,P,D){P.isScene!==!0&&(P=Oe);const O=Ae.get(M),L=h.state.lights,Q=h.state.shadowsArray,se=L.state.version,fe=ve.getParameters(M,L.state,Q,P,D),me=ve.getProgramCacheKey(fe);let Ee=O.programs;O.environment=M.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(M.isMeshStandardMaterial?U:_).get(M.envMap||O.environment),O.envMapRotation=O.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Ee===void 0&&(M.addEventListener("dispose",Be),Ee=new Map,O.programs=Ee);let ye=Ee.get(me);if(ye!==void 0){if(O.currentProgram===ye&&O.lightsStateVersion===se)return Fa(M,fe),ye}else fe.uniforms=ve.getUniforms(M),M.onBeforeCompile(fe,S),ye=ve.acquireProgram(fe,me),Ee.set(me,ye),O.uniforms=fe.uniforms;const _e=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(_e.clippingPlanes=J.uniform),Fa(M,fe),O.needsLights=eu(M),O.lightsStateVersion=se,O.needsLights&&(_e.ambientLightColor.value=L.state.ambient,_e.lightProbe.value=L.state.probe,_e.directionalLights.value=L.state.directional,_e.directionalLightShadows.value=L.state.directionalShadow,_e.spotLights.value=L.state.spot,_e.spotLightShadows.value=L.state.spotShadow,_e.rectAreaLights.value=L.state.rectArea,_e.ltc_1.value=L.state.rectAreaLTC1,_e.ltc_2.value=L.state.rectAreaLTC2,_e.pointLights.value=L.state.point,_e.pointLightShadows.value=L.state.pointShadow,_e.hemisphereLights.value=L.state.hemi,_e.directionalShadowMap.value=L.state.directionalShadowMap,_e.directionalShadowMatrix.value=L.state.directionalShadowMatrix,_e.spotShadowMap.value=L.state.spotShadowMap,_e.spotLightMatrix.value=L.state.spotLightMatrix,_e.spotLightMap.value=L.state.spotLightMap,_e.pointShadowMap.value=L.state.pointShadowMap,_e.pointShadowMatrix.value=L.state.pointShadowMatrix),O.currentProgram=ye,O.uniformsList=null,ye}function Oa(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=Zs.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Fa(M,P){const D=Ae.get(M);D.outputColorSpace=P.outputColorSpace,D.batching=P.batching,D.batchingColor=P.batchingColor,D.instancing=P.instancing,D.instancingColor=P.instancingColor,D.instancingMorph=P.instancingMorph,D.skinning=P.skinning,D.morphTargets=P.morphTargets,D.morphNormals=P.morphNormals,D.morphColors=P.morphColors,D.morphTargetsCount=P.morphTargetsCount,D.numClippingPlanes=P.numClippingPlanes,D.numIntersection=P.numClipIntersection,D.vertexAlphas=P.vertexAlphas,D.vertexTangents=P.vertexTangents,D.toneMapping=P.toneMapping}function Jd(M,P,D,O,L){P.isScene!==!0&&(P=Oe),y.resetTextureUnits();const Q=P.fog,se=O.isMeshStandardMaterial?P.environment:null,fe=b===null?S.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Mn,me=(O.isMeshStandardMaterial?U:_).get(O.envMap||se),Ee=O.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,ye=!!D.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),_e=!!D.morphAttributes.position,$e=!!D.morphAttributes.normal,nt=!!D.morphAttributes.color;let st=Ln;O.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(st=S.toneMapping);const Lt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,We=Lt!==void 0?Lt.length:0,xe=Ae.get(O),mt=h.state.lights;if(G===!0&&(j===!0||M!==ee)){const Bt=M===ee&&O.id===F;J.setState(O,M,Bt)}let Xe=!1;O.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==mt.state.version||xe.outputColorSpace!==fe||L.isBatchedMesh&&xe.batching===!1||!L.isBatchedMesh&&xe.batching===!0||L.isBatchedMesh&&xe.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&xe.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&xe.instancing===!1||!L.isInstancedMesh&&xe.instancing===!0||L.isSkinnedMesh&&xe.skinning===!1||!L.isSkinnedMesh&&xe.skinning===!0||L.isInstancedMesh&&xe.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&xe.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&xe.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&xe.instancingMorph===!1&&L.morphTexture!==null||xe.envMap!==me||O.fog===!0&&xe.fog!==Q||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==J.numPlanes||xe.numIntersection!==J.numIntersection)||xe.vertexAlphas!==Ee||xe.vertexTangents!==ye||xe.morphTargets!==_e||xe.morphNormals!==$e||xe.morphColors!==nt||xe.toneMapping!==st||xe.morphTargetsCount!==We)&&(Xe=!0):(Xe=!0,xe.__version=O.version);let Wt=xe.currentProgram;Xe===!0&&(Wt=xs(O,P,L));let ni=!1,It=!1,wr=!1;const rt=Wt.getUniforms(),En=xe.uniforms;if(we.useProgram(Wt.program)&&(ni=!0,It=!0,wr=!0),O.id!==F&&(F=O.id,It=!0),ni||ee!==M){ze.reverseDepthBuffer?(pe.copy(M.projectionMatrix),lf(pe),cf(pe),rt.setValue(A,"projectionMatrix",pe)):rt.setValue(A,"projectionMatrix",M.projectionMatrix),rt.setValue(A,"viewMatrix",M.matrixWorldInverse);const Bt=rt.map.cameraPosition;Bt!==void 0&&Bt.setValue(A,Ce.setFromMatrixPosition(M.matrixWorld)),ze.logarithmicDepthBuffer&&rt.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&rt.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),ee!==M&&(ee=M,It=!0,wr=!0)}if(L.isSkinnedMesh){rt.setOptional(A,L,"bindMatrix"),rt.setOptional(A,L,"bindMatrixInverse");const Bt=L.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),rt.setValue(A,"boneTexture",Bt.boneTexture,y))}L.isBatchedMesh&&(rt.setOptional(A,L,"batchingTexture"),rt.setValue(A,"batchingTexture",L._matricesTexture,y),rt.setOptional(A,L,"batchingIdTexture"),rt.setValue(A,"batchingIdTexture",L._indirectTexture,y),rt.setOptional(A,L,"batchingColorTexture"),L._colorsTexture!==null&&rt.setValue(A,"batchingColorTexture",L._colorsTexture,y));const Tr=D.morphAttributes;if((Tr.position!==void 0||Tr.normal!==void 0||Tr.color!==void 0)&&be.update(L,D,Wt),(It||xe.receiveShadow!==L.receiveShadow)&&(xe.receiveShadow=L.receiveShadow,rt.setValue(A,"receiveShadow",L.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(En.envMap.value=me,En.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&P.environment!==null&&(En.envMapIntensity.value=P.environmentIntensity),It&&(rt.setValue(A,"toneMappingExposure",S.toneMappingExposure),xe.needsLights&&Qd(En,wr),Q&&O.fog===!0&&ne.refreshFogUniforms(En,Q),ne.refreshMaterialUniforms(En,O,$,k,h.state.transmissionRenderTarget[M.id]),Zs.upload(A,Oa(xe),En,y)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Zs.upload(A,Oa(xe),En,y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&rt.setValue(A,"center",L.center),rt.setValue(A,"modelViewMatrix",L.modelViewMatrix),rt.setValue(A,"normalMatrix",L.normalMatrix),rt.setValue(A,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Bt=O.uniformsGroups;for(let br=0,tu=Bt.length;br<tu;br++){const Ba=Bt[br];R.update(Ba,Wt),R.bind(Ba,Wt)}}return Wt}function Qd(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function eu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,P,D){Ae.get(M.texture).__webglTexture=P,Ae.get(M.depthTexture).__webglTexture=D;const O=Ae.get(M);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=D===void 0,O.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,P){const D=Ae.get(M);D.__webglFramebuffer=P,D.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,D=0){b=M,N=P,C=D;let O=!0,L=null,Q=!1,se=!1;if(M){const me=Ae.get(M);if(me.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(A.FRAMEBUFFER,null),O=!1;else if(me.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(me.__hasExternalTextures)y.rebindTextures(M,Ae.get(M.texture).__webglTexture,Ae.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const _e=M.depthTexture;if(me.__boundDepthTexture!==_e){if(_e!==null&&Ae.has(_e)&&(M.width!==_e.image.width||M.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}const Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(se=!0);const ye=Ae.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ye[P])?L=ye[P][D]:L=ye[P],Q=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?L=Ae.get(M).__webglMultisampledFramebuffer:Array.isArray(ye)?L=ye[D]:L=ye,g.copy(M.viewport),E.copy(M.scissor),V=M.scissorTest}else g.copy(le).multiplyScalar($).floor(),E.copy(ge).multiplyScalar($).floor(),V=ke;if(we.bindFramebuffer(A.FRAMEBUFFER,L)&&O&&we.drawBuffers(M,L),we.viewport(g),we.scissor(E),we.setScissorTest(V),Q){const me=Ae.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+P,me.__webglTexture,D)}else if(se){const me=Ae.get(M.texture),Ee=P||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,me.__webglTexture,D||0,Ee)}F=-1},this.readRenderTargetPixels=function(M,P,D,O,L,Q,se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe){we.bindFramebuffer(A.FRAMEBUFFER,fe);try{const me=M.texture,Ee=me.format,ye=me.type;if(!ze.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-O&&D>=0&&D<=M.height-L&&A.readPixels(P,D,O,L,Re.convert(Ee),Re.convert(ye),Q)}finally{const me=b!==null?Ae.get(b).__webglFramebuffer:null;we.bindFramebuffer(A.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(M,P,D,O,L,Q,se){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(fe=fe[se]),fe){const me=M.texture,Ee=me.format,ye=me.type;if(!ze.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=M.width-O&&D>=0&&D<=M.height-L){we.bindFramebuffer(A.FRAMEBUFFER,fe);const _e=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,_e),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),A.readPixels(P,D,O,L,Re.convert(Ee),Re.convert(ye),0);const $e=b!==null?Ae.get(b).__webglFramebuffer:null;we.bindFramebuffer(A.FRAMEBUFFER,$e);const nt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await af(A,nt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,_e),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(_e),A.deleteSync(nt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,P=null,D=0){M.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,M=arguments[1]);const O=Math.pow(2,-D),L=Math.floor(M.image.width*O),Q=Math.floor(M.image.height*O),se=P!==null?P.x:0,fe=P!==null?P.y:0;y.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,D,0,0,se,fe,L,Q),we.unbindTexture()},this.copyTextureToTexture=function(M,P,D=null,O=null,L=0){M.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1],P=arguments[2],L=arguments[3]||0,D=null);let Q,se,fe,me,Ee,ye;D!==null?(Q=D.max.x-D.min.x,se=D.max.y-D.min.y,fe=D.min.x,me=D.min.y):(Q=M.image.width,se=M.image.height,fe=0,me=0),O!==null?(Ee=O.x,ye=O.y):(Ee=0,ye=0);const _e=Re.convert(P.format),$e=Re.convert(P.type);y.setTexture2D(P,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,P.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,P.unpackAlignment);const nt=A.getParameter(A.UNPACK_ROW_LENGTH),st=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Lt=A.getParameter(A.UNPACK_SKIP_PIXELS),We=A.getParameter(A.UNPACK_SKIP_ROWS),xe=A.getParameter(A.UNPACK_SKIP_IMAGES),mt=M.isCompressedTexture?M.mipmaps[L]:M.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,mt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,mt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,fe),A.pixelStorei(A.UNPACK_SKIP_ROWS,me),M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,L,Ee,ye,Q,se,_e,$e,mt.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,L,Ee,ye,mt.width,mt.height,_e,mt.data):A.texSubImage2D(A.TEXTURE_2D,L,Ee,ye,Q,se,_e,$e,mt),A.pixelStorei(A.UNPACK_ROW_LENGTH,nt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,st),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Lt),A.pixelStorei(A.UNPACK_SKIP_ROWS,We),A.pixelStorei(A.UNPACK_SKIP_IMAGES,xe),L===0&&P.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(M,P,D=null,O=null,L=0){M.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,O=arguments[1]||null,M=arguments[2],P=arguments[3],L=arguments[4]||0);let Q,se,fe,me,Ee,ye,_e,$e,nt;const st=M.isCompressedTexture?M.mipmaps[L]:M.image;D!==null?(Q=D.max.x-D.min.x,se=D.max.y-D.min.y,fe=D.max.z-D.min.z,me=D.min.x,Ee=D.min.y,ye=D.min.z):(Q=st.width,se=st.height,fe=st.depth,me=0,Ee=0,ye=0),O!==null?(_e=O.x,$e=O.y,nt=O.z):(_e=0,$e=0,nt=0);const Lt=Re.convert(P.format),We=Re.convert(P.type);let xe;if(P.isData3DTexture)y.setTexture3D(P,0),xe=A.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)y.setTexture2DArray(P,0),xe=A.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,P.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,P.unpackAlignment);const mt=A.getParameter(A.UNPACK_ROW_LENGTH),Xe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Wt=A.getParameter(A.UNPACK_SKIP_PIXELS),ni=A.getParameter(A.UNPACK_SKIP_ROWS),It=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,st.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,st.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,me),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ee),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ye),M.isDataTexture||M.isData3DTexture?A.texSubImage3D(xe,L,_e,$e,nt,Q,se,fe,Lt,We,st.data):P.isCompressedArrayTexture?A.compressedTexSubImage3D(xe,L,_e,$e,nt,Q,se,fe,Lt,st.data):A.texSubImage3D(xe,L,_e,$e,nt,Q,se,fe,Lt,We,st),A.pixelStorei(A.UNPACK_ROW_LENGTH,mt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Xe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Wt),A.pixelStorei(A.UNPACK_SKIP_ROWS,ni),A.pixelStorei(A.UNPACK_SKIP_IMAGES,It),L===0&&P.generateMipmaps&&A.generateMipmap(xe),we.unbindTexture()},this.initRenderTarget=function(M){Ae.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),we.unbindTexture()},this.resetState=function(){N=0,C=0,b=null,we.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===da?"display-p3":"srgb",n.unpackColorSpace=Ge.workingColorSpace===dr?"display-p3":"srgb"}}class Xo extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class us extends zn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new I,p=new I,m=[],v=[],x=[],h=[];for(let u=0;u<=i;u++){const w=[],S=u/i;let T=0;u===0&&o===0?T=.5/n:u===i&&l===Math.PI&&(T=-.5/n);for(let N=0;N<=n;N++){const C=N/n;f.x=-e*Math.cos(s+C*r)*Math.sin(o+S*a),f.y=e*Math.cos(o+S*a),f.z=e*Math.sin(s+C*r)*Math.sin(o+S*a),v.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),h.push(C+T,1-S),w.push(c++)}d.push(w)}for(let u=0;u<i;u++)for(let w=0;w<n;w++){const S=d[u][w+1],T=d[u][w],N=d[u+1][w],C=d[u+1][w+1];(u!==0||o>0)&&m.push(S,T,C),(u!==i-1||l<Math.PI)&&m.push(T,N,C)}this.setIndex(m),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(x,3)),this.setAttribute("uv",new on(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Yo={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class E_{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=c.length;f<p;f+=2){const m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return v}return null}}}const S_=new E_;let va=class{constructor(e){this.manager=e!==void 0?e:S_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dl=new et;class y_{constructor(e,n,i=0,s=1/0){this.ray=new gc(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Dl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dl),this}intersectObject(e,n=!0,i=[]){return qo(e,this,i,n),i.sort(Nl),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)qo(e[s],this,i,n);return i.sort(Nl),i}}function Nl(t,e){return t.distance-e.distance}function qo(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)qo(r[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);/*!
 * Photo Sphere Viewer 5.11.5
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var w_=Object.defineProperty,_a=(t,e)=>{for(var n in e)w_(t,n,{get:e[n],enumerable:!0})},T_={};_a(T_,{ACTIONS:()=>Dc,ANIMATION_MIN_DURATION:()=>$o,CAPTURE_EVENTS_CLASS:()=>fs,CTRLZOOM_TIMEOUT:()=>Uc,DBLCLICK_DELAY:()=>Pc,EASINGS:()=>Ks,ICONS:()=>jt,IDS:()=>vt,KEY_CODES:()=>ft,LONGTOUCH_DELAY:()=>Lc,MOVE_THRESHOLD:()=>Rc,SPHERE_RADIUS:()=>ei,TWOFINGERSOVERLAY_DELAY:()=>Ic,VIEWER_DATA:()=>Bn});var b_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,A_='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',C_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,R_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,P_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,L_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,I_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,U_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,D_=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,$o=500,Rc=4,Pc=300,Lc=500,Ic=100,Uc=2e3,ei=10,Bn="photoSphereViewer",fs="psv--capture-event",Dc=(t=>(t.ROTATE_UP="ROTATE_UP",t.ROTATE_DOWN="ROTATE_DOWN",t.ROTATE_RIGHT="ROTATE_RIGHT",t.ROTATE_LEFT="ROTATE_LEFT",t.ZOOM_IN="ZOOM_IN",t.ZOOM_OUT="ZOOM_OUT",t))(Dc||{}),vt={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},ft={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},jt={arrow:b_,close:A_,download:C_,fullscreenIn:R_,fullscreenOut:P_,info:L_,menu:I_,zoomIn:U_,zoomOut:D_},Ks={linear:t=>t,inQuad:t=>t*t,outQuad:t=>t*(2-t),inOutQuad:t=>t<.5?2*t*t:-1+(4-2*t)*t,inCubic:t=>t*t*t,outCubic:t=>--t*t*t+1,inOutCubic:t=>t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1,inQuart:t=>t*t*t*t,outQuart:t=>1- --t*t*t*t,inOutQuart:t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,inQuint:t=>t*t*t*t*t,outQuint:t=>1+--t*t*t*t*t,inOutQuint:t=>t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t,inSine:t=>1-Math.cos(t*(Math.PI/2)),outSine:t=>Math.sin(t*(Math.PI/2)),inOutSine:t=>.5-.5*Math.cos(Math.PI*t),inExpo:t=>Math.pow(2,10*(t-1)),outExpo:t=>1-Math.pow(2,-10*t),inOutExpo:t=>(t=t*2-1)<0?.5*Math.pow(2,10*t):1-.5*Math.pow(2,-10*t),inCirc:t=>1-Math.sqrt(1-t*t),outCirc:t=>Math.sqrt(1-(t-1)*(t-1)),inOutCirc:t=>(t*=2)<1?.5-.5*Math.sqrt(1-t*t):.5+.5*Math.sqrt(1-(t-=2)*t)},Ie={};_a(Ie,{Animation:()=>ar,Dynamic:()=>qi,MultiDynamic:()=>nh,PressHandler:()=>xr,Slider:()=>sh,SliderDirection:()=>ih,addClasses:()=>xa,angle:()=>Oc,applyEulerInverse:()=>Qo,checkClosedShadowDom:()=>eh,checkStylesheet:()=>Qc,checkVersion:()=>Ta,cleanCssPosition:()=>jc,clone:()=>gr,createTexture:()=>Jo,cssPositionIsOrdered:()=>wa,dasherize:()=>z_,deepEqual:()=>$c,deepmerge:()=>Yc,distance:()=>Nc,exitFullscreen:()=>Xc,firstNonNull:()=>Qt,getAbortError:()=>Ko,getAngle:()=>Bc,getClosest:()=>Hc,getConfigParser:()=>_r,getElement:()=>zc,getEventTarget:()=>ir,getMatchingTarget:()=>kc,getPosition:()=>Vc,getShortestArc:()=>Fc,getStyleProperty:()=>sn,getTouchData:()=>Zo,getXMPValue:()=>Nt,greatArcDistance:()=>O_,hasParent:()=>B_,invertResolvableBoolean:()=>vr,isAbortError:()=>Kc,isEmpty:()=>qc,isExtendedPosition:()=>ya,isFullscreenEnabled:()=>Gc,isNil:()=>pt,isPlainObject:()=>Ea,logWarn:()=>Ze,mergePanoData:()=>th,parseAngle:()=>tn,parsePoint:()=>H_,parseSpeed:()=>Jc,removeClasses:()=>F_,requestFullscreen:()=>Wc,resolveBoolean:()=>Sa,speedToDuration:()=>jo,sum:()=>N_,throttle:()=>Ma,toggleClass:()=>mr,wrap:()=>Ki});function Ki(t,e){let n=t%e;return n<0&&(n+=e),n}function N_(t){return t.reduce((e,n)=>e+n,0)}function Nc(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Oc(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function Fc(t,e){return[0,Math.PI*2,-Math.PI*2].reduce((i,s)=>{const r=e-t+s;return Math.abs(r)<Math.abs(i)?r:i},1/0)}function Bc(t,e){return Math.acos(Math.cos(t.pitch)*Math.cos(e.pitch)*Math.cos(t.yaw-e.yaw)+Math.sin(t.pitch)*Math.sin(e.pitch))}function O_([t,e],[n,i]){t-n>Math.PI?t-=2*Math.PI:t-n<-Math.PI&&(t+=2*Math.PI);const s=(n-t)*Math.cos((e+i)/2),r=i-e;return Math.sqrt(s*s+r*r)}function zc(t){return typeof t=="string"?t.match(/^[a-z]/i)?document.getElementById(t):document.querySelector(t):t}function mr(t,e,n){n===void 0?t.classList.toggle(e):n?t.classList.add(e):n||t.classList.remove(e)}function xa(t,e){t.classList.add(...e.split(" ").filter(n=>!!n))}function F_(t,e){t.classList.remove(...e.split(" ").filter(n=>!!n))}function B_(t,e){let n=t;do{if(n===e)return!0;n=n.parentElement}while(n);return!1}function Hc(t,e){if(!(t!=null&&t.matches))return null;let n=t;do{if(n.matches(e))return n;n=n.parentElement}while(n);return null}function ir(t){return(t==null?void 0:t.composedPath()[0])||null}function kc(t,e){return t?t.composedPath().find(n=>!(n instanceof HTMLElement)&&!(n instanceof SVGElement)?!1:n.matches(e)):null}function Vc(t){let e=0,n=0,i=t;for(;i;)e+=i.offsetLeft-i.scrollLeft+i.clientLeft,n+=i.offsetTop-i.scrollTop+i.clientTop,i=i.offsetParent;return e-=window.scrollX,n-=window.scrollY,{x:e,y:n}}function sn(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function Zo(t){if(t.touches.length<2)return null;const e={x:t.touches[0].clientX,y:t.touches[0].clientY},n={x:t.touches[1].clientX,y:t.touches[1].clientY};return{distance:Nc(e,n),angle:Oc(e,n),center:{x:(e.x+n.x)/2,y:(e.y+n.y)/2}}}var sr;function Gc(t,e=!1){return e?t===sr:document.fullscreenElement===t}function Wc(t,e=!1){e?(sr=t,t.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):t.requestFullscreen()}function Xc(t=!1){t?(sr.classList.remove("psv-fullscreen-emulation"),sr=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function z_(t){return t.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(e,n)=>(n>0?"-":"")+e.toLowerCase())}function Ma(t,e){let n=!1;return function(...i){n||(n=!0,setTimeout(()=>{t.apply(this,i),n=!1},e))}}function Ea(t){if(typeof t!="object"||t===null||Object.prototype.toString.call(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Yc(t,e){const n=e;return function i(s,r){return Array.isArray(r)?(!s||!Array.isArray(s)?s=[]:s.length=0,r.forEach((o,a)=>{s[a]=i(null,o)})):typeof r=="object"?((!s||Array.isArray(s))&&(s={}),Object.keys(r).forEach(o=>{typeof r[o]!="object"||!r[o]||!Ea(r[o])?s[o]=r[o]:r[o]!==n&&(s[o]?i(s[o],r[o]):s[o]=i(null,r[o]))})):s=r,s}(t,e)}function gr(t){return Yc(null,t)}function qc(t){return!t||Object.keys(t).length===0&&t.constructor===Object}function pt(t){return t==null}function Qt(...t){for(const e of t)if(!pt(e))return e;return null}function $c(t,e){if(t===e)return!0;if(Ol(t)&&Ol(e)){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n of Object.keys(t))if(!$c(t[n],e[n]))return!1;return!0}else return!1}function Ol(t){return typeof t=="object"&&t!==null}var Me=class Zc extends Error{constructor(e,n){var i;super(n&&n instanceof Error?`${e}: ${n.message}`:e),this.name="PSVError",(i=Error.captureStackTrace)==null||i.call(Error,this,Zc)}};function Sa(t,e){Ea(t)?(e(t.initial,!0),t.promise.then(n=>e(n,!1))):e(t,!0)}function vr(t){return{initial:!t.initial,promise:t.promise.then(e=>!e)}}function Ko(){const t=new Error("Loading was aborted.");return t.name="AbortError",t}function Kc(t){return(t==null?void 0:t.name)==="AbortError"}function Ze(t){console.warn(`PhotoSphereViewer: ${t}`)}function ya(t){return!t||Array.isArray(t)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([e,n])=>t[e]!==void 0&&t[n]!==void 0)}function Nt(t,e,n=!0){let i=t.match("<GPano:"+e+">(.*)</GPano:"+e+">");if(i!==null){const s=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}if(i=t.match("GPano:"+e+'="(.*?)"'),i!==null){const s=n?parseInt(i[1],10):parseFloat(i[1]);return isNaN(s)?null:s}return null}var Fl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rr=["left","center","right"],or=["top","center","bottom"],Bl=[...rr,...or],Ht="center";function H_(t){if(!t)return{x:.5,y:.5};if(typeof t=="object")return t;let e=t.toLocaleLowerCase().split(" ").slice(0,2);e.length===1&&(Fl[e[0]]?e=[e[0],Ht]:e=[e[0],e[0]]);const n=e[1]!=="left"&&e[1]!=="right"&&e[0]!=="top"&&e[0]!=="bottom";e=e.map(s=>Fl[s]||s),n||e.reverse();const i=e.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return i?{x:parseFloat(i[1])/100,y:parseFloat(i[2])/100}:{x:.5,y:.5}}function jc(t,{allowCenter:e,cssOrder:n}={allowCenter:!0,cssOrder:!0}){return t?(typeof t=="string"&&(t=t.split(" ")),t.length===1&&(t[0]===Ht?t=[Ht,Ht]:rr.indexOf(t[0])!==-1?t=[Ht,t[0]]:or.indexOf(t[0])!==-1&&(t=[t[0],Ht])),t.length!==2||Bl.indexOf(t[0])===-1||Bl.indexOf(t[1])===-1?(Ze(`Unparsable position ${t}`),null):!e&&t[0]===Ht&&t[1]===Ht?(Ze("Invalid position center center"),null):(n&&!wa(t)&&(t=[t[1],t[0]]),t[1]===Ht&&rr.indexOf(t[0])!==-1&&(t=[Ht,t[0]]),t[0]===Ht&&or.indexOf(t[1])!==-1&&(t=[t[1],Ht]),t)):null}function wa(t){return or.indexOf(t[0])!==-1&&rr.indexOf(t[1])!==-1}function Jc(t){let e;if(typeof t=="string"){const n=t.toString().trim();let i=parseFloat(n.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const s=n.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(s.match(/(pm|per minute)$/)&&(i/=60),s){case"dpm":case"degrees per minute":case"dps":case"degrees per second":e=Ne.degToRad(i);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":e=i;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":e=i*Math.PI*2;break;default:throw new Me(`Unknown speed unit "${s}"`)}}else e=t;return e}function jo(t,e){if(typeof t!="number"){const n=Jc(t);return e/Math.abs(n)*1e3}else return Math.abs(t)}function tn(t,e=!1,n=e){let i;if(typeof t=="string"){const s=t.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!s)throw new Me(`Unknown angle "${t}"`);const r=parseFloat(s[1]),o=s[2];if(o)switch(o){case"deg":case"degs":i=Ne.degToRad(r);break;case"rad":case"rads":i=r;break;default:throw new Me(`Unknown angle unit "${o}"`)}else i=r}else if(typeof t=="number"&&!isNaN(t))i=t;else throw new Me(`Unknown angle "${t}"`);return i=Ki(e?i+Math.PI:i,Math.PI*2),e?Ne.clamp(i-Math.PI,-Math.PI/(n?2:1),Math.PI/(n?2:1)):i}function Jo(t,e=!1){const n=new wt(t);return n.needsUpdate=!0,n.minFilter=e?Rn:kt,n.generateMipmaps=e,n.anisotropy=e?2:1,n}var zl=new ti;function Qo(t,e){zl.setFromEuler(e).invert(),t.applyQuaternion(zl)}function _r(t,e){const n=function(i){const s=gr({...t,...i}),r={};for(let[o,a]of Object.entries(s)){if(e&&o in e)a=e[o](a,{rawConfig:s,defValue:t[o]});else if(!(o in t)){Ze(`Unknown option ${o}`);continue}r[o]=a}return r};return n.defaults=t,n.parsers=e||{},n}function Qc(t,e){sn(t,`--psv-${e}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${e}/index.css" is not loaded`)}function Ta(t,e,n){e&&e!==n&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${t} is in version ${e} but @photo-sphere-viewer/core is in version ${n}`)}function eh(t){do{if(t instanceof ShadowRoot&&t.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}t=t.parentNode}while(t)}function th(t,e,n,i){if(!n&&!i){const r=Math.max(t,e*2),o=Math.round(r/2),a=Math.round((r-t)/2),l=Math.round((o-e)/2);n={fullWidth:r,fullHeight:o,croppedWidth:t,croppedHeight:e,croppedX:a,croppedY:l}}const s={isEquirectangular:!0,fullWidth:Qt(n==null?void 0:n.fullWidth,i==null?void 0:i.fullWidth),fullHeight:Qt(n==null?void 0:n.fullHeight,i==null?void 0:i.fullHeight),croppedWidth:Qt(n==null?void 0:n.croppedWidth,i==null?void 0:i.croppedWidth,t),croppedHeight:Qt(n==null?void 0:n.croppedHeight,i==null?void 0:i.croppedHeight,e),croppedX:Qt(n==null?void 0:n.croppedX,i==null?void 0:i.croppedX,0),croppedY:Qt(n==null?void 0:n.croppedY,i==null?void 0:i.croppedY,0),poseHeading:Qt(n==null?void 0:n.poseHeading,i==null?void 0:i.poseHeading,0),posePitch:Qt(n==null?void 0:n.posePitch,i==null?void 0:i.posePitch,0),poseRoll:Qt(n==null?void 0:n.poseRoll,i==null?void 0:i.poseRoll,0),initialHeading:i==null?void 0:i.initialHeading,initialPitch:i==null?void 0:i.initialPitch,initialFov:i==null?void 0:i.initialFov};return!s.fullWidth&&s.fullHeight?s.fullWidth=s.fullHeight*2:(!s.fullWidth||!s.fullHeight)&&(s.fullWidth=s.fullWidth??t,s.fullHeight=s.fullHeight??e),(s.croppedWidth!==t||s.croppedHeight!==e)&&Ze(`Invalid panoData, croppedWidth/croppedHeight is not coherent with the loaded image.
        panoData: ${s.croppedWidth}x${s.croppedHeight}, image: ${t}x${e}`),Math.abs(s.fullWidth-s.fullHeight*2)>1&&(Ze("Invalid panoData, fullWidth should be twice fullHeight"),s.fullHeight=Math.round(s.fullWidth/2)),s.croppedX+s.croppedWidth>s.fullWidth&&(Ze("Invalid panoData, croppedX + croppedWidth > fullWidth"),s.croppedX=s.fullWidth-s.croppedWidth),s.croppedY+s.croppedHeight>s.fullHeight&&(Ze("Invalid panoData, croppedY + croppedHeight > fullHeight"),s.croppedY=s.fullHeight-s.croppedHeight),s.croppedX<0&&(Ze("Invalid panoData, croppedX < 0"),s.croppedX=0),s.croppedY<0&&(Ze("Invalid panoData, croppedY < 0"),s.croppedY=0),s}var ar=class{constructor(t){this.easing=Ks.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=t,t?(t.easing&&(this.easing=typeof t.easing=="function"?t.easing:Ks[t.easing]||Ks.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(e=>this.__run(e))},t.delay||0)):this.resolved=!0}__run(t){if(this.cancelled)return;this.start||(this.start=t);const e=(t-this.start)/this.options.duration,n={};if(e<1){for(const[i,s]of Object.entries(this.options.properties))if(s){const r=s.start+(s.end-s.start)*this.easing(e);n[i]=r}this.options.onTick(n,e),this.animationFrame=window.requestAnimationFrame(i=>this.__run(i))}else{for(const[i,s]of Object.entries(this.options.properties))s&&(n[i]=s.end);this.options.onTick(n,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(t){t?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(e=>e(t)),this.callbacks.length=0}then(t){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(t):new Promise(e=>{this.callbacks.push(e)}).then(t)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},qi=class{constructor(t,e){if(this.fn=t,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=e.min,this.max=e.max,this.wrap=e.wrap,this.current=e.defaultValue,this.wrap&&this.min!==0)throw new Me("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(t){this.__current=t}setSpeed(t){this.speed=t}goto(t,e=1){this.mode=2,this.target=this.wrap?Ki(t,this.max):Ne.clamp(t,this.min,this.max),this.speedMult=e}step(t,e=1){e===0?this.setValue(this.current+t):(this.mode!==2&&(this.target=this.current),this.goto(this.target+t,e))}roll(t=!1,e=1){this.mode=1,this.target=t?-1/0:1/0,this.speedMult=e}stop(){this.mode=0}setValue(t){return this.target=this.wrap?Ki(t,this.max):Ne.clamp(t,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(t){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const i=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=i&&(this.mode=0)}let e=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(e=-e),this.currentSpeed<e?this.currentSpeed=Math.min(e,this.currentSpeed+t/1e3*this.speed*this.speedMult*2):this.currentSpeed>e&&(this.currentSpeed=Math.max(e,this.currentSpeed-t/1e3*this.speed*this.speedMult*2));let n=null;return this.current>this.target&&this.currentSpeed?n=Math.max(this.target,this.current+this.currentSpeed*t/1e3):this.current<this.target&&this.currentSpeed&&(n=Math.min(this.target,this.current+this.currentSpeed*t/1e3)),n!==null&&(n=this.wrap?Ki(n,this.max):Ne.clamp(n,this.min,this.max),n!==this.current)?(this.current=n,this.fn&&this.fn(this.current),!0):!1}},nh=class{constructor(t,e){this.fn=t,this.dynamics=e,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((t,[e,n])=>(t[e]=n.current,t),{})}setSpeed(t){for(const e of Object.values(this.dynamics))e.setSpeed(t)}goto(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].goto(i,e)}step(t,e=1){if(e===0)this.setValue(Object.keys(t).reduce((n,i)=>(n[i]=t[i]+this.dynamics[i].current,n),{}));else for(const[n,i]of Object.entries(t))this.dynamics[n].step(i,e)}roll(t,e=1){for(const[n,i]of Object.entries(t))this.dynamics[n].roll(i,e)}stop(){for(const t of Object.values(this.dynamics))t.stop()}setValue(t){let e=!1;for(const[n,i]of Object.entries(t))e=this.dynamics[n].setValue(i)||e;return e&&this.fn&&this.fn(this.current),e}update(t){let e=!1;for(const n of Object.values(this.dynamics))e=n.update(t)||e;return e&&this.fn&&this.fn(this.current),e}},xr=class{constructor(t=200){this.delay=t,this.time=0,this.delay=t}get pending(){return this.time!==0}down(t){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=t}up(t){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{t(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(t(this.data),this.time=0,this.data=void 0)}},ih=(t=>(t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t))(ih||{}),sh=class{constructor(t,e,n){this.container=t,this.direction=e,this.listener=n,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(t){switch(t.type){case"click":t.stopPropagation();break;case"mousedown":this.__onMouseDown(t);break;case"mouseenter":this.__onMouseEnter(t);break;case"mouseleave":this.__onMouseLeave(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break}}__onMouseDown(t){this.mousedown=!0,this.__update(t.clientX,t.clientY,!0)}__onMouseEnter(t){this.mouseover=!0,this.__update(t.clientX,t.clientY,!0)}__onTouchStart(t){this.mouseover=!0,this.mousedown=!0;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}__onMouseMove(t){(this.mousedown||this.mouseover)&&(t.stopPropagation(),this.__update(t.clientX,t.clientY,!0))}__onTouchMove(t){if(this.mousedown||this.mouseover){t.stopPropagation();const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!0)}}__onMouseUp(t){this.mousedown&&(this.mousedown=!1,this.__update(t.clientX,t.clientY,!1))}__onMouseLeave(t){this.mouseover&&(this.mouseover=!1,this.__update(t.clientX,t.clientY,!0))}__onTouchEnd(t){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const e=t.changedTouches[0];this.__update(e.clientX,e.clientY,!1)}}__update(t,e,n){const i=this.container.getBoundingClientRect();let s;this.isVertical?s=Ne.clamp((i.bottom-e)/i.height,0,1):s=Ne.clamp((t-i.left)/i.width,0,1),this.listener({value:s,click:!n,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:t,clientY:e}})}},gt={};_a(gt,{BeforeAnimateEvent:()=>ba,BeforeRenderEvent:()=>ji,BeforeRotateEvent:()=>uh,ClickEvent:()=>mh,ConfigChangedEvent:()=>Rt,DoubleClickEvent:()=>Mh,FullscreenEvent:()=>Ji,HideNotificationEvent:()=>Qi,HideOverlayEvent:()=>Ah,HidePanelEvent:()=>In,HideTooltipEvent:()=>Ih,KeypressEvent:()=>Un,LoadProgressEvent:()=>Fh,ObjectEnterEvent:()=>Sd,ObjectEvent:()=>Er,ObjectHoverEvent:()=>Ad,ObjectLeaveEvent:()=>ea,PanoramaErrorEvent:()=>Xh,PanoramaLoadEvent:()=>Hh,PanoramaLoadedEvent:()=>Ci,PositionUpdatedEvent:()=>es,ReadyEvent:()=>ns,RenderEvent:()=>id,RollUpdatedEvent:()=>ts,ShowNotificationEvent:()=>is,ShowOverlayEvent:()=>ld,ShowPanelEvent:()=>Dn,ShowTooltipEvent:()=>fd,SizeUpdatedEvent:()=>ss,StopAllEvent:()=>rs,TransitionDoneEvent:()=>$h,ViewerEvent:()=>Ye,ZoomUpdatedEvent:()=>_n});var Mr=class extends Event{constructor(t,e=!1){super(t,{cancelable:e})}},rh=class extends EventTarget{dispatchEvent(t){return super.dispatchEvent(t)}addEventListener(t,e,n){super.addEventListener(t,e,n)}removeEventListener(t,e,n){super.removeEventListener(t,e,n)}},Ye=class extends Mr{},oh=class ah extends Ye{constructor(e,n){super(ah.type,!0),this.position=e,this.zoomLevel=n}};oh.type="before-animate";var ba=oh,lh=class ch extends Ye{constructor(e,n){super(ch.type),this.timestamp=e,this.elapsed=n}};lh.type="before-render";var ji=lh,hh=class dh extends Ye{constructor(e){super(dh.type,!0),this.position=e}};hh.type="before-rotate";var uh=hh,fh=class ph extends Ye{constructor(e){super(ph.type),this.data=e}};fh.type="click";var mh=fh,gh=class vh extends Ye{constructor(e){super(vh.type),this.options=e}containsOptions(...e){return e.some(n=>this.options.includes(n))}};gh.type="config-changed";var Rt=gh,_h=class xh extends Ye{constructor(e){super(xh.type),this.data=e}};_h.type="dblclick";var Mh=_h,Eh=class Sh extends Ye{constructor(e){super(Sh.type),this.fullscreenEnabled=e}};Eh.type="fullscreen";var Ji=Eh,yh=class wh extends Ye{constructor(e){super(wh.type),this.notificationId=e}};yh.type="hide-notification";var Qi=yh,Th=class bh extends Ye{constructor(e){super(bh.type),this.overlayId=e}};Th.type="hide-overlay";var Ah=Th,Ch=class Rh extends Ye{constructor(e){super(Rh.type),this.panelId=e}};Ch.type="hide-panel";var In=Ch,Ph=class Lh extends Ye{constructor(e){super(Lh.type),this.tooltipData=e}};Ph.type="hide-tooltip";var Ih=Ph,Uh=class Dh extends Ye{constructor(e,n){super(Dh.type,!0),this.key=e,this.originalEvent=n}};Uh.type="key-press";var Un=Uh,Nh=class Oh extends Ye{constructor(e){super(Oh.type),this.progress=e}};Nh.type="load-progress";var Fh=Nh,Bh=class zh extends Ye{constructor(e){super(zh.type),this.panorama=e}};Bh.type="panorama-load";var Hh=Bh,kh=class Vh extends Ye{constructor(e){super(Vh.type),this.data=e}};kh.type="panorama-loaded";var Ci=kh,Gh=class Wh extends Ye{constructor(e,n){super(Wh.type),this.panorama=e,this.error=n}};Gh.type="panorama-error";var Xh=Gh,Yh=class qh extends Ye{constructor(e){super(qh.type),this.completed=e}};Yh.type="transition-done";var $h=Yh,Zh=class Kh extends Ye{constructor(e){super(Kh.type),this.position=e}};Zh.type="position-updated";var es=Zh,jh=class Jh extends Ye{constructor(e){super(Jh.type),this.roll=e}};jh.type="roll-updated";var ts=jh,Qh=class ed extends Ye{constructor(){super(ed.type)}};Qh.type="ready";var ns=Qh,td=class nd extends Ye{constructor(){super(nd.type)}};td.type="render";var id=td,sd=class rd extends Ye{constructor(e){super(rd.type),this.notificationId=e}};sd.type="show-notification";var is=sd,od=class ad extends Ye{constructor(e){super(ad.type),this.overlayId=e}};od.type="show-overlay";var ld=od,cd=class hd extends Ye{constructor(e){super(hd.type),this.panelId=e}};cd.type="show-panel";var Dn=cd,dd=class ud extends Ye{constructor(e,n){super(ud.type),this.tooltip=e,this.tooltipData=n}};dd.type="show-tooltip";var fd=dd,pd=class md extends Ye{constructor(e){super(md.type),this.size=e}};pd.type="size-updated";var ss=pd,gd=class vd extends Ye{constructor(){super(vd.type)}};gd.type="stop-all";var rs=gd,_d=class xd extends Ye{constructor(e){super(xd.type),this.zoomLevel=e}};_d.type="zoom-updated";var _n=_d,Er=class extends Ye{constructor(t,e,n,i,s){super(t),this.originalEvent=e,this.object=n,this.viewerPoint=i,this.userDataKey=s}},Md=class Ed extends Er{constructor(e,n,i,s){super(Ed.type,e,n,i,s)}};Md.type="enter-object";var Sd=Md,yd=class wd extends Er{constructor(e,n,i,s){super(wd.type,e,n,i,s)}};yd.type="leave-object";var ea=yd,Td=class bd extends Er{constructor(e,n,i,s){super(bd.type,e,n,i,s)}};Td.type="hover-object";var Ad=Td,Aa=class{constructor(t){this.viewer=t}init(){}destroy(){}supportsTransition(t){return!1}supportsPreload(t){return!1}textureCoordsToSphericalCoords(t,e){throw new Me("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(t,e){throw new Me("Current adapter does not support texture coordinates.")}};Aa.supportsDownload=!1;function Hl(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Aa)return Ta(e.id,e.VERSION,"5.11.5"),e}return null}var Xi=`${Bn}_touchSupport`,yt={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=G_(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const t=k_();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!t,this.maxTextureWidth=t?t.getParameter(t.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=V_(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!yt.isWebGLSupported)throw new Me("WebGL 2 is not supported.");if(yt.maxTextureWidth===0)throw new Me("Unable to detect system capabilities")}};function k_(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function V_(){let t="ontouchstart"in window||navigator.maxTouchPoints>0;Xi in localStorage&&(t=localStorage[Xi]==="true");const e=new Promise(n=>{const i=()=>{window.removeEventListener("mousedown",s),window.removeEventListener("touchstart",r),clearTimeout(a)},s=()=>{i(),localStorage[Xi]=!1,n(!1)},r=()=>{i(),localStorage[Xi]=!0,n(!0)},o=()=>{i(),localStorage[Xi]=t,n(t)};window.addEventListener("mousedown",s,!1),window.addEventListener("touchstart",r,!1);const a=setTimeout(o,1e4)});return{initial:t,promise:e}}function G_(t){let e=t,n=!1;const i=document.createElement("canvas"),s=i.getContext("2d");for(i.width=1,i.height=1;e>1024&&!n;){const r=document.createElement("canvas"),o=r.getContext("2d");r.width=e,r.height=e/2;try{o.fillStyle="white",o.fillRect(e-1,e/2-1,1,1),s.drawImage(r,e-1,e/2-1,1,1,0,0,1,1),s.getImageData(0,0,1,1).data[0]>0&&(n=!0)}catch{}r.width=0,r.height=0,n||(e/=2)}if(n)return e;throw new Me("Unable to detect system capabilities")}var W_=_r({backgroundColor:null,interpolateBackground:!1,resolution:64,useXmpData:!0,blur:!1},{resolution:t=>{if(!t||!Ne.isPowerOfTwo(t))throw new Me("EquirectangularAdapter resolution must be power of two.");return t},backgroundColor:t=>(t&&Ze("EquirectangularAdapter.backgroundColor is deprecated, use 'canvasBackground' main option instead."),t),interpolateBackground:t=>(t&&Ze("EquirectangularAdapter.interpolateBackground is not supported anymore."),!1)}),ps=class extends Aa{constructor(t,e){super(t),this.config=W_(e),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2,this.config.backgroundColor&&(t.config.canvasBackground=e.backgroundColor)}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(t,e){if(pt(t.textureX)||pt(t.textureY))throw new Me("Texture position is missing 'textureX' or 'textureY'");const n=(t.textureX+e.croppedX)/e.fullWidth*Math.PI*2,i=(t.textureY+e.croppedY)/e.fullHeight*Math.PI;return{yaw:n>=Math.PI?n-Math.PI:n+Math.PI,pitch:Math.PI/2-i}}sphericalCoordsToTextureCoords(t,e){const n=t.yaw/Math.PI/2*e.fullWidth,i=t.pitch/Math.PI*e.fullHeight;let s=Math.round(t.yaw<Math.PI?n+e.fullWidth/2:n-e.fullWidth/2)-e.croppedX,r=Math.round(e.fullHeight/2-i)-e.croppedY;return(s<0||s>e.croppedWidth||r<0||r>e.croppedHeight)&&(s=r=void 0),{textureX:s,textureY:r}}async loadTexture(t,e=!0,n,i=this.config.useXmpData){if(typeof t!="string"&&(typeof t!="object"||!t.path))return Promise.reject(new Me("Invalid panorama url, are you using the right adapter?"));let s;typeof t=="string"?s={path:t,data:n}:s={data:n,...t};const r=await this.viewer.textureLoader.loadFile(s.path,e?d=>this.viewer.loader.setProgress(d):null,s.path),o=i?await this.loadXMP(r):null,a=await this.viewer.textureLoader.blobToImage(r);typeof s.data=="function"&&(s.data=s.data(a,o));const l=th(a.width,a.height,s.data,o),c=this.createEquirectangularTexture(a);return{panorama:t,texture:c,panoData:l,cacheKey:s.path}}async loadXMP(t){const e=await this.loadBlobAsString(t),n=e.indexOf("<x:xmpmeta");if(n===-1)return null;const i=e.indexOf("</x:xmpmeta>",n);if(i===-1)return null;const s=e.substring(n,i);return s.includes("GPano:")?{fullWidth:Nt(s,"FullPanoWidthPixels"),fullHeight:Nt(s,"FullPanoHeightPixels"),croppedWidth:Nt(s,"CroppedAreaImageWidthPixels"),croppedHeight:Nt(s,"CroppedAreaImageHeightPixels"),croppedX:Nt(s,"CroppedAreaLeftPixels"),croppedY:Nt(s,"CroppedAreaTopPixels"),poseHeading:Nt(s,"PoseHeadingDegrees",!1),posePitch:Nt(s,"PosePitchDegrees",!1),poseRoll:Nt(s,"PoseRollDegrees",!1),initialHeading:Nt(s,"InitialViewHeadingDegrees",!1),initialPitch:Nt(s,"InitialViewPitchDegrees",!1),initialFov:Nt(s,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(t){return new Promise((e,n)=>{const i=new FileReader;i.onload=()=>e(i.result),i.onerror=n,i.readAsText(t)})}createEquirectangularTexture(t){if(this.config.blur||t.width>yt.maxTextureWidth){const e=Math.min(1,yt.maxCanvasWidth/t.width),n=new OffscreenCanvas(Math.floor(t.width*e),Math.floor(t.height*e)),i=n.getContext("2d");return this.config.blur&&(i.filter=`blur(${n.width/2048}px)`),i.drawImage(t,0,0,n.width,n.height),Jo(n)}return Jo(t)}createMesh(t){const e=t.croppedX/t.fullWidth*2*Math.PI,n=t.croppedWidth/t.fullWidth*2*Math.PI,i=t.croppedY/t.fullHeight*Math.PI,s=t.croppedHeight/t.fullHeight*Math.PI,r=new us(ei,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*n),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*s),-Math.PI/2+e,n,i,s).scale(-1,1,1),o=new hs({depthTest:!1,depthWrite:!1});return new Gt(r,o)}setTexture(t,e){t.material.map=e.texture}setTextureOpacity(t,e){t.material.opacity=e,t.material.transparent=e<1}disposeTexture({texture:t}){t.dispose()}disposeMesh(t){t.geometry.dispose(),t.material.dispose()}};ps.id="equirectangular";ps.VERSION="5.11.5";ps.supportsDownload=!0;var Cd=class extends ps{constructor(t,e){super(t,{resolution:(e==null?void 0:e.resolution)??64,useXmpData:!1})}async loadTexture(t,e){const n=await super.loadTexture(t,e,null,!1);return n.panoData=null,n}createMesh(){const t=new us(ei,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),e=t.getAttribute("uv"),n=t.getAttribute("normal");for(let s=0;s<e.count;s++)for(let r=0;r<3;r++){const o=s*3+r,a=n.getX(o),l=n.getY(o),c=n.getZ(o),d=.947;if(s<e.count/6){const f=a===0&&c===0?1:Math.acos(l)/Math.sqrt(a*a+c*c)*(2/Math.PI);e.setXY(o,a*(d/4)*f+1/4,c*(d/2)*f+1/2)}else{const f=a===0&&c===0?1:Math.acos(-l)/Math.sqrt(a*a+c*c)*(2/Math.PI);e.setXY(o,-a*(d/4)*f+3/4,c*(d/2)*f+1/2)}}t.rotateX(-Math.PI/2),t.rotateY(Math.PI);const i=new hs({depthTest:!1,depthWrite:!1});return new Gt(t,i)}};Cd.id="dual-fisheye";Cd.VERSION="5.11.5";var Hn=class Rd{constructor(e,n){this.parent=e,this.children=[],this.state={visible:!0},this.viewer=e instanceof Rd?e.viewer:e,this.container=document.createElement(n.tagName??"div"),this.container.className=n.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const e=this.parent.children.indexOf(this);e!==-1&&this.parent.children.splice(e,1),this.children.slice().forEach(n=>n.destroy()),this.children.length=0}toggle(e=!this.isVisible()){e?this.show():this.hide()}hide(e){this.container.style.display="none",this.state.visible=!1}show(e){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},X_=_r({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),Ft=class extends Hn{constructor(t,e){super(t,{tagName:e.tagName,className:`psv-button ${e.hoverScale?"psv-button--hover-scale":""} ${e.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=X_(e),e.id||(this.config.id=this.constructor.id),e.icon&&this.__setIcon(e.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),e.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",n=>{this.state.enabled&&this.onClick(),n.stopPropagation()}),this.container.addEventListener("keydown",n=>{n.key===ft.Enter&&this.state.enabled&&(this.onClick(),n.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(t=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),t&&this.viewer.navbar.autoSize())}hide(t=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",t&&this.viewer.navbar.autoSize())}checkSupported(){Sa(this.isSupported(),(t,e)=>{this.state&&(this.state.supported=t,e?t||this.hide():this.toggle(t))})}autoSize(){}isSupported(){return!0}toggleActive(t=!this.state.active){t!==this.state.active&&(this.state.active=t,mr(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(t){this.container.innerHTML=t,xa(this.container.querySelector("svg"),"psv-button-svg")}},Y_=class extends Ft{constructor(t,e){var n,i;super(t,{id:e.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${e.className||""}`,hoverScale:!1,collapsable:e.collapsable!==!1,tabbable:e.tabbable!==!1,title:e.title}),this.customOnClick=e.onClick,e.content&&(typeof e.content=="string"?this.container.innerHTML=e.content:(this.container.classList.add("psv-custom-button--no-padding"),e.content.style.height="100%",(i=(n=e.content).attachViewer)==null||i.call(n,this.viewer),this.container.appendChild(e.content))),this.state.width=this.container.offsetWidth,e.disabled&&this.disable(),e.visible===!1&&this.hide()}onClick(){var t;(t=this.customOnClick)==null||t.call(this,this.viewer)}},ls=class extends Ft{constructor(t){super(t,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:jt.info}),this.mode=0,this.viewer.addEventListener(Qi.type,this),this.viewer.addEventListener(is.type,this),this.viewer.addEventListener(In.type,this),this.viewer.addEventListener(Dn.type,this),this.viewer.addEventListener(Rt.type,this)}destroy(){this.viewer.removeEventListener(Qi.type,this),this.viewer.removeEventListener(is.type,this),this.viewer.removeEventListener(In.type,this),this.viewer.removeEventListener(Dn.type,this),this.viewer.removeEventListener(Rt.type,this),super.destroy()}handleEvent(t){if(t instanceof Rt){t.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let e=!1;t instanceof Qi?e=this.mode===1:t instanceof is?e=this.mode===1&&t.notificationId!==vt.DESCRIPTION:t instanceof In?e=this.mode===2:t instanceof Dn&&(e=this.mode===2&&t.panelId!==vt.DESCRIPTION),e&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(t){super.hide(t),this.mode&&this.__close()}autoSize(t=!1){if(t){const e=this.viewer.navbar.getButton("caption",!1),n=e&&!e.isVisible(),i=!!this.viewer.config.description;n||i?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(vt.DESCRIPTION);break;case 2:this.viewer.panel.hide(vt.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:vt.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:vt.DESCRIPTION,content:this.viewer.config.caption}))}};ls.id="description";var Pd=class extends Ft{constructor(t){super(t,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:jt.download}),this.viewer.addEventListener(Rt.type,this),this.viewer.addEventListener(Ci.type,this)}destroy(){this.viewer.removeEventListener(Rt.type,this),this.viewer.removeEventListener(Ci.type,this),super.destroy()}handleEvent(t){t instanceof Rt?(t.containsOptions("downloadUrl")&&this.checkSupported(),t.containsOptions("downloadUrl","downloadName")&&this.__update()):t instanceof Ci&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const t=this.container;t.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,t.target="_blank",t.href.startsWith("data:")&&!this.viewer.config.downloadName?t.download="panorama."+t.href.substring(0,t.href.indexOf(";")).split("/").pop():t.download=this.viewer.config.downloadName||t.href.split("/").pop()}};Pd.id="download";var Ld=class extends Ft{constructor(t){super(t,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:jt.fullscreenIn,iconActive:jt.fullscreenOut}),this.viewer.addEventListener(Ji.type,this)}destroy(){this.viewer.removeEventListener(Ji.type,this),super.destroy()}handleEvent(t){t instanceof Ji&&this.toggleActive(t.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};Ld.id="fullscreen";var q_="psvButton",$_=(t,e)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${jt.menu} ${e}</h1>
  <ul class="psv-panel-menu-list">
    ${t.map(n=>`
    <li data-psv-button="${n.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${n.content}</span>
      <span class="psv-panel-menu-item-label">${n.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,js=class extends Ft{constructor(t){super(t,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:jt.menu}),this.viewer.addEventListener(Dn.type,this),this.viewer.addEventListener(In.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Dn.type,this),this.viewer.removeEventListener(In.type,this),super.destroy()}handleEvent(t){t instanceof Dn?this.toggleActive(t.panelId===vt.MENU):t instanceof In&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(t){super.hide(t),this.__hideMenu()}show(t){super.show(t),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:vt.MENU,content:$_(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:t=>{const e=t?Hc(t,".psv-panel-menu-item"):void 0,n=e?e.dataset[q_]:void 0;n&&(this.viewer.navbar.getButton(n).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(vt.MENU)}};js.id="menu";function Z_(t){let e=0;switch(t){case 0:e=90;break;case 1:e=-90;break;case 3:e=180;break;default:e=0;break}return jt.arrow.replace("rotate(0",`rotate(${e}`)}var ms=class extends Ft{constructor(t,e){super(t,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Z_(e)}),this.direction=e,this.handler=new xr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===ft.Enter&&this.__onMouseDown();break;case"keyup":t.key===ft.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return vr(yt.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const t={};switch(this.direction){case 0:t.pitch=!1;break;case 1:t.pitch=!0;break;case 3:t.yaw=!1;break;default:t.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(t),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};ms.groupId="move";var Id=class extends ms{constructor(t){super(t,1)}};Id.id="moveDown";var Ud=class extends ms{constructor(t){super(t,2)}};Ud.id="moveLeft";var Dd=class extends ms{constructor(t){super(t,3)}};Dd.id="moveRight";var Nd=class extends ms{constructor(t){super(t,0)}};Nd.id="moveUp";var Ca=class extends Ft{constructor(t,e,n){super(t,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:e}),this.direction=n,this.handler=new xr,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":t.key===ft.Enter&&this.__onMouseDown();break;case"keyup":t.key===ft.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return vr(yt.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};Ca.groupId="zoom";var Od=class extends Ca{constructor(t){super(t,jt.zoomIn,0)}};Od.id="zoomIn";var Fd=class extends Ca{constructor(t){super(t,jt.zoomOut,1)}};Fd.id="zoomOut";var Ra=class extends Ft{constructor(t){super(t,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new sh(this.container,"HORIZONTAL",e=>this.__onSliderUpdate(e)),this.mediaMinWidth=parseInt(sn(this.container,"max-width"),10),this.viewer.addEventListener(_n.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(ns.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(_n.type,this),this.viewer.removeEventListener(ns.type,this),super.destroy()}handleEvent(t){t instanceof _n?this.__moveZoomValue(t.zoomLevel):t instanceof ns&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return vr(yt.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(t){this.zoomValue.style.left=t/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(t){t.mousedown&&this.viewer.zoom(t.value*100)}};Ra.id="zoomRange";Ra.groupId="zoom";var Bd=class extends rh{constructor(t){super(),this.viewer=t}init(){}destroy(){}},zd=class extends Bd{constructor(t,e){super(t),this.config=this.constructor.configParser(e)}setOption(t,e){this.setOptions({[t]:e})}setOptions(t){const e={...this.config,...t},n=this.constructor,i=n.configParser,s=n.readonlyOptions,r=n.id;for(let[o,a]of Object.entries(t)){if(!(o in i.defaults)){Ze(`${r}: Unknown option "${o}"`);continue}if(s.includes(o)){Ze(`${r}: Option "${o}" cannot be updated`);continue}o in i.parsers&&(a=i.parsers[o](a,{rawConfig:e,defValue:i.defaults[o]})),this.config[o]=a}}};zd.readonlyOptions=[];function ta(t){if(t){for(const[,e]of[["_",t],...Object.entries(t)])if(e.prototype instanceof Bd)return Ta(e.id,e.VERSION,"5.11.5"),e}return null}var Ni={panorama:null,container:null,adapter:[ps,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[ft.ArrowUp]:"ROTATE_UP",[ft.ArrowDown]:"ROTATE_DOWN",[ft.ArrowRight]:"ROTATE_RIGHT",[ft.ArrowLeft]:"ROTATE_LEFT",[ft.PageUp]:"ZOOM_IN",[ft.PageDown]:"ZOOM_OUT",[ft.Plus]:"ZOOM_IN",[ft.Minus]:"ZOOM_OUT"}},kl={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},na={container:t=>{if(!t)throw new Me("No value given for container.");return t},adapter:(t,{defValue:e})=>{if(t?Array.isArray(t)?t=[Hl(t[0]),t[1]]:t=[Hl(t),null]:t=e,!t[0])throw new Me("An undefined value was given for adapter.");if(!t[0].id)throw new Me("Adapter has no id.");return t[0].id==="little-planet"&&(Ze("LittlePlanetAdapter support has been removed, use `{ fisheye: 2, maxFov: 130 }` to achieve similar effect."),t=e),t},defaultYaw:t=>tn(t),defaultPitch:t=>tn(t,!0),defaultZoomLvl:t=>Ne.clamp(t,0,100),minFov:(t,{rawConfig:e})=>(e.maxFov<t&&(Ze("maxFov cannot be lower than minFov"),t=e.maxFov),Ne.clamp(t,1,179)),maxFov:(t,{rawConfig:e})=>(t<e.minFov&&(t=e.minFov),Ne.clamp(t,1,179)),moveInertia:(t,{defValue:e})=>t===!0?e:t===!1?0:t,lang:t=>({...Ni.lang,...t}),keyboard:t=>t?typeof t=="object"?(Ze("Use keyboardActions to configure the keyboard actions, keyboard option must be either true, false, 'fullscreen' or 'always'"),"fullscreen"):t==="always"?"always":"fullscreen":!1,keyboardActions:(t,{rawConfig:e})=>e.keyboard&&typeof e.keyboard=="object"?e.keyboard:t,fisheye:t=>t===!0?1:t===!1?0:t,requestHeaders:t=>t&&typeof t=="object"?()=>t:typeof t=="function"?t:null,defaultTransition:(t,{defValue:e})=>t===null||t.speed===0?null:{...e,...t},rendererParameters:(t,{defValue:e})=>({...t,...e}),plugins:t=>t.map((e,n)=>{if(Array.isArray(e)?e=[ta(e[0]),e[1]]:e=[ta(e),null],!e[0])throw new Me(`An undefined value was given for plugin ${n}.`);if(!e[0].id)throw new Me(`Plugin ${n} has no id.`);return e}),navbar:t=>t===!1?null:t===!0?gr(Ni.navbar):typeof t=="string"?t.split(/[ ,]/):t},K_=_r(Ni,na),yi=class extends Ft{constructor(t){super(t,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(t){this.show(),this.contentElt.innerHTML=t??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var t;(t=this.viewer.navbar.getButton(ls.id,!1))==null||t.autoSize(!0)}};yi.id="caption";var ia={},lr={};function j_(t,e){if(!t.id)throw new Me("Button id is required");ia[t.id]=t,t.groupId&&(lr[t.groupId]=lr[t.groupId]||[]).push(t)}[Fd,Ra,Od,ls,yi,Pd,Ld,Ud,Dd,Nd,Id].forEach(t=>j_(t));var J_=class extends Hn{constructor(t){super(t,{className:`psv-navbar ${fs}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(t){this.children.slice().forEach(e=>e.destroy()),this.children.length=0,t.indexOf(yi.id)!==-1&&t.indexOf(ls.id)===-1&&t.splice(t.indexOf(yi.id),0,ls.id),t.forEach(e=>{typeof e=="object"?new Y_(this,e):ia[e]?new ia[e](this):lr[e]?lr[e].forEach(n=>{new n(this)}):Ze(`Unknown button ${e}`)}),new js(this),this.children.forEach(e=>{e instanceof Ft&&e.checkSupported()}),this.autoSize()}setCaption(t){this.children.some(e=>e instanceof yi?(e.setCaption(t),!0):!1)}getButton(t,e=!0){const n=this.children.find(i=>i instanceof Ft&&i.id===t);return!n&&e&&Ze(`button "${t}" not found in the navbar`),n}autoSize(){var i;this.children.forEach(s=>{s instanceof Ft&&s.autoSize()});const t=this.container.offsetWidth;let e=0;const n=[];this.children.forEach(s=>{s.isVisible()&&s instanceof Ft&&(e+=s.width,s.collapsable&&n.push(s))}),e!==0&&(t<e&&n.length>0?(n.forEach(s=>s.collapse()),this.collapsed=n,this.getButton(js.id).show(!1)):t>=e&&this.collapsed.length>0&&(this.collapsed.forEach(s=>s.uncollapse()),this.collapsed=[],this.getButton(js.id).hide(!1)),(i=this.getButton(yi.id,!1))==null||i.autoSize())}};Yo.enabled=!1;var Mi={enabled:!0,maxItems:10,ttl:10*60,items:{},purgeInterval:null,init(){Yo.enabled&&(Ze("ThreeJS cache should be disabled"),Yo.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(t,e,n){this.enabled&&e&&(this.items[e]=this.items[e]??{files:{},lastAccess:null},this.items[e].files[t]=n,this.items[e].lastAccess=Date.now())},get(t,e){if(this.enabled&&e&&this.items[e])return this.items[e].lastAccess=Date.now(),this.items[e].files[t]},remove(t,e){this.enabled&&e&&this.items[e]&&(delete this.items[e].files[t],Object.keys(this.items[e].files).length===0&&delete this.items[e])},purge(){Object.entries(this.items).sort(([,t],[,e])=>e.lastAccess-t.lastAccess).forEach(([t,{lastAccess:e}],n)=>{n>0&&(Date.now()-e>=this.ttl*1e3||n>=this.maxItems)&&delete this.items[t]})}},Q_=class extends Hn{constructor(t){super(t,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=sn(this.loader,"color"),this.color=sn(this.canvas,"color"),this.border=parseInt(sn(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(sn(this.loader,"--psv-loader-tickness"),10);const e=this.size/2;this.canvas.innerHTML=`
            <circle cx="${e}" cy="${e}" r="${e}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(Rt.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(Rt.type,this),super.destroy()}handleEvent(t){t instanceof Rt&&t.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(t){const e=Ne.clamp(t,0,99.999)/100*Math.PI*2,n=this.size/2,i=n,s=this.thickness/2+this.border,r=(this.size-this.thickness)/2-this.border,o=Math.sin(e)*r+n,a=-Math.cos(e)*r+n,l=t>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${i} ${s} A ${r} ${r} 0 ${l} 1 ${o} ${a}`),this.viewer.dispatchEvent(new Fh(Math.round(t)))}__updateContent(){const t=this.loader.querySelector(".psv-loader-image, .psv-loader-text");t&&this.loader.removeChild(t);let e;if(this.viewer.config.loadingImg?(e=document.createElement("img"),e.className="psv-loader-image",e.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(e=document.createElement("div"),e.className="psv-loader-text",e.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),e){const n=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));e.style.maxWidth=n+"px",e.style.maxHeight=n+"px",this.loader.appendChild(e)}}},e0=class extends Hn{constructor(t){super(t,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Me("Notification cannot be toggled")}show(t){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof t=="string"&&(t={content:t}),this.state.contentId=t.id||null,this.content.innerHTML=t.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new is(this.state.contentId)),t.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),t.timeout))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new Qi(e))}}},t0=class extends Hn{constructor(t){super(t,{className:`psv-overlay ${fs}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Un.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Un.type,this),super.destroy()}handleEvent(t){t.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),t.stopPropagation()):t instanceof Un&&this.isVisible()&&this.state.dismissible&&t.key===ft.Escape&&(this.hide(),t.preventDefault())}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Me("Overlay cannot be toggled")}show(t){typeof t=="string"&&(t={title:t}),"dissmisable"in t&&(Ze('Replace "dissmisable" by "dismissible"'),t.dismissible=t.dissmisable),this.state.contentId=t.id||null,this.state.dismissible=t.dismissible!==!1,this.image.innerHTML=t.image||"",this.title.innerHTML=t.title||"",this.text.innerHTML=t.text||"",super.show(),this.viewer.dispatchEvent(new ld(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new Ah(e))}}},n0=200,no="psv-panel-content--no-interaction",i0=class extends Hn{constructor(t){super(t,{className:`psv-panel ${fs}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const e=document.createElement("div");e.className="psv-panel-resizer",this.container.appendChild(e);const n=document.createElement("div");n.className="psv-panel-close-button",n.innerHTML=jt.close,n.title=t.config.lang.close,this.container.appendChild(n),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),n.addEventListener("click",()=>this.hide()),e.addEventListener("mousedown",this),e.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Un.type,this)}destroy(){this.viewer.removeEventListener(Un.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(t){switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"mousemove":this.__onMouseMove(t);break;case"touchmove":this.__onTouchMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchend":this.__onTouchEnd(t);break;case Un.type:this.__onKeyPress(t);break}}isVisible(t){return this.state.visible&&(!t||!this.state.contentId||this.state.contentId===t)}toggle(){throw new Me("Panel cannot be toggled")}show(t){typeof t=="string"&&(t={content:t});const e=this.isVisible(t.id);this.state.contentId=t.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),t.id&&this.state.width[t.id]?this.container.style.width=this.state.width[t.id]:t.width?this.container.style.width=t.width:this.container.style.width=null,this.content.innerHTML=t.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),mr(this.content,"psv-panel-content--no-margin",t.noMargin===!0),t.clickHandler&&(this.state.clickHandler=n=>{t.clickHandler(ir(n))},this.state.keyHandler=n=>{n.key===ft.Enter&&t.clickHandler(ir(n))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),e||setTimeout(()=>{var n;(n=this.content.querySelector("a,button,[tabindex]"))==null||n.focus()},300)),this.viewer.dispatchEvent(new Dn(this.state.contentId))}hide(t){if(this.isVisible(t)){const e=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new In(e))}}__onMouseDown(t){t.stopPropagation(),this.__startResize(t.clientX,t.clientY)}__onTouchStart(t){if(t.stopPropagation(),t.touches.length===1){const e=t.touches[0];this.__startResize(e.clientX,e.clientY)}}__onMouseUp(t){this.state.mousedown&&(t.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(no))}__onTouchEnd(t){this.state.mousedown&&(t.stopPropagation(),t.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(no)))}__onMouseMove(t){this.state.mousedown&&(t.stopPropagation(),this.__resize(t.clientX,t.clientY))}__onTouchMove(t){if(this.state.mousedown){const e=t.touches[0];this.__resize(e.clientX,e.clientY)}}__onKeyPress(t){this.isVisible()&&t.key===ft.Escape&&(this.hide(),t.preventDefault())}__startResize(t,e){this.state.mouseX=t,this.state.mouseY=e,this.state.mousedown=!0,this.content.classList.add(no)}__resize(t,e){const n=t,i=e,s=Math.max(n0,this.container.offsetWidth-(n-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=s),this.container.style.width=s,this.state.mouseX=n,this.state.mouseY=i}},s0=class extends Hn{constructor(t,e){super(t,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",n=>n.stopPropagation()),this.container.addEventListener("mousedown",n=>n.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(e)}handleEvent(t){t.type==="transitionend"&&this.__onTransitionEnd(t)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new Me("Tooltip cannot be toggled")}show(t){if(this.state.state!==0)throw new Me("Initialized tooltip cannot be re-initialized");t.className&&xa(this.container,t.className),t.style&&Object.assign(this.container.style,t.style),this.state.state=3,this.update(t.content,t),this.state.data=t.data,this.state.state=1,this.viewer.dispatchEvent(new fd(this,this.state.data)),this.__waitImages()}update(t,e){this.content.innerHTML=t;const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.state.arrow=parseInt(sn(this.arrow,"border-top-width"),10),this.state.border=parseInt(sn(this.container,"border-top-left-radius"),10),this.move(e??this.state.config),this.__waitImages()}move(t){var a;if(this.state.state!==1&&this.state.state!==3)throw new Me("Uninitialized tooltip cannot be moved");t.box=t.box??((a=this.state.config)==null?void 0:a.box)??{width:0,height:0},this.state.config=t;const e=this.container,n=this.arrow,i={posClass:jc(t.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(i,t);let s=null,r=null;if(i.top<0?s="bottom":i.top+i.height>this.viewer.state.size.height&&(s="top"),i.left<0?r="right":i.left+i.width>this.viewer.state.size.width&&(r="left"),r||s){const l=wa(i.posClass);s&&(i.posClass[l?0:1]=s),r&&(i.posClass[l?1:0]=r),this.__computeTooltipPosition(i,t)}e.style.top=i.top+"px",e.style.left=i.left+"px",n.style.top=i.arrowTop+"px",n.style.left=i.arrowLeft+"px";const o=i.posClass.join("-");o!==this.state.pos&&(e.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=o,e.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new Ih(this.state.data));const t=parseFloat(sn(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},t*2)}__onTransitionEnd(t){if(t.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(t,e){const n=this.state.arrow,i=e.top,s=t.height,r=e.left,o=t.width,a=n+this.state.border,l=e.box.width/2+n*2,c=e.box.height/2+n*2;switch(t.posClass.join("-")){case"top-left":t.top=i-c-s,t.left=r+a-o,t.arrowTop=s,t.arrowLeft=o-a-n;break;case"top-center":t.top=i-c-s,t.left=r-o/2,t.arrowTop=s,t.arrowLeft=o/2-n;break;case"top-right":t.top=i-c-s,t.left=r-a,t.arrowTop=s,t.arrowLeft=n;break;case"bottom-left":t.top=i+c,t.left=r+a-o,t.arrowTop=-n*2,t.arrowLeft=o-a-n;break;case"bottom-center":t.top=i+c,t.left=r-o/2,t.arrowTop=-n*2,t.arrowLeft=o/2-n;break;case"bottom-right":t.top=i+c,t.left=r-a,t.arrowTop=-n*2,t.arrowLeft=n;break;case"left-top":t.top=i+a-s,t.left=r-l-o,t.arrowTop=s-a-n,t.arrowLeft=o;break;case"center-left":t.top=i-s/2,t.left=r-l-o,t.arrowTop=s/2-n,t.arrowLeft=o;break;case"left-bottom":t.top=i-a,t.left=r-l-o,t.arrowTop=n,t.arrowLeft=o;break;case"right-top":t.top=i+a-s,t.left=r+l,t.arrowTop=s-a-n,t.arrowLeft=-n*2;break;case"center-right":t.top=i-s/2,t.left=r+l,t.arrowTop=s/2-n,t.arrowLeft=-n*2;break;case"right-bottom":t.top=i-a,t.left=r+l,t.arrowTop=n,t.arrowLeft=-n*2;break}}__waitImages(){const t=this.content.querySelectorAll("img");if(t.length>0){const e=[];t.forEach(n=>{n.complete||e.push(new Promise(i=>{n.onload=i,n.onerror=i}))}),e.length&&Promise.all(e).then(()=>{if(this.state.state===1||this.state.state===3){const n=this.container.getBoundingClientRect();this.state.width=n.right-n.left,this.state.height=n.bottom-n.top,this.move(this.state.config)}})}}},r0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,gs=class{constructor(t){this.viewer=t,this.config=t.config,this.state=t.state}destroy(){}},$t=new I,ks=new an(0,0,0,"ZXY"),o0=class extends gs{constructor(t){super(t)}fovToZoomLevel(t){const e=Math.round((t-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return Ne.clamp(e-2*(e-50),0,100)}zoomLevelToFov(t){return this.config.maxFov+t/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(t){return Ne.radToDeg(2*Math.atan(Math.tan(Ne.degToRad(t)/2)*this.state.aspect))}hFovToVFov(t){return Ne.radToDeg(2*Math.atan(Math.tan(Ne.degToRad(t)/2)/this.state.aspect))}getAnimationProperties(t,e,n){const i=!pt(e),s=!pt(n),r={};let o=null;if(i){const a=this.viewer.getPosition(),l=Fc(a.yaw,e.yaw);r.yaw={start:a.yaw,end:a.yaw+l},r.pitch={start:a.pitch,end:e.pitch},o=jo(t,Bc(a,e))}if(s){const a=this.viewer.getZoomLevel(),l=Math.abs(n-a);r.zoom={start:a,end:n},o===null&&(o=jo(t,Math.PI/4*l/100))}return o===null?typeof t=="number"?o=t:o=$o:o=Math.max($o,o),{duration:o,properties:r}}getTransitionOptions(t){let e;const n=this.config.defaultTransition??Ni.defaultTransition;return t.transition===!1||t.transition===null?e=null:t.transition===!0?e={...n}:t.transition==="fade-only"?(Ze('PanoramaOptions transition "fade-only" value is deprecated, set transition.rotation=false instead.'),e={...n,rotation:!1}):typeof t.transition=="object"?e={...n,...t.transition}:e=this.config.defaultTransition,"speed"in t&&(Ze("PanoramaOptions speed is deprecated, set transition.speed instead."),e&&(e.speed=t.speed)),e}textureCoordsToSphericalCoords(t){var n;if(!((n=this.state.textureData)!=null&&n.panoData))throw new Me("Current adapter does not support texture coordinates or no texture has been loaded");const e=this.viewer.adapter.textureCoordsToSphericalCoords(t,this.state.textureData.panoData);return!ks.equals(this.viewer.renderer.panoramaPose)||!ks.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(e,$t),$t.applyEuler(this.viewer.renderer.panoramaPose),$t.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords($t)):e}sphericalCoordsToTextureCoords(t){var e;if(!((e=this.state.textureData)!=null&&e.panoData))throw new Me("Current adapter does not support texture coordinates or no texture has been loaded");return(!ks.equals(this.viewer.renderer.panoramaPose)||!ks.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(t,$t),Qo($t,this.viewer.renderer.sphereCorrection),Qo($t,this.viewer.renderer.panoramaPose),t=this.vector3ToSphericalCoords($t)),this.viewer.adapter.sphericalCoordsToTextureCoords(t,this.state.textureData.panoData)}sphericalCoordsToVector3(t,e,n=ei){return e||(e=new I),e.x=n*-Math.cos(t.pitch)*Math.sin(t.yaw),e.y=n*Math.sin(t.pitch),e.z=n*Math.cos(t.pitch)*Math.cos(t.yaw),e}vector3ToSphericalCoords(t){const e=Math.acos(t.y/Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),n=Math.atan2(t.x,t.z);return{yaw:n<0?-n:Math.PI*2-n,pitch:Math.PI/2-e}}viewerCoordsToVector3(t){const e=this.viewer.renderer.getIntersections(t).filter(n=>n.object.userData[Bn]);return e.length?e[0].point:null}viewerCoordsToSphericalCoords(t){const e=this.viewerCoordsToVector3(t);return e?this.vector3ToSphericalCoords(e):null}vector3ToViewerCoords(t){const e=t.clone();return e.project(this.viewer.renderer.camera),{x:Math.round((e.x+1)/2*this.state.size.width),y:Math.round((1-e.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(t){return this.sphericalCoordsToVector3(t,$t),this.vector3ToViewerCoords($t)}isPointVisible(t){let e,n;if(t instanceof I)e=t,n=this.vector3ToViewerCoords(t);else if(ya(t))e=this.sphericalCoordsToVector3(t,$t),n=this.vector3ToViewerCoords(e);else return!1;return e.dot(this.viewer.state.direction)>0&&n.x>=0&&n.x<=this.viewer.state.size.width&&n.y>=0&&n.y<=this.viewer.state.size.height}cleanPosition(t){if("yaw"in t||"pitch"in t){if(!("yaw"in t)||!("pitch"in t))throw new Me("Position is missing 'yaw' or 'pitch'");return{yaw:tn(t.yaw),pitch:tn(t.pitch,!0)}}else return this.textureCoordsToSphericalCoords(t)}cleanSphereCorrection(t){return{pan:tn((t==null?void 0:t.pan)||0),tilt:tn((t==null?void 0:t.tilt)||0,!0),roll:tn((t==null?void 0:t.roll)||0,!0,!1)}}cleanPanoramaPose(t){return{pan:Ne.degToRad((t==null?void 0:t.poseHeading)||0),tilt:Ne.degToRad((t==null?void 0:t.posePitch)||0),roll:Ne.degToRad((t==null?void 0:t.poseRoll)||0)}}cleanPanoramaOptions(t,e){return e!=null&&e.isEquirectangular&&(pt(t.zoom)&&!pt(e.initialFov)&&(t={...t,zoom:this.fovToZoomLevel(this.hFovToVFov(e.initialFov))}),pt(t.position)&&!pt(e.initialHeading)&&!pt(e.initialPitch)&&(t={...t,position:{yaw:tn(e.initialHeading),pitch:tn(e.initialPitch,!0)}})),t}},a0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,l0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,Sr=class Hd{constructor(){this.$=Hd.IDLE}is(...e){return e.some(n=>this.$&n)}set(e){this.$=e}add(e){this.$|=e}remove(e){this.$&=~e}};Sr.IDLE=0;Sr.CLICK=1;Sr.MOVING=2;var ct=Sr,c0=class extends gs{constructor(t){super(t),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new ct,this.keyHandler=new xr,this.resizeObserver=new ResizeObserver(Ma(()=>this.viewer.autoSize(),50)),this.moveThreshold=Rc*yt.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(ji.type,this),this.viewer.addEventListener(rs.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(ji.type,this),this.viewer.removeEventListener(rs.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(t){switch(t.type){case"keydown":this.__onKeyDown(t);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(t);break;case"mouseup":this.__onMouseUp(t);break;case"touchmove":this.__onTouchMove(t);break;case"touchend":this.__onTouchEnd(t);break;case"fullscreenchange":this.__onFullscreenChange();break;case ji.type:this.__applyMoveDelta();break;case rs.type:this.__clearMoveDelta();break}if(!kc(t,"."+fs))switch(t.type){case"mousedown":this.__onMouseDown(t);break;case"touchstart":this.__onTouchStart(t);break;case"wheel":this.__onMouseWheel(t);break}}__onKeyDown(t){var n;if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=t.key===ft.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(vt.CTRL_ZOOM))),!this.viewer.dispatchEvent(new Un(t.key,t))||!this.state.keyboardEnabled)return;const e=(n=this.config.keyboardActions)==null?void 0:n[t.key];if(typeof e=="function"){e(this.viewer,t),t.preventDefault();return}if(!(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey)&&e&&!this.keyHandler.pending){switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(e),t.preventDefault()}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(t=>{t==="ZOOM_IN"||t==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(t){this.step.add(ct.CLICK),this.data.startMouseX=t.clientX,this.data.startMouseY=t.clientY}__onMouseUp(t){this.step.is(ct.CLICK,ct.MOVING)&&this.__stopMove(t.clientX,t.clientY,t,t.button===2)}__onMouseMove(t){this.config.mousemove&&this.step.is(ct.CLICK,ct.MOVING)&&(t.preventDefault(),this.__doMove(t.clientX,t.clientY)),this.__handleObjectsEvents(t)}__onTouchStart(t){t.touches.length===1?(this.step.add(ct.CLICK),this.data.startMouseX=t.touches[0].clientX,this.data.startMouseY=t.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const e=t.touches[0];this.__stopMove(e.clientX,e.clientY,t,!0),this.data.longtouchTimeout=null},Lc))):t.touches.length===2&&(this.step.set(ct.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(t),t.preventDefault()))}__onTouchEnd(t){if(this.__cancelLongTouch(),this.step.is(ct.CLICK,ct.MOVING)){if(t.preventDefault(),this.__cancelTwoFingersOverlay(),t.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(t.touches.length===0){const e=t.changedTouches[0];this.__stopMove(e.clientX,e.clientY,t)}}}__onTouchMove(t){if(this.__cancelLongTouch(),!!this.config.mousemove)if(t.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(ct.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:vt.TWO_FINGERS,image:a0,title:this.config.lang.twoFingers})},Ic));else if(this.step.is(ct.CLICK,ct.MOVING)){t.preventDefault();const e=t.touches[0];this.__doMove(e.clientX,e.clientY)}}else this.__doMoveZoom(t),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(vt.TWO_FINGERS))}__onMouseWheel(t){if(!this.config.mousewheel||!t.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:vt.CTRL_ZOOM,image:l0,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(vt.CTRL_ZOOM),Uc);return}t.preventDefault(),t.stopPropagation();const e=t.deltaY/Math.abs(t.deltaY)*5*this.config.zoomSpeed;e!==0&&this.viewer.dynamics.zoom.step(-e,5)}__onFullscreenChange(){const t=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(t?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new Ji(t))}__resetMove(){this.step.set(ct.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(t){this.viewer.stopAll(),this.__resetMove();const e=Zo(t);this.step.set(ct.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=e}__stopMove(t,e,n,i=!1){this.step.is(ct.CLICK)&&!this.__moveThresholdReached(t,e)&&this.__doClick(t,e,n,i),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(t,e,n,i=!1){const s=this.viewer.container.getBoundingClientRect(),r=t-s.left,o=e-s.top,a=this.viewer.renderer.getIntersections({x:r,y:o}),l=a.find(c=>c.object.userData[Bn]);if(l){const c=this.viewer.dataHelper.vector3ToSphericalCoords(l.point),d={rightclick:i,originalEvent:n,target:ir(n),clientX:t,clientY:e,viewerX:r,viewerY:o,yaw:c.yaw,pitch:c.pitch,objects:a.map(f=>f.object).filter(f=>!f.userData[Bn])};try{const f=this.viewer.dataHelper.sphericalCoordsToTextureCoords(d);Object.assign(d,f)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-d.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-d.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Mh(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new mh(d)),this.data.dblclickData=gr(d),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},Pc))}}__handleObjectsEvents(t){if(!qc(this.state.objectsObservers)&&t.composedPath().includes(this.viewer.container)){const e=Vc(this.viewer.container),n={x:t.clientX-e.x,y:t.clientY-e.y},i=this.viewer.renderer.getIntersections(n),s=(r,o,a)=>{this.viewer.dispatchEvent(new a(t,r,n,o))};for(const[r,o]of Object.entries(this.state.objectsObservers)){const a=i.find(l=>l.object.userData[r]);a?(o&&a.object!==o&&(s(o,r,ea),this.state.objectsObservers[r]=null),o?s(a.object,r,Ad):(this.state.objectsObservers[r]=a.object,s(a.object,r,Sd))):o&&(s(o,r,ea),this.state.objectsObservers[r]=null)}}}__doMove(t,e){if(this.step.is(ct.CLICK)&&this.__moveThresholdReached(t,e))this.viewer.stopAll(),this.__resetMove(),this.step.set(ct.MOVING),this.data.mouseX=t,this.data.mouseY=e,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(ct.MOVING)){const n=(t-this.data.mouseX)*Math.cos(this.state.roll)-(e-this.data.mouseY)*Math.sin(this.state.roll),i=(e-this.data.mouseY)*Math.cos(this.state.roll)+(t-this.data.mouseX)*Math.sin(this.state.roll),s={yaw:this.config.moveSpeed*(n/this.state.size.width)*Ne.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(i/this.state.size.height)*Ne.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=s.yaw,this.data.moveDelta.pitch+=s.pitch,this.data.mouseX=t,this.data.mouseY=e}}__moveThresholdReached(t,e){return Math.abs(t-this.data.startMouseX)>=this.moveThreshold||Math.abs(e-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(t){if(this.step.is(ct.MOVING)){t.preventDefault();const e=Zo(t);this.__doMove(e.center.x,e.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((e.distance-this.data.pinchDist)/yt.pixelRatio),this.data.pinchDist=e.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const e=this.viewer.getPosition();this.viewer.rotate({yaw:e.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:e.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const e=this.viewer.getZoomLevel();this.viewer.zoom(e+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};Ge.enabled=!1;var Vs=new Ke,Vl=new et,Gl=new Bi,h0=class extends gs{constructor(t){super(t),this.frustumNeedsUpdate=!0,this.renderer=new M_(this.config.rendererParameters),this.renderer.setPixelRatio(yt.pixelRatio),this.renderer.outputColorSpace=Mn,this.renderer.toneMapping=ec,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new Xo,this.camera=new Ot(50,16/9,.1,2*ei),this.camera.matrixAutoUpdate=!1;const e=new Gt(new us(ei).scale(-1,1,1),new hs({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));e.userData={[Bn]:!0},this.scene.add(e),this.raycaster=new y_,this.frustum=new ma,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",n=>n.preventDefault()),this.viewer.addEventListener(ss.type,this),this.viewer.addEventListener(_n.type,this),this.viewer.addEventListener(es.type,this),this.viewer.addEventListener(ts.type,this),this.viewer.addEventListener(Rt.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(t=>this.__renderLoop(t))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(ss.type,this),this.viewer.removeEventListener(_n.type,this),this.viewer.removeEventListener(es.type,this),this.viewer.removeEventListener(ts.type,this),this.viewer.removeEventListener(Rt.type,this),super.destroy()}handleEvent(t){switch(t.type){case ss.type:this.__onSizeUpdated();break;case _n.type:this.__onZoomUpdated();break;case es.type:this.__onPositionUpdated();break;case ts.type:this.__onPositionUpdated();break;case Rt.type:t.containsOptions("fisheye")&&this.__onPositionUpdated(),t.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(t){t?this.customRenderer=t(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(t){const e=this.timestamp?t-this.timestamp:0;this.timestamp=t,this.viewer.dispatchEvent(new ji(t,e)),this.viewer.dynamics.update(e),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new id))}setTexture(t){this.meshContainer||(this.meshContainer=new Si,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(t.panoData),this.viewer.adapter.setTexture(this.mesh,t,!1),this.meshContainer.add(this.mesh),this.state.textureData=t,this.viewer.needsUpdate()}setPanoramaPose(t,e=this.mesh){const n=this.viewer.dataHelper.cleanPanoramaPose(t),i=(n.pan?1:0)+(n.tilt?1:0)+(n.roll?1:0);!wi.useNewAnglesOrder&&i>1&&(Ze("'panoData' Euler angles have changed in version 5.11.0."),Ze("Remove your 'useNewAnglesOrder' override to remove this warning (you might have to adapt your poseHeading/posePitch/poseRoll parameters).")),wi.useNewAnglesOrder?e.rotation.set(n.tilt,n.pan,n.roll,"YXZ"):e.rotation.set(-n.tilt,-n.pan,-n.roll,"ZXY")}setSphereCorrection(t,e=this.meshContainer){const n=this.viewer.dataHelper.cleanSphereCorrection(t),i=(n.pan?1:0)+(n.tilt?1:0)+(n.roll?1:0);!wi.useNewAnglesOrder&&i>1&&(Ze("'sphereCorrection' Euler angles have changed in version 5.11.0."),Ze("Remove your 'useNewAnglesOrder' override to remove this warning (you might have to adapt your poseHeading/posePitch/poseRoll parameters).")),wi.useNewAnglesOrder?e.rotation.set(n.tilt,n.pan,n.roll,"YXZ"):e.rotation.set(n.tilt,n.pan,n.roll,"ZXY")}transition(t,e,n){const i=n.effect==="fade"||n.rotation,s=!pt(e.position),r=!pt(e.zoom),o=new ba(s?this.viewer.dataHelper.cleanPosition(e.position):void 0,e.zoom);this.viewer.dispatchEvent(o);const a=new Si,l=this.viewer.adapter.createMesh(t.panoData);if(this.viewer.adapter.setTexture(l,t,!0),this.viewer.adapter.setTextureOpacity(l,0),this.setPanoramaPose(t.panoData,l),this.setSphereCorrection(e.sphereCorrection,a),s&&!n.rotation){const p=this.viewer.getPosition(),m=new I(0,1,0);a.rotateOnWorldAxis(m,o.position.yaw-p.yaw);const v=new I(0,1,0).cross(this.camera.getWorldDirection(new I)).normalize();a.rotateOnWorldAxis(v,o.position.pitch-p.pitch)}a.add(l),this.scene.add(a),this.renderer.setRenderTarget(new On),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null);const{duration:c,properties:d}=this.viewer.dataHelper.getAnimationProperties(n.speed,n.rotation?o.position:null,i?o.zoomLevel:null),f=new ar({properties:{...d,opacity:{start:0,end:1}},duration:c,easing:"inOutCubic",onTick:p=>{switch(n.effect){case"fade":this.viewer.adapter.setTextureOpacity(l,p.opacity);break;case"black":case"white":p.opacity<.5?this.renderer.toneMappingExposure=n.effect==="black"?Ne.mapLinear(p.opacity,0,.5,1,0):Ne.mapLinear(p.opacity,0,.5,1,4):(this.renderer.toneMappingExposure=n.effect==="black"?Ne.mapLinear(p.opacity,.5,1,0,1):Ne.mapLinear(p.opacity,.5,1,4,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(l,1),r&&!i&&this.viewer.dynamics.zoom.setValue(o.zoomLevel));break}s&&n.rotation&&this.viewer.dynamics.position.setValue({yaw:p.yaw,pitch:p.pitch}),r&&i&&this.viewer.dynamics.zoom.setValue(p.zoom),this.viewer.needsUpdate()}});return f.then(p=>{a.remove(l),this.scene.remove(a),p?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=l,this.meshContainer.add(l),this.state.textureData=t,this.setPanoramaPose(t.panoData),this.setSphereCorrection(e.sphereCorrection),s&&!n.rotation&&this.viewer.rotate(e.position)):(this.viewer.adapter.disposeTexture(t),this.viewer.adapter.disposeMesh(l))}),f}getIntersections(t){var n;Vs.x=2*t.x/this.state.size.width-1,Vs.y=-2*t.y/this.state.size.height+1,this.raycaster.setFromCamera(Vs,this.camera);const e=this.raycaster.intersectObjects(this.scene.children,!0).filter(i=>i.object.visible).filter(i=>i.object.isMesh&&!!i.object.userData);return(n=this.customRenderer)!=null&&n.getIntersections&&e.push(...this.customRenderer.getIntersections(this.raycaster,Vs)),e}isObjectVisible(t){if(!t)return!1;if(this.frustumNeedsUpdate&&(Vl.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(Vl),this.frustumNeedsUpdate=!1),t.isVector3)return this.frustum.containsPoint(t);if(t.isMesh&&t.geometry){const e=t;return e.geometry.boundingBox||e.geometry.computeBoundingBox(),Gl.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld),this.frustum.intersectsBox(Gl)}else return t.isObject3D?this.frustum.intersectsObject(t):!1}addObject(t){this.scene.add(t)}removeObject(t){this.scene.remove(t)}cleanScene(t){const e=n=>{var i;(i=n.map)==null||i.dispose(),n.uniforms&&Object.values(n.uniforms).forEach(s=>{var r,o;(o=(r=s.value)==null?void 0:r.dispose)==null||o.call(r)}),n.dispose()};t.traverse(n=>{var i,s;(i=n.geometry)==null||i.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(r=>{e(r)}):e(n.material)),n instanceof Xo||(s=n.dispose)==null||s.call(n),n!==t&&this.cleanScene(n)})}},d0=class extends va{load(t,e,n,i,s){const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(r,{signal:s}).then(o=>{if(o.status===200||o.status===0){const a=o.body.getReader(),l=o.headers.get("Content-Length")||o.headers.get("X-File-Size"),c=l?parseInt(l):0,d=c!==0;let f=0;const p=new ReadableStream({start(m){v();function v(){a.read().then(({done:x,value:h})=>{if(x)m.close();else{f+=h.byteLength;const u=new ProgressEvent("progress",{lengthComputable:d,loaded:f,total:c});n(u),m.enqueue(h),v()}}).catch(x=>{i(x)})}}});return new Response(p)}else throw new Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>o.blob()).then(o=>{e(o)}).catch(o=>{i(o)})}},u0=class extends va{load(t,e,n,i){const s=document.createElement("img");function r(){l(),e(this)}function o(c){if(l(),i!=null&&i.aborted){const d=new Error;d.name="AbortError",d.message="The operation was aborted.",n(d)}else n(c)}function a(){s.src=""}function l(){s.removeEventListener("load",r,!1),s.removeEventListener("error",o,!1),i==null||i.removeEventListener("abort",a,!1)}return s.addEventListener("load",r,!1),s.addEventListener("error",o,!1),i==null||i.addEventListener("abort",a,!1),!t.startsWith("data:")&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),s.src=t,s}},f0=class extends gs{constructor(t){super(t),this.abortCtrl={},this.fileLoader=new d0,this.imageLoader=new u0,this.config.withCredentials&&(this.fileLoader.setWithCredentials(!0),this.imageLoader.setCrossOrigin("use-credentials"))}destroy(){this.abortLoading(),super.destroy()}abortLoading(){Object.values(this.abortCtrl).forEach(t=>t.abort()),this.abortCtrl={}}loadFile(t,e,n){const i=Mi.get(t,n);if(i){if(i instanceof Blob)return e==null||e(100),Promise.resolve(i);Mi.remove(t,n)}return this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(t)),new Promise((s,r)=>{let o=0;e==null||e(o),this.fileLoader.load(t,a=>{o=100,e==null||e(o),Mi.add(t,n,a),s(a)},a=>{if(a.lengthComputable){const l=a.loaded/a.total*100;l>o&&(o=l,e==null||e(o))}},a=>{r(a)},this.__getAbortSignal(n))})}loadImage(t,e,n){const i=Mi.get(t,n);return i?(e==null||e(100),i instanceof Blob?this.blobToImage(i):Promise.resolve(i)):!e&&!this.config.requestHeaders?new Promise((s,r)=>{this.imageLoader.load(t,o=>{Mi.add(t,n,o),s(o)},o=>{r(o)},this.__getAbortSignal(n))}):this.loadFile(t,e,n).then(s=>this.blobToImage(s))}blobToImage(t){return new Promise((e,n)=>{const i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(i.src),e(i)},i.onerror=n,i.src=URL.createObjectURL(t)})}preloadPanorama(t){return this.viewer.adapter.supportsPreload(t)?this.viewer.adapter.loadTexture(t,!1):Promise.reject(new Me("Current adapter does not support preload"))}__getAbortSignal(t){var e;return t?((e=this.abortCtrl[t])!=null&&e.signal.aborted&&delete this.abortCtrl[t],this.abortCtrl[t]||(this.abortCtrl[t]=new AbortController),this.abortCtrl[t].signal):null}},p0=class extends gs{constructor(t){super(t),this.zoom=new qi(e=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(e),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new _n(e))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new nh(e=>{this.viewer.dataHelper.sphericalCoordsToVector3(e,this.viewer.state.direction),this.viewer.dispatchEvent(new es(e))},{yaw:new qi(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new qi(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new qi(e=>{this.viewer.state.roll=e,this.viewer.dispatchEvent(new ts(e))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(Ne.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(Ne.degToRad(this.config.moveSpeed*50))}update(t){this.zoom.update(t),this.position.update(t),this.roll.update(t)}},m0=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new I(0,0,ei),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},wi=class extends rh{constructor(t){var e,n,i;if(super(),this.plugins={},this.children=[],this.onResize=Ma(()=>this.navbar.autoSize(),500),this.parent=zc(t.container),!this.parent)throw new Me('"container" element not found.');this.parent[Bn]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),eh(this.parent),Qc(this.container,"core"),this.state=new m0,this.config=K_(t),this.__setSize(this.config.size),this.overlay=new t0(this);try{yt.load()}catch(s){console.error(s),this.showError(this.config.lang.webglError);return}Mi.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new h0(this),this.textureLoader=new f0(this),this.eventsHandler=new c0(this),this.dataHelper=new o0(this),this.dynamics=new p0(this),(n=(e=this.adapter).init)==null||n.call(e),this.loader=new Q_(this),this.navbar=new J_(this),this.panel=new i0(this),this.notification=new e0(this),this.autoSize(),this.setCursor(null),Sa(yt.isTouchEnabled,s=>{mr(this.container,"psv--is-touch",s)}),this.config.plugins.forEach(([s,r])=>{this.plugins[s.id]=new s(this,r)});for(const s of Object.values(this.plugins))(i=s.init)==null||i.call(s);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){var t,e,n,i,s,r;this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[o,a]of Object.entries(this.plugins))a.destroy(),delete this.plugins[o];this.children.slice().forEach(o=>o.destroy()),this.children.length=0,(t=this.eventsHandler)==null||t.destroy(),(e=this.renderer)==null||e.destroy(),(n=this.textureLoader)==null||n.destroy(),(i=this.dataHelper)==null||i.destroy(),(s=this.adapter)==null||s.destroy(),(r=this.dynamics)==null||r.destroy(),this.parent.removeChild(this.container),delete this.parent[Bn]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new ns)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(t){if(typeof t=="string")return this.plugins[t];{const e=ta(t);return e?this.plugins[e.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return Gc(this.parent,yt.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(t){t?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new ss(this.getSize())),this.onResize())}setPanorama(t,e={}){var r;this.textureLoader.abortLoading(),(r=this.state.transitionAnimation)==null||r.cancel();const n=this.dataHelper.getTransitionOptions(e);e.showLoader===void 0&&(e.showLoader=!0),e.caption===void 0&&(e.caption=this.config.caption),e.description===void 0&&(e.description=this.config.description),!e.panoData&&typeof this.config.panoData=="function"&&(e.panoData=this.config.panoData),this.hideError(),this.resetIdleTimer(),this.config.panorama=t,this.config.caption=e.caption,this.config.description=e.description,this.config.sphereCorrection=e.sphereCorrection;const i=o=>{if(Kc(o))return!1;if(this.loader.hide(),this.state.loadingPromise=null,o)throw this.navbar.setCaption(""),this.showError(this.config.lang.loadError),console.error(o),this.dispatchEvent(new Xh(t,o)),o;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(e.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new Hh(t));const s=this.adapter.loadTexture(this.config.panorama,!0,e.panoData).then(o=>{if(o.panorama!==this.config.panorama)throw this.adapter.disposeTexture(o),Ko();const a=this.dataHelper.cleanPanoramaOptions(e,o.panoData);return(!pt(a.zoom)||!pt(a.position))&&this.stopAll(),{textureData:o,cleanOptions:a}});return!n||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=s.then(({textureData:o,cleanOptions:a})=>{this.renderer.show(),this.renderer.setTexture(o),this.renderer.setPanoramaPose(o.panoData),this.renderer.setSphereCorrection(e.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new Ci(o)),pt(a.zoom)||this.zoom(a.zoom),pt(a.position)||this.rotate(a.position)}).then(()=>i(),o=>i(o)):this.state.loadingPromise=s.then(({textureData:o,cleanOptions:a})=>(this.loader.hide(),this.dispatchEvent(new Ci(o)),this.state.transitionAnimation=this.renderer.transition(o,a,n),this.state.transitionAnimation)).then(o=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new $h(o)),!o)throw Ko()}).then(()=>i(),o=>i(o)),this.state.loadingPromise}setOptions(t){const e={...this.config,...t};for(let[n,i]of Object.entries(t)){if(!(n in Ni)){Ze(`Unknown option ${n}`);continue}if(n in kl){Ze(kl[n]);continue}switch(n in na&&(i=na[n](i,{rawConfig:e,defValue:Ni[n]})),this.config[n]=i,n){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new _n(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new Rt(Object.keys(t)))}setOption(t,e){this.setOptions({[t]:e})}showError(t){this.overlay.show({id:vt.ERROR,image:r0,title:t,dismissible:!1})}hideError(){this.overlay.hide(vt.ERROR)}rotate(t){const e=new uh(this.dataHelper.cleanPosition(t));this.dispatchEvent(e),!e.defaultPrevented&&this.dynamics.position.setValue(e.position)}zoom(t){this.dynamics.zoom.setValue(t)}zoomIn(t=1){this.dynamics.zoom.step(t)}zoomOut(t=1){this.dynamics.zoom.step(-t)}animate(t){const e=ya(t),n=!pt(t.zoom),i=new ba(e?this.dataHelper.cleanPosition(t):void 0,t.zoom);if(this.dispatchEvent(i),i.defaultPrevented)return;this.stopAll();const{duration:s,properties:r}=this.dataHelper.getAnimationProperties(t.speed,i.position,i.zoomLevel);return s?(this.state.animation=new ar({properties:r,duration:s,easing:t.easing||"inOutSine",onTick:o=>{e&&this.dynamics.position.setValue({yaw:o.yaw,pitch:o.pitch}),n&&this.dynamics.zoom.setValue(o.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(e&&this.rotate(i.position),n&&this.zoom(i.zoomLevel),new ar(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(t){this.__setSize(t),this.autoSize()}__setSize(t){const e=t;["width","height"].forEach(n=>{t&&e[n]&&(/^[0-9.]+$/.test(e[n])&&(e[n]+="px"),this.parent.style[n]=e[n])})}enterFullscreen(){this.isFullscreenEnabled()||Wc(this.parent,yt.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&Xc(yt.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(t){return new s0(this,t)}setCursor(t){this.state.cursorOverride=t,t?this.container.style.cursor=t:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(t){this.state.objectsObservers[t]||(this.state.objectsObservers[t]=null)}unobserveObjects(t){delete this.state.objectsObservers[t]}stopAll(){return this.dispatchEvent(new rs),this.disableIdleTimer(),this.stopAnimation()}};wi.useNewAnglesOrder=!0;/*!
 * Photo Sphere Viewer / Virtual Tour Plugin 5.11.5
 * @copyright 2015-2025 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var g0=Object.defineProperty,v0=(t,e)=>{for(var n in e)g0(t,n,{get:e[n],enumerable:!0})},_0={};v0(_0,{EnterArrowEvent:()=>Yd,LeaveArrowEvent:()=>Zd,NodeChangedEvent:()=>Gd});var kd=class Vd extends Mr{constructor(e,n){super(Vd.type),this.node=e,this.data=n}};kd.type="node-changed";var Gd=kd,Wd=class Xd extends Mr{constructor(e,n){super(Xd.type),this.link=e,this.node=n}};Wd.type="enter-arrow";var Yd=Wd,qd=class $d extends Mr{constructor(e,n){super($d.type),this.link=e,this.node=n}};qd.type="leave-arrow";var Zd=qd,x0=class extends Tt{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ke(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}},vi=new I,Wl=new et,Xl=new et,Yl=new I,ql=new I,M0=class{constructor(t={}){const e=this;let n,i,s,r;const o={objects:new WeakMap},a=t.element!==void 0?t.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a,this.getSize=function(){return{width:n,height:i}},this.render=function(m,v){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Wl.copy(v.matrixWorldInverse),Xl.multiplyMatrices(v.projectionMatrix,Wl),c(m,m,v),p(m)},this.setSize=function(m,v){n=m,i=v,s=n/2,r=i/2,a.style.width=m+"px",a.style.height=v+"px"};function l(m){m.isCSS2DObject&&(m.element.style.display="none");for(let v=0,x=m.children.length;v<x;v++)l(m.children[v])}function c(m,v,x){if(m.visible===!1){l(m);return}if(m.isCSS2DObject){vi.setFromMatrixPosition(m.matrixWorld),vi.applyMatrix4(Xl);const h=vi.z>=-1&&vi.z<=1&&m.layers.test(x.layers)===!0,u=m.element;u.style.display=h===!0?"":"none",h===!0&&(m.onBeforeRender(e,v,x),u.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(vi.x*s+s)+"px,"+(-vi.y*r+r)+"px)",u.parentNode!==a&&a.appendChild(u),m.onAfterRender(e,v,x));const w={distanceToCameraSquared:d(x,m)};o.objects.set(m,w)}for(let h=0,u=m.children.length;h<u;h++)c(m.children[h],v,x)}function d(m,v){return Yl.setFromMatrixPosition(m.matrixWorld),ql.setFromMatrixPosition(v.matrixWorld),Yl.distanceToSquared(ql)}function f(m){const v=[];return m.traverseVisible(function(x){x.isCSS2DObject&&v.push(x)}),v}function p(m){const v=f(m).sort(function(h,u){if(h.renderOrder!==u.renderOrder)return u.renderOrder-h.renderOrder;const w=o.objects.get(h).distanceToCameraSquared,S=o.objects.get(u).distanceToCameraSquared;return w-S}),x=v.length;for(let h=0,u=v.length;h<u;h++)v[h].element.style.zIndex=x-h}}},$l=new I,E0=new ti,Zl=new I,S0=class extends Tt{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}},Jt=new et,y0=new et,w0=class{constructor(t={}){const e=this;let n,i,s,r;const o={camera:{style:""},objects:new WeakMap},a=t.element!==void 0?t.element:document.createElement("div");a.style.overflow="hidden",this.domElement=a;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",a.appendChild(l);const c=document.createElement("div");c.style.transformStyle="preserve-3d",l.appendChild(c),this.getSize=function(){return{width:n,height:i}},this.render=function(x,h){const u=h.projectionMatrix.elements[5]*r;h.view&&h.view.enabled?(l.style.transform=`translate( ${-h.view.offsetX*(n/h.view.width)}px, ${-h.view.offsetY*(i/h.view.height)}px )`,l.style.transform+=`scale( ${h.view.fullWidth/h.view.width}, ${h.view.fullHeight/h.view.height} )`):l.style.transform="",x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),h.parent===null&&h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld();let w,S;h.isOrthographicCamera&&(w=-(h.right+h.left)/2,S=(h.top+h.bottom)/2);const T=h.view&&h.view.enabled?h.view.height/h.view.fullHeight:1,N=h.isOrthographicCamera?`scale( ${T} )scale(`+u+")translate("+d(w)+"px,"+d(S)+"px)"+f(h.matrixWorldInverse):`scale( ${T} )translateZ(`+u+"px)"+f(h.matrixWorldInverse),b=(h.isPerspectiveCamera?"perspective("+u+"px) ":"")+N+"translate("+s+"px,"+r+"px)";o.camera.style!==b&&(c.style.transform=b,o.camera.style=b),v(x,x,h)},this.setSize=function(x,h){n=x,i=h,s=n/2,r=i/2,a.style.width=x+"px",a.style.height=h+"px",l.style.width=x+"px",l.style.height=h+"px",c.style.width=x+"px",c.style.height=h+"px"};function d(x){return Math.abs(x)<1e-10?0:x}function f(x){const h=x.elements;return"matrix3d("+d(h[0])+","+d(-h[1])+","+d(h[2])+","+d(h[3])+","+d(h[4])+","+d(-h[5])+","+d(h[6])+","+d(h[7])+","+d(h[8])+","+d(-h[9])+","+d(h[10])+","+d(h[11])+","+d(h[12])+","+d(-h[13])+","+d(h[14])+","+d(h[15])+")"}function p(x){const h=x.elements;return"translate(-50%,-50%)"+("matrix3d("+d(h[0])+","+d(h[1])+","+d(h[2])+","+d(h[3])+","+d(-h[4])+","+d(-h[5])+","+d(-h[6])+","+d(-h[7])+","+d(h[8])+","+d(h[9])+","+d(h[10])+","+d(h[11])+","+d(h[12])+","+d(h[13])+","+d(h[14])+","+d(h[15])+")")}function m(x){x.isCSS3DObject&&(x.element.style.display="none");for(let h=0,u=x.children.length;h<u;h++)m(x.children[h])}function v(x,h,u,w){if(x.visible===!1){m(x);return}if(x.isCSS3DObject){const S=x.layers.test(u.layers)===!0,T=x.element;if(T.style.display=S===!0?"":"none",S===!0){x.onBeforeRender(e,h,u);let N;x.isCSS3DSprite?(Jt.copy(u.matrixWorldInverse),Jt.transpose(),x.rotation2D!==0&&Jt.multiply(y0.makeRotationZ(x.rotation2D)),x.matrixWorld.decompose($l,E0,Zl),Jt.setPosition($l),Jt.scale(Zl),Jt.elements[3]=0,Jt.elements[7]=0,Jt.elements[11]=0,Jt.elements[15]=1,N=p(Jt)):N=p(x.matrixWorld);const C=o.objects.get(x);if(C===void 0||C.style!==N){T.style.transform=N;const b={style:N};o.objects.set(x,b)}T.parentNode!==c&&c.appendChild(T),x.onAfterRender(e,h,u)}}for(let S=0,T=x.children.length;S<T;S++)v(x.children[S],h,u)}}},T0=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path fill-rule="even-odd" fill="currentColor" d="
        M50,50 m45,0
        a45,45 0 1,0 -90,0
        a45,45 0 1,0  90,0

        M50,50 m38,0
        a38,38 0 0,1 -76,0
        a38,38 0 0,1  76,0

        M50,50 m30,0
        a30,30 0 1,0 -60,0
        a30,30 0 1,0  60,0
        
        M50,40 m2.5,-2.5
        l17.5,17.5
        a 2.5,2.5 0 0 1 -5,5
        l-15,-15
        l-15,15
        a 2.5,2.5 0 0 1 -5,-5
        l17.5,-17.5
        a 3.5,3.5 0 0 1 5,0
    "/>
</svg>`,cr="tourLink",_i="__tour-link__",b0={className:"psv-virtual-tour-tooltip",content:'<div class="psv-virtual-tour-loader"><div></div><div></div><div></div></div>'},A0={element:()=>{const t=document.createElement("button");return t.className="psv-virtual-tour-arrow",t.innerHTML=T0,t},size:{width:80,height:80}};function Kl(t,e){const n=jl(t),i=jl(e),s=t[2]??0,r=e[2]??0;let o=0;return s!==r&&(o=Math.atan((r-s)/C0(n,i))),{yaw:R0(n,i),pitch:o}}function jl(t){return[Ne.degToRad(t[0]),Ne.degToRad(t[1])]}function C0(t,e){return Ie.greatArcDistance(t,e)*6371e3}function R0(t,e){const[n,i]=t,[s,r]=e,o=Math.sin(s-n)*Math.cos(r),a=Math.cos(i)*Math.sin(r)-Math.sin(i)*Math.cos(r)*Math.cos(s-n);return Math.atan2(o,a)}function Kd(t){if(t&&["color","hoverColor","outlineColor"].some(e=>e in t)){Ie.logWarn('VirtualTourPlugin: "arrowStyle" does not support color, hoverColor, outlineColor anymore');return}return t&&typeof t.size=="number"&&(Ie.logWarn('VirtualTourPlugin: "arrowStyle.size" must be an object (width + height, in pixels)'),delete t.size),t}var io="arrow",P0=class extends Hn{constructor(t,e){super(t,{className:"psv-virtual-tour-arrows"}),this.plugin=e,this.renderer=this.is3D?new w0({element:this.container}):new M0({element:this.container}),this.camera=this.is3D?new Ot(30,1):null,this.scene=new Xo,this.viewer.addEventListener(gt.ReadyEvent.type,this,{once:!0}),this.viewer.addEventListener(gt.PositionUpdatedEvent.type,this),this.viewer.addEventListener(gt.SizeUpdatedEvent.type,this),this.viewer.addEventListener(gt.RenderEvent.type,this),this.viewer.addEventListener(gt.ClickEvent.type,this),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("contextmenu",n=>n.preventDefault())}get is3D(){return this.plugin.is3D}get arrowsPosition(){return this.plugin.config.arrowsPosition}get arrowStyle(){return this.plugin.config.arrowStyle}init(){var t,e;this.is3D&&(this.gallery=this.viewer.getPlugin("gallery"),(t=this.gallery)==null||t.addEventListener("show-gallery",this),(e=this.gallery)==null||e.addEventListener("hide-gallery",this))}destroy(){var t,e;this.viewer.removeEventListener(gt.ReadyEvent.type,this),this.viewer.removeEventListener(gt.PositionUpdatedEvent.type,this),this.viewer.removeEventListener(gt.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(gt.RenderEvent.type,this),this.viewer.removeEventListener(gt.ClickEvent.type,this),(t=this.gallery)==null||t.removeEventListener("show-gallery",this),(e=this.gallery)==null||e.removeEventListener("hide-gallery",this),super.destroy()}handleEvent(t){switch(t.type){case gt.ReadyEvent.type:case gt.SizeUpdatedEvent.type:case gt.PositionUpdatedEvent.type:this.__updateCamera();break;case gt.RenderEvent.type:this.render();break;case gt.ClickEvent.type:{if(t.data.rightclick)break;const e=this.__getTargetLink(t.data.target,!0);e&&this.plugin.setCurrentNode(e.nodeId,null,e);break}case"mouseenter":{const e=this.__getTargetLink(Ie.getEventTarget(t));e&&this.plugin.__onEnterArrow(e,t);break}case"mouseleave":{const e=this.__getTargetLink(Ie.getEventTarget(t));e&&this.plugin.__onLeaveArrow(e);break}case"mousemove":{this.__getTargetLink(Ie.getEventTarget(t),!0)&&this.plugin.__onHoverArrow(t);break}case"hide-gallery":this.__onToggleGallery(!1);break;case"show-gallery":t.fullscreen||this.__onToggleGallery(!0);break}}__updateCamera(){const t=this.viewer.getSize();if(this.renderer.setSize(t.width,t.height),this.is3D){const e=this.viewer.getPosition();e.pitch=Ne.clamp(e.pitch,-this.arrowsPosition.maxPitch,-this.arrowsPosition.minPitch),this.viewer.dataHelper.sphericalCoordsToVector3(e,this.camera.position,t.height*2).negate(),this.camera.lookAt(0,0,0),this.camera.translateY(t.height/3),this.camera.updateProjectionMatrix()}}render(){if(this.is3D){const t=this.viewer.getPosition(),e=[];let n=Number.MAX_SAFE_INTEGER;this.scene.children.forEach(i=>{const s=i.userData[io];if(s.conflict){const r=Math.abs(Ie.getShortestArc(t.yaw,s.yaw));n=Math.min(n,r),e.push([i,r])}}),e.forEach(([i,s])=>{const r=s!==n;i.element.style.opacity=r?"0.5":null,i.element.style.zIndex=r?"-1":null}),this.renderer.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.viewer.renderer.camera)}clear(){this.scene.clear()}__buildArrowElement(t,e){if(e!=null&&e.image){const n=document.createElement("img");return n.src=e.image,n}else if(e!=null&&e.element)return typeof e.element=="function"?e.element(t):e.element}addLinkArrow(t,e,n=1){let i=this.__buildArrowElement(t,t.arrowStyle);i||(i=this.__buildArrowElement(t,this.arrowStyle)),i[cr]=t;const s={...this.arrowStyle,...Kd(t.arrowStyle)};if(i.classList.add("psv-virtual-tour-link"),s.className&&Ie.addClasses(i,s.className),s.style&&Object.assign(i.style,s.style),this.is3D){i.style.width=s.size.width*1.5+"px",i.style.height=s.size.height*1.5+"px";let r=!1;this.scene.children.forEach(a=>{const l=a.userData[io];Math.abs(Ie.getShortestArc(l.yaw,e.yaw))<this.arrowsPosition.linkOverlapAngle&&(l.conflict=!0,r=!0)});const o=new S0(i);o.userData[io]={yaw:e.yaw,conflict:r},o.rotation.set(-Math.PI/2,0,Math.PI-e.yaw),this.viewer.dataHelper.sphericalCoordsToVector3({yaw:e.yaw,pitch:0},o.position,n*100),this.scene.add(o)}else{i.style.width=s.size.width+"px",i.style.height=s.size.height+"px",i.style.pointerEvents="auto";const r=new x0(i);this.viewer.dataHelper.sphericalCoordsToVector3(e,r.position),this.scene.add(r)}}__getTargetLink(t,e=!1){const n=e?Ie.getClosest(t,".psv-virtual-tour-link"):t;return n?n[cr]:void 0}__onToggleGallery(t){t?this.container.style.marginBottom=this.viewer.container.querySelector(".psv-gallery").offsetHeight+"px":this.container.style.marginBottom=""}},jd=class{constructor(t,e){this.plugin=t,this.viewer=e,this.nodes={}}destroy(){}checkNode(t){var e,n;if(!t.id)throw new Me("No id given for node");if(!t.panorama)throw new Me(`No panorama provided for node ${t.id}`);if("position"in t&&(Ie.logWarn('Use the "gps" property to configure the GPS position of a virtual node'),t.gps=t.position),this.plugin.isGps&&!(((e=t.gps)==null?void 0:e.length)>=2))throw new Me(`No GPS position provided for node ${t.id}`);if(!this.plugin.isGps&&((n=t.markers)!=null&&n.some(i=>i.gps&&!i.position)))throw new Me("Cannot use GPS positioning for markers in manual mode");t.links||(Ie.logWarn(`Node ${t.id} has no links`),t.links=[])}checkLink(t,e){if(!e.nodeId)throw new Me(`Link of node ${t.id} has no target id`);if(e.nodeId===t.id)throw new Me(`Node ${t.id} links to itself`);if(Array.isArray(e.position)&&(Ie.logWarn('Use the "gps" property to configure the GPS position of a virtual link'),e.gps=e.position,delete e.position),Ie.isExtendedPosition(e)&&(Ie.logWarn('Use the "position" property to configure the position of a virtual link'),e.position=this.viewer.dataHelper.cleanPosition(e)),!this.plugin.isGps&&!Ie.isExtendedPosition(e.position))throw new Me(`No position provided for link ${e.nodeId} of node ${t.id}`);if(this.plugin.isGps&&!e.gps)throw new Me(`No GPS position provided for link ${e.nodeId} of node ${t.id}`)}},L0=class extends jd{async loadNode(t){if(this.nodes[t])return this.nodes[t];throw new Me(`Node ${t} not found`)}setNodes(t){if(!(t!=null&&t.length))throw new Me("No nodes provided");const e={},n={};t.forEach(i=>{if(this.checkNode(i),e[i.id])throw new Me(`Duplicate node ${i.id}`);e[i.id]=i}),t.forEach(i=>{this.__checkLinks(i,e),i.links.forEach(s=>{n[s.nodeId]=!0})}),t.forEach(i=>{n[i.id]||Ie.logWarn(`Node ${i.id} is never linked to`)}),this.nodes=e}updateNode(t){if(!t.id)throw new Me("No id given for node");const e=this.nodes[t.id];if(!e)throw new Me(`Node ${t.id} does not exist`);return Object.assign(e,t),this.checkNode(e),this.__checkLinks(e,this.nodes),e}__checkLinks(t,e){t.links.forEach(n=>{if(!e[n.nodeId])throw new Me(`Target node ${n.nodeId} of node ${t.id} does not exists`);n.gps=n.gps||e[n.nodeId].gps,this.checkLink(t,n)})}},I0=class extends jd{constructor(t,e){if(super(t,e),!t.config.getNode)throw new Me("Missing getNode() option.");this.nodeResolver=t.config.getNode}async loadNode(t){if(this.nodes[t])return this.nodes[t];{const e=await this.nodeResolver(t);return this.checkNode(e),e.links.forEach(n=>{this.checkLink(e,n)}),this.nodes[t]=e,e}}clearCache(){this.nodes={}}},Pa=Ie.getConfigParser({dataMode:"client",positionMode:"manual",renderMode:"3d",nodes:null,getNode:null,startNodeId:null,preload:!1,transitionOptions:{showLoader:!0,speed:"20rpm",effect:"fade",rotation:!0},linksOnCompass:!0,showLinkTooltip:!0,getLinkTooltip:null,markerStyle:null,arrowStyle:A0,markerPitchOffset:null,arrowPosition:null,arrowsPosition:{minPitch:.3,maxPitch:Math.PI/2,linkOverlapAngle:Math.PI/4,linkPitchOffset:-.1},map:null},{dataMode(t){if(t!=="client"&&t!=="server")throw new Me("VirtualTourPlugin: invalid dataMode");return t},positionMode(t){if(t!=="gps"&&t!=="manual")throw new Me("VirtualTourPlugin: invalid positionMode");return t},renderMode(t){if(t==="markers")return Ie.logWarn('VirtualTourPlugin: "renderMode" markers has been replaced by 2d'),"2d";if(t!=="3d"&&t!=="2d")throw new Me("VirtualTourPlugin: invalid renderMode");return t},markerStyle(t){return t&&Ie.logWarn('VirtualTourPlugin: "markerStyle" is deprecated'),null},arrowPosition(t){return t&&Ie.logWarn('VirtualTourPlugin: "arrowPosition" is deprecated'),null},arrowsPosition(t,{defValue:e,rawConfig:n}){return Ie.isNil(n.markerPitchOffset)||(Ie.logWarn('VirtualTourPlugin: "markerPitchOffset" is deprecated, use "arrowsPosition.linkPitchOffset" instead'),t.linkPitchOffset=n.markerPitchOffset),{...e,...t}},arrowStyle(t,{defValue:e}){return{...e,...Kd(t)}},map(t,{rawConfig:e}){if(t){if(e.dataMode==="server")return Ie.logWarn("VirtualTourPlugin: The map cannot be used in server side mode"),null;if(!t.imageUrl)return Ie.logWarn('VirtualTourPlugin: configuring the map requires at least "imageUrl"'),null}return t}}),vs=class extends zd{constructor(t,e){super(t,e),this.state={currentNode:null,currentTooltip:null,loadingNode:null,preload:{}},this.arrowsRenderer=new P0(this.viewer,this)}get is3D(){return this.config.renderMode==="3d"}get isServerSide(){return this.config.dataMode==="server"}get isGps(){return this.config.positionMode==="gps"}init(){var t,e;super.init(),this.arrowsRenderer.init(),Ie.checkStylesheet(this.viewer.container,"virtual-tour-plugin"),this.markers=this.viewer.getPlugin("markers"),this.compass=this.viewer.getPlugin("compass"),(t=this.markers)!=null&&t.config.markers&&(Ie.logWarn("No default markers can be configured on the MarkersPlugin when using the VirtualTourPlugin. Consider defining `markers` on each tour node."),delete this.markers.config.markers),this.isGps&&(this.plan=this.viewer.getPlugin("plan")),this.isServerSide||(this.gallery=this.viewer.getPlugin("gallery"),this.map=this.viewer.getPlugin("map"),this.config.map&&!this.map&&Ie.logWarn("The map is configured on the VirtualTourPlugin but the MapPlugin is not loaded.")),this.datasource=this.isServerSide?new I0(this,this.viewer):new L0(this,this.viewer),this.map&&(this.map.addEventListener("select-hotspot",this),this.map.setImage(this.config.map.imageUrl)),(e=this.plan)==null||e.addEventListener("select-hotspot",this),this.isServerSide?this.config.startNodeId&&this.setCurrentNode(this.config.startNodeId):this.config.nodes&&(this.setNodes(this.config.nodes,this.config.startNodeId),delete this.config.nodes)}destroy(){var t,e;(t=this.map)==null||t.removeEventListener("select-hotspot",this),(e=this.plan)==null||e.removeEventListener("select-hotspot",this),this.datasource.destroy(),this.arrowsRenderer.destroy(),delete this.datasource,delete this.markers,delete this.compass,delete this.gallery,delete this.arrowsRenderer,super.destroy()}handleEvent(t){var e;if(t instanceof gt.ClickEvent){const n=(e=t.data.objects.find(i=>i.userData[cr]))==null?void 0:e.userData[cr];n&&this.setCurrentNode(n.nodeId,null,n)}else if(t.type==="select-hotspot"){const n=t.hotspotId;n.startsWith(_i)&&this.setCurrentNode(n.substring(_i.length))}}getCurrentNode(){return this.state.currentNode}setNodes(t,e){if(this.isServerSide)throw new Me("Cannot set nodes in server side mode");this.__hideTooltip(),this.state.currentNode=null,this.datasource.setNodes(t),e?this.datasource.nodes[e]||(e=t[0].id,Ie.logWarn(`startNodeId not found is provided nodes, resetted to ${e}`)):e=t[0].id,this.setCurrentNode(e),this.__setGalleryItems(),this.__setMapHotspots(),this.__setPlanHotspots()}setCurrentNode(t,e,n){var r;if(t===((r=this.state.currentNode)==null?void 0:r.id)&&!(e!=null&&e.forceUpdate))return Promise.resolve(!0);e!=null&&e.forceUpdate&&this.isServerSide&&this.datasource.clearCache(),this.viewer.hideError(),this.state.loadingNode=t;const i=this.state.currentNode,s=i&&n?this.__getLinkPosition(i,n):null;return Promise.resolve(this.state.preload[t]).then(()=>{if(this.state.loadingNode!==t)throw Ie.getAbortError();return this.datasource.loadNode(t)}).then(o=>{var l,c,d;if(this.state.loadingNode!==t)throw Ie.getAbortError();const a={...Pa.defaults.transitionOptions,rotateTo:s,zoomTo:s?this.viewer.getZoomLevel():null,...typeof this.config.transitionOptions=="function"?this.config.transitionOptions(o,i,n):this.config.transitionOptions,...e};return"fadeIn"in a&&(Ie.logWarn('VirtualTourTransitionOptions.fadeIn is deprecated, use "effect" instead.'),a.effect=a.fadeIn?"fade":"none"),a.effect||(a.effect="none"),this.__hideTooltip(),this.arrowsRenderer.clear(),(l=this.gallery)!=null&&l.config.hideOnClick&&this.gallery.hide(),(c=this.map)==null||c.minimize(),(d=this.plan)==null||d.minimize(),a.rotation&&a.effect==="none"?this.viewer.animate({...a.rotateTo,zoom:a.zoomTo,speed:a.speed}).then(()=>[o,a]):Promise.resolve([o,a])}).then(([o,a])=>{var l,c;if(this.state.loadingNode!==t)throw Ie.getAbortError();return(l=this.markers)==null||l.clearMarkers(),this.config.linksOnCompass&&((c=this.compass)==null||c.clearHotspots()),this.viewer.setPanorama(o.panorama,{caption:o.caption,description:o.description,panoData:o.panoData,sphereCorrection:o.sphereCorrection,showLoader:a.showLoader,position:a.rotateTo,zoom:a.zoomTo,transition:a.effect==="none"?!1:{effect:a.effect,rotation:a.rotation,speed:a.speed}}).then(d=>{if(!d)throw Ie.getAbortError();return o})}).then(o=>{var a,l;if(this.state.loadingNode!==t)throw Ie.getAbortError();return this.state.currentNode=o,(a=this.map)==null||a.setCenter(this.__getNodeMapPosition(o)),(l=this.plan)==null||l.setCoordinates(o.gps),this.__addNodeMarkers(o),this.__renderLinks(o),this.__preload(o),this.state.loadingNode=null,this.dispatchEvent(new Gd(o,{fromNode:i,fromLink:n,fromLinkPosition:s})),this.viewer.resetIdleTimer(),!0}).catch(o=>{if(Ie.isAbortError(o))return!1;throw this.viewer.showError(this.viewer.config.lang.loadError),this.viewer.loader.hide(),this.viewer.navbar.setCaption(""),this.state.loadingNode=null,o})}async gotoLink(t,e="8rpm"){const n=this.getLinkPosition(t);e?await this.viewer.animate({...n,speed:e}):this.viewer.rotate(n)}getLinkPosition(t){var n;const e=(n=this.state.currentNode)==null?void 0:n.links.find(i=>i.nodeId===t);if(!e)throw new Me(`Cannot find link "${t}"`);return this.__getLinkPosition(this.state.currentNode,e)}updateNode(t){var n,i,s;if(this.isServerSide)throw new Me("Cannot update node in server side mode");const e=this.datasource.updateNode(t);if((t.name||t.thumbnail||t.panorama)&&this.__setGalleryItems(),(t.name||t.gps||t.map)&&this.__setMapHotspots(),(t.name||t.gps||t.plan)&&this.__setPlanHotspots(),((n=this.state.currentNode)==null?void 0:n.id)===e.id){if(this.__hideTooltip(),t.panorama||t.panoData||t.sphereCorrection){this.setCurrentNode(e.id,{forceUpdate:!0});return}t.caption&&this.viewer.setOption("caption",e.caption),t.description&&this.viewer.setOption("description",e.description),(t.links||t.gps)&&this.__renderLinks(e),t.gps&&((i=this.plan)==null||i.setCoordinates(e.gps)),(t.map||t.gps)&&((s=this.map)==null||s.setCenter(this.__getNodeMapPosition(e))),(t.markers||t.gps)&&this.__addNodeMarkers(e)}}__setGalleryItems(){this.gallery&&this.gallery.setItems(Object.values(this.datasource.nodes).map(t=>({id:t.id,panorama:t.panorama,name:t.name,thumbnail:t.thumbnail})),t=>{this.setCurrentNode(t)})}__setMapHotspots(){this.map&&this.map.setHotspots(Object.values(this.datasource.nodes).map(t=>({...t.map||{},...this.__getNodeMapPosition(t),id:_i+t.id,tooltip:t.name})))}__setPlanHotspots(){this.plan&&this.plan.setHotspots(Object.values(this.datasource.nodes).map(t=>({...t.plan||{},coordinates:t.gps,id:_i+t.id,tooltip:t.name})))}__renderLinks(t){var n;this.arrowsRenderer.clear();const e=[];t.links.forEach(i=>{var r,o,a;const s=this.__getLinkPosition(t,i);s.yaw+=((r=i.linkOffset)==null?void 0:r.yaw)??0,s.pitch+=((o=i.linkOffset)==null?void 0:o.pitch)??0,this.isGps&&!this.is3D&&(s.pitch+=this.config.arrowsPosition.linkPitchOffset),e.push(s),this.arrowsRenderer.addLinkArrow(i,s,(a=i.linkOffset)==null?void 0:a.depth)}),this.arrowsRenderer.render(),this.config.linksOnCompass&&((n=this.compass)==null||n.setHotspots(e))}__getLinkPosition(t,e){return this.isGps?Kl(t.gps,e.gps):this.viewer.dataHelper.cleanPosition(e.position)}async __getTooltipContent(t){const e=await this.datasource.loadNode(t.nodeId),n=[];(e.name||e.thumbnail||e.caption)&&(e.name&&n.push(`<h3>${e.name}</h3>`),e.thumbnail&&n.push(`<img src="${e.thumbnail}">`),e.caption&&n.push(`<p>${e.caption}</p>`));let i=n.join("");return this.config.getLinkTooltip&&(i=this.config.getLinkTooltip(i,t,e)),i}__onEnterArrow(t,e){var s,r;const n=Ie.getPosition(this.viewer.container),i={x:e.clientX-n.x,y:e.clientY-n.y};this.config.showLinkTooltip&&(this.state.currentTooltip=this.viewer.createTooltip({...b0,left:i.x,top:i.y,box:{width:20,height:20}}),this.__getTooltipContent(t).then(o=>{o?this.state.currentTooltip.update(o):this.__hideTooltip()})),(s=this.map)==null||s.setActiveHotspot(_i+t.nodeId),(r=this.plan)==null||r.setActiveHotspot(_i+t.nodeId),this.dispatchEvent(new Yd(t,this.state.currentNode))}__onHoverArrow(t){var i;const e=Ie.getPosition(this.viewer.container),n={x:t.clientX-e.x,y:t.clientY-e.y};(i=this.state.currentTooltip)==null||i.move({left:n.x,top:n.y})}__onLeaveArrow(t){var e,n;this.__hideTooltip(),(e=this.map)==null||e.setActiveHotspot(null),(n=this.plan)==null||n.setActiveHotspot(null),this.dispatchEvent(new Zd(t,this.state.currentNode))}__hideTooltip(){var t;(t=this.state.currentTooltip)==null||t.hide(),this.state.currentTooltip=null}__preload(t){this.config.preload&&(this.state.preload[t.id]=!0,this.state.currentNode.links.filter(e=>!this.state.preload[e.nodeId]).filter(e=>typeof this.config.preload=="function"?this.config.preload(this.state.currentNode,e):!0).forEach(e=>{this.state.preload[e.nodeId]=this.datasource.loadNode(e.nodeId).then(n=>this.viewer.textureLoader.preloadPanorama(n.panorama)).then(()=>{this.state.preload[e.nodeId]=!0}).catch(()=>{delete this.state.preload[e.nodeId]})}))}__addNodeMarkers(t){t.markers&&(this.markers?this.markers.setMarkers(t.markers.map(e=>{var n,i;return e.gps&&this.isGps&&(e.position=Kl(t.gps,e.gps),(n=e.data)!=null&&n.map&&Object.assign(e.data.map,this.__getGpsMapPosition(e.gps)),(i=e.data)!=null&&i.plan&&(e.data.plan.coordinates=e.gps)),e})):Ie.logWarn(`Node ${t.id} markers ignored because the plugin is not loaded.`))}__getNodeMapPosition(t){const e=this.__getGpsMapPosition(t.gps);return e||(t.map?{x:t.map.x,y:t.map.y}:null)}__getGpsMapPosition(t){const e=this.config.map;return this.isGps&&e&&e.extent&&e.size?{x:Ne.mapLinear(t[0],e.extent[0],e.extent[2],0,e.size.width),y:Ne.mapLinear(t[1],e.extent[1],e.extent[3],0,e.size.height)}:null}};vs.id="virtual-tour";vs.VERSION="5.11.5";vs.configParser=Pa;vs.readonlyOptions=Object.keys(Pa.defaults);const U0="https://photo-sphere-viewer-data.netlify.app/assets",D0=[{id:"salon",panorama:"/pano3.jpg",gps:[0,0],links:[{nodeId:"couloir",gps:[0,1]}]},{id:"couloir",panorama:"/pano1.jpg",gps:[0,1],links:[{nodeId:"salon",gps:[0,0]}]}],N0=new wi({container:"viewer",loadingImg:U0+"/loader.gif",plugins:[[vs,{nodes:D0,positionMode:"gps"}]]});window.viewer=N0;
