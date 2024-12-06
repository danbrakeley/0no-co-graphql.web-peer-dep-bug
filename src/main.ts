import {Client} from "@urql/core"

async function main() {
  const foo = new Client({});
  console.log(foo);
}

main();
