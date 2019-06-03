(window.policyHighlightsJsonpFunction=window.policyHighlightsJsonpFunction||[]).push([[1],{Hglc:function(t,e,i){},tjUo:function(t,e,i){"use strict";i.r(e);i("Hglc");function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){o(t,e,i[e])})}return t}({},{autoHighlight:!0,highlights:[],container:document,keywordBackgroundColor:"#ffff00",keywordTextColor:"#000000",actionBackgroundColor:"#fcf1cd",actionTextColor:"#000000"},e),this.highlightMap={},this.keywordDetails=null,this.config.autoHighlight&&this.parseHighlights()}var e,i,l;return e=t,(i=[{key:"parseHighlights",value:function(){var t=this,e=function(e,i){var o=e.text.replace(/[.']/g,"").replace(/[\-]/g," ");o in t.highlightMap?-1===t.highlightMap[o].indexOf(i)&&t.highlightMap[o].push(i):t.highlightMap[o]=[i],t.highlight(e)};this.config.highlights.forEach(function(i,o){(i.keywords||"").split(",").forEach(function(t){e({text:t,type:"keyword"},o)}),(i.actions||"").split(",").forEach(function(i){e({text:i,type:"action",backgroundColor:t.config.actionBackgroundColor,textColor:t.config.actionTextColor},o)})})}},{key:"highlight",value:function(t){var e=t.text,i=void 0===e?"":e,o=t.backgroundColor,n=void 0===o?this.config.keywordBackgroundColor:o,l=t.textColor,a=void 0===l?this.config.keywordTextColor:l,h=t.type;if(0!==i.length){var r,g=new RegExp("(^|\\W)"+i.replace(/[\\^$*+.?[\]{}()|]/,"\\$&")+"($|\\W)","im"),s=[],c=["body","head","html","script","style","title","form"];this.config.container.normalize();for(var u=this.config.container.firstChild;null!=u;){if(u.nodeType!=Node.TEXT_NODE||u.parentNode.dataset.highlight||-1!==c.indexOf(u.parentNode.nodeName.toLowerCase())){if(u.nodeType==Node.ELEMENT_NODE&&null!=u.firstChild){s.push(u),u=u.firstChild;continue}}else{r="string"==typeof u.textContent?u.textContent:u.innerText;var d=g.exec(r);if(null!=d){var p=document.createDocumentFragment();d.index>0&&p.appendChild(document.createTextNode(d.input.substr(0,d.index)));var f=this.highlightStyle({style:["display:inline-block;margin-left:3px;margin-right:3px;"],backgroundColor:n,textColor:a}),y=document.createElement("span");y.setAttribute("style",f),h&&(y.dataset.type=h),y.dataset.highlight=!0,y.appendChild(document.createTextNode(d[0])),p.appendChild(y),y.addEventListener("mouseover",this.showDetails.bind(this)),y.addEventListener("mouseout",this.hideDetails.bind(this)),d.index+d[0].length<d.input.length&&p.appendChild(document.createTextNode(d.input.substr(d.index+d[0].length))),u.parentNode.replaceChild(p,u),u=y}}for(;null!=u&&null==u.nextSibling;)u=s.pop();null!=u&&(u=u.nextSibling)}}}},{key:"highlightStyle",value:function(t){var e=t.style,i=void 0===e?[]:e,o=t.backgroundColor,n=void 0===o?this.config.keywordBackgroundColor:o,l=t.textColor,a=void 0===l?this.config.keywordTextColor:l;return n&&n.length>0&&i.push("background-color: "+n+";"),a&&a.length>0&&i.push("color: "+a+";"),i.join("")}},{key:"showDetails",value:function(t){var e=t.target.innerHTML.replace(/[\\^$*+.?[\]{}()<>|’'"“”;:\/©®]/g,"").replace(/&nbsp;/g,"").replace(/[\-&,]/g," ").trim().toLowerCase();if(e in this.highlightMap){this.hideDetails();var i=t.pageY-t.offsetY+t.target.clientHeight+1,o=t.pageX-t.offsetX+t.target.clientWidth/2-42,n=document.createElement("div");n.setAttribute("class","policyHighlight__popup"),n.setAttribute("style","top:"+i+"px;left:"+o+"px;"),n.innerHTML=this.getDetailsHTML(e,t.target.dataset.type),document.getElementsByTagName("body")[0].appendChild(n),this.keywordDetails=n}}},{key:"hideDetails",value:function(){this.keywordDetails&&this.keywordDetails.parentNode.removeChild(this.keywordDetails),this.keywordDetails=null}},{key:"getDetailsHTML",value:function(t,e){var i=this,o=t;if(e){var n="";n="keyword"===e?this.highlightStyle({}):this.highlightStyle({backgroundColor:this.config.actionBackgroundColor,textColor:this.config.actionTextColor}),o+=": "+this.getHTMLTag({value:e,style:n,tag:"span",className:"policyHighlight__tag"})}var l=this.getHTMLTag({value:o,className:"policyHighlight__text"});if(e){var a=["An important",e,"in the below"];this.highlightMap[t].length>1?a.push(this.highlightMap[t].length+" highlights."):a.push("highlight."),l+=this.getHTMLTag({value:a.join(" "),className:"policyHighlight__type"})}var h=this.highlightMap[t].map(function(t){return i.getHighlightHTML(i.config.highlights[t])});return l+=this.getHTMLTag({value:h.join(""),className:"policyHighlight__highlights"}),this.getHTMLTag({value:l,className:"policyHighlight__details"})}},{key:"getHighlightHTML",value:function(t){var e=this.getHTMLTag({value:t.name,className:"policyHighlight__name"})+this.getHTMLTag({value:t.description,className:"policyHighlight__description"});return this.getHTMLTag({value:e,className:"policyHighlight__highlight"})}},{key:"getHTMLTag",value:function(t){var e=t.value,i=void 0===e?"":e,o=t.className,n=void 0===o?"":o,l=t.style,a=void 0===l?"":l,h=t.tag,r=void 0===h?"div":h;return i&&i.length>0&&"<"+r+' class="'+n+'" style="'+a+'">'+i+"</"+r+">"}}])&&n(e.prototype,i),l&&n(e,l),t}();e.default=l}}]);