document.addEventListener('DOMContentLoaded', () => {
    const commands = [
        'intro.txt',
        'name.txt',
        'ls -la',
        'whoami',
        'pwd'
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
            case 'intro.txt':
                response = 'Hello World! 👋';
                break;
            case 'name.txt':
                response = 'My name is Darpan. Welcome!';
                break;
            case 'ls -la':
                response = 'Nice to meet you 🥂';
                break;
            case 'whoami':
                response = 'user';
                break;
            case 'pwd':
                response = '/home/user';
                break;
        }
        
        const newOutput = document.createElement('p');
        newOutput.textContent = response;
        output.appendChild(newOutput);
    }
    
    // Start the typing effect
    typeCommand();
});
  