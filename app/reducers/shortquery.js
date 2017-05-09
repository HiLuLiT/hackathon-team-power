const initialData = [];

export default function setBySearchReducer(data = initialData, action) {
  if (action.type === 'SHORT_QUERY') {
    return action.data;
  }

  return data;
}
