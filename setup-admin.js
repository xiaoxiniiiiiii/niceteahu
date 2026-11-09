import { randomBytes, scryptSync } from 'node:crypto';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
if(existsSync('data/admin.json')){console.error('Admin account already exists. Remove the local admin file manually only if you intend to reset it.');process.exit(1)}
const username='admin';const password=randomBytes(18).toString('base64url');const salt=randomBytes(16).toString('hex');const hash=scryptSync(password,salt,64).toString('hex');mkdirSync('data',{recursive:true});writeFileSync('data/admin.json',JSON.stringify({username,salt,hash},null,2));console.log(`Username: ${username}\nPassword: ${password}\nSave this password in your password manager; it will not be displayed again.`);
