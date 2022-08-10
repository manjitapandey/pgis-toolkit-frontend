// const newData = updated
  //   ? layerData
  //       .map((item) => (item.id === id ? { ...item, options: [], ...data } : { ...item }))
  //       .map((elem) => {
  //         if (!elem?.options?.length) delete elem?.options;
  //         return elem;
  //       })
  //   : layerData
  //       .map((item) => (item.id === id ? { ...item, ...data } : { ...item }))
  //       .map((elem) => {
  //         if (!elem?.options?.length) delete elem?.options;
  //         return elem;
  //       });
  // console.log(newData, 'newData');
  // const themeData = newData?.map((item) => {
  //   const newArrs = item?.group || item?.layer ? [...item?.group, ...item?.layer] : [];
  //   return {
  //     id: item.id,
  //     name: item.name,
  //     options:
  //       item.options ||
  //       (item?.group?.length > 0
  //         ? newArrs?.map((grp) => {
  //             if (grp?.layer) {
  //               return {
  //                 // ...items,
  //                 type: 'group',
  //                 name: grp?.name,
  //                 id: grp?.id,
  //                 isSelected: false,
  //                 options: grp?.layer?.map((elements) => ({
  //                   ...elements,
  //                   key: `${elements?.id}__${elements?.name}__${grp?.id}`,
  //                   isSelected: false,
  //                 })),
  //               };
  //             }
  //             if (grp?.sub_layer?.length) {
  //               return {
  //                 // ...items,
  //                 name: grp?.name,
  //                 id: grp?.id,
  //                 icon: grp?.icon,
  //                 iconSize: grp?.icon_size,
  //                 type: 'layerWithSubLayer',
  //                 isSelected: false,
  //                 options: grp?.sub_layer?.map((elements) => ({
  //                   ...elements,
  //                   isSelected: false,
  //                   key: `${elements?.id}__${elements?.name}__${grp?.id}`,
  //                 })),
  //               };
  //             }
  //             return {
  //               ...grp,
  //               key: `${item?.id}__${grp?.id}__${grp?.name}`,
  //               name: grp?.name,
  //               id: grp?.id,
  //               icon: grp?.icon,
  //               iconSize: grp?.icon_size,
  //               type: 'layerWithoutSubLayer',
  //               isSelected: false,
  //               options: grp?.sub_layer?.map((elements) => ({
  //                 ...elements,
  //                 key: `${elements?.id}__${elements?.name}__${grp?.id}`,
  //                 isSelected: false,
  //               })),
  //             };
  //           })
  //         : item?.layer?.length
  //         ? item?.layer?.map((layer) => {
  //             if (item?.sub_layer?.length) {
  //               return {
  //                 // ...items,
  //                 name: layer?.name,
  //                 id: layer?.id,
  //                 icon: layer?.icon,
  //                 iconSize: layer?.icon_size,
  //                 type: 'layerWithSubLayer',
  //                 isSelected: false,
  //                 options: layer?.sub_layer?.map((elements) => ({
  //                   ...elements,
  //                   isSelected: false,
  //                   key: `${elements?.id}__${elements?.name}__${layer?.id}`,
  //                 })),
  //               };
  //             }
  //             return {
  //               // ...items,
  //               name: layer?.name,
  //               id: layer?.id,
  //               icon: layer?.icon,
  //               iconSize: layer?.icon_size,
  //               type: 'layerWithoutSubLayer',
  //               isSelected: false,
  //               options: layer?.sub_layer?.map((elements) => ({
  //                 ...elements,
  //                 isSelected: false,
  //                 key: `${elements?.id}__${elements?.name}__${layer?.id}`,
  //               })),
  //             };
  //           })
  //         : []),
  //   };
  // });

  // const newLayerData = isEmpty(updatedData) ? themeData : selectedItem(themeData, updatedData, type);



  // const getProjectLayerDataSuccess = (state, action) => {
//   const {
//     payload: { data },
//   } = action;
//   const { updatedData } = state;
//   const layerData = data.map((item) => {
//     const newArrs = [...item.group, ...item.layer];
//     return {
//       id: item.id,
//       name: item.name,
//       options:
//         item.group.length > 0
//           ? newArrs.map((grp) => {
//               if (grp.layer) {
//                 return {
//                   // ...items,
//                   type: 'group',
//                   name: grp.name,
//                   id: grp.id,
//                   isSelected: false,
//                   options: grp.layer.map((elements) => ({
//                     ...elements,
//                     key: `${elements?.id}__${elements.name}__${grp?.id}`,
//                     isSelected: false,
//                   })),
//                 };
//               }
//               if (grp.sub_layer?.length) {
//                 return {
//                   // ...items,
//                   name: grp.name,
//                   id: grp.id,
//                   icon: grp.icon,
//                   iconSize: grp.icon_size,
//                   type: 'layerWithSubLayer',
//                   isSelected: false,
//                   options: grp.sub_layer.map((elements) => ({
//                     ...elements,
//                     isSelected: false,
//                     key: `${elements?.id}__${elements.name}__${grp?.id}`,
//                   })),
//                 };
//               }
//               return {
//                 ...grp,
//                 key: `${item?.id}__${grp?.id}__${grp?.name}`,
//                 name: grp.name,
//                 id: grp.id,
//                 icon: grp.icon,
//                 iconSize: grp.icon_size,
//                 type: 'layerWithoutSubLayer',
//                 isSelected: false,
//                 options: grp.sub_layer.map((elements) => ({
//                   ...elements,
//                   key: `${elements?.id}__${elements.name}__${grp?.id}`,
//                   isSelected: false,
//                 })),
//               };
//             })
//           : item.layer.length
//           ? item.layer.map((layer) => {
//               if (item.sub_layer?.length) {
//                 return {
//                   // ...items,
//                   name: layer.name,
//                   id: layer.id,
//                   icon: layer.icon,
//                   iconSize: layer.icon_size,
//                   type: 'layerWithSubLayer',
//                   isSelected: false,
//                   options: layer.sub_layer.map((elements) => ({
//                     ...elements,
//                     isSelected: false,
//                     key: `${elements?.id}__${elements.name}__${layer?.id}`,
//                   })),
//                 };
//               }
//               return {
//                 // ...items,
//                 name: layer.name,
//                 id: layer.id,
//                 icon: layer.icon,
//                 iconSize: layer.icon_size,
//                 type: 'layerWithoutSubLayer',
//                 isSelected: false,
//                 options: layer.sub_layer.map((elements) => ({
//                   ...elements,
//                   isSelected: false,
//                   key: `${elements?.id}__${elements.name}__${layer?.id}`,
//                 })),
//               };
//             })
//           : [],
//     };
//   });

//   const newLayerData = isEmpty(updatedData) ? layerData : selectedItem(layerData, updatedData?.detailData);

//   return {
//     ...state,
//     layerData: newLayerData,
//     layerDeleteSuccess: false,
//     addThemeData: initialState.addThemeData,
//     postSuccess: false,
//     // geomData,
//   };
// };
