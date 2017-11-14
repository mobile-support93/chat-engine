!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ChatEngineSetupCore=t():e.ChatEngineSetupCore=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports={findCookie:e=>{let t=null;return document.cookie.split(";").forEach(n=>{let r=n.split("=")[0],o=n.split("=")[1];r.endsWith(e)&&(t=o)}),t},callbackWithError:(e,t,n)=>n(e&&e.responseJSON&&e.responseJSON.message?e.responseJSON.message:t)}},function(e,t,n){n(2);const r=n(7),o=n(8),i=n(0);e.exports=class{constructor(){this.loginElement=$("#login"),this.provisionElement=$("#setup"),this.loadElement=$("#load"),this.errorElement=$("#error"),this.errorOutElement=$("#error-out"),this.statusElement=$("#status"),this.codeElement=$("#code"),this.outputElement=$("#output"),this.emailElement=$("#email"),this.passwordElement=$("#password"),this.loginElement.submit(this.onLoginRegister.bind(this)),this.provisionElement.submit(this.onSetup.bind(this)),this.userId=i.findCookie("pnAdminId");let e=i.findCookie("pnAdminToken");if(this.client=new r({session:e,debug:!1,endpoint:"https://admin.pubnub.com"}),this.userId&&e){this.provisionElement.show(),this.loginElement.hide();let e={type:"identify",anonymousId:document.cookie.substring(document.cookie.indexOf("=")+4,document.cookie.indexOf(";")-3),context:{library:{name:"PubNub Functions",version:"0.0.1"},page:{path:location.pathname,url:location.href,title:document.title,search:location.search,referrer:document.referrer},userAgent:navigator.userAgent},userId:this.userId};$.ajax({type:"POST",url:"https://pubsub.pubnub.com/v1/blocks/sub-key/sub-c-218ba154-c8ba-11e7-9178-bafd478c18bc/analytics",data:JSON.stringify(e),success:function(){console.log("success")},contentType:"application/json; charset=utf-8"})}}displayStatus(e){this.statusElement.show(),this.statusElement.append($('<li class="list-group-item">'+e+"</li>"))}clearErrors(){this.errorElement.hide()}raiseError(e){this.errorOutElement.html(e),this.errorElement.show()}onProvisionSuccess(e,t){if(e)this.loadElement.hide(),this.provisionElement.show(),this.errorOutElement.html(e),this.errorElement.show();else{this.loadElement.hide();let e="";e+="// Make sure to import ChatEngine first!\n",e+="ChatEngine = ChatEngineCore.create({\n",e+="    publishKey: '"+t.pub+"',\n",e+="    subscribeKey: '"+t.sub+"'\n",e+="});\n";let n={type:"track",anonymousId:document.cookie.substring(document.cookie.indexOf("=")+4,document.cookie.indexOf(";")-3),event:"chat_engine_activation",context:{library:{name:"PubNub Functions",version:"0.0.1"},page:{path:location.pathname,url:location.href,title:document.title,search:location.search,referrer:document.referrer},userAgent:navigator.userAgent},userId:this.userId};$.ajax({type:"POST",url:"https://pubsub.pubnub.com/v1/blocks/sub-key/sub-c-218ba154-c8ba-11e7-9178-bafd478c18bc/analytics",data:JSON.stringify(n),success:function(){console.log("success")},contentType:"application/json; charset=utf-8"}),this.codeElement.text(e),this.outputElement.show()}}onLoginRegister(){this.clearErrors();const e=this.emailElement.val(),t=this.passwordElement.val();return e&&""!==e?t&&""!==t?(this.client.init({email:e,password:t},(e,t)=>{if(e)this.raiseError((e=>{if(e&&e.responseJSON&&e.responseJSON.error)return e.responseJSON.error})(e));else{this.userId=t.result.user_id;let e={type:"identify",anonymousId:document.cookie.substring(document.cookie.indexOf("=")+4,document.cookie.indexOf(";")-3),context:{library:{name:"PubNub Functions",version:"0.0.1"},page:{path:location.pathname,url:location.href,title:document.title,search:location.search,referrer:document.referrer},userAgent:navigator.userAgent},userId:this.userId};$.ajax({type:"POST",url:"https://pubsub.pubnub.com/v1/blocks/sub-key/sub-c-218ba154-c8ba-11e7-9178-bafd478c18bc/analytics",data:JSON.stringify(e),success:function(){console.log("success")},contentType:"application/json; charset=utf-8"}),this.provisionElement.show(),this.loginElement.hide()}}),!1):(this.raiseError("password not valid"),!1):(this.raiseError("email not valid"),!1)}onSetup(){return this.clearErrors(),this.loadElement.show(),this.errorElement.hide(),this.statusElement.empty(),o(this.client,this.userId,this.onProvisionSuccess.bind(this),this.displayStatus.bind(this)),!1}}},function(e,t,n){"use strict";e.exports=n(3).polyfill()},function(e,t,n){(function(t,r){/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return"function"==typeof t}function o(){var t=setTimeout;return function(){return t(i,1)}}function i(){for(var t=0;t<k;t+=2){(0,O[t])(O[t+1]),O[t]=void 0,O[t+1]=void 0}k=0}function s(t,e){var n=arguments,r=this,o=new this.constructor(a);void 0===o[q]&&v(o);var i=r._state;return i?function(){var t=n[i-1];C(function(){return y(i,o,t,r._result)})}():f(r,o,t,e),o}function u(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(a);return h(e,t),e}function a(){}function c(t){try{return t.then}catch(t){return H.error=t,H}}function l(e,n,r){n.constructor===e.constructor&&r===s&&n.constructor.resolve===u?function(t,e){e._state===F?p(t,e._result):e._state===M?d(t,e._result):f(e,void 0,function(e){return h(t,e)},function(e){return d(t,e)})}(e,n):r===H?(d(e,H.error),H.error=null):void 0===r?p(e,n):t(r)?function(t,e,n){C(function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?h(t,n):p(t,n))},function(e){r||(r=!0,d(t,e))},t._label);!r&&o&&(r=!0,d(t,o))},t)}(e,n,r):p(e,n)}function h(t,e){t===e?d(t,new TypeError("You cannot resolve a promise with itself")):!function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}(e)?p(t,e):l(t,e,c(e))}function p(t,e){t._state===W&&(t._result=e,t._state=F,0!==t._subscribers.length&&C(b,t))}function d(t,e){t._state===W&&(t._state=M,t._result=e,C(function(t){t._onerror&&t._onerror(t._result),b(t)},t))}function f(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+F]=n,o[i+M]=r,0===i&&t._state&&C(b,t)}function b(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?y(n,r,o,i):o(i);t._subscribers.length=0}}function m(){this.error=null}function y(e,n,r,o){var i=t(r),s=void 0,u=void 0,a=void 0,c=void 0;if(i){if((s=function(t,e){try{return t(e)}catch(t){return I.error=t,I}}(r,o))===I?(c=!0,u=s.error,s.error=null):a=!0,n===s)return void d(n,new TypeError("A promises callback cannot return that same promise."))}else s=o,a=!0;n._state!==W||(i&&a?h(n,s):c?d(n,u):e===F?p(n,s):e===M&&d(n,s))}function v(t){t[q]=K++,t._state=void 0,t._result=void 0,t._subscribers=[]}function g(t,e){this._instanceConstructor=t,this.promise=new t(a),this.promise[q]||v(this.promise),E(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?p(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&p(this.promise,this._result))):d(this.promise,new Error("Array Methods must be provided an Array"))}function _(t){this[q]=K++,this._result=this._state=void 0,this._subscribers=[],a!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof _?function(t,e){try{e(function(e){h(t,e)},function(e){d(t,e)})}catch(e){d(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}var w=void 0,E=w=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},k=0,P=void 0,T=void 0,C=function(t,e){O[k]=t,O[k+1]=e,2===(k+=2)&&(T?T(i):$())},S="undefined"!=typeof window?window:void 0,j=S||{},x=j.MutationObserver||j.WebKitMutationObserver,A="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),N="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=new Array(1e3),$=void 0;$=A?function(){return e.nextTick(i)}:x?function(){var t=0,e=new x(i),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():N?function(){var t=new MessageChannel;return t.port1.onmessage=i,function(){return t.port2.postMessage(0)}}():void 0===S?function(){try{var t=n(6);return void 0!==(P=t.runOnLoop||t.runOnContext)?function(){P(i)}:o()}catch(t){return o()}}():o();var q=Math.random().toString(36).substring(16),W=void 0,F=1,M=2,H=new m,I=new m,K=0;return g.prototype._enumerate=function(t){for(var e=0;this._state===W&&e<t.length;e++)this._eachEntry(t[e],e)},g.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===u){var o=c(t);if(o===s&&t._state!==W)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===_){var i=new n(a);l(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},g.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===W&&(this._remaining--,t===M?d(r,n):this._result[e]=n),0===this._remaining&&p(r,this._result)},g.prototype._willSettleAt=function(t,e){var n=this;f(t,void 0,function(t){return n._settledAt(F,e,t)},function(t){return n._settledAt(M,e,t)})},_.all=function(t){return new g(this,t).promise},_.race=function(t){var e=this;return new e(E(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})},_.resolve=u,_.reject=function(t){var e=new this(a);return d(e,t),e},_._setScheduler=function(t){T=t},_._setAsap=function(t){C=t},_._asap=C,_.prototype={constructor:_,then:s,catch:function(t){return this.then(null,t)}},_.polyfill=function(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=_},_.Promise=_,_})}).call(e,n(4),n(5))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(a===setTimeout)return setTimeout(t,0);if((a===n||!a)&&setTimeout)return a=setTimeout,setTimeout(t,0);try{return a(t,0)}catch(e){try{return a.call(null,t,0)}catch(e){return a.call(this,t,0)}}}function i(){if(!d){var t=o(function(){d&&h&&(d=!1,h.length?p=h.concat(p):f=-1,p.length&&i())});d=!0;for(var e=p.length;e;){for(h=p,p=[];++f<e;)h&&h[f].run();f=-1,e=p.length}h=null,d=!1,function(t){if(c===clearTimeout)return clearTimeout(t);if((c===r||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(t);try{c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}(t)}}function s(t,e){this.fun=t,this.array=e}function u(){}var a,c,l=t.exports={};!function(){try{a="function"==typeof setTimeout?setTimeout:n}catch(t){a=n}try{c="function"==typeof clearTimeout?clearTimeout:r}catch(t){c=r}}();var h,p=[],d=!1,f=-1;l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new s(t,e)),1!==p.length||d||o(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=u,l.addListener=u,l.once=u,l.off=u,l.removeListener=u,l.removeAllListeners=u,l.emit=u,l.prependListener=u,l.prependOnceListener=u,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){},function(t,e){t.exports=class{constructor(t){t=t||{},this.endpoint=t.endpoint||"https://admin.pubnub.com",this.session=t.session||!1,this.debug=t.debug||!1}errHandle(t){this.debug&&console.error("API Error: "+t)}clog(t){this.debug&&("object"==typeof t?console.log(t):console.log("API:".yellow,t))}request(t,e,n,r){if("me"!==e[1]&&!this.session)return this.errHandle("Authorize with init() first.");(n=n||{}).url=this.endpoint+"/"+e.join("/"),n.method=t,n.json=!0,n.headers=n.headers||{},this.session&&(n.headers["X-Session-Token"]=this.session),this.clog(n.method.red+" "+n.url),this.clog("-- opts:".yellow),this.clog(n),$.ajax(n).done(t=>{console.log(t),r(null,t)}).fail(t=>{console.log("fail",t),r(t||t.message||t)})}init(t,e){this.request("post",["api","me"],{data:{email:t.email||this.errHandle("No Email Supplied"),password:t.password||this.errHandle("No Password Supplied")}},(t,n)=>{n&&n.error?e(n.error):t?e(t):(this.session=n.result.token,e(null,n))})}startFunction({block:t,key:e},n){this.request("post",["api","v1","blocks","key",e.id,"block",t.id,"start"],{data:{block_id:t.id,key_id:e.id,action:"start"}},n)}storeSecretKey({key:t},e){this.request("put",["api","vault",t.subscribe_key,"key","secretKey"],{contentType:"application/json",data:JSON.stringify({keyName:"secretKey",key_id:t.id,subscribeKey:t.subscribe_key,value:t.secret_key})},e)}}},function(t,e,n){const r=n(9),o=n(0);t.exports=((t,e,n=(()=>{}),i=(()=>{}))=>{t.request("get",["api","accounts"],{data:{user_id:e}},(s,u)=>{if(s){return o.callbackWithError(s,"Could not get PubNub accounts. Please contact support@pubnub.com.",n)}let a=u.result.accounts[0];i("Using account "+a.properties.company+", if this is incorrect, deploy manually or log in as another user"),i("Creating new PubNub app..."),t.request("post",["api","apps"],{data:{name:"ChatEngine App",owner_id:a.id,properties:{}}},(s,u)=>{if(s){return o.callbackWithError(s,"Could not create new PubNub app. Please contact support@pubnub.com.",n)}let c=u.result;i("Getting PubNub keys..."),t.request("get",["api","apps"],{data:{owner_id:a.id}},(s,u)=>{if(s){return o.callbackWithError(s,"Could not get PubNub keys. Please contact support@pubnub.com.",n)}let a;u.result.forEach(t=>{t.id===c.id&&(a=t.keys[0])}),i("Enabling PubNub features..."),a.properties.name="ChatEngine Keyset",a.properties.presence=1,a.properties.history=1,a.properties.message_storage_ttl=7,a.properties.multiplexing=1,a.properties.presence_announce_max=20,a.properties.presence_debounce=2,a.properties.presence_global_here_now=1,a.properties.presence_interval=10,a.properties.presence_leave_on_disconnect=0,a.properties.blocks=1,a.properties.uls=1,a.properties.wildcardsubscribe=1,t.request("put",["api","keys",a.id],{data:a},s=>{if(s){return o.callbackWithError(s,"Could not enable PubNub features. Please contact support@pubnub.com.",n)}r(t,e,a,n,i)})})})})})},function(t,e,n){const r=n(0);t.exports=((t,e,n,o=(()=>{}),i=(()=>{}))=>{let s=null;i("Creating new PubNub Function...");t.request("post",["api","v1","blocks","key",n.id,"block"],{data:{name:"ChatEngine Function",key_id:n.id}},(e,u)=>{if(e){return r.callbackWithError(e,"Could not create new PubNub Function. Please contact support@pubnub.com.",o)}s=u.payload;let a=$.get({url:"functions/state-to-kv.js",dataType:"text"}),c=$.get({url:"functions/auth.js",dataType:"text"}),l=$.get({url:"functions/server.js",dataType:"text"});$.when(a,c,l).then((e,u,a)=>{i("Creating new after-publish Event Handler..."),t.request("post",["api","v1","blocks","key",n.id,"event_handler"],{data:{key_id:n.id,block_id:s.id,type:"js",event:"js-after-presence",channels:"*",name:"chat-engine-state",code:e[0],output:"output-state-to-kv-"+(new Date).getTime()}},(e,c)=>{if(e)return r.callbackWithError(e,"Could not create new PubNub after-publish Event Handler. Please contact support@pubnub.com.",o);t.request("post",["api","v1","blocks","key",n.id,"event_handler"],{data:{key_id:n.id,block_id:s.id,type:"js",event:"js-on-rest",path:"chat-engine-auth",name:"chat-engine-auth",code:u[0],output:"auth-"+Math.round((new Date).getTime())}},(e,u)=>{if(e)return r.callbackWithError(e,"Could not create new PubNub after-publish Event Handler. Please contact support@pubnub.com.",o);i("Creating new on-request Event Handler..."),a[0]=a[0].replace("SECRET_KEY",n.secret_key),t.request("post",["api","v1","blocks","key",n.id,"event_handler"],{data:{key_id:n.id,block_id:s.id,code:a[0],type:"js",name:"chat-engine-server",path:"chat-engine-server",event:"js-on-rest",output:"output-server-endpoint-"+Math.round((new Date).getTime())}},(e,u)=>{if(e)return r.callbackWithError(e,"Could not create new Pubnub on-request Event Handler. Please contact support@pubnub.com.",o);i("Starting Pubnub Function..."),t.startFunction({block:s,key:n},t=>{if(t)return r.callbackWithError(t,"Could not start PubNub Function. Please contact support@pubnub.com.",o);i("Success!"),o(null,{pub:n.publish_key,sub:n.subscribe_key})})})})})}).catch(()=>{i("Failed to fetch code")})})})}])});
