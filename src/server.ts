import { serve } from 'https://deno.land/std/http/server.ts'

/** Small server that display an `Hello World` message */
export async function server(addr: string, port: number) {
    const s = serve(addr + ':' + port)

    console.log('Server running at http://%s:%s', addr, port)

    for await (const req of s) {
        req.respond({ body: new TextEncoder().encode('Hello World\n') })
    }
}
