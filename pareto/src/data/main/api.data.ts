import * as pd from 'pareto-core-data'

import {  afunction, algorithm, dependent, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> =  {
    'algorithms': d({
        "createHTTPSResource": algorithm(afunction("this", {}, "HTTPS"), dependent(typeReference("this", {}, "Configuration"), {
            // "onNotExists": functionReference("common", {}, "Signal"),
            // "onFailed": functionReference("common", {}, "Signal"),
            // "onError": functionReference("this", {}, "HandleError"),
        }, {})),
    }),
}