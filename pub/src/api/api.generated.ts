import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcommon from "glo-pareto-common"

export type CcreateHTTPSResourceProcessor = ($: glo.T.Configuration, $d: {
    readonly 'onError': glo.FHandleError
    readonly 'onFailed': mcommon.FSignal
    readonly 'onNotExists': mcommon.FSignal
}) => glo.FProcessHTTPSResource

export type API = {
    createHTTPSResourceProcessor: CcreateHTTPSResourceProcessor
}