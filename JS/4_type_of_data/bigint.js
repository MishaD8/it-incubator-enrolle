// bigint

/*
В JavaScript тип данных 'number' не может содержать числа больше, чем 9007199254740991,
или меньше, чем  -9007199254740991. Техническое ограничение. Для большинства случаев этого 
достаточно. За исключением с криптографией или выводом метки time steps в микро сикундах. 
*/

//bigint
const bigInteger = 12345678901234567890123456789n;
console.log(typeof bigInteger);

