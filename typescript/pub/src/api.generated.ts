import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export namespace D {
    
}

export namespace A {
    
    export type httpsServer = ($: g_this.T.Configuration, ) => g_this.ASYNC.A.R.HTTPSServer
}

export type API = {
    readonly 'httpsServer': A.httpsServer
}