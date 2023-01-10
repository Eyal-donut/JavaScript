const language1 = 'Hebrew'
const island1 = false;
const populationMillion1 = 9
const country1 = 'Israel'

const language2 = 'English'
const island2 = false;
const populationMillion2 = 9
const country2 = 'British Israel'

const countryToLiveIn = (language, island, populationMillion, country) => {
    if (language === 'English' && populationMillion < 50 && !island) {
        return `You should live in ${country}.`;
    } else return `${country} does not meet your criteria.`;
}

countryToLiveIn(language1, island1, populationMillion1, country1);

countryToLiveIn(language2, island2, populationMillion2, country2);