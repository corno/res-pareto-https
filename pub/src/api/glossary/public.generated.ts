import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type IInit = () => IStreamConsumer

export type IStreamConsumer = {
    'onData': ($: gcommon.T.String, ) => void
    'onEnd': () => void
}

export type FHandleError = ($: T.HTTPSError,) => void

export type FProcessHTTPSResource = ($: gcommon.T.Path, $i: IInit,) => void