let favoriteStore = null;

export class FavoriteStore {
    constructor() {
        this.store = [];
    }

   static getStore() {
    if (! favoriteStore)
      favoriteStore = new FavoriteStore();
    return favoriteStore;
  }

  addFavorite(car) {
      this.store.push(car)
  }

  hasFavorite(car) {
      
  }
}