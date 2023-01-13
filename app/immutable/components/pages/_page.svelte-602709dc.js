import{S as F,i as K,s as Q,k as a,a as x,q as w,I as X,l as r,h as n,c as y,m as _,r as p,n as s,J as Y,C as e,b as j,u as Z,B as z,o as $}from"../../chunks/index-6395dde2.js";function ee(O){let o,c,t,d,A,W,C,I,u,M,T,L,q,f,v,P,E=(O[0]??"Windows")+"",B,N,i,R,V,m,b,H;return{c(){o=a("meta"),c=x(),t=a("section"),d=a("h1"),A=w("Engine Cluster"),W=a("br"),C=w("DrawBridge"),I=x(),u=a("p"),M=w(`DrawBridge is a open source and free to use bridge between your chess software and your remote engine cluster.
		`),T=a("br"),L=w(`
		Available for Windows, Linux and macOS.`),q=x(),f=a("div"),v=a("button"),P=w("Download for "),B=w(E),N=x(),i=a("a"),R=w("See all available versions"),V=x(),m=a("div"),b=a("img"),this.h()},l(l){const g=X("svelte-syn46v",document.head);o=r(g,"META",{name:!0,content:!0}),g.forEach(n),c=y(l),t=r(l,"SECTION",{});var h=_(t);d=r(h,"H1",{class:!0});var D=_(d);A=p(D,"Engine Cluster"),W=r(D,"BR",{}),C=p(D,"DrawBridge"),D.forEach(n),I=y(h),u=r(h,"P",{class:!0});var S=_(u);M=p(S,`DrawBridge is a open source and free to use bridge between your chess software and your remote engine cluster.
		`),T=r(S,"BR",{}),L=p(S,`
		Available for Windows, Linux and macOS.`),S.forEach(n),q=y(h),f=r(h,"DIV",{class:!0});var k=_(f);v=r(k,"BUTTON",{class:!0});var G=_(v);P=p(G,"Download for "),B=p(G,E),G.forEach(n),N=y(k),i=r(k,"A",{target:!0,rel:!0,href:!0,class:!0});var J=_(i);R=p(J,"See all available versions"),J.forEach(n),k.forEach(n),V=y(h),m=r(h,"DIV",{class:!0});var U=_(m);b=r(U,"IMG",{src:!0,alt:!0}),U.forEach(n),h.forEach(n),this.h()},h(){document.title="DrawBridge",s(o,"name","description"),s(o,"content","DrawBridge, a bridge between your chess software and your remote engine"),s(d,"class","svelte-pkt3lr"),s(u,"class","svelte-pkt3lr"),s(v,"class","svelte-pkt3lr"),s(i,"target","_blank"),s(i,"rel","noreferrer"),s(i,"href","https://github.com/PawnTown/drawbridge/releases"),s(i,"class","svelte-pkt3lr"),s(f,"class","button-wrap svelte-pkt3lr"),Y(b.src,H="img/screenshot.png")||s(b,"src",H),s(b,"alt","Screenshot of DrawBridge"),s(m,"class","screenshot svelte-pkt3lr")},m(l,g){e(document.head,o),j(l,c,g),j(l,t,g),e(t,d),e(d,A),e(d,W),e(d,C),e(t,I),e(t,u),e(u,M),e(u,T),e(u,L),e(t,q),e(t,f),e(f,v),e(v,P),e(v,B),e(f,N),e(f,i),e(i,R),e(t,V),e(t,m),e(m,b)},p(l,[g]){g&1&&E!==(E=(l[0]??"Windows")+"")&&Z(B,E)},i:z,o:z,d(l){n(o),l&&n(c),l&&n(t)}}}function te(O,o,c){let t="";return $(()=>{window.navigator.userAgent.indexOf("Win")!=-1&&c(0,t="Windows"),window.navigator.userAgent.indexOf("Mac")!=-1&&c(0,t="MacOS"),window.navigator.userAgent.indexOf("Linux")!=-1&&c(0,t="Linux")}),[t]}class ae extends F{constructor(o){super(),K(this,o,te,ee,Q,{})}}export{ae as default};
