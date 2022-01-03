import { Middleware } from "./middleware";
export class AdventuresServices extends Middleware {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async getAdventureTrainings() {
    const filter = {
      include: [
        {
          relation: "training",
        },
      ],
    };
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`adventure-trainings`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getTrainingTypeAdventure() {
    const filter = {};
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`training-type-adventure`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
