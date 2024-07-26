const gameSelection = () => {
    let selection = Math.round(Math.random(1) * 1) + 1; //не более 2 вариантов, позже сделаем выбор макс вариантов
    console.log(selection);
    switch (selection) {
        case 1: return game = brainEven;
        case 2: return game = brainCalc;
    };
};
export default gameSelection;