const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'projects');
const projects = fs.readdirSync(projectsDir)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const content = fs.readFileSync(path.join(projectsDir, file), 'utf8');
    // Simple parsing by splitting lines (more reliable than regex)
    const lines = content.split('\n');
    let title = 'Unknown';
    let type = '';

    for (const line of lines) {
      if (line.includes('**Project Title:**')) {
        title = line.split('**Project Title:**')[1].trim() || 'Unknown';
      }
      if (line.includes('**Type:**')) {
        type = line.split('**Type:**')[1].trim() || '';
      }
    }

    return { title, type /* add other fields */ };
  })
  .sort((a, b) => a.title.localeCompare(b.title));  // Sort alphabetically

// Generate GitHub README section
const readmeSection = projects.map(p => `
### ${p.title} (${p.type})
[GitLab Repo](link-to-gitlab) | [Live Site](link-to-site)
<!-- Add parsed description, etc. -->
`).join('\n');

// Generate JSON for portfolio (if site uses data files)
const portfolioJson = JSON.stringify(projects, null, 2);

// Output to stdout or files
if (process.argv[2] === 'readme') {
  console.log(readmeSection);
} else if (process.argv[2] === 'portfolio') {
  fs.writeFileSync('projects.json', portfolioJson);
}