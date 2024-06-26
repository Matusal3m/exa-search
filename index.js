import "dotenv/config";
import Exa from "exa-js";

const exaApiKey = process.env.EXA_API_KEY;
const queryText = "Here is the best project to practice NodeJS to build an application:";

const searchAndGetResults = async () => {
  try {
    const response = await exaApiClient.searchAndContents(queryText, {
      numResults: 10,
      useAutoprompt: true,
      text: {
        includeHtmlTags: false,
        maxCharacters: 300,
      },
    });
    return response.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const exaApiClient = new Exa(exaApiKey);
const results = await searchAndGetResults();
console.log(results);

