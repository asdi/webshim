jQuery.webshims.register("form-extend",function(a,c,f,i,r,l){var d=f.Modernizr,f=d.inputtypes;if(d.formvalidation){var o=c.inputTypes,h={};c.addInputType=function(a,b){o[a]=b};c.addValidityRule=function(a,b){h[a]=b};c.addValidityRule("typeMismatch",function(a,b,c,e){if(""===b)return!1;e=e.typeMismatch;if(!("type"in c))c.type=(a[0].getAttribute("type")||"").toLowerCase();o[c.type]&&o[c.type].mismatch&&(e=o[c.type].mismatch(b,a));return e});var m=l.overrideMessages,n=!d.requiredSelect||!f.number||!f.time||
!f.range||m,u="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),l=m?["value","checked"]:["value"],q=m?["textarea"]:[],t=function(b,c){if(b){var e=(b.getAttribute&&b.getAttribute("type")||b.type||"").toLowerCase();if(m||!(d.requiredSelect||"select-one"!=e)||o[e])m&&!c&&"radio"==e&&b.name?a(i.getElementsByName(b.name)).each(function(){a.prop(this,"validity")}):a.prop(b,"validity")}},s={};["input","textarea","select"].forEach(function(b){var e=
c.defineNodeNameProperty(b,"setCustomValidity",{prop:{value:function(g){var g=g+"",j="input"==b?a(this).getNativeElement()[0]:this;e.prop._supvalue.call(j,g);c.bugs.validationMessage&&c.data(j,"customvalidationMessage",g);n&&(c.data(j,"hasCustomError",!!g),t(j))}}});s[b]=e.prop._supvalue});if(n||!d.input.valueAsNumber||m)l.push("min"),l.push("max"),l.push("step"),q.push("input");if(!d.requiredSelect||m)l.push("required"),q.push("select");if(n){var b;q.forEach(function(e){var j=c.defineNodeNameProperty(e,
"validity",{prop:{get:function(){if(!b){var g="input"==e?a(this).getNativeElement()[0]:this,d=j.prop._supget.call(g);if(!d)return d;var k={};u.forEach(function(a){k[a]=d[a]});if(!a.prop(g,"willValidate"))return k;b=!0;var f=a(g),n={type:(g.getAttribute&&g.getAttribute("type")||"").toLowerCase(),nodeName:(g.nodeName||"").toLowerCase()},i=f.val(),q=!!c.data(g,"hasCustomError"),l;b=!1;k.customError=q;if(k.valid&&k.customError)k.valid=!1;else if(!k.valid){var o=!0;a.each(k,function(a,b){if(b)return o=
!1});if(o)k.valid=!0}a.each(h,function(a,b){k[a]=b(f,i,n,k);if(k[a]&&(k.valid||!l))s[e].call(g,c.createValidationMessage(g,a)),k.valid=!1,l=!0});k.valid?(s[e].call(g,""),c.data(g,"hasCustomError",!1)):m&&!l&&!q&&a.each(k,function(a,b){if("valid"!==a&&b)return s[e].call(g,c.createValidationMessage(g,a)),!1});return k}},writeable:!1}})});l.forEach(function(a){c.onNodeNamesPropertyModify(q,a,function(){t(this)})});if(i.addEventListener){var j;i.addEventListener("change",function(a){clearTimeout(j);t(a.target)},
!0);i.addEventListener("input",function(a){clearTimeout(j);j=setTimeout(function(){t(a.target)},290)},!0)}var e=q.join(",");c.addReady(function(b,c){a(e,b).add(c.filter(e)).each(function(){a.prop(this,"validity")})});m&&c.ready("DOM form-message",function(){c.activeLang({register:"form-core",callback:function(){a("input, select, textarea").getNativeElement().each(function(){if(!c.data(this,"hasCustomError")){var b=this,e=a.prop(b,"validity")||{valid:!0},g;e.valid||(g=(b.nodeName||"").toLowerCase(),
a.each(e,function(a,e){if("valid"!==a&&e)return s[g].call(b,c.createValidationMessage(b,a)),!1}))}})}})})}}});jQuery.webshims.gcEval=function(a,c){with(c&&c.form||window)with(c||window)return function(a){eval(a)}.call(c||window,a)};
(function(a){var c=window.Modernizr,f=a.webshims;if(c.formvalidation){var i=a('<form action="#"><select /><input type="date" required name="a" /></form>'),r=a("input",i);c.validationmessage=!0;if(window.opera){i.appendTo("head");f.bugs.validationMessage=!r.prop("validationMessage");try{r.prop("valueAsNumber",0)}catch(l){}f.bugs.valueAsNumberSet="1970-01-01"!=r.prop("value");i.remove()}c.requiredSelect=!!("required"in a("select",i)[0]);if(!("bugfreeformvalidation"in c))c.bugfreeformvalidation=c.formvalidation&&
c.requiredSelect&&!f.bugs.valueAsNumberSet&&!f.bugs.validationMessage&&(!a.browser.webkit||-1!=navigator.userAgent.indexOf("hrome")&&534.19<f.browserVersion)&&!window.testGoodWithFix;if(!c.bugfreeformvalidation)f.addPolyfill("form-native-fix",{f:"forms",dependencies:["form-extend"]}),f.modules["form-extend"].test=a.noop;f.reTest(["form-extend","form-message","form-native-fix"]);f.isReady("form-number-date-api")&&f.reTest("form-number-date-api")}})(jQuery);
jQuery.webshims.register("form-core",function(a,c,f,i,r,l){var d={radio:1},o={checkbox:1,radio:1},h=a([]),m=function(b){var b=a(b),c=b[0].name;return d[b[0].type]&&c?a(b[0].form&&b[0].form[c]||i.getElementsByName(c)).not(b[0]):h},n=c.getContentValidationMessage=function(b,j){var e=b.getAttribute("x-moz-errormessage")||b.getAttribute("data-errormessage")||"";if(e&&-1!=e.indexOf("{")){try{e=jQuery.parseJSON(e)}catch(p){return e}"object"==typeof e&&(j=j||a.prop(b,"validity")||{valid:1},j.valid||a.each(j,
function(a,b){if(b&&"valid"!=a&&e[a])return e=e[a],!1}));c.data(b,"contentErrorMessage",e);if("object"==typeof e)e=e.defaultMessage}return e||""},u={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};a.extend(a.expr.filters,{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,
"willValidate")||!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!u[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!u[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr.filters[b]=
a.expr.filters[b+"-element"]});var q=a.prop,t={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,c,e){var p=q.apply(this,arguments);if(b&&"form"in b&&t[c]&&e!==r&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),"checked"==c&&e&&m(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return p};var s=function(b,c){var e;a.each(b,function(b,h){if(h)return e="customError"==b?a.prop(c,"validationMessage"):
b,!1});return e};a(i).bind("focusout change refreshvalidityui",function(b){if(b.target&&"submit"!=b.target.type&&a.prop(b.target,"willValidate")){var c=a.data(b.target,"webshimsswitchvalidityclass");c&&clearTimeout(c);a.data(b.target,"webshimsswitchvalidityclass",setTimeout(function(){var c=a(b.target).getNativeElement()[0],p=a.prop(c,"validity"),h=a(c).getShadowElement(),g,d,k,j;p.valid?h.hasClass("form-ui-valid")||(g="form-ui-valid",d="form-ui-invalid",j="changedvaliditystate",k="changedvalid",
o[c.type]&&c.checked&&m(c).removeClass(d).addClass(g).removeAttr("aria-invalid"),a.removeData(c,"webshimsinvalidcause")):(p=s(p,c),a.data(c,"webshimsinvalidcause")!=p&&(a.data(c,"webshimsinvalidcause",p),j="changedvaliditystate"),h.hasClass("form-ui-invalid")||(g="form-ui-invalid",d="form-ui-valid",o[c.type]&&!c.checked&&m(c).removeClass(d).addClass(g),k="changedinvalid"));g&&(h.addClass(g).removeClass(d),setTimeout(function(){a(c).trigger(k)},0));j&&setTimeout(function(){a(c).trigger(j)},0);a.removeData(b.target,
"webshimsswitchvalidityclass")},9))}});c.triggerInlineForm=function(b,h){b.jquery&&(b=b[0]);var e="on"+h,p=b[e]||b.getAttribute(e)||"",d,g,h=a.Event({type:h,target:b,currentTarget:b});p&&"string"==typeof p&&(g=c.gcEval(p,b),b[e]&&(d=!0,b[e]=!1));!1===g&&(h.stopPropagation(),h.preventDefault());a(b).trigger(h);d&&(b[e]=p);return g};f=function(){c.scrollRoot=a.browser.webkit||"BackCompat"==i.compatMode?a(i.body):a(i.documentElement)};f();c.ready("DOM",f);c.validityAlert=function(){var b=!a.browser.msie||
7<parseInt(a.browser.version,10)?"span":"label",h={top:0,left:0},e={hideDelay:5E3,getBodyOffset:function(){h=d.offset()},showFor:function(b,c,h,g){e._create();var b=a(b),n=a(b).getShadowElement(),j=e.getOffsetFromBody(n);e.clear();g?this.hide():(this.getMessage(b,c),this.position(n,j),d.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(f=setTimeout(m,this.hideDelay)));h||this.setFocus(n,j)},getOffsetFromBody:function(b){b=a(b).offset();a.swap(d[0],{visibility:"hidden",
display:"inline-block",left:0,top:0},e.getBodyOffset);b.top-=h.top;b.left-=h.left;return b},setFocus:function(e,h){var g=a(e).getShadowFocusElement(),f=c.scrollRoot.scrollTop(),n=(h||g.offset()).top-30,j;c.getID&&"label"==b&&d.attr("for",c.getID(g));f>n&&(c.scrollRoot.animate({scrollTop:n-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(f-n)),80)}),j=!0);try{g[0].focus()}catch(q){}j&&(c.scrollRoot.scrollTop(f),setTimeout(function(){c.scrollRoot.scrollTop(f)},0));setTimeout(function(){a(i).bind("focusout.validityalert",
m)},10)},getMessage:function(b,c){a("span.va-box",d).text(c||n(b[0])||b.prop("validationMessage"))},position:function(b,c){c=c?a.extend({},c):e.getOffsetFromBody(b);c.top+=b.outerHeight();d.css(c)},show:function(){"none"===d.css("display")&&d.css({opacity:0}).show();d.addClass("va-visible").fadeTo(400,1)},hide:function(){d.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(g);clearTimeout(f);a(i).unbind("focusout.validityalert");d.stop().removeAttr("for")},_create:function(){if(!d)d=
e.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),c.ready("DOM",function(){d.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&d.bgIframe()})}},d,f=!1,g=!1,m=a.proxy(e,"hide");return e}();(function(){var b,c=[],e;a(i).bind("invalid",function(d){if(!d.wrongWebkitInvalid){var h=
a(d.target),g=h.getShadowElement();g.hasClass("form-ui-invalid")||(g.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(d.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=d.isDefaultPrevented,g=a.Event("firstinvalidsystem"),a(i).triggerHandler(g,{element:d.target,form:d.target.form,isInvalidUIPrevented:d.isDefaultPrevented}),h.trigger(b);b&&b.isDefaultPrevented()&&d.preventDefault();c.push(d.target);
d.extraData="fix";clearTimeout(e);e=setTimeout(function(){var e={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(d.target).trigger(e,e)},9);g=h=null}})})();l.replaceValidationUI&&c.ready("DOM",function(){a(i).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,c,f,i,r,l){var d=c.validityMessages,f=l.overrideMessages||l.customMessages?["customValidationMessage"]:[];d.en=d.en||d["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(a){d.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){d.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(a){d.en.rangeOverflow[a]=
"Value must be at or before {%max}."});d["en-US"]=d["en-US"]||d.en;d[""]=d[""]||d["en-US"];d.de=d.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(a){d.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){d.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){d.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var o=
d[""];c.createValidationMessage=function(c,d){var f=o[d];f&&"string"!==typeof f&&(f=f[a.prop(c,"type")]||f[(c.nodeName||"").toLowerCase()]||f.defaultMessage);f&&"value,min,max,title,maxlength,label".split(",").forEach(function(d){if(-1!==f.indexOf("{%"+d)){var i=("label"==d?a.trim(a('label[for="'+c.id+'"]',c.form).text()).replace(/\*$|:$/,""):a.attr(c,d))||"";f=f.replace("{%"+d+"}",i);"value"==d&&(f=f.replace("{%valueLen}",i.length))}});return f||""};(c.bugs.validationMessage||!Modernizr.formvalidation)&&
f.push("validationMessage");c.activeLang({langObj:d,module:"form-core",callback:function(a){o=a}});Modernizr.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&c.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var c=this.options||[];if(!c.length){var d=a("select",this);if(d[0]&&d[0].options&&d[0].options.length)c=d[0].options}return c}}});f.forEach(function(d){c.defineNodeNamesProperty(["fieldset","output","button"],
d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(f){var i=c.defineNodeNameProperty(f,d,{prop:{get:function(){var d=this,f="";if(!a.prop(d,"willValidate"))return f;var h=a.prop(d,"validity")||{valid:1};if(h.valid||(f=c.getContentValidationMessage(d,h)))return f;if(h.customError&&d.nodeName&&(f=Modernizr.validationmessage&&i.prop._supget?i.prop._supget.call(d):c.data(d,"customvalidationMessage")))return f;a.each(h,function(a,b){if("valid"!=a&&b&&(f=c.createValidationMessage(d,
a)))return!1});return f||""},writeable:!1}})})});c.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return c.inputTypes[a]?a:this.type}}})});
