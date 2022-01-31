/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("const pres = [\"George Washington\", \"John Adams\", \"Thomas Jefferson\", \"James Madison\", \"James Monroe\", \"John Quincy Adams\", \"Andrew Jackson\", \"Martin Van Buren\", \"William Henry Harrison\", \"John Tyler\", \"James Polk\", \"Zachary Taylor\", \"Millard Fillmore\", \"Franklin Pierce\", \"James Buchanan\", \"Abraham Lincoln\", \"Andrew Johnson\", \"Ulysses Grant\", \"Rutherford Hayes\", \"James Garfield\", \"Chester Arthur\", \"Grover Celveland\", \"Benjamin Harrison\", \"William McKinley\", \"Theordore Roosevelt\", \"William Taft\", \"Woodrow Wilson\", \"Warren Harding\", \"Calvin Coolidge\", \"Herbert Hoover\", \"Franklin Roosevelt\", \"Harry Truman\", \"Dwight Eisenhower\", \"John Kennedy\", \"Lyndon Johnson\", \"Richard Nixon\", \"Gerald Ford\", \"Jimmy Carter\", \"Ronald Reagan\", \"George H. W. Bush\", \"Bill Clinton\", \"George W. Bush\", \"Barrack Obama\", \"Donald Trump\", \"Joe Biden\"]\n\n(function(){\n    const presidentImage = document.querySelector('#president-img')\n    const presidentName = document.querySelector('#president-name')\n    const presidentText = document.querySelector('#president-text')\n    const buttons = document.querySelectorAll('.btn')\n    let index = 0\n    const presidents = []\n\n    function President(img, name, text) {\n        this.img = img\n        this.name = name\n        this.text = text\n    }\n\n\n    function createPresident(img, name, text) {\n\n        let fullImg = `./presidents/president-${img}.jpg`\n        let president = new President(fullImg, name, text)\n\n        presidents.push(president)\n    }\n\n    \n    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')\n    createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')\n    createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\\'t look even slightly believable.')\n    createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\\'t anything embarrassing hidden in the middle of text.')\n    createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')\n    \n\n    buttons.forEach(function(button){\n        button.addEventListener('click', function(e){\n            if (e.target.parentElement.classList.contains('prevBtn')){\n               if(index === 0){\n                    index = customers.length\n               }\n               index--\n               customerImage.src = customers[index].img\n               customerName.textContent = customers[index].name\n               customerText.textContent = customers[index].text\n            }\n            if (e.target.parentElement.classList.contains('nextBtn')){\n                index++\n                if(index === customers.length){\n                     index = 0\n                }\n                customerImage.src = customers[index].img\n                customerName.textContent = customers[index].name\n                customerText.textContent = customers[index].text\n             }\n        })\n    })\n    \n})()\n\n//# sourceURL=webpack://JavaScriptProject/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;