function pageLoad() {
    var menubutton = document.getElementById("mobile-menu");
    var flag = 0;
    var menuitem = document.getElementById("mobilenavbar");
    var screensize = screen.width;
    menubutton.onclick = menuonandoff;

    // 若為手機版模式，則menubutton會出現，按下會跑這些
    if (screensize > 375) {
        menuitem.style.display = "none";
    }
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

    var searchinput = document.getElementById("searchkey");
    searchinput.onclick = hiddendefaultword;
    function hiddendefaultword() {
        searchkey.defaultValue = "";
    }
    (!searchkey).onclick = showdefault;
    function showdefault() {
        searchkey.defaultValue = "searchkey";
    }

}
window.onload = pageLoad;