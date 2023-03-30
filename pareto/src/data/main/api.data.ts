import * as pd from 'pareto-core-data'

import {  algorithm, dependent, data, resource } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> =  {
    'algorithms': d({
        "httpsServer": algorithm(resource("this", {}, "HTTPSServer"), {}, dependent(data("this", {}, "Configuration"), {
        }, {})),
    }),
}