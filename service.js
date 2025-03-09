import { readFile } from 'fs/promises';


//function gets datas from numbers.txt file and convert to utf8 format then export

export default async function renderDatas(info) {
    try {
        const data = await readFile(info, 'utf8');
        return data;
    } catch (err) {
        console.error('Error occurs when file was readen:', err);
        return null;    
    }
}
