import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

import { external, main, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "a pareto wrapper around the HTTPS library of NodeJS",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
    }),
    'type': ['resource', {
        'definition': {
            'glossary': {
                'root': glossary,
                'imports': d({
                    "common": external("glo-pareto-common"),
                }),
            },
            'api': {
                'root': api,
                'imports': d({
                    "common": external("glo-pareto-common"),
                    "this": this_(),
                }),
            },
        },
        'nativeDependencies': d({}),
        'devDependencies': d({
            "@types/node": null,
        }),
        'test': {
            'dependencies': d({
            }),
            'glossary': {
                'parameters': d({}),
                'types': d({}),
                'builders': d({}),
                'interfaces': d({}),
                'functions': d({}),
            },
            'imports': d({}),
        }
    }],
}