const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, 'projects');

// Helper function to extract content between sections
function extractSection(content, sectionName) {
  const lines = content.split('\n');
  let inSection = false;
  let sectionContent = [];

  for (const line of lines) {
    if (line.includes(`**${sectionName}:**`)) {
      inSection = true;
      const afterColon = line.split(`**${sectionName}:**`)[1]?.trim();
      if (afterColon) {
        sectionContent.push(afterColon);
      }
      continue;
    }

    if (inSection && line.startsWith('**') && !line.includes(`**${sectionName}:**`)) {
      break;
    }

    if (inSection && line.trim()) {
      sectionContent.push(line.trim());
    }
  }

  return sectionContent.join('\n').trim();
}

// Helper function to extract links
function extractLinks(content) {
  const gitLabMatch = content.match(/\[GitLab\]\((https:\/\/gitlab\.com\/[^)]+)\)/);
  const netlifyMatch = content.match(/\[Netlify\]\((https:\/\/[^)]+)\)/);
  const youTubeMatch = content.match(/\[YouTube\]\((https:\/\/[^)]+)\)/);

  return {
    gitRepoUrl: gitLabMatch ? gitLabMatch[1] : '',
    liveSiteUrl: netlifyMatch ? netlifyMatch[1] : youTubeMatch ? youTubeMatch[1] : ''
  };
}

// Helper function to extract tags
function extractTags(content) {
  const tagsSection = extractSection(content, 'Tags');
  if (!tagsSection) return [];

  return tagsSection
    .split('\n')
    .filter(line => line.startsWith('-'))
    .map(line => line.replace(/^-\s*/, '').trim())
    .filter(tag => tag.length > 0);
}

// Helper function to generate category from type and tags
function generateCategory(type, tags) {
  const typeLower = type.toLowerCase();
  const tagString = tags.join(' ').toLowerCase();

  if (tagString.includes('terminal') || tagString.includes('cli') || tagString.includes('python') || tagString.includes('bash')) {
    return 'Terminal';
  }
  if (tagString.includes('powershell') || tagString.includes('scripting') || tagString.includes('automation')) {
    return 'Scripting';
  }
  if (tagString.includes('react') || tagString.includes('vue') || tagString.includes('angular') || tagString.includes('nextjs') || tagString.includes('frontend')) {
    return 'Frontend';
  }
  if (tagString.includes('node') || tagString.includes('backend') || tagString.includes('api') || tagString.includes('express')) {
    return 'Backend';
  }
  if (tagString.includes('mobile') || tagString.includes('android') || tagString.includes('ios')) {
    return 'Mobile';
  }

  // Fallback based on type
  if (typeLower.includes('professional')) return 'Frontend';
  if (typeLower.includes('personal')) return 'Frontend';
  if (typeLower.includes('open-source')) return 'Terminal';

  return 'Frontend'; // Default fallback
}

// Helper function to generate icons from tags
function generateIcons(tags) {
  const iconMap = {
    'python': 'simple-icons:python',
    'react': 'simple-icons:react',
    'vue': 'simple-icons:vuedotjs',
    'angular': 'simple-icons:angular',
    'nextjs': 'simple-icons:nextdotjs',
    'nodejs': 'simple-icons:nodedotjs',
    'typescript': 'simple-icons:typescript',
    'javascript': 'simple-icons:javascript',
    'powershell': 'simple-icons:powershell',
    'docker': 'simple-icons:docker',
    'gitlab': 'simple-icons:gitlab',
    'github': 'simple-icons:github',
    'netlify': 'simple-icons:netlify',
    'postgresql': 'simple-icons:postgresql',
    'mongodb': 'simple-icons:mongodb',
    'redis': 'simple-icons:redis',
    'aws': 'simple-icons:amazonaws',
    'azure': 'simple-icons:microsoftazure',
    'google': 'simple-icons:google',
    'css': 'simple-icons:css3',
    'html': 'simple-icons:html5',
    'sass': 'simple-icons:sass',
    'tailwind': 'simple-icons:tailwindcss',
    'bootstrap': 'simple-icons:bootstrap',
    'vite': 'simple-icons:vite',
    'jest': 'simple-icons:jest',
    'vitest': 'simple-icons:vitest',
    'express': 'simple-icons:express',
    'flask': 'simple-icons:flask',
    'sqlite': 'simple-icons:sqlite',
    'prisma': 'simple-icons:prisma',
    'mongoose': 'simple-icons:mongodb'
  };

  const icons = [];
  for (const tag of tags) {
    const tagLower = tag.toLowerCase();
    for (const [key, icon] of Object.entries(iconMap)) {
      if (tagLower.includes(key)) {
        icons.push(icon);
        break;
      }
    }
  }

  // Remove duplicates and limit to 5 icons
  return [...new Set(icons)].slice(0, 5);
}

// Helper function to generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

let projectId = 1;

const projects = fs.readdirSync(projectsDir)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const content = fs.readFileSync(path.join(projectsDir, file), 'utf8');

    // Extract all sections
    const title = extractSection(content, 'Project Title') || 'Unknown';
    const type = extractSection(content, 'Type') || '';
    const description = extractSection(content, 'Short Description') || '';
    const fullContent = content; // Store the entire content

    // Extract links
    const links = extractLinks(content);

    // Extract tags
    const tags = extractTags(content);

    // Generate derived fields
    const category = generateCategory(type, tags);
    const icons = generateIcons(tags);
    const slug = generateSlug(title);

    return {
      id: projectId++,
      slug,
      title,
      category,
      description,
      icons,
      gitRepoUrl: links.gitRepoUrl,
      liveSiteUrl: links.liveSiteUrl,
      content: fullContent
    };
  })
  .filter(project => project.title !== 'Unknown') // Filter out projects without titles
  .sort((a, b) => a.id - b.id); // Sort by ID numerically

// Generate GitHub README section
const readmeSection = projects.map(p => `
### ${p.title} (${p.type})
${p.gitRepoUrl ? `[GitLab Repo](${p.gitRepoUrl})` : ''}${p.gitRepoUrl && p.liveSiteUrl ? ' | ' : ''}${p.liveSiteUrl ? `[Live Site](${p.liveSiteUrl})` : ''}
<!-- Add parsed description, etc. -->
`).join('\n');

// Generate JSON for portfolio
const portfolioJson = JSON.stringify(projects, null, 2);

// Output to stdout or files
if (process.argv[2] === 'readme') {
  console.log(readmeSection);
} else if (process.argv[2] === 'portfolio') {
  fs.writeFileSync('projects.json', portfolioJson);
  console.log(`Generated projects.json with ${projects.length} projects`);
} else {
  // Default: show both
  console.log('=== README Section ===');
  console.log(readmeSection);
  console.log('\n=== JSON Preview ===');
  console.log(JSON.stringify(projects.slice(0, 2), null, 2)); // Show first 2 as preview
}