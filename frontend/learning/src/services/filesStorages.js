import { Middleware } from "./middleware";
export class FilesStorageServices extends Middleware {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async getFilesStorage() {
    const filter = {};
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`files-storage`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
