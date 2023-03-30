import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace Configuration {
        
        export type contextPath = g_common.T.Path
        
        export type hostName = string
    }
    
    export type Configuration = {
        readonly 'contextPath': g_common.T.Path
        readonly 'hostName': string
    }
    
    export namespace Data {
        
        export type data = string
        
        export type error = T.HTTPSError
    }
    
    export type Data = 
        | ['data', string]
        | ['error', T.HTTPSError]
    
    export type EncounteredErrors = boolean
    
    export namespace HTTPSError {
        
        export type _lunknown = string
    }
    
    export type HTTPSError = 
        | ['unknown', string]
}