[![Actions Status](https://github.com/LEGO/pulumi-get-value/actions/workflows/main.yml/badge.svg)](https://github.com/LEGO/pulumi-get-value/actions/workflows/main.yml)
[![npm version](https://badge.fury.io/js/@lego%2Fpulumi-get-value.svg)](https://www.npmjs.com/package/@lego/pulumi-get-value)
[![License](https://img.shields.io/npm/l/@lego/pulumi-get-value)](https://github.com/LEGO/pulumi-get-value/blob/main/LICENSE)

# pulumi-get-value
Pulumi plug-in that enables you to await the value of `Output<T>` types.

## Installation
To use from JavaScript or TypeScript in Node.js, install using either `npm`:

```
npm install @lego/pulumi-get-value
```

or `yarn`:
```
yarn add @lego/pulumi-get-value
```

## Usage
```typescript
import { getValue } from "@lego/pulumi-get-value"
import * as aws from '@pulumi/aws';

const bucket: aws.s3.Bucket = new aws.s3.Bucket('my-bucket');

// Using `.apply`
bucket.arn.apply((arn) => {
  // Use arn
});

// Using `getValue()`
const arn: string = await getValue(bucket.arn);
```

## Contribution

This project welcomes contributions and suggestions.
Would you like to contribute to the project? Learn how to contribute [here](CONTRIBUTING.md).

## License
[Modified Apache 2.0 (Section 6)](LICENSE)

## Open Source Attribution
### Project Dependencies

- [@pulumi/pulumi](https://www.npmjs.com/package/@pulumi/pulumi): [Apache 2.0](https://github.com/pulumi/pulumi/blob/master/LICENSE)
 
### Dev Dependencies

- [@semantic-release/changelog](https://www.npmjs.com/package/@semantic-release/changelog) - [MIT](https://github.com/semantic-release/changelog/blob/master/LICENSE)
- [@semantic-release/git](https://www.npmjs.com/package/@semantic-release/git) - [MIT](https://github.com/semantic-release/git/blob/master/LICENSE)
- [@types/jest](https://www.npmjs.com/package/@types/jest): [MIT](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE)
- [@types/node](https://www.npmjs.com/package/@types/node): [MIT](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin): [BSD-2-Clause](https://github.com/typescript-eslint/typescript-eslint/blob/main/LICENSE)
- [@typescript-eslint/parser](https://www.npmjs.com/package): [BSD-2-Clause](https://github.com/typescript-eslint/typescript-eslint/blob/main/LICENSE)
- [semantic-release](https://www.npmjs.com/package/semantic-release): [MIT](https://github.com/semantic-release/semantic-release/blob/master/LICENSE)
- [eslint](https://www.npmjs.com/package/eslint): [MIT](https://github.com/eslint/eslint/blob/main/LICENSE)
- [jest](https://www.npmjs.com/package/jest): [MIT](https://github.com/facebook/jest/blob/main/LICENSE)
- [ts-jest](https://www.npmjs.com/package/ts-jest): [MIT](https://github.com/kulshekhar/ts-jest/blob/main/LICENSE.md)
- [typescript](https://www.npmjs.com/package/typescript): [Apache 2.0](https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt)
