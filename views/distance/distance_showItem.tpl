<div >
  <label for="{{=it.distanceObj.id}}" 
  id="labelItemToRemove">
  {{=it.distanceObj.distanceId}} ---- {{=it.distanceObj.distanceName}}{{=it.distanceObj.distanceUnit}}
  </label>
  <input type="button" 
  id="buttonItemToRemove" 
  data-id="{{=it.distanceObj.distanceId}}"
  style="width: 50%;float: left;height: 50px;"  
  value="Remove" />

</div>