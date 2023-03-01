import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gthis from "./glossary"

export type CcreateHTTPSResourceProcessor = ($: gthis.T.Configuration, $d: {
    readonly 'onError': gthis.FHandleError
    readonly 'onFailed': gcommon.FSignal
    readonly 'onNotExists': gcommon.FSignal
}) => gthis.FProcessHTTPSResource

export type API = {
    createHTTPSResourceProcessor: CcreateHTTPSResourceProcessor
}