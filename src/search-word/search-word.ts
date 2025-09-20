import fs from "fs";
import path from "path";
import readline from "readline";

async function searchWordIntoFile( filePath: string, chars: string ) {

    if(chars.length === 0) {
        return null;
    }

    if(filePath.length === 0) {
        return null;
    }

    try {
        const fileAbsolutePath = path.join(__dirname, filePath);
        const fileStream = fs.createReadStream(fileAbsolutePath);

        if(!fs.existsSync(fileAbsolutePath)){
            return null;
        }

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity, // gestisce correttamente sia \n che \r\n
        });

        let found = null;
        for await (const line of rl) {
            if(line.length > chars.length) {
                found = searchWordIntoRow(line, chars);
                if(!!found) {
                    return found;
                    console.log(' Row from file:', line);
                }
            }
        }

        return null;

    } catch (err) {
        return null;
    }
}

const searchWordIntoRow = ( row: string, chars: string ): string | null =>{

    if (chars.length === 0) {
        return null;
    }

    const textTokens = row.replace(/[\\.,]/g,'').split(' ');

    for(const token of textTokens) {

        if(token.length < chars.length) {
            continue;
        }

        let tokenToAnalize = [...token].join('');
        let isAllCharsIncludes = true;
        for(const char of chars) {
            isAllCharsIncludes = tokenToAnalize.includes(char);
            if(!isAllCharsIncludes) {
                break;
            } else {
                tokenToAnalize = tokenToAnalize.replace(char, '');
            }
        }

        if (isAllCharsIncludes) {
            return token;
        }
    }

    return null;
}

export default searchWordIntoFile;
