import { helpers } from '@vuelidate/validators';

export const hasNumber = helpers.withMessage('At least one digit', (value) => {
  const regexp = new RegExp(/\d/);
  return value.match(regexp);
});

export const hasLetter = helpers.withMessage('At least one letter', (value) => {
  const regexp = new RegExp(/[a-zA-Z]/);
  return value.match(regexp);
});

export const least8Chars = helpers.withMessage(
  'At least 8 characters',
  (value) => {
    const regexp = new RegExp(/.{8,}/);
    return value.match(regexp);
  }
);

export const min18Years = helpers.withMessage(
  'You should be minimum 18 years old',
  (value) => {
    const birthDay = new Date(value);
    const today = new Date();
    let userAge = today.getFullYear() - birthDay.getFullYear();
    const monthDiff = today.getMonth() - birthDay.getMonth();
    const dayDiff = today.getDate() < birthDay.getDate();
    monthDiff < 0 || (monthDiff === 0 && dayDiff) ? userAge-- : userAge;
    return userAge >= 18;
  }
);

export const privPolicyChecked = helpers.withMessage(
  'Accept our privacy policy before proceeding',
  (value) => (value === true ? true : false)
);
