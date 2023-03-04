import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "createHTTPSResourceProcessor": algorithm(functionReference("this", {}, "ProcessHTTPSResource"), constructor(typeReference("this", {}, "Configuration"), {
            "onNotExists": functionReference("common", {}, "Signal"),
            "onFailed": functionReference("common",  {}, "Signal"),
            "onError": functionReference("this", {}, "HandleError"),
        })),
    })
}