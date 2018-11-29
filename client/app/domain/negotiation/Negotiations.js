class Negotiations {
    constructor (trap) {
        this._negotiations = [];
        this._trap = trap;
        Object.freeze(this);
    }

    adiciona (negotiation) {
        this._negotiations.push(negotiation);
        this._trap(this);
    }

    toArray () {
        return [].concat(this._negotiations);
    }
    
    get totalVolume () {
        return this._negotiations.reduce( (total, negotiation) =>
            total + negotiation.volume, 0
        );
    }

    empties () {
        this._negotiations.length = 0;
        this._trap(this);
    }

}