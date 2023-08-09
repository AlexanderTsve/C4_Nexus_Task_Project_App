export const transformFilteredArr = (arr) => {
  return arr.map((arrOfProduct) => {
    return {
      name: arrOfProduct[0],
      description: arrOfProduct[1],
      type: arrOfProduct[2],
      metal: arrOfProduct[3],
      price: arrOfProduct[4],
    };
  });
};
