/** ЗАДАЧА 8 - Присваивание функции переменной
 *
 * 1. Объявите переменную и присвойте ей функциональное выражение
 *
 * 2. У функции должен быть один параметр "name"
 *
 * 3. Верните из функции строку "Привет, <name>"
 *
 * 4. Вызовите функцию дважды с разными аргументами
 *
 * 5. Результат вызовов функции выведите в консоль
 */

const myFunction = function (name) {
    let c
    c = 'Привет, ' + name
    return c
}
myFunction('Misha')
myFunction('Diana')

console.log(myFunction('Misha'))
console.log(myFunction('Diana'))




/* 
const newPost = (post, addedAt = Date()) => ({
	...post,
	addedAt,
}) 

const firstPost = {
	id: 1,
	author: 'Misha',
}

newPost(firstPost)
const checkFunction = newPost(firstPost)
console.log(checkFunction) */