/* eslint-disable import/prefer-default-export */

export const selectedItem = (arr1, arr2) =>
  arr1.map((category) => {
    const foundCategory = arr2?.filter((items) => items.id === category.id);
    return foundCategory && foundCategory[0]
      ? {
          ...category,
          options: category?.options?.map((grp) => {
            const foundGroup = foundCategory[0]?.options?.filter((elem) => elem.id === grp.id);
            return foundGroup && foundGroup[0]
              ? {
                  ...grp,
                  isSelected: !grp.isSelected,
                  options: grp?.options?.map((layer) => {
                    const foundLayer = foundGroup[0]?.options?.filter((elem) => elem.id === layer.id);
                    return foundLayer && foundLayer[0] ? { ...layer, isSelected: !layer.isSelected } : { ...layer };
                  }),
                }
              : { ...grp };
          }),
        }
      : {
          ...category,
        };
  });
