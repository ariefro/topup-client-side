class AdminController {
  static dashboardView = (req, res) => {
    res.render('index');
  };

  static categoryView = (req, res) => {
    res.render('admin/category/index');
  };
}

export default AdminController;
