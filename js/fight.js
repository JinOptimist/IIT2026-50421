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

    $('.fight').click(function () {
        for (let i = 0; i < monsters.length; i++) {
            const monster = monsters[i];
            hero.atack(monster);
            monster.atack(hero);
            
            // show this data to ouser
            $('.hp-current').text(hero.hpCurrent);
            $('.mp-current').text(hero.mpCurrent);

            const enemyTag = $(`[data-id=${i}]`);
            enemyTag.find('.hp-enemy').text(monster.hpCurrent);
            enemyTag.find('.mp-enemy').text(monster.mpCurrent);
        }

    });

    // Create monsters
    // and fill array
    const monsters = [];
    for (let i = 0; i < 5; i++) {
        let monster = createEnemy(i + 1);
        monsters.push(monster);

        drawEnemy(monster, i);
    }

    function drawEnemy(monster, i){
        const copy = $('.template').clone();
        copy.removeClass('template');
        copy.attr('data-id', i);
        copy.find('.enemy').attr('src', `img/monsters/monster${i + 1}.jpg`)
        copy.find('.hp-enemy').text(monster.hpCurrent);
        copy.find('.mp-enemy').text(monster.mpCurrent);
        $('.enemies').append(copy);
    }


    function Atack(enemy) {
        if (this.mpCurrent > 2) {
            enemy.hpCurrent -= this.atackPower;
            this.mpCurrent -= 2;
        }
    }

    function createEnemy(index) {
        let hpCurrent = getRandomNumber(10) + 2;
        const nameIndex = getRandomNumber(100);
        let enemy = {
            id: index,
            name: 'Ivan ' + nameIndex,
            atackPower: 1,
            hpCurrent: hpCurrent,
            hpMax: 10,
            mpCurrent: getRandomNumber(10) + 5,
            mpMax: 10,
            atack: Atack,
            url: `img/monsters/monster${index}.jpg`
        };

        return enemy;
    }

    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }
});