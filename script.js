document.addEventListener('DOMContentLoaded', () => {
    const commands = [
        'cat about.txt',
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
            case 'cat about.txt':
                response = 'This is a terminal-style webpage demonstration.';
                break;
            case 'ls -la':
                response = 'drwxr-xr-x 2 user user 4096 Apr 8 00:00 .\ndrwxr-xr-x 3 user user 4096 Apr 8 00:00 ..\n-rw-r--r-- 1 user user 1000 Apr 8 00:00 about.txt';
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
  