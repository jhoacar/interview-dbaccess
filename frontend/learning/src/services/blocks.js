import { Middleware } from "./middleware";
export class BlocksServices extends Middleware {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async getBlocks() {
    const filter = {};
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`blocks`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
