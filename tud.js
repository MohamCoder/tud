fileDir = process.argv[2];
const MAIN_DIR = fileDir[0].toLowerCase();
if (!fileDir) {
  console.log('No file specified');
  process.exit();
}
if (fileDir.includes("/")) {
  console.log('not valid windows path');
  process.exit();
}
if (fileDir.startsWith("/mnt")) {
  console.log(fileDir);
  process.exit();
}
if (fileDir[1] === ":" && !fileDir.includes("\\") && fileDir.length > 2) {
  console.log('wrap ur file with ""')
  process.exit();
}
fileDir = fileDir.split("\\");
if (fileDir[0].includes(":")) fileDir[0] = `/mnt/${MAIN_DIR}`;
console.log(fileDir.join("/"));
