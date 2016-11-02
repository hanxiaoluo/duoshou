!function(t){function n(i){if(e[i])return e[i].exports;var a=e[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";e(13),e(11),e(12)},function(t,n){t.exports=jQuery},,,,,,,function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),s=e(1),o=e(9),r=function(){function t(){i(this,t),this.init(),this.score=0,this.timeLeft=10,this.render(),this.end=s.Callbacks()}return a(t,[{key:"init",value:function(){var t=this;this.bindEvents(),this.render(),o(function(){t.start(),t.tick()})}},{key:"bindEvents",value:function(){var t=s(".game-wrap").off(),n=this;t.on("touchstart",function(){s("#music_duo")[0].play()}),t.on("touchstart",".duo",function(){var t=s(this);t.data("hasClick")||(t.data("hasClick",!0),t.attr("class","duo duo—styleC"),clearTimeout(t.data("timer")),setTimeout(function(){t.remove()},1e3))}),t.on("touchstart",".duo-p",function(){var t=s(this).parent();if(!t.data("hasClick"))return t.data("hasClick",!0),t.attr("class","duo duo—styleB"),n.score++,n.render(),clearTimeout(t.data("timer")),setTimeout(function(){t.remove()},1e3),s("#music_success")[0].play(),!1})}},{key:"newItem",value:function(){var t='\n        <div class="duo duo—styleA">\n            <a href="javascript:void(0)" class="duo-p"></a>\n            <div class="duo-knife"></div>\n        </div>\n        ',n=s(t).css({left:~~(80*Math.random())+"%",top:~~(80*Math.random())+"%",transform:"scale("+(1+ +Math.random().toFixed(2))+")"});s(".game-box").append(n);var e=setTimeout(function(){n.remove()},1e3);n.data("timer",e)}},{key:"start",value:function(t){if(!(this.timeLeft<=0)){var n=this;t=t||1e3,n.newItem(),setTimeout(function(){n.start(t-50)},t)}}},{key:"tick",value:function(){var t=this,n=setInterval(function(){t.timeLeft--,t.render(),t.timeLeft<=0&&(clearInterval(n),setTimeout(function(){t.end.fire(t.score)},1600))},1e3)}},{key:"render",value:function(){s(".game-score").html(this.score),s(".game-time").html(this.timeLeft)}}]),t}();t.exports=r},function(t,n,e){"use strict";function i(){s(".game-shadow,.num-left-wrap,.num-left").removeAttr("style")}function a(t){o.stop(!0,!1),i();var n=s(".num-left-wrap").removeAttr("style"),e=s(".num-go").removeAttr("style"),a=s(".num-left").removeAttr("style");o.will(function(t){s(".game-shadow").show(),a.removeClass("num-1 num-2 num-3").addClass("num-3").animateCss("bounceIn")}).delay(1e3).will(function(t){a.removeClass("num-1 num-2 num-3").addClass("num-2").animateCss("bounceIn")}).delay(1e3).will(function(t){a.removeClass("num-1 num-2 num-3").addClass("num-1").animateCss("bounceIn")}).delay(1e3).will(function(){a.hide(),n.css("background","none"),e.show().animateCss("bounceIn")}).delay(1e3).will(function(){s(".game-shadow").hide(),t&&t()})}var s=e(1),o=s({});t.exports=a},function(t,n,e){"use strict";function i(){u++;var t=~~(100*u/o.length)+"%";r.html(t)}function a(t){var n=s.Deferred(),e=new Image;return e.src=t,e.complete?(i(),n.resolve()):e.onload=function(){i(),n.resolve()},n}var s=e(1),o=["loading_bg.png","logo.png","music.png","music_sel.png","num_bg.png","playPool_bg.png","playPool_txt.png","result-2code.png","result-imgs01.png","result-imgs02.png","result-imgs03.png","result-imgs04.png","result_bg.png","result_inner.png"],r=s(".loading-info"),u=0,c=o.map(function(t){return a("img/"+t)});t.exports=function(){return s.when.apply(s,c).done(function(){r.html("100%")})}},function(t,n,e){"use strict";var i=e(1);i(".music-bg-lbl").click(function(){var t=i(this);t.toggleClass("music-stop"),t.hasClass("music-stop")?i("#music_bg")[0].pause():i("#music_bg")[0].play()})},function(t,n,e){"use strict";function i(){u.slideTo(2),s=new r,s.end.add(function(t){u.slideTo(3),a(t)})}function a(t){var n=4;n=t>12?1:t>10?2:t>8?3:4;var e=["<h2>骨灰级剁手党</h2><p>总在深夜想起<br/>诗和远方<br/>还有钱包空荡荡</p>","<h2>重度剁手党患者</h2><p>买买买时指点江山<br/>激扬文字<br/>却总在深夜听钱哭的声音</p>","<h2>中度剁手党患者</h2><p>买买买时残留<br/>一丝“人性”<br/>尚能顾虑到钱包的感受</p>","<h2>专业伪剁手党</h2><p>梦想成为一枚叱咤江湖<br/>的剁手党老大<br/>奈何金钱总是投奔他方</p>"][n-1],i="img/result-imgs0"+n+".png";o(".result-img").attr("src",i),o(".result-content").html(e)}var s,o=e(1),r=e(8),u=new Swiper("#main_wrap",{effect:"fade","":""});new Swiper("#result_wrap",{direction:"vertical","":""});o(".btn-ag").click(function(){i()}),e(10)().done(function(){setTimeout(function(){u.slideTo(1),o({}).will(function(){return o(".index-title-wrap").animateCss("bounceIn")}).delay(1e3).will(function(){return o(".index-title-wrap").animateCss("bounceIn")})},300)}),setInterval(function(){o(".slide-ready .start-btn").animateCss("wobble")},2e3),o(".start-btn").click(function(){u.slideTo(2),i()})},function(t,n,e){"use strict";var i=e(1);i.fn.extend({animateCss:function(t,n){var e="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";this.addClass("animated "+t).one(e,function(){i(this).removeClass("animated "+t),n&&n()})}}),i.fn.will=function(t,n){return this.queue(n||"fx",function(n){t&&"function"==typeof t&&t.call(i(this)),n()}),this}}]);