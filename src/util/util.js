import React from 'react';

export const getPathInt = (path) => {
    let pathNameArray = path.split("/");
    let oldSlideIndex = parseInt(pathNameArray[pathNameArray.length - 1])

    return oldSlideIndex
}

export const childFactoryCreator = (classNames) => (
    (child) => (
      React.cloneElement(child, {
        classNames
      })
    )
  )