"use strict";(self.webpackChunkgithub_landing=self.webpackChunkgithub_landing||[]).push([[3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,u=i.length;-1!==t.code.indexOf(r=n(a,u));)++u;return i[u]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function i(u){for(var c=0;c<u.length&&!(r>=o.length);c++){var g=u[c];if("string"===typeof g||g.content&&"string"===typeof g.content){var l=o[r],s=t.tokenStack[l],p="string"===typeof g?g:g.content,f=n(a,l),k=p.indexOf(f);if(k>-1){++r;var h=p.substring(0,k),d=new e.Token(a,e.tokenize(s,t.grammar),"language-"+a,s),m=p.substring(k+f.length),y=[];h&&y.push.apply(y,i([h])),y.push(d),m&&y.push.apply(y,i([m])),"string"===typeof g?u.splice.apply(u,[c,1].concat(y)):g.content=y}}else g.content&&i(g.content)}return u}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.ce0e4196.chunk.js.map