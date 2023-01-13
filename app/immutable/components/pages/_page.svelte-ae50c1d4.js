import{S as ee,i as te,s as ae,k as r,a as B,q as p,J as re,l as s,h as l,c as S,m as v,r as b,n as t,C as Y,D as e,b as Z,u as se,B as $,o as ne}from"../../chunks/index-b802000d.js";function le(x){let d,u,a,_,m,j,k,g,I,L,P,T,w,C,q,V,G,f,o,R,y=(x[0]??"Windows")+"",z,W,H,c,J,N,D,E,F;return{c(){d=r("meta"),u=B(),a=r("section"),_=r("div"),m=r("img"),k=B(),g=r("h1"),I=p("Engine Cluster"),L=r("br"),P=p("DrawBridge"),T=B(),w=r("p"),C=p(`DrawBridge is a open source and free to use bridge between your chess software and your remote engine cluster.
		`),q=r("br"),V=p(`
		Available for Windows, Linux and macOS.`),G=B(),f=r("div"),o=r("a"),R=p("Download for "),z=p(y),H=B(),c=r("a"),J=p("See all available versions"),N=B(),D=r("div"),E=r("img"),this.h()},l(n){const h=re("svelte-syn46v",document.head);d=s(h,"META",{name:!0,content:!0}),h.forEach(l),u=S(n),a=s(n,"SECTION",{});var i=v(a);_=s(i,"DIV",{class:!0});var K=v(_);m=s(K,"IMG",{src:!0,alt:!0,class:!0}),K.forEach(l),k=S(i),g=s(i,"H1",{class:!0});var A=v(g);I=b(A,"Engine Cluster"),L=s(A,"BR",{}),P=b(A,"DrawBridge"),A.forEach(l),T=S(i),w=s(i,"P",{class:!0});var O=v(w);C=b(O,`DrawBridge is a open source and free to use bridge between your chess software and your remote engine cluster.
		`),q=s(O,"BR",{}),V=b(O,`
		Available for Windows, Linux and macOS.`),O.forEach(l),G=S(i),f=s(i,"DIV",{class:!0});var M=v(f);o=s(M,"A",{class:!0,href:!0,target:!0,rel:!0});var U=v(o);R=b(U,"Download for "),z=b(U,y),U.forEach(l),H=S(M),c=s(M,"A",{class:!0,target:!0,rel:!0,href:!0});var Q=v(c);J=b(Q,"See all available versions"),Q.forEach(l),M.forEach(l),N=S(i),D=s(i,"DIV",{class:!0});var X=v(D);E=s(X,"IMG",{src:!0,alt:!0}),X.forEach(l),i.forEach(l),this.h()},h(){document.title="DrawBridge",t(d,"name","description"),t(d,"content","DrawBridge, a bridge between your chess software and your remote engine"),Y(m.src,j="img/logo-min.png")||t(m,"src",j),t(m,"alt","DrawBridge Logo"),t(m,"class","svelte-igc4dz"),t(_,"class","logo svelte-igc4dz"),t(g,"class","svelte-igc4dz"),t(w,"class","svelte-igc4dz"),t(o,"class","button svelte-igc4dz"),t(o,"href",W=x[1][x[0]??"Windows"]??""),t(o,"target","_blank"),t(o,"rel","noreferrer"),t(c,"class","link svelte-igc4dz"),t(c,"target","_blank"),t(c,"rel","noreferrer"),t(c,"href","https://github.com/PawnTown/drawbridge/releases"),t(f,"class","button-wrap svelte-igc4dz"),Y(E.src,F="img/screenshot.png")||t(E,"src",F),t(E,"alt","Screenshot of DrawBridge"),t(D,"class","screenshot svelte-igc4dz")},m(n,h){e(document.head,d),Z(n,u,h),Z(n,a,h),e(a,_),e(_,m),e(a,k),e(a,g),e(g,I),e(g,L),e(g,P),e(a,T),e(a,w),e(w,C),e(w,q),e(w,V),e(a,G),e(a,f),e(f,o),e(o,R),e(o,z),e(f,H),e(f,c),e(c,J),e(a,N),e(a,D),e(D,E)},p(n,[h]){h&1&&y!==(y=(n[0]??"Windows")+"")&&se(z,y),h&1&&W!==(W=n[1][n[0]??"Windows"]??"")&&t(o,"href",W)},i:$,o:$,d(n){l(d),n&&l(u),n&&l(a)}}}function oe(x,d,u){let a="";return ne(()=>{window.navigator.userAgent.indexOf("Win")!=-1&&u(0,a="Windows"),window.navigator.userAgent.indexOf("Mac")!=-1&&u(0,a="MacOS"),window.navigator.userAgent.indexOf("Linux")!=-1&&u(0,a="Linux")}),[a,{Windows:"https://github.com/PawnTown/drawbridge/releases/download/app-v0.0.0/drawbridge_0.0.0_x64_en-US.msi",MacOS:"https://github.com/PawnTown/drawbridge/releases/download/app-v0.0.0/drawbridge_0.0.0_x64.dmg",Linux:"https://github.com/PawnTown/drawbridge/releases/download/app-v0.0.0/drawbridge.app.tar.gz"}]}class de extends ee{constructor(d){super(),te(this,d,oe,le,ae,{})}}export{de as default};
