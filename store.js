import { readFileSync, writeFileSync, renameSync, mkdirSync, existsSync } from 'node:fs';
const defaults=JSON.parse(readFileSync(new URL('./src/catalog.json',import.meta.url),'utf8'));
mkdirSync('data',{recursive:true});
function read(file,fallback){return existsSync(file)?JSON.parse(readFileSync(file,'utf8')):structuredClone(fallback)}
function write(file,value){const tmp=file+'.tmp';writeFileSync(tmp,JSON.stringify(value,null,2));renameSync(tmp,file)}
export const getCatalog=()=>read('data/catalog.json',defaults);
export const saveCatalog=items=>write('data/catalog.json',items);
export const getOrders=()=>read('data/orders.json',[]);
export const saveOrders=items=>write('data/orders.json',items);
