import CategoryService from '../services/category-service';
import Category from '../models/category';

class CategoryController {
  static categoryView = async (req, res) => {
    const category = await Category.find();
    res.render('admin/category/index.ejs', { category });
  };

  static formCreateCategoryView = (req, res) => {
    res.render('admin/category/create.ejs');
  };

  static createCategory = async (req, res) => {
    try {
      const { name } = req.body;
      await CategoryService.createCategory({ name });

      res.redirect('/admin/category');
    } catch (err) {
      console.log(err);
    }
  };
}

export default CategoryController;
