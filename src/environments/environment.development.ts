const port = 3200;

export const env  = {
    port : port,
    backendUrl:`http://localhost:${port}`,
    socketUrl : `ws://localhost:${port}`,
}