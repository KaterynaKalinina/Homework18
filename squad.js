class Squad {
    constructor(defaultResources) {
        this._squad = [];
        this.addResources(defaultResources);
        this.renderSquad();

    }

    renderSquad() {
        const squadContainer = document.querySelector('#squadContainer');
        this._squad.forEach((unit) => {
            squadContainer.append(unit.renderUnit());
        });
    }

    addResources(defaultResources) {
        this._squad = [...this._squad, ...defaultResources];
    }

    isReadyToMove() {
        return this._squad.some((unit) => unit.isReadyToMove());
    }

    isReadyToFight() {
        return this._squad.some((unit) => unit.isReadyToFight());
    }

    restore() {
        this._squad.forEach((unit) => unit.restore());
    }

    getReadyToMove() {
        return this._squad.filter((unit) => unit.isReadyToMove);
    }

    getReadyToFight() {
        return this._squad.filter((unit) => unit.isReadyToFight);
    }

    clone() {
        return this._squad.map((unit) => unit.clone());
    }
}