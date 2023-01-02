import * as pulumi from '@pulumi/pulumi';

export const getValue = async <T>(output: pulumi.Output<T>): Promise<T> => {
  return new Promise((resolve) => {
    output.apply((value) => {
      resolve(value);
    });
  });
};
