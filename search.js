console.log("running content scripts !");

 const search  = window.location.search;

window.location = "https://duckduckgo.com/" + search;
