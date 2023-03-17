import React from 'react'
import LoadingSkeletonStyled, { GridRow, Item } from './styles'
import { SkeletonLoadingProps } from './interfaces'

export const activeLoading = (loading: boolean, error: any) => loading || error

export const LoadingSkeleton = ({
  skeleton,
  isLoading,
  hasError,
  hasTitle,
  size,
  isActive,
  position,
  padding,
  ...props
}: SkeletonLoadingProps) => {
  return (
    <LoadingSkeletonStyled
      className="loading-skeleton"
      {...props}
      isLoading={isLoading}
      fullBlock={!skeleton.length}
      position={position}
      wrapperPadding={padding}
      data-testid="LoadingSkeleton"
    >
      <div className="wrapper">
        {skeleton.map(
          (items: string[], skeletonIndex: React.Key | null | undefined) => (
            <GridRow
              key={skeletonIndex}
              firstRow={!skeletonIndex}
              hasTitle={hasTitle}
              size={size}
              totalItems={items.length}
            >
              {items.map((width: string, itemIndex: number) => (
                <Item
                  key={itemIndex}
                  width={width}
                  isLoading={isLoading}
                  size={size}
                  background={props.background}
                />
              ))}
            </GridRow>
          )
        )}
      </div>
    </LoadingSkeletonStyled>
  )
}
