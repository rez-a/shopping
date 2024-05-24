const slugify = (strPath = '') => {
  const { pathname } = window.location;
  const pathnameArray = pathname.trim().split('/');
  pathnameArray.shift();
  let pathnameObject = { category: null, brand: null };
  for (const index in pathnameArray)
    pathnameObject = {
      ...pathnameObject,
      [Object.keys(pathnameObject)[index]]: pathnameArray[index],
    };
  console.log(pathnameObject);
};

export default slugify;
