<div id="memberList">
<ul id="memberList-list" class="{{=it.listCSS}}">
    {{ for(var i=0;i<it.items.length;i++){
    }}
     <li>
        <label for="{{=it.items[i].memberId}}"></label>
        <div class="distance-text" >{{=it.items[i].memberName}}</div>
        <a href="#uiAddMember" id="lstMemberName0" data-transition="none" class="icon user big"></a>
    </li>
    {{}}}
</ul>
</div>
