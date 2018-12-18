module.exports = {
    version: "1.0.1",
    host: "192.168.0.1", // where the api is hosted?
    port: 8000,
    connectionUrl: 'mongodb://rfarmmgr:123456@192.168.0.151:27017/rfarmdb',
    databaseName: 'rfarmdb',
    sslKey: "../ssl/key.pem",
    sslCert: "../ssl/cert.pem",
    renderOutputDir: "./renderoutput/",
    apiKeyCheck: true,
    workspaceCheck: true,
    workgroup: "default" // it helps to resolve what workers belong to which api instance
};