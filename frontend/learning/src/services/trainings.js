import { Middleware } from "./middleware";
export class TrainingsServices extends Middleware {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async getTrainings() {
    const filter = {};
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`trainings`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
