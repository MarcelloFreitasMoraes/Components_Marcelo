export interface SkeletonLoadingProps {
  skeleton: [
    string[],
    string[],
    string[],
    string[],
    string[],
    string[],
    string[],
    string[]
  ]
  isActive: boolean
  isLoading: boolean
  hasError?: boolean
  hasTitle?: boolean
  background?: boolean
  size?: number
  position?: string
  padding?: string
}
