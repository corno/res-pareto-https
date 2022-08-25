import * as api from "api-pareto-https"
import { createHTTPSResource } from "./createHTTPSResource"

type API = {
    createHTTPSResource: api.CreateHTTPSResource
}

export const $: API = {
    createHTTPSResource: createHTTPSResource
}