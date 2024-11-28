(function(){"use strict";var e={364:function(e,t,i){var n=i(751),o=i(641);const l={class:"settings-page"},s={class:"notification-list"},a={class:"notification-item"},u={class:"notification-item"},c={class:"notification-item"},r={class:"notification-item"},p={class:"notification-item"},d={class:"notification-item"},v={class:"notification-item"},g={class:"notification-item"},f={class:"notification-item"},m={class:"button-container"};function h(e,t,i,h,k,b){const A=(0,o.g2)("ToggleSwitch"),L=(0,o.g2)("ActiveToggleSwitch");return(0,o.uX)(),(0,o.CE)("div",l,[t[23]||(t[23]=(0,o.Lk)("h1",null,"알림 설정",-1)),(0,o.Lk)("ul",s,[(0,o.Lk)("li",a,[t[13]||(t[13]=(0,o.Lk)("span",null,"새 메시지 알림",-1)),(0,o.bF)(A,{modelValue:k.settings.newMessageAlert,"onUpdate:modelValue":t[0]||(t[0]=e=>k.settings.newMessageAlert=e)},null,8,["modelValue"])]),(0,o.Lk)("li",u,[t[14]||(t[14]=(0,o.Lk)("span",null,"메시지 알림",-1)),(0,o.bF)(A,{modelValue:k.settings.messageAlert,"onUpdate:modelValue":t[1]||(t[1]=e=>k.settings.messageAlert=e)},null,8,["modelValue"])]),(0,o.Lk)("li",c,[t[15]||(t[15]=(0,o.Lk)("span",null,"소리",-1)),(0,o.bF)(L,{modelValue:k.settings.sound,"onUpdate:modelValue":t[2]||(t[2]=e=>k.settings.sound=e)},null,8,["modelValue"])]),(0,o.Lk)("li",r,[t[16]||(t[16]=(0,o.Lk)("span",null,"진동",-1)),(0,o.bF)(L,{modelValue:k.settings.vibration,"onUpdate:modelValue":t[3]||(t[3]=e=>k.settings.vibration=e)},null,8,["modelValue"])]),(0,o.Lk)("li",p,[t[17]||(t[17]=(0,o.Lk)("span",null,"진동 패턴",-1)),(0,o.bF)(A,{modelValue:k.settings.vibrationPattern,"onUpdate:modelValue":t[4]||(t[4]=e=>k.settings.vibrationPattern=e)},null,8,["modelValue"])]),(0,o.Lk)("li",d,[t[18]||(t[18]=(0,o.Lk)("span",null,"알림 표시",-1)),(0,o.bF)(A,{modelValue:k.settings.notificationDisplay,"onUpdate:modelValue":t[5]||(t[5]=e=>k.settings.notificationDisplay=e)},null,8,["modelValue"])]),(0,o.Lk)("li",v,[t[19]||(t[19]=(0,o.Lk)("span",null,"키워드 알림",-1)),(0,o.bF)(A,{modelValue:k.settings.keywordAlert,"onUpdate:modelValue":t[6]||(t[6]=e=>k.settings.keywordAlert=e)},null,8,["modelValue"])]),(0,o.Lk)("li",g,[t[20]||(t[20]=(0,o.Lk)("span",null,"답장 메시지 알림",-1)),(0,o.bF)(A,{modelValue:k.settings.replyMessageAlert,"onUpdate:modelValue":t[7]||(t[7]=e=>k.settings.replyMessageAlert=e)},null,8,["modelValue"])]),(0,o.Lk)("li",f,[t[21]||(t[21]=(0,o.Lk)("span",null,"보이스룸 알림",-1)),(0,o.bF)(L,{modelValue:k.settings.voiceRoomAlert,"onUpdate:modelValue":t[8]||(t[8]=e=>k.settings.voiceRoomAlert=e)},null,8,["modelValue"])])]),(0,o.Lk)("div",m,[(0,o.Lk)("button",{class:"save-button",onClick:t[9]||(t[9]=(...e)=>b.saveSettings&&b.saveSettings(...e))}," 저장 ")]),k.showPopup?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"popup-overlay",onClick:t[12]||(t[12]=(...e)=>b.closePopup&&b.closePopup(...e))},[(0,o.Lk)("div",{class:"popup",onClick:t[11]||(t[11]=(0,n.D$)((()=>{}),["stop"]))},[t[22]||(t[22]=(0,o.Lk)("p",null,"설정이 저장되었습니다.",-1)),(0,o.Lk)("button",{class:"popup-close-button",onClick:t[10]||(t[10]=(...e)=>b.closePopup&&b.closePopup(...e))}," 확인 ")])])):(0,o.Q3)("",!0)])}var k=i(33);const b={class:"switch-container"};function A(e,t,i,n,l,s){return(0,o.uX)(),(0,o.CE)("div",b,[(0,o.Lk)("div",{class:(0,k.C4)(["switch",{active:l.isActive}]),onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},t[1]||(t[1]=[(0,o.Lk)("div",{class:"toggle"},null,-1)]),2)])}var L={props:{value:{type:Boolean,default:!1}},data(){return{isActive:this.value}},watch:{value(e){this.isActive=e}},methods:{toggle(){this.isActive=!this.isActive,this.$emit("input",this.isActive)}}},w=i(262);const V=(0,w.A)(L,[["render",A],["__scopeId","data-v-ded09c66"]]);var y=V;const C={class:"switch-container"};function P(e,t,i,n,l,s){return(0,o.uX)(),(0,o.CE)("div",C,[(0,o.Lk)("div",{class:(0,k.C4)(["switch",{active:l.isActive}]),onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},t[1]||(t[1]=[(0,o.Lk)("div",{class:"toggle"},null,-1)]),2)])}var O={props:{value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},watch:{value(e){this.isActive=e}},methods:{toggle(){this.isActive=!this.isActive,this.$emit("input",this.isActive)}}};const F=(0,w.A)(O,[["render",P],["__scopeId","data-v-39874332"]]);var U=F,j={components:{ToggleSwitch:y,ActiveToggleSwitch:U},data(){return{settings:{newMessageAlert:!1,messageAlert:!1,sound:!0,vibration:!0,vibrationPattern:!1,notificationDisplay:!1,keywordAlert:!1,replyMessageAlert:!1,voiceRoomAlert:!0},showPopup:!1}},methods:{saveSettings(){console.log("저장된 설정:",this.settings),this.showPopup=!0},closePopup(){this.showPopup=!1}}};const _=(0,w.A)(j,[["render",h],["__scopeId","data-v-c5da210e"]]);var S=_;(0,n.Ef)(S).mount("#app")}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,i),l.exports}i.m=e,function(){var e=[];i.O=function(t,n,o,l){if(!n){var s=1/0;for(r=0;r<e.length;r++){n=e[r][0],o=e[r][1],l=e[r][2];for(var a=!0,u=0;u<n.length;u++)(!1&l||s>=l)&&Object.keys(i.O).every((function(e){return i.O[e](n[u])}))?n.splice(u--,1):(a=!1,l<s&&(s=l));if(a){e.splice(r--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var r=e.length;r>0&&e[r-1][2]>l;r--)e[r]=e[r-1];e[r]=[n,o,l]}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,s=n[0],a=n[1],u=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(u)var r=u(i)}for(t&&t(n);c<s.length;c++)l=s[c],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return i.O(r)},n=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(364)}));n=i.O(n)})();
//# sourceMappingURL=app.97d38290.js.map