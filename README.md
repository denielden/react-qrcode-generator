# QR Code Generator component

![QRcode Generator](./screenshot.webp)

This app generates QR Code based on the url entered and gives the possibility to customize and download the generated QR Code. 

This is an advanced and complex solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

## Table of contents

- [Overview](#overview)
  - [About App](#about-app)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Getting Started](#getting-started)
  - [System Requirements](#system-requirements)
  - [Installation](#installation)
  - [Bugs](#bugs)
  - [Contributing](#contributing)
- [Author](#author)

## Overview

### About App

This app generates QR Code based on the url entered.

Features: 
- On load, it shows the default basic QR Code
- Added a form that allows the user to enter a website URL to generate a QR Code for it
- Dynamically update the QR Code as you type the URL
- Dynamically update the color and background of the QR Code based on the customization input entered by the user
- When the form is sent, the `.png` of the generated QR Code is downloaded 

### Links

- Repository URL: [github](https://github.com/denielden/react-qrcode-generator)
- Live Site URL: [live site](https://denielden.github.io/react-qrcode-generator)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [QRCode.react](https://www.npmjs.com/package/qrcode.react) - For QR Code
- [React Color](https://casesandberg.github.io/react-color/) - For Color Pickers

### What I learned

With this challenge I had the opportunity to learn and deepen:
- the use and manipulation of `QRCode.react`
- the correct use of `Refs` in react
- how the html `canvas` element works behind the scenes

I am eager to further evolve this project and learn much more!

### Continued development

Add new features:
- Insert custom image inside the QR Code
- Choose the format of the image to download 
- Connect with serverless database
- SignIn/Login
- Save the QR Code generated

### Useful resources

- [React Refs](https://it.reactjs.org/docs/refs-and-the-dom.html)
- [QRCode.react](https://www.npmjs.com/package/qrcode.react)
- [React Color](https://casesandberg.github.io/react-color/)

## Getting Started

In order to view this project locally, you need to make sure you clone this repository and install it's dependencies.

### System Requirements

- [git][https://git-scm.com/] 2.34 or greater
- [node][https://nodejs.org/en/] 17.5 or greater
- [npm][https://nodejs.org/en/] 8.3.0 or greater

To check which versions you have installed you can run these commands:
```
git --version
node --version
npm --version
```
If requirements above are not installed in your computer, you'll need to install them. By clicking on them you can go to their website, which can lead you the way.

### Installation

- Clone the repository
  ```sh
  git clone https://github.com/denielden/react-qrcode-generator.git
  ```
- Navigate to repository folder
  ```sh
  cd react-qrcode-generator
  ```
- Install npm packages
  ```sh
  npm install
  ```
- To run the app in the development mode run in the project directory: 
  ```sh
  npm start
  ```

### Bugs

Please feel free to create an issue if you see a bug or something unexpected in the app.

### Contributing

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/yourFeature`)
- Commit your Changes (`git commit -m 'Brief explanation of feature`')
- Push to the Branch (`git push origin feature/yourFeature`)
- Open a Pull Request

## Author

- Website - [denielden](https://denielden.github.io)
- Frontend Mentor - [@denielden](https://www.frontendmentor.io/profile/denielden)


Thank you for taking the time to check out my project!

## **Have fun building!** 🚀