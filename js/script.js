function getSeasonalVideo() {
    const month = new Date().getMonth() + 1; // Get current month (1-12)
    let videoSrc = "";

    if (month >= 3 && month <= 5) {
        videoSrc = "./assets/videos/summer.mp4"; // Desert video
    } else if (month >= 6 && month <= 9) {
        videoSrc = "./assets/videos/monsoon.mp4"; // Rain video
    } else {
        videoSrc = "./assets/videos/winter.mp4"; // Snow video
    }

    return videoSrc;
}

document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.getElementById("bgVideo");
    videoElement.src = getSeasonalVideo();
});


const skills = [
    {
        name: "Node JS", category: "Backend", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-server-cog-icon w-6 h-6">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path>
                <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path>
                <path d="M6 6h.01"></path>
                <path d="M6 18h.01"></path>
                <path d="m15.7 13.4-.9-.3"></path>
                <path d="m9.2 10.9-.9-.3"></path>
                <path d="m10.6 15.7.3-.9"></path>
                <path d="m13.6 15.7-.4-1"></path>
                <path d="m10.8 9.3-.4-1"></path>
                <path d="m8.3 13.6 1-.4"></path>
                <path d="m14.7 10.8 1-.4"></path>
                <path d="m13.4 8.3-.3.9"></path>
            </svg>` },
    {
        name: "Fast API", category: "Backend", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-server-cog-icon w-6 h-6">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path>
                <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path>
                <path d="M6 6h.01"></path>
                <path d="M6 18h.01"></path>
                <path d="m15.7 13.4-.9-.3"></path>
                <path d="m9.2 10.9-.9-.3"></path>
                <path d="m10.6 15.7.3-.9"></path>
                <path d="m13.6 15.7-.4-1"></path>
                <path d="m10.8 9.3-.4-1"></path>
                <path d="m8.3 13.6 1-.4"></path>
                <path d="m14.7 10.8 1-.4"></path>
                <path d="m13.4 8.3-.3.9"></path>
            </svg>` },
    { name: "React", category: "Frontend", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-icon w-6 h-6"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>' },
    { name: "Chakra UI", category: "Frontend", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-icon w-6 h-6"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>' },
    { name: "Html", category: "Frontend", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-icon w-6 h-6"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>' },
    { name: "Css", category: "Frontend", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-icon w-6 h-6"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>' },
    { name: "JavaScript", category: "Languages", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon w-6 h-6"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>` },
    { name: "Python", category: "Languages", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon w-6 h-6"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>` },
    { name: "MySql", category: "Database", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-icon w-6 h-6"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>` },
    { name: "MongoDB", category: "Database", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-icon w-6 h-6"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>` },
    { name: "PostgreSQL", category: "Database", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-icon w-6 h-6"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>` },
    { name: "Redis", category: "Database", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-icon w-6 h-6"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>` },
    { name: "Git", category: "Tools", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal-icon w-6 h-6"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>' },
    { name: "Docker", category: "Tools", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal-icon w-6 h-6"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>` },
    { name: "Jenkins", category: "Tools", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal-icon w-6 h-6"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>` },
    { name: "OpenAI", category: "Tools", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal-icon w-6 h-6"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>` },
    { name: "Claude AI", category: "Tools", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal-icon w-6 h-6"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>` },
    {
        name: "AWS", category: "Cloud", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud"> <path d="M17.5 19a4.5 4.5 0 0 0 0-9h-.8A6 6 0 1 0 6 16" /></svg>`
    },
    {
        name: "DigitalOcean", category: "Cloud", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud"> <path d="M17.5 19a4.5 4.5 0 0 0 0-9h-.8A6 6 0 1 0 6 16" /></svg>`
    },
    {
        name: "Firebase", category: "Cloud", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud"> <path d="M17.5 19a4.5 4.5 0 0 0 0-9h-.8A6 6 0 1 0 6 16" /></svg>`
    },
];

const tabButtons = document.querySelectorAll('.tab-btn');
const contentContainer = document.getElementById('tab-content-container');

function createSkillHTML(skill) {
    return `
        <div class="tab-info">
            <span>${skill.name}</span>
            ${skill.icon}
        </div>`;
}

function renderTabContent(tab) {
    contentContainer.innerHTML = ""; // Clear old content
    const filteredSkills = tab === "All"
        ? skills
        : skills.filter(skill => skill.category === tab);

    const html = filteredSkills.map(createSkillHTML).join('');
    contentContainer.innerHTML = `<div class="tab-content active">${html}</div>`;
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const tab = button.getAttribute('data-tab');
        renderTabContent(tab);
    });
});

// Initialize with 'All'
document.querySelector('.tab-btn[data-tab="All"]').click();