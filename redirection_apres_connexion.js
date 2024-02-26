// Fonction pour vérifier si le nom d'utilisateur est déjà utilisé
function checkUsername(username) {
    // Simulation d'une liste de noms d'utilisateurs déjà enregistrés
    var registeredUsernames = ["utilisateur1", "utilisateur2", "utilisateur3"];

    // Vérification si le nom d'utilisateur est dans la liste
    if (registeredUsernames.includes(username)) {
        return true; // Nom d'utilisateur déjà utilisé
    } else {
        return false; // Nom d'utilisateur disponible
    }
}

// Fonction pour vérifier les données lors de la connexion
function checkLogin() {
    // Récupération des valeurs des champs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Vérification si le nom d'utilisateur et le mot de passe correspondent à un compte déjà créé
    if (checkUsername(username) && password === "motdepasse") { // Remplacez "motdepasse" par le mot de passe attendu
        // Réinitialisation du message d'erreur s'il existe
        document.getElementById("login-error").innerText = "";

        // Sauvegarde de l'état de connexion dans le stockage local
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("username", username);

        // Redirection vers la page de profil
        window.location.href = "redirection_apres_connexion.html";

        return true; // Autoriser la soumission du formulaire
    } else {
        // Affichage du message d'erreur
        document.getElementById("login-error").innerText = "Nom d'utilisateur ou mot de passe invalide";
        return false; // Empêcher la soumission du formulaire
    }
}

// Fonction pour vérifier si l'utilisateur est connecté
function checkLoggedIn() {
    // Vérification de la présence de l'état de connexion dans le stockage local
    if (localStorage.getItem("loggedIn") === "true") {
        // Récupération du nom d'utilisateur
        var username = localStorage.getItem("username");

        // Affichage du nom d'utilisateur dans le menu
        var profileLink = document.getElementById("profile-link");
        profileLink.innerText = username;
    } else {
        // Redirection vers la page de connexion si l'utilisateur n'est pas connecté
        window.location.href = "connexion.html";
    }
}

// Fonction pour se déconnecter
function logout() {
    // Suppression des données de connexion du stockage local
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    // Redirection vers la page de connexion
    window.location.href = "connexion.html";
}

// Vérifier si l'utilisateur est connecté lors du chargement de la page
checkLoggedIn();
