(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QWy9:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var i=e("pMnS"),s=e("SVse"),a=e("s7LF"),o=e("dkDh"),r=e("ApLq"),c=t.zb({encapsulation:2,styles:[],data:{}});function d(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,3,"span",[],[[1,"aria-hidden",0]],null,null,null,null)),t.Rb(512,null,s.v,s.w,[t.x,t.y,t.n,t.L]),t.Ab(2,278528,null,0,s.i,[s.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Pb(3,{"ui-clickable":0,"ui-button-icon-left":1,"ui-button-icon-right":2})],(function(l,n){var e=n.component,t=e.icon,u=l(n,3,0,!0,"left"===e.iconPos,"right"===e.iconPos);l(n,2,0,t,u)}),(function(l,n){l(n,0,0,!0)}))}function p(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,9,"button",[],[[1,"type",0],[8,"disabled",0]],[[null,"click"],[null,"focus"],[null,"blur"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.onClick.emit(e)&&t),"focus"===n&&(t=!1!==u.onFocus.emit(e)&&t),"blur"===n&&(t=!1!==u.onBlur.emit(e)&&t),t}),null,null)),t.Rb(512,null,s.v,s.w,[t.x,t.y,t.n,t.L]),t.Ab(2,278528,null,0,s.i,[s.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Rb(512,null,s.x,s.y,[t.n,t.y,t.L]),t.Ab(4,278528,null,0,s.n,[s.x],{ngStyle:[0,"ngStyle"]},null),t.Mb(null,0),(l()(),t.qb(16777216,null,null,1,null,d)),t.Ab(7,16384,null,0,s.k,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(8,0,null,null,1,"span",[["class","ui-button-text ui-clickable"]],[[1,"aria-hidden",0]],null,null,null,null)),(l()(),t.Ub(9,null,["",""]))],(function(l,n){var e=n.component;l(n,2,0,e.styleClass,e.disabled?"disable-button cursor-not-allowed text-white font-16 font-weight-700 uppercase px-6 py-3 rounded-full\n      shadow outline-none focus:outline-none mr-1 mb-1 w-full":"primary-blue  text-white active:bg-gray-700 font-16 font-weight-700 uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"),l(n,4,0,e.style),l(n,7,0,e.icon)}),(function(l,n){var e=n.component;l(n,0,0,e.type,e.disabled),l(n,8,0,e.icon&&!e.label),l(n,9,0,e.label||"ui-btn")}))}var b=e("mrSG"),h=e("AytR"),g=e("6CRC"),m=e("fSl4"),f=e("s2el"),y=e("jDDO");new m.a("LoginComponent");class v{constructor(l,n,e){this.router=l,this.authenticationService=n,this.confirmationService=e,this.username="",this.password="",this.appli1="",this.isUsernameValid=!1,this.isPasswordValid=!1,this.isAppliValid=!1,this.isValidForm=!1,this.userDomainKey="userdomain",this.change=!1,this.changeImg=!0,this.fingerTemplate="",this.loading=()=>b.a(this,void 0,void 0,(function*(){yield this.wait(5e3),this.authenticationService.login(this.username,this.password,this.appli1,ClientIP,this.loginType,this.fingerTemplate).then(l=>{if(this.authenticationService.isLoggedIn){console.log("login");const l="/";!1===this.authenticationService.isAuthenticated()?console.log(this.authenticationService.isAuthenticated()):this.router.navigate([l],{replaceUrl:!0})}else console.log("belum login")})})),this.show=!1,this.toggle=!1,this.view=!1,f.a.hasItem(this.userDomainKey)&&(this.credentials=f.a.getItem("userdomain"),console.log(this.credentials))}onSubmit(){this.isValidForm&&!1===this.toggle?this.authenticationService.login(this.username,this.password,this.appli1,ClientIP,this.loginType,this.fingerTemplate).then(l=>{if(this.authenticationService.isLoggedIn){console.log("login");const l="/";!1===this.authenticationService.isAuthenticated()?console.log(this.authenticationService.isAuthenticated()):this.router.navigate([l],{replaceUrl:!0})}else console.log("belum login")}):this.isValidForm&&!0===this.toggle&&(this.confirmationService.confirm({icon:"./assets/img/gif/Scan-Finger-GEN2.gif",acceptIcon:null,rejectIcon:null,rejectVisible:!1,acceptVisible:!1,acceptLabel:"YA",rejectLabel:"BATAL",header:"",message:"Scan jari anda pada perangkat",closable:!0,accept:()=>{}}),this.loading())}wait(l){return new Promise(n=>{setTimeout(n,l)})}onKlik(){"block"===document.getElementById("ifYes").style.display?(document.getElementById("ifYes").style.display="none",this.toggle=!0,this.loginType="2",this.fingerTemplate=y.a.fingerTemplate):(document.getElementById("ifYes").style.display="block",this.toggle=!1,this.loginType="1",this.fingerTemplate=""),this.validateUsername(),this.validateForm()}showPassword(){this.show=!0}hidePassword(){this.show=!1}showAppli(){this.view=!0}hideAppli(){this.view=!1}ngOnInit(){void 0!==this.credentials?(this.username=this.credentials.user_domain,this.name=this.credentials.user_name,this.isValidForm=!0,""!==this.credentials.avatar?(this.avatar=this.credentials.avatar,this.changeImg=!1,this.change=!0):(this.changeImg=!0,this.change=!0)):(this.username="",this.name=""),this.onKlik()}validateUsername(){RegExp(/^[\w-.]*$/),this.isUsernameValid=this.username.length>=3}validatePassword(){RegExp(/^[yz]*x[xyz]*$/),this.isPasswordValid=this.password.length>=6}validateAppli(){RegExp(/^[yz]*x[xyz]*$/),this.isAppliValid=this.appli1.length>=8}validateForm(){this.isValidForm=!!(this.isUsernameValid&&this.isPasswordValid&&this.isAppliValid||this.isUsernameValid&&"none"===document.getElementById("ifYes").style.display)}onKey(l,n){"username"===n?(this.username=l.target.value,this.validateUsername(),this.validateForm()):"password"===n?(this.password=l.target.value,this.validateUsername(),this.validatePassword(),this.validateForm()):"appli1"===n&&(this.appli1=l.target.value,this.validateUsername(),this.validatePassword(),this.validateAppli(),this.validateForm())}encryptPass(l){let n=l.split("").map(l=>l.charCodeAt(0));console.log(n);let e={str:"",toString:function(){return this.str}};var t=parseInt(h.a.encryptKeyHexaString,16);for(let u=0;u<n.length;u++){console.log(255&n[u]^t);let l=255&n[u]^t;l<16&&(console.log(l),(l=>(l.str=l.str.concat("0"),l))(e)),(n=>(n.str=n.str.concat(l.toString(16)),n))(e)}return e.toString()}}var w=e("iInd"),x=e("pX01"),B=t.zb({encapsulation:2,styles:[],data:{}});function k(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","w-full rounded-full align-middle border-none "],["src","./assets/img/cs.png"],["style","width: 72px; height: 72px;"]],null,null,null,null,null))],null,null)}function A(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,0,"img",[["class","w-full rounded-full align-middle border-none"],["style","width: 72px; height: 72px;"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.Fb(1,"data:image/png;base64,",n.component.avatar,""))}))}function I(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,67,"main",[],null,null,null,null,null)),(l()(),t.Bb(1,0,null,null,66,"section",[],null,null,null,null,null)),(l()(),t.Bb(2,0,null,null,65,"div",[["class","w-full"],["style","\n    margin-top: 31px;\n    margin-bottom: 31px;\n"]],null,null,null,null,null)),(l()(),t.Bb(3,0,null,null,64,"div",[["class","flex justify-center"]],null,null,null,null,null)),(l()(),t.Bb(4,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Bb(5,0,null,null,0,"img",[["class","object-scale-down w-full"],["src","./assets/img/login/banner_left.png"]],null,null,null,null,null)),(l()(),t.Bb(6,0,null,null,59,"div",[["class","flex flex-col items-center bg-white"],["style","width: 41.6666%;"]],null,null,null,null,null)),(l()(),t.Bb(7,0,null,null,58,"div",[["class","flex flex-col items-center w-full h-full"]],null,null,null,null,null)),(l()(),t.Bb(8,0,null,null,0,"div",[["class","flex flex-2 text-gray-700 text-center bg-blue-bca"],["style","height: 12px; width: 84px;"]],null,null,null,null,null)),(l()(),t.Bb(9,0,null,null,55,"form",[["class","flex flex-col h-full"],["novalidate",""],["style","width: 53.5%"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var u=!0;return"submit"===n&&(u=!1!==t.Nb(l,14).onSubmit(e)&&u),"reset"===n&&(u=!1!==t.Nb(l,14).onReset()&&u),u}),null,null)),t.Rb(512,null,s.v,s.w,[t.x,t.y,t.n,t.L]),t.Ab(11,278528,null,0,s.i,[s.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Pb(12,{"mt-64":0,"mt-21":1}),t.Ab(13,16384,null,0,a.u,[],null,null),t.Ab(14,4210688,null,0,a.n,[[8,null],[8,null]],null,null),t.Rb(2048,null,a.c,null,[a.n]),t.Ab(16,16384,null,0,a.m,[[4,a.c]],null,null),(l()(),t.Bb(17,0,null,null,5,"div",[["class","flex justify-center"]],null,null,null,null,null)),(l()(),t.Bb(18,0,null,null,4,"div",[["class","items-center text-center font-base text-gray-700"],["style","margin-bottom: 8px;"]],null,null,null,null,null)),(l()(),t.qb(16777216,null,null,1,null,k)),t.Ab(20,16384,null,0,s.k,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,null,1,null,A)),t.Ab(22,16384,null,0,s.k,[t.X,t.T],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(23,0,null,null,1,"div",[["class","text-center text-gray-bca font-weight-400 font-20"]],null,null,null,null,null)),(l()(),t.Ub(-1,null,[" Selamat Datang, "])),(l()(),t.Bb(25,0,null,null,2,"div",[["class","text-center text-blue-bca font-weight-600 font-28"],["ng-init","change"]],null,null,null,null,null)),(l()(),t.Bb(26,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ub(27,null,["",""])),(l()(),t.Bb(28,0,null,null,25,"div",[["class","w-full"]],null,null,null,null,null)),(l()(),t.Bb(29,0,null,null,6,"div",[["class","py-2 pt-10"]],null,null,null,null,null)),(l()(),t.Bb(30,0,null,null,5,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),t.Bb(31,0,null,null,1,"label",[["class","text-gray-bca-soft font-weight-600 font-14 "],["for","username"],["style","padding-bottom: 4px;letter-spacing: 0.02em;line-height: 19px;"]],null,null,null,null,null)),(l()(),t.Ub(-1,null,["User Domain"])),(l()(),t.Bb(33,0,null,null,2,"input",[["autocomplete","off"],["class","block px-3 py-2 border-radius-4 w-full\n                    bg-white text-border-solid placeholder-c4\n                    focus:text-gray-55\n                    focus:text-userdomain-focus\n                    font-weight-400 font-16"],["id","username"],["maxlength","8"],["minlength","3"],["pKeyFilter","alphanum"],["placeholder","input user domain"],["required",""],["style","height: 48px;"],["type","text"]],[[8,"value",0]],[[null,"keyup"],[null,"input"],[null,"keypress"],[null,"paste"]],(function(l,n,e){var u=!0,i=l.component;return"input"===n&&(u=!1!==t.Nb(l,35).onInput(e)&&u),"keypress"===n&&(u=!1!==t.Nb(l,35).onKeyPress(e)&&u),"paste"===n&&(u=!1!==t.Nb(l,35).onPaste(e)&&u),"keyup"===n&&(u=!1!==i.onKey(e,"username")&&u),u}),null,null)),t.Rb(5120,null,a.i,(function(l){return[l]}),[o.a]),t.Ab(35,16384,null,0,o.a,[t.n],{pattern:[0,"pattern"]},null),(l()(),t.Bb(36,0,null,null,14,"div",[["class","py-2"],["id","ifYes"],["style","display:block"]],null,null,null,null,null)),(l()(),t.Bb(37,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t.Bb(38,0,null,null,1,"span",[["class","text-gray-bca-soft font-weight-600 font-14"],["style","padding-bottom: 4px;letter-spacing: 0.02em;line-height: 19px;"]],null,null,null,null,null)),(l()(),t.Ub(-1,null,["Password"])),(l()(),t.Bb(40,0,null,null,3,"div",[["class","relative"]],null,null,null,null,null)),(l()(),t.Bb(41,0,null,null,0,"input",[["class","block px-3 py-2 border-radius-4 w-full\n                      bg-white text-border-solid placeholder-c4\n                      focus:text-gray-55\n                      focus:outline-none\n                      font-weight-400 font-16"],["id","password"],["minlength","6"],["placeholder","input password"],["required",""],["style","height: 48px;"]],[[8,"type",0]],[[null,"keyup"]],(function(l,n,e){var t=!0;return"keyup"===n&&(t=!1!==l.component.onKey(e,"password")&&t),t}),null,null)),(l()(),t.Bb(42,0,null,null,1,"div",[["class","absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-metode-verifikasi"]],null,null,null,null,null)),(l()(),t.Bb(43,0,null,null,0,"i",[["style","height: 28px;"]],[[8,"className",0]],[[null,"mousedown"],[null,"mouseup"]],(function(l,n,e){var t=!0,u=l.component;return"mousedown"===n&&(t=!1!==u.showPassword()&&t),"mouseup"===n&&(t=!1!==u.hidePassword()&&t),t}),null,null)),(l()(),t.Bb(44,0,null,null,6,"div",[["class","py-4"]],null,null,null,null,null)),(l()(),t.Bb(45,0,null,null,1,"span",[["class","text-gray-bca-soft font-weight-600 font-14"],["style","padding-bottom: 4px;letter-spacing: 0.02em;line-height: 19px;"]],null,null,null,null,null)),(l()(),t.Ub(-1,null,["Appli 1"])),(l()(),t.Bb(47,0,null,null,3,"div",[["class","relative"]],null,null,null,null,null)),(l()(),t.Bb(48,0,null,null,0,"input",[["class","block px-3 py-2 border-radius-4 w-full\n                      bg-white text-border-solid placeholder-c4\n                      focus:text-gray-55\n                      focus:outline-none\n                      font-weight-400 font-16"],["id","appli1"],["maxlength","8"],["placeholder","input appli 1"],["required",""],["style","height: 48px;"]],[[8,"type",0]],[[null,"keyup"]],(function(l,n,e){var t=!0;return"keyup"===n&&(t=!1!==l.component.onKey(e,"appli1")&&t),t}),null,null)),(l()(),t.Bb(49,0,null,null,1,"div",[["class","absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-metode-verifikasi"]],null,null,null,null,null)),(l()(),t.Bb(50,0,null,null,0,"i",[["style","height: 28px;"]],[[8,"className",0]],[[null,"mousedown"],[null,"mouseup"]],(function(l,n,e){var t=!0,u=l.component;return"mousedown"===n&&(t=!1!==u.showAppli()&&t),"mouseup"===n&&(t=!1!==u.hideAppli()&&t),t}),null,null)),(l()(),t.Bb(51,0,null,null,2,"div",[["class","flex-col justify-center mt-4"]],null,null,null,null,null)),(l()(),t.Bb(52,0,null,null,1,"q-button",[["label","Sign In"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onSubmit()&&t),t}),p,c)),t.Ab(53,49152,null,0,r.a,[],{label:[0,"label"],disabled:[1,"disabled"]},null),(l()(),t.Bb(54,0,null,null,2,"div",[["class","mx-auto -my-6 pb-1 pt-10 text-center"]],null,null,null,null,null)),(l()(),t.Bb(55,0,null,null,1,"span",[["class","text-center  text-metode-verifikasi font-weight-400 font-14"]],null,null,null,null,null)),(l()(),t.Ub(-1,null,["atau masuk dengan"])),(l()(),t.Bb(57,0,null,null,3,"div",[["class","flex items-center w-full mt-2 mx-auto max-w-lg"]],null,null,null,null,null)),(l()(),t.Bb(58,0,null,null,0,"div",[["class","w-1/2 px-3 pt-4  border-t"],["style","border-color: #c4c4c4;"]],null,null,null,null,null)),(l()(),t.Bb(59,0,null,null,0,"div",[["class","w-full px-3 pt-4"]],null,null,null,null,null)),(l()(),t.Bb(60,0,null,null,0,"div",[["class","w-1/2 px-3 pt-4  border-t"],["style","border-color: #c4c4c4;"]],null,null,null,null,null)),(l()(),t.Bb(61,0,null,null,3,"div",[["class","w-full"]],null,null,null,null,null)),(l()(),t.Bb(62,0,null,null,2,"button",[["class","bg-transparant mt-4 text-blue-bca font-16 active:bg-gray-700 font-weight-600 uppercase px-6 py-3 rounded-full  mr-1 mb-1 w-full button-border-solid-da focus:outline-none"],["ng-init","toggle"],["style","transition: all 0.15s ease 0s;"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.onKlik()&&t),t}),null,null)),(l()(),t.Bb(63,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Ub(64,null,["",""])),(l()(),t.Bb(65,0,null,null,0,"div",[["class","flex-2 text-gray-700 text-center bg-blue-bca "],["style","height: 12px; width: 53.5%"]],null,null,null,null,null)),(l()(),t.Bb(66,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t.Bb(67,0,null,null,0,"img",[["class","object-scale-down w-full"],["src","./assets/img/login/banner_right.png"]],null,null,null,null,null))],(function(l,n){var e=n.component,t=l(n,12,0,e.toggle,!e.toggle);l(n,11,0,"flex flex-col h-full",t),l(n,20,0,e.changeImg),l(n,22,0,!e.changeImg),l(n,35,0,"alphanum"),l(n,53,0,"Sign In",!e.isValidForm)}),(function(l,n){var e=n.component;l(n,9,0,t.Nb(n,16).ngClassUntouched,t.Nb(n,16).ngClassTouched,t.Nb(n,16).ngClassPristine,t.Nb(n,16).ngClassDirty,t.Nb(n,16).ngClassValid,t.Nb(n,16).ngClassInvalid,t.Nb(n,16).ngClassPending),l(n,27,0,e.change?e.name:""),l(n,33,0,e.username),l(n,41,0,e.show?"text":"password"),l(n,43,0,e.show?"fa fa-eye":"fa fa-eye-slash"),l(n,48,0,e.view?"text":"password"),l(n,50,0,e.view?"fa fa-eye":"fa fa-eye-slash"),l(n,64,0,e.toggle?"Password":"Finger Scan")}))}function S(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,1,"app-login",[],null,null,null,I,B)),t.Ab(1,114688,null,0,v,[w.k,g.a,x.a],null,null)],(function(l,n){l(n,1,0)}),null)}var L=t.xb("app-login",v,S,{},{},[]);class P{}var C=e("c/fn");e.d(n,"LoginModuleNgFactory",(function(){return U}));var U=t.yb(u,[],(function(l){return t.Kb([t.Lb(512,t.l,t.jb,[[8,[i.a,L]],[3,t.l],t.D]),t.Lb(4608,s.m,s.l,[t.z,[2,s.A]]),t.Lb(4608,a.t,a.t,[]),t.Lb(4608,a.e,a.e,[]),t.Lb(1073742336,s.b,s.b,[]),t.Lb(1073742336,w.l,w.l,[[2,w.q],[2,w.k]]),t.Lb(1073742336,P,P,[]),t.Lb(1073742336,a.s,a.s,[]),t.Lb(1073742336,a.f,a.f,[]),t.Lb(1073742336,a.q,a.q,[]),t.Lb(1073742336,r.c,r.c,[]),t.Lb(1073742336,C.b,C.b,[]),t.Lb(1073742336,o.b,o.b,[]),t.Lb(1073742336,u,u,[]),t.Lb(1024,w.i,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);