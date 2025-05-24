const display = document.getElementById("display");

        function append(value) {
            display.value += value;
        }

        function clearAll() {
            display.value = "";
        }

        function clearEntry() {
            display.value = display.value.slice(0, -1);
        }

        function toggleSign() {
            if (display.value) {
                if (display.value.startsWith('-')) {
                    display.value = display.value.slice(1);
                } else {
                    display.value = '-' + display.value;
                }
            }
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }

        // 🔑 Keyboard input support
        display.addEventListener("keydown", function(e) {
            const allowedKeys = "0123456789/*-+().";
            if (e.key === "Enter") {
                e.preventDefault();
                calculate();
            } else if (e.key === "Backspace") {
                // allow default
            } else if (!allowedKeys.includes(e.key)) {
                e.preventDefault();
            }
        });