import { API } from "./api"
import { $$ as icreateHTTPSResourceProcessor } from "./implementations/createHTTPSResourceProcessor.native"

export const $a: API = {
    'createHTTPSResourceProcessor': icreateHTTPSResourceProcessor,
}