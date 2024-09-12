function goToIndex(fromPath) {
    const newUrl = changeURL(fromPath, "/index.html");
    window.location.assign(newUrl)
}

function goToLogin(fromPath) {
    const newUrl = changeURL(fromPath, "/access/login.html");
    window.location.assign(newUrl)
}

function goToRegister(fromPath) {
    const newUrl = changeURL(fromPath, "/access/register.html");
    window.location.assign(newUrl)
}

function goToMain(fromPath) {
    const newUrl = changeURL(fromPath, "/content/main.html");
    window.location.assign(newUrl)
}


function changeURL(pathToChange, newPath) {
    var theURL = window.location.pathname;
    return theURL.replace(pathToChange, newPath); 
} 