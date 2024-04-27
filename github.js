const path = require('path');
const fs = require('fs');
const projectDir = process.cwd();
const { loadEnvConfig } = require('@next/env');
const dev = process.argv[2] === 'dev';
loadEnvConfig(projectDir , dev);
const githubPath = path.resolve(process.cwd(), 'github', 'docs');
fs.cpSync('out', githubPath, {recursive: true});