// Kullanıcının mobil cihaz kullanıp kullanmadığını kontrol eden fonksiyon
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

if (!isMobileDevice()) {
    // Eğer mobil cihaz değilse, navigation bar ile ilgili kodları çalıştır
    $("#t_TreeNav").on("treeviewactivatenode", function(e, ui) {
        var n$ = $(e.originalEvent.target).closest(".a-TreeView-content");
        if (ui.nodes.length > 0 && ui.nodes[0].link === "") {
            if (n$.parent().hasClass("is-expandable")) {
                $(this).treeView("expand", n$)
            } else if (n$.parent().hasClass("is-collapsible")) {
                $(this).treeView("collapse", n$)
            }
        }
    });

    $("#t_PageBody").removeClass("js-navCollapsed");

    $("#t_PageBody").addClass("js-navExpanded");

    $("#t_Button_navControl").addClass("is-active");

    $("#t_Button_navControl").attr("aria-expanded", "true");
}
