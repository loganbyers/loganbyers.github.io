function toggleExpand(a){
  var e=document.getElementById(a);
  if(!e)return true;
  if(e.style.display=="none"){
    e.style.display="block"
  } else {
    e.style.display="none"
  }
  return true;
}

function toggleExpand2(a, b){
  var e=document.getElementById(a);
  if(!e)return true;
  var f=document.getElementById(b);
  if(!f)return true;
  var txt=f.value.slice(3);
  if(e.style.display=="none"){
    e.style.display="block"
    f.value="[-]" + txt
  } else {
    e.style.display="none"
    f.value="[+]" + txt
  }

  return true;
}
