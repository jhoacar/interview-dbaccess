import { Middleware } from "./middleware";

export class CommentServices extends Middleware {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  async getComments({ limit, offset, id }) {
    const filter = {
      offset,
      limit,

      fields: {
        id: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        content: true,
        userId: true,
        postsId: true,
      },

      where: { postsId: id },
      include: [
        {
          relation: "user",
          scope: {
            include: [{ relation: "fileStorages" }],
          },
        },
        { relation: "reactions" },

        {
          relation: "answers",
          scope: {
            include: [
              {
                relation: "user",
                scope: {
                  include: [{ relation: "fileStorages" }],
                },
              },
              { relation: "reactions" },
            ],
            offset: 0,
            limit: 5,
          },
        },
      ],
    };

    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`comments`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getCommentsCount({ id }) {
    const filter = {
      postsId: id,
    };

    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`comments/count`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async getMoreAnswers({ id, offset, limit }) {
    const filter = {
      offset,
      limit,
      where: { commentId: id },
      include: [{ relation: "user" }],
    };

    try {
      this.setFilterEndpoint(filter);
      return await this.getFetchEndpoint(`answers`);
    } catch (e) {
      console.log(e);
      return [];
    }
  }
}
