class Unit {
    constructor(type, health, distance) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
    }

    renderUnit(el) {
        this.containerDiv = document.createElement('div');
        this.containerDiv.classList.add('unit');
        el.appendChild(this.containerDiv);

        this.healthDiv = document.createElement('div');
        this.healthDiv.style.backgroundColor = 'red';
        this.healthDiv.style.margin = '2%';
        this.healthDiv.textContent = 'Health';
        this.healthDiv.classList.add('text');
        this.healthDiv.style.width = `${this.health}%`;

        this.healthDiv.addEventListener('click', this.changeHealthProgress.bind(this, this.healthDiv, this.containerDiv));
        this.containerDiv.appendChild(this.healthDiv);

        this.distanceDiv = document.createElement('div');
        this.distanceDiv.style.backgroundColor = 'yellow';
        this.distanceDiv.style.margin = '2%';
        this.distanceDiv.textContent = 'Distance';
        this.distanceDiv.classList.add('text');
        this.distanceDiv.style.width = `${this.distance}%`;

        this.distanceDiv.addEventListener('click', this.changeDistanceProgress.bind(this, this.distanceDiv));
        this.containerDiv.appendChild(this.distanceDiv);

        this.typeName = document.createElement('p');
        this.typeName.textContent = `${this.type}`;
        this.typeName.classList.add('text');
        this.typeName.style.textAlign = 'center';
        this.typeName.style.margin = '2%';
        this.containerDiv.appendChild(this.typeName);

        this.img = document.createElement('img');
        this.img.src = `${pictures[this.type]}`;
        this.img.style.width = '60%';
        this.img.style.height = '50%';
        this.img.style.marginLeft = '20%';
        this.containerDiv.appendChild(this.img);

    }

    changeHealthProgress(healthDiv, containerDiv) {
        this.health -= 10;
        healthDiv.style.width = `${this.health}%`;
        if (this.health === 0) {
            containerDiv.style.pointerEvents = 'none';
            this.img.style.opacity = 0,75;
            containerDiv.style.color = 'grey';
        };
    };

    changeDistanceProgress(distanceDiv) {
        this.distance -= 10;
        distanceDiv.style.width = `${this.distance}%`;
    };

    isReadyToMove() {
        return this.distance > 0;
    }

    isReadyToFight() {
        return this.health > 0;
    }

    restore() {
        this.health = this.maxHealth;
        this.distance = this.maxDistance;
    }

    clone() {
        return new Unit(this.type, this.maxHealth, this.maxDistance);
    }


}