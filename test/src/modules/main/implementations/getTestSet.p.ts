
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../api"

import * as pub from "../../../../../pub"

export const $$: api.CgetTestSet = () => {
    pl.logDebugMessage("START")

    pub.$a.createHTTPSResourceProcessor(
        {
            'hostName': "www.nu.nl",
            'contextPath': "",
        },
        {
            onError: () => {
                pl.implementMe(`XSSDF`)
            },
            onFailed: () => {
                pl.implementMe(`XSSDF`)

            },
            onNotExists: () => {
                pl.implementMe(`XSSDF`)
            }
        }
    )([], () => {
        return {
            onData: ($) => {
                pl.logDebugMessage($)
            },
            onEnd: () => {
                pl.logDebugMessage("ENDED")
            }
        }
    })
    const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            type: ["test", {
                type: ["short string", {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}