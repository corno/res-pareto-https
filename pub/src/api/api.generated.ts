import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcommon from "glo-pareto-common"

export type CcreateHTTPSResourceProcessor = ($: gglo.T.Configuration, $d: {
    readonly 'onError': gglo.FHandleError
    readonly 'onFailed': gcommon.FSignal
    readonly 'onNotExists': gcommon.FSignal
}) => gglo.FProcessHTTPSResource

export type API = {
    createHTTPSResourceProcessor: CcreateHTTPSResourceProcessor
}