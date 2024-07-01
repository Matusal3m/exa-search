import { input, confirm, select, rawlist } from "@inquirer/prompts";

export default class User {
  constructor(apiKey) {
    this.data = {
      apiKey,
      preferences: {},
    };
  }

  async askPreferences() {
    const numResults = await this.askNumResults();
    const useAutoprompt = await this.askUseAutoprompt();
    const addContent = await this.askAddContent();
    const text = this.askText(addContent);
    const type = await this.askType();
    const category = await this.askCategory();

    this.data.preferences = {
      numResults,
      useAutoprompt,
      text,
      type,
      category,
    };
  }

  async askNumResults() {
    return await input({
      message: "Number of search results (max 10 for free account): ",
      validate: (value) =>
        value > 10 || value < 0 ? "Must be a number between 0 and 10" : true,
    });
  }

  async askUseAutoprompt() {
    return await confirm({ message: "Use autoprompt?" });
  }

  async askAddContent() {
    return await confirm({ message: "Add content?" });
  }

  askText(addContent) {
    if (addContent) {
      return {
        maxCharacters: this.askMaxCharacters(),
        includeHtmlTags: this.askIncludeHtmlTags(),
      };
    }
    return undefined;
  }

  askMaxCharacters() {
    return input({ message: "Max characters: " });
  }

  askIncludeHtmlTags() {
    return confirm({ message: "Include HTML tags?" });
  }

  async askType() {
    return await select({
      message: "Type of search: ",
      default: "neural",
      choices: [
        { value: "neural", name: "Neural (default)" },
        { value: "keyword" },
        { value: "magic" },
      ],
    });
  }

  async askCategory() {
    return await rawlist({
      message: "Select a category for the search: ",
      choices: [
        { name: "None", value: undefined },
        { value: "company" },
        { value: "research paper" },
        { value: "news" },
        { value: "github" },
        { value: "tweet" },
        { value: "movie" },
        { value: "song" },
        { value: "personal site" },
        { value: "pdf" },
      ],
    });
  }

  get apiKey() {
    return this.data.apiKey;
  }

  set preferences(preferences) {
    this.data.preferences = preferences;
  }

  get preferences() {
    return this.data.preferences;
  }
}

