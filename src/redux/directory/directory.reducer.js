const INITIAL_STATE = {
    sections: [
      {
        title: 'Home',
        imageUrl: 'https://www.mad4wheels.com/img/free-car-images/mobile/17076/mazda-3-sedan-usa-version-2019-536308.jpg',
        id: 1,
        linkUrl: 'shop/sedan'
      },
      {
        title: 'Top charts',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png?crop=1.00xw:1.00xh;0,0&resize=1200:*',
        id: 2,
        linkUrl: 'shop/luxury'
      },
      {
        title: 'New releases',
        imageUrl: 'https://cdn.carbuzz.com/gallery-images/840x560/685000/700/685755.jpg',
        id: 3,
        linkUrl: 'shop/hatchback'
      },
      {
        title: '4x4',
        imageUrl: 'https://cdn.hiconsumption.com/wp-content/uploads/2018/04/GMC-Yukon.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/truck'
      },
      {
        title: 'used',
        imageUrl: 'https://autohouseusa.com/uimages/vehicle/8722862/full/2013-INFINITI-G37-Sedan-x-JN1CV6AR3DM765896-2481.jpeg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/used'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;