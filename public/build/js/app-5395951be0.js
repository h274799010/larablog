function randomRange(e,t){return Math.random()*(t-e)+e}$(document).ready(function(e){var t=300,n=1200,i=700,o=e(".js-back-to-top");e(window).scroll(function(){e(this).scrollTop()>t?o.addClass("back-to-top-is-visible"):o.removeClass("back-to-top-is-visible back-to-top-fade-out"),e(this).scrollTop()>n&&o.addClass("back-to-top-fade-out")}),o.on("click",function(t){t.preventDefault(),e("body,html").animate({scrollTop:0},i)})});var App=function(){"use strict";var e=function(){$(".work-v1-collapse").hide(),$(".work-v1").on("hover",function(){$(this).find(".work-v1-collapse").slideToggle(400)})},t=function(){$(function(){$("a[href*=#scroll_]:not([href=#scroll_])").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top-70},1e3),!1}})})},n=function(){var e,t=$(window).height();e=$(document.body).hasClass("promo-top-offset")?$(".fullheight-header-offset").height():0,$(".fullheight").css("height",t-e),$(window).resize(function(){var t=$(window).height();$(".fullheight").css("height",t-e)})},i=function(){$(".vertical-center-aligned").each(function(){$(this).css("padding-top",$(this).parent().height()/2-$(this).height()/2)}),$(window).resize(function(){$(".vertical-center-aligned").each(function(){$(this).css("padding-top",$(this).parent().height()/2-$(this).height()/2)})})},o=function(){var e=($(".search-fullscreen-bg-overlay"),$(".search-fullscreen-close")),t=$(".search-fullscreen-trigger"),n=$(".search-fullscreen-overlay");t.on("click",function(){n.removeClass("search-fullscreen-overlay-show"),n.addClass("search-fullscreen-overlay-show")}),e.on("click",function(e){e.stopPropagation(),n.removeClass("search-fullscreen-overlay-show")})};return{init:function(){e(),t(),n(),i(),o()}}}();$(document).ready(function(){App.init()});var HeaderSticky=function(){"use strict";var e=function(){$(".header-sticky").offset().top>15&&$(".header-sticky").addClass("header-shrink"),$(window).on("scroll",function(){$(".header-sticky").offset().top>15?$(".header-sticky").addClass("header-shrink"):$(".header-sticky").removeClass("header-shrink")})};return{init:function(){e()}}}();$(document).ready(function(){HeaderSticky.init()});var Animsition=function(){"use strict";var e=function(){$(document).ready(function(){$(".animsition").animsition({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,loading:!0,loadingParentElement:"html",loadingClass:"animsition-loading",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration","-moz-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"html",transition:function(e){window.location.href=e}})})};return{init:function(){e()}}}();$(document).ready(function(){Animsition.init()});var Wow=function(){"use strict";var e=function(){var e=new WOW({boxClass:"wow",offset:0,mobile:!1,tablet:!1});e.init()};return{init:function(){e()}}}();$(document).ready(function(){Wow.init()});var FooterReveal=function(){"use strict";var e=function(){$(".footer-reveal").footerReveal()};return{init:function(){e()}}}();$(document).ready(function(){FooterReveal.init()}),Particle3D=function(e){THREE.Particle.call(this,e),this.velocity=new THREE.Vector3(0,(-2),0),this.velocity.rotateX(randomRange(-45,45)),this.velocity.rotateY(randomRange(0,360)),this.gravity=new THREE.Vector3(0,0,0),this.drag=1},Particle3D.prototype=new THREE.Particle,Particle3D.prototype.constructor=Particle3D,Particle3D.prototype.updatePhysics=function(){this.velocity.multiplyScalar(this.drag),this.velocity.addSelf(this.gravity),this.position.addSelf(this.velocity)};var TO_RADIANS=Math.PI/180;THREE.Vector3.prototype.rotateY=function(e){cosRY=Math.cos(e*TO_RADIANS),sinRY=Math.sin(e*TO_RADIANS);var t=this.z,n=this.x;this.x=n*cosRY+t*sinRY,this.z=n*-sinRY+t*cosRY},THREE.Vector3.prototype.rotateX=function(e){cosRY=Math.cos(e*TO_RADIANS),sinRY=Math.sin(e*TO_RADIANS);var t=this.z,n=this.y;this.y=n*cosRY+t*sinRY,this.z=n*-sinRY+t*cosRY},THREE.Vector3.prototype.rotateZ=function(e){cosRY=Math.cos(e*TO_RADIANS),sinRY=Math.sin(e*TO_RADIANS);var t=this.x,n=this.y;this.y=n*cosRY+t*sinRY,this.x=n*-sinRY+t*cosRY},$(function(){function init(){camera=new THREE.PerspectiveCamera(75,containerWidth/containerHeight,1,1e4),camera.position.z=1e3,scene=new THREE.Scene,scene.add(camera),renderer=new THREE.CanvasRenderer,renderer.setSize(containerWidth,containerHeight);for(var e=new THREE.ParticleBasicMaterial({map:new THREE.Texture(particleImage)}),t=0;t<snowNum;t++)particle=new Particle3D(e),particle.position.x=2e3*Math.random()-1e3,particle.position.y=2e3*Math.random()-1e3,particle.position.z=2e3*Math.random()-1e3,particle.scale.x=particle.scale.y=1,scene.add(particle),particles.push(particle);container.appendChild(renderer.domElement),document.addEventListener("mousemove",onDocumentMouseMove,!1),document.addEventListener("touchstart",onDocumentTouchStart,!1),document.addEventListener("touchmove",onDocumentTouchMove,!1),setInterval(loop,25)}function onDocumentMouseMove(e){mouseX=e.clientX-windowHalfX,mouseY=e.clientY-windowHalfY}function onDocumentTouchStart(e){1==e.touches.length&&(e.preventDefault(),mouseX=e.touches[0].pageX-windowHalfX,mouseY=e.touches[0].pageY-windowHalfY)}function onDocumentTouchMove(e){1==e.touches.length&&(e.preventDefault(),mouseX=e.touches[0].pageX-windowHalfX,mouseY=e.touches[0].pageY-windowHalfY)}function loop(){for(var i=0;i<particles.length;i++){var particle=particles[i];with(particle.updatePhysics(),particle.position)y<-1e3&&(y+=2e3),x>1e3?x-=2e3:x<-1e3&&(x+=2e3),z>1e3?z-=2e3:z<-1e3&&(z+=2e3)}camera.position.x+=.005*(mouseX-camera.position.x),camera.position.y+=.005*(-mouseY-camera.position.y),camera.lookAt(scene.position),renderer.render(scene,camera)}var container=document.querySelector(".snow-container");if(!/MSIE 6|MSIE 7|MSIE 8/.test(navigator.userAgent)){/MSIE 9|MSIE 10/.test(navigator.userAgent)&&$(container).css("height",$(window).height()).bind("click",function(){$(this).fadeOut(1e3,function(){$(this).remove()})});var containerWidth=$(container).width(),containerHeight=$(container).height(),particle,camera,scene,renderer,mouseX=0,mouseY=0,windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2,particles=[],particleImage=new Image;particleImage.src="image/snow.png";var snowNum=500;init()}});