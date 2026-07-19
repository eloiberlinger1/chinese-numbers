const chineseDigits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
const pinyinDigits = ["líng", "yī", "èr", "sān", "sì", "wǔ", "liù", "qī", "bā", "jiǔ"];

function underHundredAsChinese(n) {
    if (n < 10) {
        return chineseDigits[n];
    }

    const tens = Math.floor(n / 10);
    const ones = n % 10;

    if (tens === 1) {
        return ones === 0 ? "十" : "十" + chineseDigits[ones];
    }

    return ones === 0
        ? chineseDigits[tens] + "十"
        : chineseDigits[tens] + "十" + chineseDigits[ones];
}

function numberAsChinese(n) {
    if (!Number.isInteger(n) || n < 0 || n > 999) {
        throw new Error("numberAsChinese supports only integers from 0 to 999");
    }

    if (n < 100) {
        return underHundredAsChinese(n);
    }

    const hundreds = Math.floor(n / 100);
    const remainder = n % 100;
    const hundredPart = chineseDigits[hundreds] + "百";

    if (remainder === 0) {
        return hundredPart;
    }

    if (remainder < 10) {
        return hundredPart + "零" + chineseDigits[remainder];
    }

    return hundredPart + underHundredAsChinese(remainder);
}

function underHundredAsPinyin(n) {
    if (n < 10) {
        return pinyinDigits[n];
    }

    const tens = Math.floor(n / 10);
    const ones = n % 10;

    if (tens === 1) {
        return ones === 0 ? "shí" : "shí " + pinyinDigits[ones];
    }

    return ones === 0
        ? pinyinDigits[tens] + " shí"
        : pinyinDigits[tens] + " shí " + pinyinDigits[ones];
}

function numberAsPinyin(n) {
    if (!Number.isInteger(n) || n < 0 || n > 999) {
        throw new Error("numberAsPinyin supports only integers from 0 to 999");
    }

    if (n < 100) {
        return underHundredAsPinyin(n);
    }

    const hundreds = Math.floor(n / 100);
    const remainder = n % 100;
    const hundredPart = pinyinDigits[hundreds] + " bǎi";

    if (remainder === 0) {
        return hundredPart;
    }

    if (remainder < 10) {
        return hundredPart + " líng " + pinyinDigits[remainder];
    }

    return hundredPart + " " + underHundredAsPinyin(remainder);
}

window.numberAsChinese = numberAsChinese;
window.numberAsPinyin = numberAsPinyin;
