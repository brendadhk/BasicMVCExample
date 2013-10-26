var dragonking = $.mvc.controller.create('dragonking', {
    views: {
        "login_tpl":"views/login_tpl.tpl",
    },
    /* Array of views to load */
    login: function() {
		var that = this;
			var dragonboat = new Dragonboat();
			dragonboat.fetchAll(function(all) {
			var str=$.template("login_tpl",{ items: all});
        	$("#login_content").append($(str));
			});
    },
    default:function(){

	},
    /* This is executed when the controller is created.  It assumes the views are loaded, but can not interact with models
     * This is useful for wiring up page events, etc.
     */
    init: function() {
        var self = this;
    }
});