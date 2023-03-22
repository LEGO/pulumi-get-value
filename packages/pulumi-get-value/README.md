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
Do you want to contribute to the project? Find out how [here](CONTRIBUTING.md).

## License
[Modified Apache 2.0 (Section 6)](LICENSE)