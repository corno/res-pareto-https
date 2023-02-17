import * as pd from 'pareto-core-data'
import {
    reference,
    string,
    nested,
    array,
    typeReference,
    interfaceReference,
    null_,
    method, dictionary, group, member, taggedUnion, types, func, type
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'types': d({
            "Configuration": type(group({
                "hostName": member(string()),
                "contextPath": member(reference("common", "Path"))
            })),
            "HTTPSError": type(taggedUnion({
                "unknown": string()
            })),
        }),
        'interfaces': d({
            "Init": method(null, ['reference', {
                'context': ['local', {}],
                'interface': "StreamConsumer"
            }], false),
            "StreamConsumer": ['group', {
                'members': d({
                    "onData": method(typeReference("common", "String")),
                    "onEnd": method(null)
                })
            }]
        }),
        'functions': d({
            "HandleError": func(typeReference("HTTPSError"), null, null, null),
            "ProcessHTTPSResource": func(typeReference("common", "Path"), null, interfaceReference("Init"), null),
        }),
    },
    'api': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "createHTTPSResourceProcessor": algorithm(definitionReference("ProcessHTTPSResource"), constructor(typeReference("Configuration"), {
                "onNotExists": definitionReference("common", {}, "Signal"),
                "onFailed": definitionReference("common",  {}, "Signal"),
                "onError": definitionReference("HandleError"),
            })),
        })
    },
}