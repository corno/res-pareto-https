import * as pt from "pareto-core-types"

import { IStreamConsumer } from "../interfaces/StreamConsumer.p"
import { THostConfiguration } from "../types/HostConfiguration.p"
import { THTTPSError } from "../types/HTTPSError.p"
import { TPath } from "../types/Path.p"

export type FHTTPSResource = (
    $: {
        readonly "id": TPath;
    },
    $i: {
        readonly "onNotExists": () => void
        readonly "onFailed": () => void
        readonly "init": () => IStreamConsumer<string>
    }
) => void

export type FCreateHTTPSResource = (
    $: THostConfiguration,
    $i: {
        readonly "onError": ($: THTTPSError) => void
    },
) => FHTTPSResource

