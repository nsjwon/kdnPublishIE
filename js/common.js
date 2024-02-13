//헤더 메뉴 드롭다운
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

//레프트 메뉴 클릭이벤트
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
});

//메인페이지 제안검토 카테고리 설정 셀렉트박스
$(document).ready(function() {
    $(".ct-select > a").click(function(event) {
        $(".ct-select").toggleClass("open");
        if ($(".ct-select").hasClass("open")) {
            $(".ct-option").show();
        } else {
            $(".ct-option").hide();
        }
        event.stopPropagation();
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.ct-select').length) {
            $(".ct-option").hide();
            $(".ct-select").removeClass("open");
        }
    });

    $(".ct-option li a").click(function() {
        var selectedOptionText = $(this).text();
        $(".ct-select > a").text(selectedOptionText);
        $(".ct-option").hide();
        $(".ct-select").removeClass("open");
    });
});


//제안 상세 페이지 내용 접었다 폈다 하는 기능
$(document).ready(function() {
    $(".board-block").on("click", ".btn-accordion", function(event) {
        var boardBlock = $(this).closest(".board-block");
        boardBlock.find(".board-list").toggle();
        boardBlock.toggleClass("fold");
        $(this).toggleClass("fold");
        
        if (boardBlock.hasClass("fold")) {
            boardBlock.find(".board-list").hide();
            boardBlock.find(".caution-txt").hide();
        } else {
            boardBlock.find(".board-list").show();
            boardBlock.find(".caution-txt").show();
        }
    });
});


//팝업 이벤트
$(document).ready(function() {
    $(".selectable").click(function(event) {
        $(".selectable").removeClass("select");
        $(this).toggleClass("select");
    });
});

$(document).ready(function() {
    const body = $('body')[0];
    // 팝업 열기 버튼 클릭 이벤트
    $('.popup-button').click(function() {
        var target = $(this).data('target');
        $(target).show();
        //본문창 스크롤 막기
        $('body').addClass('scrollLock');
    });
    
    // 팝업 닫기 버튼 클릭 이벤트
    $('.popup-panel .close-button').click(function() {
        $(this).closest('.popup-panel').hide();
        //본문창 스크롤 막기 해제
        $('body').removeClass('scrollLock');
    });
});

//부서 찾기 팝업 조직도 클릭이벤트
$(document).ready(function() {
    $(".p2 > ul").hide();

    $(".p1 > a, .p2 > a, .parttree-wrap .p3 > a").click(function(e) {
        e.preventDefault();

        var parentP = $(this).parent();
        var childUl = parentP.find("ul");

        // .p3에 대한 처리
        if (parentP.hasClass("p3")) {
            $(".parttree-wrap .p3").removeClass("choose");
            parentP.toggleClass("choose");

            // 만약 choose 클래스가 있다면 부모 <ul>을 보이도록 함
            if (parentP.hasClass("choose")) {
                parentP.closest("ul").show();
            }
        } else {
            // .p1, .p2에 대한 처리
            parentP.toggleClass("open");
            childUl.toggle();
        }
    });
});

//검토자 조회 팝업 조직도 클릭이벤트
$(document).ready(function() {
    $(".f2 > ul").hide();
    // $(".f3 > ul").hide();

    $(".f1 > a, .f2 > a, .f3 > a, .findperson-wrap .f4 > a").click(function(e) {
        e.preventDefault();

        var parentP = $(this).parent();
        var childUl = parentP.find("ul");

        // .p4에 대한 처리
        if (parentP.hasClass("f4")) {
            $(".findperson-wrap .f4").removeClass("choose");
            parentP.toggleClass("choose");

            // 만약 choose 클래스가 있다면 부모 <ul>을 보이도록 함
            if (parentP.hasClass("choose")) {
                parentP.closest("ul").show();
            }
        } else {
            // .p1, .p2, .p3에 대한 처리
            parentP.toggleClass("open");
            childUl.toggle();
        }
    });
});
