        function generateRandomNumber() {
            return Math.ceil(Math.random() * 20);
        }

        const num1 = generateRandomNumber();
        const num2 = generateRandomNumber();
        const num3 = generateRandomNumber();

        const flavors = ['Matcha', 'Red Velvet', 'Chocolate Chips'];
        const sales = [num1, num2, num3];

        const flavorBoxes = flavors.map((flavor, index) => `<div class="flavor-box">${flavor}: ${sales[index]}</div>`).join('');

        const biggestSale = Math.max(num1, num2, num3);
        const bestFlavor = flavors[sales.indexOf(biggestSale)];
        const nthLetter = String.fromCharCode(96 + num1);
        const totalMinutes = num2 * num3;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        document.getElementById('flavors').innerHTML = flavorBoxes;
        document.getElementById('result').innerHTML = 
            `For a cookie-selling contest, each student that will participate must bake at least one batch of one of the following cookies: matcha, red velvet, and chocolate chips. They are given one day to sell each cookie and give a sales report to the judges. It was to determine which flavor people liked the most. <br>`+`<br>`+
            `The flavor that sold the most cookies is: ${bestFlavor} (${biggestSale}).<br>` +
            `The starting letter of the baker that sold ${bestFlavor} cookies the most: ${nthLetter}.<br>` +
            `Time taken to bake a whole batch: ${hours} hr ${minutes} min.`;
