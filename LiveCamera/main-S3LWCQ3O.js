import{c as Ar,d as Fn,f as bt,g as Nn}from"./chunk-C5P3YSZX.js";import{a as ve,b as bo,c as wo,d as Ao,e as wr,f as To,g as ol,h as al,i as ae,j as on,k as Tr,l as Cr,m as an,n as On}from"./chunk-3K5PXGUR.js";import{$ as j,$a as X,A as Ac,Aa as mi,Ab as Eo,B as En,Ba as vr,C as Ke,Ca as _r,D as Ut,Da as ne,E as en,Ea as Cn,F as lo,Fa as Hc,G as uo,Ga as yr,H as Bt,Ha as xo,I as Tc,Ia as Z,J as pr,Ja as Gc,K as Cc,Ka as zt,L as bn,La as Wc,M as kt,Ma as So,N as ho,Na as me,O as Rc,Oa as Rn,P as Dc,Pa as Dn,Q as tn,Qa as Mo,R as Ic,Ra as We,S as Pe,Sa as $c,T as Ge,Ta as xr,U as Se,Ua as Xc,V as re,Va as qc,W as G,Wa as jc,X as wn,Xa as Yc,Y as Pc,Ya as he,Z as oe,Za as rt,_ as fo,_a as Zc,a as D,aa as F,ab as K,b as be,ba as mr,bb as Te,c as xc,ca as Lc,cb as In,da as gr,db as Pn,e as pe,ea as Et,eb as Kc,f as fr,fa as po,fb as Ln,g as ui,ga as An,gb as Qe,h as Sc,ha as Tn,hb as ge,i as Mc,ia as mo,ib as gt,ja as fi,jb as st,k as oo,ka as Fc,kb as Sr,l as ao,la as Nc,lb as Mr,m as te,ma as Oc,mb as Er,n as Ye,na as Je,nb as ue,o as hi,oa as mt,ob as rn,p as Ze,pa as go,pb as Jc,q as Ie,qa as Uc,qb as Qc,r as P,ra as pi,rb as Vt,s as di,sa as Bc,sb as sn,t as Ec,ta as vo,tb as el,u as bc,ua as kc,ub as tl,v as L,va as nn,vb as nl,w as Ot,wa as zc,wb as il,x as Be,xa as _o,xb as rl,y as wc,ya as Vc,yb as br,z as co,za as yo,zb as sl}from"./chunk-4EPRTBY7.js";var ms=pe((Iu,Xi)=>{"use strict";(function(r,e){typeof define=="function"&&define.amd?define([],e):typeof xc=="function"&&typeof Xi=="object"&&Xi&&Xi.exports?Xi.exports=e():(r.dcodeIO=r.dcodeIO||{}).Long=e()})(Iu,function(){"use strict";function r(_,m,E){this.low=_|0,this.high=m|0,this.unsigned=!!E}r.prototype.__isLong__,Object.defineProperty(r.prototype,"__isLong__",{value:!0,enumerable:!1,configurable:!1});function e(_){return(_&&_.__isLong__)===!0}r.isLong=e;var t={},n={};function i(_,m){var E,O,B;return m?(_>>>=0,(B=0<=_&&_<256)&&(O=n[_],O)?O:(E=o(_,(_|0)<0?-1:0,!0),B&&(n[_]=E),E)):(_|=0,(B=-128<=_&&_<128)&&(O=t[_],O)?O:(E=o(_,_<0?-1:0,!1),B&&(t[_]=E),E))}r.fromInt=i;function s(_,m){if(isNaN(_)||!isFinite(_))return m?y:v;if(m){if(_<0)return y;if(_>=f)return $}else{if(_<=-p)return C;if(_+1>=p)return I}return _<0?s(-_,m).neg():o(_%d|0,_/d|0,m)}r.fromNumber=s;function o(_,m,E){return new r(_,m,E)}r.fromBits=o;var c=Math.pow;function a(_,m,E){if(_.length===0)throw Error("empty string");if(_==="NaN"||_==="Infinity"||_==="+Infinity"||_==="-Infinity")return v;if(typeof m=="number"?(E=m,m=!1):m=!!m,E=E||10,E<2||36<E)throw RangeError("radix");var O;if((O=_.indexOf("-"))>0)throw Error("interior hyphen");if(O===0)return a(_.substring(1),m,E).neg();for(var B=s(c(E,8)),q=v,J=0;J<_.length;J+=8){var fe=Math.min(8,_.length-J),ie=parseInt(_.substring(J,J+fe),E);if(fe<8){var le=s(c(E,fe));q=q.mul(le).add(s(ie))}else q=q.mul(B),q=q.add(s(ie))}return q.unsigned=m,q}r.fromString=a;function l(_){return _ instanceof r?_:typeof _=="number"?s(_):typeof _=="string"?a(_):o(_.low,_.high,_.unsigned)}r.fromValue=l;var u=65536,h=1<<24,d=u*u,f=d*d,p=f/2,g=i(h),v=i(0);r.ZERO=v;var y=i(0,!0);r.UZERO=y;var b=i(1);r.ONE=b;var T=i(1,!0);r.UONE=T;var R=i(-1);r.NEG_ONE=R;var I=o(-1,2147483647,!1);r.MAX_VALUE=I;var $=o(-1,-1,!0);r.MAX_UNSIGNED_VALUE=$;var C=o(0,-2147483648,!1);r.MIN_VALUE=C;var S=r.prototype;return S.toInt=function(){return this.unsigned?this.low>>>0:this.low},S.toNumber=function(){return this.unsigned?(this.high>>>0)*d+(this.low>>>0):this.high*d+(this.low>>>0)},S.toString=function(m){if(m=m||10,m<2||36<m)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(C)){var E=s(m),O=this.div(E),B=O.mul(E).sub(this);return O.toString(m)+B.toInt().toString(m)}else return"-"+this.neg().toString(m);for(var q=s(c(m,6),this.unsigned),J=this,fe="";;){var ie=J.div(q),le=J.sub(ie.mul(q)).toInt()>>>0,V=le.toString(m);if(J=ie,J.isZero())return V+fe;for(;V.length<6;)V="0"+V;fe=""+V+fe}},S.getHighBits=function(){return this.high},S.getHighBitsUnsigned=function(){return this.high>>>0},S.getLowBits=function(){return this.low},S.getLowBitsUnsigned=function(){return this.low>>>0},S.getNumBitsAbs=function(){if(this.isNegative())return this.eq(C)?64:this.neg().getNumBitsAbs();for(var m=this.high!=0?this.high:this.low,E=31;E>0&&(m&1<<E)==0;E--);return this.high!=0?E+33:E+1},S.isZero=function(){return this.high===0&&this.low===0},S.isNegative=function(){return!this.unsigned&&this.high<0},S.isPositive=function(){return this.unsigned||this.high>=0},S.isOdd=function(){return(this.low&1)===1},S.isEven=function(){return(this.low&1)===0},S.equals=function(m){return e(m)||(m=l(m)),this.unsigned!==m.unsigned&&this.high>>>31===1&&m.high>>>31===1?!1:this.high===m.high&&this.low===m.low},S.eq=S.equals,S.notEquals=function(m){return!this.eq(m)},S.neq=S.notEquals,S.lessThan=function(m){return this.comp(m)<0},S.lt=S.lessThan,S.lessThanOrEqual=function(m){return this.comp(m)<=0},S.lte=S.lessThanOrEqual,S.greaterThan=function(m){return this.comp(m)>0},S.gt=S.greaterThan,S.greaterThanOrEqual=function(m){return this.comp(m)>=0},S.gte=S.greaterThanOrEqual,S.compare=function(m){if(e(m)||(m=l(m)),this.eq(m))return 0;var E=this.isNegative(),O=m.isNegative();return E&&!O?-1:!E&&O?1:this.unsigned?m.high>>>0>this.high>>>0||m.high===this.high&&m.low>>>0>this.low>>>0?-1:1:this.sub(m).isNegative()?-1:1},S.comp=S.compare,S.negate=function(){return!this.unsigned&&this.eq(C)?C:this.not().add(b)},S.neg=S.negate,S.add=function(m){e(m)||(m=l(m));var E=this.high>>>16,O=this.high&65535,B=this.low>>>16,q=this.low&65535,J=m.high>>>16,fe=m.high&65535,ie=m.low>>>16,le=m.low&65535,V=0,H=0,Q=0,Ae=0;return Ae+=q+le,Q+=Ae>>>16,Ae&=65535,Q+=B+ie,H+=Q>>>16,Q&=65535,H+=O+fe,V+=H>>>16,H&=65535,V+=E+J,V&=65535,o(Q<<16|Ae,V<<16|H,this.unsigned)},S.subtract=function(m){return e(m)||(m=l(m)),this.add(m.neg())},S.sub=S.subtract,S.multiply=function(m){if(this.isZero()||(e(m)||(m=l(m)),m.isZero()))return v;if(this.eq(C))return m.isOdd()?C:v;if(m.eq(C))return this.isOdd()?C:v;if(this.isNegative())return m.isNegative()?this.neg().mul(m.neg()):this.neg().mul(m).neg();if(m.isNegative())return this.mul(m.neg()).neg();if(this.lt(g)&&m.lt(g))return s(this.toNumber()*m.toNumber(),this.unsigned);var E=this.high>>>16,O=this.high&65535,B=this.low>>>16,q=this.low&65535,J=m.high>>>16,fe=m.high&65535,ie=m.low>>>16,le=m.low&65535,V=0,H=0,Q=0,Ae=0;return Ae+=q*le,Q+=Ae>>>16,Ae&=65535,Q+=B*le,H+=Q>>>16,Q&=65535,Q+=q*ie,H+=Q>>>16,Q&=65535,H+=O*le,V+=H>>>16,H&=65535,H+=B*ie,V+=H>>>16,H&=65535,H+=q*fe,V+=H>>>16,H&=65535,V+=E*le+O*ie+B*fe+q*J,V&=65535,o(Q<<16|Ae,V<<16|H,this.unsigned)},S.mul=S.multiply,S.divide=function(m){if(e(m)||(m=l(m)),m.isZero())throw Error("division by zero");if(this.isZero())return this.unsigned?y:v;var E,O,B;if(this.unsigned){if(m.unsigned||(m=m.toUnsigned()),m.gt(this))return y;if(m.gt(this.shru(1)))return T;B=y}else{if(this.eq(C)){if(m.eq(b)||m.eq(R))return C;if(m.eq(C))return b;var q=this.shr(1);return E=q.div(m).shl(1),E.eq(v)?m.isNegative()?b:R:(O=this.sub(m.mul(E)),B=E.add(O.div(m)),B)}else if(m.eq(C))return this.unsigned?y:v;if(this.isNegative())return m.isNegative()?this.neg().div(m.neg()):this.neg().div(m).neg();if(m.isNegative())return this.div(m.neg()).neg();B=v}for(O=this;O.gte(m);){E=Math.max(1,Math.floor(O.toNumber()/m.toNumber()));for(var J=Math.ceil(Math.log(E)/Math.LN2),fe=J<=48?1:c(2,J-48),ie=s(E),le=ie.mul(m);le.isNegative()||le.gt(O);)E-=fe,ie=s(E,this.unsigned),le=ie.mul(m);ie.isZero()&&(ie=b),B=B.add(ie),O=O.sub(le)}return B},S.div=S.divide,S.modulo=function(m){return e(m)||(m=l(m)),this.sub(this.div(m).mul(m))},S.mod=S.modulo,S.not=function(){return o(~this.low,~this.high,this.unsigned)},S.and=function(m){return e(m)||(m=l(m)),o(this.low&m.low,this.high&m.high,this.unsigned)},S.or=function(m){return e(m)||(m=l(m)),o(this.low|m.low,this.high|m.high,this.unsigned)},S.xor=function(m){return e(m)||(m=l(m)),o(this.low^m.low,this.high^m.high,this.unsigned)},S.shiftLeft=function(m){return e(m)&&(m=m.toInt()),(m&=63)===0?this:m<32?o(this.low<<m,this.high<<m|this.low>>>32-m,this.unsigned):o(0,this.low<<m-32,this.unsigned)},S.shl=S.shiftLeft,S.shiftRight=function(m){return e(m)&&(m=m.toInt()),(m&=63)===0?this:m<32?o(this.low>>>m|this.high<<32-m,this.high>>m,this.unsigned):o(this.high>>m-32,this.high>=0?0:-1,this.unsigned)},S.shr=S.shiftRight,S.shiftRightUnsigned=function(m){if(e(m)&&(m=m.toInt()),m&=63,m===0)return this;var E=this.high;if(m<32){var O=this.low;return o(O>>>m|E<<32-m,E>>>m,this.unsigned)}else return m===32?o(E,0,this.unsigned):o(E>>>m-32,0,this.unsigned)},S.shru=S.shiftRightUnsigned,S.toSigned=function(){return this.unsigned?o(this.low,this.high,!1):this},S.toUnsigned=function(){return this.unsigned?this:o(this.low,this.high,!0)},S.toBytes=function(_){return _?this.toBytesLE():this.toBytesBE()},S.toBytesLE=function(){var _=this.high,m=this.low;return[m&255,m>>>8&255,m>>>16&255,m>>>24&255,_&255,_>>>8&255,_>>>16&255,_>>>24&255]},S.toBytesBE=function(){var _=this.high,m=this.low;return[_>>>24&255,_>>>16&255,_>>>8&255,_&255,m>>>24&255,m>>>16&255,m>>>8&255,m&255]},r})});var gs=pe((wS,ma)=>{"use strict";(function(r){"use strict";var e=r.S2={L:{}};e.L.LatLng=function(a,l,u){var h=parseFloat(a,10),d=parseFloat(l,10);if(isNaN(h)||isNaN(d))throw new Error("Invalid LatLng object: ("+a+", "+l+")");return u!==!0&&(h=Math.max(Math.min(h,90),-90),d=(d+180)%360+(d<-180||d===180?180:-180)),{lat:h,lng:d}},e.L.LatLng.DEG_TO_RAD=Math.PI/180,e.L.LatLng.RAD_TO_DEG=180/Math.PI,e.LatLngToXYZ=function(a){var l=e.L.LatLng.DEG_TO_RAD,u=a.lat*l,h=a.lng*l,d=Math.cos(u);return[Math.cos(h)*d,Math.sin(h)*d,Math.sin(u)]},e.XYZToLatLng=function(a){var l=e.L.LatLng.RAD_TO_DEG,u=Math.atan2(a[2],Math.sqrt(a[0]*a[0]+a[1]*a[1])),h=Math.atan2(a[1],a[0]);return e.L.LatLng(u*l,h*l)};var t=function(a){var l=[Math.abs(a[0]),Math.abs(a[1]),Math.abs(a[2])];return l[0]>l[1]?l[0]>l[2]?0:2:l[1]>l[2]?1:2},n=function(a,l){var u,h;switch(a){case 0:u=l[1]/l[0],h=l[2]/l[0];break;case 1:u=-l[0]/l[1],h=l[2]/l[1];break;case 2:u=-l[0]/l[2],h=-l[1]/l[2];break;case 3:u=l[2]/l[0],h=l[1]/l[0];break;case 4:u=l[2]/l[1],h=-l[0]/l[1];break;case 5:u=-l[1]/l[2],h=-l[0]/l[2];break;default:throw{error:"Invalid face"}}return[u,h]};e.XYZToFaceUV=function(a){var l=t(a);a[l]<0&&(l+=3);var u=n(l,a);return[l,u]},e.FaceUVToXYZ=function(a,l){var u=l[0],h=l[1];switch(a){case 0:return[1,u,h];case 1:return[-u,1,h];case 2:return[-u,-h,1];case 3:return[-1,-h,-u];case 4:return[h,-1,-u];case 5:return[h,u,-1];default:throw{error:"Invalid face"}}};var i=function(a){return a>=.5?1/3*(4*a*a-1):1/3*(1-4*(1-a)*(1-a))};e.STToUV=function(a){return[i(a[0]),i(a[1])]};var s=function(a){return a>=0?.5*Math.sqrt(1+3*a):1-.5*Math.sqrt(1-3*a)};e.UVToST=function(a){return[s(a[0]),s(a[1])]},e.STToIJ=function(a,l){var u=1<<l,h=function(d){var f=Math.floor(d*u);return Math.max(0,Math.min(u-1,f))};return[h(a[0]),h(a[1])]},e.IJToST=function(a,l,u){var h=1<<l;return[(a[0]+u[0])/h,(a[1]+u[1])/h]};var o=function(a,l,u,h){var d,f;if(h==0){u==1&&(l.x=a-1-l.x,l.y=a-1-l.y);var p=l.x;l.x=l.y,l.y=p}},c=function(a,l,u,h){var d={a:[[0,"d"],[1,"a"],[3,"b"],[2,"a"]],b:[[2,"b"],[1,"b"],[3,"a"],[0,"c"]],c:[[2,"c"],[3,"d"],[1,"c"],[0,"b"]],d:[[0,"a"],[3,"c"],[1,"d"],[2,"d"]]};typeof h!="number"&&console.warn(new Error("called pointToHilbertQuadList without face value, defaulting to '0'").stack);for(var f=h%2?"d":"a",p=[],g=u-1;g>=0;g--){var v=1<<g,y=a&v?1:0,b=l&v?1:0,T=d[f][y*2+b];p.push(T[0]),f=T[1]}return p};e.S2Cell=function(){},e.S2Cell.FromHilbertQuadKey=function(a){var l=a.split("/"),u=parseInt(l[0]),h=l[1],d=h.length,f={x:0,y:0},p,g,v,y,b,T;for(p=d-1;p>=0;p--)g=d-p,v=h[p],y=0,b=0,v==="1"?b=1:v==="2"?(y=1,b=1):v==="3"&&(y=1),T=Math.pow(2,g-1),o(T,f,y,b),f.x+=T*y,f.y+=T*b;if(u%2===1){var R=f.x;f.x=f.y,f.y=R}return e.S2Cell.FromFaceIJ(parseInt(u),[f.x,f.y],g)},e.S2Cell.FromLatLng=function(a,l){if(!a.lat&&a.lat!==0||!a.lng&&a.lng!==0)throw new Error("Pass { lat: lat, lng: lng } to S2.S2Cell.FromLatLng");var u=e.LatLngToXYZ(a),h=e.XYZToFaceUV(u),d=e.UVToST(h[1]),f=e.STToIJ(d,l);return e.S2Cell.FromFaceIJ(h[0],f,l)},e.S2Cell.FromFaceIJ=function(a,l,u){var h=new e.S2Cell;return h.face=a,h.ij=l,h.level=u,h},e.S2Cell.prototype.toString=function(){return"F"+this.face+"ij["+this.ij[0]+","+this.ij[1]+"]@"+this.level},e.S2Cell.prototype.getLatLng=function(){var a=e.IJToST(this.ij,this.level,[.5,.5]),l=e.STToUV(a),u=e.FaceUVToXYZ(this.face,l);return e.XYZToLatLng(u)},e.S2Cell.prototype.getCornerLatLngs=function(){for(var a=[],l=[[0,0],[0,1],[1,1],[1,0]],u=0;u<4;u++){var h=e.IJToST(this.ij,this.level,l[u]),d=e.STToUV(h),f=e.FaceUVToXYZ(this.face,d);a.push(e.XYZToLatLng(f))}return a},e.S2Cell.prototype.getFaceAndQuads=function(){var a=c(this.ij[0],this.ij[1],this.level,this.face);return[this.face,a]},e.S2Cell.prototype.toHilbertQuadkey=function(){var a=c(this.ij[0],this.ij[1],this.level,this.face);return this.face.toString(10)+"/"+a.join("")},e.latLngToNeighborKeys=e.S2Cell.latLngToNeighborKeys=function(a,l,u){return e.S2Cell.FromLatLng({lat:a,lng:l},u).getNeighbors().map(function(h){return h.toHilbertQuadkey()})},e.S2Cell.prototype.getNeighbors=function(){var a=function(f,p,g){var v=1<<g;if(p[0]>=0&&p[1]>=0&&p[0]<v&&p[1]<v)return e.S2Cell.FromFaceIJ(f,p,g);var y=e.IJToST(p,g,[.5,.5]),b=e.STToUV(y),T=e.FaceUVToXYZ(f,b),R=e.XYZToFaceUV(T);return f=R[0],b=R[1],y=e.UVToST(b),p=e.STToIJ(y,g),e.S2Cell.FromFaceIJ(f,p,g)},l=this.face,u=this.ij[0],h=this.ij[1],d=this.level;return[a(l,[u-1,h],d),a(l,[u,h-1],d),a(l,[u+1,h],d),a(l,[u,h+1],d)]},e.FACE_BITS=3,e.MAX_LEVEL=30,e.POS_BITS=2*e.MAX_LEVEL+1,e.facePosLevelToId=e.S2Cell.facePosLevelToId=e.fromFacePosLevel=function(a,l,u){var h=r.dcodeIO&&r.dcodeIO.Long||ms(),d,f,p;for(u||(u=l.length),l.length>u&&(l=l.substr(0,u)),d=h.fromString(a.toString(10),!0,10).toString(2);d.length<e.FACE_BITS;)d="0"+d;for(f=h.fromString(l,!0,4).toString(2);f.length<2*u;)f="0"+f;for(p=d+f,p+="1";p.length<e.FACE_BITS+e.POS_BITS;)p+="0";return h.fromString(p,!0,2).toString(10)},e.keyToId=e.S2Cell.keyToId=e.toId=e.toCellId=e.fromKey=function(a){var l=a.split("/");return e.fromFacePosLevel(l[0],l[1],l[1].length)},e.idToKey=e.S2Cell.idToKey=e.S2Cell.toKey=e.toKey=e.fromId=e.fromCellId=e.S2Cell.toHilbertQuadkey=e.toHilbertQuadkey=function(a){for(var l=r.dcodeIO&&r.dcodeIO.Long||ms(),u=l.fromString(a,!0,10).toString(2);u.length<e.FACE_BITS+e.POS_BITS;)u="0"+u;for(var h=u.lastIndexOf("1"),d=u.substring(0,3),f=u.substring(3,h),p=f.length/2,g=l.fromString(d,!0,2).toString(10),v=l.fromString(f,!0,2).toString(4);v.length<p;)v="0"+v;return g+"/"+v},e.keyToLatLng=e.S2Cell.keyToLatLng=function(a){var l=e.S2Cell.FromHilbertQuadKey(a);return l.getLatLng()},e.idToLatLng=e.S2Cell.idToLatLng=function(a){var l=e.idToKey(a);return e.keyToLatLng(l)},e.S2Cell.latLngToKey=e.latLngToKey=e.latLngToQuadkey=function(a,l,u){if(isNaN(u)||u<1||u>30)throw new Error("'level' is not a number between 1 and 30 (but it should be)");return e.S2Cell.FromLatLng({lat:a,lng:l},u).toHilbertQuadkey()},e.stepKey=function(a,l){var u=r.dcodeIO&&r.dcodeIO.Long||ms(),h=a.split("/"),d=h[0],f=h[1],p=h[1].length,g=u.fromString(f,!0,4),v;l>0?v=g.add(Math.abs(l)):l<0&&(v=g.subtract(Math.abs(l)));var y=v.toString(4);for(y==="0"&&console.warning(new Error("face/position wrapping is not yet supported"));y.length<p;)y="0"+y;return d+"/"+y},e.S2Cell.prevKey=e.prevKey=function(a){return e.stepKey(a,-1)},e.S2Cell.nextKey=e.nextKey=function(a){return e.stepKey(a,1)}})(typeof ma<"u"?ma.exports:window)});var Lu=pe((AS,Pu)=>{"use strict";var ga=class{constructor(){this.max=1e3,this.map=new Map}get(e){let t=this.map.get(e);if(t!==void 0)return this.map.delete(e),this.map.set(e,t),t}delete(e){return this.map.delete(e)}set(e,t){if(!this.delete(e)&&t!==void 0){if(this.map.size>=this.max){let i=this.map.keys().next().value;this.delete(i)}this.map.set(e,t)}return this}};Pu.exports=ga});var vs=pe((TS,Fu)=>{"use strict";var Pp=Object.freeze({loose:!0}),Lp=Object.freeze({}),Fp=r=>r?typeof r!="object"?Pp:r:Lp;Fu.exports=Fp});var _s=pe((CS,Nu)=>{"use strict";var Np="2.0.0",Op=Number.MAX_SAFE_INTEGER||9007199254740991,Up=16,Bp=250,kp=["major","premajor","minor","preminor","patch","prepatch","prerelease"];Nu.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:Up,MAX_SAFE_BUILD_LENGTH:Bp,MAX_SAFE_INTEGER:Op,RELEASE_TYPES:kp,SEMVER_SPEC_VERSION:Np,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var qi=pe((RS,Ou)=>{"use strict";var zp=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...r)=>console.error("SEMVER",...r):()=>{};Ou.exports=zp});var ys=pe((Mt,Uu)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:va,MAX_SAFE_BUILD_LENGTH:Vp,MAX_LENGTH:Hp}=_s(),Gp=qi();Mt=Uu.exports={};var Wp=Mt.re=[],$p=Mt.safeRe=[],w=Mt.src=[],Xp=Mt.safeSrc=[],A=Mt.t={},qp=0,_a="[a-zA-Z0-9-]",jp=[["\\s",1],["\\d",Hp],[_a,Vp]],Yp=r=>{for(let[e,t]of jp)r=r.split(`${e}*`).join(`${e}{0,${t}}`).split(`${e}+`).join(`${e}{1,${t}}`);return r},N=(r,e,t)=>{let n=Yp(e),i=qp++;Gp(r,i,e),A[r]=i,w[i]=e,Xp[i]=n,Wp[i]=new RegExp(e,t?"g":void 0),$p[i]=new RegExp(n,t?"g":void 0)};N("NUMERICIDENTIFIER","0|[1-9]\\d*");N("NUMERICIDENTIFIERLOOSE","\\d+");N("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${_a}*`);N("MAINVERSION",`(${w[A.NUMERICIDENTIFIER]})\\.(${w[A.NUMERICIDENTIFIER]})\\.(${w[A.NUMERICIDENTIFIER]})`);N("MAINVERSIONLOOSE",`(${w[A.NUMERICIDENTIFIERLOOSE]})\\.(${w[A.NUMERICIDENTIFIERLOOSE]})\\.(${w[A.NUMERICIDENTIFIERLOOSE]})`);N("PRERELEASEIDENTIFIER",`(?:${w[A.NONNUMERICIDENTIFIER]}|${w[A.NUMERICIDENTIFIER]})`);N("PRERELEASEIDENTIFIERLOOSE",`(?:${w[A.NONNUMERICIDENTIFIER]}|${w[A.NUMERICIDENTIFIERLOOSE]})`);N("PRERELEASE",`(?:-(${w[A.PRERELEASEIDENTIFIER]}(?:\\.${w[A.PRERELEASEIDENTIFIER]})*))`);N("PRERELEASELOOSE",`(?:-?(${w[A.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${w[A.PRERELEASEIDENTIFIERLOOSE]})*))`);N("BUILDIDENTIFIER",`${_a}+`);N("BUILD",`(?:\\+(${w[A.BUILDIDENTIFIER]}(?:\\.${w[A.BUILDIDENTIFIER]})*))`);N("FULLPLAIN",`v?${w[A.MAINVERSION]}${w[A.PRERELEASE]}?${w[A.BUILD]}?`);N("FULL",`^${w[A.FULLPLAIN]}$`);N("LOOSEPLAIN",`[v=\\s]*${w[A.MAINVERSIONLOOSE]}${w[A.PRERELEASELOOSE]}?${w[A.BUILD]}?`);N("LOOSE",`^${w[A.LOOSEPLAIN]}$`);N("GTLT","((?:<|>)?=?)");N("XRANGEIDENTIFIERLOOSE",`${w[A.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);N("XRANGEIDENTIFIER",`${w[A.NUMERICIDENTIFIER]}|x|X|\\*`);N("XRANGEPLAIN",`[v=\\s]*(${w[A.XRANGEIDENTIFIER]})(?:\\.(${w[A.XRANGEIDENTIFIER]})(?:\\.(${w[A.XRANGEIDENTIFIER]})(?:${w[A.PRERELEASE]})?${w[A.BUILD]}?)?)?`);N("XRANGEPLAINLOOSE",`[v=\\s]*(${w[A.XRANGEIDENTIFIERLOOSE]})(?:\\.(${w[A.XRANGEIDENTIFIERLOOSE]})(?:\\.(${w[A.XRANGEIDENTIFIERLOOSE]})(?:${w[A.PRERELEASELOOSE]})?${w[A.BUILD]}?)?)?`);N("XRANGE",`^${w[A.GTLT]}\\s*${w[A.XRANGEPLAIN]}$`);N("XRANGELOOSE",`^${w[A.GTLT]}\\s*${w[A.XRANGEPLAINLOOSE]}$`);N("COERCEPLAIN",`(^|[^\\d])(\\d{1,${va}})(?:\\.(\\d{1,${va}}))?(?:\\.(\\d{1,${va}}))?`);N("COERCE",`${w[A.COERCEPLAIN]}(?:$|[^\\d])`);N("COERCEFULL",w[A.COERCEPLAIN]+`(?:${w[A.PRERELEASE]})?(?:${w[A.BUILD]})?(?:$|[^\\d])`);N("COERCERTL",w[A.COERCE],!0);N("COERCERTLFULL",w[A.COERCEFULL],!0);N("LONETILDE","(?:~>?)");N("TILDETRIM",`(\\s*)${w[A.LONETILDE]}\\s+`,!0);Mt.tildeTrimReplace="$1~";N("TILDE",`^${w[A.LONETILDE]}${w[A.XRANGEPLAIN]}$`);N("TILDELOOSE",`^${w[A.LONETILDE]}${w[A.XRANGEPLAINLOOSE]}$`);N("LONECARET","(?:\\^)");N("CARETTRIM",`(\\s*)${w[A.LONECARET]}\\s+`,!0);Mt.caretTrimReplace="$1^";N("CARET",`^${w[A.LONECARET]}${w[A.XRANGEPLAIN]}$`);N("CARETLOOSE",`^${w[A.LONECARET]}${w[A.XRANGEPLAINLOOSE]}$`);N("COMPARATORLOOSE",`^${w[A.GTLT]}\\s*(${w[A.LOOSEPLAIN]})$|^$`);N("COMPARATOR",`^${w[A.GTLT]}\\s*(${w[A.FULLPLAIN]})$|^$`);N("COMPARATORTRIM",`(\\s*)${w[A.GTLT]}\\s*(${w[A.LOOSEPLAIN]}|${w[A.XRANGEPLAIN]})`,!0);Mt.comparatorTrimReplace="$1$2$3";N("HYPHENRANGE",`^\\s*(${w[A.XRANGEPLAIN]})\\s+-\\s+(${w[A.XRANGEPLAIN]})\\s*$`);N("HYPHENRANGELOOSE",`^\\s*(${w[A.XRANGEPLAINLOOSE]})\\s+-\\s+(${w[A.XRANGEPLAINLOOSE]})\\s*$`);N("STAR","(<|>)?=?\\s*\\*");N("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");N("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Vu=pe((DS,zu)=>{"use strict";var Bu=/^[0-9]+$/,ku=(r,e)=>{let t=Bu.test(r),n=Bu.test(e);return t&&n&&(r=+r,e=+e),r===e?0:t&&!n?-1:n&&!t?1:r<e?-1:1},Zp=(r,e)=>ku(e,r);zu.exports={compareIdentifiers:ku,rcompareIdentifiers:Zp}});var bs=pe((IS,Gu)=>{"use strict";var xs=qi(),{MAX_LENGTH:Hu,MAX_SAFE_INTEGER:Ss}=_s(),{safeRe:Ms,t:Es}=ys(),Kp=vs(),{compareIdentifiers:Yn}=Vu(),ya=class r{constructor(e,t){if(t=Kp(t),e instanceof r){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>Hu)throw new TypeError(`version is longer than ${Hu} characters`);xs("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;let n=e.trim().match(t.loose?Ms[Es.LOOSE]:Ms[Es.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>Ss||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Ss||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Ss||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(i=>{if(/^[0-9]+$/.test(i)){let s=+i;if(s>=0&&s<Ss)return s}return i}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(xs("SemVer.compare",this.version,this.options,e),!(e instanceof r)){if(typeof e=="string"&&e===this.version)return 0;e=new r(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof r||(e=new r(e,this.options)),Yn(this.major,e.major)||Yn(this.minor,e.minor)||Yn(this.patch,e.patch)}comparePre(e){if(e instanceof r||(e=new r(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{let n=this.prerelease[t],i=e.prerelease[t];if(xs("prerelease compare",t,n,i),n===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(n===void 0)return-1;if(n===i)continue;return Yn(n,i)}while(++t)}compareBuild(e){e instanceof r||(e=new r(e,this.options));let t=0;do{let n=this.build[t],i=e.build[t];if(xs("build compare",t,n,i),n===void 0&&i===void 0)return 0;if(i===void 0)return 1;if(n===void 0)return-1;if(n===i)continue;return Yn(n,i)}while(++t)}inc(e,t,n){if(e.startsWith("pre")){if(!t&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(t){let i=`-${t}`.match(this.options.loose?Ms[Es.PRERELEASELOOSE]:Ms[Es.PRERELEASE]);if(!i||i[1]!==t)throw new Error(`invalid identifier: ${t}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,n),this.inc("pre",t,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",t,n),this.inc("pre",t,n);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let i=Number(n)?1:0;if(this.prerelease.length===0)this.prerelease=[i];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(t===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(i)}}if(t){let s=[t,i];n===!1&&(s=[t]),Yn(this.prerelease[0],t)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Gu.exports=ya});var pn=pe((PS,$u)=>{"use strict";var Wu=bs(),Jp=(r,e,t)=>new Wu(r,t).compare(new Wu(e,t));$u.exports=Jp});var qu=pe((LS,Xu)=>{"use strict";var Qp=pn(),em=(r,e,t)=>Qp(r,e,t)===0;Xu.exports=em});var Yu=pe((FS,ju)=>{"use strict";var tm=pn(),nm=(r,e,t)=>tm(r,e,t)!==0;ju.exports=nm});var Ku=pe((NS,Zu)=>{"use strict";var im=pn(),rm=(r,e,t)=>im(r,e,t)>0;Zu.exports=rm});var Qu=pe((OS,Ju)=>{"use strict";var sm=pn(),om=(r,e,t)=>sm(r,e,t)>=0;Ju.exports=om});var th=pe((US,eh)=>{"use strict";var am=pn(),cm=(r,e,t)=>am(r,e,t)<0;eh.exports=cm});var ih=pe((BS,nh)=>{"use strict";var lm=pn(),um=(r,e,t)=>lm(r,e,t)<=0;nh.exports=um});var sh=pe((kS,rh)=>{"use strict";var hm=qu(),dm=Yu(),fm=Ku(),pm=Qu(),mm=th(),gm=ih(),vm=(r,e,t,n)=>{switch(e){case"===":return typeof r=="object"&&(r=r.version),typeof t=="object"&&(t=t.version),r===t;case"!==":return typeof r=="object"&&(r=r.version),typeof t=="object"&&(t=t.version),r!==t;case"":case"=":case"==":return hm(r,t,n);case"!=":return dm(r,t,n);case">":return fm(r,t,n);case">=":return pm(r,t,n);case"<":return mm(r,t,n);case"<=":return gm(r,t,n);default:throw new TypeError(`Invalid operator: ${e}`)}};rh.exports=vm});var dh=pe((zS,hh)=>{"use strict";var ji=Symbol("SemVer ANY"),Ma=class r{static get ANY(){return ji}constructor(e,t){if(t=oh(t),e instanceof r){if(e.loose===!!t.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),Sa("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===ji?this.value="":this.value=this.operator+this.semver.version,Sa("comp",this)}parse(e){let t=this.options.loose?ah[ch.COMPARATORLOOSE]:ah[ch.COMPARATOR],n=e.match(t);if(!n)throw new TypeError(`Invalid comparator: ${e}`);this.operator=n[1]!==void 0?n[1]:"",this.operator==="="&&(this.operator=""),n[2]?this.semver=new lh(n[2],this.options.loose):this.semver=ji}toString(){return this.value}test(e){if(Sa("Comparator.test",e,this.options.loose),this.semver===ji||e===ji)return!0;if(typeof e=="string")try{e=new lh(e,this.options)}catch{return!1}return xa(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof r))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new uh(e.value,t).test(this.value):e.operator===""?e.value===""?!0:new uh(this.value,t).test(e.semver):(t=oh(t),t.includePrerelease&&(this.value==="<0.0.0-0"||e.value==="<0.0.0-0")||!t.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||xa(this.semver,"<",e.semver,t)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||xa(this.semver,">",e.semver,t)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))}};hh.exports=Ma;var oh=vs(),{safeRe:ah,t:ch}=ys(),xa=sh(),Sa=qi(),lh=bs(),uh=Ea()});var Ea=pe((VS,gh)=>{"use strict";var _m=/\s+/g,ba=class r{constructor(e,t){if(t=xm(t),e instanceof r)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new r(e.raw,t);if(e instanceof wa)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e.trim().replace(_m," "),this.set=this.raw.split("||").map(n=>this.parseRange(n.trim())).filter(n=>n.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let n=this.set[0];if(this.set=this.set.filter(i=>!ph(i[0])),this.set.length===0)this.set=[n];else if(this.set.length>1){for(let i of this.set)if(i.length===1&&Tm(i[0])){this.set=[i];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let t=this.set[e];for(let n=0;n<t.length;n++)n>0&&(this.formatted+=" "),this.formatted+=t[n].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){let n=((this.options.includePrerelease&&wm)|(this.options.loose&&Am))+":"+e,i=fh.get(n);if(i)return i;let s=this.options.loose,o=s?Ve[Fe.HYPHENRANGELOOSE]:Ve[Fe.HYPHENRANGE];e=e.replace(o,Um(this.options.includePrerelease)),ce("hyphen replace",e),e=e.replace(Ve[Fe.COMPARATORTRIM],Mm),ce("comparator trim",e),e=e.replace(Ve[Fe.TILDETRIM],Em),ce("tilde trim",e),e=e.replace(Ve[Fe.CARETTRIM],bm),ce("caret trim",e);let c=e.split(" ").map(h=>Cm(h,this.options)).join(" ").split(/\s+/).map(h=>Om(h,this.options));s&&(c=c.filter(h=>(ce("loose invalid filter",h,this.options),!!h.match(Ve[Fe.COMPARATORLOOSE])))),ce("range list",c);let a=new Map,l=c.map(h=>new wa(h,this.options));for(let h of l){if(ph(h))return[h];a.set(h.value,h)}a.size>1&&a.has("")&&a.delete("");let u=[...a.values()];return fh.set(n,u),u}intersects(e,t){if(!(e instanceof r))throw new TypeError("a Range is required");return this.set.some(n=>mh(n,t)&&e.set.some(i=>mh(i,t)&&n.every(s=>i.every(o=>s.intersects(o,t)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new Sm(e,this.options)}catch{return!1}for(let t=0;t<this.set.length;t++)if(Bm(this.set[t],e,this.options))return!0;return!1}};gh.exports=ba;var ym=Lu(),fh=new ym,xm=vs(),wa=dh(),ce=qi(),Sm=bs(),{safeRe:Ve,t:Fe,comparatorTrimReplace:Mm,tildeTrimReplace:Em,caretTrimReplace:bm}=ys(),{FLAG_INCLUDE_PRERELEASE:wm,FLAG_LOOSE:Am}=_s(),ph=r=>r.value==="<0.0.0-0",Tm=r=>r.value==="",mh=(r,e)=>{let t=!0,n=r.slice(),i=n.pop();for(;t&&n.length;)t=n.every(s=>i.intersects(s,e)),i=n.pop();return t},Cm=(r,e)=>(ce("comp",r,e),r=Im(r,e),ce("caret",r),r=Rm(r,e),ce("tildes",r),r=Lm(r,e),ce("xrange",r),r=Nm(r,e),ce("stars",r),r),Ne=r=>!r||r.toLowerCase()==="x"||r==="*",Rm=(r,e)=>r.trim().split(/\s+/).map(t=>Dm(t,e)).join(" "),Dm=(r,e)=>{let t=e.loose?Ve[Fe.TILDELOOSE]:Ve[Fe.TILDE];return r.replace(t,(n,i,s,o,c)=>{ce("tilde",r,n,i,s,o,c);let a;return Ne(i)?a="":Ne(s)?a=`>=${i}.0.0 <${+i+1}.0.0-0`:Ne(o)?a=`>=${i}.${s}.0 <${i}.${+s+1}.0-0`:c?(ce("replaceTilde pr",c),a=`>=${i}.${s}.${o}-${c} <${i}.${+s+1}.0-0`):a=`>=${i}.${s}.${o} <${i}.${+s+1}.0-0`,ce("tilde return",a),a})},Im=(r,e)=>r.trim().split(/\s+/).map(t=>Pm(t,e)).join(" "),Pm=(r,e)=>{ce("caret",r,e);let t=e.loose?Ve[Fe.CARETLOOSE]:Ve[Fe.CARET],n=e.includePrerelease?"-0":"";return r.replace(t,(i,s,o,c,a)=>{ce("caret",r,i,s,o,c,a);let l;return Ne(s)?l="":Ne(o)?l=`>=${s}.0.0${n} <${+s+1}.0.0-0`:Ne(c)?s==="0"?l=`>=${s}.${o}.0${n} <${s}.${+o+1}.0-0`:l=`>=${s}.${o}.0${n} <${+s+1}.0.0-0`:a?(ce("replaceCaret pr",a),s==="0"?o==="0"?l=`>=${s}.${o}.${c}-${a} <${s}.${o}.${+c+1}-0`:l=`>=${s}.${o}.${c}-${a} <${s}.${+o+1}.0-0`:l=`>=${s}.${o}.${c}-${a} <${+s+1}.0.0-0`):(ce("no pr"),s==="0"?o==="0"?l=`>=${s}.${o}.${c}${n} <${s}.${o}.${+c+1}-0`:l=`>=${s}.${o}.${c}${n} <${s}.${+o+1}.0-0`:l=`>=${s}.${o}.${c} <${+s+1}.0.0-0`),ce("caret return",l),l})},Lm=(r,e)=>(ce("replaceXRanges",r,e),r.split(/\s+/).map(t=>Fm(t,e)).join(" ")),Fm=(r,e)=>{r=r.trim();let t=e.loose?Ve[Fe.XRANGELOOSE]:Ve[Fe.XRANGE];return r.replace(t,(n,i,s,o,c,a)=>{ce("xRange",r,n,i,s,o,c,a);let l=Ne(s),u=l||Ne(o),h=u||Ne(c),d=h;return i==="="&&d&&(i=""),a=e.includePrerelease?"-0":"",l?i===">"||i==="<"?n="<0.0.0-0":n="*":i&&d?(u&&(o=0),c=0,i===">"?(i=">=",u?(s=+s+1,o=0,c=0):(o=+o+1,c=0)):i==="<="&&(i="<",u?s=+s+1:o=+o+1),i==="<"&&(a="-0"),n=`${i+s}.${o}.${c}${a}`):u?n=`>=${s}.0.0${a} <${+s+1}.0.0-0`:h&&(n=`>=${s}.${o}.0${a} <${s}.${+o+1}.0-0`),ce("xRange return",n),n})},Nm=(r,e)=>(ce("replaceStars",r,e),r.trim().replace(Ve[Fe.STAR],"")),Om=(r,e)=>(ce("replaceGTE0",r,e),r.trim().replace(Ve[e.includePrerelease?Fe.GTE0PRE:Fe.GTE0],"")),Um=r=>(e,t,n,i,s,o,c,a,l,u,h,d)=>(Ne(n)?t="":Ne(i)?t=`>=${n}.0.0${r?"-0":""}`:Ne(s)?t=`>=${n}.${i}.0${r?"-0":""}`:o?t=`>=${t}`:t=`>=${t}${r?"-0":""}`,Ne(l)?a="":Ne(u)?a=`<${+l+1}.0.0-0`:Ne(h)?a=`<${l}.${+u+1}.0-0`:d?a=`<=${l}.${u}.${h}-${d}`:r?a=`<${l}.${u}.${+h+1}-0`:a=`<=${a}`,`${t} ${a}`.trim()),Bm=(r,e,t)=>{for(let n=0;n<r.length;n++)if(!r[n].test(e))return!1;if(e.prerelease.length&&!t.includePrerelease){for(let n=0;n<r.length;n++)if(ce(r[n].semver),r[n].semver!==wa.ANY&&r[n].semver.prerelease.length>0){let i=r[n].semver;if(i.major===e.major&&i.minor===e.minor&&i.patch===e.patch)return!0}return!1}return!0}});var _h=pe((HS,vh)=>{"use strict";var km=Ea(),zm=(r,e,t)=>{try{e=new km(e,t)}catch{return!1}return e.test(r)};vh.exports=zm});var ul=null;function wt(){return ul}function Co(r){ul??=r}var gi=class{},Ro=(()=>{class r{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:()=>F(hl),providedIn:"platform"})}return r})();var hl=(()=>{class r extends Ro{_location;_history;_doc=F(ve);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return wt().getBaseHref(this._doc)}onPopState(t){let n=wt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=wt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,i){this._history.pushState(t,n,i)}replaceState(t,n,i){this._history.replaceState(t,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:()=>new r,providedIn:"platform"})}return r})();function dl(r,e){return r?e?r.endsWith("/")?e.startsWith("/")?r+e.slice(1):r+e:e.startsWith("/")?r+e:`${r}/${e}`:r:e}function cl(r){let e=r.search(/#|\?|$/);return r[e-1]==="/"?r.slice(0,e-1)+r.slice(e):r}function Ht(r){return r&&r[0]!=="?"?`?${r}`:r}var Rr=(()=>{class r{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:()=>F(pl),providedIn:"root"})}return r})(),fl=new oe(""),pl=(()=>{class r extends Rr{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??F(ve).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return dl(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+Ht(this._platformLocation.search),i=this._platformLocation.hash;return i&&t?`${n}${i}`:n}pushState(t,n,i,s){let o=this.prepareExternalUrl(i+Ht(s));this._platformLocation.pushState(t,n,o)}replaceState(t,n,i,s){let o=this.prepareExternalUrl(i+Ht(s));this._platformLocation.replaceState(t,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||r)(j(Ro),j(fl,8))};static \u0275prov=G({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Un=(()=>{class r{_subject=new te;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=dd(cl(ll(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+Ht(n))}normalize(t){return r.stripTrailingSlash(hd(this._basePath,ll(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",i=null){this._locationStrategy.pushState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Ht(n)),i)}replaceState(t,n="",i=null){this._locationStrategy.replaceState(i,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Ht(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(i=>i(t,n))}subscribe(t,n,i){return this._subject.subscribe({next:t,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=Ht;static joinWithSlash=dl;static stripTrailingSlash=cl;static \u0275fac=function(n){return new(n||r)(j(Rr))};static \u0275prov=G({token:r,factory:()=>ud(),providedIn:"root"})}return r})();function ud(){return new Un(j(Rr))}function hd(r,e){if(!r||!e.startsWith(r))return e;let t=e.substring(r.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function ll(r){return r.replace(/\/index.html$/,"")}function dd(r){if(new RegExp("^(https?:)?//").test(r)){let[,t]=r.split(/\/\/[^\/]+/);return t}return r}var Ce=function(r){return r[r.Format=0]="Format",r[r.Standalone=1]="Standalone",r}(Ce||{}),ee=function(r){return r[r.Narrow=0]="Narrow",r[r.Abbreviated=1]="Abbreviated",r[r.Wide=2]="Wide",r[r.Short=3]="Short",r}(ee||{}),ke=function(r){return r[r.Short=0]="Short",r[r.Medium=1]="Medium",r[r.Long=2]="Long",r[r.Full=3]="Full",r}(ke||{}),Tt={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function vl(r){return Qe(r)[ge.LocaleId]}function _l(r,e,t){let n=Qe(r),i=[n[ge.DayPeriodsFormat],n[ge.DayPeriodsStandalone]],s=et(i,e);return et(s,t)}function yl(r,e,t){let n=Qe(r),i=[n[ge.DaysFormat],n[ge.DaysStandalone]],s=et(i,e);return et(s,t)}function xl(r,e,t){let n=Qe(r),i=[n[ge.MonthsFormat],n[ge.MonthsStandalone]],s=et(i,e);return et(s,t)}function Sl(r,e){let n=Qe(r)[ge.Eras];return et(n,e)}function vi(r,e){let t=Qe(r);return et(t[ge.DateFormat],e)}function _i(r,e){let t=Qe(r);return et(t[ge.TimeFormat],e)}function yi(r,e){let n=Qe(r)[ge.DateTimeFormat];return et(n,e)}function xi(r,e){let t=Qe(r),n=t[ge.NumberSymbols][e];if(typeof n>"u"){if(e===Tt.CurrencyDecimal)return t[ge.NumberSymbols][Tt.Decimal];if(e===Tt.CurrencyGroup)return t[ge.NumberSymbols][Tt.Group]}return n}function Ml(r){if(!r[ge.ExtraData])throw new Error(`Missing extra locale data for the locale "${r[ge.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function El(r){let e=Qe(r);return Ml(e),(e[ge.ExtraData][2]||[]).map(n=>typeof n=="string"?Do(n):[Do(n[0]),Do(n[1])])}function bl(r,e,t){let n=Qe(r);Ml(n);let i=[n[ge.ExtraData][0],n[ge.ExtraData][1]],s=et(i,e)||[];return et(s,t)||[]}function et(r,e){for(let t=e;t>-1;t--)if(typeof r[t]<"u")return r[t];throw new Error("Locale data API: locale data undefined")}function Do(r){let[e,t]=r.split(":");return{hours:+e,minutes:+t}}var fd=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Dr={},pd=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function wl(r,e,t,n){let i=Ed(r);e=At(t,e)||e;let o=[],c;for(;e;)if(c=pd.exec(e),c){o=o.concat(c.slice(1));let u=o.pop();if(!u)break;e=u}else{o.push(e);break}let a=i.getTimezoneOffset();n&&(a=Tl(n,a),i=Md(i,n));let l="";return o.forEach(u=>{let h=xd(u);l+=h?h(i,t,a):u==="''"?"'":u.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),l}function Nr(r,e,t){let n=new Date(0);return n.setFullYear(r,e,t),n.setHours(0,0,0),n}function At(r,e){let t=vl(r);if(Dr[t]??={},Dr[t][e])return Dr[t][e];let n="";switch(e){case"shortDate":n=vi(r,ke.Short);break;case"mediumDate":n=vi(r,ke.Medium);break;case"longDate":n=vi(r,ke.Long);break;case"fullDate":n=vi(r,ke.Full);break;case"shortTime":n=_i(r,ke.Short);break;case"mediumTime":n=_i(r,ke.Medium);break;case"longTime":n=_i(r,ke.Long);break;case"fullTime":n=_i(r,ke.Full);break;case"short":let i=At(r,"shortTime"),s=At(r,"shortDate");n=Ir(yi(r,ke.Short),[i,s]);break;case"medium":let o=At(r,"mediumTime"),c=At(r,"mediumDate");n=Ir(yi(r,ke.Medium),[o,c]);break;case"long":let a=At(r,"longTime"),l=At(r,"longDate");n=Ir(yi(r,ke.Long),[a,l]);break;case"full":let u=At(r,"fullTime"),h=At(r,"fullDate");n=Ir(yi(r,ke.Full),[u,h]);break}return n&&(Dr[t][e]=n),n}function Ir(r,e){return e&&(r=r.replace(/\{([^}]+)}/g,function(t,n){return e!=null&&n in e?e[n]:t})),r}function ot(r,e,t="-",n,i){let s="";(r<0||i&&r<=0)&&(i?r=-r+1:(r=-r,s=t));let o=String(r);for(;o.length<e;)o="0"+o;return n&&(o=o.slice(o.length-e)),s+o}function md(r,e){return ot(r,3).substring(0,e)}function _e(r,e,t=0,n=!1,i=!1){return function(s,o){let c=gd(r,s);if((t>0||c>-t)&&(c+=t),r===3)c===0&&t===-12&&(c=12);else if(r===6)return md(c,e);let a=xi(o,Tt.MinusSign);return ot(c,e,a,n,i)}}function gd(r,e){switch(r){case 0:return e.getFullYear();case 1:return e.getMonth();case 2:return e.getDate();case 3:return e.getHours();case 4:return e.getMinutes();case 5:return e.getSeconds();case 6:return e.getMilliseconds();case 7:return e.getDay();default:throw new Error(`Unknown DateType value "${r}".`)}}function se(r,e,t=Ce.Format,n=!1){return function(i,s){return vd(i,s,r,e,t,n)}}function vd(r,e,t,n,i,s){switch(t){case 2:return xl(e,i,n)[r.getMonth()];case 1:return yl(e,i,n)[r.getDay()];case 0:let o=r.getHours(),c=r.getMinutes();if(s){let l=El(e),u=bl(e,i,n),h=l.findIndex(d=>{if(Array.isArray(d)){let[f,p]=d,g=o>=f.hours&&c>=f.minutes,v=o<p.hours||o===p.hours&&c<p.minutes;if(f.hours<p.hours){if(g&&v)return!0}else if(g||v)return!0}else if(d.hours===o&&d.minutes===c)return!0;return!1});if(h!==-1)return u[h]}return _l(e,i,n)[o<12?0:1];case 3:return Sl(e,n)[r.getFullYear()<=0?0:1];default:let a=t;throw new Error(`unexpected translation type ${a}`)}}function Pr(r){return function(e,t,n){let i=-1*n,s=xi(t,Tt.MinusSign),o=i>0?Math.floor(i/60):Math.ceil(i/60);switch(r){case 0:return(i>=0?"+":"")+ot(o,2,s)+ot(Math.abs(i%60),2,s);case 1:return"GMT"+(i>=0?"+":"")+ot(o,1,s);case 2:return"GMT"+(i>=0?"+":"")+ot(o,2,s)+":"+ot(Math.abs(i%60),2,s);case 3:return n===0?"Z":(i>=0?"+":"")+ot(o,2,s)+":"+ot(Math.abs(i%60),2,s);default:throw new Error(`Unknown zone width "${r}"`)}}}var _d=0,Fr=4;function yd(r){let e=Nr(r,_d,1).getDay();return Nr(r,0,1+(e<=Fr?Fr:Fr+7)-e)}function Al(r){let e=r.getDay(),t=e===0?-3:Fr-e;return Nr(r.getFullYear(),r.getMonth(),r.getDate()+t)}function Io(r,e=!1){return function(t,n){let i;if(e){let s=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,o=t.getDate();i=1+Math.floor((o+s)/7)}else{let s=Al(t),o=yd(s.getFullYear()),c=s.getTime()-o.getTime();i=1+Math.round(c/6048e5)}return ot(i,r,xi(n,Tt.MinusSign))}}function Lr(r,e=!1){return function(t,n){let s=Al(t).getFullYear();return ot(s,r,xi(n,Tt.MinusSign),e)}}var Po={};function xd(r){if(Po[r])return Po[r];let e;switch(r){case"G":case"GG":case"GGG":e=se(3,ee.Abbreviated);break;case"GGGG":e=se(3,ee.Wide);break;case"GGGGG":e=se(3,ee.Narrow);break;case"y":e=_e(0,1,0,!1,!0);break;case"yy":e=_e(0,2,0,!0,!0);break;case"yyy":e=_e(0,3,0,!1,!0);break;case"yyyy":e=_e(0,4,0,!1,!0);break;case"Y":e=Lr(1);break;case"YY":e=Lr(2,!0);break;case"YYY":e=Lr(3);break;case"YYYY":e=Lr(4);break;case"M":case"L":e=_e(1,1,1);break;case"MM":case"LL":e=_e(1,2,1);break;case"MMM":e=se(2,ee.Abbreviated);break;case"MMMM":e=se(2,ee.Wide);break;case"MMMMM":e=se(2,ee.Narrow);break;case"LLL":e=se(2,ee.Abbreviated,Ce.Standalone);break;case"LLLL":e=se(2,ee.Wide,Ce.Standalone);break;case"LLLLL":e=se(2,ee.Narrow,Ce.Standalone);break;case"w":e=Io(1);break;case"ww":e=Io(2);break;case"W":e=Io(1,!0);break;case"d":e=_e(2,1);break;case"dd":e=_e(2,2);break;case"c":case"cc":e=_e(7,1);break;case"ccc":e=se(1,ee.Abbreviated,Ce.Standalone);break;case"cccc":e=se(1,ee.Wide,Ce.Standalone);break;case"ccccc":e=se(1,ee.Narrow,Ce.Standalone);break;case"cccccc":e=se(1,ee.Short,Ce.Standalone);break;case"E":case"EE":case"EEE":e=se(1,ee.Abbreviated);break;case"EEEE":e=se(1,ee.Wide);break;case"EEEEE":e=se(1,ee.Narrow);break;case"EEEEEE":e=se(1,ee.Short);break;case"a":case"aa":case"aaa":e=se(0,ee.Abbreviated);break;case"aaaa":e=se(0,ee.Wide);break;case"aaaaa":e=se(0,ee.Narrow);break;case"b":case"bb":case"bbb":e=se(0,ee.Abbreviated,Ce.Standalone,!0);break;case"bbbb":e=se(0,ee.Wide,Ce.Standalone,!0);break;case"bbbbb":e=se(0,ee.Narrow,Ce.Standalone,!0);break;case"B":case"BB":case"BBB":e=se(0,ee.Abbreviated,Ce.Format,!0);break;case"BBBB":e=se(0,ee.Wide,Ce.Format,!0);break;case"BBBBB":e=se(0,ee.Narrow,Ce.Format,!0);break;case"h":e=_e(3,1,-12);break;case"hh":e=_e(3,2,-12);break;case"H":e=_e(3,1);break;case"HH":e=_e(3,2);break;case"m":e=_e(4,1);break;case"mm":e=_e(4,2);break;case"s":e=_e(5,1);break;case"ss":e=_e(5,2);break;case"S":e=_e(6,1);break;case"SS":e=_e(6,2);break;case"SSS":e=_e(6,3);break;case"Z":case"ZZ":case"ZZZ":e=Pr(0);break;case"ZZZZZ":e=Pr(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":e=Pr(1);break;case"OOOO":case"ZZZZ":case"zzzz":e=Pr(2);break;default:return null}return Po[r]=e,e}function Tl(r,e){r=r.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+r)/6e4;return isNaN(t)?e:t}function Sd(r,e){return r=new Date(r.getTime()),r.setMinutes(r.getMinutes()+e),r}function Md(r,e,t){let i=r.getTimezoneOffset(),s=Tl(e,i);return Sd(r,-1*(s-i))}function Ed(r){if(ml(r))return r;if(typeof r=="number"&&!isNaN(r))return new Date(r);if(typeof r=="string"){if(r=r.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(r)){let[i,s=1,o=1]=r.split("-").map(c=>+c);return Nr(i,s-1,o)}let t=parseFloat(r);if(!isNaN(r-t))return new Date(t);let n;if(n=r.match(fd))return bd(n)}let e=new Date(r);if(!ml(e))throw new Error(`Unable to convert "${r}" into a date`);return e}function bd(r){let e=new Date(0),t=0,n=0,i=r[8]?e.setUTCFullYear:e.setFullYear,s=r[8]?e.setUTCHours:e.setHours;r[9]&&(t=Number(r[9]+r[10]),n=Number(r[9]+r[11])),i.call(e,Number(r[1]),Number(r[2])-1,Number(r[3]));let o=Number(r[4]||0)-t,c=Number(r[5]||0)-n,a=Number(r[6]||0),l=Math.floor(parseFloat("0."+(r[7]||0))*1e3);return s.call(e,o,c,a,l),e}function ml(r){return r instanceof Date&&!isNaN(r.valueOf())}var at=(()=>{class r{_viewContainer;_context=new Or;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,n){this._viewContainer=t,this._thenTemplateRef=n}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){gl(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){gl(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||r)(Z(zt),Z(Hc))};static \u0275dir=Dn({type:r,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return r})(),Or=class{$implicit=null;ngIf=null};function gl(r,e){if(r&&!r.createEmbeddedView)throw new re(2020,!1)}function Cl(r,e){return new re(2100,!1)}var Lo=class{createSubscription(e,t){return Eo(()=>e.subscribe({next:t,error:n=>{throw n}}))}dispose(e){Eo(()=>e.unsubscribe())}},Fo=class{createSubscription(e,t){return e.then(n=>t?.(n),n=>{throw n}),{unsubscribe:()=>{t=null}}}dispose(e){e.unsubscribe()}},wd=new Fo,Ad=new Lo,cn=(()=>{class r{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(t){this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){if(!this._obj){if(t)try{this.markForCheckOnValueUpdate=!1,this._subscribe(t)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,n=>this._updateLatestValue(t,n))}_selectStrategy(t){if(xr(t))return wd;if(Xc(t))return Ad;throw Cl(r,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,n){t===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||r)(Z(br,16))};static \u0275pipe=Mo({name:"async",type:r,pure:!1})}return r})();var Td="mediumDate",Rl=new oe(""),Dl=new oe(""),No=(()=>{class r{locale;defaultTimezone;defaultOptions;constructor(t,n,i){this.locale=t,this.defaultTimezone=n,this.defaultOptions=i}transform(t,n,i,s){if(t==null||t===""||t!==t)return null;try{let o=n??this.defaultOptions?.dateFormat??Td,c=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return wl(t,o,s||this.locale,c)}catch(o){throw Cl(r,o.message)}}static \u0275fac=function(n){return new(n||r)(Z(rl,16),Z(Rl,24),Z(Dl,24))};static \u0275pipe=Mo({name:"date",type:r,pure:!0})}return r})();var Ur=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Rn({type:r});static \u0275inj=wn({})}return r})();var zr=new oe(""),ko=(()=>{class r{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(i=>{i.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,i,s){return this._findPluginFor(n).addEventListener(t,n,i,s)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(s=>s.supports(t)),!n)throw new re(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||r)(j(zr),j(mt))};static \u0275prov=G({token:r,factory:r.\u0275fac})}return r})(),Si=class{_doc;constructor(e){this._doc=e}manager},Br="ng-app-id";function Il(r){for(let e of r)e.remove()}function Pl(r,e){let t=e.createElement("style");return t.textContent=r,t}function Rd(r,e,t,n){let i=r.head?.querySelectorAll(`style[${Br}="${e}"],link[${Br}="${e}"]`);if(i)for(let s of i)s.removeAttribute(Br),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Uo(r,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",r),t}var zo=(()=>{class r{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,n,i,s={}){this.doc=t,this.appId=n,this.nonce=i,this.isServer=wr(s),Rd(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let i of t)this.addUsage(i,this.inline,Pl);n?.forEach(i=>this.addUsage(i,this.external,Uo))}removeStyles(t,n){for(let i of t)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(t,n,i){let s=n.get(t);s?s.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,i(t,this.doc)))})}removeUsage(t,n){let i=n.get(t);i&&(i.usage--,i.usage<=0&&(Il(i.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Il(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(t,Pl(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(t,Uo(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(Br,this.appId),t.appendChild(n)}static \u0275fac=function(n){return new(n||r)(j(ve),j(vo),j(_o,8),j(nn))};static \u0275prov=G({token:r,factory:r.\u0275fac})}return r})(),Oo={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Vo=/%COMP%/g;var Fl="%COMP%",Dd=`_nghost-${Fl}`,Id=`_ngcontent-${Fl}`,Pd=!0,Ld=new oe("",{providedIn:"root",factory:()=>Pd});function Fd(r){return Id.replace(Vo,r)}function Nd(r){return Dd.replace(Vo,r)}function Nl(r,e){return e.map(t=>t.replace(Vo,r))}var bi=(()=>{class r{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,n,i,s,o,c,a,l=null,u=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=c,this.ngZone=a,this.nonce=l,this.tracingService=u,this.platformIsServer=wr(c),this.defaultRenderer=new Mi(t,o,a,this.platformIsServer,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===mi.ShadowDom&&(n=be(D({},n),{encapsulation:mi.Emulated}));let i=this.getOrCreateRenderer(t,n);return i instanceof kr?i.applyToHost(t):i instanceof Ei&&i.applyStyles(),i}getOrCreateRenderer(t,n){let i=this.rendererByCompId,s=i.get(n.id);if(!s){let o=this.doc,c=this.ngZone,a=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.platformIsServer,d=this.tracingService;switch(n.encapsulation){case mi.Emulated:s=new kr(a,l,n,this.appId,u,o,c,h,d);break;case mi.ShadowDom:return new Bo(a,l,t,n,o,c,this.nonce,h,d);default:s=new Ei(a,l,n,u,o,c,h,d);break}i.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||r)(j(ko),j(zo),j(vo),j(Ld),j(ve),j(nn),j(mt),j(_o),j(Vc,8))};static \u0275prov=G({token:r,factory:r.\u0275fac})}return r})(),Mi=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,n,i,s){this.eventManager=e,this.doc=t,this.ngZone=n,this.platformIsServer=i,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Oo[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Ll(e)?e.content:e).appendChild(t)}insertBefore(e,t,n){e&&(Ll(e)?e.content:e).insertBefore(t,n)}removeChild(e,t){t.remove()}selectRootElement(e,t){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new re(-5104,!1);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,i){if(i){t=i+":"+t;let s=Oo[i];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){let i=Oo[n];i?e.removeAttributeNS(i,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,i){i&(Cn.DashCase|Cn.Important)?e.style.setProperty(t,n,i&Cn.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&Cn.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e!=null&&(e[t]=n)}setValue(e,t){e.nodeValue=t}listen(e,t,n,i){if(typeof e=="string"&&(e=wt().getGlobalEventTarget(this.doc,e),!e))throw new re(5102,!1);let s=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,i)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Ll(r){return r.tagName==="TEMPLATE"&&r.content!==void 0}var Bo=class extends Mi{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,n,i,s,o,c,a,l){super(e,s,o,a,l),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=i.styles;u=Nl(i.id,u);for(let d of u){let f=document.createElement("style");c&&f.setAttribute("nonce",c),f.textContent=d,this.shadowRoot.appendChild(f)}let h=i.getExternalStyles?.();if(h)for(let d of h){let f=Uo(d,s);c&&f.setAttribute("nonce",c),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ei=class extends Mi{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,n,i,s,o,c,a,l){super(e,s,o,c,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=i;let u=n.styles;this.styles=l?Nl(l,u):u,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},kr=class extends Ei{contentAttr;hostAttr;constructor(e,t,n,i,s,o,c,a,l){let u=i+"-"+n.id;super(e,t,n,s,o,c,a,l,u),this.contentAttr=Fd(u),this.hostAttr=Nd(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}};var Vr=class r extends gi{supportsDOMEvents=!0;static makeCurrent(){Co(new r)}onAndCancel(e,t,n,i){return e.addEventListener(t,n,i),()=>{e.removeEventListener(t,n,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=Od();return t==null?null:Ud(t)}resetBaseElement(){wi=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return bo(document.cookie,e)}},wi=null;function Od(){return wi=wi||document.head.querySelector("base"),wi?wi.getAttribute("href"):null}function Ud(r){return new URL(r,document.baseURI).pathname}var Bd=(()=>{class r{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:r.\u0275fac})}return r})(),Ul=(()=>{class r extends Si{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,i,s){return t.addEventListener(n,i,s),()=>this.removeEventListener(t,n,i,s)}removeEventListener(t,n,i,s){return t.removeEventListener(n,i,s)}static \u0275fac=function(n){return new(n||r)(j(ve))};static \u0275prov=G({token:r,factory:r.\u0275fac})}return r})(),Ol=["alt","control","meta","shift"],kd={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},zd={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey},Bl=(()=>{class r extends Si{constructor(t){super(t)}supports(t){return r.parseEventName(t)!=null}addEventListener(t,n,i,s){let o=r.parseEventName(n),c=r.eventCallback(o.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>wt().onAndCancel(t,o.domEventName,c,s))}static parseEventName(t){let n=t.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let s=r._normalizeKey(n.pop()),o="",c=n.indexOf("code");if(c>-1&&(n.splice(c,1),o="code."),Ol.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),o+=l+".")}),o+=s,n.length!=0||s.length===0)return null;let a={};return a.domEventName=i,a.fullKey=o,a}static matchEventFullKeyCode(t,n){let i=kd[t.key]||t.key,s="";return n.indexOf("code.")>-1&&(i=t.code,s="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),Ol.forEach(o=>{if(o!==i){let c=zd[o];c(t)&&(s+=o+".")}}),s+=i,s===n)}static eventCallback(t,n,i){return s=>{r.matchEventFullKeyCode(s,t)&&i.runGuarded(()=>n(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||r)(j(ve))};static \u0275prov=G({token:r,factory:r.\u0275fac})}return r})();function Ho(r,e){return sl(D({rootComponent:r},Vd(e)))}function Vd(r){return{appProviders:[...Xd,...r?.providers??[]],platformProviders:$d}}function Hd(){Vr.makeCurrent()}function Gd(){return new go}function Wd(){return Bc(document),document}var $d=[{provide:nn,useValue:wo},{provide:kc,useValue:Hd,multi:!0},{provide:ve,useFactory:Wd}];var Xd=[{provide:Lc,useValue:"root"},{provide:go,useFactory:Gd},{provide:zr,useClass:Ul,multi:!0,deps:[ve]},{provide:zr,useClass:Bl,multi:!0,deps:[ve]},bi,zo,ko,{provide:yr,useExisting:bi},{provide:To,useClass:Bd},[]];var kl=(()=>{class r{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||r)(j(ve))};static \u0275prov=G({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var U="primary",ki=Symbol("RouteTitle"),qo=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function hn(r){return new qo(r)}function ql(r,e,t){let n=t.path.split("/");if(n.length>r.length||t.pathMatch==="full"&&(e.hasChildren()||n.length<r.length))return null;let i={};for(let s=0;s<n.length;s++){let o=n[s],c=r[s];if(o[0]===":")i[o.substring(1)]=c;else if(o!==c.path)return null}return{consumed:r.slice(0,n.length),posParams:i}}function jd(r,e){if(r.length!==e.length)return!1;for(let t=0;t<r.length;++t)if(!vt(r[t],e[t]))return!1;return!0}function vt(r,e){let t=r?jo(r):void 0,n=e?jo(e):void 0;if(!t||!n||t.length!=n.length)return!1;let i;for(let s=0;s<t.length;s++)if(i=t[s],!jl(r[i],e[i]))return!1;return!0}function jo(r){return[...Object.keys(r),...Object.getOwnPropertySymbols(r)]}function jl(r,e){if(Array.isArray(r)&&Array.isArray(e)){if(r.length!==e.length)return!1;let t=[...r].sort(),n=[...e].sort();return t.every((i,s)=>n[s]===i)}else return r===e}function Yl(r){return r.length>0?r[r.length-1]:null}function Wt(r){return Ec(r)?r:xr(r)?Ie(Promise.resolve(r)):P(r)}var Yd={exact:Kl,subset:Jl},Zl={exact:Zd,subset:Kd,ignored:()=>!0};function zl(r,e,t){return Yd[t.paths](r.root,e.root,t.matrixParams)&&Zl[t.queryParams](r.queryParams,e.queryParams)&&!(t.fragment==="exact"&&r.fragment!==e.fragment)}function Zd(r,e){return vt(r,e)}function Kl(r,e,t){if(!ln(r.segments,e.segments)||!Wr(r.segments,e.segments,t)||r.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!r.children[n]||!Kl(r.children[n],e.children[n],t))return!1;return!0}function Kd(r,e){return Object.keys(e).length<=Object.keys(r).length&&Object.keys(e).every(t=>jl(r[t],e[t]))}function Jl(r,e,t){return Ql(r,e,e.segments,t)}function Ql(r,e,t,n){if(r.segments.length>t.length){let i=r.segments.slice(0,t.length);return!(!ln(i,t)||e.hasChildren()||!Wr(i,t,n))}else if(r.segments.length===t.length){if(!ln(r.segments,t)||!Wr(r.segments,t,n))return!1;for(let i in e.children)if(!r.children[i]||!Jl(r.children[i],e.children[i],n))return!1;return!0}else{let i=t.slice(0,r.segments.length),s=t.slice(r.segments.length);return!ln(r.segments,i)||!Wr(r.segments,i,n)||!r.children[U]?!1:Ql(r.children[U],e,s,n)}}function Wr(r,e,t){return e.every((n,i)=>Zl[t](r[i].parameters,n.parameters))}var yt=class{root;queryParams;fragment;_queryParamMap;constructor(e=new Y([],{}),t={},n=null){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=hn(this.queryParams),this._queryParamMap}toString(){return ef.serialize(this)}},Y=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return $r(this)}},Gt=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=hn(this.parameters),this._parameterMap}toString(){return tu(this)}};function Jd(r,e){return ln(r,e)&&r.every((t,n)=>vt(t.parameters,e[n].parameters))}function ln(r,e){return r.length!==e.length?!1:r.every((t,n)=>t.path===e[n].path)}function Qd(r,e){let t=[];return Object.entries(r.children).forEach(([n,i])=>{n===U&&(t=t.concat(e(i,n)))}),Object.entries(r.children).forEach(([n,i])=>{n!==U&&(t=t.concat(e(i,n)))}),t}var zi=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:()=>new dn,providedIn:"root"})}return r})(),dn=class{parse(e){let t=new Zo(e);return new yt(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ai(e.root,!0)}`,n=rf(e.queryParams),i=typeof e.fragment=="string"?`#${tf(e.fragment)}`:"";return`${t}${n}${i}`}},ef=new dn;function $r(r){return r.segments.map(e=>tu(e)).join("/")}function Ai(r,e){if(!r.hasChildren())return $r(r);if(e){let t=r.children[U]?Ai(r.children[U],!1):"",n=[];return Object.entries(r.children).forEach(([i,s])=>{i!==U&&n.push(`${i}:${Ai(s,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=Qd(r,(n,i)=>i===U?[Ai(r.children[U],!1)]:[`${i}:${Ai(n,!1)}`]);return Object.keys(r.children).length===1&&r.children[U]!=null?`${$r(r)}/${t[0]}`:`${$r(r)}/(${t.join("//")})`}}function eu(r){return encodeURIComponent(r).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Hr(r){return eu(r).replace(/%3B/gi,";")}function tf(r){return encodeURI(r)}function Yo(r){return eu(r).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Xr(r){return decodeURIComponent(r)}function Vl(r){return Xr(r.replace(/\+/g,"%20"))}function tu(r){return`${Yo(r.path)}${nf(r.parameters)}`}function nf(r){return Object.entries(r).map(([e,t])=>`;${Yo(e)}=${Yo(t)}`).join("")}function rf(r){let e=Object.entries(r).map(([t,n])=>Array.isArray(n)?n.map(i=>`${Hr(t)}=${Hr(i)}`).join("&"):`${Hr(t)}=${Hr(n)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var sf=/^[^\/()?;#]+/;function Go(r){let e=r.match(sf);return e?e[0]:""}var of=/^[^\/()?;=#]+/;function af(r){let e=r.match(of);return e?e[0]:""}var cf=/^[^=?&#]+/;function lf(r){let e=r.match(cf);return e?e[0]:""}var uf=/^[^&#]+/;function hf(r){let e=r.match(uf);return e?e[0]:""}var Zo=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Y([],{}):new Y([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n[U]=new Y(e,t)),n}parseSegment(){let e=Go(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new re(4009,!1);return this.capture(e),new Gt(Xr(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=af(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let i=Go(this.remaining);i&&(n=i,this.capture(n))}e[Xr(t)]=Xr(n)}parseQueryParam(e){let t=lf(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=hf(this.remaining);o&&(n=o,this.capture(n))}let i=Vl(t),s=Vl(n);if(e.hasOwnProperty(i)){let o=e[i];Array.isArray(o)||(o=[o],e[i]=o),o.push(s)}else e[i]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Go(this.remaining),i=this.remaining[n.length];if(i!=="/"&&i!==")"&&i!==";")throw new re(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=U);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[U]:new Y([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new re(4011,!1)}};function nu(r){return r.segments.length>0?new Y([],{[U]:r}):r}function iu(r){let e={};for(let[n,i]of Object.entries(r.children)){let s=iu(i);if(n===U&&s.segments.length===0&&s.hasChildren())for(let[o,c]of Object.entries(s.children))e[o]=c;else(s.segments.length>0||s.hasChildren())&&(e[n]=s)}let t=new Y(r.segments,e);return df(t)}function df(r){if(r.numberOfChildren===1&&r.children[U]){let e=r.children[U];return new Y(r.segments.concat(e.segments),e.children)}return r}function Hn(r){return r instanceof yt}function ru(r,e,t=null,n=null){let i=su(r);return ou(i,e,t,n)}function su(r){let e;function t(s){let o={};for(let a of s.children){let l=t(a);o[a.outlet]=l}let c=new Y(s.url,o);return s===r&&(e=c),c}let n=t(r.root),i=nu(n);return e??i}function ou(r,e,t,n){let i=r;for(;i.parent;)i=i.parent;if(e.length===0)return Wo(i,i,i,t,n);let s=ff(e);if(s.toRoot())return Wo(i,i,new Y([],{}),t,n);let o=pf(s,i,r),c=o.processChildren?Ci(o.segmentGroup,o.index,s.commands):cu(o.segmentGroup,o.index,s.commands);return Wo(i,o.segmentGroup,c,t,n)}function jr(r){return typeof r=="object"&&r!=null&&!r.outlets&&!r.segmentPath}function Di(r){return typeof r=="object"&&r!=null&&r.outlets}function Wo(r,e,t,n,i){let s={};n&&Object.entries(n).forEach(([a,l])=>{s[a]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;r===e?o=t:o=au(r,e,t);let c=nu(iu(o));return new yt(c,s,i)}function au(r,e,t){let n={};return Object.entries(r.children).forEach(([i,s])=>{s===e?n[i]=t:n[i]=au(s,e,t)}),new Y(r.segments,n)}var Yr=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&jr(n[0]))throw new re(4003,!1);let i=n.find(Di);if(i&&i!==Yl(n))throw new re(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ff(r){if(typeof r[0]=="string"&&r.length===1&&r[0]==="/")return new Yr(!0,0,r);let e=0,t=!1,n=r.reduce((i,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let c={};return Object.entries(s.outlets).forEach(([a,l])=>{c[a]=typeof l=="string"?l.split("/"):l}),[...i,{outlets:c}]}if(s.segmentPath)return[...i,s.segmentPath]}return typeof s!="string"?[...i,s]:o===0?(s.split("/").forEach((c,a)=>{a==0&&c==="."||(a==0&&c===""?t=!0:c===".."?e++:c!=""&&i.push(c))}),i):[...i,s]},[]);return new Yr(t,e,n)}var zn=class{segmentGroup;processChildren;index;constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}};function pf(r,e,t){if(r.isAbsolute)return new zn(e,!0,0);if(!t)return new zn(e,!1,NaN);if(t.parent===null)return new zn(t,!0,0);let n=jr(r.commands[0])?0:1,i=t.segments.length-1+n;return mf(t,i,r.numberOfDoubleDots)}function mf(r,e,t){let n=r,i=e,s=t;for(;s>i;){if(s-=i,n=n.parent,!n)throw new re(4005,!1);i=n.segments.length}return new zn(n,!1,i-s)}function gf(r){return Di(r[0])?r[0].outlets:{[U]:r}}function cu(r,e,t){if(r??=new Y([],{}),r.segments.length===0&&r.hasChildren())return Ci(r,e,t);let n=vf(r,e,t),i=t.slice(n.commandIndex);if(n.match&&n.pathIndex<r.segments.length){let s=new Y(r.segments.slice(0,n.pathIndex),{});return s.children[U]=new Y(r.segments.slice(n.pathIndex),r.children),Ci(s,0,i)}else return n.match&&i.length===0?new Y(r.segments,{}):n.match&&!r.hasChildren()?Ko(r,e,t):n.match?Ci(r,0,i):Ko(r,e,t)}function Ci(r,e,t){if(t.length===0)return new Y(r.segments,{});{let n=gf(t),i={};if(Object.keys(n).some(s=>s!==U)&&r.children[U]&&r.numberOfChildren===1&&r.children[U].segments.length===0){let s=Ci(r.children[U],e,t);return new Y(r.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(i[s]=cu(r.children[s],e,o))}),Object.entries(r.children).forEach(([s,o])=>{n[s]===void 0&&(i[s]=o)}),new Y(r.segments,i)}}function vf(r,e,t){let n=0,i=e,s={match:!1,pathIndex:0,commandIndex:0};for(;i<r.segments.length;){if(n>=t.length)return s;let o=r.segments[i],c=t[n];if(Di(c))break;let a=`${c}`,l=n<t.length-1?t[n+1]:null;if(i>0&&a===void 0)break;if(a&&l&&typeof l=="object"&&l.outlets===void 0){if(!Gl(a,l,o))return s;n+=2}else{if(!Gl(a,{},o))return s;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function Ko(r,e,t){let n=r.segments.slice(0,e),i=0;for(;i<t.length;){let s=t[i];if(Di(s)){let a=_f(s.outlets);return new Y(n,a)}if(i===0&&jr(t[0])){let a=r.segments[e];n.push(new Gt(a.path,Hl(t[0]))),i++;continue}let o=Di(s)?s.outlets[U]:`${s}`,c=i<t.length-1?t[i+1]:null;o&&c&&jr(c)?(n.push(new Gt(o,Hl(c))),i+=2):(n.push(new Gt(o,{})),i++)}return new Y(n,{})}function _f(r){let e={};return Object.entries(r).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[t]=Ko(new Y([],{}),0,n))}),e}function Hl(r){let e={};return Object.entries(r).forEach(([t,n])=>e[t]=`${n}`),e}function Gl(r,e,t){return r==t.path&&vt(e,t.parameters)}var qr="imperative",Me=function(r){return r[r.NavigationStart=0]="NavigationStart",r[r.NavigationEnd=1]="NavigationEnd",r[r.NavigationCancel=2]="NavigationCancel",r[r.NavigationError=3]="NavigationError",r[r.RoutesRecognized=4]="RoutesRecognized",r[r.ResolveStart=5]="ResolveStart",r[r.ResolveEnd=6]="ResolveEnd",r[r.GuardsCheckStart=7]="GuardsCheckStart",r[r.GuardsCheckEnd=8]="GuardsCheckEnd",r[r.RouteConfigLoadStart=9]="RouteConfigLoadStart",r[r.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",r[r.ChildActivationStart=11]="ChildActivationStart",r[r.ChildActivationEnd=12]="ChildActivationEnd",r[r.ActivationStart=13]="ActivationStart",r[r.ActivationEnd=14]="ActivationEnd",r[r.Scroll=15]="Scroll",r[r.NavigationSkipped=16]="NavigationSkipped",r}(Me||{}),Le=class{id;url;constructor(e,t){this.id=e,this.url=t}},fn=class extends Le{type=Me.NavigationStart;navigationTrigger;restoredState;constructor(e,t,n="imperative",i=null){super(e,t),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},lt=class extends Le{urlAfterRedirects;type=Me.NavigationEnd;constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},ze=function(r){return r[r.Redirect=0]="Redirect",r[r.SupersededByNewNavigation=1]="SupersededByNewNavigation",r[r.NoDataFromResolver=2]="NoDataFromResolver",r[r.GuardRejected=3]="GuardRejected",r}(ze||{}),Ii=function(r){return r[r.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",r[r.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",r}(Ii||{}),_t=class extends Le{reason;code;type=Me.NavigationCancel;constructor(e,t,n,i){super(e,t),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Ct=class extends Le{reason;code;type=Me.NavigationSkipped;constructor(e,t,n,i){super(e,t),this.reason=n,this.code=i}},Gn=class extends Le{error;target;type=Me.NavigationError;constructor(e,t,n,i){super(e,t),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Pi=class extends Le{urlAfterRedirects;state;type=Me.RoutesRecognized;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Zr=class extends Le{urlAfterRedirects;state;type=Me.GuardsCheckStart;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kr=class extends Le{urlAfterRedirects;state;shouldActivate;type=Me.GuardsCheckEnd;constructor(e,t,n,i,s){super(e,t),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Jr=class extends Le{urlAfterRedirects;state;type=Me.ResolveStart;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Qr=class extends Le{urlAfterRedirects;state;type=Me.ResolveEnd;constructor(e,t,n,i){super(e,t),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},es=class{route;type=Me.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},ts=class{route;type=Me.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ns=class{snapshot;type=Me.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},is=class{snapshot;type=Me.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},rs=class{snapshot;type=Me.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ss=class{snapshot;type=Me.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Li=class{},Wn=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function yf(r,e){return r.providers&&!r._injector&&(r._injector=So(r.providers,e,`Route: ${r.path}`)),r._injector??e}function ct(r){return r.outlet||U}function xf(r,e){let t=r.filter(n=>ct(n)===e);return t.push(...r.filter(n=>ct(n)!==e)),t}function Vi(r){if(!r)return null;if(r.routeConfig?._injector)return r.routeConfig._injector;for(let e=r.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var os=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Vi(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new qn(this.rootInjector)}},qn=(()=>{class r{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let i=this.getOrCreateContext(t);i.outlet=n,this.contexts.set(t,i)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new os(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||r)(j(gr))};static \u0275prov=G({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),as=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Jo(e,this._root);return t?t.children.map(n=>n.value):[]}firstChild(e){let t=Jo(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Qo(e,this._root);return t.length<2?[]:t[t.length-2].children.map(i=>i.value).filter(i=>i!==e)}pathFromRoot(e){return Qo(e,this._root).map(t=>t.value)}};function Jo(r,e){if(r===e.value)return e;for(let t of e.children){let n=Jo(r,t);if(n)return n}return null}function Qo(r,e){if(r===e.value)return[e];for(let t of e.children){let n=Qo(r,t);if(n.length)return n.unshift(e),n}return[]}var $e=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function kn(r){let e={};return r&&r.children.forEach(t=>e[t.value.outlet]=t),e}var Fi=class extends as{snapshot;constructor(e,t){super(e),this.snapshot=t,aa(this,e)}toString(){return this.snapshot.toString()}};function lu(r){let e=Sf(r),t=new Ye([new Gt("",{})]),n=new Ye({}),i=new Ye({}),s=new Ye({}),o=new Ye(""),c=new xt(t,n,s,o,i,U,r,e.root);return c.snapshot=e.root,new Fi(new $e(c,[]),e)}function Sf(r){let e={},t={},n={},i="",s=new un([],e,n,i,t,U,r,null,{});return new Ni("",new $e(s,[]))}var xt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,n,i,s,o,c,a){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=s,this.outlet=o,this.component=c,this._futureSnapshot=a,this.title=this.dataSubject?.pipe(L(l=>l[ki]))??P(void 0),this.url=e,this.params=t,this.queryParams=n,this.fragment=i,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(L(e=>hn(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(L(e=>hn(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function cs(r,e,t="emptyOnly"){let n,{routeConfig:i}=r;return e!==null&&(t==="always"||i?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:D(D({},e.params),r.params),data:D(D({},e.data),r.data),resolve:D(D(D(D({},r.data),e.data),i?.data),r._resolvedData)}:n={params:D({},r.params),data:D({},r.data),resolve:D(D({},r.data),r._resolvedData??{})},i&&hu(i)&&(n.resolve[ki]=i.title),n}var un=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[ki]}constructor(e,t,n,i,s,o,c,a,l){this.url=e,this.params=t,this.queryParams=n,this.fragment=i,this.data=s,this.outlet=o,this.component=c,this.routeConfig=a,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=hn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=hn(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Ni=class extends as{url;constructor(e,t){super(t),this.url=e,aa(this,t)}toString(){return uu(this._root)}};function aa(r,e){e.value._routerState=r,e.children.forEach(t=>aa(r,t))}function uu(r){let e=r.children.length>0?` { ${r.children.map(uu).join(", ")} } `:"";return`${r.value}${e}`}function $o(r){if(r.snapshot){let e=r.snapshot,t=r._futureSnapshot;r.snapshot=t,vt(e.queryParams,t.queryParams)||r.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&r.fragmentSubject.next(t.fragment),vt(e.params,t.params)||r.paramsSubject.next(t.params),jd(e.url,t.url)||r.urlSubject.next(t.url),vt(e.data,t.data)||r.dataSubject.next(t.data)}else r.snapshot=r._futureSnapshot,r.dataSubject.next(r._futureSnapshot.data)}function ea(r,e){let t=vt(r.params,e.params)&&Jd(r.url,e.url),n=!r.parent!=!e.parent;return t&&!n&&(!r.parent||ea(r.parent,e.parent))}function hu(r){return typeof r.title=="string"||r.title===null}var du=new oe(""),Hi=(()=>{class r{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=U;activateEvents=new Je;deactivateEvents=new Je;attachEvents=new Je;detachEvents=new Je;routerOutletData=Uc(void 0);parentContexts=F(qn);location=F(zt);changeDetector=F(br);inputBinder=F(ds,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:i}=t.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new re(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new re(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new re(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new re(4013,!1);this._activatedRoute=t;let i=this.location,o=t.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,a=new ta(t,c,i.injector,this.routerOutletData);this.activated=i.createComponent(o,{index:i.length,injector:a,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||r)};static \u0275dir=Dn({type:r,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[po]})}return r})(),ta=class{route;childContexts;parent;outletData;constructor(e,t,n,i){this.route=e,this.childContexts=t,this.parent=n,this.outletData=i}get(e,t){return e===xt?this.route:e===qn?this.childContexts:e===du?this.outletData:this.parent.get(e,t)}},ds=new oe("");var ca=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275cmp=me({type:r,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,i){n&1&&Te(0,"router-outlet")},dependencies:[Hi],encapsulation:2})}return r})();function la(r){let e=r.children&&r.children.map(la),t=e?be(D({},r),{children:e}):D({},r);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==U&&(t.component=ca),t}function Mf(r,e,t){let n=Oi(r,e._root,t?t._root:void 0);return new Fi(n,e)}function Oi(r,e,t){if(t&&r.shouldReuseRoute(e.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=e.value;let i=Ef(r,e,t);return new $e(n,i)}else{if(r.shouldAttach(e.value)){let s=r.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(c=>Oi(r,c)),o}}let n=bf(e.value),i=e.children.map(s=>Oi(r,s));return new $e(n,i)}}function Ef(r,e,t){return e.children.map(n=>{for(let i of t.children)if(r.shouldReuseRoute(n.value,i.value.snapshot))return Oi(r,n,i);return Oi(r,n)})}function bf(r){return new xt(new Ye(r.url),new Ye(r.params),new Ye(r.queryParams),new Ye(r.fragment),new Ye(r.data),r.outlet,r.component,r)}var $n=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},fu="ngNavigationCancelingError";function ls(r,e){let{redirectTo:t,navigationBehaviorOptions:n}=Hn(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,i=pu(!1,ze.Redirect);return i.url=t,i.navigationBehaviorOptions=n,i}function pu(r,e){let t=new Error(`NavigationCancelingError: ${r||""}`);return t[fu]=!0,t.cancellationCode=e,t}function wf(r){return mu(r)&&Hn(r.url)}function mu(r){return!!r&&r[fu]}var Af=(r,e,t,n)=>L(i=>(new na(e,i.targetRouterState,i.currentRouterState,t,n).activate(r),i)),na=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,n,i,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),$o(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){let i=kn(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,i[o],n),delete i[o]}),Object.values(i).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(e,t,n){let i=e.value,s=t?t.value:null;if(i===s)if(i.component){let o=n.getContext(i.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else s&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let n=t.getContext(e.value.outlet),i=n&&e.value.component?n.children:t,s=kn(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,i);if(n&&n.outlet){let o=n.outlet.detach(),c=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:c})}}deactivateRouteAndOutlet(e,t){let n=t.getContext(e.value.outlet),i=n&&e.value.component?n.children:t,s=kn(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,t,n){let i=kn(t);e.children.forEach(s=>{this.activateRoutes(s,i[s.value.outlet],n),this.forwardEvent(new ss(s.value.snapshot))}),e.children.length&&this.forwardEvent(new is(e.value.snapshot))}activateRoutes(e,t,n){let i=e.value,s=t?t.value:null;if($o(i),i===s)if(i.component){let o=n.getOrCreateContext(i.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(i.component){let o=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),o.children.onOutletReAttached(c.contexts),o.attachRef=c.componentRef,o.route=c.route.value,o.outlet&&o.outlet.attach(c.componentRef,c.route.value),$o(c.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=i,o.outlet&&o.outlet.activateWith(i,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,n)}},us=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Vn=class{component;route;constructor(e,t){this.component=e,this.route=t}};function Tf(r,e,t){let n=r._root,i=e?e._root:null;return Ti(n,i,t,[n.value])}function Cf(r){let e=r.routeConfig?r.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:r,guards:e}}function jn(r,e){let t=Symbol(),n=e.get(r,t);return n===t?typeof r=="function"&&!Pc(r)?r:e.get(r):n}function Ti(r,e,t,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let s=kn(e);return r.children.forEach(o=>{Rf(o,s[o.value.outlet],t,n.concat([o.value]),i),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,c])=>Ri(c,t.getContext(o),i)),i}function Rf(r,e,t,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let s=r.value,o=e?e.value:null,c=t?t.getContext(r.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let a=Df(o,s,s.routeConfig.runGuardsAndResolvers);a?i.canActivateChecks.push(new us(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ti(r,e,c?c.children:null,n,i):Ti(r,e,t,n,i),a&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new Vn(c.outlet.component,o))}else o&&Ri(e,c,i),i.canActivateChecks.push(new us(n)),s.component?Ti(r,null,c?c.children:null,n,i):Ti(r,null,t,n,i);return i}function Df(r,e,t){if(typeof t=="function")return t(r,e);switch(t){case"pathParamsChange":return!ln(r.url,e.url);case"pathParamsOrQueryParamsChange":return!ln(r.url,e.url)||!vt(r.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!ea(r,e)||!vt(r.queryParams,e.queryParams);case"paramsChange":default:return!ea(r,e)}}function Ri(r,e,t){let n=kn(r),i=r.value;Object.entries(n).forEach(([s,o])=>{i.component?e?Ri(o,e.children.getContext(s),t):Ri(o,null,t):Ri(o,e,t)}),i.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Vn(e.outlet.component,i)):t.canDeactivateChecks.push(new Vn(null,i)):t.canDeactivateChecks.push(new Vn(null,i))}function Gi(r){return typeof r=="function"}function If(r){return typeof r=="boolean"}function Pf(r){return r&&Gi(r.canLoad)}function Lf(r){return r&&Gi(r.canActivate)}function Ff(r){return r&&Gi(r.canActivateChild)}function Nf(r){return r&&Gi(r.canDeactivate)}function Of(r){return r&&Gi(r.canMatch)}function gu(r){return r instanceof bc||r?.name==="EmptyError"}var Gr=Symbol("INITIAL_VALUE");function Xn(){return Pe(r=>Ot(r.map(e=>e.pipe(Bt(1),Ic(Gr)))).pipe(L(e=>{for(let t of e)if(t!==!0){if(t===Gr)return Gr;if(t===!1||Uf(t))return t}return!0}),Ke(e=>e!==Gr),Bt(1)))}function Uf(r){return Hn(r)||r instanceof $n}function Bf(r,e){return Be(t=>{let{targetSnapshot:n,currentSnapshot:i,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?P(be(D({},t),{guardsResult:!0})):kf(o,n,i,r).pipe(Be(c=>c&&If(c)?zf(n,s,r,e):P(c)),L(c=>be(D({},t),{guardsResult:c})))})}function kf(r,e,t,n){return Ie(r).pipe(Be(i=>$f(i.component,i.route,t,e,n)),kt(i=>i!==!0,!0))}function zf(r,e,t,n){return Ie(e).pipe(en(i=>wc(Hf(i.route.parent,n),Vf(i.route,n),Wf(r,i.path,t),Gf(r,i.route,t))),kt(i=>i!==!0,!0))}function Vf(r,e){return r!==null&&e&&e(new rs(r)),P(!0)}function Hf(r,e){return r!==null&&e&&e(new ns(r)),P(!0)}function Gf(r,e,t){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return P(!0);let i=n.map(s=>co(()=>{let o=Vi(e)??t,c=jn(s,o),a=Lf(c)?c.canActivate(e,r):Et(o,()=>c(e,r));return Wt(a).pipe(kt())}));return P(i).pipe(Xn())}function Wf(r,e,t){let n=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>Cf(o)).filter(o=>o!==null).map(o=>co(()=>{let c=o.guards.map(a=>{let l=Vi(o.node)??t,u=jn(a,l),h=Ff(u)?u.canActivateChild(n,r):Et(l,()=>u(n,r));return Wt(h).pipe(kt())});return P(c).pipe(Xn())}));return P(s).pipe(Xn())}function $f(r,e,t,n,i){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return P(!0);let o=s.map(c=>{let a=Vi(e)??i,l=jn(c,a),u=Nf(l)?l.canDeactivate(r,e,t,n):Et(a,()=>l(r,e,t,n));return Wt(u).pipe(kt())});return P(o).pipe(Xn())}function Xf(r,e,t,n){let i=e.canLoad;if(i===void 0||i.length===0)return P(!0);let s=i.map(o=>{let c=jn(o,r),a=Pf(c)?c.canLoad(e,t):Et(r,()=>c(e,t));return Wt(a)});return P(s).pipe(Xn(),vu(n))}function vu(r){return Mc(Se(e=>{if(typeof e!="boolean")throw ls(r,e)}),L(e=>e===!0))}function qf(r,e,t,n){let i=e.canMatch;if(!i||i.length===0)return P(!0);let s=i.map(o=>{let c=jn(o,r),a=Of(c)?c.canMatch(e,t):Et(r,()=>c(e,t));return Wt(a)});return P(s).pipe(Xn(),vu(n))}var Ui=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Bi=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Bn(r){return di(new Ui(r))}function jf(r){return di(new re(4e3,!1))}function Yf(r){return di(pu(!1,ze.GuardRejected))}var ia=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let n=[],i=t.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return P(n);if(i.numberOfChildren>1||!i.children[U])return jf(`${e.redirectTo}`);i=i.children[U]}}applyRedirectCommands(e,t,n,i,s){if(typeof t!="string"){let c=t,{queryParams:a,fragment:l,routeConfig:u,url:h,outlet:d,params:f,data:p,title:g}=i,v=Et(s,()=>c({params:f,data:p,queryParams:a,fragment:l,routeConfig:u,url:h,outlet:d,title:g}));if(v instanceof yt)throw new Bi(v);t=v}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,n);if(t[0]==="/")throw new Bi(o);return o}applyRedirectCreateUrlTree(e,t,n,i){let s=this.createSegmentGroup(e,t.root,n,i);return new yt(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let n={};return Object.entries(e).forEach(([i,s])=>{if(typeof s=="string"&&s[0]===":"){let c=s.substring(1);n[i]=t[c]}else n[i]=s}),n}createSegmentGroup(e,t,n,i){let s=this.createSegments(e,t.segments,n,i),o={};return Object.entries(t.children).forEach(([c,a])=>{o[c]=this.createSegmentGroup(e,a,n,i)}),new Y(s,o)}createSegments(e,t,n,i){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,i):this.findOrReturn(s,n))}findPosParam(e,t,n){let i=n[t.path.substring(1)];if(!i)throw new re(4001,!1);return i}findOrReturn(e,t){let n=0;for(let i of t){if(i.path===e.path)return t.splice(n),i;n++}return e}},ra={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Zf(r,e,t,n,i){let s=_u(r,e,t);return s.matched?(n=yf(e,n),qf(n,e,t,i).pipe(L(o=>o===!0?s:D({},ra)))):P(s)}function _u(r,e,t){if(e.path==="**")return Kf(t);if(e.path==="")return e.pathMatch==="full"&&(r.hasChildren()||t.length>0)?D({},ra):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let i=(e.matcher||ql)(t,r,e);if(!i)return D({},ra);let s={};Object.entries(i.posParams??{}).forEach(([c,a])=>{s[c]=a.path});let o=i.consumed.length>0?D(D({},s),i.consumed[i.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:i.consumed,remainingSegments:t.slice(i.consumed.length),parameters:o,positionalParamSegments:i.posParams??{}}}function Kf(r){return{matched:!0,parameters:r.length>0?Yl(r).parameters:{},consumedSegments:r,remainingSegments:[],positionalParamSegments:{}}}function Wl(r,e,t,n){return t.length>0&&ep(r,t,n)?{segmentGroup:new Y(e,Qf(n,new Y(t,r.children))),slicedSegments:[]}:t.length===0&&tp(r,t,n)?{segmentGroup:new Y(r.segments,Jf(r,t,n,r.children)),slicedSegments:t}:{segmentGroup:new Y(r.segments,r.children),slicedSegments:t}}function Jf(r,e,t,n){let i={};for(let s of t)if(fs(r,e,s)&&!n[ct(s)]){let o=new Y([],{});i[ct(s)]=o}return D(D({},n),i)}function Qf(r,e){let t={};t[U]=e;for(let n of r)if(n.path===""&&ct(n)!==U){let i=new Y([],{});t[ct(n)]=i}return t}function ep(r,e,t){return t.some(n=>fs(r,e,n)&&ct(n)!==U)}function tp(r,e,t){return t.some(n=>fs(r,e,n))}function fs(r,e,t){return(r.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function np(r,e,t){return e.length===0&&!r.children[t]}var sa=class{};function ip(r,e,t,n,i,s,o="emptyOnly"){return new oa(r,e,t,n,i,o,s).recognize()}var rp=31,oa=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,n,i,s,o,c){this.injector=e,this.configLoader=t,this.rootComponentType=n,this.config=i,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=c,this.applyRedirects=new ia(this.urlSerializer,this.urlTree)}noMatchError(e){return new re(4002,`'${e.segmentGroup}'`)}recognize(){let e=Wl(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(L(({children:t,rootSnapshot:n})=>{let i=new $e(n,t),s=new Ni("",i),o=ru(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new un([],Object.freeze({}),Object.freeze(D({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),U,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,U,t).pipe(L(n=>({children:n,rootSnapshot:t})),Ut(n=>{if(n instanceof Bi)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Ui?this.noMatchError(n):n}))}processSegmentGroup(e,t,n,i,s){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,t,n,s):this.processSegment(e,t,n,n.segments,i,!0,s).pipe(L(o=>o instanceof $e?[o]:[]))}processChildren(e,t,n,i){let s=[];for(let o of Object.keys(n.children))o==="primary"?s.unshift(o):s.push(o);return Ie(s).pipe(en(o=>{let c=n.children[o],a=xf(t,o);return this.processSegmentGroup(e,a,c,o,i)}),Dc((o,c)=>(o.push(...c),o)),uo(null),Rc(),Be(o=>{if(o===null)return Bn(n);let c=yu(o);return sp(c),P(c)}))}processSegment(e,t,n,i,s,o,c){return Ie(t).pipe(en(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,n,i,s,o,c).pipe(Ut(l=>{if(l instanceof Ui)return P(null);throw l}))),kt(a=>!!a),Ut(a=>{if(gu(a))return np(n,i,s)?P(new sa):Bn(n);throw a}))}processSegmentAgainstRoute(e,t,n,i,s,o,c,a){return ct(n)!==o&&(o===U||!fs(i,s,n))?Bn(i):n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,i,n,s,o,a):this.allowRedirects&&c?this.expandSegmentAgainstRouteUsingRedirect(e,i,t,n,s,o,a):Bn(i)}expandSegmentAgainstRouteUsingRedirect(e,t,n,i,s,o,c){let{matched:a,parameters:l,consumedSegments:u,positionalParamSegments:h,remainingSegments:d}=_u(t,i,s);if(!a)return Bn(t);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>rp&&(this.allowRedirects=!1));let f=new un(s,l,Object.freeze(D({},this.urlTree.queryParams)),this.urlTree.fragment,$l(i),ct(i),i.component??i._loadedComponent??null,i,Xl(i)),p=cs(f,c,this.paramsInheritanceStrategy);f.params=Object.freeze(p.params),f.data=Object.freeze(p.data);let g=this.applyRedirects.applyRedirectCommands(u,i.redirectTo,h,f,e);return this.applyRedirects.lineralizeSegments(i,g).pipe(Be(v=>this.processSegment(e,n,t,v.concat(d),o,!1,c)))}matchSegmentAgainstRoute(e,t,n,i,s,o){let c=Zf(t,n,i,e,this.urlSerializer);return n.path==="**"&&(t.children={}),c.pipe(Pe(a=>a.matched?(e=n._injector??e,this.getChildConfig(e,n,i).pipe(Pe(({routes:l})=>{let u=n._loadedInjector??e,{parameters:h,consumedSegments:d,remainingSegments:f}=a,p=new un(d,h,Object.freeze(D({},this.urlTree.queryParams)),this.urlTree.fragment,$l(n),ct(n),n.component??n._loadedComponent??null,n,Xl(n)),g=cs(p,o,this.paramsInheritanceStrategy);p.params=Object.freeze(g.params),p.data=Object.freeze(g.data);let{segmentGroup:v,slicedSegments:y}=Wl(t,d,f,l);if(y.length===0&&v.hasChildren())return this.processChildren(u,l,v,p).pipe(L(T=>new $e(p,T)));if(l.length===0&&y.length===0)return P(new $e(p,[]));let b=ct(n)===s;return this.processSegment(u,l,v,y,b?U:s,!0,p).pipe(L(T=>new $e(p,T instanceof $e?[T]:[])))}))):Bn(t)))}getChildConfig(e,t,n){return t.children?P({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?P({routes:t._loadedRoutes,injector:t._loadedInjector}):Xf(e,t,n,this.urlSerializer).pipe(Be(i=>i?this.configLoader.loadChildren(e,t).pipe(Se(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):Yf(t))):P({routes:[],injector:e})}};function sp(r){r.sort((e,t)=>e.value.outlet===U?-1:t.value.outlet===U?1:e.value.outlet.localeCompare(t.value.outlet))}function op(r){let e=r.value.routeConfig;return e&&e.path===""}function yu(r){let e=[],t=new Set;for(let n of r){if(!op(n)){e.push(n);continue}let i=e.find(s=>n.value.routeConfig===s.value.routeConfig);i!==void 0?(i.children.push(...n.children),t.add(i)):e.push(n)}for(let n of t){let i=yu(n.children);e.push(new $e(n.value,i))}return e.filter(n=>!t.has(n))}function $l(r){return r.data||{}}function Xl(r){return r.resolve||{}}function ap(r,e,t,n,i,s){return Be(o=>ip(r,e,t,n,o.extractedUrl,i,s).pipe(L(({state:c,tree:a})=>be(D({},o),{targetSnapshot:c,urlAfterRedirects:a}))))}function cp(r,e){return Be(t=>{let{targetSnapshot:n,guards:{canActivateChecks:i}}=t;if(!i.length)return P(t);let s=new Set(i.map(a=>a.route)),o=new Set;for(let a of s)if(!o.has(a))for(let l of xu(a))o.add(l);let c=0;return Ie(o).pipe(en(a=>s.has(a)?lp(a,n,r,e):(a.data=cs(a,a.parent,r).resolve,P(void 0))),Se(()=>c++),ho(1),Be(a=>c===o.size?P(t):Ze))})}function xu(r){let e=r.children.map(t=>xu(t)).flat();return[r,...e]}function lp(r,e,t,n){let i=r.routeConfig,s=r._resolve;return i?.title!==void 0&&!hu(i)&&(s[ki]=i.title),up(s,r,e,n).pipe(L(o=>(r._resolvedData=o,r.data=cs(r,r.parent,t).resolve,null)))}function up(r,e,t,n){let i=jo(r);if(i.length===0)return P({});let s={};return Ie(i).pipe(Be(o=>hp(r[o],e,t,n).pipe(kt(),Se(c=>{if(c instanceof $n)throw ls(new dn,c);s[o]=c}))),ho(1),L(()=>s),Ut(o=>gu(o)?Ze:di(o)))}function hp(r,e,t,n){let i=Vi(e)??n,s=jn(r,i),o=s.resolve?s.resolve(e,t):Et(i,()=>s(e,t));return Wt(o)}function Xo(r){return Pe(e=>{let t=r(e);return t?Ie(t).pipe(L(()=>e)):P(e)})}var ua=(()=>{class r{buildTitle(t){let n,i=t.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(s=>s.outlet===U);return n}getResolvedTitleForRoute(t){return t.data[ki]}static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:()=>F(Su),providedIn:"root"})}return r})(),Su=(()=>{class r extends ua{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||r)(j(kl))};static \u0275prov=G({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Wi=new oe("",{providedIn:"root",factory:()=>({})}),$i=new oe(""),Mu=(()=>{class r{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=F(nl);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return P(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=Wt(t.loadComponent()).pipe(L(bu),Se(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),bn(()=>{this.componentLoaders.delete(t)})),i=new ao(n,()=>new te).pipe(oo());return this.componentLoaders.set(t,i),i}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return P({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let s=Eu(n,this.compiler,t,this.onLoadEndListener).pipe(bn(()=>{this.childrenLoaders.delete(n)})),o=new ao(s,()=>new te).pipe(oo());return this.childrenLoaders.set(n,o),o}static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Eu(r,e,t,n){return Wt(r.loadChildren()).pipe(L(bu),Be(i=>i instanceof Wc||Array.isArray(i)?P(i):Ie(e.compileModuleAsync(i))),L(i=>{n&&n(r);let s,o,c=!1;return Array.isArray(i)?(o=i,c=!0):(s=i.create(t).injector,o=s.get($i,[],{optional:!0,self:!0}).flat()),{routes:o.map(la),injector:s}}))}function dp(r){return r&&typeof r=="object"&&"default"in r}function bu(r){return dp(r)?r.default:r}var ps=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:()=>F(fp),providedIn:"root"})}return r})(),fp=(()=>{class r{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),wu=new oe("");var Au=new oe(""),Tu=(()=>{class r{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new te;transitionAbortSubject=new te;configLoader=F(Mu);environmentInjector=F(gr);destroyRef=F(Fc);urlSerializer=F(zi);rootContexts=F(qn);location=F(Un);inputBindingEnabled=F(ds,{optional:!0})!==null;titleStrategy=F(ua);options=F(Wi,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=F(ps);createViewTransition=F(wu,{optional:!0});navigationErrorHandler=F(Au,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>P(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=i=>this.events.next(new es(i)),n=i=>this.events.next(new ts(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;this.transitions?.next(be(D({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n}))}setupNavigations(t){return this.transitions=new Ye(null),this.transitions.pipe(Ke(n=>n!==null),Pe(n=>{let i=!1,s=!1;return P(n).pipe(Pe(o=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",ze.SupersededByNewNavigation),Ze;this.currentTransition=n,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?be(D({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&a!=="reload"){let l="";return this.events.next(new Ct(o.id,this.urlSerializer.serialize(o.rawUrl),l,Ii.IgnoredSameUrlNavigation)),o.resolve(!1),Ze}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return P(o).pipe(Pe(l=>(this.events.next(new fn(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?Ze:Promise.resolve(l))),ap(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Se(l=>{n.targetSnapshot=l.targetSnapshot,n.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=be(D({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let u=new Pi(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:l,extractedUrl:u,source:h,restoredState:d,extras:f}=o,p=new fn(l,this.urlSerializer.serialize(u),h,d);this.events.next(p);let g=lu(this.rootComponentType).snapshot;return this.currentTransition=n=be(D({},o),{targetSnapshot:g,urlAfterRedirects:u,extras:be(D({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,P(n)}else{let l="";return this.events.next(new Ct(o.id,this.urlSerializer.serialize(o.extractedUrl),l,Ii.IgnoredByUrlHandlingStrategy)),o.resolve(!1),Ze}}),Se(o=>{let c=new Zr(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(c)}),L(o=>(this.currentTransition=n=be(D({},o),{guards:Tf(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),n)),Bf(this.environmentInjector,o=>this.events.next(o)),Se(o=>{if(n.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw ls(this.urlSerializer,o.guardsResult);let c=new Kr(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(c)}),Ke(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",ze.GuardRejected),!1)),Xo(o=>{if(o.guards.canActivateChecks.length!==0)return P(o).pipe(Se(c=>{let a=new Jr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(a)}),Pe(c=>{let a=!1;return P(c).pipe(cp(this.paramsInheritanceStrategy,this.environmentInjector),Se({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(c,"",ze.NoDataFromResolver)}}))}),Se(c=>{let a=new Qr(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(a)}))}),Xo(o=>{let c=a=>{let l=[];a.routeConfig?.loadComponent&&!a.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(a.routeConfig).pipe(Se(u=>{a.component=u}),L(()=>{})));for(let u of a.children)l.push(...c(u));return l};return Ot(c(o.targetSnapshot.root)).pipe(uo(null),Bt(1))}),Xo(()=>this.afterPreactivation()),Pe(()=>{let{currentSnapshot:o,targetSnapshot:c}=n,a=this.createViewTransition?.(this.environmentInjector,o.root,c.root);return a?Ie(a).pipe(L(()=>n)):P(n)}),L(o=>{let c=Mf(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=n=be(D({},o),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,n}),Se(()=>{this.events.next(new Li)}),Af(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),Bt(1),Se({next:o=>{i=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new lt(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{i=!0}}),Ge(this.transitionAbortSubject.pipe(Se(o=>{throw o}))),bn(()=>{!i&&!s&&this.cancelNavigationTransition(n,"",ze.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation=null,this.currentTransition=null)}),Ut(o=>{if(this.destroyed)return n.resolve(!1),Ze;if(s=!0,mu(o))this.events.next(new _t(n.id,this.urlSerializer.serialize(n.extractedUrl),o.message,o.cancellationCode)),wf(o)?this.events.next(new Wn(o.url,o.navigationBehaviorOptions)):n.resolve(!1);else{let c=new Gn(n.id,this.urlSerializer.serialize(n.extractedUrl),o,n.targetSnapshot??void 0);try{let a=Et(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(a instanceof $n){let{message:l,cancellationCode:u}=ls(this.urlSerializer,a);this.events.next(new _t(n.id,this.urlSerializer.serialize(n.extractedUrl),l,u)),this.events.next(new Wn(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(c),o}catch(a){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(a)}}return Ze}))}))}cancelNavigationTransition(t,n,i){let s=new _t(t.id,this.urlSerializer.serialize(t.extractedUrl),n,i);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function pp(r){return r!==qr}var Cu=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:()=>F(mp),providedIn:"root"})}return r})(),hs=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},mp=(()=>{class r extends hs{static \u0275fac=(()=>{let t;return function(i){return(t||(t=mo(r)))(i||r)}})();static \u0275prov=G({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),Ru=(()=>{class r{urlSerializer=F(zi);options=F(Wi,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=F(Un);urlHandlingStrategy=F(ps);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new yt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:n,targetBrowserUrl:i}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,n):n,o=i??s;return o instanceof yt?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:n,initialUrl:i}){n&&t?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=t):this.rawUrlTree=i}routerState=lu(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:()=>F(gp),providedIn:"root"})}return r})(),gp=(()=>{class r extends Ru{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{t(n.url,n.state,"popstate")})})}handleRouterEvent(t,n){t instanceof fn?this.updateStateMemento():t instanceof Ct?this.commitTransition(n):t instanceof Pi?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof Li?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof _t&&(t.code===ze.GuardRejected||t.code===ze.NoDataFromResolver)?this.restoreHistory(n):t instanceof Gn?this.restoreHistory(n,!0):t instanceof lt&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:n,id:i}){let{replaceUrl:s,state:o}=n;if(this.location.isCurrentPathEqualTo(t)||s){let c=this.browserPageId,a=D(D({},o),this.generateNgRouterState(i,c));this.location.replaceState(t,"",a)}else{let c=D(D({},o),this.generateNgRouterState(i,this.browserPageId+1));this.location.go(t,"",c)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,s=this.currentPageId-i;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=mo(r)))(i||r)}})();static \u0275prov=G({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function ha(r,e){r.events.pipe(Ke(t=>t instanceof lt||t instanceof _t||t instanceof Gn||t instanceof Ct),L(t=>t instanceof lt||t instanceof Ct?0:(t instanceof _t?t.code===ze.Redirect||t.code===ze.SupersededByNewNavigation:!1)?2:1),Ke(t=>t!==2),Bt(1)).subscribe(()=>{e()})}var vp={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},_p={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},St=(()=>{class r{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=F($c);stateManager=F(Ru);options=F(Wi,{optional:!0})||{};pendingTasks=F(Oc);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=F(Tu);urlSerializer=F(zi);location=F(Un);urlHandlingStrategy=F(ps);_events=new te;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=F(Cu);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=F($i,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!F(ds,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Sc;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(i!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof _t&&n.code!==ze.Redirect&&n.code!==ze.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof lt)this.navigated=!0;else if(n instanceof Wn){let o=n.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),a=D({browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||pp(i.source)},o);this.scheduleNavigation(c,qr,null,a,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}xp(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortSubject.next(i)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),qr,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n,i)=>{this.navigateToSyncWithBrowser(t,i,n)})}navigateToSyncWithBrowser(t,n,i){let s={replaceUrl:!0},o=i?.navigationId?i:null;if(i){let a=D({},i);delete a.navigationId,delete a.\u0275routerPageId,Object.keys(a).length!==0&&(s.state=a)}let c=this.parseUrl(t);this.scheduleNavigation(c,n,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(la),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:i,queryParams:s,fragment:o,queryParamsHandling:c,preserveFragment:a}=n,l=a?this.currentUrlTree.fragment:o,u=null;switch(c??this.options.defaultQueryParamsHandling){case"merge":u=D(D({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let d=i?i.snapshot:this.routerState.snapshot.root;h=su(d)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),h=this.currentUrlTree.root}return ou(h,t,u,l??null)}navigateByUrl(t,n={skipLocationChange:!1}){let i=Hn(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(s,qr,null,n)}navigate(t,n={skipLocationChange:!1}){return yp(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let i;if(n===!0?i=D({},vp):n===!1?i=D({},_p):i=n,Hn(t))return zl(this.currentUrlTree,t,i);let s=this.parseUrl(t);return zl(this.currentUrlTree,s,i)}removeEmptyProps(t){return Object.entries(t).reduce((n,[i,s])=>(s!=null&&(n[i]=s),n),{})}scheduleNavigation(t,n,i,s,o){if(this.disposed)return Promise.resolve(!1);let c,a,l;o?(c=o.resolve,a=o.reject,l=o.promise):l=new Promise((h,d)=>{c=h,a=d});let u=this.pendingTasks.add();return ha(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:c,reject:a,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(h=>Promise.reject(h))}static \u0275fac=function(n){return new(n||r)};static \u0275prov=G({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function yp(r){for(let e=0;e<r.length;e++)if(r[e]==null)throw new re(4008,!1)}function xp(r){return!(r instanceof Li)&&!(r instanceof Wn)}var Mp=new oe("");function da(r,...e){return mr([{provide:$i,multi:!0,useValue:r},[],{provide:xt,useFactory:Ep,deps:[St]},{provide:qc,multi:!0,useFactory:bp},e.map(t=>t.\u0275providers)])}function Ep(r){return r.routerState.root}function bp(){let r=F(fi);return e=>{let t=r.get(jc);if(e!==t.components[0])return;let n=r.get(St),i=r.get(wp);r.get(Ap)===1&&n.initialNavigation(),r.get(Tp,null,fo.Optional)?.setUpPreloading(),r.get(Mp,null,fo.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var wp=new oe("",{factory:()=>new te}),Ap=new oe("",{providedIn:"root",factory:()=>1});var Tp=new oe("");var Rp="@",Dp=(()=>{class r{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=F(fi);loadingSchedulerFn=F(Ip,{optional:!0});_engine;constructor(t,n,i,s,o){this.doc=t,this.delegate=n,this.zone=i,this.animationType=s,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-FEP3E6AT.js").then(i=>i),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(i=>{throw new re(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:s})=>{this._engine=i(this.animationType,this.doc);let o=new s(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(t,n){let i=this.delegate.createRenderer(t,n);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new pa(i);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let c=o.createRenderer(t,n);s.use(c),this.scheduler??=this.injector.get(Nc,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(n){Gc()};static \u0275prov=G({token:r,factory:r.\u0275fac})}return r})(),pa=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,i){this.delegate.insertBefore(e,t,n,i)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,i){this.delegate.setAttribute(e,t,n,i)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,i){this.delegate.setStyle(e,t,n,i)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n,i){return this.shouldReplay(t)&&this.replay.push(s=>s.listen(e,t,n,i)),this.delegate.listen(e,t,n,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(Rp)}},Ip=new oe("");function Du(r="animations"){return yo("NgAsyncAnimations"),mr([{provide:yr,useFactory:(e,t,n)=>new Dp(e,t,n,r),deps:[ve,bi,mt]},{provide:zc,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var jh=fr(gs()),_c=fr(_h());var Vm=fr(gs());function yh(r){return"s2cellId"in r}function Aa(r){return Hm(r)||Ca(r)}function Hm(r){return"type"in r&&r.type==="root"}function Ta(r){return"type"in r&&r.type==="leaf"}function Ca(r){return"type"in r&&r.type==="group"}var mn=fr(gs()),Gm=1,Wm=new RegExp(`[0-3]{1,${Gm}}`,"g");function $m(r,e){return r.length===e.length?!1:xh(e,r)}function xh(r,e){if(r.length<=e.length)return!1;for(let t=0;t<e.length;t++)if(r[t]!==e[t])return!1;return!0}function Xm(r,e){if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}function Sh(r,e,t,n){let i=15;for(let s=i;0<s;s--){let o=mn.S2.latLngToKey(r,e,s),c=mn.S2.latLngToNeighborKeys(r,e,s),a=mn.S2.latLngToKey(t,n,s),l=mn.S2.latLngToNeighborKeys(t,n,s);if(o===a)return[new ut(o),...c.map(u=>new ut(u))];if(c.includes(a)||l.includes(o))return Array.from(new Set([o,...c,...l])).map(h=>new ut(h))}return[0,1,2,3,4,5].map(s=>ut.FromSegment([`${s}`]))}function qm(r){if(r.length===0)throw new Error("Empty segment is invalid.");return r.length===1?0:r.slice(1).join("").length}function jm(r){let[e,t]=r.split("/"),n=t.match(Wm);if(!n)throw new Error(`Unexpectedly unmatched to key ${r}`);return[e,...n]}function Ym(r){if(r.length===0)throw new Error("Segments is empty");return r.slice(0,r.length-1)}function Zm(r,e){return[...r,e]}function Km(r){return r.join("/")}var ut=class r{constructor(e){this.key=e;let t=/^([0-5])\/$/.exec(e);t?(this.segments=[t[1]],this.S2Level=0):(this.segments=jm(e),this.S2Level=qm(this.segments))}static FromSegment(e){return new r(`${e[0]}/${e.slice(1).join("")}`)}static FromS2CellId(e){return new r(mn.S2.idToKey(e))}toId(){return mn.S2.keyToId(this.key)}concatSegment(e){return r.FromSegment(Zm(this.segments,e))}buildPath(){return Km(this.segments)}parentSegment(){return r.FromSegment(Ym(this.segments))}isDescendant(e){return xh(e.segments,this.segments)}isAncestor(e){return $m(e.segments,this.segments)}equals(e){return Xm(e.segments,this.segments)}};function Mh(r,e){if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(!r[t].equals(e[t]))return!1;return!0}var ac="176";var Ws=0,Uh=1;var ja=1;var Ya=100;var Za=204,Ka=205;var cc=0,lc=1,uc=2,tr=3,hc=4,dc=5,fc=6,pc=7,Bh=0;var kh=1015;var nr=2300,$s=2301,Hs=2302,Ja=2400,Qa=2401,ec=2402;var zh=0;var Vh="",it="srgb",tc="srgb-linear",nc="linear",Gs="srgb";var yn=7680;var ic=519;var rc=35044;var er=2e3,sc=2001;var ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var YS=Math.PI/180,Qm=180/Math.PI;function mc(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[r&255]+Re[r>>8&255]+Re[r>>16&255]+Re[r>>24&255]+"-"+Re[e&255]+Re[e>>8&255]+"-"+Re[e>>16&15|64]+Re[e>>24&255]+"-"+Re[t&63|128]+Re[t>>8&255]+"-"+Re[t>>16&255]+Re[t>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function W(r,e,t){return Math.max(e,Math.min(t,r))}function eg(r,e){return(r%e+e)%e}function Ra(r,e,t){return(1-t)*r+t*e}function Yi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function He(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Oe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},k=class r{constructor(e,t,n,i,s,o,c,a,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,a,l)}set(e,t,n,i,s,o,c,a,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=c,u[3]=t,u[4]=s,u[5]=a,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[3],a=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],g=i[0],v=i[3],y=i[6],b=i[1],T=i[4],R=i[7],I=i[2],$=i[5],C=i[8];return s[0]=o*g+c*b+a*I,s[3]=o*v+c*T+a*$,s[6]=o*y+c*R+a*C,s[1]=l*g+u*b+h*I,s[4]=l*v+u*T+h*$,s[7]=l*y+u*R+h*C,s[2]=d*g+f*b+p*I,s[5]=d*v+f*T+p*$,s[8]=d*y+f*R+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],a=e[6],l=e[7],u=e[8];return t*o*u-t*c*l-n*s*u+n*c*a+i*s*l-i*o*a}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],a=e[6],l=e[7],u=e[8],h=u*o-c*l,d=c*a-u*s,f=l*s-o*a,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=h*g,e[1]=(i*l-u*n)*g,e[2]=(c*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*a)*g,e[5]=(i*s-c*t)*g,e[6]=f*g,e[7]=(n*a-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,c){let a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*o+l*c)+o+e,-i*l,i*a,-i*(-l*o+a*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Da.makeScale(e,t)),this}rotate(e){return this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Da=new k;function Hh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}var Eh=new k().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new k().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tg(){let r={enabled:!0,workingColorSpace:tc,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Gs&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Gs&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vh?nc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[tc]:{primaries:e,whitePoint:n,transfer:nc,toXYZ:Eh,fromXYZ:bh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:it},outputColorSpaceConfig:{drawingBufferColorSpace:it}},[it]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:Eh,fromXYZ:bh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:it}}}),r}var nt=tg();function si(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function oi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ci=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,a=e.elements,l=a[0],u=a[4],h=a[8],d=a[1],f=a[5],p=a[9],g=a[2],v=a[6],y=a[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(p-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(p+v)<.1&&Math.abs(l+f+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,R=(f+1)/2,I=(y+1)/2,$=(u+d)/4,C=(h+g)/4,S=(p+v)/4;return T>R&&T>I?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=$/n,s=C/n):R>I?R<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(R),n=$/i,s=S/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=C/s,i=S/s),this.set(n,i,s,t),this}let b=Math.sqrt((v-p)*(v-p)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(v-p)/b,this.y=(h-g)/b,this.z=(d-u)/b,this.w=Math.acos((l+f+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this.w=W(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this.w=W(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var Nt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,c){let a=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=s[o+0],f=s[o+1],p=s[o+2],g=s[o+3];if(c===0){e[t+0]=a,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(c===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g;return}if(h!==g||a!==d||l!==f||u!==p){let v=1-c,y=a*d+l*f+u*p+h*g,b=y>=0?1:-1,T=1-y*y;if(T>Number.EPSILON){let I=Math.sqrt(T),$=Math.atan2(I,y*b);v=Math.sin(v*$)/I,c=Math.sin(c*$)/I}let R=c*b;if(a=a*v+d*R,l=l*v+f*R,u=u*v+p*R,h=h*v+g*R,v===1-c){let I=1/Math.sqrt(a*a+l*l+u*u+h*h);a*=I,l*=I,u*=I,h*=I}}e[t]=a,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let c=n[i],a=n[i+1],l=n[i+2],u=n[i+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=c*p+u*h+a*f-l*d,e[t+1]=a*p+u*d+l*h-c*f,e[t+2]=l*p+u*f+c*d-a*h,e[t+3]=u*p-c*h-a*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,c=Math.cos,a=Math.sin,l=c(n/2),u=c(i/2),h=c(s/2),d=a(n/2),f=a(i/2),p=a(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],c=t[5],a=t[9],l=t[2],u=t[6],h=t[10],d=n+c+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-a)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>c&&n>h){let f=2*Math.sqrt(1+n-c-h);this._w=(u-a)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(c>h){let f=2*Math.sqrt(1+c-n-h);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(a+u)/f}else{let f=2*Math.sqrt(1+h-n-c);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(a+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(W(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,c=t._x,a=t._y,l=t._z,u=t._w;return this._x=n*u+o*c+i*l-s*a,this._y=i*u+o*a+s*c-n*l,this._z=s*u+o*l+n*a-i*c,this._w=o*u-n*c-i*a-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,c=o*e._w+n*e._x+i*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let a=1-c*c;if(a<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(a),u=Math.atan2(l,c),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},x=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,c=e.z,a=e.w,l=2*(o*i-c*n),u=2*(c*t-s*i),h=2*(s*n-o*t);return this.x=t+a*l+o*h-c*u,this.y=n+a*u+c*l-s*h,this.z=i+a*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=W(this.x,e.x,t.x),this.y=W(this.y,e.y,t.y),this.z=W(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=W(this.x,e,t),this.y=W(this.y,e,t),this.z=W(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(W(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,c=t.y,a=t.z;return this.x=i*a-s*c,this.y=s*o-n*a,this.z=n*c-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(W(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ia=new x,wh=new Nt,Kt=class{constructor(e=new x(1/0,1/0,1/0),t=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,ht):ht.fromBufferAttribute(s,o),ht.applyMatrix4(e.matrixWorld),this.expandByPoint(ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(e.matrixWorld),this.union(ws)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ht),ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),As.subVectors(this.max,Zi),Zn.subVectors(e.a,Zi),Kn.subVectors(e.b,Zi),Jn.subVectors(e.c,Zi),$t.subVectors(Kn,Zn),Xt.subVectors(Jn,Kn),gn.subVectors(Zn,Jn);let t=[0,-$t.z,$t.y,0,-Xt.z,Xt.y,0,-gn.z,gn.y,$t.z,0,-$t.x,Xt.z,0,-Xt.x,gn.z,0,-gn.x,-$t.y,$t.x,0,-Xt.y,Xt.x,0,-gn.y,gn.x,0];return!Pa(t,Zn,Kn,Jn,As)||(t=[1,0,0,0,1,0,0,0,1],!Pa(t,Zn,Kn,Jn,As))?!1:(Ts.crossVectors($t,Xt),t=[Ts.x,Ts.y,Ts.z],Pa(t,Zn,Kn,Jn,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Rt=[new x,new x,new x,new x,new x,new x,new x,new x],ht=new x,ws=new Kt,Zn=new x,Kn=new x,Jn=new x,$t=new x,Xt=new x,gn=new x,Zi=new x,As=new x,Ts=new x,vn=new x;function Pa(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){vn.fromArray(r,s);let c=i.x*Math.abs(vn.x)+i.y*Math.abs(vn.y)+i.z*Math.abs(vn.z),a=e.dot(vn),l=t.dot(vn),u=n.dot(vn);if(Math.max(-Math.max(a,l,u),Math.min(a,l,u))>c)return!1}return!0}var ng=new Kt,Ki=new x,La=new x,ir=class{constructor(e=new x,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ng.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);let t=Ki.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ki,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(La)),this.expandByPoint(Ki.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Dt=new x,Fa=new x,Cs=new x,qt=new x,Na=new x,Rs=new x,Oa=new x,Xs=class{constructor(e=new x,t=new x(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dt.copy(this.origin).addScaledVector(this.direction,t),Dt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fa.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),qt.copy(this.origin).sub(Fa);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Cs),c=qt.dot(this.direction),a=-qt.dot(Cs),l=qt.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*a-c,d=o*c-a,p=s*u,h>=0)if(d>=-p)if(d<=p){let g=1/u;h*=g,d*=g,f=h*(h+o*d+2*c)+d*(o*h+d+2*a)+l}else d=s,h=Math.max(0,-(o*d+c)),f=-h*h+d*(d+2*a)+l;else d=-s,h=Math.max(0,-(o*d+c)),f=-h*h+d*(d+2*a)+l;else d<=-p?(h=Math.max(0,-(-o*s+c)),d=h>0?-s:Math.min(Math.max(-s,-a),s),f=-h*h+d*(d+2*a)+l):d<=p?(h=0,d=Math.min(Math.max(-s,-a),s),f=d*(d+2*a)+l):(h=Math.max(0,-(o*s+c)),d=h>0?s:Math.min(Math.max(-s,-a),s),f=-h*h+d*(d+2*a)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+c)),f=-h*h+d*(d+2*a)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Fa).addScaledVector(Cs,d),f}intersectSphere(e,t){Dt.subVectors(e.center,this.origin);let n=Dt.dot(this.direction),i=Dt.dot(Dt)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),c=n-o,a=n+o;return a<0?null:c<0?this.at(a,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,c,a,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(c=(e.min.z-d.z)*h,a=(e.max.z-d.z)*h):(c=(e.max.z-d.z)*h,a=(e.min.z-d.z)*h),n>a||c>i)||((c>n||n!==n)&&(n=c),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dt)!==null}intersectTriangle(e,t,n,i,s){Na.subVectors(t,e),Rs.subVectors(n,e),Oa.crossVectors(Na,Rs);let o=this.direction.dot(Oa),c;if(o>0){if(i)return null;c=1}else if(o<0)c=-1,o=-o;else return null;qt.subVectors(this.origin,e);let a=c*this.direction.dot(Rs.crossVectors(qt,Rs));if(a<0)return null;let l=c*this.direction.dot(Na.cross(qt));if(l<0||a+l>o)return null;let u=-c*qt.dot(Oa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class r{constructor(e,t,n,i,s,o,c,a,l,u,h,d,f,p,g,v){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,c,a,l,u,h,d,f,p,g,v)}set(e,t,n,i,s,o,c,a,l,u,h,d,f,p,g,v){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=o,y[9]=c,y[13]=a,y[2]=l,y[6]=u,y[10]=h,y[14]=d,y[3]=f,y[7]=p,y[11]=g,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Qn.setFromMatrixColumn(e,0).length(),s=1/Qn.setFromMatrixColumn(e,1).length(),o=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),a=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,p=c*u,g=c*h;t[0]=a*u,t[4]=-a*h,t[8]=l,t[1]=f+p*l,t[5]=d-g*l,t[9]=-c*a,t[2]=g-d*l,t[6]=p+f*l,t[10]=o*a}else if(e.order==="YXZ"){let d=a*u,f=a*h,p=l*u,g=l*h;t[0]=d+g*c,t[4]=p*c-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-c,t[2]=f*c-p,t[6]=g+d*c,t[10]=o*a}else if(e.order==="ZXY"){let d=a*u,f=a*h,p=l*u,g=l*h;t[0]=d-g*c,t[4]=-o*h,t[8]=p+f*c,t[1]=f+p*c,t[5]=o*u,t[9]=g-d*c,t[2]=-o*l,t[6]=c,t[10]=o*a}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=c*u,g=c*h;t[0]=a*u,t[4]=p*l-f,t[8]=d*l+g,t[1]=a*h,t[5]=g*l+d,t[9]=f*l-p,t[2]=-l,t[6]=c*a,t[10]=o*a}else if(e.order==="YZX"){let d=o*a,f=o*l,p=c*a,g=c*l;t[0]=a*u,t[4]=g-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-c*u,t[2]=-l*u,t[6]=f*h+p,t[10]=d-g*h}else if(e.order==="XZY"){let d=o*a,f=o*l,p=c*a,g=c*l;t[0]=a*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=c*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ig,e,rg)}lookAt(e,t,n){let i=this.elements;return Xe.subVectors(e,t),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),jt.crossVectors(n,Xe),jt.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),jt.crossVectors(n,Xe)),jt.normalize(),Ds.crossVectors(Xe,jt),i[0]=jt.x,i[4]=Ds.x,i[8]=Xe.x,i[1]=jt.y,i[5]=Ds.y,i[9]=Xe.y,i[2]=jt.z,i[6]=Ds.z,i[10]=Xe.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],c=n[4],a=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],g=n[6],v=n[10],y=n[14],b=n[3],T=n[7],R=n[11],I=n[15],$=i[0],C=i[4],S=i[8],_=i[12],m=i[1],E=i[5],O=i[9],B=i[13],q=i[2],J=i[6],fe=i[10],ie=i[14],le=i[3],V=i[7],H=i[11],Q=i[15];return s[0]=o*$+c*m+a*q+l*le,s[4]=o*C+c*E+a*J+l*V,s[8]=o*S+c*O+a*fe+l*H,s[12]=o*_+c*B+a*ie+l*Q,s[1]=u*$+h*m+d*q+f*le,s[5]=u*C+h*E+d*J+f*V,s[9]=u*S+h*O+d*fe+f*H,s[13]=u*_+h*B+d*ie+f*Q,s[2]=p*$+g*m+v*q+y*le,s[6]=p*C+g*E+v*J+y*V,s[10]=p*S+g*O+v*fe+y*H,s[14]=p*_+g*B+v*ie+y*Q,s[3]=b*$+T*m+R*q+I*le,s[7]=b*C+T*E+R*J+I*V,s[11]=b*S+T*O+R*fe+I*H,s[15]=b*_+T*B+R*ie+I*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],c=e[5],a=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],g=e[7],v=e[11],y=e[15];return p*(+s*a*h-i*l*h-s*c*d+n*l*d+i*c*f-n*a*f)+g*(+t*a*f-t*l*d+s*o*d-i*o*f+i*l*u-s*a*u)+v*(+t*l*h-t*c*f-s*o*h+n*o*f+s*c*u-n*l*u)+y*(-i*c*u-t*a*h+t*c*d+i*o*h-n*o*d+n*a*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],c=e[5],a=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],g=e[13],v=e[14],y=e[15],b=h*v*l-g*d*l+g*a*f-c*v*f-h*a*y+c*d*y,T=p*d*l-u*v*l-p*a*f+o*v*f+u*a*y-o*d*y,R=u*g*l-p*h*l+p*c*f-o*g*f-u*c*y+o*h*y,I=p*h*a-u*g*a-p*c*d+o*g*d+u*c*v-o*h*v,$=t*b+n*T+i*R+s*I;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/$;return e[0]=b*C,e[1]=(g*d*s-h*v*s-g*i*f+n*v*f+h*i*y-n*d*y)*C,e[2]=(c*v*s-g*a*s+g*i*l-n*v*l-c*i*y+n*a*y)*C,e[3]=(h*a*s-c*d*s-h*i*l+n*d*l+c*i*f-n*a*f)*C,e[4]=T*C,e[5]=(u*v*s-p*d*s+p*i*f-t*v*f-u*i*y+t*d*y)*C,e[6]=(p*a*s-o*v*s-p*i*l+t*v*l+o*i*y-t*a*y)*C,e[7]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*C,e[8]=R*C,e[9]=(p*h*s-u*g*s-p*n*f+t*g*f+u*n*y-t*h*y)*C,e[10]=(o*g*s-p*c*s+p*n*l-t*g*l-o*n*y+t*c*y)*C,e[11]=(u*c*s-o*h*s-u*n*l+t*h*l+o*n*f-t*c*f)*C,e[12]=I*C,e[13]=(u*g*i-p*h*i+p*n*d-t*g*d-u*n*v+t*h*v)*C,e[14]=(p*c*i-o*g*i-p*n*a+t*g*a+o*n*v-t*c*v)*C,e[15]=(o*h*i-u*c*i+u*n*a-t*h*a-o*n*d+t*c*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,c=e.y,a=e.z,l=s*o,u=s*c;return this.set(l*o+n,l*c-i*a,l*a+i*c,0,l*c+i*a,u*c+n,u*a-i*o,0,l*a-i*c,u*a+i*o,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,c=t._z,a=t._w,l=s+s,u=o+o,h=c+c,d=s*l,f=s*u,p=s*h,g=o*u,v=o*h,y=c*h,b=a*l,T=a*u,R=a*h,I=n.x,$=n.y,C=n.z;return i[0]=(1-(g+y))*I,i[1]=(f+R)*I,i[2]=(p-T)*I,i[3]=0,i[4]=(f-R)*$,i[5]=(1-(d+y))*$,i[6]=(v+b)*$,i[7]=0,i[8]=(p+T)*C,i[9]=(v-b)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Qn.set(i[0],i[1],i[2]).length(),o=Qn.set(i[4],i[5],i[6]).length(),c=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],dt.copy(this);let l=1/s,u=1/o,h=1/c;return dt.elements[0]*=l,dt.elements[1]*=l,dt.elements[2]*=l,dt.elements[4]*=u,dt.elements[5]*=u,dt.elements[6]*=u,dt.elements[8]*=h,dt.elements[9]*=h,dt.elements[10]*=h,t.setFromRotationMatrix(dt),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,o,c=er){let a=this.elements,l=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f,p;if(c===er)f=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(c===sc)f=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o,c=er){let a=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-s),d=(t+e)*l,f=(n+i)*u,p,g;if(c===er)p=(o+s)*h,g=-2*h;else if(c===sc)p=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=g,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qn=new x,dt=new pt,ig=new x(0,0,0),rg=new x(1,1,1),jt=new x,Ds=new x,Xe=new x,Ah=new pt,Th=new Nt,rr=(()=>{class r{constructor(t=0,n=0,i=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,o=s[0],c=s[4],a=s[8],l=s[1],u=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(W(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-W(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(W(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-c,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-W(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-c,u));break;case"YZX":this._z=Math.asin(W(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-W(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ah,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Th.setFromEuler(this),this.setFromQuaternion(Th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return r.DEFAULT_ORDER="XYZ",r})(),qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sg=0,Ch=new x,ei=new Nt,It=new pt,Is=new x,Ji=new x,og=new x,ag=new Nt,Rh=new x(1,0,0),Dh=new x(0,1,0),Ih=new x(0,0,1),Ph={type:"added"},cg={type:"removed"},ti={type:"childadded",child:null},Ua={type:"childremoved",child:null},ro=(()=>{class r extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=mc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new x,n=new rr,i=new Nt,s=new x(1,1,1);function o(){i.setFromEuler(n,!1)}function c(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new k}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ei.setFromAxisAngle(t,n),this.quaternion.multiply(ei),this}rotateOnWorldAxis(t,n){return ei.setFromAxisAngle(t,n),this.quaternion.premultiply(ei),this}rotateX(t){return this.rotateOnAxis(Rh,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,n){return Ch.copy(t).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Rh,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(It.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Is.copy(t):Is.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?It.lookAt(Ji,Is,this.up):It.lookAt(Is,Ji,this.up),this.quaternion.setFromRotationMatrix(It),s&&(It.extractRotation(s.matrixWorld),ei.setFromRotationMatrix(It),this.quaternion.premultiply(ei.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ph),ti.child=t,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(cg),Ua.child=t,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),It.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),It.multiply(t.parent.matrixWorld)),t.applyMatrix4(It),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ph),ti.child=t,this.dispatchEvent(ti),ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let c=this.children[i].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,og),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,ag,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>be(D({},a),{boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(a=>D({},a)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let d=l[u];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(o(t.animations,l))}}if(n){let a=c(t.geometries),l=c(t.materials),u=c(t.textures),h=c(t.images),d=c(t.shapes),f=c(t.skeletons),p=c(t.animations),g=c(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function c(a){let l=[];for(let u in a){let h=a[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}}return r.DEFAULT_UP=new x(0,1,0),r.DEFAULT_MATRIX_AUTO_UPDATE=!0,r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,r})(),ft=new x,Pt=new x,Ba=new x,Lt=new x,ni=new x,ii=new x,Lh=new x,ka=new x,za=new x,Va=new x,Ha=new ci,Ga=new ci,Wa=new ci,Zt=class r{constructor(e=new x,t=new x,n=new x){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ft.subVectors(e,t),i.cross(ft);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ft.subVectors(i,t),Pt.subVectors(n,t),Ba.subVectors(e,t);let o=ft.dot(ft),c=ft.dot(Pt),a=ft.dot(Ba),l=Pt.dot(Pt),u=Pt.dot(Ba),h=o*l-c*c;if(h===0)return s.set(0,0,0),null;let d=1/h,f=(l*a-c*u)*d,p=(o*u-c*a)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Lt)===null?!1:Lt.x>=0&&Lt.y>=0&&Lt.x+Lt.y<=1}static getInterpolation(e,t,n,i,s,o,c,a){return this.getBarycoord(e,t,n,i,Lt)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(s,Lt.x),a.addScaledVector(o,Lt.y),a.addScaledVector(c,Lt.z),a)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ha.setScalar(0),Ga.setScalar(0),Wa.setScalar(0),Ha.fromBufferAttribute(e,t),Ga.fromBufferAttribute(e,n),Wa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ha,s.x),o.addScaledVector(Ga,s.y),o.addScaledVector(Wa,s.z),o}static isFrontFacing(e,t,n,i){return ft.subVectors(n,t),Pt.subVectors(e,t),ft.cross(Pt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ft.subVectors(this.c,this.b),Pt.subVectors(this.a,this.b),ft.cross(Pt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,c;ni.subVectors(i,n),ii.subVectors(s,n),ka.subVectors(e,n);let a=ni.dot(ka),l=ii.dot(ka);if(a<=0&&l<=0)return t.copy(n);za.subVectors(e,i);let u=ni.dot(za),h=ii.dot(za);if(u>=0&&h<=u)return t.copy(i);let d=a*h-u*l;if(d<=0&&a>=0&&u<=0)return o=a/(a-u),t.copy(n).addScaledVector(ni,o);Va.subVectors(e,s);let f=ni.dot(Va),p=ii.dot(Va);if(p>=0&&f<=p)return t.copy(s);let g=f*l-a*p;if(g<=0&&l>=0&&p<=0)return c=l/(l-p),t.copy(n).addScaledVector(ii,c);let v=u*p-f*h;if(v<=0&&h-u>=0&&f-p>=0)return Lh.subVectors(s,i),c=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(Lh,c);let y=1/(v+g+d);return o=g*y,c=d*y,t.copy(n).addScaledVector(ni,o).addScaledVector(ii,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yt={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function $a(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=eg(e,1),t=W(t,0,1),n=W(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=$a(o,s,e+1/3),this.g=$a(o,s,e),this.b=$a(o,s,e-1/3)}return nt.toWorkingColorSpace(this,i),this}setStyle(e,t=it){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],c=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=it){let n=Gh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return nt.fromWorkingColorSpace(De.copy(this),e),Math.round(W(De.r*255,0,255))*65536+Math.round(W(De.g*255,0,255))*256+Math.round(W(De.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(De.copy(this),t);let n=De.r,i=De.g,s=De.b,o=Math.max(n,i,s),c=Math.min(n,i,s),a,l,u=(c+o)/2;if(c===o)a=0,l=0;else{let h=o-c;switch(l=u<=.5?h/(o+c):h/(2-o-c),o){case n:a=(i-s)/h+(i<s?6:0);break;case i:a=(s-n)/h+2;break;case s:a=(n-i)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(De.copy(this),t),e.r=De.r,e.g=De.g,e.b=De.b,e}getStyle(e=it){nt.fromWorkingColorSpace(De.copy(this),e);let t=De.r,n=De.g,i=De.b;return e!==it?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yt),this.setHSL(Yt.h+e,Yt.s+t,Yt.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yt),e.getHSL(Ps);let n=Ra(Yt.h,Ps.h,t),i=Ra(Yt.s,Ps.s,t),s=Ra(Yt.l,Ps.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new xe;xe.NAMES=Gh;var lg=0,sr=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=mc(),this.name="",this.type="Material",this.blending=ja,this.side=Ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ka,this.blendEquation=Ya,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yn,this.stencilZFail=yn,this.stencilZPass=yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ja&&(n.blending=this.blending),this.side!==Ws&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==Ya&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let c in s){let a=s[c];delete a.metadata,o.push(a)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},js=class extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ye=new x,Ls=new Oe,ug=0,Ft=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ug++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rc,this.updateRanges=[],this.gpuType=kh,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ls.fromBufferAttribute(this,t),Ls.applyMatrix3(e),this.setXY(t,Ls.x,Ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ye.fromBufferAttribute(this,t),ye.applyMatrix3(e),this.setXYZ(t,ye.x,ye.y,ye.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ye.fromBufferAttribute(this,t),ye.applyMatrix4(e),this.setXYZ(t,ye.x,ye.y,ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ye.fromBufferAttribute(this,t),ye.applyNormalMatrix(e),this.setXYZ(t,ye.x,ye.y,ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ye.fromBufferAttribute(this,t),ye.transformDirection(e),this.setXYZ(t,ye.x,ye.y,ye.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=He(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=He(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),n=He(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=He(t,this.array),n=He(n,this.array),i=He(i,this.array),s=He(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rc&&(e.usage=this.usage),e}};var Ys=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zs=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xn=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},hg=0,tt=new pt,Xa=new ro,ri=new x,qe=new Kt,Qi=new Kt,Ee=new x,or=class r extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=mc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hh(e)?Zs:Ys)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new k().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tt.makeRotationFromQuaternion(e),this.applyMatrix4(tt),this}rotateX(e){return tt.makeRotationX(e),this.applyMatrix4(tt),this}rotateY(e){return tt.makeRotationY(e),this.applyMatrix4(tt),this}rotateZ(e){return tt.makeRotationZ(e),this.applyMatrix4(tt),this}translate(e,t,n){return tt.makeTranslation(e,t,n),this.applyMatrix4(tt),this}scale(e,t,n){return tt.makeScale(e,t,n),this.applyMatrix4(tt),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(e){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let c=t[s];Qi.setFromBufferAttribute(c),this.morphTargetsRelative?(Ee.addVectors(qe.min,Qi.min),qe.expandByPoint(Ee),Ee.addVectors(qe.max,Qi.max),qe.expandByPoint(Ee)):(qe.expandByPoint(Qi.min),qe.expandByPoint(Qi.max))}qe.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ee.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ee));if(t)for(let s=0,o=t.length;s<o;s++){let c=t[s],a=this.morphTargetsRelative;for(let l=0,u=c.count;l<u;l++)Ee.fromBufferAttribute(c,l),a&&(ri.fromBufferAttribute(e,l),Ee.add(ri)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),c=[],a=[];for(let S=0;S<n.count;S++)c[S]=new x,a[S]=new x;let l=new x,u=new x,h=new x,d=new Oe,f=new Oe,p=new Oe,g=new x,v=new x;function y(S,_,m){l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),d.fromBufferAttribute(s,S),f.fromBufferAttribute(s,_),p.fromBufferAttribute(s,m),u.sub(l),h.sub(l),f.sub(d),p.sub(d);let E=1/(f.x*p.y-p.x*f.y);isFinite(E)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(E),v.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(E),c[S].add(g),c[_].add(g),c[m].add(g),a[S].add(v),a[_].add(v),a[m].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let S=0,_=b.length;S<_;++S){let m=b[S],E=m.start,O=m.count;for(let B=E,q=E+O;B<q;B+=3)y(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let T=new x,R=new x,I=new x,$=new x;function C(S){I.fromBufferAttribute(i,S),$.copy(I);let _=c[S];T.copy(_),T.sub(I.multiplyScalar(I.dot(_))).normalize(),R.crossVectors($,_);let E=R.dot(a[S])<0?-1:1;o.setXYZW(S,T.x,T.y,T.z,E)}for(let S=0,_=b.length;S<_;++S){let m=b[S],E=m.start,O=m.count;for(let B=E,q=E+O;B<q;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new x,s=new x,o=new x,c=new x,a=new x,l=new x,u=new x,h=new x;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),g=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),c.fromBufferAttribute(n,p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.add(u),a.add(u),l.add(u),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ee.fromBufferAttribute(e,t),Ee.normalize(),e.setXYZ(t,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function e(c,a){let l=c.array,u=c.itemSize,h=c.normalized,d=new l.constructor(a.length*u),f=0,p=0;for(let g=0,v=a.length;g<v;g++){c.isInterleavedBufferAttribute?f=a[g]*c.data.stride+c.offset:f=a[g]*u;for(let y=0;y<u;y++)d[p++]=l[f++]}return new Ft(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let c in i){let a=i[c],l=e(a,n);t.setAttribute(c,l)}let s=this.morphAttributes;for(let c in s){let a=[],l=s[c];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);a.push(f)}t.morphAttributes[c]=a}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,a=o.length;c<a;c++){let l=o[c];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let a in n){let l=n[a];e.data.attributes[a]=l.toJSON(e.data)}let i={},s=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[a]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fh=new pt,_n=new Xs,Fs=new ir,Nh=new x,Ns=new x,Os=new x,Us=new x,qa=new x,Bs=new x,Oh=new x,ks=new x,ar=class extends ro{constructor(e=new or,t=new js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let c=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let c=this.morphTargetInfluences;if(s&&c){Bs.set(0,0,0);for(let a=0,l=s.length;a<l;a++){let u=c[a],h=s[a];u!==0&&(qa.fromBufferAttribute(h,e),o?Bs.addScaledVector(qa,u):Bs.addScaledVector(qa.sub(t),u))}t.add(Bs)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),_n.copy(e.ray).recast(e.near),!(Fs.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Fs,Nh)===null||_n.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Fh.copy(s).invert(),_n.copy(e.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&_n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_n)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,c=s.index,a=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(c!==null)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let v=d[p],y=o[v.materialIndex],b=Math.max(v.start,f.start),T=Math.min(c.count,Math.min(v.start+v.count,f.start+f.count));for(let R=b,I=T;R<I;R+=3){let $=c.getX(R),C=c.getX(R+1),S=c.getX(R+2);i=zs(this,y,e,n,l,u,h,$,C,S),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let v=p,y=g;v<y;v+=3){let b=c.getX(v),T=c.getX(v+1),R=c.getX(v+2);i=zs(this,o,e,n,l,u,h,b,T,R),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(o))for(let p=0,g=d.length;p<g;p++){let v=d[p],y=o[v.materialIndex],b=Math.max(v.start,f.start),T=Math.min(a.count,Math.min(v.start+v.count,f.start+f.count));for(let R=b,I=T;R<I;R+=3){let $=R,C=R+1,S=R+2;i=zs(this,y,e,n,l,u,h,$,C,S),i&&(i.faceIndex=Math.floor(R/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let v=p,y=g;v<y;v+=3){let b=v,T=v+1,R=v+2;i=zs(this,o,e,n,l,u,h,b,T,R),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}};function dg(r,e,t,n,i,s,o,c){let a;if(e.side===Uh?a=n.intersectTriangle(o,s,i,!0,c):a=n.intersectTriangle(i,s,o,e.side===Ws,c),a===null)return null;ks.copy(c),ks.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(ks);return l<t.near||l>t.far?null:{distance:l,point:ks.clone(),object:r}}function zs(r,e,t,n,i,s,o,c,a,l){r.getVertexPosition(c,Ns),r.getVertexPosition(a,Os),r.getVertexPosition(l,Us);let u=dg(r,e,t,n,Ns,Os,Us,Oh);if(u){let h=new x;Zt.getBarycoord(Oh,Ns,Os,Us,h),i&&(u.uv=Zt.getInterpolatedAttribute(i,c,a,l,h,new Oe)),s&&(u.uv1=Zt.getInterpolatedAttribute(s,c,a,l,h,new Oe)),o&&(u.normal=Zt.getInterpolatedAttribute(o,c,a,l,h,new x),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:c,b:a,c:l,normal:new x,materialIndex:0};Zt.getNormal(Ns,Os,Us,d.normal),u.face=d,u.barycoord=h}return u}var cr=class r extends or{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let c=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let a=[],l=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new xn(l,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(h,2));function p(g,v,y,b,T,R,I,$,C,S,_){let m=R/C,E=I/S,O=R/2,B=I/2,q=$/2,J=C+1,fe=S+1,ie=0,le=0,V=new x;for(let H=0;H<fe;H++){let Q=H*E-B;for(let Ae=0;Ae<J;Ae++){let dr=Ae*m-O;V[g]=dr*b,V[v]=Q*T,V[y]=q,l.push(V.x,V.y,V.z),V[g]=0,V[v]=0,V[y]=$>0?1:-1,u.push(V.x,V.y,V.z),h.push(Ae/C),h.push(1-H/S),ie+=1}}for(let H=0;H<S;H++)for(let Q=0;Q<C;Q++){let Ae=d+Q+J*H,dr=d+Q+J*(H+1),ld=d+(Q+1)+J*(H+1),yc=d+(Q+1)+J*H;a.push(Ae,dr,yc),a.push(dr,ld,yc),le+=6}c.addGroup(f,le,_),f+=le,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Wh(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ue(r){let e={};for(let t=0;t<r.length;t++){let n=Wh(r[t]);for(let i in n)e[i]=n[i]}return e}var lr=class extends ro{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ur=class extends sr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Vs(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function fg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Sn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let c=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let c=t[1];e<c&&(n=2,s=c);for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let c=n+o>>>1;e<t[c]?o=c:n=c+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ks=class extends Sn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ja,endingEnd:Ja}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,c=i[s],a=i[o];if(c===void 0)switch(this.getSettings_().endingStart){case Qa:s=e,c=2*t-n;break;case ec:s=i.length-2,c=t+i[s]-i[s+1];break;default:s=e,c=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Qa:o=e,a=2*n-t;break;case ec:o=1,a=n+i[1]-i[0];break;default:o=e-1,a=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-c),this._weightNext=l/(a-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,a=e*c,l=a-c,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),g=p*p,v=g*p,y=-d*v+2*d*g-d*p,b=(1+d)*v+(-1.5-2*d)*g+(-.5+d)*p+1,T=(-1-f)*v+(1.5+f)*g+.5*p,R=f*v-f*g;for(let I=0;I!==c;++I)s[I]=y*o[u+I]+b*o[l+I]+T*o[a+I]+R*o[h+I];return s}},Js=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,a=e*c,l=a-c,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==c;++d)s[d]=o[l+d]*h+o[a+d]*u;return s}},Qs=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},je=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vs(t,this.TimeBufferType),this.values=Vs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vs(e.times,Array),values:Vs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Js(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ks(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case $s:t=this.InterpolantFactoryMethodLinear;break;case Hs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return Hs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let c=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*c,o*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let c=0;c!==s;c++){let a=n[c];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,a),e=!1;break}if(o!==null&&o>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,a,o),e=!1;break}o=a}if(i!==void 0&&fg(i))for(let c=0,a=i.length;c!==a;++c){let l=i[c];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Hs,s=e.length-1,o=1;for(let c=1;c<s;++c){let a=!1,l=e[c],u=e[c+1];if(l!==u&&(c!==1||l!==e[0]))if(i)a=!0;else{let h=c*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let g=t[h+p];if(g!==t[d+p]||g!==t[f+p]){a=!0;break}}}if(a){if(c!==o){e[o]=e[c];let h=c*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let c=s*n,a=o*n,l=0;l!==n;++l)t[a+l]=t[c+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};je.prototype.ValueTypeName="";je.prototype.TimeBufferType=Float32Array;je.prototype.ValueBufferType=Float32Array;je.prototype.DefaultInterpolation=$s;var Jt=class extends je{constructor(e,t,n){super(e,t,n)}};Jt.prototype.ValueTypeName="bool";Jt.prototype.ValueBufferType=Array;Jt.prototype.DefaultInterpolation=nr;Jt.prototype.InterpolantFactoryMethodLinear=void 0;Jt.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends je{constructor(e,t,n,i){super(e,t,n,i)}};eo.prototype.ValueTypeName="color";var to=class extends je{constructor(e,t,n,i){super(e,t,n,i)}};to.prototype.ValueTypeName="number";var no=class extends Sn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,c=this.valueSize,a=(n-t)/(i-t),l=e*c;for(let u=l+c;l!==u;l+=4)Nt.slerpFlat(s,0,o,l-c,o,l,a);return s}},hr=class extends je{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new no(this.times,this.values,this.getValueSize(),e)}};hr.prototype.ValueTypeName="quaternion";hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qt=class extends je{constructor(e,t,n){super(e,t,n)}};Qt.prototype.ValueTypeName="string";Qt.prototype.ValueBufferType=Array;Qt.prototype.DefaultInterpolation=nr;Qt.prototype.InterpolantFactoryMethodLinear=void 0;Qt.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends je{constructor(e,t,n,i){super(e,t,n,i)}};io.prototype.ValueTypeName="vector";var gc="\\[\\]\\.:\\/",pg=new RegExp("["+gc+"]","g"),vc="[^"+gc+"]",mg="[^"+gc.replace("\\.","")+"]",gg=/((?:WC+[\/:])*)/.source.replace("WC",vc),vg=/(WCOD+)?/.source.replace("WCOD",mg),_g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),xg=new RegExp("^"+gg+vg+_g+yg+"$"),Sg=["material","materials","bones","map"],oc=class{constructor(e,t,n){let i=n||de.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},de=(()=>{class r{constructor(t,n,i){this.path=n,this.parsedPath=i||r.parseTrackName(n),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,n,i):new r(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(t){let n=xg.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=i.nodeName.substring(s+1);Sg.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(o){for(let c=0;c<o.length;c++){let a=o[c];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,o=i.length;s!==o;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=r.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let c=t[s];if(c===void 0){let u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(l=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return r.Composite=oc,r})();de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ZS=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);var Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
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
#endif`,bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cg=`#ifdef USE_AOMAP
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
#endif`,Rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dg=`#ifdef USE_BATCHING
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
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ng=`#ifdef USE_IRIDESCENCE
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
#endif`,Og=`#ifdef USE_BUMPMAP
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
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$g=`#define PI 3.141592653589793
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
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qg=`vec3 transformedNormal = objectNormal;
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
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e0=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
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
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
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
#endif`,x0=`struct PhysicalMaterial {
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
}`,S0=`
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I0=`#if defined( USE_POINTS_UV )
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
#endif`,P0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
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
#endif`,$0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ev=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ov=`float getShadowMask() {
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
}`,av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cv=`#ifdef USE_SKINNING
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
#endif`,lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uv=`#ifdef USE_SKINNING
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
#endif`,hv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mv=`#ifdef USE_TRANSMISSION
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
#endif`,gv=`#ifdef USE_TRANSMISSION
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mv=`uniform sampler2D t2D;
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`#include <common>
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
}`,Cv=`#if DEPTH_PACKING == 3200
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
}`,Rv=`#define DISTANCE
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
}`,Dv=`#define DISTANCE
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
}`,Iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`uniform float scale;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Nv=`#include <common>
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Uv=`#define LAMBERT
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
}`,Bv=`#define LAMBERT
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
}`,kv=`#define MATCAP
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
}`,zv=`#define MATCAP
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
}`,Vv=`#define NORMAL
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
}`,Hv=`#define NORMAL
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
}`,Gv=`#define PHONG
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
}`,Wv=`#define PHONG
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
}`,$v=`#define STANDARD
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
}`,Xv=`#define STANDARD
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
}`,qv=`#define TOON
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
}`,jv=`#define TOON
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
}`,Yv=`uniform float size;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Kv=`#include <common>
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
}`,Jv=`uniform vec3 color;
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
}`,Qv=`uniform float rotation;
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
}`,e_=`uniform vec3 diffuse;
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
}`,z={alphahash_fragment:Mg,alphahash_pars_fragment:Eg,alphamap_fragment:bg,alphamap_pars_fragment:wg,alphatest_fragment:Ag,alphatest_pars_fragment:Tg,aomap_fragment:Cg,aomap_pars_fragment:Rg,batching_pars_vertex:Dg,batching_vertex:Ig,begin_vertex:Pg,beginnormal_vertex:Lg,bsdfs:Fg,iridescence_fragment:Ng,bumpmap_pars_fragment:Og,clipping_planes_fragment:Ug,clipping_planes_pars_fragment:Bg,clipping_planes_pars_vertex:kg,clipping_planes_vertex:zg,color_fragment:Vg,color_pars_fragment:Hg,color_pars_vertex:Gg,color_vertex:Wg,common:$g,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:qg,displacementmap_pars_vertex:jg,displacementmap_vertex:Yg,emissivemap_fragment:Zg,emissivemap_pars_fragment:Kg,colorspace_fragment:Jg,colorspace_pars_fragment:Qg,envmap_fragment:e0,envmap_common_pars_fragment:t0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:p0,envmap_vertex:r0,fog_vertex:s0,fog_pars_vertex:o0,fog_fragment:a0,fog_pars_fragment:c0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:u0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:d0,lights_pars_begin:f0,lights_toon_fragment:m0,lights_toon_pars_fragment:g0,lights_phong_fragment:v0,lights_phong_pars_fragment:_0,lights_physical_fragment:y0,lights_physical_pars_fragment:x0,lights_fragment_begin:S0,lights_fragment_maps:M0,lights_fragment_end:E0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:A0,logdepthbuf_vertex:T0,map_fragment:C0,map_pars_fragment:R0,map_particle_fragment:D0,map_particle_pars_fragment:I0,metalnessmap_fragment:P0,metalnessmap_pars_fragment:L0,morphinstance_vertex:F0,morphcolor_vertex:N0,morphnormal_vertex:O0,morphtarget_pars_vertex:U0,morphtarget_vertex:B0,normal_fragment_begin:k0,normal_fragment_maps:z0,normal_pars_fragment:V0,normal_pars_vertex:H0,normal_vertex:G0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:$0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:j0,opaque_fragment:Y0,packing:Z0,premultiplied_alpha_fragment:K0,project_vertex:J0,dithering_fragment:Q0,dithering_pars_fragment:ev,roughnessmap_fragment:tv,roughnessmap_pars_fragment:nv,shadowmap_pars_fragment:iv,shadowmap_pars_vertex:rv,shadowmap_vertex:sv,shadowmask_pars_fragment:ov,skinbase_vertex:av,skinning_pars_vertex:cv,skinning_vertex:lv,skinnormal_vertex:uv,specularmap_fragment:hv,specularmap_pars_fragment:dv,tonemapping_fragment:fv,tonemapping_pars_fragment:pv,transmission_fragment:mv,transmission_pars_fragment:gv,uv_pars_fragment:vv,uv_pars_vertex:_v,uv_vertex:yv,worldpos_vertex:xv,background_vert:Sv,background_frag:Mv,backgroundCube_vert:Ev,backgroundCube_frag:bv,cube_vert:wv,cube_frag:Av,depth_vert:Tv,depth_frag:Cv,distanceRGBA_vert:Rv,distanceRGBA_frag:Dv,equirect_vert:Iv,equirect_frag:Pv,linedashed_vert:Lv,linedashed_frag:Fv,meshbasic_vert:Nv,meshbasic_frag:Ov,meshlambert_vert:Uv,meshlambert_frag:Bv,meshmatcap_vert:kv,meshmatcap_frag:zv,meshnormal_vert:Vv,meshnormal_frag:Hv,meshphong_vert:Gv,meshphong_frag:Wv,meshphysical_vert:$v,meshphysical_frag:Xv,meshtoon_vert:qv,meshtoon_frag:jv,points_vert:Yv,points_frag:Zv,shadow_vert:Kv,shadow_frag:Jv,sprite_vert:Qv,sprite_frag:e_},M={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new k}},envmap:{envMap:{value:null},envMapRotation:{value:new k},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new k}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new k}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new k},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new k},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new k},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new k}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new k}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new k}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0},uvTransform:{value:new k}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}}},$h={basic:{uniforms:Ue([M.common,M.specularmap,M.envmap,M.aomap,M.lightmap,M.fog]),vertexShader:z.meshbasic_vert,fragmentShader:z.meshbasic_frag},lambert:{uniforms:Ue([M.common,M.specularmap,M.envmap,M.aomap,M.lightmap,M.emissivemap,M.bumpmap,M.normalmap,M.displacementmap,M.fog,M.lights,{emissive:{value:new xe(0)}}]),vertexShader:z.meshlambert_vert,fragmentShader:z.meshlambert_frag},phong:{uniforms:Ue([M.common,M.specularmap,M.envmap,M.aomap,M.lightmap,M.emissivemap,M.bumpmap,M.normalmap,M.displacementmap,M.fog,M.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:z.meshphong_vert,fragmentShader:z.meshphong_frag},standard:{uniforms:Ue([M.common,M.envmap,M.aomap,M.lightmap,M.emissivemap,M.bumpmap,M.normalmap,M.displacementmap,M.roughnessmap,M.metalnessmap,M.fog,M.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:z.meshphysical_vert,fragmentShader:z.meshphysical_frag},toon:{uniforms:Ue([M.common,M.aomap,M.lightmap,M.emissivemap,M.bumpmap,M.normalmap,M.displacementmap,M.gradientmap,M.fog,M.lights,{emissive:{value:new xe(0)}}]),vertexShader:z.meshtoon_vert,fragmentShader:z.meshtoon_frag},matcap:{uniforms:Ue([M.common,M.bumpmap,M.normalmap,M.displacementmap,M.fog,{matcap:{value:null}}]),vertexShader:z.meshmatcap_vert,fragmentShader:z.meshmatcap_frag},points:{uniforms:Ue([M.points,M.fog]),vertexShader:z.points_vert,fragmentShader:z.points_frag},dashed:{uniforms:Ue([M.common,M.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:z.linedashed_vert,fragmentShader:z.linedashed_frag},depth:{uniforms:Ue([M.common,M.displacementmap]),vertexShader:z.depth_vert,fragmentShader:z.depth_frag},normal:{uniforms:Ue([M.common,M.bumpmap,M.normalmap,M.displacementmap,{opacity:{value:1}}]),vertexShader:z.meshnormal_vert,fragmentShader:z.meshnormal_frag},sprite:{uniforms:Ue([M.sprite,M.fog]),vertexShader:z.sprite_vert,fragmentShader:z.sprite_frag},background:{uniforms:{uvTransform:{value:new k},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:z.background_vert,fragmentShader:z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new k}},vertexShader:z.backgroundCube_vert,fragmentShader:z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:z.cube_vert,fragmentShader:z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:z.equirect_vert,fragmentShader:z.equirect_frag},distanceRGBA:{uniforms:Ue([M.common,M.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:z.distanceRGBA_vert,fragmentShader:z.distanceRGBA_frag},shadow:{uniforms:Ue([M.lights,M.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:z.shadow_vert,fragmentShader:z.shadow_frag}};$h.physical={uniforms:Ue([$h.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new k},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new k},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new k},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new k},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new k},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new k},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new k},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new k},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new k},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new k},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new k},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new k}}]),vertexShader:z.meshphysical_vert,fragmentShader:z.meshphysical_frag};var Mn=(1+Math.sqrt(5))/2,li=1/Mn,bC=[new x(-Mn,li,0),new x(Mn,li,0),new x(-li,0,Mn),new x(li,0,Mn),new x(0,Mn,-li),new x(0,Mn,li),new x(-1,1,-1),new x(1,1,-1),new x(-1,1,1),new x(1,1,1)];var wC=new Float32Array(16),AC=new Float32Array(9),TC=new Float32Array(4);var CC={[cc]:lc,[uc]:fc,[hc]:pc,[tr]:dc,[lc]:cc,[fc]:uc,[pc]:hc,[dc]:tr};function t_(r,e){if(r&1&&(X(0,"div"),ue(1),Vt(2,"date"),K()),r&2){let t=st().ngIf;ne(),Jc("Cached At: ",el(2,1,t.cacheTime,"yyyy-MM-dd HH:mm"),"")}}function n_(r,e){if(r&1&&(X(0,"a",1),ue(1),K()),r&2){let t=st().ngIf;he("href",t.indexUrl,vr),ne(),rn(t.sourceDomain)}}function i_(r,e){if(r&1&&(In(0),ue(1),Pn()),r&2){let t=st().ngIf;ne(),rn(t.sourceDomain)}}function r_(r,e){if(r&1&&(In(0),X(1,"a",1),Te(2,"img",2),K(),X(3,"div",3),We(4,t_,3,4,"div",0),X(5,"div",4),ue(6,"Source: "),We(7,n_,2,2,"a",5)(8,i_,2,1,"ng-container",0),K()(),Pn()),r&2){let t=e.ngIf,n=st();ne(),he("href",t.sourceUrl,vr),ne(),rt("max-width",n.imageMaxWidth,"px")("max-height",n.imageMaxHeight,"px"),he("src",t.thumbUrl,vr),ne(2),he("ngIf",t.cacheTime),ne(),rt("color",t.isSourceSecure?"blue":"red"),ne(2),he("ngIf",t.indexUrl),ne(),he("ngIf",!t.indexUrl)}}var qh=(()=>{class r{set urlPrefix(t){this.cacheUrlPrefix$.next(t)}set map(t){this.map$.next(t)}set marker(t){this.marker$.next(t)}constructor(t,n,i){this.elementRef=t,this.ngZone=n,this.http=i,this.map$=new hi,this.marker$=new hi,this.destroy$=new te,this.cacheUrlPrefix$=new hi,this.closed=new Je,this.imageMaxWidth=300,this.imageMaxHeight=300,this._thumbnails=null,this.thumbnails$=new hi,this._location=null}ngOnDestroy(){this.ensureCloseWindow(!0),this.destroy$.next()}ngOnInit(){Ot([this.map$,this.marker$]).pipe(Ge(this.destroy$)).subscribe(([n,i])=>{this.createWindow(n,i)});let t=this.thumbnails$.pipe(Pe(n=>!n||n.length===0?P(null):Ac(0,4e3).pipe(L(i=>n[i%n.length]))));this.image$=Ot([t,this.cacheUrlPrefix$]).pipe(L(([n,i])=>{if(!n)return null;let s=n.sourceLink.match(/^http(s)?:\/\/([^/]+)/);if(!s)return an(`URL unmatch ${n.sourceLink}`),null;let o=!!s[1],c={thumbUrl:n.sourceLink,sourceUrl:n.sourceLink,indexUrl:this._location?this._location.sourceUrl:null,sourceDomain:s[2],isSourceSecure:o};if(!n.cacheLink||!n.cacheAt)return c;let a=new Date(n.cacheAt),l=new Date;return o&&a.getTime()<l.getTime()-1*60*60*1e3||(c.thumbUrl=this.http.makeUncacheUrl(`${i}${n.cacheLink}`),c.cacheTime=a),c}))}set location(t){this._location=t,this._thumbnails=t?t.thumbLinks:null,this.thumbnails$.next(this._thumbnails)}ensureCloseWindow(t){this.window&&(this.window.close(),delete this.window,t&&this.closed.emit())}createWindow(t,n){this.ensureCloseWindow(),this.window=new google.maps.InfoWindow({content:this.elementRef.nativeElement}),this.window.addListener("closeclick",()=>{this.ensureCloseWindow(!0)}),this.window.open({anchor:n,map:t,shouldFocus:!1})}static{this.\u0275fac=function(n){return new(n||r)(Z(pi),Z(mt),Z(On))}}static{this.\u0275cmp=me({type:r,selectors:[["app-camera-view"]],inputs:{urlPrefix:"urlPrefix",map:"map",marker:"marker",location:"location"},outputs:{closed:"closed"},decls:2,vars:3,consts:[[4,"ngIf"],["target","_blank",3,"href"],[3,"src"],[2,"padding","2px"],[1,""],["target","_blank",3,"href",4,"ngIf"]],template:function(n,i){n&1&&(We(0,r_,9,11,"ng-container",0),Vt(1,"async")),n&2&&he("ngIf",sn(1,1,i.image$))},dependencies:[at,cn,No],encapsulation:2})}}return r})();function s_(r,e){if(r&1){let t=Ln();In(0),X(1,"app-camera-view",2),gt("closed",function(){An(t);let i=st(2);return Tn(i.onCloseCameraWindow())}),K(),Pn()}if(r&2){let t=e.ngIf,n=st().ngIf;ne(),he("map",n.map)("marker",n.marker)("location",n.location)("urlPrefix",t)}}function o_(r,e){if(r&1&&(In(0),We(1,s_,2,4,"ng-container",1),Vt(2,"async"),Pn()),r&2){let t=e.ngIf;ne(),he("ngIf",sn(2,1,t.urlPrefix$))}}var Yh=(()=>{class r{constructor(t,n,i){this.http=t,this.router=n,this.route=i,this.urlPrefix=ae.DataLocationPrefix,this.destroy$=new te,this.mapPersistent$=new te,this.isProduction=ae.production,this.windowResize$=new te,this.boundsS2Segments$=new te,this.cameraMarkers={},this.groupMarkers={},this.infoParent=null,this.apiVersion$=this.http.fetchGHJson(`${this.urlPrefix}version.json`).pipe(tn(1)),this.dataRepository$=this.apiVersion$.pipe(L(s=>{for(let o of s.supportedIndex)if((0,_c.default)(o.semver,ae.DataVersionRange))return o.targetPath;throw new Error("No supported version supplied")}),L(s=>({prefix:`${this.urlPrefix}${s}/`})),tn(1)),this.thumbCacheRepository$=this.apiVersion$.pipe(L(s=>{for(let o of s.supportedThumbs)if((0,_c.default)(o.semver,ae.ThumbVersionRange))return o.targetPath;throw new Error("No supported version supplied")}),L(s=>({prefix:`${this.urlPrefix}${s}/`})),tn(1)),this.initialMapState$=this.route.fragment.pipe(L(s=>s?this.parsePersistantMapData(s):null),Ke(s=>s!==null)),this.mapHeight$=En(P(void 0),this.windowResize$).pipe(L(()=>window.innerHeight))}onWindowResize(){this.windowResize$.next()}ngOnInit(){return ui(this,null,function*(){let n=yield new al({apiKey:ae.googleMapApiKey,version:"weekly",libraries:["places"]}).load();on("Google API loaded",n);let i={center:{lat:ae.MapDefaultLocation.lat,lng:ae.MapDefaultLocation.lng},zoom:12},s=document.getElementById("toolsRoadMapMain");if(!s)throw new Error("No valid Map container element found.");let o=new n.maps.Map(s,i),c=new lr,a=new ar(new cr(10,50,10),new ur);c.add(a),o.addListener("bounds_changed",()=>{this.mapBoundsChanged(o)}),this.prepareDataStream(o),this.prepareStateStream()})}parsePersistantMapData(t){let n=t.split(";"),i={};for(let d of n){let f=/^([^=]+)=(.*)/.exec(d);if(!f)continue;let p=decodeURIComponent(f[1]),g=decodeURIComponent(f[2]);i[p]=g}if(!("c"in i)||!("z"in i))return null;let s=i.c,o=/^([0-9.]+),([0-9.]+)$/.exec(s);if(!o)return null;let c=Number(o[1]),a=Number(o[2]),l=i.z,u=/^([0-9]+)$/.exec(l);if(!u)return null;let h=Number(u[1]);return{centerLat:c,centerLng:a,zoom:h}}buildPersistantMapData(t){let n={};n.c=`${t.centerLat.toFixed(6)},${t.centerLng.toFixed(6)}`,n.z=`${t.zoom}`;let i=[];for(let s in n){let o=n[s];i.push(`${encodeURIComponent(s)}=${encodeURIComponent(o)}`)}return i.join(";")}prepareStateStream(){this.mapPersistent$.pipe(Ge(this.destroy$)).subscribe(t=>{this.router.navigate([],{fragment:this.buildPersistantMapData(t)})})}mapBoundsChanged(t){let n=t.getCenter(),i=t.getZoom();if(n&&typeof i=="number"){let l=n.lat(),u=n.lng();this.mapPersistent$.next({centerLat:l,centerLng:u,zoom:i})}let s=t.getBounds();if(!s)return;let o=s.getNorthEast(),c=s.getSouthWest(),a=Sh(o.lat(),o.lng(),c.lat(),c.lng());this.boundsS2Segments$.next(a)}ngOnDestroy(){this.destroy$.next()}requestNode$(t,n){let i=t.buildPath();return i in n?n[i]:this.dataRepository$.pipe(Pe(s=>this.http.fetchGHJson(`${s.prefix}${i}.json`).pipe(Ut(o=>(Cr(`While retrieving S2 cell ${i}`,o),this.requestNode$(t.parentSegment(),n))))),tn(1))}requestCoveringNodes$(t,n,i){return this.requestNode$(t,i).pipe(L(s=>[s,n]),Cc(([s,o])=>{if(o<=0)return Ze;if(!Aa(s))return Ze;let c=s;return Ie(c.children).pipe(L(a=>ut.FromSegment(c.nodeSegments).concatSegment(a)),en(a=>Ot([this.requestNode$(a,i),P(o-1)])))}),L(([s,o])=>s),Ke(s=>{if(Aa(s))return s.s2cellLevel===t.S2Level+n;if(Ta(s))return!0;throw new Error("Not a supported node.")}))}requestTopSegment$(t,n=1){let i={};return this.requestCoveringNodes$(t,n,i).pipe(Se(s=>on(`Result is return on ${t}`,s)))}expireMarkers(t,n,i){let s=Object.keys(n),o=s.length;for(let a of s){if(i.includes(a))continue;let l=n[a];l.setMap(null),l.unbindAll(),delete n[a]}let c=Object.keys(n).length;on(`${t} Marker Database size ${o} -> ${c}`)}prepareDataStream(t){this.currentZoom$=this.boundsS2Segments$.pipe(L(h=>t.getZoom()),Ke(h=>!!h));let i=this.boundsS2Segments$.pipe(lo(1e3),pr((h,d)=>Mh(h,d)),tn(1)).pipe(Pe(h=>{let d=new Date().getTime();return on(`Prepare to request current segment ${d}`,h),Ie(h).pipe(Be(f=>this.requestTopSegment$(f),ae.ThreadParallelMax),bn(()=>s.next()))})),s=new te,o=new te,c=[];i.pipe(Ge(this.destroy$)).subscribe(h=>{c.push(h)}),s.pipe(Ge(this.destroy$)).subscribe(()=>{o.next(c),c=[]});let a=o.pipe(L(h=>h.filter(d=>yh(d))),lo(500),tn(1)),l=a.pipe(L(h=>{let d=[];for(let f=0;f<h.length;f++){let p=h[f];if(!Ca(p))continue;let g=p.nodeSegments,v=ut.FromSegment(g),y=!1;for(let b=f+1;b<h.length;b++){let T=ut.FromSegment(h[b].nodeSegments);if(v.isDescendant(T)){y=!0;break}}y||d.push(p)}return d})),u=a.pipe(L(h=>h.filter(d=>Ta(d))));l.pipe(Ge(this.destroy$)).subscribe(h=>{on(`New group nodes ${h.length}`);let d=[];for(let f of h){if(f.s2cellId in this.groupMarkers){d.push(f.s2cellId);continue}let p=new google.maps.LatLng({lat:f.s2cellLat,lng:f.s2cellLng});if(!t.getBounds().contains(p)){let b=ut.FromSegment(f.nodeSegments).concatSegment(f.children[0]),T=jh.S2.keyToLatLng(b.key);p=new google.maps.LatLng({lat:T.lat,lng:T.lng})}let v=new google.maps.Marker({map:t,position:p,title:`${f.count} . Click to zoom-in`,icon:{path:google.maps.SymbolPath.CIRCLE,fillColor:"red",fillOpacity:.2,scale:Math.max(Math.log(f.count)*24,32),strokeColor:"white",strokeWeight:.5}});v.set("model",f),v.addListener("click",y=>this.onClickGruopMarker(y,v,t)),d.push(f.s2cellId),this.groupMarkers[f.s2cellId]=v}this.expireMarkers("Group",this.groupMarkers,d)}),u.pipe(Ge(this.destroy$)).subscribe(h=>{on(`New camera nodes ${h.length}`);let d=[];for(let f of h)for(let p of f.members){if(p.s2cellId in this.cameraMarkers){d.push(p.s2cellId);continue}let g=new google.maps.LatLng({lat:p.lat,lng:p.lng}),v=new google.maps.Marker({map:t,position:g,title:p.title,icon:"assets/octicons+/map-device-camera.svg"});v.set("model",p),v.addListener("click",y=>this.onClickCameraMarker(y,v,t)),d.push(p.s2cellId),this.cameraMarkers[p.s2cellId]=v}this.expireMarkers("Camera",this.cameraMarkers,d)}),this.initialMapState$.pipe(Ge(this.destroy$),Bt(1)).subscribe(h=>{let d={lat:h.centerLat,lng:h.centerLng};t.setCenter(d),t.setZoom(h.zoom)})}onClickGruopMarker(t,n,i){let s=i.getZoom();if(!s){Cr("No zoom value now",n);return}i.setZoom(s+2);let o=n.getPosition();if(!o){Cr("No position here",n);return}i.setCenter(o)}onClickCameraMarker(t,n,i){let s=n.get("model");if(s.thumbLinks.length<1){an("Unexpectedly no contents of thumbnails");return}let o=this.thumbCacheRepository$.pipe(L(c=>c.prefix));this.infoParent={location:s,urlPrefix$:o,marker:n,map:i}}onCloseCameraWindow(){this.infoParent&&delete this.infoParent}static{this.\u0275fac=function(n){return new(n||r)(Z(On),Z(St),Z(xt))}}static{this.\u0275cmp=me({type:r,selectors:[["app-road-map"]],hostBindings:function(n,i){n&1&&gt("resize",function(){return i.onWindowResize()},!1,_r)},decls:3,vars:5,consts:[["id","toolsRoadMapMain",2,"width","100%"],[4,"ngIf"],[3,"closed","map","marker","location","urlPrefix"]],template:function(n,i){n&1&&(Te(0,"div",0),Vt(1,"async"),We(2,o_,3,3,"ng-container",1)),n&2&&(rt("height",sn(1,3,i.mapHeight$),"px"),ne(2),he("ngIf",i.infoParent))},dependencies:[at,cn,qh],styles:["[_nghost-%COMP%]{display:block}"]})}}return r})();var Zh=(()=>{class r{constructor(){}ngOnInit(){}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275cmp=me({type:r,selectors:[["app-road-top"]],decls:1,vars:0,template:function(n,i){n&1&&Te(0,"app-road-map")},dependencies:[Yh],encapsulation:2})}}return r})();var Kh=[{path:"Forecast",loadComponent:()=>import("./chunk-SOYJUGXO.js").then(r=>r.MainComponent)},{path:"",component:Zh}];var Jh={providers:[ol(),il({eventCoalescing:!0}),da(Kh),Du()]};var a_=["ins"],Qh=new oe("AdsenseConfig"),ed=(()=>{class r{config;platform;adClient;adSlot;adFormat;adRegion="page-"+Math.floor(Math.random()*1e4)+1;display;width;height;layout;layoutKey;pageLevelAds;adtest;fullWidthResponsive;className="";ins;constructor(t,n){this.config=t,this.platform=n}ngOnInit(){let t=this.config;this.adClient=this.adClient??t.adClient,this.adSlot=this.adSlot??t.adSlot,this.adFormat=this.adFormat??t.adFormat??"auto",this.display=this.display??t.display??"block",this.width=this.width??t.width,this.height=this.height??t.height,this.layout=this.layout??t.layout,this.layoutKey=this.layoutKey??t.layoutKey,this.pageLevelAds=this.pageLevelAds??t.pageLevelAds,this.adtest=this.adtest??t.adtest,this.fullWidthResponsive=this.fullWidthResponsive??t.fullWidthResponsive}ngOnDestroy(){let t=this.ins.nativeElement.querySelector("iframe");t&&t.contentWindow&&(t.src="about:blank",t.remove())}ngAfterViewInit(){Ao(this.platform)&&this.push()}push(){let t={};if(this.pageLevelAds&&(t.google_ad_client=this.adClient,t.enable_page_level_ads=!0),window)try{(window.adsbygoogle=window.adsbygoogle||[]).push(t)}catch{}}static \u0275fac=function(n){return new(n||r)(Z(Qh),Z(nn))};static \u0275cmp=me({type:r,selectors:[["ng2-adsense"],["ng-adsense"]],viewQuery:function(n,i){if(n&1&&Sr(a_,7,pi),n&2){let s;Mr(s=Er())&&(i.ins=s.first)}},inputs:{adClient:"adClient",adSlot:"adSlot",adFormat:"adFormat",adRegion:"adRegion",display:"display",width:"width",height:"height",layout:"layout",layoutKey:"layoutKey",pageLevelAds:"pageLevelAds",adtest:"adtest",fullWidthResponsive:"fullWidthResponsive",className:"className"},standalone:!1,decls:2,vars:17,consts:[["ins",""]],template:function(n,i){n&1&&Te(0,"ins",null,0),n&2&&(Zc("adsbygoogle ",i.className,""),rt("display",i.display)("width",i.width,"px")("height",i.height,"px"),Yc("data-ad-client",i.adClient)("data-ad-slot",i.adSlot)("data-ad-format",i.adFormat)("data-ad-region",i.adRegion)("data-layout",i.layout)("data-adtest",i.adtest)("data-layout-key",i.layoutKey)("data-full-width-responsive",i.fullWidthResponsive))},encapsulation:2,changeDetection:0})}return r})(),td=(()=>{class r{static forRoot(t={}){return{ngModule:r,providers:[{provide:Qh,useValue:t}]}}static \u0275fac=function(n){return new(n||r)};static \u0275mod=Rn({type:r});static \u0275inj=wn({imports:[Ur]})}return r})();var l_=["appDialogContainer"];function u_(r,e){if(r&1){let t=Ln();X(0,"button",5),gt("click",function(){An(t);let i=st();return Tn(i.onClickOk())}),ue(1,"OK"),K()}}function h_(r,e){if(r&1){let t=Ln();X(0,"button",5),gt("click",function(){An(t);let i=st();return Tn(i.onClickCancel())}),ue(1,"Cancel"),K()}}var nd=(()=>{class r{constructor(){this.animationState="init",this.windowResize$=new te,this.isShowOk=!0,this.isShowCancel=!0,this.closed=new Je,this.cancelClicked=new Je,this.okClicked=new Je}onWindowResize(){this.windowResize$.next()}ngOnInit(){this.winHeight$=En(P(void 0),this.windowResize$).pipe(L(()=>document.body.clientHeight))}doCloseDialog(){this.animationState="closing",this.closed.emit()}onClickBackdrop(){this.doCloseDialog()}onClickCancel(){this.cancelClicked.emit(),this.doCloseDialog()}onClickOk(){this.okClicked.emit(),this.doCloseDialog()}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275cmp=me({type:r,selectors:[["app-dialog"]],viewQuery:function(n,i){if(n&1&&Sr(l_,7,zt),n&2){let s;Mr(s=Er())&&(i.ref=s.first)}},hostBindings:function(n,i){n&1&&gt("resize",function(){return i.onWindowResize()},!1,_r)},inputs:{isShowOk:"isShowOk",isShowCancel:"isShowCancel"},decls:8,vars:8,consts:[["appDialogContainer",""],[1,"appDialogBackdrop",3,"click"],[1,"appDialogWindow"],[1,"appDialogControls"],["class","appDialogButton",3,"click",4,"ngIf"],[1,"appDialogButton",3,"click"]],template:function(n,i){if(n&1){let s=Ln();X(0,"div",1),Vt(1,"async"),gt("click",function(){return An(s),Tn(i.onClickBackdrop())}),K(),X(2,"div",2),Te(3,"div",null,0),X(5,"div",3),We(6,u_,2,0,"button",4)(7,h_,2,0,"button",4),K()()}n&2&&(rt("height",sn(1,6,i.winHeight$),"px"),he("@maskTrigger",i.animationState),ne(2),he("@dialogTrigger",i.animationState),ne(4),he("ngIf",i.isShowOk),ne(),he("ngIf",i.isShowCancel))},dependencies:[at,cn],styles:[".appDialogBackdrop[_ngcontent-%COMP%]{position:absolute;top:0;width:100%;background-color:#000;opacity:.5;z-index:10000}.appDialogWindow[_ngcontent-%COMP%]{position:fixed;z-index:100001;border-radius:5%;padding:20px;top:50%;left:50%;transform:translateY(-50%) translate(-50%);background-color:#fff;box-shadow:0 0 10px 10px #0003}.appDialogButton[_ngcontent-%COMP%]{padding:.7rem 1.5rem;margin:.5rem;box-shadow:0 0 10px 2px #0000001a;border-radius:5%;cursor:pointer;background-color:#5283ff;border-style:none;transition:transform .1s ease-in-out}.appDialogButton[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.appDialogControls[_ngcontent-%COMP%]{display:flex;justify-content:center}"],data:{animation:[Ar("maskTrigger",[Nn(":enter",[bt({opacity:0}),Fn("300ms ease-in-out",bt({opacity:"*"}))]),Nn("* => closing",[Fn("300ms ease-in-out",bt({opacity:0}))])]),Ar("dialogTrigger",[Nn(":enter",[bt({opacity:0}),Fn("300ms ease-in-out",bt({opacity:"*"}))]),Nn("* => closing",[bt({opacity:"*"}),Fn("300ms ease-in-out",bt({opacity:0}))])])]}})}}return r})();var so=(()=>{class r{constructor(){}ensureUnmodal(){this.modalSubscription&&(this.modalSubscription.unsubscribe(),delete this.modalSubscription)}showModal(t,n){let i=this.dialogHost.viewContainerRef;i.clear();let o=i.createComponent(nd).instance;return n&&(o.isShowCancel=!n.isHideCancel,o.isShowOk=!n.isHideOk),this.ensureUnmodal(),this.modalSubscription=o.closed.pipe(Tc(200)).subscribe(()=>{this.closeModal()}),o.ref.createComponent(t).instance}closeModal(){this.dialogHost.viewContainerRef.clear(),this.ensureUnmodal()}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275prov=G({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var rd=(()=>{class r{constructor(t,n){this.viewContainerRef=t,this.dialog=n,this.dialog.dialogHost=this}static{this.\u0275fac=function(n){return new(n||r)(Z(zt),Z(so))}}static{this.\u0275dir=Dn({type:r,selectors:[["","appDialogHosting",""]]})}}return r})();var sd=(()=>{class r{constructor(){this.ANGULAR_VERSION=tl.full,this.VERSION=ae.VERSION,this.AppName=ae.appName}ngOnInit(){}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275cmp=me({type:r,selectors:[["app-version"]],decls:23,vars:3,consts:[["href","https://mhayashi1120.net/terms","target","_blank"],["href","about.html","target","_blank"]],template:function(n,i){n&1&&(X(0,"table")(1,"tr")(2,"td"),ue(3,"Name"),K(),X(4,"td"),ue(5),K()(),X(6,"tr")(7,"td"),ue(8,"Version"),K(),X(9,"td"),ue(10),K()(),X(11,"tr")(12,"td"),ue(13,"Terms"),K(),X(14,"td")(15,"a",0),ue(16,"[Open]"),K()()(),X(17,"tr")(18,"td"),ue(19,"About"),K(),X(20,"td")(21,"a",1),ue(22,"[Open]"),K()()()()),n&2&&(ne(5),rn(i.AppName),ne(5),Qc("",i.VERSION," (Angular: ",i.ANGULAR_VERSION,")"))},styles:["table[_ngcontent-%COMP%]{border-spacing:20px}"]})}}return r})();function d_(r,e){r&1&&(X(0,"li")(1,"a",7),ue(2,"Forecast"),K()())}var od=(()=>{class r{constructor(t,n){this.http=t,this.dialog=n,this.isProduction=ae.production,this.VERSION=ae.VERSION,this.destroy$=new te}ngOnInit(){this.version$=this.http.fetchGHJson("version.json").pipe(L(t=>{let n=t;return n.releasedTime=new Date(t.releasedAt),n}))}ngOnDestroy(){this.destroy$.next()}onClickVersion(){this.dialog.showModal(sd,{isHideCancel:!0})}static{this.\u0275fac=function(n){return new(n||r)(Z(On),Z(so))}}static{this.\u0275cmp=me({type:r,selectors:[["app-header"]],decls:19,vars:2,consts:[[1,"appHeader"],[1,"appVersion",3,"click"],["href","/"],["routerLink",""],[4,"ngIf"],["href","https://mhayashi1120.net/privacypolicy","target","_blank"],["href","https://mhayashi1120.net/terms","target","_blank"],["routerLink","Forecast/index.htm"]],template:function(n,i){n&1&&(X(0,"div",0)(1,"header")(2,"ul")(3,"li")(4,"span",1),gt("click",function(){return i.onClickVersion()}),ue(5),K()(),X(6,"li")(7,"a",2),ue(8,"Top"),K()(),X(9,"li")(10,"a",3),ue(11,"Map"),K()(),We(12,d_,3,0,"li",4),X(13,"li")(14,"a",5),ue(15,"Policy"),K()(),X(16,"li")(17,"a",6),ue(18,"Terms"),K()()()()()),n&2&&(ne(5),rn(i.VERSION),ne(7),he("ngIf",!i.isProduction))},dependencies:[at],styles:[".appVersion[_ngcontent-%COMP%]{color:#ddd;cursor:pointer}div.appHeader[_ngcontent-%COMP%]{display:block;position:sticky;top:0;width:100%;height:3rem;background:#5283ff;box-shadow:0 5px 5px #0000001a;z-index:10000}ul[_ngcontent-%COMP%]{margin:0;padding:.5rem}li[_ngcontent-%COMP%]{display:inline;margin:.5rem}a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited{color:#fff}"]})}}return r})();var ad=(()=>{class r{constructor(t,n,i){this.router=t,this.renderer2=n,this.document=i,this.destroy$=new te}ngOnDestroy(){this.destroy$.next()}initializeScript(){Tr("Initializing Google Analytics");let t=this.renderer2.createElement("script");t.crossorigin="anonymous",t.src=`https://www.googletagmanager.com/gtag/js?id=${ae.GA_CODE}`,t.async=!0,this.renderer2.appendChild(this.document.head,t);let n=this.renderer2.createElement("script");n.text=`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
`,this.renderer2.appendChild(this.document.body,n),En(P(this.router.url),this.router.events.pipe(Ke(i=>i instanceof Le&&i instanceof lt),L(i=>i.url),L(i=>i.replace(/#.*$/,"")),pr())).pipe(Ge(this.destroy$)).subscribe({next:i=>this.maybeSendGtag(i),error:i=>an("gtag subscription",i),complete:()=>an("Never COMPLETE gtag!")})}ngOnInit(){ae.GA_CODE&&ae.GA_CODE!==""&&this.initializeScript()}maybeSendGtag(t){Tr(`Google Analytics maybe send resource ${t}`,gtag),gtag&&(Tr(`Sending resource ${t} to Google Analytics`),gtag("config",ae.GA_CODE,{page_path:t}))}static{this.\u0275fac=function(n){return new(n||r)(Z(St),Z(xo),Z(ve))}}static{this.\u0275cmp=me({type:r,selectors:[["google-analytics-loader"]],decls:0,vars:0,template:function(n,i){},encapsulation:2})}}return r})();function f_(r,e){r&1&&(X(0,"div"),Te(1,"ng-adsense",2),K()),r&2&&(rt("width",100,"%"),ne(),he("height",100))}var cd=(()=>{class r{constructor(t){this.router=t,this.isAdActive=ae.production,this.isDeveloper=!ae.production,this.destroy$=new te}ngOnInit(){}ngOnDestroy(){this.destroy$.next()}static{this.\u0275fac=function(n){return new(n||r)(Z(St))}}static{this.\u0275cmp=me({type:r,selectors:[["app-root"]],decls:5,vars:1,consts:[[3,"width",4,"ngIf"],["appDialogHosting",""],["className","ad-responsive",3,"height"]],template:function(n,i){n&1&&(Te(0,"app-header")(1,"router-outlet"),We(2,f_,2,3,"div",0),Te(3,"google-analytics-loader"),Kc(4,1)),n&2&&(ne(2),he("ngIf",i.isAdActive))},dependencies:[at,Hi,td,ed,rd,ad,od],encapsulation:2})}}return r})();ae.production&&void 0;Ho(cd,Jh).catch(r=>console.error(r));
