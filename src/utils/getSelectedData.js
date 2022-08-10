/* eslint-disable no-nested-ternary */
export const getSelectedData = (data, name, categoryName, id) =>
  data?.map((item) =>
    item.name === name
      ? {
          ...item,
          options: item?.options?.map((element) =>
            element.name === categoryName
              ? // element.type === 'group'
                //   ? {
                //       ...element,
                //       // isSelected: !element.isSelected,
                //       options: element.options.map((items) =>
                //         items.id === +id
                //           ? {
                //               ...items,
                //               isSelected: !items.isSelected,
                //             }
                //           : { ...items },
                //       ),
                //     }
                //   :
                {
                  ...element,
                  options: element?.options?.map((items) => ({
                    ...items,
                    isSelected: !element.isSelected,
                  })),
                  isSelected: !element.isSelected,
                }
              : { ...element },
          ),
        }
      : { ...item },
  );

export const getSelectedDataFromSubLayer = (data, name, categoryName, id) =>
  data.map((item) =>
    item.name === name
      ? {
          ...item,
          options: item?.options?.map((element) =>
            element.name === categoryName
              ? {
                  ...element,
                  // isSelected: element.options.some((datas) => datas.isSelected === true),
                  options: element?.options?.map((items) =>
                    items.id === +id
                      ? {
                          ...items,
                          isSelected: !items.isSelected,
                        }
                      : { ...items },
                  ),
                }
              : { ...element },
          ),
        }
      : { ...item },
  );

export const getFilteredLayerData = (data) =>
  data
    ?.map((lyr) => ({
      options: lyr?.options?.filter((item) => item?.isSelected === true),
    }))
    ?.filter((element) => element?.options?.length)
    ?.reduce((arr, items) => [...arr, ...items?.options], []);

export const getSelectedGeomData = (data) =>
  data
    .map((item) => ({ ...item, options: item?.options?.filter((elem) => elem.isSelected) }))[0]
    ?.options.map((element) => ({
      ...element,
    }));
