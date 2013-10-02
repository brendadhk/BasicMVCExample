/**
 * Adapter to get the Distance information
 */

var myRemoteAdapter={
    server:"http://localhost/dkServices/",
    save:function(obj,callback,foo){
        $.get(this.server+"distance_sql.php?axt=save&data="+encodeURIComponent(JSON.stringify(obj)),
            function(id){
                obj.distanceId=id;
                $(document).trigger(obj.name + ":save", obj);
                if(callback)
                    callback(obj);
            }
        );
    },
    fetch:function(id,callback){
        $.get(this.server+"distance_sql.php?axt=get&data="+encodeURIComponent(id),
            function(obj){
                
                obj=JSON.parse(obj);
                if(callback)
                    callback(obj);
            }
        );
    },
    fetchAll:function(id,callback){
        $.get(this.server+"distance_sql.php?axt=getAll",
            function(obj){
                obj=JSON.parse(obj);
                if(callback)
                    callback(obj);
            }
        );
    },
    remove:function(obj,callback){
        $.get(this.server+"distance_sql.php?axt=delete&data="+encodeURIComponent(obj.distanceId),
            function(obj){
                $(document).trigger(obj.name + ":remove", obj.distanceId);
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