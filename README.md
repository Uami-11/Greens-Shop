# fantasy-e-commerce
Final project for Fundamentals of Web Development Module. Building an e-commerce platform for fantasy items you would find in a TTRPG using html, css, and javascript.

## Pages

### Main Products

Here I use the [D&D 5th Edition API](https://www.dnd5eapi.co/) to fetch the name of the items, and I use some pricing functions and my assets folder to display the images and the price (in gold) for the items
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/754ac28c-e4db-4c61-a843-1a67b03c1b31" />

### Product Details

With the [API](https://www.dnd5eapi.co/) I can display the description of the item. But here I have the option to add an item to the user's cart and/or wishlist and the specific quantity of the item they want
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/d4d52142-8613-46a5-b0ee-b52f06e2a90a" />

### Wishlist

In the wishlist the user can choose to select specific items to add to their cart or remove it from their wishlist entirely
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/dcb79780-2404-4e82-b713-c3d0b29a1fb9" />

### Cart

The cart shows which items and how much they total up to. In my project I just have a small simulation of checking out the products. Both the wishlist and cart use LocaleStorage to make data persistent.
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/42bc48f4-8742-4dbe-97d0-519a5d85acbb" />

## Other things

### Search Function

In the products page the user can search for a specific item, or toggle criteria to look at specific items. I thought this would be a little difficult but using array functions in javascript makes this very simple.

### Keyboard Shortcuts

I have some keyboard shortcuts to access the different pages. And to have some quality of life while cruising through the website. Like entering the search bar or entering the advanced search
<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/a37f133b-a23a-45f4-9d19-a4fba3709940" />
