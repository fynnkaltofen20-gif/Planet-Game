// Spielstatus
let hunger = 100;
let thirst = 100;
let health = 100;

// Ressourcen
let resources = ["Stein", "Holz", "Eisen", "Plasma", "Alien-Knochen"];
let inventory = [];

// Feinde
let enemies = [
    { name: "Alien", health: 20 },
    { name: "Raubtier", health: 15 }
];

// Elemente referenzieren
const hungerDisplay = document.getElementById("hunger");
const thirstDisplay = document.getElementById("thirst");
const healthDisplay = document.getElementById("health");
const inventoryList = document.getElementById("inventoryList");
const collectButton = document.getElementById("collectResources");
const craftButton = document.getElementById("craftItem");

// Status aktualisieren
function updateStatus() {
    hungerDisplay.textContent = hunger;
    thirstDisplay.textContent = thirst;
    healthDisplay.textContent = health;
}

// Feinde angreifen
function attackEnemy() {
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let damage = Math.floor(Math.random() * 10);
    enemy.health -= damage;
    alert(`Du greifst ${enemy.name} an! Es erhält ${damage} Schaden.`);
    if (enemy.health <= 0) {
        alert(`${enemy.name} ist besiegt!`);
        // Feind entfernen oder ersetzen
        enemies = enemies.filter(e => e.health > 0);
        // Feind angreifen oder fliehen
function fightOrFlee() {
    let choice = prompt("Ein Alien greift dich an! Möchtest du kämpfen oder fliehen? (G/K)");
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    
    if (choice.toLowerCase() === 'g') {
        let damage = Math.floor(Math.random() * 10);
        enemy.health -= damage;
        alert(`${enemy.name} wird angegriffen und erhält ${damage} Schaden!`);
        if (enemy.health <= 0) {
            alert(`${enemy.name} ist besiegt!`);
            enemies = enemies.filter(e => e.health > 0); // Feind entfernen
        }
    } else if (choice.toLowerCase() === 'k') {
        alert("Du fliehst vor dem Alien!");
        health -= 5;  // Kleine Strafe für das Fliehen
    } else {
        alert("Ungültige Eingabe!");
    }
}

// Ressourcen sammeln
collectButton.addEventListener("click", function() {
    let collectedItem = resources[Math.floor(Math.random() * resources.length)];
    inventory.push(collectedItem);
    updateInventory();
    
    // Status verringern
    hunger -= 10;
    thirst -= 10;
    health -= 5;
    
    // Feind angreifen, um Gefahr hinzuzufügen
    if (Math.random() < 0.3) {
        attackEnemy();
    }
    
    updateStatus();
});

// Crafting von Items
craftButton.addEventListener("click", function() {
    if (inventory.length >= 2) {
        let craftedItem = "Werkzeug";
        inventory.push(craftedItem);
        updateInventory();
// Craften eines Werkzeugs (z.B. Axt)
craftButton.addEventListener("click", function() {
    if (inventory.includes("Holz") && inventory.includes("Stein")) {
        let craftedItem = "Axt";
        inventory.push(craftedItem);
        alert("Du hast eine Axt hergestellt!");
        updateInventory();
    } else {
        alert("Du brauchst Holz und Stein, um eine Axt zu bauen!");
    }
});


// Inventar aktualisieren
function updateInventory() {
    inventoryList.innerHTML = "";
    inventory.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        inventoryList.appendChild(li);
    });
}

// Initialen Status anzeigen
updateStatus();

// Funktion für meteoritensturm
function meteorShower() {
    if (Math.random() < 0.2) {  // 20% Chance für einen Meteoritensturm
        alert("Achtung! Meteoritensturm!!!");
        hunger -= 20;
        thirst -= 20;
        health -= 10;
        updateStatus();
    }
}
