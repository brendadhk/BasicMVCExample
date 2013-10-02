/**
 * Below is a sample adapter for connecting with a webservice.
 */

var myRemoteAdapter={
    server:"http://localhost:58888/jqmws/",
    save:function(obj,callback,foo){
        $.get(this.server+"todo.php?axt=save&data="+encodeURIComponent(JSON.stringify(obj)),
            function(id){
                obj.id=id;
                $(document).trigger(obj.name + ":save", obj);
                if(callback)
                    callback(obj);
            }
        );
    },
    fetch:function(id,callback){
        $.get(this.server+"todo.php?axt=get&data="+encodeURIComponent(id),
            function(obj){
                
                obj=JSON.parse(obj);
                if(callback)
                    callback(obj);
            }
        );
    },
    fetchAll:function(id,callback){
        $.get(this.server+"todo.php?axt=getAll",
            function(obj){
                obj=JSON.parse(obj);
                if(callback)
                    callback(obj);
            }
        );
    },
    remove:function(obj,callback){
        $.get(this.server+"todo.php?axt=delete&data="+encodeURIComponent(obj.id),
            function(obj){
                $(document).trigger(obj.name + ":remove", obj.id);
                obj=JSON.parse(obj);
                if(callback)
                    callback(obj);
            }
        );
    }
}

/*
* RETURN JSON format
* {"isComplete":"0","isArchived":"1","text":"test","id":"2"}
* REQUEST JSON format
* http://localhost/dkServices/distance_sql.php?axt=save&data={"distanceUnit":"mts","distanceName":"888"}
*/

/*
*-------------------------------------------------------------------------------------------
*                                           MODEL
*-------------------------------------------------------------------------------------------
*/
Login =  $.mvc.model.extend("login",{
    validate:function(opts){
        if(opts&&opts.trigger)
            return "error validating";
        return true;
    },
    text: '',
    isComplete:false,
    isArchived:false,
    archiveItem:function(){
        debugger;
        this.isArchived=true;
        this.isComplete=false;
        this.save();//Method in the Controller-Todo
        return this;
    },
    finishItem:function(){
        this.isArchived=false;
        this.isComplete=true;
        this.save();
        return this;
    },
    resetItem:function(){
        this.isArchived=false;
        this.isComplete=false;
        this.save();
        return this;
    }
});

var login = new Login();