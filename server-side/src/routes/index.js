const ROUTE_PARAMS = {
  id: ':id',
};

const API_ROUTES = {
  ROOT: '/',
  GET_CATEGORIES: '/admin/category',
  GET_CATEGORY_BY_ID: `/admin/category/${ROUTE_PARAMS.id}`,
  CREATE_CATEGORY: '/admin/category/create',
  UPDATE_CATEGORY: `/admin/category/edit/${ROUTE_PARAMS.id}`,
};

const VIEW_ROUTES = {
  ROOT: '/',
  ADMIN: '/admin',
  CATEGORY: '/admin/category',
  CREATE_CATEGORY: '/admin/category/create',
  UPDATE_CATEGORY: `/admin/category/edit/${ROUTE_PARAMS.id}`,
};

export { API_ROUTES, VIEW_ROUTES };
