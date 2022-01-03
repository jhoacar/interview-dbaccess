// import AuthenticationService from './auth.service'

// function requiredEnv(env) {
//   throw new TypeError(`The ${env} environment variable is strictly required.`);
// }

function assertPath(path) {
  const type = typeof path;
  if (type !== "string") {
    throw new TypeError(
      `The path should be a string, instead received a ${type}`
    );
  }
}

export const hosts = process.env.NEXT_PUBLIC_URL_API;

async function parseResponse(res) {
  const data = await res.json();

  if (!res.ok) {
    // get error message from body or default to response status
    const error = (data && data.message) || res.status;
    return Promise.reject(error);
  }
  return data;
}

export default function fetchWrap(path, options = {}) {
  const {
    headers,
    query = null,
    method = "GET",
    body,
    host = hosts,
    token = true,
    ...extraOpts
  } = options;
  assertPath(path);

  // let token = AuthenticationService.getToken();
  const authToken = token ? "getToken()" : null;

  // Compose the request configuration object
  const reqOptions = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
      ...headers,
    },
    ...extraOpts,
  };

  // If a body object is passed, automatically stringify it.
  if (body) {
    reqOptions.body = typeof body === "object" ? JSON.stringify(body) : body;
  }

  let queryString = "";
  if (query) {
    // Convert to encoded string and prepend with ?
    queryString = new URLSearchParams(query).toString();
    queryString = queryString && `?${queryString}`;
  }

  return fetch(`${host}${path}${queryString}`, reqOptions).then(parseResponse);
}
