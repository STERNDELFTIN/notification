(function(){"use strict";var e={72:function(e,t,n){var i=n(751),l=n(641);const o={class:"settings-page"},s={class:"notification-list"},a={class:"notification-item"},u={class:"notification-item"},c={class:"notification-item"},r={class:"notification-item"},d={class:"notification-item"},p={class:"notification-item"},v={class:"notification-item"},g={class:"notification-item"},f={class:"notification-item"},m={class:"button-container"};function k(e,t,n,k,h,b){const L=(0,l.g2)("ToggleSwitch"),V=(0,l.g2)("ActiveToggleSwitch");return(0,l.uX)(),(0,l.CE)("div",o,[t[23]||(t[23]=(0,l.Lk)("h1",null,"알림 설정",-1)),(0,l.Lk)("ul",s,[(0,l.Lk)("li",a,[t[13]||(t[13]=(0,l.Lk)("span",null,"새 메시지 알림",-1)),(0,l.bF)(L,{modelValue:e.settings.newMessageAlert,"onUpdate:modelValue":t[0]||(t[0]=t=>e.settings.newMessageAlert=t)},null,8,["modelValue"])]),(0,l.Lk)("li",u,[t[14]||(t[14]=(0,l.Lk)("span",null,"메시지 알림",-1)),(0,l.bF)(L,{modelValue:e.settings.messageAlert,"onUpdate:modelValue":t[1]||(t[1]=t=>e.settings.messageAlert=t)},null,8,["modelValue"])]),(0,l.Lk)("li",c,[t[15]||(t[15]=(0,l.Lk)("span",null,"소리",-1)),(0,l.bF)(V,{modelValue:e.settings.sound,"onUpdate:modelValue":t[2]||(t[2]=t=>e.settings.sound=t)},null,8,["modelValue"])]),(0,l.Lk)("li",r,[t[16]||(t[16]=(0,l.Lk)("span",null,"진동",-1)),(0,l.bF)(V,{modelValue:e.settings.vibration,"onUpdate:modelValue":t[3]||(t[3]=t=>e.settings.vibration=t)},null,8,["modelValue"])]),(0,l.Lk)("li",d,[t[17]||(t[17]=(0,l.Lk)("span",null,"진동 패턴",-1)),(0,l.bF)(L,{modelValue:e.settings.vibrationPattern,"onUpdate:modelValue":t[4]||(t[4]=t=>e.settings.vibrationPattern=t)},null,8,["modelValue"])]),(0,l.Lk)("li",p,[t[18]||(t[18]=(0,l.Lk)("span",null,"알림 표시",-1)),(0,l.bF)(L,{modelValue:e.settings.notificationDisplay,"onUpdate:modelValue":t[5]||(t[5]=t=>e.settings.notificationDisplay=t)},null,8,["modelValue"])]),(0,l.Lk)("li",v,[t[19]||(t[19]=(0,l.Lk)("span",null,"키워드 알림",-1)),(0,l.bF)(L,{modelValue:e.settings.keywordAlert,"onUpdate:modelValue":t[6]||(t[6]=t=>e.settings.keywordAlert=t)},null,8,["modelValue"])]),(0,l.Lk)("li",g,[t[20]||(t[20]=(0,l.Lk)("span",null,"답장 메시지 알림",-1)),(0,l.bF)(L,{modelValue:e.settings.replyMessageAlert,"onUpdate:modelValue":t[7]||(t[7]=t=>e.settings.replyMessageAlert=t)},null,8,["modelValue"])]),(0,l.Lk)("li",f,[t[21]||(t[21]=(0,l.Lk)("span",null,"보이스룸 알림",-1)),(0,l.bF)(V,{modelValue:e.settings.voiceRoomAlert,"onUpdate:modelValue":t[8]||(t[8]=t=>e.settings.voiceRoomAlert=t)},null,8,["modelValue"])])]),(0,l.Lk)("div",m,[(0,l.Lk)("button",{class:"save-button",onClick:t[9]||(t[9]=(...t)=>e.saveSettings&&e.saveSettings(...t))}," 저장 ")]),e.showPopup?((0,l.uX)(),(0,l.CE)("div",{key:0,class:"popup-overlay",onClick:t[12]||(t[12]=(...t)=>e.closePopup&&e.closePopup(...t))},[(0,l.Lk)("div",{class:"popup",onClick:t[11]||(t[11]=(0,i.D$)((()=>{}),["stop"]))},[t[22]||(t[22]=(0,l.Lk)("p",null,"설정이 저장되었습니다.",-1)),(0,l.Lk)("button",{class:"popup-close-button",onClick:t[10]||(t[10]=(...t)=>e.closePopup&&e.closePopup(...t))}," 확인 ")])])):(0,l.Q3)("",!0)])}var h=n(33);const b={class:"switch-container"};function L(e,t,n,i,o,s){return(0,l.uX)(),(0,l.CE)("div",b,[(0,l.Lk)("div",{class:(0,h.C4)(["switch",{active:o.isActive}]),onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},t[1]||(t[1]=[(0,l.Lk)("div",{class:"toggle"},null,-1)]),2)])}var V={data(){return{isActive:!1}},methods:{toggle(){this.isActive=!this.isActive}}},A=n(262);const w=(0,A.A)(V,[["render",L],["__scopeId","data-v-22eb450c"]]);var y=w;const C={class:"switch-container"};function O(e,t,n,i,o,s){return(0,l.uX)(),(0,l.CE)("div",C,[(0,l.Lk)("div",{class:(0,h.C4)(["switch",{active:o.isActive}]),onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},t[1]||(t[1]=[(0,l.Lk)("div",{class:"toggle"},null,-1)]),2)])}var F={props:{value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},watch:{value(e){this.isActive=e}},methods:{toggle(){this.isActive=!this.isActive,this.$emit("input",this.isActive)}}};const P=(0,A.A)(F,[["render",O],["__scopeId","data-v-4f86e4b2"]]);var U=P,j={component:{ToggleSwitch:y,ActiveToggleSwitch:U}};const _=(0,A.A)(j,[["render",k],["__scopeId","data-v-1d2b7fb5"]]);var E=_;(0,i.Ef)(E).mount("#app")}},t={};function n(i){var l=t[i];if(void 0!==l)return l.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,l,o){if(!i){var s=1/0;for(r=0;r<e.length;r++){i=e[r][0],l=e[r][1],o=e[r][2];for(var a=!0,u=0;u<i.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[u])}))?i.splice(u--,1):(a=!1,o<s&&(s=o));if(a){e.splice(r--,1);var c=l();void 0!==c&&(t=c)}}return t}o=o||0;for(var r=e.length;r>0&&e[r-1][2]>o;r--)e[r]=e[r-1];e[r]=[i,l,o]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var l,o,s=i[0],a=i[1],u=i[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(l in a)n.o(a,l)&&(n.m[l]=a[l]);if(u)var r=u(n)}for(t&&t(i);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(r)},i=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(72)}));i=n.O(i)})();
//# sourceMappingURL=app.ac06b701.js.map