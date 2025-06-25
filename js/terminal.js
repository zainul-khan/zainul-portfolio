const modal = document.getElementById('terminal-modal');
const terminal = document.getElementById('terminal');
const history = [];
let historyIndex = -1;

// Simple command list
const commands = {
    help: 'Commands:<br>- whoami<br>- skills<br>- about<br>- contact<br>- clear<br>- exit',
    whoami: 'I am Md Zain Ul Khan, a full stack software development engineer 2 at Hackerkernel.',
    about: 'This is my portfolio that highlights about my profession.',
    skills: 'HTML, CSS, JavaScript, React, Node.js, Git, REST APIs, Postgress, Mongodb, MySql, Jenkins, Python, Fastapi, AWS, DigitalOcean',
    clear: 'CLEAR',
    exit: 'EXIT',
    contact: `Contact Information:<br>Email: kzainul22@gmail.com <br> LinkedIn: <a style="color: #c9d1d9" href="https://www.linkedin.com/in/zainul-khan-775b29219/" target="_blank">https://www.linkedin.com/in/zainul-khan-775b29219/</a> <br> GitHub: <a style="color: #c9d1d9" href="https://github.com/zainul-khan/" target="_blank">https://github.com/zainul-khan/</a> `
};

// Open the terminal modal
function openTerminalModal() {
    modal.style.display = 'flex';
    addInput();
}

// Add a new input line
function addInput() {
    const line = document.createElement('div');
    line.className = 'terminal-line';

    const prompt = document.createElement('span');
    prompt.className = 'gray';
    prompt.textContent = '> ';

    const input = document.createElement('input');
    input.className = 'terminal-input';
    input.type = 'text';
    input.autocomplete = 'off';

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const cmd = input.value.trim();
            if (!cmd) return;

            history.push(cmd);
            historyIndex = history.length;
            input.disabled = true;
            runCommand(cmd);
            addInput();
        }

        if (e.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                input.value = history[historyIndex];
            }
        }

        if (e.key === 'ArrowDown') {
            if (historyIndex < history.length - 1) {
                historyIndex++;
                input.value = history[historyIndex];
            } else {
                input.value = '';
            }
        }
    });

    line.appendChild(prompt);
    line.appendChild(input);
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
    input.focus();
}

// Handle commands
function runCommand(cmd) {
    if (commands[cmd]) {
        if (commands[cmd] === 'CLEAR') {
            terminal.innerHTML = '';
            return;
        } else if (commands[cmd] === 'EXIT') {
            modal.style.display = 'none';
            return
        }

        printResponse(commands[cmd]);
    } else {
        printResponse(`'${cmd}' is not a valid command. Type 'help' to see available commands.`);
    }
}

// Display response
function printResponse(text) {
    const line = document.createElement('div');
    line.className = 'terminal-line gray';
    line.innerHTML = text;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
}