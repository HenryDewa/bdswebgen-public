(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QWy9:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var i=u("pMnS"),s=u("s7LF"),a=u("SVse"),o=u("dkDh"),r=u("ApLq"),c=e.zb({encapsulation:2,styles:[],data:{}});function d(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,3,"span",[],[[1,"aria-hidden",0]],null,null,null,null)),e.Rb(512,null,a.v,a.w,[e.x,e.y,e.n,e.L]),e.Ab(2,278528,null,0,a.i,[a.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Pb(3,{"ui-clickable":0,"ui-button-icon-left":1,"ui-button-icon-right":2})],(function(l,n){var u=n.component,e=u.icon,t=l(n,3,0,!0,"left"===u.iconPos,"right"===u.iconPos);l(n,2,0,e,t)}),(function(l,n){l(n,0,0,!0)}))}function b(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,9,"button",[],[[1,"type",0],[8,"disabled",0]],[[null,"click"],[null,"focus"],[null,"blur"]],(function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==t.onClick.emit(u)&&e),"focus"===n&&(e=!1!==t.onFocus.emit(u)&&e),"blur"===n&&(e=!1!==t.onBlur.emit(u)&&e),e}),null,null)),e.Rb(512,null,a.v,a.w,[e.x,e.y,e.n,e.L]),e.Ab(2,278528,null,0,a.i,[a.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Rb(512,null,a.x,a.y,[e.n,e.y,e.L]),e.Ab(4,278528,null,0,a.n,[a.x],{ngStyle:[0,"ngStyle"]},null),e.Mb(null,0),(l()(),e.qb(16777216,null,null,1,null,d)),e.Ab(7,16384,null,0,a.k,[e.X,e.T],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(8,0,null,null,1,"span",[["class","ui-button-text ui-clickable"]],[[1,"aria-hidden",0]],null,null,null,null)),(l()(),e.Ub(9,null,["",""]))],(function(l,n){var u=n.component;l(n,2,0,u.styleClass,u.disabled?"disable-button cursor-not-allowed text-white font-16 font-weight-700 uppercase px-6 py-3 rounded-full\n      shadow outline-none focus:outline-none mr-1 mb-1 w-full":"primary-blue  text-white active:bg-gray-700 font-16 font-weight-700 uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"),l(n,4,0,u.style),l(n,7,0,u.icon)}),(function(l,n){var u=n.component;l(n,0,0,u.type,u.disabled),l(n,8,0,u.icon&&!u.label),l(n,9,0,u.label||"ui-btn")}))}var p=u("mrSG"),h=u("AytR"),g=u("6CRC"),m=u("fSl4"),f=u("s2el");new m.a("LoginComponent");class v{constructor(l,n,u){this.router=l,this.authenticationService=n,this.confirmationService=u,this.username="",this.password="",this.appli1="",this.isUsernameValid=!1,this.isPasswordValid=!1,this.isAppliValid=!1,this.isValidForm=!1,this.userDomainKey="userdomain",this.change=!1,this.changeImg=!0,this.loading=()=>p.a(this,void 0,void 0,(function*(){yield this.wait(5e3),this.authenticationService.login(this.username,this.password,this.appli1).then(l=>{if(this.authenticationService.isLoggedIn){console.log("login");const l="/";!1===this.authenticationService.isAuthenticated()?console.log(this.authenticationService.isAuthenticated()):this.router.navigate([l],{replaceUrl:!0})}else console.log("belum login")})})),this.show=!1,this.toggle=!1,this.view=!1,f.a.hasItem(this.userDomainKey)&&(this.credentials=f.a.getItem("userdomain"))}onSubmit(){this.isValidForm&&!1===this.toggle?this.authenticationService.login(this.username,this.password,this.appli1).then(l=>{if(this.authenticationService.isLoggedIn){console.log("login");const l="/";!1===this.authenticationService.isAuthenticated()?console.log(this.authenticationService.isAuthenticated()):this.router.navigate([l],{replaceUrl:!0})}else console.log("belum login")}):this.isValidForm&&!0===this.toggle&&(this.confirmationService.confirm({icon:"./assets/img/gif/Scan-Finger-GEN2.gif",acceptIcon:null,rejectIcon:null,rejectVisible:!1,acceptVisible:!1,acceptLabel:"YA",rejectLabel:"BATAL",header:"",message:"Scan jari anda pada perangkat",closable:!0,accept:()=>{}}),this.loading())}wait(l){return new Promise(n=>{setTimeout(n,l)})}onKlik(){"block"===document.getElementById("ifYes").style.display?(document.getElementById("ifYes").style.display="none",this.toggle=!0):(document.getElementById("ifYes").style.display="block",this.toggle=!1),this.validateUsername(),this.validateForm()}showPassword(){this.show=!0}hidePassword(){this.show=!1}showAppli(){this.view=!0}hideAppli(){this.view=!1}ngOnInit(){void 0!==this.credentials?(this.username=this.credentials.user_domain,this.name=this.credentials.user_name,this.isValidForm=!0,""!==this.credentials.avatar?(this.avatar=this.credentials.avatar,this.changeImg=!1,this.change=!0):(this.changeImg=!0,this.change=!0)):(this.username="",this.name=""),this.onKlik()}validateUsername(){RegExp(/^[\w-.]*$/),this.isUsernameValid=this.username.length>=3}validatePassword(){RegExp(/^[yz]*x[xyz]*$/),this.isPasswordValid=this.password.length>=6}validateAppli(){RegExp(/^[yz]*x[xyz]*$/),this.isAppliValid=this.appli1.length>=8}validateForm(){this.isValidForm=!!(this.isUsernameValid&&this.isPasswordValid&&this.isAppliValid||this.isUsernameValid&&"none"===document.getElementById("ifYes").style.display)}onKey(l,n){"username"===n?(this.username=l.target.value,this.validateUsername(),this.validateForm()):"password"===n?(this.password=l.target.value,this.validateUsername(),this.validatePassword(),this.validateForm()):"appli1"===n&&(this.appli1=l.target.value,this.validateUsername(),this.validatePassword(),this.validateAppli(),this.validateForm())}encryptPass(l){let n=l.split("").map(l=>l.charCodeAt(0));console.log(n);let u={str:"",toString:function(){return this.str}};var e=parseInt(h.a.encryptKeyHexaString,16);for(let t=0;t<n.length;t++){console.log(255&n[t]^e);let l=255&n[t]^e;l<16&&(console.log(l),(l=>(l.str=l.str.concat("0"),l))(u)),(n=>(n.str=n.str.concat(l.toString(16)),n))(u)}return u.toString()}}var y=u("iInd"),w=u("pX01"),x=e.zb({encapsulation:2,styles:[],data:{}});function B(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,0,"img",[["class","w-full rounded-full align-middle border-none "],["src","./assets/img/cs.png"],["style","width: 72px; height: 72px;"]],null,null,null,null,null))],null,null)}function k(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,0,"img",[["class","w-full rounded-full align-middle border-none"],["style","width: 72px; height: 72px;"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,e.Fb(1,"data:image/png;base64,",n.component.avatar,""))}))}function A(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,64,"main",[],null,null,null,null,null)),(l()(),e.Bb(1,0,null,null,63,"section",[],null,null,null,null,null)),(l()(),e.Bb(2,0,null,null,62,"div",[["class","w-full"],["style","\n    margin-top: 31px;\n    margin-bottom: 31px;\n"]],null,null,null,null,null)),(l()(),e.Bb(3,0,null,null,61,"div",[["class","flex justify-center"]],null,null,null,null,null)),(l()(),e.Bb(4,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Bb(5,0,null,null,0,"img",[["class","object-scale-down w-full"],["src","./assets/img/login/banner_left.png"]],null,null,null,null,null)),(l()(),e.Bb(6,0,null,null,56,"div",[["class","flex flex-col items-center bg-white"],["style","width: 41.6666%;"]],null,null,null,null,null)),(l()(),e.Bb(7,0,null,null,55,"div",[["class","flex flex-col items-center w-full h-full"]],null,null,null,null,null)),(l()(),e.Bb(8,0,null,null,0,"div",[["class","flex flex-2 text-gray-700 text-center bg-blue-bca"],["style","height: 12px; width: 84px;"]],null,null,null,null,null)),(l()(),e.Bb(9,0,null,null,52,"form",[["class","flex flex-col mt-20 h-full"],["novalidate",""],["style","width: 53.5%"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Nb(l,11).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Nb(l,11).onReset()&&t),t}),null,null)),e.Ab(10,16384,null,0,s.u,[],null,null),e.Ab(11,4210688,null,0,s.n,[[8,null],[8,null]],null,null),e.Rb(2048,null,s.c,null,[s.n]),e.Ab(13,16384,null,0,s.m,[[4,s.c]],null,null),(l()(),e.Bb(14,0,null,null,5,"div",[["class","flex justify-center"]],null,null,null,null,null)),(l()(),e.Bb(15,0,null,null,4,"div",[["class","mb-5 pb-1  items-center text-center font-base text-gray-700"]],null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,B)),e.Ab(17,16384,null,0,a.k,[e.X,e.T],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,null,1,null,k)),e.Ab(19,16384,null,0,a.k,[e.X,e.T],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(20,0,null,null,1,"div",[["class","text-center text-gray-bca font-weight-400 font-20"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,[" Selamat Datang, "])),(l()(),e.Bb(22,0,null,null,2,"div",[["class","text-center text-blue-bca font-weight-600 font-28"],["ng-init","change"]],null,null,null,null,null)),(l()(),e.Bb(23,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ub(24,null,["",""])),(l()(),e.Bb(25,0,null,null,25,"div",[["class","w-full"]],null,null,null,null,null)),(l()(),e.Bb(26,0,null,null,6,"div",[["class","py-2 pt-10"]],null,null,null,null,null)),(l()(),e.Bb(27,0,null,null,5,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),e.Bb(28,0,null,null,1,"label",[["class","text-gray-bca-soft font-weight-600 font-14 "],["for","username"],["style","padding-bottom: 4px;letter-spacing: 0.02em;line-height: 19px;"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["User Domain"])),(l()(),e.Bb(30,0,null,null,2,"input",[["autocomplete","off"],["class","block px-3 py-2 border-radius-4 w-full\n                    bg-white text-border-solid placeholder-c4\n                    focus:text-gray-55\n                    focus:text-userdomain-focus\n                    font-weight-400 font-16"],["id","username"],["maxlength","8"],["minlength","3"],["pKeyFilter","alphanum"],["placeholder","input user domain"],["required",""],["style","height: 48px;"],["type","text"]],[[8,"value",0]],[[null,"keyup"],[null,"input"],[null,"keypress"],[null,"paste"]],(function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Nb(l,32).onInput(u)&&t),"keypress"===n&&(t=!1!==e.Nb(l,32).onKeyPress(u)&&t),"paste"===n&&(t=!1!==e.Nb(l,32).onPaste(u)&&t),"keyup"===n&&(t=!1!==i.onKey(u,"username")&&t),t}),null,null)),e.Rb(5120,null,s.i,(function(l){return[l]}),[o.a]),e.Ab(32,16384,null,0,o.a,[e.n],{pattern:[0,"pattern"]},null),(l()(),e.Bb(33,0,null,null,14,"div",[["class","py-2"],["id","ifYes"],["style","display:block"]],null,null,null,null,null)),(l()(),e.Bb(34,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),e.Bb(35,0,null,null,1,"span",[["class","text-gray-bca-soft font-weight-600 font-14"],["style","padding-bottom: 4px;letter-spacing: 0.02em;line-height: 19px;"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Password"])),(l()(),e.Bb(37,0,null,null,3,"div",[["class","relative"]],null,null,null,null,null)),(l()(),e.Bb(38,0,null,null,0,"input",[["class","block px-3 py-2 border-radius-4 w-full\n                      bg-white text-border-solid placeholder-c4\n                      focus:text-gray-55\n                      focus:outline-none\n                      font-weight-400 font-16"],["id","password"],["minlength","6"],["placeholder","input password"],["required",""],["style","height: 48px;"]],[[8,"type",0]],[[null,"keyup"]],(function(l,n,u){var e=!0;return"keyup"===n&&(e=!1!==l.component.onKey(u,"password")&&e),e}),null,null)),(l()(),e.Bb(39,0,null,null,1,"div",[["class","absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-metode-verifikasi"]],null,null,null,null,null)),(l()(),e.Bb(40,0,null,null,0,"i",[["style","height: 28px;"]],[[8,"className",0]],[[null,"mousedown"],[null,"mouseup"]],(function(l,n,u){var e=!0,t=l.component;return"mousedown"===n&&(e=!1!==t.showPassword()&&e),"mouseup"===n&&(e=!1!==t.hidePassword()&&e),e}),null,null)),(l()(),e.Bb(41,0,null,null,6,"div",[["class","py-4"]],null,null,null,null,null)),(l()(),e.Bb(42,0,null,null,1,"span",[["class","text-gray-bca-soft font-weight-600 font-14"],["style","padding-bottom: 4px;letter-spacing: 0.02em;line-height: 19px;"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Appli 1"])),(l()(),e.Bb(44,0,null,null,3,"div",[["class","relative"]],null,null,null,null,null)),(l()(),e.Bb(45,0,null,null,0,"input",[["class","block px-3 py-2 border-radius-4 w-full\n                      bg-white text-border-solid placeholder-c4\n                      focus:text-gray-55\n                      focus:outline-none\n                      font-weight-400 font-16"],["id","appli1"],["maxlength","8"],["placeholder","input appli 1"],["required",""],["style","height: 48px;"]],[[8,"type",0]],[[null,"keyup"]],(function(l,n,u){var e=!0;return"keyup"===n&&(e=!1!==l.component.onKey(u,"appli1")&&e),e}),null,null)),(l()(),e.Bb(46,0,null,null,1,"div",[["class","absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-metode-verifikasi"]],null,null,null,null,null)),(l()(),e.Bb(47,0,null,null,0,"i",[["style","height: 28px;"]],[[8,"className",0]],[[null,"mousedown"],[null,"mouseup"]],(function(l,n,u){var e=!0,t=l.component;return"mousedown"===n&&(e=!1!==t.showAppli()&&e),"mouseup"===n&&(e=!1!==t.hideAppli()&&e),e}),null,null)),(l()(),e.Bb(48,0,null,null,2,"div",[["class","flex-col justify-center mt-4"]],null,null,null,null,null)),(l()(),e.Bb(49,0,null,null,1,"q-button",[["label","Sign In"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e}),b,c)),e.Ab(50,49152,null,0,r.a,[],{label:[0,"label"],disabled:[1,"disabled"]},null),(l()(),e.Bb(51,0,null,null,2,"div",[["class","mx-auto -my-6 pb-1 pt-10 text-center"]],null,null,null,null,null)),(l()(),e.Bb(52,0,null,null,1,"span",[["class","text-center  text-metode-verifikasi font-weight-400 font-14"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["atau masuk dengan"])),(l()(),e.Bb(54,0,null,null,3,"div",[["class","flex items-center w-full mt-2 mx-auto max-w-lg"]],null,null,null,null,null)),(l()(),e.Bb(55,0,null,null,0,"div",[["class","w-1/2 px-3 pt-4  border-t"],["style","border-color: #c4c4c4;"]],null,null,null,null,null)),(l()(),e.Bb(56,0,null,null,0,"div",[["class","w-full px-3 pt-4"]],null,null,null,null,null)),(l()(),e.Bb(57,0,null,null,0,"div",[["class","w-1/2 px-3 pt-4  border-t"],["style","border-color: #c4c4c4;"]],null,null,null,null,null)),(l()(),e.Bb(58,0,null,null,3,"div",[["class","w-full"]],null,null,null,null,null)),(l()(),e.Bb(59,0,null,null,2,"button",[["class","bg-transparant mt-4 text-blue-bca font-16 active:bg-gray-700 font-weight-600 uppercase px-6 py-3 rounded-full  mr-1 mb-1 w-full button-border-solid-da focus:outline-none"],["ng-init","toggle"],["style","transition: all 0.15s ease 0s;"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onKlik()&&e),e}),null,null)),(l()(),e.Bb(60,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ub(61,null,["",""])),(l()(),e.Bb(62,0,null,null,0,"div",[["class","flex-2 text-gray-700 text-center bg-blue-bca "],["style","height: 12px; width: 53.5%"]],null,null,null,null,null)),(l()(),e.Bb(63,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Bb(64,0,null,null,0,"img",[["class","object-scale-down w-full"],["src","./assets/img/login/banner_right.png"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,17,0,u.changeImg),l(n,19,0,!u.changeImg),l(n,32,0,"alphanum"),l(n,50,0,"Sign In",!u.isValidForm)}),(function(l,n){var u=n.component;l(n,9,0,e.Nb(n,13).ngClassUntouched,e.Nb(n,13).ngClassTouched,e.Nb(n,13).ngClassPristine,e.Nb(n,13).ngClassDirty,e.Nb(n,13).ngClassValid,e.Nb(n,13).ngClassInvalid,e.Nb(n,13).ngClassPending),l(n,24,0,u.change?u.name:""),l(n,30,0,u.username),l(n,38,0,u.show?"text":"password"),l(n,40,0,u.show?"fa fa-eye":"fa fa-eye-slash"),l(n,45,0,u.view?"text":"password"),l(n,47,0,u.view?"fa fa-eye":"fa fa-eye-slash"),l(n,61,0,u.toggle?"Password":"Finger Scan")}))}function S(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,1,"app-login",[],null,null,null,A,x)),e.Ab(1,114688,null,0,v,[y.k,g.a,w.a],null,null)],(function(l,n){l(n,1,0)}),null)}var I=e.xb("app-login",v,S,{},{},[]);class L{}var P=u("c/fn");u.d(n,"LoginModuleNgFactory",(function(){return U}));var U=e.yb(t,[],(function(l){return e.Kb([e.Lb(512,e.l,e.jb,[[8,[i.a,I]],[3,e.l],e.D]),e.Lb(4608,a.m,a.l,[e.z,[2,a.A]]),e.Lb(4608,s.t,s.t,[]),e.Lb(4608,s.e,s.e,[]),e.Lb(1073742336,a.b,a.b,[]),e.Lb(1073742336,y.l,y.l,[[2,y.q],[2,y.k]]),e.Lb(1073742336,L,L,[]),e.Lb(1073742336,s.s,s.s,[]),e.Lb(1073742336,s.f,s.f,[]),e.Lb(1073742336,s.q,s.q,[]),e.Lb(1073742336,r.c,r.c,[]),e.Lb(1073742336,P.b,P.b,[]),e.Lb(1073742336,o.b,o.b,[]),e.Lb(1073742336,t,t,[]),e.Lb(1024,y.i,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);