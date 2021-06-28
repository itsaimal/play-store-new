import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// //test
// export const selectDetails = createSelector(
//   [selectShop],
//   shop => shop.detailz
// );





export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
); 

// //test
// export const selectDetailsForPreview = createSelector(
//   [selectDetails],
//   detailz => Object.keys(detailz).map(key => detailz[key])
// );


export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  );

//   //test
// export const selectDetail = detailUrlParam =>
//   createSelector(
//     [selectDetails],
//     detailz => detailz [detailUrlParam]
//   );


