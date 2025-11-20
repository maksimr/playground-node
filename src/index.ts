import { getVersion } from "./version.ts";

function main() {
  const version: string = getVersion();
  console.log(version);
}

main();
