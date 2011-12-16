(function(e){if(!Modernizr.genericDOM){var h=document,k,g,j=/<([\w:]+)/,s={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};e.webshims.fixHTML5=function(e){if("string"!=typeof e||s[(j.exec(e)||["",""])[1].toLowerCase()])return e;if(!g){k=h.body;if(!k)return e;g=h.createElement("div");g.style.display="none"}var i=g.cloneNode(!1);k.appendChild(i);i.innerHTML=e;k.removeChild(i);return i.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(e,h,k,g,j){var s=h.modules,t=/\s*,\s*/,i={},u={},l={},A={},n={},y=e.fn.val,B=function(c,a,b,d,f){return f?y.call(e(c)):y.call(e(c),b)};e.fn.val=function(c){var a=this[0];arguments.length&&null==c&&(c="");if(!arguments.length)return!a||1!==a.nodeType?y.call(this):e.prop(a,"value",c,"val",!0);if(e.isArray(c))return y.apply(this,arguments);var b=e.isFunction(c);return this.each(function(d){a=this;1===a.nodeType&&(b?(d=c.call(a,d,e.prop(a,"value",j,"val",
!0)),null==d&&(d=""),e.prop(a,"value",d,"val")):e.prop(a,"value",c,"val"))})};var o="_webshimsLib"+Math.round(1E3*Math.random()),x=function(c,a,b){c=c.jquery?c[0]:c;if(!c)return b||{};var d=e.data(c,o);b!==j&&(d||(d=e.data(c,o,{})),a&&(d[a]=b));return a?d&&d[a]:d};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(c){e.fn[c.name]=function(){return this.map(function(){var a=x(this,
"shadowData");return a&&a[c.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){i[c]=e[c];e[c]=function(a,b,d,f,v){var p="val"==f,h=!p?i[c]:B;if(!a||!u[b]||1!==a.nodeType||!p&&f&&"attr"==c&&e.attrFn[b])return h(a,b,d,f,v);var q=(a.nodeName||"").toLowerCase(),r=l[q],w="attr"==c&&(!1===d||null===d)?"removeAttr":c,g,m,k;r||(r=l["*"]);r&&(r=r[b]);r&&(g=r[w]);if(g){if("value"==b)m=g.isVal,g.isVal=p;if("removeAttr"===w)return g.value.call(a);if(d===j)return g.get?g.get.call(a):g.value;g.set&&
("attr"==c&&!0===d&&(d=b),k=g.set.call(a,d));if("value"==b)g.isVal=m}else k=h(a,b,d,f,v);if((d!==j||"removeAttr"===w)&&n[q]&&n[q][b]){var s;s="removeAttr"==w?!1:"prop"==w?!!d:!0;n[q][b].forEach(function(b){if(!b.only||(b.only="prop"==c)||"attr"==b.only&&"prop"!=c)b.call(a,d,s,p?"val":w,c)})}return k};A[c]=function(a,b,d){l[a]||(l[a]={});l[a][b]||(l[a][b]={});var f=l[a][b][c],v=function(a,f,q){return f&&f[a]?f[a]:q&&q[a]?q[a]:"prop"==c&&"value"==b?function(a){return d.isVal?B(this,b,a,!1,0===arguments.length):
i[c](this,b,a)}:"prop"==c&&"value"==a&&d.value.apply?function(a){var d=i[c](this,b);d&&d.apply&&(d=d.apply(this,arguments));return d}:function(a){return i[c](this,b,a)}};l[a][b][c]=d;if(d.value===j){if(!d.set)d.set=d.writeable?v("set",d,f):h.cfg.useStrict&&"prop"==b?function(){throw b+" is readonly on "+a;}:e.noop;if(!d.get)d.get=v("get",d,f)}["value","get","set"].forEach(function(a){d[a]&&(d["_sup"+a]=v(a,f))})}});var C=!e.browser.msie||8<parseInt(e.browser.version,10),D=function(){var c=h.getPrototypeOf(g.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(b,d,f){var e=g.createElement(b),p=h.getPrototypeOf(e);if(C&&p&&c!==p&&(!e[d]||!a.call(e,d))){var i=e[d];f._supvalue=function(){return i&&i.apply?i.apply(this,arguments):i};p[d]=f.value}else f._supvalue=function(){var a=x(this,"propValue");return a&&a[d]&&a[d].apply?a[d].apply(this,arguments):a&&a[d]},m.extendValue(b,d,f.value);f.value._supvalue=f._supvalue}}(),m=function(){var c={};h.addReady(function(a,b){var d={},g=function(c){d[c]||(d[c]=e(a.getElementsByTagName(c)),
b[0]&&e.nodeName(b[0],c)&&(d[c]=d[c].add(b)))};e.each(c,function(a,b){g(a);!b||!b.forEach?h.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){d[a].each(b)})});d=null});var a,b=e([]),d=function(b,d){c[b]?c[b].push(d):c[b]=[d];e.isDOMReady&&(a||e(g.getElementsByTagName(b))).each(d)};return{createTmpCache:function(c){e.isDOMReady&&(a=a||e(g.getElementsByTagName(c)));return a||b},flushTmpCache:function(){a=null},content:function(a,b){d(a,function(){e(this).filter("["+b+"]").attr(b,
function(a,b){return b})})},createElement:function(a,b){d(a,b)},extendValue:function(a,b,c){d(a,function(){e(this).each(function(){x(this,"propValue",{})[b]=this[b];this[b]=c})})}}}(),z=function(c,a){if(c.defaultValue===j)c.defaultValue="";if(!c.removeAttr)c.removeAttr={value:function(){c[a||"prop"].set.call(this,c.defaultValue);c.removeAttr._supvalue.call(this)}}};e.extend(h,{getID:function(){var c=(new Date).getTime();return function(a){var a=e(a),b=a.attr("id");b||(c++,b="ID-"+c,a.attr("id",b));
return b}}(),extendUNDEFProp:function(c,a){e.each(a,function(a,d){a in c||(c[a]=d)})},createPropDefault:z,data:x,moveToFirstEvent:function(){var c=e._data?"_data":"data";return function(a,b,d){if((a=(e[c](a,"events")||{})[b])&&1<a.length)b=a.pop(),d||(d="bind"),"bind"==d&&a.delegateCount?a.splice(a.delegateCount,0,b):a.unshift(b)}}(),addShadowDom:function(c,a,b){b=b||{};c.jquery&&(c=c[0]);a.jquery&&(a=a[0]);if(!b.shadowFocusElement)b.shadowFocusElement=a;var d=e.data(c,o)||e.data(c,o,{}),f=e.data(a,
o)||e.data(a,o,{});d.hasShadow=a;f.nativeElement=c;f.shadowData=d.shadowData={nativeElement:c,shadowElement:a,shadowFocusElement:b.shadowFocusElement};b.shadowChilds&&b.shadowChilds.each(function(){x(this,"shadowData",f.shadowData)});if(b.data)d.shadowData.data=b.data,f.shadowData.data=b.data;b=null},propTypes:{standard:function(c){z(c);if(!c.prop)c.prop={set:function(a){c.attr.set.call(this,""+a)},get:function(){return c.attr.get.call(this)||c.defaultValue}}},"boolean":function(c){z(c);if(!c.prop)c.prop=
{set:function(a){a?c.attr.set.call(this,""):c.removeAttr.value.call(this)},get:function(){return null!=c.attr.get.call(this)}}}},reflectProperties:function(c,a){"string"==typeof a&&(a=a.split(t));a.forEach(function(a){h.defineNodeNamesProperty(c,a,{prop:{set:function(c){e.attr(this,a,c)},get:function(){return e.attr(this,a)||""}}})})},defineNodeNameProperty:function(c,a,b){u[a]=!0;if(b.reflect)h.propTypes[b.propType||"standard"](b);["prop","attr","removeAttr"].forEach(function(d){var f=b[d];f&&(f=
"prop"===d?e.extend({writeable:!0},f):e.extend({},f,{writeable:!0}),A[d](c,a,f),"*"!=c&&h.cfg.extendNative&&"prop"==d&&f.value&&e.isFunction(f.value)&&D(c,a,f),b[d]=f)});b.initAttr&&m.content(c,a);return b},defineNodeNameProperties:function(c,a,b,d){for(var e in a)!d&&a[e].initAttr&&m.createTmpCache(c),b&&(a[e][b]?h.log("override: "+c+"["+e+"] for "+b):(a[e][b]={},["value","set","get"].forEach(function(c){c in a[e]&&(a[e][b][c]=a[e][c],delete a[e][c])}))),a[e]=h.defineNodeNameProperty(c,e,a[e]);d||
m.flushTmpCache();return a},createElement:function(c,a,b){var d;e.isFunction(a)&&(a={after:a});m.createTmpCache(c);a.before&&m.createElement(c,a.before);b&&(d=h.defineNodeNameProperties(c,b,!1,!0));a.after&&m.createElement(c,a.after);m.flushTmpCache();return d},onNodeNamesPropertyModify:function(c,a,b,d){"string"==typeof c&&(c=c.split(t));e.isFunction(b)&&(b={set:b});c.forEach(function(c){n[c]||(n[c]={});"string"==typeof a&&(a=a.split(t));b.initAttr&&m.createTmpCache(c);a.forEach(function(a){n[c][a]||
(n[c][a]=[],u[a]=!0);if(b.set){if(d)b.set.only=d;n[c][a].push(b.set)}b.initAttr&&m.content(c,a)});m.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,a,b){b||(b={});if(e.isFunction(b))b.set=b;h.defineNodeNamesProperty(c,a,{attr:{set:function(c){this.setAttribute(a,c);b.set&&b.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?j:a}},removeAttr:{value:function(){this.removeAttribute(a);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},
contentAttr:function(c,a,b){if(c.nodeName){if(b===j)return b=(c.attributes[a]||{}).value,null==b?j:b;"boolean"==typeof b?b?c.setAttribute(a,a):c.removeAttribute(a):c.setAttribute(a,b)}},activeLang:function(){var c=[],a={},b,d,f=/:\/\/|^\.*\//,g=function(a,b,c){return b&&c&&-1!==e.inArray(b,c.availabeLangs||[])?(a.loading=!0,c=c.langSrc,f.test(c)||(c=h.cfg.basePath+c),h.loader.loadScript(c+b+".js",function(){a.langObj[b]?(a.loading=!1,j(a,!0)):e(function(){a.langObj[b]&&j(a,!0);a.loading=!1})}),!0):
!1},i=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},j=function(a,c){if(a.activeLang!=b&&a.activeLang!==d){var e=s[a.module].options;if(a.langObj[b]||d&&a.langObj[d])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[d],b),i(a.module);else if(!c&&!g(a,b,e)&&!g(a,d,e)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],b),i(a.module)}};return function(f){if("string"==typeof f&&f!==b)b=f,d=b.split("-")[0],b==d&&(d=!1),e.each(c,function(a,b){j(b)});else if("object"==
typeof f)if(f.register)a[f.register]||(a[f.register]=[]),a[f.register].push(f),f.callback();else{if(!f.activeLang)f.activeLang="";c.push(f);j(f)}return b}}()});e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(c,a){h[c]=function(b,c,e,g){"string"==typeof b&&(b=b.split(t));var i={};b.forEach(function(b){i[b]=h[a](b,c,e,g)});return i}});h.isReady("webshimLocalization",!0)});
(function(e,h){var k=e.webshims.browserVersion;if(!(e.browser.mozilla&&5<k)&&(!e.browser.msie||12>k&&7<k)){var g={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},j=function(e,g){e.getAttribute("role")||e.setAttribute("role",g)};e.webshims.addReady(function(k,t){e.each(g,function(g,h){for(var i=e(g,k).add(t.filter(g)),l=0,o=i.length;l<o;l++)j(i[l],h)});if(k===h){var i=h.getElementsByTagName("header")[0],u=h.getElementsByTagName("footer"),l=u.length;
i&&!e(i).closest("section, article")[0]&&j(i,"banner");l&&(i=u[l-1],e(i).closest("section, article")[0]||j(i,"contentinfo"))}})}})(jQuery,document);
