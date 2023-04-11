import { API } from "./api.generated"
import { $$ as ihttpsServer } from "./implementations/httpsServer.native"

export const $api: API = {
    'httpsServer': ihttpsServer,
}