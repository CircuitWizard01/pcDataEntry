function loadApp() {
    const app = document.getElementById("app") || (() => {
        const div = document.createElement("div");
        div.id = "app";
        document.body.appendChild(div);
        return div;
    })();

    function createHeader() {
        const header = document.createElement("header");
        header.style.display = "flex";
        header.style.justifyContent = "space-between";
        header.style.alignItems = "center";
        header.style.padding = "10px 20px";
        header.style.borderBottom = "2px solid #ddd";
        header.style.backgroundColor = "#f8f9fa";
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.zIndex = "1000";

        const profileIcon = document.createElement("div");
        profileIcon.innerHTML = "👤";
        profileIcon.style.fontSize = "24px";
        profileIcon.style.cursor = "pointer";

        const title = document.createElement("h1");
        title.textContent = "Data Entry";
        title.style.margin = "0 auto";
        title.style.fontSize = "24px";
        title.style.fontWeight = "600";

        header.appendChild(title);
        header.appendChild(profileIcon);
        app.appendChild(header);
    }

    function createMainContent() {
        const mainContainer = document.createElement("div");
        mainContainer.style.display = "grid";
        mainContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
        mainContainer.style.gap = "20px";
        mainContainer.style.padding = "20px";
        mainContainer.style.maxWidth = "1000px";
        mainContainer.style.margin = "0 auto";

        const cardTitles = [
            "Sales Tracker",
            "Calculator",
            "Notetaking",
            "Helpful Links",
            "Currency Converter",
            "Saved Data"
        ];

        cardTitles.forEach((title) => {
            const card = createCard(title);
            mainContainer.appendChild(card);
        });

        app.appendChild(mainContainer);
    }

    function createCard(title) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.border = "1px solid #ddd";
        card.style.borderRadius = "12px";
        card.style.padding = "20px";
        card.style.backgroundColor = "#fff";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        card.style.textAlign = "center";
        card.style.minHeight = "300px";
        card.style.maxWidth = "300px";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.justifyContent = "space-between";
        card.style.transition = "transform 0.2s";

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = title;
        cardTitle.style.fontSize = "18px";
        cardTitle.style.marginBottom = "10px";

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        
        if (title === "Sales Tracker") {
            addSalesTrackerFunctionality(cardContent);
        } else if (title === "Calculator") {
            addCalculatorFunctionality(cardContent);
        } else if (title === "Currency Converter") {
            addCurrencyConverterFunctionality(cardContent);
        } else if (title === "Notetaking") {
            addNotetakingFunctionality(cardContent);
        } else if (title === "Saved Data") {
            addSavedDataFunctionality(cardContent);
        } else if (title === "Helpful Links") {
            adddHelpfulLinksFunctionality(cardContent);
        }

        card.appendChild(cardTitle);
        card.appendChild(cardContent);
        return card;
    }
    
    function addSalesTrackerFunctionality(container) { 
        const tableContainer = document.createElement("div");
        tableContainer.style.overflowY = "auto";
        tableContainer.style.maxHeight = "200px";
        tableContainer.style.border = "1px solid #ddd";
        tableContainer.style.padding = "10px";
        tableContainer.style.width = "100%";
        tableContainer.style.boxSizing = "border-box";
        tableContainer.style.display = "flex";
        tableContainer.style.flexDirection = "column";
        tableContainer.style.alignItems = "center";

        const table = document.createElement("table");
        table.style.width = "100%";
        table.style.borderCollapse = "collapse";
        table.style.textAlign = "center";

        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        ["Date", "B#", "Amount", "File"].forEach(text => {
            const th = document.createElement("th");
            th.textContent = text;
            th.style.border = "1px solid #ddd";
            th.style.padding = "2px";
            th.style.backgroundColor = "#f0f0f0";
            th.style.width = "25%";
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        

        const tbody = document.createElement("tbody");
        table.appendChild(tbody);
        tableContainer.appendChild(table);
        container.appendChild(tableContainer);

        const inputRow = document.createElement("div");
        inputRow.style.display = "flex";
        inputRow.style.gap = "5px";
        inputRow.style.width = "100%";
        inputRow.style.justifyContent = "center";
        inputRow.style.marginTop = "5px";

        ["date", "text", "number", "text"].forEach(type => {
            const input = document.createElement("input");
            input.type = type;
            input.style.width = "22%";
            input.style.padding = "5px";
            input.style.border = "1px solid #ccc";
            input.style.textAlign = "center";
            inputRow.appendChild(input);
        });

        const addRowButton = document.createElement("button");
        addRowButton.textContent = "Add Row";
        addRowButton.style.marginTop = "5px";
        addRowButton.style.padding = "5px 10px";
        addRowButton.style.backgroundColor = "#007BFF";
        addRowButton.style.color = "#fff";
        addRowButton.style.border = "none";
        addRowButton.style.borderRadius = "3px";
        addRowButton.style.cursor = "pointer";

        addRowButton.addEventListener("click", () => {
            const newRow = document.createElement("tr");
            inputRow.querySelectorAll("input").forEach(input => {
                const td = document.createElement("td");
                td.textContent = input.value;
                td.style.border = "1px solid #ddd";
                td.style.padding = "5px";
                newRow.appendChild(td);
                input.value = "";
            });
            tbody.appendChild(newRow);
        });

        const clearButton = document.createElement("button");
        clearButton.textContent = "End of Month";
        clearButton.style.marginTop = "5px";
        clearButton.style.marginLeft = "5px";
        clearButton.style.padding = "5px 10px";
        clearButton.style.backgroundColor = "#DC3545";
        clearButton.style.color = "#fff";
        clearButton.style.border = "none";
        clearButton.style.borderRadius = "3px";
        clearButton.style.cursor = "pointer";

        clearButton.addEventListener("click", () => {
            tbody.innerHTML = "";
        });

        container.appendChild(inputRow);
        container.appendChild(addRowButton);
        container.appendChild(clearButton);
    }

    function addCalculatorFunctionality(container) {
        const calculatorWrapper = document.createElement("div");
        calculatorWrapper.style.display = "flex";
        calculatorWrapper.style.flexDirection = "column";
        calculatorWrapper.style.alignItems = "center";
        calculatorWrapper.style.gap = "10px";
        calculatorWrapper.style.width = "100%";

        const num1Input = document.createElement("input");
        num1Input.type = "number";
        num1Input.placeholder = "Enter first number";
        num1Input.style.width = "45%";
        num1Input.style.padding = "8px";
        num1Input.style.border = "1px solid #ccc";
        num1Input.style.borderRadius = "5px";

        const operatorSelect = document.createElement("select");
        ["+", "-", "×", "÷"].forEach(op => {
            const option = document.createElement("option");
            option.value = op;
            option.textContent = op;
            operatorSelect.appendChild(option);
        });
        operatorSelect.style.width = "20%";
        operatorSelect.style.padding = "8px";
        operatorSelect.style.margin = "5px";
        operatorSelect.style.border = "1px solid #ccc";
        operatorSelect.style.borderRadius = "5px";

        const num2Input = document.createElement("input");
        num2Input.type = "number";
        num2Input.placeholder = "Enter second number";
        num2Input.style.width = "90%";
        num2Input.style.padding = "8px";
        num2Input.style.border = "1px solid #ccc";
        num2Input.style.borderRadius = "5px";

        const calculateButton = document.createElement("button");
        calculateButton.textContent = "Calculate";
        calculateButton.style.marginTop = "10px";
        calculateButton.style.padding = "8px 16px";
        calculateButton.style.backgroundColor = "#007BFF";
        calculateButton.style.color = "#fff";
        calculateButton.style.border = "none";
        calculateButton.style.borderRadius = "5px";
        calculateButton.style.cursor = "pointer";

        const resultDisplay = document.createElement("p");
        resultDisplay.textContent = "Result will appear here";
        resultDisplay.style.height = "40px";

        calculateButton.addEventListener("click", () => {
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);
            const operator = operatorSelect.value;
            
            if (isNaN(num1) || isNaN(num2)) {
                resultDisplay.textContent = "Please Enter valid numbers";
                return; 
            }

            let result; 
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break; 
                case "-":
                    result = num1 - num2;
                    break;
                case "×":
                    result = num1 * num2;
                    break;
                case "÷":
                    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
                    break;
            }

            resultDisplay.textContent = `Result: ${result}`;
        });

        container.appendChild(num1Input);
        container.appendChild(operatorSelect);
        container.appendChild(num2Input);
        container.appendChild(calculateButton);
        container.appendChild(resultDisplay);
    }

    async function fetchUSDtoCAD() {
        const apiKey = "1872ccb57471815c609d5521"; 
        const url = "https://v6.exchangerate-api.com/v6/1872ccb57471815c609d5521/latest/USD";

        try { 
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }); 

            if (!response.ok) {
                throw new Error('HTTP error! status: ${response.status}');
            }

            const data = await response.json();
            return data.conversion_rates.CAD;
        } catch (error) {
            console.error("Error fetching exchange rate:", error);
            return null;
        }

    }

    function addCurrencyConverterFunctionality(container) {
        const usdInput = document.createElement("input");
        usdInput.type = "number";
        usdInput.placeholder = "Enter USD"; 
        usdInput.style.width = "80%";
        usdInput.style.padding = "8px";
        usdInput.style.border = "1px solid #ccc";
        usdInput.style.borderRadius = "5px";

        const resultDisplay = document.createElement("p");
        resultDisplay.textContent = "Converted amount will appear here";
        resultDisplay.style.height = "60px";

        const convertButton = document.createElement("button");
        convertButton.textContent = "Convert to CAD";
        convertButton.style.marginTop = "15px";
        convertButton.style.padding = "8px 16px";
        convertButton.style.backgroundColor = "#007BFF";
        convertButton.style.color = "#fff";
        convertButton.style.border = "none";
        convertButton.style.borderRadius = "5px";
        convertButton.style.cursor = "pointer";


        convertButton.addEventListener("click", async () => {
            const usdAmount = parseFloat(usdInput.value);
            if (isNaN(usdAmount) || usdAmount <= 0) {
                resultDisplay.textContent = "Enter a valid amount";
                return;
            }

            const exchangeRate = await fetchUSDtoCAD();
            if (exchangeRate) {
                const convertedAmount = (usdAmount * exchangeRate).toFixed(2);
                resultDisplay.textContent = `USD ${usdAmount} = CAD ${convertedAmount}`;
            } else {
                resultDisplay.textContent = "Failed to fetch exchange rate";
            }
        });
    

        container.appendChild(usdInput);
        container.appendChild(convertButton); 
        container.appendChild(resultDisplay);
    }

    


    function addNotetakingFunctionality(container) {
        const textarea = document.createElement("textarea");
        textarea.style.width = "100%";
        textarea.style.height = "200px";
        textarea.style.padding = "1px";
        textarea.style.borderRadius = "8px";
        textarea.style.border = "1px solid #ccc";
        textarea.value = localStorage.getItem("notetaking") || "";
        textarea.addEventListener("input", () => {
            localStorage.setItem("notetaking", textarea.value);
        });

        const clearButton = document.createElement("button");
        clearButton.textContent = "Clear";
        clearButton.style.marginTop = "10px";
        clearButton.style.padding = "8px 16px";
        clearButton.style.border = "none";
        clearButton.style.backgroundColor = "#ff4d4d";
        clearButton.style.color = "#fff";
        clearButton.style.borderRadius = "8px";
        clearButton.style.cursor = "pointer";

        clearButton.addEventListener("click", () => {
            textarea.value = "";
            localStorage.removeItem("notetaking");
        });

        container.appendChild(textarea);
        container.appendChild(clearButton);
    }

    function addSavedDataFunctionality(container) {
        const textarea = document.createElement("textarea");
        textarea.style.width = "100%";
        textarea.style.height = "200px";
        textarea.style.padding = "1px";
        textarea.style.borderRadius = "8px";
        textarea.style.border = "1px solid #ccc";

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.style.marginTop = "10px";
        saveButton.style.padding = "8px 16px";
        saveButton.style.border = "none";
        saveButton.style.backgroundColor = "#4CAF50";
        saveButton.style.color = "#fff";
        saveButton.style.borderRadius = "8px";
        saveButton.style.cursor = "pointer";

        saveButton.addEventListener("click", () => {
            const data = textarea.value.trim();
            if (data) {
                const fileName = `log_${new Date().toISOString()}`;
                localStorage.setItem(fileName, data);
                textarea.value = "";
                showNotification(`Data saved as: ${fileName}`);
            }
        });

        container.appendChild(textarea);
        container.appendChild(saveButton);
    }
    
    function generateRandomFileName(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let fileName = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            fileName += characters[randomIndex];
        }
        return fileName;
    }

    function showNotification(message) {
        const notification = document.createElement("div");
        notification.textContent = message;
        notification.style.position = "fixed";
        notification.style.bottom = "20px";
        notification.style.right = "20px";
        notification.style.padding = "10px 20px";
        notification.style.backgroundColor = "#4CAF50";
        notification.style.color = "#fff";
        notification.style.borderRadius = "8px";
        notification.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        notification.style.zIndex = "1000";

        document.body.appendChild(notification);

        setTimeout(() => {
            document.body.removeChild(notification);
        }, 5000);
    }
    
    function createThemeToggleButton() {
        const button = document.createElement("button");
        button.textContent = "Dark Mode";
        button.style.position = "fixed";
        button.style.bottom = "20px";
        button.style.left = "20px";
        button.style.padding = "10px 20px";
        button.style.border = "none";
        button.style.borderRadius = "8px";
        button.style.backgroundColor = "#333";
        button.style.color = "#fff";
        button.style.cursor = "pointer";
        button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        button.style.zIndex = "1000";
        button.addEventListener("click", () => {
            toggleTheme(button);
        });

        document.body.appendChild(button);
    }

    function toggleTheme(button) {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        
        if (isDarkMode) {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "blue";
            button.textContent = "Light Mode";

            document.querySelectorAll("header").forEach(header => {
                header.style.backgroundColor = "#333";
                header.style.color = "blue";
                header.style.borderBottom = "2px solid blue";
            })

            document.querySelectorAll("textarea").forEach(textarea => {
                textarea.style.backgroundColor = "#222";
                textarea.style.color = "blue";
                textarea.style.border = "1px solid blue";
            });

            document.querySelectorAll(".card").forEach(card => {
                card.style.backgroundColor = "#333";
                card.style.color = "blue";
                card.style.border = "1px solid blue";
            });

            document.querySelectorAll("input").forEach(input => {
                input.style.backgroundColor = "#222";
                input.style.color = "blue";
                input.style.border = "1px solid blue";
            });
        } else {
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "black";
            button.textContent = "Dark Mode";

            document.querySelectorAll("header").forEach(header => {
                header.style.backgroundColor = "#f8f9fa";
                header.style.color = "black";
                header.style.borderBottom = "2px solid #ddd";
            })

            document.querySelectorAll("textarea").forEach(textarea => {
                textarea.style.backgroundColor = "#fff";
                textarea.style.color = "black";
                textarea.style.border = "1px solid #ccc";
            });

            document.querySelectorAll(".card").forEach(card => {
                card.style.backgroundColor = "#fff";
                card.style.color = "black";
                card.style.border = "1px solid #ddd";
            }); 

            document.querySelectorAll("input").forEach(input => {
                input.style.backgroundColor = "#fff";
                input.style.color = "black";
                input.style.border = "1px solid #ccc";
            });
        }
    }

    createHeader();
    createMainContent();
    createThemeToggleButton();

    function adddHelpfulLinksFunctionality(container) {
        const linksList = document.createElement("ul");
        linksList.style.listStyle = "none";
        linksList.style.padding = "0";
        linksList.style.height = "200px";
       
        const links = [
            { text: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
            { text: "W3Schools", url: "https://www.w3schools.com/" },
            { text: "Stack Overflow", url: "https://stackoverflow.com/" },
            { text: "GitHub", url: "github.com" },
        ]; 

        links.forEach(link => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.textContent = link.text;
            anchor.href = link.url;
            anchor.target = "_blank";
            anchor.style.color = "#007BFF";
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        container.appendChild(linksList);
    }
}

window.onload = loadApp;
