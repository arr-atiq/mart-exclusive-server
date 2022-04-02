// exports.organisedCategory = (category, parentId = null) => {
//   const categoryListItem = [];
//   let categoryData;
//   if (parentId === null) {
//     categoryData = category.filter((item) => item.parentId === undefined);
//   } else {
//     categoryData = category.filter(
//       (item) => item.parentId === parentId.toString()
//     );
//   }

//   for (let item of categoryData) {
//     const categoryObj = {
//       _id: item?._id,
//       name: item?.name,
//       slug: item?.slug,
//       children: organisedCategory(category, item?._id),
//     };
//     categoryListItem.push(categoryObj);
//   }

//   return categoryListItem;
// };
