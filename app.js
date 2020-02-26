document.addEventListener("DOMContentLoaded", e=>{
    const form = document.querySelector("#frmConversores");
    form.addEventListener("submit", event=>{
        event.preventDefault();
  
       let nombre = document.querySelector("#txtNombre").Value;
       fetch(`http://localhost:8080/Programacionpractica-conversores/saludo.php?nombre=${nombre}`)
            .then(resp=>resp.text())
            .then(resp=>{
                document.querySelector("#lblRespuesta").innerHTML = respuesta;

            });
    });
   });