var distanceCtrl = $.mvc.controller.create('distance', {
    views: {
        "distance_save_tpl": "views/distance/distance_save.tpl",
        "distance_getAll_tpl": "views/distance/distance_getAll.tpl",
        "distance_getId_tpl": "views/distance/distance_getId.tpl",
        "distance_showItem_tpl": "views/distance/distance_showItem.tpl"
    },
    save: function () {
        //Getting the values from the form
        distance_Name = $("#txt_distance_name").val();
        $("#txt_distance_name").val('');
        distance_Unit = $("#txt_distance_unit").val();
        $("#txt_distance_unit").val('');

        //Creating object and validating input
        var that = this;
        var distance = new Distance();
        if (distance_Name.length == 0) { return alert("Please enter some text as distance name."); }
        if (distance_Unit.length == 0) { return alert("Please enter some text as distance unit."); }
        
        //Setting the properties
        distance.distanceName = distance_Name;
        distance.distanceUnit = distance_Unit;
        distance.set({
            distanceName: distance_Name,
            distanceUnit: distance_Unit
        });

        distance.save(function () {
            //After saving add the element to the combobox list
            var str = $.template("distance_getId_tpl", { 'distanceObj': distance });
            $("#distance_getAll select").append($(str));
	    });
    },
	
	default: function () {
	    //Loading an empty distance form to fill in
	    $("#distance_save").html($.template('distance_save_tpl', {}));

	    //Loading all elements into a combobox 
	    distance.fetchAll(function (all) {
	        $("#distance_getAll").html($.template('distance_getAll_tpl', { items: all }));

			$('#distanceSelector').click(function(){
				var selectorThis= $(this);
				$("option:selected",this).remove();
				var selectedDistanceId = $(this).val();
				var selectedDistanceObject=  all.filter(function(obj){
					return obj.distanceId == selectedDistanceId;});
				
				//alert(JSON.stringify(selectedDistanceObject));
				$("#distance_showItem").html($.template('distance_showItem_tpl', { distanceObj: selectedDistanceObject[0] }));
		
				$("#buttonItemToRemove").click(function(){
							//var selectedDistanceId = $(this).attr("data-id");
							var selectedDistanceId = $(this).data("id");
							distance.fetch(selectedDistanceId, function(item) {
									//alert(JSON.stringify(selectedDistanceId));	
					                item.remove();
									$("#distanceSelector option:selected").remove();
									//$("#distance_getAll").html($.template('distance_getAll_tpl', { items: all }));
									$("#distance_showItem").html("");
							});//
					});//buttonItemToRemove
			});//distanceSelector
      });//fetchAll
	    //For all the combobox, select the first item by default 
	    //TODO: Check the implications when we want to get just the item for a particular member
	    //$("select option:first-child").attr("selected", "selected");

	    //Load the first item or item selected on teh combobox   
	    //$("#distance_showItem").html($.template('distance_showItem_tpl', { 'distanceObj': selectedItem }));
	},
	
	remove: function()
	{
		var el = $("#itemToRemove").val();
		//var id = $(this).data("id");
	
		//alert(JSON.stringify(el));
		//distance.remove();
        //el.remove();
		
	},
	
    init: function(){
        var self = this;
	}
});