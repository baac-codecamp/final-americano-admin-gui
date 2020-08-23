export const updateTempNews = (name, value) => ({
  type: 'UPDATE_TEMP_NEWS',
  name,
  value,
})

export const clearTempNews = (name, value) => ({
  type: 'CLEAR_TEMP_NEWS',
})
