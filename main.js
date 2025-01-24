async function loadFooter() {
  const response = await fetch("components/footer.html");
  const navbarHtml = await response.text();
  document.getElementById("footer-container").innerHTML = navbarHtml;
}

async function loadNavbar() {
    const response = await fetch("components/navbar.html");
    const navbarHtml = await response.text();
    document.getElementById("navbar").innerHTML = navbarHtml;
  }
  

  
  loadFooter();
  loadNavbar();


const formulario = document.getElementById("form"); 
const erro = document.getElementById("erro");
const erroemail = document.getElementById("erroemail");

formulario.addEventListener("submit", (evento) => {
  const pnome = document.getElementById("pnome").value;
  const unome = document.getElementById("unome").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;
  const comment = document.getElementById("comment").value;

  erro.innerText = "";

if (!pnome.trim() || !unome.trim() || !assunto.trim() || !comment.trim()) {
  evento.preventDefault();
  erro.innerText = "O preenchimento de todos os campos é obrigatório.";
} else if(!email.includes ("@")){
  evento.preventDefault();
  erroemail.innerText = "O email requer '@'";
}
 else if(!email.includes (".")){
  evento.preventDefault();
  erroemail.innerText = "O email requer '.'";
}


});
