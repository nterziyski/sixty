export default class FavoriteStore {
    static instance;

    constructor(){
        if (this.instance){
            return this.instance;
        }

        this.store = [];
        this.instance = this;
    }

    addCarToFavourites(car) {
        this.store.push(car)
    }

    hasFavorite(car) {
        
    }
}