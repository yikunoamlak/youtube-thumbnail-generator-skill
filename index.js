#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

function installSkill() {
    console.log("Installing youtube-thumbnail-generator skill...");
    
    // Find ~/.gemini/config/skills/
    const homedir = os.homedir();
    const skillsDir = path.join(homedir, '.gemini', 'config', 'skills');
    
    // Ensure the skills directory exists
    if (!fs.existsSync(skillsDir)) {
        console.error(`Error: Skills directory not found at ${skillsDir}`);
        console.error('Please make sure you have the AI agent installed and initialized.');
        process.exit(1);
    }
    
    // Create the target directory for the skill
    const targetDir = path.join(skillsDir, 'youtube-thumbnail-generator');
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
        console.log(`Created directory: ${targetDir}`);
    }
    
    // Read the SKILL.md from the package
    const sourceSkillPath = path.join(__dirname, 'SKILL.md');
    if (!fs.existsSync(sourceSkillPath)) {
        console.error(`Error: Could not find SKILL.md in the package at ${sourceSkillPath}`);
        process.exit(1);
    }
    
    // Copy the file
    const targetSkillPath = path.join(targetDir, 'SKILL.md');
    fs.copyFileSync(sourceSkillPath, targetSkillPath);
    
    console.log(`\n✅ Success! The 'youtube-thumbnail-generator' skill has been installed to:`);
    console.log(`   ${targetSkillPath}`);
    console.log(`\nYou can now ask your agent to "generate a youtube thumbnail" and it will use this skill!`);
}

installSkill();
