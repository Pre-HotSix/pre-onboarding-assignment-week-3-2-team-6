export const ERROR = 'error';
export function errorAction(error) {
  return  {
    type: ERROR,
    error
  };
};