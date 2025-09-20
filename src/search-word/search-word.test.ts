import searchWord from "./search-word";
import searchWordIntoFile from "./search-word";

describe('Valid anagram of a string', () => {

    it('success case', async () => {

        const file = "./article.txt"
        const chars = "sss";

        const word = await searchWordIntoFile(file, chars);
        expect(word).toBe(null)
    })

    it('lttd corrispond to altitute', async () => {

        const file = "./article.txt"
        const chars = "lttd";

        const result = await searchWordIntoFile(file, chars);
        expect(result).toBe("altitudes")
    })

    it('certificate is included into the article', async () => {

        const file = "./article.txt"
        const chars = "crtfct";

        const result = await searchWordIntoFile(file, chars);
        expect(result).toBe("certificate")
    })

    it('montains is the word', async () => {

        const file = "./article-2.txt"
        const chars = "llt";

        const result = await searchWordIntoFile(file, chars);
        expect(result).toBe(null)
    })
})
