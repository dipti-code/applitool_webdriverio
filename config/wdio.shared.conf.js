exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 90000,
        helpers: [require.resolve('@babel/register')],
    },
    sync: true,
    logLevel: 'debug',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec'],

    // ====================
    // Appium Configuration
    // ====================
    services: [
        [
            'appium',
            {
            // For options see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                args: {
                // For arguments see
                // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                },
                command: 'appium',
            },
        ],
        ['applitools', {
            key: 'bvQiWBPIv11AoizGKdG2jUmD1dKRjYDparfrLe1jakI110', // can be passed here or via environment variable `APPLITOOLS_KEY`
            serverUrl: 'https://eyesapi.applitools.com', // optional, can be passed here or via environment variable `APPLITOOLS_SERVER_URL`
            appName: 'Demo  Mobile',
            // options
            // proxy: { // optional
            //     url: 'http://corporateproxy.com:8080'
            //     username: 'username', // optional
            //     password: 'secret', // optional
            //     isHttpOnly: true // optional
            // },
            // viewport: { // optional
            //     width: 1920,
            //     height: 1080
            // }
        }]
    ],
    port: 4723,
};
