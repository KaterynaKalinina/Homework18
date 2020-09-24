const units = [
    new Unit('archer', 80, 50),
    new Unit('infantryman', 70, 55),
    new Unit('chevalier', 90, 80)
];

const squad = new Squad(units);
console.log(squad);