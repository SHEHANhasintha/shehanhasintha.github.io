var e;e=jQuery,skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"}),e((function(){var o=e(window),a=e("body");a.addClass("is-loading"),o.on("load",(function(){window.setTimeout((function(){a.removeClass("is-loading")}),100)})),e("form").placeholder();var n=e("#banner");if(n.length>0){skel.vars.IEVersion<12&&(o.on("resize",(function(){var e=.6*o.height(),a=n.height();n.css("height","auto"),window.setTimeout((function(){a<e&&n.css("height",e+"px")}),0)})),o.on("load",(function(){o.triggerHandler("resize")})));var i=n.data("video");i&&o.on("load.banner",(function(){o.off("load.banner"),!skel.vars.mobile&&!skel.breakpoint("large").active&&skel.vars.IEVersion>9&&n.append('<video autoplay loop><source src="'+i+'.mp4" type="video/mp4" /><source src="'+i+'.webm" type="video/webm" /></video>')})),n.find(".more").addClass("scrolly")}e(".scrolly").scrolly(),o.on("load",(function(){var o=e(".thumbnails");o.length>0&&o.poptrox({onPopupClose:function(){a.removeClass("is-covered")},onPopupOpen:function(){a.addClass("is-covered")},baseZIndex:10001,useBodyOverflow:!1,overlayColor:"#222226",overlayOpacity:.75,popupLoaderText:"",fadeSpeed:500,usePopupDefaultStyling:!1,windowMargin:skel.breakpoint("small").active?5:50})})),o.on("load",(function(){o.trigger("scroll")}))}));