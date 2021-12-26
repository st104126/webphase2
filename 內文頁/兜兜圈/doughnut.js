function pageLoad() {
    var menubutton = document.getElementById("mobile-menu");
    var flag = 0;
    menubutton.onclick = menuonandoff;

    function menuonandoff() {
        var menuitem = document.getElementById("mobilenavbar");
        if (flag == 0) {
            menuitem.style.display = "block";
        }
        else {
            menuitem.style.display = "none";
        }
        flag = !flag;
    }
}
window.onload = pageLoad;