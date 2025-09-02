type MapType = {
    [id: number]: string;
}

const frenchNumbers: MapType = {
    0:  "zÃ©ro",
    1:  "un",
    2:  "deux",
    3:  "trois",
    4:  "quatre",
    5:  "cinq",
    6:  "six",
    7:  "sept",
    8:  "huit",
    9:  "neuf",
    10: "dix",
    11: "onze",
    12: "douze",
    13: "treize",
    14: "quatorze",
    15: "quinze",
    16: "seize",
    17: "dix-sept",
    18: "dix-huit",
    19: "dix-neuf",
    20: "vingt",
    30: "trente",
    40: "quarante",
    50: "cinquante",
    60: "soixante",
    70: "soixante-dix",
    71: "soixante et onze",
    72: "soixante-douze",
    73: "soixante-treize",
    74: "soixante-quatorze",
    75: "soixante-quinze",
    76: "soixante-seize",
    77: "soixante-dix-sept",
    78: "soixante-dix-huit",
    79: "soixante-dix-neuf",
    80: "quatre-vingts",
    81: "quatre-vingt-un",
    82: "quatre-vingt-deux",
    83: "quatre-vingt-trois",
    84: "quatre-vingt-quatre",
    85: "quatre-vingt-cinq",
    86: "quatre-vingt-six",
    87: "quatre-vingt-sept",
    88: "quatre-vingt-huit",
    89: "quatre-vingt-neuf",
    90: "quatre-vingt-dix",
    91: "quatre-vingt-onze",
    92: "quatre-vingt-douze",
    93: "quatre-vingt-treize",
    94: "quatre-vingt-quatorze",
    95: "quatre-vingt-quinze",
    96: "quatre-vingt-seize",
    97: "quatre-vingt-dix-sept",
    98: "quatre-vingt-dix-huit",
    99: "quatre-vingt-dix-neuf",
    100: "cent",
}

function numberAsString(n: number) {
    if (n < 0) {
        throw "fdsa";
    }
    if (n <= 20) {
        return frenchNumbers[n];
    }
    if (n >= 20 && n < 70) {
        let firstPart = Math.floor(n / 10) * 10;
        let secondPart = n - firstPart; 
        let result = frenchNumbers[firstPart];
        if (secondPart == 0) {
            return result;
        } else if (secondPart == 1) {
            return result + "-et-un";
        } else {
            return result + "-" + frenchNumbers[secondPart];
        }
    }
    if (n >= 70 && n <= 100) {
        return frenchNumbers[n];
    }
    if (n > 100 && n < 1000) {
        let firstPart = Math.floor(n / 100);
        let secondPart = "cent";
        let thirdPart = n - Math.floor(n / 100) * 100;
        let result  = "";
        if (firstPart > 1) {
            result = frenchNumbers[firstPart] + "-";
        }
        result = result + "cent"; 

        if (thirdPart == 0) {
            result = result + "s";
        } else {
            result = result + "-" + numberAsString(thirdPart); 
        }
        return result;
    }
    return "unknown";
}

/*
for (let i = 900; i < 1000; i++) {
    console.log(numberAsString(i));
}
*/
