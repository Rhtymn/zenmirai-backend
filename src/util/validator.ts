import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'leading white space', async: false })
export class NoLeadingWhiteSpace implements ValidatorConstraintInterface {
  validate(
    value: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    return value[0] !== ' ';
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `${validationArguments.targetName} should not have leading white space`;
  }
}

@ValidatorConstraint({ name: 'trailing white space', async: false })
export class NoTrailingWhiteSpace implements ValidatorConstraintInterface {
  validate(
    value: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> | boolean {
    return value[value.length - 1] !== ' ';
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `${validationArguments.targetName} should not have trailing white space`;
  }
}
