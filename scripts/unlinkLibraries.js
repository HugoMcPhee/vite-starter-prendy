const { exec: execCallback } = require("child_process");
const util = require("util");
const exec = util.promisify(execCallback);
const path = require("path");
const fs = require("fs");

async function runCommand(command, directory) {
  try {
    const { stdout } = await exec(command, { cwd: directory });
    console.log(stdout);
  } catch (error) {
    console.error(`Error executing command '${command}' in ${directory}:`, error);
  }
}

async function unlinkSelf(library) {
  const libraryPath = path.join(__dirname, "..", "..", library);
  await runCommand("npm unlink", libraryPath);
}

async function unlinkFrom(library, target, isGameProject = false) {
  // Adjust the path based on whether it's for the game project or a library
  const libraryPath = isGameProject
    ? path.join(__dirname, "..") // Path for the game project, already at the correct level
    : path.join(__dirname, "..", "..", library); // Path for a library

  await runCommand(`npm unlink ${target}`, libraryPath);
}

async function main() {
  const libraries = ["repond", "repond-movers", "prendy"];
  const libraryRelations = [
    { source: "repond-movers", target: "repond" },
    { source: "prendy", target: "repond" },
    { source: "prendy", target: "repond-movers" },
  ];

  // Unlink BabylonJS modules from the game project
  const gameProjectPath = path.join(__dirname, "..", "..", "vite-starter-prendy");
  for (const module of ["@babylonjs/core", "@babylonjs/loaders"]) {
    await unlinkFrom(".", module, true);
  }

  // Unlink libraries from each other
  for (const relation of libraryRelations) {
    await unlinkFrom(relation.source, relation.target);
  }

  // Unlink BabylonJS modules from prendy
  const prendyPath = "prendy";
  for (const module of ["@babylonjs/core", "@babylonjs/loaders"]) {
    await unlinkFrom(prendyPath, module);
  }

  // Unlink libraries from themselves
  for (const library of libraries) {
    await unlinkSelf(library);
  }

  // Reinstall packages for each library and the game project
  for (const library of libraries) {
    await runCommand("npm install --force", path.join(__dirname, "..", "..", library));
  }
  await runCommand("npm install --force", gameProjectPath); // for the game project
}

main();
