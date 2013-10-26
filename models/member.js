var myRemoteAdapter={
	fetchAll: function (id,callback)
	{
		$.ajax({
        type:'GET',
        url: 'http://dragonking.com.au/dkServices/Calls/distance_sql.php?axt=getAll',
        dataType : 'jsonp',
		crossDomain: true,
		error: function(err){console.log(JSON.stringify(err));},
        jsonp : 'callback',
		jsonpCallback: 'distance',
        success : function(data) {console.log(JSON.stringify(data));} 
    })
	.done(function() { console.log( "done");})
	.fail(function(jqXHR,error, errorThrown){console.log( "error" );})
	.error (function(jqXHR, error, errorThrown){console.log( "error" );})
	.always(function() { console.log( "Complete");});
	},
	fetch: function (id,callback)
	{
		$.ajax({
        type:'GET',
        url: 'http://dragonking.com.au/dkServices/Calls/distance_sql.php?axt=get&data=1',
        dataType : 'jsonp',
		crossDomain: true,
		error: function(err){console.log(JSON.stringify(err));},
        jsonp : 'callback',
		jsonpCallback: 'distance',
        success : function(data) {console.log(JSON.stringify(data));} 
    })
	.done(function() { console.log( "done");})
	.fail(function(jqXHR,error, errorThrown){console.log( "error" );})
	.error (function(jqXHR, error, errorThrown){console.log( "error" );})
	.always(function() { console.log( "Complete");});
	}
}

/**
*Distance object in the client side
*/
Member =  $.mvc.model.extend("member",{
    validate:function(opts){
        if(opts&&opts.trigger)
            return "error validating";
        return true;
    },
	distanceName:''
	},myRemoteAdapter);

var member = new Member();