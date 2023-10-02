const fs = require("fs");
const webp = require('webp-converter');
const path = require("path");

webp.grant_permission();

function getFiles(dir) {
    return fs.readdirSync(dir).flatMap((item) => {
        const path = `${dir}/${item}`;
        if (fs.statSync(path).isDirectory()) {
            return getFiles(path);
        }

        return path;
    });
}

const base = path.resolve("public");

const noConvert = ["webp", "m4v", "mp4", "mkv"];

const images = getFiles(path.resolve("public/img")).filter((img) => noConvert.indexOf(img.split(".")[1]) === -1);
const html = getFiles(path.resolve("src/templates")).filter((html) => html.endsWith(".html"));

images.forEach(async (img) => {
    await webp.cwebp(img, img.split(".")[0] + ".webp");
    fs.unlink(img, console.log);
});

html.forEach(async (p) =>{
    let content = fs.readFileSync(p, 'utf8');

    images.forEach((img) =>
    {
        img = img.replace(base+"\\", "/").replaceAll("\\\\", "/");
        content = content.replaceAll(img, img.split(".")[0] + ".webp");
    });

    fs.writeFile(p, content, 'utf8', console.log);
})
