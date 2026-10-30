var soft=$('#soft');
SOFT.forEach(function(n){var l=document.createElement('label');l.innerHTML='<input type="checkbox" value="'+n+'"><span>'+n+'</span>';soft.appendChild(l)});
function syncSoft(){
  var sel=$$('input:checked',soft).map(function(i){return i.value});
  P.soft=sel;
  $$('input',soft).forEach(function(i){i.disabled=!i.checked&&sel.length>=4});
}
soft.addEventListener('change',function(){syncSoft();saveP();fill()});
(P.soft||[]).forEach(function(n){var i=$('input[value="'+n+'"]',soft);if(i)i.checked=true});syncSoft();
