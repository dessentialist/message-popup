document.addEventListener('DOMContentLoaded', () => {
    const commands = [
        'pwd',
        'cd .',
        'status',
    ];
    
    let currentCommand = 0;
    const prompt = document.querySelector('.prompt');
    const output = document.querySelector('.output');
    
    function typeCommand() {
        if (currentCommand < commands.length) {
            const command = commands[currentCommand];
            let i = 0;
            
            const typeInterval = setInterval(() => {
                if (i < command.length) {
                    document.querySelector('.command').textContent = command.substring(0, i + 1);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        executeCommand(command);
                        currentCommand++;
                        setTimeout(typeCommand, 1000);
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
                response = 'Nice to meet you 🥂';
                break;
        }
        
        const newOutput = document.createElement('p');
        newOutput.textContent = response;
        output.appendChild(newOutput);
    }
    
    // Start the typing effect
    typeCommand();
});
  