
import * as ps from 'pareto-core-state'
import * as pv from 'pareto-core-dev'
import * as pa from 'pareto-core-async'

import * as g_test from "lib-pareto-test"

import * as g_pub from "../../../../../pub"

import { CgetTestSet } from "../definition/api.generated"

export const $$:CgetTestSet = () => {
    pv.logDebugMessage("START")

    g_pub.$r.createHTTPSResourceProcessor(
        {
            'hostName': "www.nu.nl",
            'contextPath': "",
        },
        {
            onError: () => {
                pv.implementMe(`XSSDF`)
            },
            onFailed: () => {
                pv.implementMe(`XSSDF`)

            },
            onNotExists: () => {
                pv.implementMe(`XSSDF`)
            }
        }
    )([], () => {
        return {
            onData: ($) => {
                pv.logDebugMessage($)
            },
            onEnd: () => {
                pv.logDebugMessage("ENDED")
            }
        }
    })
    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            'type': ['test', {
                type: ['short string', {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}