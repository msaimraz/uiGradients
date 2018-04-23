import * as type from './types'

function canvasReducer (state = {}, action) {
  switch (action.type) {
    case type.ROTATE_GRADIENT:
      let directionIndex
      if (action.direction === 'down') {
        directionIndex = state.directionIndex + 1
        directionIndex = (directionIndex > state.directions.length - 1) ? 0 : directionIndex
      } else if (action.direction === 'up') {
        directionIndex = state.directionIndex - 1
        directionIndex = (directionIndex < 0) ? state.directions.length - 1 : directionIndex
      }
      return Object.assign({}, state, {
        directionIndex: directionIndex,
        activeDirection: state.directions[directionIndex]
      })

    default:
      return state
  }
}

export default canvasReducer