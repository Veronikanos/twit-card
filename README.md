Read in other language: [Українська](./README.ukr.md).

# Card for twit

This is the test task for Cracking JS module at GoIT school.

You can find live page [here](https://veronikanos.github.io/twit-card/).

According to the technical task, the following items were completed:

1. The user card was implemented according to the
   [layout](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1).
2. When clicking on the Follow button, its text changes to Following. The color
   of the button also changes. The number of followers increases by 1 - yours.
3. When the page is refreshed, the final result of the user's actions is fixed.
   This function is implemented by writing and reading to/from the browser's
   local storage.
4. When the button is clicked again, the text, color of the button and number of
   followers change to the initial state.
5. In the code, the number 100,500 is written with one value (100500). In the
   UI, it is displayed with a comma (100,500).

To perform this task, I used the constructor of the Intl.NumberFormat object in
the US English locale. If the initial value of followers is greater than a
6-digit number, commas will be inserted correctly.

### The project is written using hooks in the React library. Styling is done by CSS modules

#### Initial visual of card:

![Screenshot_13](https://user-images.githubusercontent.com/49239848/209576555-5d63ba20-24d7-4cbb-a5b7-53fdaaef72f9.png)

#### State is button is pressed once:

![Screenshot_15](https://user-images.githubusercontent.com/49239848/209576466-3966b2ba-3bf2-4d2f-a6da-ac221b490631.png)

#### Written data at Local Storage:

![Screenshot_16](https://user-images.githubusercontent.com/49239848/209576472-5060953e-8c39-415e-817b-a90fd1431175.png)

Coded by Tlostiuk Veronika.
