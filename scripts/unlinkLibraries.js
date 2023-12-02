const { exec: execCallback } = require("child_process");
const util = require("util");
const exec = util.promisify(execCallback);
const path = require("path");
const fs = require("fs").promises;

async function runCommand(command, directory) {
  try {
    const { stdout } = await exec(command, { cwd: directory });
    console.log(stdout);
  } catch (error) {
    console.error(`Error executing command '${command}' in ${directory}:`, error);
  }
}

async function updatePackageMain(libraryPath, newPath) {
  const packagePath = path.join(libraryPath, "package.json");
  const packageData = JSON.parse(await fs.readFile(packagePath, "utf8"));
  packageData.main = newPath;
  await fs.writeFile(packagePath, JSON.stringify(packageData, null, 2));
}

async function unlinkLibrary(library) {
  const libraryPath = path.join(__dirname, "..", "..", library);
  await updatePackageMain(libraryPath, "dist/index.js");

  try {
    const { stdout } = await exec(`yarn unlink ${library}`, { cwd: libraryPath });
    console.log(stdout);
  } catch (error) {
    console.error(`Error unlinking ${library}:`, error);
  }
}

async function unlinkLibrariesFromEachOther() {
  const libraryRelations = [
    { source: "repond-movers", target: "repond" },
    { source: "prendy", target: "repond" },
    { source: "prendy", target: "repond-movers" },
  ];

  for (const relation of libraryRelations) {
    const sourcePath = path.join(__dirname, "..", "..", relation.source);
    console.log(`Unlinking ${relation.target} from ${relation.source}...`);
    await runCommand(`yarn unlink ${relation.target}`, sourcePath);
  }
}

async function main() {
  const libraries = ["repond", "repond-movers", "prendy"];

  for (const library of libraries) {
    await unlinkLibrary(library);
  }

  await unlinkLibrariesFromEachOther();

  // Unlink BabylonJS libraries from prendy's node_modules
  const prendyPath = path.join(__dirname, "..", "..", "prendy");
  await runCommand(`yarn unlink @babylonjs/core`, path.join(prendyPath, "node_modules", "@babylonjs", "core"));
  await runCommand(`yarn unlink @babylonjs/loaders`, path.join(prendyPath, "node_modules", "@babylonjs", "loaders"));
}

main();
