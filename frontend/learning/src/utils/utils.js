import { get } from "lodash";

/**
 *
 * @param {object} params Props for get object Dragger
 * @param {array} params.fileList Array Files
 * @param {function} params.dispatch Funciton for Dispatch
 * @param {string} params.nameFields Name Fields
 * @param {boolean} params.multiple Is Multiple uploads
 * @param {number} params.maxCount Max Count files per Upload
 * @returns {object} Props for Dragger
 */

export const getUploadProps = ({ fileList: UploadFileList = [], dispatch, nameFields, multiple = false, maxCount = 1 }) => {
  return {
    name: `FILE_${nameFields.toUpperCase()}`,
    multiple,
    maxCount,
    beforeUpload: () => {
      return false;
    },
    onChange: (info) => {
      console.log("🚀 ~ file: utils.js ~ line 20 ~ getUploadProps ~ info", info);
      dispatch([...info.fileList]);
    },
    // This funcion is for preview image in new tab
    onPreview: async (file) => {
      let src = file.url;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow.document.write(image.outerHTML);
    },
    fileList: UploadFileList,
  };
};

/**
 * Obtener filtro de reducer
 *
 * @param {*} payload
 * @param {*} filter
 */

export const getFilter = (payload, filter) => {
  if (payload) {
    const { type, value } = payload;
    const filterApply = value !== "" ? { [type]: value } : false;
    if (filterApply) {
      return {
        ...filter,
        ...filterApply,
      };
    } else {
      delete filter[type];
      return filter;
    }
  } else {
    return filter;
  }
};

/**
 * Function for index Array
 *
 * @param {object} params
 * @param {string} params.index Name the index
 * @param {array} params.data Values of indexed
 */

export const useIndex = ({ data, index }) =>
  data?.reduce(
    (valorAnterior, valorActual) => ({
      ...valorAnterior,
      [valorActual[index]]: valorActual,
    }),
    {}
  );

/**
 * Function for get data by identifier
 *
 * @param {object} params
 * @param {array} params.identifiers
 * @param {array} params.values
 * @param {string} params.index Identifier name, Example: "id"
 * @param {[string]} params.notBeReturned Parameters to be removed from the array
 * @returns {[object]}
 */

export const getDataByIdentifier = ({ identifiers = [], values = [], index = "", notBeReturned = [] }) => {
  console.log(values);
  try {
    const indexedValues = useIndex({ data: values, index });
    return identifiers
      .filter((value) => value)
      .map((value) => {
        // Delete the params no allowed
        notBeReturned.forEach((notAllowed) => delete indexedValues[value][notAllowed]);
        return indexedValues[value];
      })
      .filter((value) => value);
  } catch (error) {
    console.log(error, "ERROR");
    return [];
  }
};

/**
 * Get the name of the connected host
 *
 * @param {object} req Request of server
 * @param {bool} trueHost Get the actual route
 *
 * @return {string} Returns name host
 */

export const getHostname = (req, trueHost = false) => {
  let hostname = "localhost";
  if (req) {
    const host = req ? get(req.headers, "x-forwarded-host", req.headers.host) : "";
    hostname = host?.indexOf("localhost") !== -1 && !trueHost ? "localhost" : host;
  }
  return hostname;
};

/**
 *
 * @param {string} hostname Name of hostname
 * @param {string} cookieName Name cookie
 *
 * @return {string} Return cookie name in base64 with slice
 */

export const getCookieName = (hostname, cookieName) => {
  let cookieNameFinished;
  const isServer = typeof window === "undefined";
  const fullCookieName = `${hostname}-${cookieName}`;
  if (isServer) cookieNameFinished = Buffer.from(fullCookieName).toString("base64");
  else cookieNameFinished = btoa(fullCookieName);
  return cookieNameFinished.slice(0, 10);
};

/**
 * Get Params Enables
 *
 * @param {Array} params
 * @param {object} values
 * @returns {object}
 */

export const getParamsEnable = (params, values) => {
  return Object.keys(values)
    .filter((value) => params.includes(value))
    .reduce((previousValue, currentValue) => {
      const value = values[currentValue] !== null && values[currentValue] !== undefined ? values[currentValue] : "";
      return {
        ...previousValue,
        [currentValue]: value,
      };
    }, {});
};
