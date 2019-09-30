function check(str, bracketsConfig) {
    const bracket = {};

    bracketsConfig.forEach(element => {
        bracket[element[1]] = element[0];
    });

    const stack = [];
    stack.push(str[0]);
    for (let index = 1; index < str.length; index++) {
        let openBracket = bracket[str[index]];

        if (
            openBracket !== undefined &&
            stack[stack.length - 1] === openBracket
        ) {
            stack.length = stack.length - 1;
        } else {
            stack.push(str[index]);
        }
    }
    return stack.length === 0;
}
module.exports = check;
