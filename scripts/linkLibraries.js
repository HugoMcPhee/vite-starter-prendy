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

async function linkLibrary(library) {
  const libraryPath = path.join(__dirname, "..", "..", library.name);
  console.log(`Linking ${library.name}...`);
  await updatePackageMain(libraryPath, "src/index.ts");
  await runCommand("yarn link", libraryPath);

  for (const command of library.additionalCommands) {
    await runCommand(command, libraryPath);
  }

  if (library.specialHandling === "babylonjs") {
    for (const module of ["core", "loaders"]) {
      const modulePath = path.join(libraryPath, "node_modules", "@babylonjs", module);
      await runCommand("yarn link", modulePath);
    }
  }
}

async function linkBabylonJSToGameProject() {
  const gameProjectPath = path.join(__dirname, "..");
  for (const module of ["@babylonjs/core", "@babylonjs/loaders"]) {
    await runCommand(`yarn link ${module}`, gameProjectPath);
  }
}

async function main() {
  const libraries = [
    { name: "repond", additionalCommands: [] },
    { name: "repond-movers", additionalCommands: ["yarn link repond"] },
    {
      name: "prendy",
      additionalCommands: ["yarn link repond", "yarn link repond-movers"],
      specialHandling: "babylonjs",
    },
  ];

  for (const library of libraries) {
    await linkLibrary(library);
  }

  // Link all libraries to the game project
  const gameProjectPath = path.join(__dirname, "..");
  const allLibraries = ["repond", "repond-movers", "prendy"];
  for (const lib of allLibraries) {
    await runCommand(`yarn link ${lib}`, gameProjectPath);
  }

  // Link BabylonJS modules to the game project
  await linkBabylonJSToGameProject();
}

main();
