
export class Restaurant {
    constructor({ id, name, email, password }) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    }
  
    static fromList(restaurants = []) {
      return restaurants.map((item) => new Restaurant(item));
    }
  
    updateTitle(newTitle) {
      this.title = newTitle;
      return this;
    }
  }
  