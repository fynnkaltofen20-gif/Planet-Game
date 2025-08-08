// Grundwerte des Spiels
let hunger = 100;
let thirst = 100;
let health = 100;

// Das Inventar
let inventory = [];

// Elemente referenzieren
const hungerDisplay = document.getElementById("hunger");
const thirstDisplay = document.getElementById("thirst");
const healthDisplay = document.getElementById("health");
const inventoryList = document.getElementById("inventoryList");
const collectButton = document.getElementById("collectResources");
const craftButton = document.getElementById("craftItem");

// Funktion zum Aktualisieren des Status
function updateStatus() {
    hungerDisplay.textContent = hunger;
    thirstDisplay.textContent = thirst;
    healthDisplay.textContent = health;
}

// Funktion zum Sammeln von Ressourcen
collectButton.addEventListener("click", function() {
    let collectedItem = "Ressource " + Math.floor(Math.random() * 100);
    inventory.push(collectedItem);
    updateInventory();
    
    // Ressourcen verringern die Werte
    hunger -= 10;
    thirst -= 10;
    health -= 5;

    // Status aktualisieren
    updateStatus();
});

// Funktion zum Craften von Items
craftButton.addEventListener("click", function() {
    if (inventory.length > 0) {
        let craftedItem = "Gebautes Item";
        inventory.push(craftedItem);
        updateInventory();
    }
});

// Funktion zum Aktualisieren des Inventars
function updateInventory() {
    inventoryList.innerHTML = "";
    inventory.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        inventoryList.appendChild(li);
    });
}

// Anfangswerte anzeigen
updateStatus();
