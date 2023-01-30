import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TConfiguration = t.UConfiguration

export type THTTPSError = t.UHTTPSError

export type IInit = () => IStreamConsumer

export type IStreamConsumer = {
    'onData': ($: mcommon.TString, ) => void
    'onEnd': () => void
}

export type FHandleError = ($: THTTPSError,) => void

export type FProcessHTTPSResource = ($: mcommon.TPath, $i: IInit,) => void