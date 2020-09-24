// This is a Utility Function, which we use to Update an Object.
export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues
  }
};