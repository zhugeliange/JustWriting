var DISQUSWIDGETS,disqus_domain,disqus_shortname;void 0===DISQUSWIDGETS&&(DISQUSWIDGETS=function(){var t={},e=document.getElementsByTagName("HEAD")[0]||document.body,n=0,i={},o={identifier:1,url:2,slug:3};return t.domain="disqus.com",t.forum="",t.getCount=function(){var s,a,u=[],r=0,d=10;a=document.getElementsByTagName("A");for(var m=0;m<a.length;m++)if(a[m].href.indexOf("#disqus_thread")>=0){var c=a[m],l=void 0,f=void 0;(c.hasAttribute?c.hasAttribute("data-disqus-identifier"):null!==c.getAttribute("data-disqus-identifier"))?(l=o.identifier,f=c.getAttribute("data-disqus-identifier")):(c.hasAttribute?c.hasAttribute("data-disqus-slug"):null!==c.getAttribute("data-disqus-slug"))?(l=o.slug,f=c.getAttribute("data-disqus-slug")):(l=o.url,f=c.href.replace("#disqus_thread","")),i[n++]={element:c,type:l,value:f}}for(s in i)i.hasOwnProperty(s)&&u.push(encodeURIComponent(s)+"="+encodeURIComponent(i[s].type)+","+encodeURIComponent(i[s].value));for(s=u.slice(r,d);s.length>0;)a=document.createElement("script"),a.type="text/javascript",a.async=!0,a.src=document.location.protocol+"//"+t.forum+"."+t.domain+"/count.js?q=1&"+s.join("&"),e.appendChild(a),r+=10,d+=10,s=u.slice(r,d)},t.displayCount=function(t){for(var e,n,o,s,a=0;a<t.counts.length;a++)e=t.counts[a],(n=i[e.uid])&&(o=0===e.comments?t.text.comments.zero:1==e.comments?t.text.comments.one:t.text.comments.multiple,s=o.replace("{num}",e.comments),t.showReactions&&""!==(o=0===e.reactions?t.text.reactions.zero:1==e.reactions?t.text.reactions.one:t.text.reactions.multiple)&&(s+=" "+t.text.and+" "+o.replace("{num}",e.reactions)),n.element.innerHTML=s)},t}()),void 0!==disqus_domain&&(DISQUSWIDGETS.domain=disqus_domain),DISQUSWIDGETS.forum=disqus_shortname,DISQUSWIDGETS.getCount();