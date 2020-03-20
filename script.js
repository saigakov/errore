let json = '{"id":2}'

//try {
    //console.log('Normal') //Если ошибок нет, выводится это сообщение
//} catch {
    //console.log('error') //Если ошибоки есть, выводится это сообщение
//}

try {
    //console.log('Начинаем работу');
    //console.log(a);
    //console.log('Результат')
    let user = JSON.parse(json) //Вместо data должен стоять json, тогда не бедет ошибки
    console.log(user)
    if(!user.name) {
        throw new Error("В этих данных нет имени!")
    }
} catch(error) {
    console.log(error.name);
    console.log(error.massage);
    console.log(error.stack);

    console.log(`Мы получили ошибку: ${error.name}`)


} finally {
    console.log('А я выполнюсь всегда!')
}

console.log('А я буду работать дальше')