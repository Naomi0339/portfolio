$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("#openbtn_nav").toggleClass('panelactive');
});

$(".openbtn_nav_list a").click(function () {
    //ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
    $("#openbtn_nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
  });
  // メニューオープナーここまで