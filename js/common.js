//사이드 메뉴 클릭이벤트
$(document).ready(function() {
    $(".d1 > a").click(function(e) {
        e.preventDefault(); // 기본 동작을 막음

        var parentD1 = $(this).parent(".d1");
        var twoDepthMenu = parentD1.find(".two-depth");

        // 클릭한 one-depth 메뉴를 제외하고 모든 two-depth 메뉴를 숨김
        $(".two-depth").not(twoDepthMenu).hide();
        $(".d1").not(parentD1).removeClass("active");

        // 현재 클릭한 one-depth 메뉴의 two-depth 메뉴를 토글
        twoDepthMenu.toggle();

        // 현재 클릭한 one-depth 메뉴에 active 클래스를 추가
        parentD1.toggleClass("active");
    });

    $(document).ready(function() {
        $("#gnb").mouseenter(function() {
            // 마우스가 올라갔을 때
            $("#header").addClass("on");
            $(".gnb-bg").addClass("on");
            $(".depth2").addClass("on");
            $(".dim").show();
        }).mouseleave(function() {
            // 마우스가 나갔을 때
            $("#header").removeClass("on");
            $(".gnb-bg").removeClass("on");
            $(".depth2").removeClass("on");
            $(".dim").hide();
        });
    });
});