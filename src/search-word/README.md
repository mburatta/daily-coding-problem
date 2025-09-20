Write a function that, given:

1. the path to a text file,
2. a string of characters,

finds in the text file the first word that contains all the characters specified in the second parameter.

The word may also contain additional characters besides those in the string, but it must include at least all of them.

The function should return the word found, or a null value (e.g., None or null, depending on the chosen programming language) if no word matches the condition.

### Example 1:

- Text file:

```text
The quick brown fox jumps over the lazy dog.
and then runs away.
```
- Character string: "mps"
- Output: "jumps" (since "jumps" contains all characters m, p, s, even if it has extra characters).
- Character string: "trw"
- Output: null because no world contains all characters t, r, w.
