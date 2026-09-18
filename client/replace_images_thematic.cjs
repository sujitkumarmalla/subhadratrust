
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const thematicUnsplashIds = [
  '1488521787991-ed7bbaae773c', // Kids in a circle
  '1542810634-71277d95dc8a', // Rural school children
  '1511632765486-a01c80cb8fa6', // Smiling kids
  '1532012197267-da84d127e765', // Books / education
  '1509062522246-3755977927d7', // Classroom
  '1593113589914-075568e09121', // Charity / hands
  '1427504494785-3a9ca7044f45', // School / chalkboard
  '1577896851231-70ef18881754', // Studying boy
  '1544717305-2782549b5136', // Portrait
  '1506869640319-fea1a2753c65', // Villager
  '1599059813005-11265ba4b4ce', // Indian kids running/playing
  '1603808033192-082d6919d3e1', // Indian children school
  '1608681283689-53e70d4b8e39', // Indian kids smiling
  '1504151932400-72d4384f0e6d', // Hands holding food/donation
  '1608756184131-ab10cff2e11d'  // Teacher with students
];

function replaceWithThematic(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceWithThematic(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Regex to find https://picsum.photos/... and replace with a thematic Unsplash URL.
      const newContent = content.replace(/https:\/\/picsum\.photos\/seed\/[^\s"']+/g, (match) => {
        const randomId = thematicUnsplashIds[Math.floor(Math.random() * thematicUnsplashIds.length)];
        return `https://images.unsplash.com/photo-${randomId}?auto=format&fit=crop&q=80&w=800`;
      });

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceWithThematic(srcDir);
console.log('Done replacing with thematic images!');
