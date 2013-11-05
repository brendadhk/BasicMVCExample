<select id="distanceSelector">
 {{for(var i=0;i<it.items.length;i++){}}
	<option value='{{=it.items[i].distanceId}}' >
    	{{=it.items[i].distanceName}} {{=it.items[i].distanceUnit}}
    </option>
 {{}}}
</select>
