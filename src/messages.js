const welcomeMessage = () => {
  console.log(`
    Hello, welcome to a really nice search tool.
    You can ask for a search for projects to learn new technologies
    and topics, and you will receive a list of projects plus content to learn
    much more 🚀.
  `);
};

const welcomeAgainMessage = () => {
  console.log(`
    Hello again, welcome to a really nice search tool, as you already know.
    Seems like you have already asked for a search
    and now you need some more information.
    Go ahead and ask something again 😊.
  `);
};

const goodByeMessage = () => {
  console.log(`
    Your results have been saved to results.txt
    if you want to change them, please edit in the next search.
    See you later 👋.
  `);
};

export {
  welcomeMessage,
  goodByeMessage,
  welcomeAgainMessage
}