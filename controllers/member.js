var memberCtrl = $.mvc.controller.create('member', {
    views: {
        "memberListHeader_tpl": "views/memberList_header.tpl",
        "memberListItem_tpl":"views/memberList_item.tpl"
    },
    default:function() {
		 $("#divMemberList").html($.template('memberListHeader_tpl', {}));
   		 var member = new Member();
		 member.fetchAll(function(all) {
			 
			 alert(all);
			 
			  var str=$.template("memberListItem_tpl",{'entry':member});
              $("#divMemberList ul").append($(str));
			 
			 
			 });
    },
    init: function() {
        var self = this;
    }
});