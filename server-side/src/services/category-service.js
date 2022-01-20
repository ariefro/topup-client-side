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
}

export default CategoryService;
