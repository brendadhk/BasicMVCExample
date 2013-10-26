/**
 * Adapter to get the Distance information
 */

var myRemoteAdapter={
	//URL
	serviceUrl:'http://localhost/dkServices/Calls/distance_sql.php?axt=getall',
	//serviceUrl:'distance.json',
	//serviceUrl:'distance.json',
	//Get all
    fetchAll:function(id,callback){
	 $.get(this.serviceUrl,
            function(obj){
                obj=JSON.parse(obj);
                if(callback)
                    callback(obj);
            }
        );
	} 
}

/**
*Distance object in the client side
*/
Distance =  $.mvc.model.extend("distance",{
    validate:function(opts){
        if(opts&&opts.trigger)
            return "error validating";
        return true;
    },
    distanceUnit: '',
    distanceName: ''
	},myRemoteAdapter);

var distance = new Distance();