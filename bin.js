#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { exit } from 'process';
import { createInterface } from 'readline';
import { fileURLToPath } from 'url';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

function mkdir(dir) {
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch (e) {
    if (e.code === 'EEXIST') return;
    throw e;
  }
}

function copyRec(from, to, replacements, nameChanges) {
  if(fs.statSync(from).isDirectory()) {
    for(const file of fs.readdirSync(from)) {
      let destFile = file;
      for(const change of nameChanges) {
       destFile = destFile.replace(change.regex, change.value);
      }
      copyRec(path.join(from, file), path.join(to, destFile), replacements, nameChanges);
    }
  } else {
    const dirname = path.dirname(to);
    const filename = path.basename(to);
    mkdir(dirname);
    if(replacements && replacements.has(filename)) {
      const rules = replacements.get(filename);
      let data = fs.readFileSync(from, {encoding: 'utf-8'});
      for(const rule of rules) {
        data = data.replace(rule.regex, rule.value);
      }
      fs.writeFileSync(to, data, { encoding: 'utf-8' });
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

function dist() {
	return fileURLToPath(new URL(`./dist`, import.meta.url).href);
}

async function input(question) {
  return new Promise((resolve, reject) => {
    try {
      readline.question(question + " ", resolve)
    } catch(err) {
      reject(err);
    }
  });
}

const main = async () => {

  // Get CWD:
  const cwd = process.argv[2] || '.';

  // Check installation directory:
  if(fs.existsSync(cwd) && fs.readdirSync(cwd).length > 0) {
    console.log("Target directory is not empty. Please try again with an empty directory.");
    exit(1);
  }

  // Make working dir
  mkdir(cwd);

  // Get setup configuration input:
  const title = await input(`What is the title of your site? (My Site)`) || 'My Site';
  const description = await input(`What is your site description?`);
  const outDir = await input(`Where should your site be built? (docs)`) || 'docs';
  let packageName = title.toLowerCase().replace(/\s/g, '-').replace(/^[0-9a-zA-Z-_]+/g, '');
  if(packageName.match(/$[0-9]+/)) packageName = "sss-" + packageName;

  // Copy project files to installation directory:
  console.log(`Copying project files to: ${cwd}`);

  // Copy files from dist and replace placeholder values
  copyRec(dist(), cwd,
    new Map([
      ["rollup.config.js", [
        { regex: /\$OUT_DIR/, value: outDir },
        { regex: /\$SITE_TITLE/, value: title },
        { regex: /\$SITE_DESCRIPTION/, value: description }
      ]],
      ["package.json", [
        { regex: /\$OUT_DIR/, value: outDir },
        { regex: /\$PACKAGE_NAME/, value: packageName },
        { regex: /\$SITE_DESCRIPTION/, value: description }
      ]],
      [".gitignore", [{ regex: /\$OUT_DIR/, value: outDir }]],
      ["README.md", [{ regex: /\$OUT_DIR/, value: outDir }]]
    ]),
    [
      { regex: /DOT\-/, value: "." },
      { regex: /static/, value: outDir }
    ]
  );

  console.log("Done!\n\nNext steps:\n\n1) run `npm install` in the project directory\n2) start the development server with `npm run dev`");
};
main()
  .then(() => {
    readline.close();
    exit(0);
  })
  .catch(err => {
    console.error(err);
    exit(1);
  });