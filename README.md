Read in other language: [Українська](./README.ukr.md).

# Card for twit

This is the test task for Cracking JS module at GoIT school.

You can find live page [here](https://veronikanos.github.io/twit-card/).

According to the technical task, the following items were completed:

1. The user card was implemented according to the layout.
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

#### State is button is pressed once:

#### Written data at Local Storage:

Coded by Tlostiuk Veronika.
