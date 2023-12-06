import { AbstractControl, ValidatorFn } from '@angular/forms';

// Função validadora personalizada
export const ConfirmPassword: ValidatorFn = (control: AbstractControl) => {
  const password = control.get('passwordCtrl');
  const confirmPassword = control.get('confirmCtrl');

  const isVality = password && confirmPassword && password.value === confirmPassword.value;
  return isVality ? null : { 'ConfirmPassword': true };
};
