import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GConfiguration {}
export type GConfiguration = {
    readonly 'contextPath': mcommon.TPath
    readonly 'hostName': string
}
export type UConfiguration = GConfiguration

export namespace GHTTPSError {}
export type GHTTPSError = 
    | ['unknown', string]
export type UHTTPSError = GHTTPSError