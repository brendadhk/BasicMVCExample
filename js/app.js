var app = new $.mvc.app();

app.loadModels("dragonking");
app.loadControllers("dragonking");

//We wait until app.ready is available to fetch the data, then we wire up the existing data in the templates
app.ready(function(){
    $.mvc.route("/dragonking");//Load the default todo route
});