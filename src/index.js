import "dotenv/config";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { input } from "@inquirer/prompts";
import Exa from "exa-js";
import User from "./User.js";
import searchAndGetResults from "./searchAndGetResults.js";
import verifyUserPreferences from "./verifyUserPreferences.js";
import {
  welcomeMessage,
  goodByeMessage,
  welcomeAgainMessage,
} from "./messages.js";
import askForApiKey from "./askForApiKey.js";

if (!process.env.EXA_API_KEY) {
  welcomeMessage();
  process.env.EXA_API_KEY = await askForApiKey();
} else {
  welcomeAgainMessage();
}

const user = new User(process.env.EXA_API_KEY);
const exa = new Exa(user.apiKey);

await verifyUserPreferences(user);

const queryText = await input({ message: "Search query: " });

const results = await searchAndGetResults(queryText, exa, user.preferences);

const resultsString = results.join("\n");
const userPreferencesString = JSON.stringify(user.preferences, null, 2);

if (!existsSync("results") || !existsSync("data")) {
  mkdirSync("results");
  mkdirSync("data");
}

writeFileSync("results/results.txt", resultsString);
writeFileSync("data/userPreferences.json", userPreferencesString);

goodByeMessage();
