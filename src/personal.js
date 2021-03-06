let regions = ["N", "S", "Н", "Т"];
let groups = ["М", "К"];

let personal = [
    {
        id: 1,
        first: "Сергей",
        last: "Никитин",
        isGeodesist: true,
        group: groups[1],
        adress: "Купчино",
        region: regions[1],
    },
    {
        id: 2,
        first: "Денис",
        last: "Павлов",
        isGeodesist: true,
        group: groups[1],
        adress: "Академический",
        region: regions[0],
    },
    {
        id: 3,
        first: "Виталий",
        last: "Шпак",
        isGeodesist: true,
        group: groups[1],
        adress: "Гражданский",
        region: regions[0],
    },
    {
        id: 4,
        first: "Александр",
        last: "Клешнин",
        isGeodesist: true,
        group: groups[1],
        adress: "Сертлово",
        region: regions[0],
    },
    {
        id: 5,
        first: "Павел",
        last: "Нехожин",
        isGeodesist: true,
        group: groups[1],
        adress: "Академический",
        region: regions[0],
    },
    {
        id: 6,
        first: "Карницкий",
        last: "Вячеслав",
        isGeodesist: false,
        group: groups[1],
        adress: "Сертлово",
        region: regions[0],
    },
    {
        id: 7,
        first: "Никита",
        last: "Исаков",
        isGeodesist: false,
        group: groups[1],
        adress: "Мурино",
        region: regions[0],
    },
    {
        id: 8,
        first: "Владимир",
        last: "Васюнин",
        isGeodesist: false,
        group: groups[1],
        adress: "Гражданский",
        region: regions[0],
    },
    {
        id: 9,
        first: "Вадим",
        last: "Эрмель",
        isGeodesist: false,
        group: groups[1],
        adress: "Мурино",
        region: regions[0],
    },
    {
        id: 10,
        first: "Родион",
        last: "Площадный",
        isGeodesist: false,
        group: groups[1],
        adress: "Мурино",
        region: regions[0],
    },
    {
        id: 11,
        first: "Александр",
        last: "Леусенко",
        isGeodesist: true,
        group: groups[0],
        adress: "Софийская",
        region: regions[1],
    },
    {
        id: 12,
        first: "Олег",
        last: "Евстафьев",
        isGeodesist: true,
        group: groups[0],
        adress: "Новгород",
        region: regions[2],
    },
    {
        id: 13,
        first: "Никита",
        last: "Баранов",
        isGeodesist: true,
        group: groups[0],
        adress: "Тверь",
        region: regions[3],
    },
    {
        id: 14,
        first: "Андрей",
        last: "Погодин",
        isGeodesist: true,
        group: groups[0],
        adress: "Тверь",
        region: regions[3],
    },
    {
        id: 15,
        first: "Сергей",
        last: "Поляков",
        isGeodesist: false,
        group: groups[0],
        adress: "Автово",
        region: regions[1],
    },
    {
        id: 16,
        first: "Дмитрий",
        last: "Безымянный",
        isGeodesist: false,
        group: groups[0],
        adress: "Комендантский",
        region: regions[0],
    },
    {
        id: 17,
        first: "Владислав",
        last: "Гормылев",
        isGeodesist: false,
        group: groups[0],
        adress: "Купчино",
        region: regions[1],
    },
    {
        id: 18,
        first: "Михаил",
        last: "Николаев",
        isGeodesist: false,
        group: groups[0],
        adress: "Купчино",
        region: regions[1],
    },
    {
        id: 19,
        first: "Михаил",
        last: "Пагин",
        isGeodesist: false,
        group: groups[0],
        adress: "Ленинский",
        region: regions[1],
    },
    {
        id: 20,
        first: "Алексей",
        last: "Арбузов",
        isGeodesist: false,
        group: groups[0],
        adress: "Гражданский",
        region: regions[0],
    },
];

let personalInLocalStorage = localStorage.getItem("personal");
if (personalInLocalStorage) personal = JSON.parse(personalInLocalStorage);

export { personal, groups };
