var distanceCtrl = $.mvc.controller.create('distance', {
    views: {
        "list_tpl": "views/list.tpl"
    },
	getList: function(){
	  	     var distance = new Distance();
			distance.fetchAll(function(all) {
				alert(all);
				//$("#create-distance").html($.template('list_tpl', {}));
				var str=$.template("list_tpl",{items:all});
            	$("#smthg").append($(str));
			});
	},
    default:function(){
		//$("#smthg").html($.template('list_tpl', {}));
	},
    init: function(){
		var self = this;//$("#smthg").html($.template('list_tpl', {}));		
	}
});