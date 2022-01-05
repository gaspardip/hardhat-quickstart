const { ethers } = require("hardhat");

const names = ["Bob", "John", "Alice", "Hardhat"];

async function main() {
  const greeter = await ethers.getContractAt(
    "Greeter",
    "0x5fbdb2315678afecb367f032d93f642f64180aa3",
  );

  const randomName = names[Math.floor(Math.random() * names.length)];
  const newGreeting = `Hello, ${randomName}!`;

  await greeter.setGreeting(newGreeting);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
