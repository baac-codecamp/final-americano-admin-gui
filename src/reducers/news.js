const objNews = {
  title: '',
  imgUrl: '',
  desc: '',
}

const news = (state = objNews, action) => {
  switch (action.type) {
    case 'UPDATE_TEMP_NEWS':
      const { name, value } = action
      switch (name) {
        case 'title':
          return {
            ...state,
            title: value,
          }
        case 'imgUrl':
          return {
            ...state,
            imgUrl: value,
          }
        case 'desc':
          return {
            ...state,
            desc: value,
          }
        default:
          return state
      }
    case 'CLEAR_TEMP_NEWS':
      return (state = objNews)
    default:
      return state
  }
}

export default news
