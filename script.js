function getDiceRollArray(diceCount) { 
    return new Array(diceCount).fill(0).map(function(){
    return Math.floor(Math.random() * 6) + 1
    });   
}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function(num){ 
        return  `<div class="dice">${num}</div>`
    }).join('')
}

const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceCount: 3
}

const monster = {
    elementId: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1
}

function Character(data) {
    
    const { elementId, name, avatar, health, diceCount } = data;
    
    this.elementId = elementId;
    this.name = name;
    this.avatar = avatar;
    this.health = health;
    this.diceCount = diceCount;
    this.getCharacterHTML = function() {
        const diceHtml = getDiceHtml(this.diceCount)

        document.getElementById(this.elementId).innerHTML =
            `<div class="character-card">
                <h4 class="name"> ${this.name} </h4>
                <img class="avatar" src="${this.avatar}" />
                <div class="health">health: <b> ${this.health} </b></div>
                <div class="dice-container">    
                    ${diceHtml}
                </div>
            </div>`;
    }

}

const wizard = new Character(hero)
const orc = new Character(monster)

wizard.getCharacterHTML()
orc.getCharacterHTML()
