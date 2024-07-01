import { input } from "@inquirer/prompts";

const askForApiKey = async () => {
  const exaApiKey = await input({
    message: "For that, you need an Exa API key: ",
  });

  // Verify if the api key is in a valid format

  if (
    exaApiKey.match(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
    )
  ) {
    return exaApiKey;
  } else {
    console.log("Invalid API key. Please try again.");
    return askForApiKey();
  }
};

export default askForApiKey;