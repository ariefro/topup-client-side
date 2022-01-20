const ROUTE_PARAMS = {
  id: ':id',
};

const API_ROUTES = {
  ROOT: '/',
  CREATE_CATEGORY: '/admin/category/create',
  GET_CATEGORY_BY_ID: `/admin/category/${ROUTE_PARAMS.id}`,
};

const ADMIN_ROUTES = {
  ROOT: '/admin',
  CATEGORY: '/admin/category',
};

const VIEW_ROUTES = {
  ROOT: '/',
  ADMIN: '/admin',
  CATEGORY: '/admin/category',
  CREATE_CATEGORY: '/admin/category/create',
};

export { API_ROUTES, ADMIN_ROUTES, VIEW_ROUTES };
