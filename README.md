# fantasy-e-commerce
Final project for Fundamentals of Web Development Module. Building an e-commerce platform for fantasy items you would find in a TTRPG using html, css, and javascript.

## Pages

### Main Products

Here I use the [D&D 5th Edition API](https://www.dnd5eapi.co/) to fetch the name of the items, and I use some pricing functions and my assets folder to display the images and the price (in gold) for the items

### Product Details

With the [API](https://www.dnd5eapi.co/) I can display the description of the item. But here I have the option to add an item to the user's cart and/or wishlist and the specific quantity of the item they want

### Wishlist

In the wishlist the user can choose to select specific items to add to their cart or remove it from their wishlist entirely

### Cart

The cart shows which items and how much they total up to. In my project I just have a small simulation of checking out the products. Both the wishlist and cart use LocaleStorage to make data persistent.

## Other things

### Search Function

In the products page the user can search for a specific item, or toggle criteria to look at specific items. I thought this would be a little difficult but using array functions in javascript makes this very simple.

### Keyboard Shortcuts

I have some keyboard shortcuts to access the different pages. And to have some quality of life while cruising through the website. Like entering the search bar or entering the advanced search
