#!/usr/bin/env node

import fs from "fs";
import getStdin from "get-stdin";
import ignore from "ignore";

(async () => {
  if (process.argv.length < 3) {
    console.error("Usage: ignore [.*ignore]");
    process.exit(1);
  }

  const ignoreFilePath = process.argv[2];
  const stdinString = await getStdin();

  const ignoreFileString = fs.readFileSync(ignoreFilePath, "utf-8");
  const paths = stdinString.match(/[^\s]+/g) ?? [];

  const filteredPaths = ignore().add(ignoreFileString).filter(paths);

  console.log(filteredPaths.join(" "));
})();
