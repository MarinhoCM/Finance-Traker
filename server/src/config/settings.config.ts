import * as env from 'env-var'
require('dotenv').config()

export const serverConfig = {
    port: env.get('SERVER_PORT').default(1339).asPortNumber(),
    key: env.get('SECRET_KEY').default('dev_secret').asString()
}
