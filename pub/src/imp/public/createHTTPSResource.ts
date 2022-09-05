
import * as api from "api-pareto-https"
import { call } from "../private/call"
import { panic } from "../private/panic"

export const createHTTPSResource: api.XCreateHTTPSResource = ($, $i) => {
    const settings = $
    const onError = $i.onError
    return {
        get: ($, $i) => {

            type StreamConsumer<DATA> = {
                onData: ($: DATA) => void;
                onEnd: () => void;
            }
            let consumer: null | StreamConsumer<string> = null
            return call(
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
                },


            )
        }
    }
}
