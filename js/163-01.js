$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {

            $("#one .box ul.right .one").css({ "backgroundColor": "#333", "borderBottom": "none" });
        }
        if ($(window).scrollTop() < 50) {
            console.log($(window).scrollTop());
            $("#one .box ul.right .one").css({ "backgroundColor": "#B80606", "borderBottom": "3px solid #B80606" });
        }

    })

    $("#a .jy > ul>li").mouseover(function(event) {
        console.log("wowwoo");
        $("#a .jy >ul>li").css("backgroundColor", "#E6EAED");
        $(this).css("backgroundColor", "#D1DAE1");
        var index = $(this).index();
        $("#a .jy >.gk").hide();
        $($("#a .jy > .gk")[index]).show();


    });
    $("#a .jy2 >ul>li").mouseover(function(event) {
       
        $("#a .jy2 >ul>li").css("backgroundColor", "#E6EAED");
        $(this).css("backgroundColor", "#D1DAE1");
        var index = $(this).index();
        $("#a .jy2 .gk").hide();
        $($("#a .jy2 .gk")[index]).show();


    });
    $(" #hy ul>li").mouseover(function(event) {
        $(" #hy ul>li").removeClass("active");
        $(this).attr("class", "active");


        $(" #hy .one11").hide();
        $($(" #hy .one11")[$(this).index()]).show();
    });
   /* $("#hy ul>li").mouseout(function() {

        $(this).removeClass("active");


    })*/

})
/*中部的右边*/
var tts = 0;
var mb = 0;
var timer1;
var timer2;
var num = 0;
var timer04;
var timer03;
window.onload = function() {
    setInterval(function() {
        $("#b .box1 .s2").trigger('click')
    }, 2500)
    var oS1 = document.querySelector(".s1");
    var oS2 = document.querySelector(".s2");
    var oUl1 = document.querySelector("#b .box1 .ul1");
    var oLi = document.querySelectorAll("#b .box1 .ul1 li");
    var oDiv = document.querySelectorAll("#b .xiao div");
    var oP = document.querySelectorAll(" #b .box .xiao  p");
    oS1.onclick = function() {
        // oUl1.offsetLeft=0;000000

        ttS1 = 0;
        for (var i = 0; i < oP.length; i++) {
            oP[i].style.width = 0 + "px";
        }
        timer04 = setInterval(mv1, 40);

        function mv1() {
            ttS1 = ttS1 + (25 - ttS1) / 10;
            if (-1 < ttS1 - 25 && ttS1 - 25 < 1) {
                clearInterval(timer04);
                ttS1 = 25;
            }
            oP[num].style.width = ttS1 + "px";

        }
        clearInterval(timer01);


        clearInterval(timer1);

        if (num > 0) {
            num--;
            mb = oLi[0].offsetWidth * num;
            timer1 = setInterval(move1, 40);
        } else {
            num = 6;

            oUl1.style.left = -oLi[0].offsetWidth * num + "px";

        }
    }

    function move1() {
        if (-mb < oLi[0].offsetWidth - 1) {
            tts = tts + (mb - tts) / 10;
            if (-1 < tts - mb && tts - mb < 1) {
                clearInterval(timer1);
                tts = mb;
            }
            oUl1.style.left = -tts + "px";

        }
    }
    oS2.onclick = function() {
        clearInterval(timer01);
        // oUl1.offsetLeft=0;

        ttS1 = 0;
        for (var i = 0; i < oP.length; i++) {
            oP[i].style.width = 0 + "px";
        }
        timer03 = setInterval(mv1, 40);

        function mv1() {
            ttS1 = ttS1 + (25 - ttS1) / 10;
            if (-1 < ttS1 - 25 && ttS1 - 25 < 1) {
                clearInterval(timer03);
                ttS1 = 25;
            }
            oP[num].style.width = ttS1 + "px";

        }
        if (oUl1.offsetLeft <= 0) {

            if (num <= 5) {
                num = num + 1;
            } else {
                num = 0;
                tts = 0;



            }
            mb = oLi[0].offsetWidth * num;


            clearInterval(timer2);
            timer2 = setInterval(move2, 40);
        }

    }

    function move2() {
        if (mb <= (oLi[0].offsetWidth) * 6) {
            tts = tts + (mb - tts) / 10;
            if (-1 < tts - mb && tts - mb < 1) {
                clearInterval(timer2);
                tts = mb;
            }
            oUl1.style.left = -tts + "px";
        } else {
            mb = (oLi[0].offsetWidth) * 6

        }

    }
    var ttS = 0;
    var mB = 0;
    var ttS1 = 0;
    var bb = 0;
    var timer01;
    var timer02;
    for (var i = 0; i < oDiv.length; i++) {
        oDiv[i].index = i;

        oDiv[i].onclick = function() {
            // oUl1.offsetLeft=0;
            clearInterval(timer2);
            clearInterval(timer1);
            for (var j = 0; j < oP.length; j++) {
                oP[j].style.width = 0 + "px";
            }
            bb = this.index
            num = bb;
            mb = this.index * oLi[0].offsetWidth;
            ttS1 = 0;
            clearInterval(timer01);
            clearInterval(timer02);
            timer02 = setInterval(mv, 40);


            timer01 = setInterval(move1, 40);
        }

        function mv() {
            ttS1 = ttS1 + (25 - ttS1) / 10;
            if (-1 < ttS1 - 25 && ttS1 - 25 < 1) {
                clearInterval(timer02);
            }
            oP[bb].style.width = ttS1 + "px";

        }

        /*function Move(){
        		ttS=ttS+(mB-ttS)/10;
        		if(-1<ttS-mB&&ttS-mB<1){
        			clearInterval(timer01);
        			ttS=mB;
        		}
        		oUl1.style.left=-ttS+"px";
        		
        		console.log(mB);
        }*/
    }

}

/*中间的中间*/
$(function() {
    $("#b .two .topp>div").mouseover(function() {
        $("#b .two .topp>div").css("border-bottom", "1px solid red");
        $(this).css("border-bottom", "none");
        var num = $(this).index();
        $("#b .uu p").hide();
        $("#b .uu p").each(function(index, el) {
            if (index == num) {
                $(el).show();
            }
        });


    })
})
