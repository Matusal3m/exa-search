import { confirm } from "@inquirer/prompts";
import { readFileSync } from "fs";

const verifyUserPreferences = async (user) => {
  let userPreferences;

  try {
    userPreferences = JSON.parse(
      readFileSync("data/userPreferences.json").toString()
    );
  } catch {
    userPreferences = {};
  }

  const userPreferencesExist = Object.keys(userPreferences).length !== 0;

  if (userPreferencesExist) {
    const shouldChangePreferences = await confirm({
      message: "Existing preferences found. Do you want to change them?",
    });

    if (shouldChangePreferences) {
      await user.askPreferences();
    } else {
      user.preferences = userPreferences;
    }
  } else {
    await user.askPreferences();
  }
};

export default verifyUserPreferences;
