function generaTabla(){
   
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var precio = document.getElementById("precio").value;
    var descripcion = document.getElementById("descripcion").value;
	var fechaventa = document.getElementById("fechaventa").value;


    var fila="<tr><td>"+marca+"</td><td>"+modelo+"</td><td>"+precio+"</td><td>"+descripcion+"</td><td>"+fechaventa+"</td></tr>";
    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tabla").appendChild(btn);

function eliminar() {
  /*$('#'+id_fila).remove();
  reordenar();*/
  for (var i = 0; i < id_fila_selected.length; i++) {
    $('#' + id_fila_selected[i]).remove();
  }
  reordenar();
}

function reordenar() {
  var num = 1;
  $('#tabla tbody tr').each(function() {
    $(this).find('td').eq(0).text(num);
    num++;
  });
}
}
