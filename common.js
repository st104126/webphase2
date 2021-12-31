function pageLoad() {
    var menubutton = document.getElementById("mobile-menu");
    var flag = 0;
    var menuitem = document.getElementById("mobilenavbar");
    var screensize = screen.width;
    menubutton.onclick = menuonandoff;
    var searchblank = document.getElementById("form");



    // 若為手機版模式，則menubutton會出現，按下會跑這些
    if (screensize > 375) {
        menuitem.style.display = "none";
    }
    else {
        searchblank.style.display = "none";
    }

    // $(function(){
    //     $(".navbar-toggle").on("click", function () {
    //     $(this).toggleClass("active");
    //     });
    // })

    function menuonandoff() {
        if (flag == 0) {
            menuitem.style.display = "block";
        }
        else {
            menuitem.style.display = "none";
        }
        flag = !flag;
    }

    
    var searchkey = document.getElementById("searchkey");
    searchkey.defaultValue = "please enter";
    searchkey.style.color = "grey";
    var magnifier = document.getElementById("magnifier");
    magnifier.onclick = showinput;

    function showinput(){
        if (flag == 0) {
            searchkey.style.display = "block";
            searchkey.defaultValue = "search";
        }
        else {
            searchkey.style.display = "none";
        }
        flag = !flag;
    }

    (!searchkey).onclick = showdefault;
    function showdefault() {
        searchkey.defaultValue = "search";
    }

    var searchinput = document.getElementById("searchkey");
    searchinput.onclick = hiddendefaultword;
    function hiddendefaultword() {
        searchkey.defaultValue = "";
    }
    
}
window.onload = pageLoad;