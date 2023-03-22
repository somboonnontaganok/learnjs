class Media {
    constructor(title) {
      this._author = author;
      this._title = title;
      this._pages = pages;
      this._isCheckOUt = false;
      this._ratings = rartings;
    }
    get author() {
      return this._author;
    } 
    get title() {
      return this._title;
    }
    get pages() {
      return this._pages;
    }
    get isCheckOut() {
      return this._isCheckOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckOut(isCheckOut) {
      this._isCheckOut = isCheckOut;
    }
    toggleCheckOutStatus(isCheckOut) {
      this._isCheckedOut = !this._isCheckedOut
    }
    getAverageRating() {
        let ratingsSum = this._ratings.reduce((accumulator, rating) => accumulator + rating);
        return ratingsSum / this._ratings.length;
    }

    addingRatings(value) {
        this._ratings.push(value);
    }
}

class Book extends Media {
    constructor(title, author, pages,) {
        
    }
}