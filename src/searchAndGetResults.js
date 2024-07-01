const searchAndGetResults = async (queryText, exaApiClient, preferences) => {
  try {
    const response = await exaApiClient.searchAndContents(
      queryText,
      preferences
    );
    return response.results.map((result) => result.url);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default searchAndGetResults;