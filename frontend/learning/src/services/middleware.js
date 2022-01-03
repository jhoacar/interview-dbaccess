// @ts-check
import { getOrCreateStore, defaultValueStorage } from "@utils/with-redux-store";
import request, { getOptionsWithToken, getOptions } from "@utils/request";
import { getHostname } from "@utils/utils";

export class CreateFilter {
  constructor() {
    this.limit = 0;
    this.skip = 0;
    this.filterEndpoint = { include: [] };
    this.filterWhere = { where: {} };
    this.filterWhereSociety = {};
    this.filterFields = {};
    this.formatNested = "";
    this.formatNestedTo = "";
    this.formatFunctionTo = false;
    this.filterRelationWhere = [];
    this.filterQuery = "";
  }

  resetFilter() {
    this.limit = 0;
    this.skip = 0;
    this.filterFields = {};
    this.filterWhereSociety = {};
    this.filterEndpoint = { include: [] };
    this.filterWhere = { where: {} };
    this.formatNested = "";
    this.formatNestedTo = "";
    this.formatFunctionTo = false;
    this.filterRelationWhere = [];
    this.filterQuery = "";
  }

  setFilterQuery(value) {
    this.filterQuery = value;
  }

  setFilterRelationWhere(value) {
    this.filterRelationWhere = value;
  }

  getFilterRelationWhere() {
    return this.filterRelationWhere;
  }

  setFilterLimit(value) {
    this.limit = value;
  }

  setFilterSkip(value) {
    this.skip = value;
  }

  setFormatNested(value) {
    this.formatNested = value;
  }

  setFormatNestedTo(value) {
    this.formatNestedTo = value;
  }

  setformatFunctionTo() {
    this.formatFunctionTo = true;
  }

  getFormatNested() {
    return this.formatNested;
  }

  getFormatNestedTo() {
    return this.formatNestedTo;
  }

  setFilterWhereDate(start, end) {
    this.filterWhere = {
      ...this.filterWhere,
      where: {
        ...this.filterWhere.where,
        created: {
          between: [start, end],
        },
      },
    };
  }

  setFilterFields(fields) {
    this.filterFields = {
      ...this.filterFields,
      ...fields,
    };
  }

  setFilterWhereDefault(key, value) {
    this.filterWhere = {
      ...this.filterWhere,
      where: {
        ...this.filterWhere.where,
        [key]: value,
      },
    };
  }

  setFilterOrder(key, order) {
    this.filterWhere = {
      ...this.filterWhere,
      order: [`${key} ${order}`],
    };
  }

  setFilterWhere(where) {
    this.filterWhere = {
      ...this.filterWhere,
      where,
    };
  }

  setSocietyFilterWhere(key, value) {
    this.filterWhereSociety = {
      ...this.filterWhereSociety,
      [key]: value,
    };
  }

  setFilterEndpoint(filter) {
    this.filterEndpoint = {
      ...this.filterEndpoint,
      ...filter,
      include: [...this.filterEndpoint.include, ...(filter.include ?? [])],
    };
  }

  setFilterRelation(relation) {
    this.filterEndpoint = {
      ...this.filterEndpoint,
      include: [...this.filterEndpoint.include, ...relation],
    };
  }

  getFilterEndpoint() {
    const filter = {
      ...(this.limit === 0 ? {} : { limit: this.limit }),
      ...(this.skip === 0 ? {} : { skip: this.skip }),
      ...this.filterWhere,
      ...this.filterEndpoint,
      where: {
        ...this.filterWhere.where,
        ...(this.filterEndpoint.where ?? {}),
      },
      fields: {
        ...(this.filterEndpoint.fields ?? {}),
        ...this.filterFields,
      },
      include: [
        ...(this.filterEndpoint?.include?.map((include) => {
          return {
            ...include,
            scope: {
              ...(include?.scope ?? {}),
              where: {
                ...(include?.scope?.where ?? {}),
                ...(this.filterRelationWhere?.find((e) => e.relation === include.relation)?.where ?? {}),
              },
            },
          };
        }) ?? []),
      ],
    };
    return filter.where.or
      ? {
          ...filter,
          where: {
            or: filter.where.or.map((e) => {
              const { or, and, ...otherWhere } = filter.where;
              return { ...e, ...otherWhere };
            }),
            and: filter.where.and,
          },
        }
      : filter;
  }

  getFilterWhere() {
    return this.filterWhere;
  }
}

export class Middleware extends CreateFilter {
  constructor() {
    super();
    this.typeStorage = "";
    this.nameStorage = "";
    this.store = {};
  }

  async setStorageCtx(ctx) {
    const hostname = getHostname(ctx.req, true);
    this.typeStorage = "ctx";
    this.store = getOrCreateStore(await defaultValueStorage(ctx, hostname)).getState();
  }

  async setStorageDefault(storage) {
    this.typeStorage = "default";
    this.store = storage;
  }

  getOptions() {
    return this.typeStorage !== "" ? getOptionsWithToken(this.store.auth.tokenUser) : getOptions();
  }

  ifExist(nameStorage) {
    this.nameStorage = nameStorage;
    return this.store[nameStorage].data.length > 0;
  }

  getStorage(nameStorage) {
    if (Object.keys(this.store).length === 0) {
      this.store = getOrCreateStore().getState();
    }
    return this.store[nameStorage || this.nameStorage];
  }

  async getFetchEndpoint(nameEndpoint) {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL_API}/${nameEndpoint}`;
      const options = this.getOptions();
      // console.log(`Url : ${nameEndpoint} |`, JSON.stringify(this.getFilterEndpoint()));
      console.log(`${url}?filter=${encodeURI(JSON.stringify(this.getFilterEndpoint()))}`)
 
      return await request(`${url}?filter=${encodeURI(JSON.stringify(this.getFilterEndpoint()))}`, options);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

    async getFetchEndpointOnlyInclude(nameEndpoint, filter) {
    try {
      const url = `${process.env.NEXT_PUBLIC_URL_API}/${nameEndpoint}`;
      const options = this.getOptions();
      // console.log(`Url : ${nameEndpoint} |`, JSON.stringify(this.getFilterEndpoint()));
      console.log(`${url}?filter=${encodeURI(JSON.stringify(filter))}`)
 
      return await request(`${url}?filter=${encodeURI(JSON.stringify(filter))}`, options);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
} 
