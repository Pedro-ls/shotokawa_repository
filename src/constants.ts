const VERSION = "v1"
const PREFIX = `/${VERSION}/api`
const HTTP_SECURITY = false
const DOMAIN = "localhost"
const PORT = 3333
const SERVER_URL = `http${HTTP_SECURITY ? "s": ""}://${DOMAIN}:${PORT}/${PREFIX}`
const NOSQL_CONNECTION = "mongodb://localhost:27017/database"
const JWT_KEY_SECRET = "j6fk5w5o0bngw[pqbjjpsof&!sfiosd&j5fb5djqewoj*dhdioqwke5o9jfbio9*ipewirjfe"

export default {
    PREFIX,
    HTTP_SECURITY,
    DOMAIN,
    PORT,
    SERVER_URL,
    NOSQL_CONNECTION,
    JWT_KEY_SECRET
}