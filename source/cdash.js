/*! videojs-contrib-dash - v2.0.0 - 2015-10-16
 * Copyright (c) 2015 Brightcove  */
!function(a,b){"use strict";function c(a,d){var e,f=d.options_;this.tech_=d,this.el_=d.el(),this.elParent_=this.el_.parentNode,a.src&&(d.isReady_=!1,e=a.src,this.keySystemOptions_=c.buildDashJSProtData(a.keySystemOptions),c.hideErrors(this.elParent_),c.useVideoJSDebug&&c.useVideoJSDebug(b),c.context_=c.context_||new Dash.di.DashContext,this.mediaPlayer_=new MediaPlayer(c.context_),this.mediaPlayer_.startup(),this.mediaPlayer_.attachView(this.el_),f.autoplay||this.mediaPlayer_.setAutoPlay(!1),this.mediaPlayer_.retrieveManifest(e,b.bind(this,this.initializeDashJS)))}var d=function(a){return"[object Array]"===Object.prototype.toString.call(a)},e=function(a){return"[object Object]"===Object.prototype.toString.call(a)},f=function(a,b){var c,d,g,h;h={};for(c in b)b.hasOwnProperty(c)&&(d=a[c],g=b[c],e(d)&&e(g)?a[c]=f(d,g):a[c]=b[c]);return a};c.prototype.initializeDashJS=function(a,d){var e={};return d?(c.showErrors(this.elParent_),this.tech_.triggerReady(),void this.dispose()):(c.getWidevineProtectionData&&(e=c.getWidevineProtectionData(a),this.keySystemOptions_=f(this.keySystemOptions_,e)),void this.resetSrc_(b.bind(this,function(){c.showErrors(this.elParent_),this.mediaPlayer_.attachSource(a,null,this.keySystemOptions_),this.tech_.triggerReady()})))},c.hideErrors=function(a){a.className+=" vjs-dashjs-hide-errors"},c.showErrors=function(a){setTimeout(function(){a.className=a.className.replace(" vjs-dashjs-hide-errors","")},250)},c.buildDashJSProtData=function(a){var b,c,e,g={};if(!a||!d(a))return g;for(e=0;e<a.length;e++)b=a[e],c=f({},b.options),c.licenseUrl&&(c.laURL=c.licenseUrl,delete c.licenseUrl),g[b.name]=c;return g},c.prototype.resetSrc_=function(a){this.el_&&(this.el_.src="",this.el_.setMediaKeys?this.el_.setMediaKeys(null).then(a,a):a())},c.prototype.dispose=function(){this.mediaPlayer_&&this.mediaPlayer_.reset(),this.resetSrc_(function(){})},a.MediaSource&&b.getComponent("Html5").registerSourceHandler({canHandleSource:function(a){var b=/^application\/dash\+xml/i,c=/\.mpd/i;return b.test(a.type)?"probably":c.test(a.src)?"maybe":""},handleSource:function(a,b){return new c(a,b)}},0),b.Html5DashJS=c}(window,window.videojs);