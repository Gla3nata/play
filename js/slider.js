class Hero {
    constructor(heroHead, background, heroTitle, descriptionHero, skills, gopa) {
        this.heroHead = heroHead;
        this.background = background;
        this.heroTitle = heroTitle;
        this.descriptionHero = descriptionHero;
        this.skills = skills;
        this.icon = gopa;

    }
}

class HeroHead {
    constructor(width, img) {
        this.width = width;
        this.img = img;
    }
}

class HeroTitle {
    constructor(icon, title, color) {
        this.icon = icon;
        this.title = title;
        this.color = color;
    }
}

class Skill {
    constructor(icon, title, desc) {
        this.icon = icon;
        this.title = title;
        this.desc = desc;
    }
}

class Icon {
    constructor(inactive, hover, active) {
        this.inactive = inactive;
        this.hover = hover;
        this.active = active;
    }
}

var heroes = [
    new Hero(
        new HeroHead(
            466, 'img/2_CHARS/2_CHARS_name_Isolda.png'
        ),
        'url(img/2_CHARS/2_CHARS_bg_Isolda.jpg)',
        new HeroTitle(
            'img/2_CHARS/2_CHARS_fraction_Isolda.png', 'Империя бессмертных', 'rgb(255, 50, 58)'
        ),
        'Появление королевы холода и ее верного медведя предвещает ледяная буря. Неуязвимая Изольда замораживает противников насмерть и не знает пощады.',
        [
            new Skill(
                'img/2_CHARS/2_CHARS_skill_Isolda_1.png', 'Конец зимы', '360% урона авангарду врага'
            ),
            new Skill(
                'img/2_CHARS/2_CHARS_skill_Isolda_2.png', 'Морозная ария', 'Ледяной щит уменьшает получаемый урон на 20%'
            )
        ],
        new Icon(
            'url(../img/2_CHARS/2_CHARS_icon_Isolda_inactive.png)',
            'url(../img/2_CHARS/2_CHARS_icon_Isolda_hover.png)',
            'url(../img/2_CHARS/2_CHARS_icon_Isolda_active.png)'
        )
    ),
    new Hero(
        new HeroHead(
            406, 'img/2_CHARS/2_CHARS_name_Lleyn.png'
        ),
        'url(img/2_CHARS/2_CHARS_bg_Lleyn.jpg)',
        new HeroTitle(
            'img/2_CHARS/2_CHARS_fraction_Lleyn.png', 'Цитадель небожителей', 'rgb(255, 196, 25)'
        ),
        'Зверолюд Ллейн выбрал кровавый путь наемного убийцы в тайной организации "Покров". Его прозвали “Дикий клинок” из-за жестокости и скорости.',
        [
            new Skill(
                'img/2_CHARS/2_CHARS_skill_Lleyn_1.png', 'Дикий разрез', 'Превращает 30% наносимого урона в ОЗ'
            ),
        new Skill(
                'img/2_CHARS/2_CHARS_skill_Lleyn_2.png', 'Найти и уничтожить', 'Наносит 313% урона врагу'
            )

            ],
        new Icon(
            'url(../img/2_CHARS/2_CHARS_icon_Lleyn_inactive.png)',
            'url(../img/2_CHARS/2_CHARS_icon_Lleyn_hover.png)',
            'url(../img/2_CHARS/2_CHARS_icon_Lleyn_active.png)'
        )
    ),
    new Hero(
        new HeroHead(
            412, 'img/2_CHARS/2_CHARS_name_Pamela.png'
        ),
        'url(img/2_CHARS/2_CHARS_bg_Pamela.jpg)',
        new HeroTitle(
            'img/2_CHARS/2_CHARS_fraction_Pamela.png', 'Союз просвященных', 'rgb(202, 134, 255)'
        ),
        'Памела — супруга древнего огненного дракона, одна из первых овладела магией. Никто не знает, на чьей стороне она сражается на самом деле.',
        [
            new Skill(
                'img/2_CHARS/2_CHARS_skill_Pamela_1.png', 'Черное дыхание', 'Наносит врагу с мин. ОЗ 426% урона'
            ),
        new Skill(
                'img/2_CHARS/2_CHARS_skill_Pamela_2.png', 'Проклятие дракона', 'Проклинает всех врагов, снижая урон на 15%'
            )
            ],
        new Icon(
            'url(../img/2_CHARS/2_CHARS_icon_Pamela_inactive.png)',
            'url(../img/2_CHARS/2_CHARS_icon_Pamela_hover.png)',
            'url(../img/2_CHARS/2_CHARS_icon_Pamela_active.png)'
        )
    )
];

var currentPosition = 0;
var maxIndex = heroes.length - 1;

showHero(heroes[currentPosition]);
createPagination(heroes, currentPosition);


var left = document.querySelector('#left');
left.onclick = changePicture;

var right = document.querySelector('#right');
right.onclick = changePicture;

function changePicture(event) {
    switch (event.target) {
        case left:
            currentPosition = currentPosition - 1 < 0 ? maxIndex : currentPosition - 1;
            break;
        case right:
            currentPosition = currentPosition + 1 > maxIndex ? 0 : currentPosition + 1;
            break;
    }

    showHero(heroes[currentPosition]);
}


function showHero(hero) {

    //    var hero = heroes[currentPosition];
    document.querySelector('.chars').style.backgroundImage = hero.background;

    var heroHead = document.querySelector('.hero-name');

    heroHead.src = hero.heroHead.img;
    heroHead.width = hero.heroHead.width;

    document.querySelector('.hero-icon').src = hero.heroTitle.icon;

    var heroTitle = document.querySelector('.hero-title');
    heroTitle.innerHTML = hero.heroTitle.title;
    heroTitle.style.color = hero.heroTitle.color;

    var descriptionHero = document.querySelector('.description-hero');
    descriptionHero.innerHTML = hero.descriptionHero;

    var skills = document.getElementsByClassName('skills');

    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i];

        skill.childNodes.forEach(function (node) {
            if (node.className == 'icon-skills') {
                node.src = hero.skills[i].icon;
            } else if (node.className == 'skills-content') {
                node.childNodes.forEach(function (item) {

                    if (item.className == 'skills-title') {
                        item.innerHTML = hero.skills[i].title;
                    } else if (item.className == 'skills-text') {

                        item.innerHTML = hero.skills[i].desc;
                    }
                });
            }
        });
    }



}


function createPagination(heroes, currentPosition) {

    let pagination = document.querySelector(".pagination");


    for (let pos = 0; pos < heroes.length; pos++) {
        let link = document.createElement('a');
        link.href = '#';
        link.className = 'carusel-pagination-item'

        link.onclick = () => reInit(link, pos, currentPosition, heroes[pos]);

        link.addEventListener(
            "mouseover",
            () => link.style.backgroundImage = heroes[pos].icon.hover,
            false
        );

        link.addEventListener(
            "mouseout",
            () => link.style.backgroundImage = heroes[pos].icon.inactive,
            false
        );

        pagination.appendChild(link);

        initActive(link, pos, currentPosition, heroes[pos]);
    }
}

function reInit(link, pos, currentPos, hero) {
    showHero(hero);
    initActive(link, pos, currentPosition, heroes[pos]);
}

function initActive(link, pos, currentPos, hero) {
    console.log(currentPosition);
    if (pos == currentPosition) {
        link.style.backgroundImage = hero.icon.active;
    } else {
        link.style.backgroundImage = heroes[pos].icon.inactive;
    }
}
