# Folder
- `mock` : contains mock data such as response tree, response of testcase result, ...
- `utils` : contains functions that handle response data. Currently, it has 2 functions:
  - `getResponse` simulates API calling
  - `processNode` handle response data. Parse tree-structure into node-structure that serves react-flow.
- `src/context` : app using react context to control node data and testcase.
