function valida() {
  if (
    !document.getElementById("nome").value ||
    !document.getElementById("email").value ||
    !document.getElementById("mensagem").value
  ) {
    alert("Preencha os campos ");
    return false;
  } else {
    return swal({
      title: "Obrigado!",
      text: "Em breve retornarei o contato",
      icon: "success",
      button: "OK",
    });
  }
}
