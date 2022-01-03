import { Middleware } from "./middleware";

export class VoteServices extends Middleware {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async getVotes(pageNumber) {
    const filter = {
      limit: 3,
      skip: pageNumber * this.limit - this.limit,
      where: {
        type: "vote",
      },
    };
    try {
      this.setFilterEndpoint(filter);

      return await this.getFetchEndpoint(`posts`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getVoteById(id) {
    const filter = {
      include: [
        {
          relation: "vote",
          scope: {
            include: [
              {
                relation: "proposals",
                scope: {},
              },
            ],
          },
        },
      ],
    };
    try {
      return await this.getFetchEndpointOnlyInclude(`posts/${id}`, filter);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getTotalPosts() {
    try {
      return await this.getFetchEndpoint(`votes/count`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getPostsByTitle(title) {
    const filter = {
      limit: 3,
      where: {
        type: "vote",
        title: {
          like: `%${title?.charAt(0).toUpperCase()}%`,
        },
      },
    };

    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`posts`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getPostsInOrder(payload) {
   
    const filter = {
      limit: 3,
      order: `${payload.propertyName} ${payload.order === "up" ? "ASC" : "DESC"}`,
      where: {
        type: "vote",
      },
    };
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`posts`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getPostsByStatus(status) {
    const filter = {
      limit: 3,
      where: {
        type: "vote",
        status: status,
      },
    };
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`posts`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getPostsByZones(zones) {
    const filter = {
      limit: 3,
      where: {
        type: "vote",
        status: status,
      },
    };
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`posts`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async userHasVoted(userId) {
    const filter = {
      where: {
        userId: userId,
      },
    };
    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`suffrages`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
