var __generator=this&&this.__generator||function(l,n){var t,e,u,i,s={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,e&&(u=2&i[0]?e.return:i[0]?e.throw||((u=e.return)&&u.call(e),0):e.next)&&!(u=u.call(e,i[1])).done)return u;switch(e=0,u&&(i=[2&i[0],u.value]),i[0]){case 0:case 1:u=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,e=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(u=(u=s.trys).length>0&&u[u.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!u||i[1]>u[0]&&i[1]<u[3])){s.label=i[1];break}if(6===i[0]&&s.label<u[1]){s.label=u[1],u=i;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(i);break}u[2]&&s.ops.pop(),s.trys.pop();continue}i=n.call(l,s)}catch(a){i=[6,a],e=0}finally{t=u=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QWy9:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),u=function(){},i=t("pMnS"),s=t("s7LF"),a=t("SVse"),o=t("dkDh"),r=t("ApLq"),c=e.zb({encapsulation:2,styles:[],data:{}});function b(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,3,"span",[],[[1,"aria-hidden",0]],null,null,null,null)),e.Rb(512,null,a.v,a.w,[e.x,e.y,e.n,e.L]),e.Ab(2,278528,null,0,a.i,[a.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Pb(3,{"ui-clickable":0,"ui-button-icon-left":1,"ui-button-icon-right":2})],(function(l,n){var t=n.component,e=t.icon,u=l(n,3,0,!0,"left"===t.iconPos,"right"===t.iconPos);l(n,2,0,e,u)}),(function(l,n){l(n,0,0,!0)}))}function d(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,9,"button",[],[[1,"type",0],[8,"disabled",0]],[[null,"click"],[null,"focus"],[null,"blur"]],(function(l,n,t){var e=!0,u=l.component;return"click"===n&&(e=!1!==u.onClick.emit(t)&&e),"focus"===n&&(e=!1!==u.onFocus.emit(t)&&e),"blur"===n&&(e=!1!==u.onBlur.emit(t)&&e),e}),null,null)),e.Rb(512,null,a.v,a.w,[e.x,e.y,e.n,e.L]),e.Ab(2,278528,null,0,a.i,[a.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Rb(512,null,a.x,a.y,[e.n,e.y,e.L]),e.Ab(4,278528,null,0,a.n,[a.x],{ngStyle:[0,"ngStyle"]},null),e.Mb(null,0),(l()(),e.qb(16777216,null,null,1,null,b)),e.Ab(7,16384,null,0,a.k,[e.X,e.T],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(8,0,null,null,1,"span",[["class","ui-button-text ui-clickable"]],[[1,"aria-hidden",0]],null,null,null,null)),(l()(),e.Ub(9,null,["",""]))],(function(l,n){var t=n.component;l(n,2,0,t.styleClass,t.disabled?"disable-button cursor-not-allowed text-white font-16 font-weight-700 uppercase px-6 py-3 rounded-full\n      shadow outline-none focus:outline-none mr-1 mb-1 w-full":"primary-blue  text-white active:bg-gray-700 font-16 font-weight-700 uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"),l(n,4,0,t.style),l(n,7,0,t.icon)}),(function(l,n){var t=n.component;l(n,0,0,t.type,t.disabled),l(n,8,0,t.icon&&!t.label),l(n,9,0,t.label||"ui-btn")}))}var p=t("mrSG"),h=t("AytR"),g=t("6CRC"),f=t("fSl4"),m=t("s2el");new f.a("LoginComponent");var y=function(){function l(l,n,t){var e=this;this.router=l,this.authenticationService=n,this.confirmationService=t,this.username="",this.password="",this.isUsernameValid=!1,this.isPasswordValid=!1,this.isValidForm=!1,this.userDomainKey="userdomain",this.change=!1,this.changeImg=!0,this.loading=function(){return p.a(e,void 0,void 0,(function(){var l=this;return __generator(this,(function(n){switch(n.label){case 0:return[4,this.wait(5e3)];case 1:return n.sent(),this.authenticationService.login(this.username,this.password).then((function(n){if(l.authenticationService.isLoggedIn){console.log("login");!1===l.authenticationService.isAuthenticated()?console.log(l.authenticationService.isAuthenticated()):l.router.navigate(["/"],{replaceUrl:!0})}else console.log("belum login")})),[2]}}))}))},this.show=!1,this.toggle=!1,m.a.hasItem(this.userDomainKey)&&(this.credentials=m.a.getItem("userdomain"))}return l.prototype.onSubmit=function(){var l=this;this.isValidForm&&!1===this.toggle?this.authenticationService.login(this.username,this.password).then((function(n){if(l.authenticationService.isLoggedIn){console.log("login");!1===l.authenticationService.isAuthenticated()?console.log(l.authenticationService.isAuthenticated()):l.router.navigate(["/"],{replaceUrl:!0})}else console.log("belum login")})):this.isValidForm&&!0===this.toggle&&(this.confirmationService.confirm({icon:"./assets/img/gif/Scan-Finger-GEN2.gif",acceptIcon:null,rejectIcon:null,rejectVisible:!1,acceptVisible:!1,acceptLabel:"YA",rejectLabel:"BATAL",header:"",message:"Scan jari anda pada perangkat",closable:!0,accept:function(){}}),this.loading())},l.prototype.wait=function(l){return new Promise((function(n){setTimeout(n,l)}))},l.prototype.onKlik=function(){"block"===document.getElementById("ifYes").style.display?(document.getElementById("ifYes").style.display="none",this.toggle=!0):(document.getElementById("ifYes").style.display="block",this.toggle=!1),this.validateUsername(),this.validateForm()},l.prototype.showPassword=function(){this.show=!0},l.prototype.hidePassword=function(){this.show=!1},l.prototype.ngOnInit=function(){void 0!==this.credentials?(this.username=this.credentials.user_domain,this.name=this.credentials.user_name,this.isValidForm=!0,""!==this.credentials.avatar?(this.avatar=this.credentials.avatar,this.changeImg=!1,this.change=!0):(this.changeImg=!0,this.change=!0)):(this.username="",this.name=""),this.onKlik()},l.prototype.validateUsername=function(){RegExp(/^[\w-.]*$/),this.isUsernameValid=this.username.length>=3},l.prototype.validatePassword=function(){RegExp(/^[yz]*x[xyz]*$/),this.isPasswordValid=this.password.length>=6},l.prototype.validateForm=function(){this.isValidForm=!!(this.isUsernameValid&&this.isPasswordValid||this.isUsernameValid&&"none"===document.getElementById("ifYes").style.display)},l.prototype.onKey=function(l,n){"username"===n?(this.username=l.target.value,this.validateUsername(),this.validateForm()):"password"===n&&(this.password=l.target.value,this.validateUsername(),this.validatePassword(),this.validateForm())},l.prototype.encryptPass=function(l){var n=l.split("").map((function(l){return l.charCodeAt(0)}));console.log(n);for(var t={str:"",toString:function(){return this.str}},e=parseInt(h.a.encryptKeyHexaString,16),u=function(l){console.log(255&n[l]^e);var u=255&n[l]^e;u<16&&(console.log(u),function(l){l.str=l.str.concat("0")}(t)),function(l){l.str=l.str.concat(u.toString(16))}(t)},i=0;i<n.length;i++)u(i);return t.toString()},l}(),v=t("iInd"),w=t("pX01"),x=e.zb({encapsulation:2,styles:[],data:{}});function B(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,0,"img",[["class","w-full rounded-full align-middle border-none "],["src","./assets/img/cs.png"],["style","width: 72px; height: 72px;"]],null,null,null,null,null))],null,null)}function k(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,0,"img",[["class","w-full rounded-full align-middle border-none"],["style","width: 72px; height: 72px;"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,e.Fb(1,"data:image/png;base64,",n.component.avatar,""))}))}function S(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,56,"main",[],null,null,null,null,null)),(l()(),e.Bb(1,0,null,null,55,"section",[],null,null,null,null,null)),(l()(),e.Bb(2,0,null,null,54,"div",[["class","w-full"],["style","\n    margin-top: 31px;\n    margin-bottom: 31px;\n"]],null,null,null,null,null)),(l()(),e.Bb(3,0,null,null,53,"div",[["class","flex justify-center"]],null,null,null,null,null)),(l()(),e.Bb(4,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Bb(5,0,null,null,0,"img",[["class","object-scale-down w-full"],["src","./assets/img/login/banner_left.png"]],null,null,null,null,null)),(l()(),e.Bb(6,0,null,null,48,"div",[["class","flex flex-col items-center bg-white"],["style","width: 41.6666%;"]],null,null,null,null,null)),(l()(),e.Bb(7,0,null,null,47,"div",[["class","flex flex-col items-center w-full h-full"]],null,null,null,null,null)),(l()(),e.Bb(8,0,null,null,0,"div",[["class","flex flex-2 text-gray-700 text-center bg-blue-bca"],["style","height: 12px; width: 84px;"]],null,null,null,null,null)),(l()(),e.Bb(9,0,null,null,44,"form",[["class","flex flex-col mt-20 h-full"],["novalidate",""],["style","width: 53.5%"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,t){var u=!0;return"submit"===n&&(u=!1!==e.Nb(l,11).onSubmit(t)&&u),"reset"===n&&(u=!1!==e.Nb(l,11).onReset()&&u),u}),null,null)),e.Ab(10,16384,null,0,s.u,[],null,null),e.Ab(11,4210688,null,0,s.n,[[8,null],[8,null]],null,null),e.Rb(2048,null,s.c,null,[s.n]),e.Ab(13,16384,null,0,s.m,[[4,s.c]],null,null),(l()(),e.Bb(14,0,null,null,5,"div",[["class","flex justify-center"]],null,null,null,null,null)),(l()(),e.Bb(15,0,null,null,4,"div",[["class","mb-5 pb-1  items-center text-center font-base text-gray-700"]],null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,B)),e.Ab(17,16384,null,0,a.k,[e.X,e.T],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,null,1,null,k)),e.Ab(19,16384,null,0,a.k,[e.X,e.T],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(20,0,null,null,1,"div",[["class","text-center text-gray-bca font-weight-400 font-20"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,[" Selamat Datang, "])),(l()(),e.Bb(22,0,null,null,2,"div",[["class","text-center text-blue-bca font-weight-600 font-28"],["ng-init","change"]],null,null,null,null,null)),(l()(),e.Bb(23,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ub(24,null,["",""])),(l()(),e.Bb(25,0,null,null,17,"div",[["class","w-full"]],null,null,null,null,null)),(l()(),e.Bb(26,0,null,null,6,"div",[["class","py-2 pt-10"]],null,null,null,null,null)),(l()(),e.Bb(27,0,null,null,5,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),e.Bb(28,0,null,null,1,"label",[["class","text-gray-bca-soft font-weight-600 font-14 "],["for","username"],["style","padding-bottom: 4px;letter-spacing: 0.02em;line-height: 19px;"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["User Domain"])),(l()(),e.Bb(30,0,null,null,2,"input",[["autocomplete","off"],["class","block px-3 py-2 border-radius-4 w-full\n                    bg-white text-border-solid placeholder-c4\n                    focus:text-gray-55\n                    focus:text-userdomain-focus\n                    font-weight-400 font-16"],["id","username"],["maxlength","8"],["minlength","3"],["pKeyFilter","alphanum"],["placeholder","input user domain"],["required",""],["style","height: 48px;"],["type","text"]],[[8,"value",0]],[[null,"keyup"],[null,"input"],[null,"keypress"],[null,"paste"]],(function(l,n,t){var u=!0,i=l.component;return"input"===n&&(u=!1!==e.Nb(l,32).onInput(t)&&u),"keypress"===n&&(u=!1!==e.Nb(l,32).onKeyPress(t)&&u),"paste"===n&&(u=!1!==e.Nb(l,32).onPaste(t)&&u),"keyup"===n&&(u=!1!==i.onKey(t,"username")&&u),u}),null,null)),e.Rb(5120,null,s.i,(function(l){return[l]}),[o.a]),e.Ab(32,16384,null,0,o.a,[e.n],{pattern:[0,"pattern"]},null),(l()(),e.Bb(33,0,null,null,6,"div",[["class","py-2"],["id","ifYes"],["style","display:block"]],null,null,null,null,null)),(l()(),e.Bb(34,0,null,null,1,"span",[["class","text-gray-bca-soft font-weight-600 font-14"],["style","padding-bottom: 4px;letter-spacing: 0.02em;line-height: 19px;"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Password"])),(l()(),e.Bb(36,0,null,null,3,"div",[["class","relative"]],null,null,null,null,null)),(l()(),e.Bb(37,0,null,null,0,"input",[["class","block px-3 py-2 border-radius-4 w-full\n                    bg-white text-border-solid placeholder-c4\n                    focus:text-gray-55\n                    focus:outline-none\n                    font-weight-400 font-16"],["id","password"],["minlength","6"],["placeholder","input password"],["required",""],["style","height: 48px;"]],[[8,"type",0]],[[null,"keyup"]],(function(l,n,t){var e=!0;return"keyup"===n&&(e=!1!==l.component.onKey(t,"password")&&e),e}),null,null)),(l()(),e.Bb(38,0,null,null,1,"div",[["class","absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-metode-verifikasi"]],null,null,null,null,null)),(l()(),e.Bb(39,0,null,null,0,"i",[["style","height: 28px;"]],[[8,"className",0]],[[null,"mousedown"],[null,"mouseup"]],(function(l,n,t){var e=!0,u=l.component;return"mousedown"===n&&(e=!1!==u.showPassword()&&e),"mouseup"===n&&(e=!1!==u.hidePassword()&&e),e}),null,null)),(l()(),e.Bb(40,0,null,null,2,"div",[["class","flex-col justify-center mt-4"]],null,null,null,null,null)),(l()(),e.Bb(41,0,null,null,1,"q-button",[["label","Sign In"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e}),d,c)),e.Ab(42,49152,null,0,r.a,[],{label:[0,"label"],disabled:[1,"disabled"]},null),(l()(),e.Bb(43,0,null,null,2,"div",[["class","mx-auto -my-6 pb-1 pt-10 text-center"]],null,null,null,null,null)),(l()(),e.Bb(44,0,null,null,1,"span",[["class","text-center  text-metode-verifikasi font-weight-400 font-14"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["atau masuk dengan"])),(l()(),e.Bb(46,0,null,null,3,"div",[["class","flex items-center w-full mt-2 mx-auto max-w-lg"]],null,null,null,null,null)),(l()(),e.Bb(47,0,null,null,0,"div",[["class","w-1/2 px-3 pt-4  border-t"],["style","border-color: #c4c4c4;"]],null,null,null,null,null)),(l()(),e.Bb(48,0,null,null,0,"div",[["class","w-full px-3 pt-4"]],null,null,null,null,null)),(l()(),e.Bb(49,0,null,null,0,"div",[["class","w-1/2 px-3 pt-4  border-t"],["style","border-color: #c4c4c4;"]],null,null,null,null,null)),(l()(),e.Bb(50,0,null,null,3,"div",[["class","w-full"]],null,null,null,null,null)),(l()(),e.Bb(51,0,null,null,2,"button",[["class","bg-transparant mt-4 text-blue-bca font-16 active:bg-gray-700 font-weight-600 uppercase px-6 py-3 rounded-full  mr-1 mb-1 w-full button-border-solid-da focus:outline-none"],["ng-init","toggle"],["style","transition: all 0.15s ease 0s;"],["type","button"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.onKlik()&&e),e}),null,null)),(l()(),e.Bb(52,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ub(53,null,["",""])),(l()(),e.Bb(54,0,null,null,0,"div",[["class","flex-2 text-gray-700 text-center bg-blue-bca "],["style","height: 12px; width: 53.5%"]],null,null,null,null,null)),(l()(),e.Bb(55,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Bb(56,0,null,null,0,"img",[["class","object-scale-down w-full"],["src","./assets/img/login/banner_right.png"]],null,null,null,null,null))],(function(l,n){var t=n.component;l(n,17,0,t.changeImg),l(n,19,0,!t.changeImg),l(n,32,0,"alphanum"),l(n,42,0,"Sign In",!t.isValidForm)}),(function(l,n){var t=n.component;l(n,9,0,e.Nb(n,13).ngClassUntouched,e.Nb(n,13).ngClassTouched,e.Nb(n,13).ngClassPristine,e.Nb(n,13).ngClassDirty,e.Nb(n,13).ngClassValid,e.Nb(n,13).ngClassInvalid,e.Nb(n,13).ngClassPending),l(n,24,0,t.change?t.name:""),l(n,30,0,t.username),l(n,37,0,t.show?"text":"password"),l(n,39,0,t.show?"fa fa-eye":"fa fa-eye-slash"),l(n,53,0,t.toggle?"Password":"Finger Scan")}))}var I=e.xb("app-login",y,(function(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,1,"app-login",[],null,null,null,S,x)),e.Ab(1,114688,null,0,y,[v.k,g.a,w.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),L=function(){},A=t("c/fn");t.d(n,"LoginModuleNgFactory",(function(){return P}));var P=e.yb(u,[],(function(l){return e.Kb([e.Lb(512,e.l,e.jb,[[8,[i.a,I]],[3,e.l],e.D]),e.Lb(4608,a.m,a.l,[e.z,[2,a.A]]),e.Lb(4608,s.t,s.t,[]),e.Lb(4608,s.e,s.e,[]),e.Lb(1073742336,a.b,a.b,[]),e.Lb(1073742336,v.l,v.l,[[2,v.q],[2,v.k]]),e.Lb(1073742336,L,L,[]),e.Lb(1073742336,s.s,s.s,[]),e.Lb(1073742336,s.f,s.f,[]),e.Lb(1073742336,s.q,s.q,[]),e.Lb(1073742336,r.c,r.c,[]),e.Lb(1073742336,A.b,A.b,[]),e.Lb(1073742336,o.b,o.b,[]),e.Lb(1073742336,u,u,[]),e.Lb(1024,v.i,(function(){return[[{path:"",component:y}]]}),[])])}))}}]);