
const d6 = (stat) => {
    const successChance = (6 - stat + 1) *1 / 6;
    const formattedSuccessChance = successChance.toFixed(2);
    return formattedSuccessChance;
};



export default d6;