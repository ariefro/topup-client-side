const ROUTE_PARAMS = {
  id: ':id',
};

const API_ROUTES = {
  ROOT: '/',
  GET_CATEGORIES: '/admin/category',
  GET_CATEGORY_BY_ID: `/admin/category/${ROUTE_PARAMS.id}`,
  CREATE_CATEGORY: '/admin/category/create',
  UPDATE_CATEGORY: `/admin/category/edit/${ROUTE_PARAMS.id}`,
  DELETE_CATEGORY: `/admin/category/delete/${ROUTE_PARAMS.id}`,
  CREATE_NOMINAL: '/admin/nominal/create',
  GET_NOMINALS: '/admin/nominal',
  UPDATE_NOMINAL: `/admin/nominal/edit/${ROUTE_PARAMS.id}`,
};

const VIEW_ROUTES = {
  ROOT: '/',
  ADMIN: '/admin',
  CATEGORY: '/admin/category',
  CREATE_CATEGORY: '/admin/category/create',
  UPDATE_CATEGORY: `/admin/category/edit/${ROUTE_PARAMS.id}`,
  NOMINAL: '/admin/nominal',
  CREATE_NOMINAL: '/admin/nominal/create',
};

export { API_ROUTES, VIEW_ROUTES };
