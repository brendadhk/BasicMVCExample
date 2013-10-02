var distanceCtrl = $.mvc.controller.create('distance', {
    views: {
        "list_tpl": "views/list.tpl",
        "list_item":"views/list_item.tpl"
    },
    /* Array of views to load */
    add: function() {
		//Gets the values for the distance name and unit
        valueDistanceName = $("#new-distanceName").val();
        $("#new-distanceName").val('');
		valueDistanceUnit = $("#new-distanceUnit").val();
        $("#new-distanceUnit").val('');
		//Validate the values		
        if(valueDistanceName.length == 0){ return alert("Please enter some text for the Distance Name");}
		if(valueDistanceUnit.length == 0){ return alert("Please enter some text for the Distance Unit");}
		//Assign the values to the object
        var that = this;
        var distance = new Distance();
        distance.distanceName = valueDistanceName;
		distance.distanceUnit = valueDistanceUnit;
        distance.set({
            distanceName: valueDistanceName,
			distanceUnit: valueDistanceUnit
        });
		//Call the method save
        distance.save(function() {
            var str=$.template("list_item",{'entry':distance});
            $("#listDistance ul").append($(str));
        });
    },

	getList: function(){
   		    var distance = new Distance();
			distance.fetchAll(function(all) {
			alert(all);
        });
		},

    default:function() {
		/*
	        distance.fetchAll(function(all) {
	        $("#listDistance").html($.template('list_tpl', {
                title: 'Active',
                listCSS: 'active mainScreen',
                items: all,
                state: 'active',
                checked: '',
            }));
        });
		*/
    },
    /* This is executed when the controller is created.  It assumes the views are loaded, but can not interact with models
     * This is useful for wiring up page events, etc.
     */
    init: function() {
        var self = this;
        var checkboxClick = function(evt) {
            var that = this;
            var id = $(this).data("id");
            distance.fetch(id, function(el) {
                var $el = $(that).closest("li");
                if(that.value == "active") {
                    $("#listDistance ul").append($el);
                } 
                self.updateCounters();
            });
        }

        $("#content").on("click", "input[type='checkbox']", checkboxClick);
    }
});