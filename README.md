# daily-coding-problem

Raccolta di soluzioni a problemi di programmazione, implementate in TypeScript con approccio test-first. Ogni problema è accompagnato da test automatizzati (Jest) e, quando utile, da utility per strutture dati comuni.

## Stack e strumenti

- Linguaggio: TypeScript 5.6.x
- Test: Jest 29.x (con supporto TypeScript)
- Gestione pacchetti: Yarn
- Runtime: Node.js (consigliato LTS)

## Requisiti

- Node.js ≥ 18 (consigliato)
- Yarn installato

Verifica versioni:

```shell
node -v yarn -v
```

## Installazione

Clona il repository e installa le dipendenze:

```shell
bash git clone <URL_DEL_REPOSITORY> cd daily-coding-problem yarn install
```

## Eseguire i test

Esecuzione completa della suite:

```shell
yarn test
``` 

Modalità watch (riesegue i test sui file modificati):   

```shell
yarn test --watch
``` 

Eseguire un singolo file di test:

```shell
yarn test path/to/file.test.ts
``` 

Filtrare per nome test:

```shell
yarn test -t "<parte_del_nome_del_test>"
``` 

Pulire la cache di Jest (utile in caso di anomalie di risoluzione/moduli):

```shell
yarn test --clearCache
``` 

## Compilazione

Compila i file TypeScript in JavaScript:

```
yarn tsc
``` 

Esegui un file compilato con Node (sostituisci il percorso con quello effettivo dell’output):
```
node <percorso_output_js_compilato>
``` 

Nota: l’output e la cartella di destinazione dipendono dalla configurazione presente nel tsconfig.json (ad es. `outDir`).

## Struttura consigliata del progetto
```text
.
├─ src/
│  ├─ problems/
│  │  └─ <id>-<slug>/
│  │     ├─ index.ts
│  │     └─ index.test.ts
│  └─ utils/  (funzioni/strutture riusabili)
├─ img/       (risorse opzionali per README dei problemi)
├─ package.json
├─ tsconfig.json
└─ README.md
``` 

Puoi adottare una struttura diversa: l’importante è mantenere coerenza tra codice e test.

## Aggiungere un nuovo problema

1) Crea una nuova cartella per il problema:

```
mkdir -p src/problems/-
``` 

2) Implementa la soluzione in TypeScript:

```typescript
// src/problems/<id>-<slug>/index.ts
export function solve(input: unknown): unknown {
    // TODO: implementazione
    return input as unknown;
}
``` 

3) Scrivi i test con Jest:

```typescript
// src/problems/<id>-<slug>/index.test.ts
import { solve } from "./index";

describe("solve - <id>-<slug>", () => {
  it("risolve il caso base", () => {
    const input = /* ... */;
    const expected = /* ... */;
    expect(solve(input)).toEqual(expected);
  });

  it("gestisce i casi limite", () => {
    // ...
  });
});
``` 


4) Esegui i test:

```
yarn test
``` 


5) (Opzionale) Documenta approccio e complessità in un README dedicato alla cartella del problema.

## Convenzioni

- Nominare le cartelle dei problemi con `<id>-<slug>` (es. `110-balanced-binary-tree`).
- Preferire TDD: prima i test, poi l’implementazione.
- Documentare complessità temporale e spaziale.
- Centralizzare le utility condivise in `src/utils`.

## Risoluzione problemi comuni

- Test non riconosciuti:
  - Assicurati che i file terminino con `.test.ts`.
  - Esegui: `yarn test --clearCache`.
- Errori TypeScript:
  - Verifica `tsconfig.json` e i tipi importati.
- Import non risolti:
  - Controlla i percorsi relativi o configura `baseUrl/paths` nel `tsconfig.json`.

## Licenza

Scegli una licenza e aggiungi un file LICENSE alla radice del progetto (es. MIT, Apache-2.0, GPL-3.0).

## Contatti

- Maintainer: Massimo De Lorenzo
- Contributi: apri una Issue o una Pull Request con una descrizione chiara di problema/soluzione.
