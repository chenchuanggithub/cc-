$(function() {
    $("#celan .icon-unfold,.fix").click(function() {

        if ($("#celan").width() > 70) {
        	$("#content .wrap").css({marginLeft:50});

            $("#celan .fix").css({ color: "white" })
            $("#celan a").css({ color: 'transparent' })
            $("#celan ").css("width", 50);



        } else {
        	$("#content .wrap").css("marginLeft",180);
            $("#celan ").css("width", 180);
            $("#celan .fix").css({ color: "transparent" })
            $("#celan a").css({ color: 'white' })




        }

    })
    $("#celan .one").click(function() {
        if ($("#celan .one1").is(":hidden")) {
            $("#celan .one>.jiantou").css({ transform: "rotate(0deg)", transition: "all 0.5s ease" })
            $("#celan .one1").slideDown(200);
        } else {
            $("#celan .one>.jiantou").css({ transform: "rotate(-90deg)", transition: "all 0.5s ease" })
            $("#celan .one1").slideUp(200);
        }

    })
    $("#celan .two").click(function() {
        if ($("#celan .two1").is(":hidden")) {
            $("#celan .two>.jiantou").css({ transform: "rotate(0deg)", transition: "all 0.5s ease" })
            $("#celan .two1").slideDown(200);
        } else {
            $("#celan .two>.jiantou").css({ transform: "rotate(-90deg)", transition: "all 0.5s ease" })
            $("#celan .two1").slideUp(200);
        }

    })
    $("#one #fff").click(function() {
        console.log("999");
        $(this).css(backgroundColor, "#fff");
    });
    $("#one .zd").click(function() {


        if ($(this).find($('.caret')).attr("name") !== "xiaoming") {


            $(this).find($('.caret')).attr({
                name: 'xiaoming',

            });
            $(this).find($('.caret')).css({ transform: "rotate(-180deg)", transition: "all 0.5s ease" });


        } else {
            $(this).find($('.caret')).css({ transform: "rotate(0deg)", transition: "all 0.5s ease" });
            $(this).find($('.caret')).removeAttr('name');
        }



    })
    $("#one .isech").click(function(event) {
             event.stopPropagation();
        if ($(".isech .sech").is(":hidden")) {
            $(".isech .sech").show();
        } else {

            $(".isech .sech").hide();
        }

        $("#one .isech >.sech>input").click(function(event) {
            event.stopPropagation();
            if ($(".isech .sech").is(":hidden")) {
                $(".isech .sech").show();
            }


        })
         $("#one .isech >.sech>input").blur(function(event) {
         
         	 $(".isech .sech").hide();
         });
         
         $(window).click(function(event) {
         	$(".isech .sech").hide();
         });
    })

  $(".dredge>a").click(function(){
   $(this).next().toggleClass("icon-down");

    $(this).next().toggleClass("icon-up");
   
    if($(this).next().hasClass("icon-down")){
        $(".classify").css({"display": "none"})
        $("#nb #chenchuang").css({"display": "none"})
    }else{
         $(".classify").css({"display":"inline-block"})
         if($(".classify").width()<300){
             $("#nb #chenchuang").css({"display": "inline-block"})
         }

    }

  	;
  })
})
