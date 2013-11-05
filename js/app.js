var app = new $.mvc.app();

app.loadModels("distance");
app.loadControllers("distance");

//We wait until app.ready is available to fetch the data, then we wire up the existing data in the templates
app.ready(function(){
    $.mvc.route("/distance");//Load the default todo route
});