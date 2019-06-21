export const actionCreatorFactory = (name) => {
  return {
    'start' : `${name}_START`,
    'success' : `${name}_DONE`,
    'fail' : `${name}_FAIL`,
  }
};