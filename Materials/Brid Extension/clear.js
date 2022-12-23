let bridNotice = document.getElementById("bridNotice");

document.getElementById("clearBridLocalStorage").addEventListener("click", function () {
    bridNotice.innerHTML = "HTML5 Local Storage cleared!";
    setTimeout(function(){bridNotice.innerHTML = "";},3000)                       
});

document.getElementById("bridPlayerInfo").addEventListener("click", function () {
    bridNotice.innerHTML = "Check browser console for details.";
    setTimeout(function(){bridNotice.innerHTML = "";},3000)                       
});

