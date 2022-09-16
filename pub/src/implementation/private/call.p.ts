import * as pt from "pareto-core-types"
import * as https from "https"
import * as pa from "pareto-core-types"
import * as pl from "pareto-core-internals"
import * as api from "api-pareto-https"
import * as pth from "path"

export function call(
    $: {
        hostname: string,
        path: api.TPath,
    },
    $i: {
        onData: (data: string) => void,
        onError: (e: api.THTTPSError) => void,
        onEnd: () => void
    },
    $a: pt.ProcessAsyncValue
): void {
    const options = {
        hostname: $.hostname,
        //port: 443,
        path: pth.join(...pl.flatten($.path)),
        method: 'GET'
    }

    const req = https.request(options, res => {
        //console.log(`statusCode: ${res.statusCode}`)
        res.setEncoding(`utf-8`)

        res.on('data', d => {
            $i.onData(d)
        })
        res.on('end', () => {
            $i.onEnd()
        })
    })

    req.on('error', error => {
        console.error("FIX ERROR DATA")
        $i.onError(["unknown", error.message])
    })

    req.end()

}