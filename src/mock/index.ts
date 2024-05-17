export const getDropdownList = (count: number) => {
  return new Promise((resolve, reject) => {
    const suggestions: string[] = [
      "pet store",
      "pet food",
      "local",
      "India",
      "Jameica",
    ];
    setTimeout(() => {
      const index = Math.floor(Math.random() * 4);
      return resolve([suggestions[index]]);
    }, 2500);
  });
};

export const getSuggestiveEnding = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("some ending to the text.");
    }, 1500);
  });
};
