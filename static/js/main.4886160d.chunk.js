(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),s=(t(78),t(47)),o=t(5),i=!0,m={gradientColors:"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",firstName:"Romain",middleName:"",lastName:"Baert",message:" Passion\xe9 de d\xe9veloppement web et mobile ",icons:[{image:"fa-github",url:"https://github.com/Ampersander"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/romain-baert-768542184/"}]},u={show:!0,heading:"\xc0 propos de moi",imageLink:t(79),imageSize:375,message:"Mon nom est Romain Baert. Je suis \xe9tudiant en Licence professionnelle m\xe9tiers de l\u2019informatique : conception, d\xe9veloppement et test de logiciels sp\xe9cialit\xe9 d\xe9veloppement web et mobile ainsi qu'en alternance \xe0 Canon. Je suis passionn\xe9 des technologies li\xe9es aux d\xe9veloppement web et mobile et mon objectif est de poursuivre cette passion en apprenant un peu plus tout les jours.Je suis actuellement \xe0 la recherche d'une alternance dans ce domaine \xe0 partir de septembre 2021 \xe0 ao\xfbt 2023.",resume:t(52)},d={show:!0,heading:"Projets r\xe9cent",gitHubUsername:"Ampersander",reposLength:4,specificRepos:[]},f={show:!0,heading:"Formations",parts:[{name:"Canon",description:"fdgsdqfdfdsf",img:"test",date:"2020"},{name:"Renault",description:"qdsffddfsqsffsdfsd",img:"test",date:"2021"},{name:"IUT",description:"QSDFDFQSQFSDFD",img:"test",date:"2020-2019"}]},p={show:!0,heading:"Comp\xe9tences",hardSkills:[{name:"JavaScript",value:85},{name:"HTML/CSS",value:80},{name:"SQL",value:75},{name:"PHP",value:75},{name:"JQUERY",value:75},{name:"Bootstrap",value:70},{name:"Java",value:65},{name:"XML",value:65},{name:"Python",value:65},{name:"React",value:60},{name:"Symfony",value:60},{name:"Django",value:55},{name:"C#",value:55},{name:"SvelteJS",value:50},{name:"Wordpress",value:50},{name:"C/C++",value:40},{name:"AngularJS",value:40},{name:"Unity",value:40}],softSkills:[{name:"Goal-Oriented",value:80},{name:"Collaboration",value:90},{name:"Positivity",value:75},{name:"Adaptability",value:85},{name:"Problem Solving",value:75},{name:"Empathy",value:90},{name:"Organization",value:70},{name:"Creativity",value:90}]},g=!0,h="Contact",b="Je suis actuellement \xe0 la recherche d'opportunit\xe9s pour une alternance dans le d\xe9veloppement web et mobile. Si vous connaissez des postes disponibles, si vous avez des questions ou si vous voulez simplement dire bonjour, n'h\xe9sitez pas \xe0 m'envoyer un courriel.",v="",E=t(64),w=t.n(E),k=t(18),N=t(26),y=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,c=e.icons;return r.a.createElement(N.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(k.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(w.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},c.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"Plus \xe0 propos de moi")))})),x=t(16),S=t.n(x),j=t(27),_=t(7),O=(t(52),t(19)),C=t.n(O),R=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),z=function(e){var a=e.heading,t=e.message,n=e.link,l=e.imgSize,c=e.resume,s=r.a.useState(""),o=Object(_.a)(s,2),i=o[0],m=o[1],u=r.a.useState(Boolean(n)),d=Object(_.a)(u,2),f=d[0],p=d[1];r.a.useEffect((function(){n&&!R.test(n)?g():m(n)}),[n]);var g=function(){var e=Object(j.a)(S.a.mark((function e(){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,C.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,m(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),p(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},f&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:i,alt:"profilepicture",width:l,height:l})),r.a.createElement("div",{className:"col-lg-".concat(f?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),c&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:c,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Mon CV"))))))},L=t(65),P=t(72),T=t(32),F=t(14),J=t(12),B=t(17),M=t.n(B),A=function(e){var a=e.svn_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"".concat(a,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"))},D=function(e){var a=e.languages_url,t=e.repo_url,l=Object(n.useState)([]),c=Object(_.a)(l,2),s=c[0],o=c[1],i=Object(n.useCallback)(Object(j.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(a);case 3:return t=e.sent,e.abrupt("return",o(t.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);Object(n.useEffect)((function(){i()}),[i]);var m=[],u=0;for(var d in s)m.push(d),u+=s[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",m.length?m.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light card-link",href:t+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(s[e]/u*1e3)/10," %")})):"code yet to be deployed.")},q=function(e){var a=e.star_count,t=e.repo_url,l=e.pushed_at,c=Object(n.useState)("0 mints"),s=Object(_.a)(c,2),o=s[0],i=s[1],m=Object(n.useCallback)((function(){var e=new Date(l),a=(new Date).getTime()-e.getTime(),t=Math.trunc(a/1e3/60/60);if(t<24){if(t<1)return i("just now");var n=1===t?"hour":"hours";return i("".concat(t.toString()," ").concat(n," ago"))}var r=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(e);return i("on ".concat(r))}),[l]);return Object(n.useEffect)((function(){m()}),[m]),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:t+"/stargazers",target:" _blank",className:"text-dark text-decoration-none"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},a))),r.a.createElement("small",{className:"text-muted"},"Updated ",o))},U=function(e){var a=e.value,t=a.name,n=a.description,l=a.svn_url,c=a.stargazers_count,s=a.languages_url,o=a.pushed_at;return r.a.createElement(F.a,{md:6},r.a.createElement(J.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(J.a.Body,null,r.a.createElement(J.a.Title,{as:"h5"},t||r.a.createElement(M.a,null)," "),r.a.createElement(J.a.Text,null,n||r.a.createElement(M.a,{count:3})," "),l?r.a.createElement(A,{svn_url:l}):r.a.createElement(M.a,{count:2}),r.a.createElement("hr",null),s?r.a.createElement(D,{languages_url:s,repo_url:l}):r.a.createElement(M.a,{count:3}),a?r.a.createElement(q,{star_count:c,repo_url:l,pushed_at:o}):r.a.createElement(M.a,null))))},W={name:null,description:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},H="https://api.github.com",Q=function(e){var a=e.heading,t=e.username,l=e.length,c=e.specfic,s="".concat(H,"/users/").concat(t,"/repos?sort=updated&direction=desc"),o="".concat(H,"/repos/").concat(t),i=new Array(l+c.length).fill(W),m=Object(n.useState)([]),u=Object(_.a)(m,2),d=u[0],f=u[1],p=Object(n.useCallback)(Object(j.a)(S.a.mark((function e(){var a,t,n,r,i,m;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,C.a.get(s);case 4:t=e.sent,a=Object(P.a)(t.data.slice(0,l)),e.prev=6,n=Object(L.a)(c),e.prev=8,n.s();case 10:if((r=n.n()).done){e.next=18;break}return i=r.value,e.next=14,C.a.get("".concat(o,"/").concat(i));case 14:m=e.sent,a.push(m.data);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(6),console.error(e.t1.message);case 31:f(a),e.next=37;break;case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2.message);case 37:case"end":return e.stop()}}),e,null,[[1,34],[6,28],[8,20,23,26]])}))),[s,l,c,o]);return Object(n.useEffect)((function(){p()}),[p]),r.a.createElement(N.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(k.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement(T.a,null,d.length?d.map((function(e,a){return r.a.createElement(U,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})):i.map((function(e,a){return r.a.createElement(U,{key:"dummy-".concat(a),id:"dummy-".concat(a),value:e})})))))},I=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(k.a,null,r.a.createElement(F.a,{md:0},e.children,r.a.createElement("i",{className:"fas fa-at"})," : ",r.a.createElement("a",{href:"mailto:romain-b49460@hotmail.com"},"romain-b49460@hotmail.com")),r.a.createElement(F.a,{md:0},r.a.createElement("i",{className:"fas fa-phone"})," : ",r.a.createElement("a",{href:"tel:+33651841607"},"0651841607"))))},K="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,V="undefined"!==typeof window;function X(e){var a=e.element,t=e.useWindow;if(!V)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function Y(e,a,t,r,l){var c=Object(n.useRef)(X({useWindow:r})),s=null,o=function(){var a=X({element:t,useWindow:r});e({prevPos:c.current,currPos:a}),c.current=a,s=null};K((function(){if(V){var e=function(){l?null===s&&(s=setTimeout(o,l)):o()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),s&&clearTimeout(s)}}}),a)}Y.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var Z=function(e){var a=r.a.useState(null),t=Object(_.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},G=t(34),$=t(23),ee=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(_.a)(t,2),c=l[0],s=l[1],o=Object(n.useState)(0),i=Object(_.a)(o,2),f=i[0],g=i[1],h=r.a.useRef(),b=Z(h),v=b?b.bottom:0;return Y((function(e){e.prevPos;var t=e.currPos;b&&(t.y+a.current.offsetTop-b.bottom>5?s(!0):s(!1),g(t.y))}),[v]),r.a.useEffect((function(){b&&(v-f>=a.current.offsetTop?s(!1):s(!0))}),[v,b,a,f]),r.a.createElement(G.a,{ref:h,className:" fixed-top  ".concat(c?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement(G.a.Brand,{className:"brand",href:"/#home"},"<".concat(m.firstName," />")),r.a.createElement(G.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement(G.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement($.a,{className:"mr-auto"},d.show&&r.a.createElement($.a.Link,{className:"nav-link lead",href:"/#projects"},"Projets"),r.a.createElement($.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Mon CV"),u.show&&r.a.createElement($.a.Link,{className:"nav-link lead",href:"/#aboutme"},"\xc0 propos de moi"),p.show&&r.a.createElement($.a.Link,{className:"nav-link lead",href:"/#skills"},"Comp\xe9tences"))))})),ae=t(48),te=t(70),ne=t(69);var re=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return r.a.createElement("div",{style:{width:"95%"}},r.a.createElement("p",{className:"lead mb-1 mt-2"},a),r.a.createElement(ne.a,{className:n?" progress-bar-animation":"progress",now:t}))};function le(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(re,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var ce=function(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{xs:12,md:6},r.a.createElement(le,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(F.a,{xs:12,md:6},r.a.createElement(le,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))};var se=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,l=r.a.useRef(),c=r.a.useState(!1),s=Object(_.a)(c,2),o=s[0],i=s[1];return Y((function(e){e.prevPos;var a=e.currPos;!o&&a.y-400<0&&i(!0)}),[],l),r.a.createElement(N.a,{ref:l,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(k.a,{className:"p-5 "},r.a.createElement("h2",{ref:l,className:"display-4 pb-5 text-center"},a),r.a.createElement(te.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},r.a.createElement(ae.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},r.a.createElement(T.a,{className:"pt-3 px-1"},r.a.createElement(ce,{skills:t,isScrolled:o}))),r.a.createElement(ae.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},r.a.createElement(T.a,{className:"pt-3 px-1"},r.a.createElement(ce,{skills:n,isScrolled:o}))))))},oe=function(e){var a=e.heading,t=e.message,n=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,", ",r.a.createElement("a",{href:"mailto:".concat(n)},n),"."))},ie=function(e){var a=e.value;return r.a.createElement(F.a,{md:0},r.a.createElement(J.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(J.a.Header,{as:"h5"},"value.date"),r.a.createElement(J.a.Body,null,r.a.createElement(J.a.Title,{as:"h5"},a.name||r.a.createElement(M.a,null)," "),r.a.createElement("hr",null),r.a.createElement(J.a.Text,null,a.description||r.a.createElement(M.a,{count:3})," "))))},me=function(e){var a=e.heading,t=e.parts;return r.a.createElement(N.a,{fluid:!0,id:"part",className:"bg-light m-0"},r.a.createElement(k.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),t.map((function(e,t){return r.a.createElement(ie,{key:"".concat(a,"-").concat(t),id:t,value:e})}))))},ue=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(z,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),f.show&&r.a.createElement(me,{heading:f.heading,parts:f.parts}),p.show&&r.a.createElement(se,{heading:p.heading,hardSkills:p.hardSkills,softSkills:p.softSkills}),d.show&&r.a.createElement(Q,{heading:d.heading,username:d.gitHubUsername,length:d.reposLength,specfic:d.specificRepos}))})),de=function(){var e=r.a.useRef();return r.a.createElement(s.a,{basename:"/"},i&&r.a.createElement(ee,{ref:e}),r.a.createElement(o.a,{path:"/",exact:!0,component:function(){return r.a.createElement(ue,{ref:e})}}),r.a.createElement(I,null,g&&r.a.createElement(oe,{heading:h,message:b,email:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,a,t){e.exports=t.p+"static/media/resume.7470b4db.pdf"},73:function(e,a,t){e.exports=t(109)},78:function(e,a,t){},79:function(e,a,t){e.exports=t.p+"static/media/baertromain.114b004c.jpg"}},[[73,1,2]]]);
//# sourceMappingURL=main.4886160d.chunk.js.map