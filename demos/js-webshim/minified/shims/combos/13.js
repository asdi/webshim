(function(d){if(!Modernizr.genericDOM){var h=document,o,k,l=/<([\w:]+)/,m={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};d.webshims.fixHTML5=function(d){if("string"!=typeof d||m[(l.exec(d)||["",""])[1].toLowerCase()])return d;if(!k){o=h.body;if(!o)return d;k=h.createElement("div");k.style.display="none"}var j=k.cloneNode(!1);o.appendChild(j);j.innerHTML=d;o.removeChild(j);return j.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(d,h,o,k,l){var m=h.modules,s=/\s*,\s*/,j={},p={},g={},i={},n={},t=d.fn.val,B=function(c,a,b,e,f){return f?t.call(d(c)):t.call(d(c),b)};d.fn.val=function(c){var a=this[0];arguments.length&&null==c&&(c="");if(!arguments.length)return!a||1!==a.nodeType?t.call(this):d.prop(a,"value",c,"val",!0);if(d.isArray(c))return t.apply(this,arguments);var b=d.isFunction(c);return this.each(function(e){a=this;1===a.nodeType&&(b?(e=c.call(a,e,d.prop(a,"value",l,"val",
!0)),null==e&&(e=""),d.prop(a,"value",e,"val")):d.prop(a,"value",c,"val"))})};var v="_webshimsLib"+Math.round(1E3*Math.random()),x=function(c,a,b){c=c.jquery?c[0]:c;if(!c)return b||{};var e=d.data(c,v);b!==l&&(e||(e=d.data(c,v,{})),a&&(e[a]=b));return a?e&&e[a]:e};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(c){d.fn[c.name]=function(){return this.map(function(){var a=x(this,
"shadowData");return a&&a[c.prop]||this})}});["removeAttr","prop","attr"].forEach(function(c){j[c]=d[c];d[c]=function(a,b,e,f,q){var y="val"==f,h=!y?j[c]:B;if(!a||!p[b]||1!==a.nodeType||!y&&f&&"attr"==c&&d.attrFn[b])return h(a,b,e,f,q);var z=(a.nodeName||"").toLowerCase(),u=g[z],w="attr"==c&&(!1===e||null===e)?"removeAttr":c,i,t,m;u||(u=g["*"]);u&&(u=u[b]);u&&(i=u[w]);if(i){if("value"==b)t=i.isVal,i.isVal=y;if("removeAttr"===w)return i.value.call(a);if(e===l)return i.get?i.get.call(a):i.value;i.set&&
("attr"==c&&!0===e&&(e=b),m=i.set.call(a,e));if("value"==b)i.isVal=t}else m=h(a,b,e,f,q);if((e!==l||"removeAttr"===w)&&n[z]&&n[z][b]){var k;k="removeAttr"==w?!1:"prop"==w?!!e:!0;n[z][b].forEach(function(b){if(!b.only||(b.only="prop"==c)||"attr"==b.only&&"prop"!=c)b.call(a,e,k,y?"val":w,c)})}return m};i[c]=function(a,b,e){g[a]||(g[a]={});g[a][b]||(g[a][b]={});var f=g[a][b][c],q=function(a,d,f){return d&&d[a]?d[a]:f&&f[a]?f[a]:"prop"==c&&"value"==b?function(a){return e.isVal?B(this,b,a,!1,0===arguments.length):
j[c](this,b,a)}:"prop"==c&&"value"==a&&e.value.apply?function(a){var d=j[c](this,b);d&&d.apply&&(d=d.apply(this,arguments));return d}:function(a){return j[c](this,b,a)}};g[a][b][c]=e;if(e.value===l){if(!e.set)e.set=e.writeable?q("set",e,f):h.cfg.useStrict&&"prop"==b?function(){throw b+" is readonly on "+a;}:d.noop;if(!e.get)e.get=q("get",e,f)}["value","get","set"].forEach(function(a){e[a]&&(e["_sup"+a]=q(a,f))})}});var C=!d.browser.msie||8<parseInt(d.browser.version,10),D=function(){var c=h.getPrototypeOf(k.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(b,d,f){var q=k.createElement(b),i=h.getPrototypeOf(q);if(C&&i&&c!==i&&(!q[d]||!a.call(q,d))){var g=q[d];f._supvalue=function(){return g&&g.apply?g.apply(this,arguments):g};i[d]=f.value}else f._supvalue=function(){var a=x(this,"propValue");return a&&a[d]&&a[d].apply?a[d].apply(this,arguments):a&&a[d]},r.extendValue(b,d,f.value);f.value._supvalue=f._supvalue}}(),r=function(){var c={};h.addReady(function(a,b){var e={},i=function(c){e[c]||(e[c]=d(a.getElementsByTagName(c)),
b[0]&&d.nodeName(b[0],c)&&(e[c]=e[c].add(b)))};d.each(c,function(a,b){i(a);!b||!b.forEach?h.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){e[a].each(b)})});e=null});var a,b=d([]),e=function(b,e){c[b]?c[b].push(e):c[b]=[e];d.isDOMReady&&(a||d(k.getElementsByTagName(b))).each(e)};return{createTmpCache:function(c){d.isDOMReady&&(a=a||d(k.getElementsByTagName(c)));return a||b},flushTmpCache:function(){a=null},content:function(a,b){e(a,function(){d(this).filter("["+b+"]").attr(b,
function(a,b){return b})})},createElement:function(a,b){e(a,b)},extendValue:function(a,b,c){e(a,function(){d(this).each(function(){x(this,"propValue",{})[b]=this[b];this[b]=c})})}}}(),A=function(c,a){if(c.defaultValue===l)c.defaultValue="";if(!c.removeAttr)c.removeAttr={value:function(){c[a||"prop"].set.call(this,c.defaultValue);c.removeAttr._supvalue.call(this)}}};d.extend(h,{getID:function(){var c=(new Date).getTime();return function(a){var a=d(a),b=a.attr("id");b||(c++,b="ID-"+c,a.attr("id",b));
return b}}(),extendUNDEFProp:function(c,a){d.each(a,function(a,d){a in c||(c[a]=d)})},createPropDefault:A,data:x,moveToFirstEvent:function(){var c=d._data?"_data":"data";return function(a,b,e){if((a=(d[c](a,"events")||{})[b])&&1<a.length)b=a.pop(),e||(e="bind"),"bind"==e&&a.delegateCount?a.splice(a.delegateCount,0,b):a.unshift(b)}}(),addShadowDom:function(c,a,b){b=b||{};c.jquery&&(c=c[0]);a.jquery&&(a=a[0]);if(!b.shadowFocusElement)b.shadowFocusElement=a;var e=d.data(c,v)||d.data(c,v,{}),f=d.data(a,
v)||d.data(a,v,{});e.hasShadow=a;f.nativeElement=c;f.shadowData=e.shadowData={nativeElement:c,shadowElement:a,shadowFocusElement:b.shadowFocusElement};b.shadowChilds&&b.shadowChilds.each(function(){x(this,"shadowData",f.shadowData)});if(b.data)e.shadowData.data=b.data,f.shadowData.data=b.data;b=null},propTypes:{standard:function(c){A(c);if(!c.prop)c.prop={set:function(a){c.attr.set.call(this,""+a)},get:function(){return c.attr.get.call(this)||c.defaultValue}}},"boolean":function(c){A(c);if(!c.prop)c.prop=
{set:function(a){a?c.attr.set.call(this,""):c.removeAttr.value.call(this)},get:function(){return null!=c.attr.get.call(this)}}}},reflectProperties:function(c,a){"string"==typeof a&&(a=a.split(s));a.forEach(function(a){h.defineNodeNamesProperty(c,a,{prop:{set:function(c){d.attr(this,a,c)},get:function(){return d.attr(this,a)||""}}})})},defineNodeNameProperty:function(c,a,b){p[a]=!0;if(b.reflect)h.propTypes[b.propType||"standard"](b);["prop","attr","removeAttr"].forEach(function(e){var f=b[e];f&&(f=
"prop"===e?d.extend({writeable:!0},f):d.extend({},f,{writeable:!0}),i[e](c,a,f),"*"!=c&&h.cfg.extendNative&&"prop"==e&&f.value&&d.isFunction(f.value)&&D(c,a,f),b[e]=f)});b.initAttr&&r.content(c,a);return b},defineNodeNameProperties:function(c,a,b,d){for(var f in a)!d&&a[f].initAttr&&r.createTmpCache(c),b&&(a[f][b]?h.log("override: "+c+"["+f+"] for "+b):(a[f][b]={},["value","set","get"].forEach(function(c){c in a[f]&&(a[f][b][c]=a[f][c],delete a[f][c])}))),a[f]=h.defineNodeNameProperty(c,f,a[f]);d||
r.flushTmpCache();return a},createElement:function(c,a,b){var e;d.isFunction(a)&&(a={after:a});r.createTmpCache(c);a.before&&r.createElement(c,a.before);b&&(e=h.defineNodeNameProperties(c,b,!1,!0));a.after&&r.createElement(c,a.after);r.flushTmpCache();return e},onNodeNamesPropertyModify:function(c,a,b,e){"string"==typeof c&&(c=c.split(s));d.isFunction(b)&&(b={set:b});c.forEach(function(c){n[c]||(n[c]={});"string"==typeof a&&(a=a.split(s));b.initAttr&&r.createTmpCache(c);a.forEach(function(a){n[c][a]||
(n[c][a]=[],p[a]=!0);if(b.set){if(e)b.set.only=e;n[c][a].push(b.set)}b.initAttr&&r.content(c,a)});r.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,a,b){b||(b={});if(d.isFunction(b))b.set=b;h.defineNodeNamesProperty(c,a,{attr:{set:function(c){this.setAttribute(a,c);b.set&&b.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?l:a}},removeAttr:{value:function(){this.removeAttribute(a);b.set&&b.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:b.initAttr||!1})},
contentAttr:function(c,a,b){if(c.nodeName){if(b===l)return b=(c.attributes[a]||{}).value,null==b?l:b;"boolean"==typeof b?b?c.setAttribute(a,a):c.removeAttribute(a):c.setAttribute(a,b)}},activeLang:function(){var c=[],a={},b,e,f=/:\/\/|^\.*\//,i=function(a,b,c){return b&&c&&-1!==d.inArray(b,c.availabeLangs||[])?(a.loading=!0,c=c.langSrc,f.test(c)||(c=h.cfg.basePath+c),h.loader.loadScript(c+b+".js",function(){a.langObj[b]?(a.loading=!1,n(a,!0)):d(function(){a.langObj[b]&&n(a,!0);a.loading=!1})}),!0):
!1},g=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},n=function(a,c){if(a.activeLang!=b&&a.activeLang!==e){var d=m[a.module].options;if(a.langObj[b]||e&&a.langObj[e])a.activeLang=b,a.callback(a.langObj[b]||a.langObj[e],b),g(a.module);else if(!c&&!i(a,b,d)&&!i(a,e,d)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],b),g(a.module)}};return function(f){if("string"==typeof f&&f!==b)b=f,e=b.split("-")[0],b==e&&(e=!1),d.each(c,function(a,b){n(b)});else if("object"==
typeof f)if(f.register)a[f.register]||(a[f.register]=[]),a[f.register].push(f),f.callback();else{if(!f.activeLang)f.activeLang="";c.push(f);n(f)}return b}}()});d.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(c,a){h[c]=function(b,c,d,i){"string"==typeof b&&(b=b.split(s));var g={};b.forEach(function(b){g[b]=h[a](b,c,d,i)});return g}});h.isReady("webshimLocalization",!0)});
(function(d,h){var o=d.webshims.browserVersion;if(!(d.browser.mozilla&&5<o)&&(!d.browser.msie||12>o&&7<o)){var k={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},l=function(d,h){d.getAttribute("role")||d.setAttribute("role",h)};d.webshims.addReady(function(m,o){d.each(k,function(i,g){for(var h=d(i,m).add(o.filter(i)),j=0,k=h.length;j<k;j++)l(h[j],g)});if(m===h){var j=h.getElementsByTagName("header")[0],p=h.getElementsByTagName("footer"),g=p.length;
j&&!d(j).closest("section, article")[0]&&l(j,"banner");g&&(j=p[g-1],d(j).closest("section, article")[0]||l(j,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("details",function(d,h,o,k,l,m){var s=function(g){var i=d(g).parent("details");if(i[0]&&i.children(":first").get(0)===g)return i},j=function(g,i){var g=d(g),i=d(i),h=d.data(i[0],"summaryElement");d.data(g[0],"detailsElement",i);if(!h||g[0]!==h[0])h&&(h.hasClass("fallback-summary")?h.remove():h.unbind(".summaryPolyfill").removeData("detailsElement").removeAttr("role").removeAttr("tabindex").removeAttr("aria-expanded").removeClass("summary-button").find("span.details-open-indicator").remove()),d.data(i[0],
"summaryElement",g),i.prop("open",i.prop("open"))};h.createElement("summary",function(){var g=s(this);if(g&&!d.data(this,"detailsElement")){var i;j(this,g);d(this).bind("focus.summaryPolyfill",function(){d(this).addClass("summary-has-focus")}).bind("blur.summaryPolyfill",function(){d(this).removeClass("summary-has-focus")}).bind("mouseenter.summaryPolyfill",function(){d(this).addClass("summary-has-hover")}).bind("mouseleave.summaryPolyfill",function(){d(this).removeClass("summary-has-hover")}).bind("click.summaryPolyfill",
function(d){var g=s(this);g&&(clearTimeout(i),i=setTimeout(function(){d.isDefaultPrevented()||g.attr("open",!g.attr("open"))},0))}).bind("keydown.summaryPolyfill",function(g){if(13==g.keyCode||32==g.keyCode){var h=this;clearTimeout(i);i=setTimeout(function(){g.isDefaultPrevented()||d(h).trigger("click")},0)}}).attr({tabindex:"0",role:"button"}).prepend('<span class="details-open-indicator" />')}});var p;h.defineNodeNamesBooleanProperty("details","open",function(g){var i=d(d.data(this,"summaryElement"));
if(i){var h=g?"removeClass":"addClass",j=d(this);if(!p&&m.animate){j.stop().css({width:"",height:""});var k={width:j.width(),height:j.height()}}i.attr("aria-expanded",""+g);j[h]("closed-details-summary").children().not(i[0])[h]("closed-details-child");!p&&m.animate&&(g={width:j.width(),height:j.height()},j.css(k).animate(g,{complete:function(){d(this).css({width:"",height:""})}}))}});h.createElement("details",function(){p=!0;var g=d.data(this,"summaryElement");g||(g=d("> summary:first-child",this),
g[0]?j(g,this):(d(this).prependPolyfill('<summary class="fallback-summary">'+m.text+"</summary>"),d.data(this,"summaryElement")));d.prop(this,"open",d.prop(this,"open"));p=!1})});
