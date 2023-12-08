(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{7484:function(t){var e,n,r,s,i,a,u,o,h,c,d,l,f,m,$,_,v,p,g,y;t.exports=(e="millisecond",n="second",r="minute",s="hour",i="week",a="month",u="quarter",o="year",h="date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(m={})[f="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t){return t instanceof g},_=function(t,e,n){var r;if(!t)return f;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var s=t.name;m[s]=t,r=s}return!n&&r&&(f=r),r||!n&&f},v=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new g(n)},(p={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+l(Math.floor(n/60),2,"0")+":"+l(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(r,a),i=n-s<0,u=e.clone().add(r+(i?-1:1),a);return+(-(r+(n-s)/(i?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:a,y:o,w:i,d:"day",D:h,h:s,m:r,s:n,ms:e,Q:u})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=_,p.i=$,p.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},y=(g=function(){function t(t){this.$L=this.$L||_(t.locale,null,!0),this.parse(t)}var l=t.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(p.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return p},l.isValid=function(){return"Invalid Date"!==this.$d.toString()},l.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return v(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<v(t)},l.$g=function(t,e,n){return p.u(t)?this[e]:this.set(n,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,e){var u=this,c=!!p.u(e)||e,d=p.p(t),l=function(t,e){var n=p.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return c?n:n.endOf("day")},f=function(t,e){return p.w(u.toDate()[t].apply(u.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,$=this.$M,_=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case o:return c?l(1,0):l(31,11);case a:return c?l(1,$):l(0,$+1);case i:var g=this.$locale().weekStart||0,y=(m<g?m+7:m)-g;return l(c?_-y:_+(6-y),$);case"day":case h:return f(v+"Hours",0);case s:return f(v+"Minutes",1);case r:return f(v+"Seconds",2);case n:return f(v+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(t,i){var u,c=p.p(t),d="set"+(this.$u?"UTC":""),l=((u={}).day=d+"Date",u[h]=d+"Date",u[a]=d+"Month",u[o]=d+"FullYear",u[s]=d+"Hours",u[r]=d+"Minutes",u[n]=d+"Seconds",u[e]=d+"Milliseconds",u)[c],f="day"===c?this.$D+(i-this.$W):i;if(c===a||c===o){var m=this.clone().set(h,1);m.$d[l](f),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l](f);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[p.p(t)]()},l.add=function(t,e){var u,h=this;t=Number(t);var c=p.p(e),d=function(e){var n=v(h);return p.w(n.date(n.date()+Math.round(e*t)),h)};if(c===a)return this.set(a,this.$M+t);if(c===o)return this.set(o,this.$y+t);if("day"===c)return d(1);if(c===i)return d(7);var l=((u={})[r]=6e4,u[s]=36e5,u[n]=1e3,u)[c]||1,f=this.$d.getTime()+t*l;return p.w(f,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=p.z(this),s=this.$locale(),i=this.$H,a=this.$m,u=this.$M,o=s.weekdays,h=s.months,c=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].substr(0,i)},l=function(t){return p.s(i%12||12,t,"0")},f=s.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:p.s(u+1,2,"0"),MMM:c(s.monthsShort,u,h,3),MMMM:c(h,u),D:this.$D,DD:p.s(this.$D,2,"0"),d:String(this.$W),dd:c(s.weekdaysMin,this.$W,o,2),ddd:c(s.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(i),HH:p.s(i,2,"0"),h:l(1),hh:l(2),a:f(i,a,!0),A:f(i,a,!1),m:String(a),mm:p.s(a,2,"0"),s:String(this.$s),ss:p.s(this.$s,2,"0"),SSS:p.s(this.$ms,3,"0"),Z:r};return n.replace(d,function(t,e){return e||m[t]||r.replace(":","")})},l.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},l.diff=function(t,e,h){var c,d=p.p(e),l=v(t),f=6e4*(l.utcOffset()-this.utcOffset()),m=this-l,$=p.m(this,l);return $=((c={})[o]=$/12,c[a]=$,c[u]=$/3,c[i]=(m-f)/6048e5,c.day=(m-f)/864e5,c[s]=m/36e5,c[r]=m/6e4,c[n]=m/1e3,c)[d]||m,h?$:p.a($)},l.daysInMonth=function(){return this.endOf(a).$D},l.$locale=function(){return m[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=_(t,e,!0);return r&&(n.$L=r),n},l.clone=function(){return p.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},t}()).prototype,v.prototype=y,[["$ms",e],["$s",n],["$m",r],["$H",s],["$W","day"],["$M",a],["$y",o],["$D",h]].forEach(function(t){y[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,g,v),v},v.locale=_,v.isDayjs=$,v.unix=function(t){return v(1e3*t)},v.en=m[f],v.Ls=m,v)},4110:function(t){t.exports=function(t,e,n){t=t||{};var r=e.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=s;var i=function(e,r,i,a){for(var u,o,h,c=i.$locale().relativeTime||s,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],l=d.length,f=0;f<l;f+=1){var m=d[f];m.d&&(u=a?n(e).diff(i,m.d,!0):i.diff(e,m.d,!0));var $=(t.rounding||Math.round)(Math.abs(u));if(h=u>0,$<=m.r||!m.r){$<=1&&f>0&&(m=d[f-1]);var _=c[m.l];o="string"==typeof _?_.replace("%d",$):_($,r,m.l,h);break}}return r?o:(h?c.future:c.past).replace("%s",o)};r.to=function(t,e){return i(t,e,this,!0)},r.from=function(t,e){return i(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}},4430:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/members/[id]",function(){return n(2224)}])},1653:function(t,e,n){"use strict";n.d(e,{p:function(){return f}});var r=n(5893),s=n(7294),i=n(1664),a=n.n(i),u=n(7484),o=n.n(u),h=n(4110),c=n.n(h),d=n(518);o().extend(c());let l=t=>{let{authorId:e,title:n,isoDate:s,link:i,dateMiliSeconds:u}=t.item,h=(0,d.n4)(e);if(!h)return null;let c=(0,d.ci)(i);return(0,r.jsxs)("article",{className:"post-link",children:[(0,r.jsxs)(a(),{href:(0,d.gb)(h.id),className:"post-link__author",children:[(0,r.jsx)("img",{src:h.avatarSrc,className:"post-link__author-img",width:35,height:35}),(0,r.jsxs)("div",{className:"post-link__author-name",children:[(0,r.jsx)("div",{className:"post-link__author-name",children:h.name}),(0,r.jsx)("time",{dateTime:s,className:"post-link__date",children:o()(s).fromNow()})]})]}),(0,r.jsxs)("a",{href:i,className:"post-link__main-link",children:[(0,r.jsx)("h2",{className:"post-link__title",children:n}),c&&(0,r.jsxs)("div",{className:"post-link__site",children:[(0,r.jsx)("img",{src:(0,d.gO)(c),width:14,height:14,className:"post-link__site-favicon"}),c]})]}),u&&u>Date.now()-2592e5&&(0,r.jsx)("div",{className:"post-link__new-label",children:"NEW"})]})},f=t=>{var e;let[n,i]=(0,s.useState)(32),a=(null===(e=t.items)||void 0===e?void 0:e.length)||0;return a?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"post-list",children:t.items.slice(0,n).map((t,e)=>(0,r.jsx)(l,{item:t},"post-item-".concat(e)))}),a-n>0&&(0,r.jsx)("div",{className:"post-list-load",children:(0,r.jsx)("button",{onClick:()=>i(n+32),className:"post-list-load__button",children:"LOAD MORE"})})]}):(0,r.jsx)("div",{className:"post-list-empty",children:"No posts yet"})}},2224:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return h}});var r=n(5893),s=n(1653),i=n(4256),a=n(9756),u=n(518);let o=t=>{let{id:e,name:n,bio:o,avatarSrc:h,twitterUsername:c,githubUsername:d,websiteUrl:l}=t.member;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.T,{title:n,path:(0,u.gb)(e)}),(0,r.jsx)("section",{className:"member",children:(0,r.jsxs)(i.v,{children:[(0,r.jsxs)("header",{className:"member-header",children:[(0,r.jsx)("div",{className:"member-header__avatar",children:(0,r.jsx)("img",{src:h,alt:n,width:100,height:100,className:"member-header__avatar-img"})}),(0,r.jsx)("h1",{className:"member-header__name",children:n}),(0,r.jsx)("p",{className:"member-header__bio",children:o}),(0,r.jsxs)("div",{className:"member-header__links",children:[c&&(0,r.jsx)("a",{href:"https://twitter.com/".concat(c),className:"member-header__link",children:(0,r.jsx)("img",{src:"/icons/twitter.svg",alt:"Twitterのユーザー@".concat(c),width:22,height:22})}),d&&(0,r.jsx)("a",{href:"https://github.com/".concat(d),className:"member-header__link",children:(0,r.jsx)("img",{src:"/icons/github.svg",alt:"GitHubのユーザー@".concat(d),width:22,height:22})}),l&&(0,r.jsx)("a",{href:l,className:"member-header__link",children:(0,r.jsx)("img",{src:"/icons/link.svg",alt:"ウェブサイトのリンク",width:22,height:22})})]})]}),(0,r.jsx)("div",{className:"member-posts-container",children:(0,r.jsx)(s.p,{items:t.postItems})})]})})]})};var h=!0;e.default=o}},function(t){t.O(0,[983,774,888,179],function(){return t(t.s=4430)}),_N_E=t.O()}]);