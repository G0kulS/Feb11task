var connect = new XMLHttpRequest();
connect.open('GET',"https://restcountries.eu/rest/v2/all",true);
connect.send();
connect.onload = function()
{
   var data = JSON.parse(this.response);
   for(var i in data)
   {
     console.log(data[i].name);
   }
   
}
