const slugify = (strPath = '') => {
  const structure = ['category', 'brand', 'product'];
  const pathnameArray = strPath.trim().split('/');
  pathnameArray.shift();
  let path = '';
  const allPath = [];

  return allPath;
};

export default slugify;
