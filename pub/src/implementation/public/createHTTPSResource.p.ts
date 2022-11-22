
import * as api from "../../interface"

import { call } from "../private/call.p"
import { panic } from "../private/panic.p"

export const f_createHTTPSResource: api.FCreateHTTPSResource = ($, $i) => {
    const settings = $
    const onError = $i.onError
    return ($, $i) => {

        type StreamConsumer<DATA> = {
            onData: ($: DATA) => void;
            onEnd: () => void;
        }
        let consumer: null | StreamConsumer<string> = null
        call(
            {
                hostname: settings.hostName,
                path: [settings.contextPath, $.id],
            },
            {
                onData: ($) => {
                    if (consumer === null) {
                        consumer = $i.init()
                    }
                    consumer.onData($)
                },
                onEnd: () => {
                    if (consumer === null) {
                        console.error("no HTTPS data received")
                        consumer = $i.init() //very strange
                    }
                    consumer.onEnd()
                },
                onError: ($) => {
                    if (consumer !== null) {
                        panic("ENCOUNTERED HTTPS ERROR AFTER DATA WAS RECEIVED")
                    }
                    onError($)
                    $i.onFailed()
                },
            }
        )
    }
}
