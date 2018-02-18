function linkCurrent() {
    var page0 = document.getElementById("linkHome").getAttribute("href");
    var page1 = document.getElementById("linkDynmap").getAttribute("href");
    var page2 = document.getElementById("linkForum").getAttribute("href");
    var page3 = document.getElementById("linkBans").getAttribute("href");
    var pathArray = window.location.pathname.split('/');
    var pathLength = pathArray.length;
    var currentPage = pathArray[pathLength - 1];

    if (currentPage == "bonecraft.tk") {
        document.getElementById("linkHome").style.backgroundColor = "#e99015";
    }

    if (currentPage == page0) {
        document.getElementById("linkHome").style.backgroundColor = "#e99015";
    }

    else if (currentPage == page1) {
        document.getElementById("linkDynmap").style.backgroundColor = "#e99015";
    }

    else if (currentPage == page2) {
        document.getElementById("linkForum").style.backgroundColor = "#e99015";
    }

    else if (currentPage == page3) {
        document.getElementById("linkBans").style.backgroundColor = "#e99015";
    }

    loadMinecraft();
}

function loadMinecraft() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.mcsrvstat.us/1/play.bonecraft.tk");
    request.send();
    request.onreadystatechange = function () {

        if (request.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(request.responseText);
            var online = response.players.online;
            document.getElementById("minecraftOnline").innerHTML = "Online: " + online;
        }
    }

    loadDiscord();
}



window.onload = linkCurrent;

function loadDiscord() {
   var request = new XMLHttpRequest();
    request.open("GET", "https://discordapp.com/api/guilds/394591865254445063/widget.json");
    request.send();
    request.onreadystatechange = function () {

        if (request.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(request.responseText);
            var online = response.members.length;
            document.getElementById("discordOnline").innerHTML = "Online: " + online;
        }
    }

} 


