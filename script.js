document.addEventListener('DOMContentLoaded', () => {
    const commands = [
        'pwd',
        'cd .',
        'status',
    ];
    
    let currentCommand = 0;
    const output = document.querySelector('.output');
    const commandElement = document.querySelector('.command');
    
    function typeCommand() {
        if (currentCommand < commands.length) {
            const command = commands[currentCommand];
            let i = 0;
            
            const typeInterval = setInterval(() => {
                if (i < command.length) {
                    commandElement.textContent = command.substring(0, i + 1);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        executeCommand(command);
                        currentCommand++;
                        if (currentCommand < commands.length) {
                            setTimeout(typeCommand, 1000);
                        }
                    }, 500);
                }
            }, 100);
        }
    }
    
    function executeCommand(command) {
        let response = '';
        switch(command) {
            case 'pwd':
                response = 'Hello World! 👋';
                break;
            case 'cd .':
                response = 'My name is Darpan. Welcome!';
                break;
            case 'status':
                response = 'Nice to meet you 🥂! 🚀';
                break;
        }
        
        // Clear the current command
        commandElement.textContent = '';
        
        // Create response element
        const responseElement = document.createElement('div');
        responseElement.className = 'command-response';
        responseElement.textContent = response;
        output.appendChild(responseElement);
        
        // Add new prompt
        const newPrompt = document.createElement('div');
        newPrompt.className = 'prompt';
        newPrompt.innerHTML = '<span class="user">home:$</span><span class="command"></span><span class="cursor">|</span>';
        output.appendChild(newPrompt);
    }
    
    // Start the typing effect
    typeCommand();
});
  