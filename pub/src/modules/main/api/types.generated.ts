import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"

export type TConfiguration = {
    readonly 'contextPath': mcommon.TPath
    readonly 'hostName': string
}

export type THTTPSError = 
    | ['unknown', string]

export type IInit = () => IStreamConsumer

export type IStreamConsumer = {
    'onData': ($: mcommon.TString, ) => void
    'onEnd': () => void
}

export type FHandleError = ($: THTTPSError,) => void

export type FProcessHTTPSResource = ($: mcommon.TPath, $i: IInit,) => void