jQuery.webshims.register("form-extend",function(f,c,l,j,v,h){var i=l.Modernizr,l=i.inputtypes;if(i.formvalidation){var m=c.inputTypes,s={};c.addInputType=function(a,c){m[a]=c};c.addValidityRule=function(a,c){s[a]=c};c.addValidityRule("typeMismatch",function(a,c,b,d){if(""===c)return!1;d=d.typeMismatch;if(!("type"in b))b.type=(a[0].getAttribute("type")||"").toLowerCase();m[b.type]&&m[b.type].mismatch&&(d=m[b.type].mismatch(c,a));return d});var g=h.overrideMessages,p=!i.requiredSelect||!l.number||!l.time||
!l.range||g,u="customError,typeMismatch,rangeUnderflow,rangeOverflow,stepMismatch,tooLong,patternMismatch,valueMissing,valid".split(","),h=g?["value","checked"]:["value"],k=g?["textarea"]:[],n=function(a,c){if(a){var b=(a.getAttribute&&a.getAttribute("type")||a.type||"").toLowerCase();if(g||!(i.requiredSelect||"select-one"!=b)||m[b])g&&!c&&"radio"==b&&a.name?f(j.getElementsByName(a.name)).each(function(){f.prop(this,"validity")}):f.prop(a,"validity")}},o={};["input","textarea","select"].forEach(function(a){var g=
c.defineNodeNameProperty(a,"setCustomValidity",{prop:{value:function(b){var b=b+"",d="input"==a?f(this).getNativeElement()[0]:this;g.prop._supvalue.call(d,b);c.bugs.validationMessage&&c.data(d,"customvalidationMessage",b);p&&(c.data(d,"hasCustomError",!!b),n(d))}}});o[a]=g.prop._supvalue});if(p||!i.input.valueAsNumber||g)h.push("min"),h.push("max"),h.push("step"),k.push("input");if(!i.requiredSelect||g)h.push("required"),k.push("select");if(p){var q;k.forEach(function(a){var h=c.defineNodeNameProperty(a,
"validity",{prop:{get:function(){if(!q){var b="input"==a?f(this).getNativeElement()[0]:this,d=h.prop._supget.call(b);if(!d)return d;var e={};u.forEach(function(a){e[a]=d[a]});if(!f.prop(b,"willValidate"))return e;q=!0;var i=f(b),l={type:(b.getAttribute&&b.getAttribute("type")||"").toLowerCase(),nodeName:(b.nodeName||"").toLowerCase()},m=i.val(),k=!!c.data(b,"hasCustomError"),j;q=!1;e.customError=k;if(e.valid&&e.customError)e.valid=!1;else if(!e.valid){var n=!0;f.each(e,function(a,b){if(b)return n=
!1});if(n)e.valid=!0}f.each(s,function(d,f){e[d]=f(i,m,l,e);if(e[d]&&(e.valid||!j))o[a].call(b,c.createValidationMessage(b,d)),e.valid=!1,j=!0});e.valid?(o[a].call(b,""),c.data(b,"hasCustomError",!1)):g&&!j&&!k&&f.each(e,function(d,e){if("valid"!==d&&e)return o[a].call(b,c.createValidationMessage(b,d)),!1});return e}},writeable:!1}})});h.forEach(function(a){c.onNodeNamesPropertyModify(k,a,function(){n(this)})});if(j.addEventListener){var r;j.addEventListener("change",function(a){clearTimeout(r);n(a.target)},
!0);j.addEventListener("input",function(a){clearTimeout(r);r=setTimeout(function(){n(a.target)},290)},!0)}var t=k.join(",");c.addReady(function(a,c){f(t,a).add(c.filter(t)).each(function(){f.prop(this,"validity")})});g&&c.ready("DOM form-message",function(){c.activeLang({register:"form-core",callback:function(){f("input, select, textarea").getNativeElement().each(function(){if(!c.data(this,"hasCustomError")){var a=this,g=f.prop(a,"validity")||{valid:!0},b;g.valid||(b=(a.nodeName||"").toLowerCase(),
f.each(g,function(d,e){if("valid"!==d&&e)return o[b].call(a,c.createValidationMessage(a,d)),!1}))}})}})})}}});
