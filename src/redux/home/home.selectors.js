import { createSelector } from "reselect";

const selectHome = state => state.home;

export const selectCollections = createSelector(
    [selectHome],
 home => home.collections
);


export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ?  Object.keys(collections).map(key => collections[key]) : []
);

  
  export const selectCollection = collectionUrlParam =>
    createSelector(
      [selectCollections],
      collections => collections[collectionUrlParam]
    );