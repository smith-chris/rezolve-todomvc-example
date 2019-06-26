export type VisibilityFilterState = string

export const SET_VISIBILITY_FILTER = () => (
  filter: string
): VisibilityFilterState => {
  return filter
}
