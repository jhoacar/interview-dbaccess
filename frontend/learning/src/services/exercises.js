import { Middleware } from "./middleware";
export class ExercisesServices extends Middleware {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async getExercises() {
    const filter = {};
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`exercises`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
