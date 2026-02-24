$(document).ready(function () {

    let hero = {
        name: 'Lera',
        atackPower: 2,
        hpCurrent: 10,
        hpMax: 20,
        mpCurrent: 15,
        mpMax: 15,
        atack: Atack
    };

    const monsters = [];
    for (let i = 0; i < 5; i++) {
        let monster = createEnemy();
        monsters.push(monster);
    }
    
    // hero.atack(monsters[0]);
    // monsters[0].atack(hero);

    for (let i = 0; i < monsters.length; i++) {
        const monster = monsters[i];
        hero.atack(monster);
        monster.atack(hero);
    }

    function Atack(enemy) {
        if (this.mpCurrent > 2) {
            enemy.hpCurrent -= this.atackPower;
            this.mpCurrent -= 2;
        }
    }

    function createEnemy() {
        let hpCurrent =  getRandomNumber(10);
        const nameIndex = getRandomNumber(100);
        let enemy = {
            name: 'Ivan ' + nameIndex,
            atackPower: 1,
            hpCurrent: hpCurrent,
            hpMax: 10,
            mpCurrent: 10,
            mpMax: 10,
            atack: Atack
        };

        return enemy;
    }

    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }
});