import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
            }).join("")
    }
    
    this.takeDamage = function(attackScoreArray){
        console.log(`${this.name}: ${attackScoreArray}`)
    }
    
    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount } = this;

        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`
    }
}

export default Character