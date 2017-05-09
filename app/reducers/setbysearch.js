const initialData = [];

export default function setBySearchReducer(data = initialData, action) {
  if (action.type === 'SET_BY_SEARCH') {
    return action.data;
  }

  return data;
}
