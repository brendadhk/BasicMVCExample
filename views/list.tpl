<div style="margin-top:25px; text-align:center; font-size:20px;">
   {{=it.title}} Distance List (&nbsp;<span class='count'>{{=it.items.length}}</span>&nbsp;) - swipe to archive
</div>
<ul id="distance-list" class="{{=it.listCSS}}">
    {{ for(var i=0;i<it.items.length;i++){
    }}
     <li>
        <label for="{{=it.items[i].distanceId}}"></label>
        <div class="distance-text" >{{=it.items[i].distanceName}}</div>
    </li>
    {{}}}
</ul>