const fetch = require("node-fetch");
async function main() {
  const res = await fetch(
    "https://us-central1-btlaw-probono-poc.cloudfunctions.net/getOrganizations"
  );
  const json = await res.json();

  console.log(json.data);
}

main();
