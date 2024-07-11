
/*fs.readdir(path.resolve(__dirname)).then(files => console.log(files)).catch(e => console.log(e)); // Estamos fazendo a leitura do arquivo "index.js". */
const fs = require('fs').promises;
const path = require('path');
async function readdir (rootdir) {
    rootdir = rootdir || path.resolve(__dirname);
    const files = await fs.readdir(rootdir);
    walk(files, rootdir);
}

async function walk (files, rootdir) {
    for (let file of files) {
        const filefullPath = path.resolve(rootdir, file);
        const stats = await fs.stat(filefullPath);

        if (stats.isDirectory()) {
            readdir(filefullPath);
            continue;
        }

        if (/\git/g.test(filefullPath)) continue;
        if (/\node_modules/g.test(filefullPath)) continue;

        console.log(file, stats.isDirectory());
    }
}

readdir();