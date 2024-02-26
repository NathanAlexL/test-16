// Fonction pour gérer la connexion de l'utilisateur
function handleLogin() {
    // Récupération des valeurs des champs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validation des données (à adapter selon les besoins)
    if (username === "utilisateur" && password === "motdepasse") {
        // Redirection vers la page de profil (à adapter selon les besoins)
        window.location.href = "profil.html";
        return true; // Autoriser la soumission du formulaire
    } else {
        // Affichage du message d'erreur
        document.getElementById("login-error").innerText = "Nom d'utilisateur ou mot de passe invalide";
        return false; // Empêcher la soumission du formulaire
    }
}

// Fonction pour gérer la création d'un compte utilisateur
function handleSignup() {
    // Récupération des valeurs des champs (à adapter selon les besoins)
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Validation des données (à adapter selon les besoins)
    if (newPassword !== confirmPassword) {
        // Affichage du message d'erreur
        document.getElementById("signup-error").innerText = "Les mots de passe ne correspondent pas";
        return false; // Empêcher la soumission du formulaire
    } else {
        // Redirection vers la page de profil (à adapter selon les besoins)
        window.location.href = "profil.html";
        return true; // Autoriser la soumission du formulaire
    }
}
