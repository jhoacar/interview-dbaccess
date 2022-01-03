import { Middleware } from "./middleware";
export class WorkTeamServices extends Middleware {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async getWorkTeam() {
    const filter = {};
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`work-team`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
