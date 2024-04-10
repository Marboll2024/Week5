// Fonction pour charger les éléments de menu d'une catégorie spécifique
function loadMenuItems(category) {
    // Créer une requête HTTP
    var xhr = new XMLHttpRequest();
    
    // Définir la méthode et l'URL de la requête
    xhr.open("GET", "url_de_votre_api_pour_charger_les_elements_de_menu?category=" + category, true);
    
    // Définir la fonction de rappel pour gérer la réponse de la requête
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Succès de la requête
            var response = JSON.parse(xhr.responseText);
            
            // Afficher les éléments de menu dans le DOM
            displayMenuItems(response);
        } else {
            // Erreur de la requête
            console.error("Erreur lors du chargement des éléments de menu: " + xhr.status);
        }
    };
    
    // Envoyer la requête
    xhr.send();
}

// Fonction pour afficher les éléments de menu dans le DOM
function displayMenuItems(menuItems) {
    // Code pour afficher les éléments de menu dans votre application
    // Par exemple, vous pouvez créer des éléments HTML pour chaque élément de menu et les ajouter à une liste ou à une autre structure dans le DOM
}