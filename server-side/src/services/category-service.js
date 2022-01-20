import Category from '../models/category';
import ERRORS from '../config/errors';

class CategoryService {
  static createCategory = async ({ name }) => {
    if (!name) {
      throw new Error(ERRORS.INCOMPLETE_INPUT);
    }

    const category = await Category.create({
      name,
    });

    return category;
  };

  static getCategoryById = async ({ id }) => {
    const category = await Category.findOne({ id });

    if (!category) throw new Error(ERRORS.NOT_FOUND);

    return category;
  };
}

export default CategoryService;
