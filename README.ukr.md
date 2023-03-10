Читати іншою мовою: [English](./README.md).

# Картка для твіту

Це тестове завдання для модуля Cracking JS у рамках навчання у школі GoITю

Жива сторінка [тут](https://veronikanos.github.io/twit-card/).

Згідно з технічним завданням виконано такі пункти:

1. Реалізовано картку юзера відповідно до [макету](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1).
2. При клікові на кнопку Follow - її текст змінюється на Following. Також
   змінюється колір кнопки. Кількість фоловерів збільшується на 1 - ваш.
3. При оновлені сторінки фіксується кінцевий результат дій юзера. Ця функція
   реалізована за допомогою запису та читання в\з локальне сховище браузера.
4. При повторному клікові на кнопку текст, колір кнопки та кількість фоловерів
   змінюються до початкового стану.
5. В коді цифра 100,500 прописана одним значенням (100500). В UI - виведено
   через кому (100,500). Для виконання цього завдання використано конструктор
   об'єкту Intl.NumberFormat в локалі US English. Якщо початкове значення
   фолловерів більша, ніж 6 значне число, коми будуть проставлятись коректно.

### Проект написаний з використанням хуків на бібліотеці React. Стилізація виконана за допомогою CSS модулів.

#### Початковий вигляд картки:

![Screenshot_13](https://user-images.githubusercontent.com/49239848/209576555-5d63ba20-24d7-4cbb-a5b7-53fdaaef72f9.png)

#### Вигляд після натиснутої кнопки один раз:

![Screenshot_15](https://user-images.githubusercontent.com/49239848/209576466-3966b2ba-3bf2-4d2f-a6da-ac221b490631.png)

#### Дані записуються в локальне сховище:

![Screenshot_16](https://user-images.githubusercontent.com/49239848/209576472-5060953e-8c39-415e-817b-a90fd1431175.png)

Виконала роботу: Вероніка Тлостюк
