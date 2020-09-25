
export const ACTIVE_ITEM = 'ACTIVE_ITEM';

export const activeItem = (item) => ({
  type: ACTIVE_ITEM,
  item
})

export function setActiveItemAction(item) {
  return function (dispatch) {
    dispatch(activeItem(item))
  }
}