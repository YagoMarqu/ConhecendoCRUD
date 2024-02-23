function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
 
        const pessoa = (email === "ADM3" &&  senha === "123") ;
 
        if (pessoa) {
          window.location.href = "get.html";
        } else {
          alert("Cadastro não encontrado!");
        }
      };
  
