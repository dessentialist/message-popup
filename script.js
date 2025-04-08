document.addEventListener('DOMContentLoaded', () => {
    const commands = [
        { cmd: 'pwd', delay: 500 },
        { cmd: 'cd .', delay: 500 },
        { cmd: 'ls', delay: 500 }
    ];
    
    let currentCommand = 0;
    const commandElement = document.querySelector('.command');
    const outputContainer = document.querySelector('.output-container');
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function typeCommand(text, element, speed = 50) {
        element.textContent = '';
        for (let i = 0; i < text.length; i++) {
            element.textContent = text.substring(0, i + 1);
            await sleep(speed);
        }
    }

    async function clearCommand(element, speed = 50) {
        const text = element.textContent;
        for (let i = text.length; i >= 0; i--) {
            element.textContent = text.substring(0, i);
            await sleep(speed);
        }
    }

    async function executeCommand(command) {
        let response = '';
        switch(command.cmd) {
            case 'pwd':
                response = 'Hello World! 👋';
                break;
            case 'cd .':
                response = 'My name is Darpan. Welcome!';
                break;
            case 'ls':
                response = `Nice to meet you 🥂`;
                break;
        }
        
        // Create and animate response element
        const responseElement = document.createElement('div');
        responseElement.className = 'response';
        responseElement.textContent = response;
        outputContainer.appendChild(responseElement);
        
        // Scroll to the bottom smoothly
        outputContainer.scrollTop = outputContainer.scrollHeight;
    }
    
    async function runCommands() {
        for (const command of commands) {
            // Type the command
            await sleep(command.delay);
            await typeCommand(command.cmd, commandElement);
            await sleep(600);
            
            // Execute and show response
            await executeCommand(command);
            await sleep(600);
            
            // Clear the command with backspace effect
            await clearCommand(commandElement);
        }
        
        // Leave the cursor blinking at the end
        commandElement.textContent = '';
    }
    
    // Start the command sequence once
    runCommands();
});
  