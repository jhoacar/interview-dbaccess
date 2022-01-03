import { Middleware } from "./middleware";
export class CategoriesServices extends Middleware {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async getCategories() {
    const filter = {};
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`categories`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
