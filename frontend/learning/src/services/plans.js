import { Middleware } from "./middleware";
export class PlansServices extends Middleware {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async getPlans() {
    const filter = {};
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`plans`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
