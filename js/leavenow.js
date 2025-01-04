var par = false;
function parpadeo() {
  col = par ? "#33FF33" : "black";
  document.getElementById("txt").style.color = col;
  par = !par;
  setTimeout("parpadeo()", 300); //500 = medio segundo
}
window.onload = parpadeo;

function goBack() {
  window.history.back();
}
