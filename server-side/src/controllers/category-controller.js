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

  static getCategories = async (req, res) => {
    try {
      const result = await CategoryService.getCategories();

      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
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

  static getCategoryById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await CategoryService.getCategoryById({ id });

      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  };

  static formUpdateCategoryView = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await CategoryService.getCategoryById({ id });

      res.render('admin/category/edit.ejs', { category });
    } catch (err) {
      console.log(err);
    }
  };

  static updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await CategoryService.updateCategory({ id, name });

      res.redirect('/admin/category');
    } catch (err) {
      console.log(err);
    }
  };

  static deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      await CategoryService.deleteCategory({ id });

      res.redirect('/admin/category');
    } catch (err) {
      console.log(err);
    }
  };
}

export default CategoryController;
