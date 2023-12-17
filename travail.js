function formValidation() {
    
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var telephone = document.getElementById("telephone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
  
    
    if (!nom.match(/^[a-zA-Z]+$/)) {
      document.getElementById("nom").style.borderColor = "red";
      alert("Le nom ne doit contenir que des lettres.");
      return false;
    }
    if (nom.length < 3) {
      document.getElementById("nom").style.borderColor = "red";
      alert("Le nom doit avoir au moins 3 caracteres.");
      return false;
    }
  

    if (prenom.length < 4) {
      document.getElementById("prenom").style.borderColor = "red";
      alert("Le prenom doit compter au minimum 4 caracteres.");
      return false;
    }
  
 
    if (telephone.match(/[a-zA-Z]/)) {
      document.getElementById("telephone").style.borderColor = "red";
      alert("Le numero de telephone ne doit pas contenir de lettres.");
      return false;
    }
  
   
    if (password.length < 10) {
      document.getElementById("password").style.borderColor = "red";
      alert("Le mot de passe doit contenir au moins 10 caracteres.");
      return false;
    }
    if (!password.match(/[A-Z]/)) {
      document.getElementById("password").style.borderColor = "red";
      alert("Le mot de passe doit contenir au moins une lettre majuscule.");
      return false;
    }
    if (!password.match(/[a-z]/)) {
      document.getElementById("password").style.borderColor = "red";
      alert("Le mot de passe doit contenir au moins une lettre minuscule.");
      return false;
    }
    if (!password.match(/[0-9]/)) {
      document.getElementById("password").style.borderColor = "red";
      alert("Le mot de passe doit contenir au moins un nombre.");
      return false;
    }
  
    
    if (password !== confirmPassword) {
      document.getElementById("confirmPassword").style.borderColor = "red";
      alert("Les mots de passe doivent etre identiques.");
      return false;
    }
  
    return true;
  }
  document.querySelector("input[type='submit']").addEventListener("click", formValidation);
  