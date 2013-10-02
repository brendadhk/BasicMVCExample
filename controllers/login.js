var loginCtrl = $.mvc.controller.create('login', {
    views: {
        "login_tpl":"views/login_tpl.tpl"
    },
    /* Array of views to load */
    save: function() {

    },
    default:function(){
         var str=$.template("login_tpl",{});
         $("#login_Div").append($(str));	
	},
    /* This is executed when the controller is created.  It assumes the views are loaded, but can not interact with models
     * This is useful for wiring up page events, etc.
     */
    init: function() {
        var self = this;
        $("#cancelButton").bind("click", function(e) {
            $("#new-todo").val('');
        });
    }
});