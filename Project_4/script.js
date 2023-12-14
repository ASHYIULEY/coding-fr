$(document).ready(function(){



    
    $(".grid-item phase2").click(function(){
        $(".phase0,.phase1,.phase3,.phase4,.phase5,.phase6,.phase7, .phase8").fadeToggle("slow");
        $(".div2-vid").toggle();
        $(this).toggleClass("front","slow");
    });
    
    $(".grid-item phase4").click(function(){
        $(".phase1,.phase2,.phase3,.phase0,.phase5,.phase6,.phase7, .phase8").fadeToggle("slow");
        $(".div4-vid").toggle();
        $(this).toggleClass("front","slow");
    });
    
    
    $(".grid-item phase6").click(function(){
        $(".phase1,.phase2,.phase3,.phase4,.phase5,.phase0,.phase7, .phase8").fadeToggle("slow");
        $(".div6-vid").toggle();
        $(this).toggleClass("front","slow");
    });

    

});