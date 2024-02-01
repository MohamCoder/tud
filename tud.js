fileDir = process.argv[2];
if (!fileDir) {
  console.log('No file specified');
  process.exit();
}
if (fileDir.startsWith("/mnt")) {
  console.log(fileDir);
  process.exit();
}
if (fileDir[1] === ":" && !fileDir.includes("\\")) {
  console.log('wrap ur file with ""');
  process.exit();
}
const MAIN_DIR = fileDir[0].toLowerCase();
fileDir = fileDir.split("\\");
if (fileDir[0].includes(":")) fileDir[0] = `/mnt/${MAIN_DIR}`;
console.log(fileDir.join("/"));
