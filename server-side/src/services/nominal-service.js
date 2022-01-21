import Nominal from '../models/nominal';
import ERRORS from '../config/errors';

class NominalService {
  static createNominal = async ({ coinName, coinQuantity, price }) => {
    if (!coinName || !coinQuantity || !price) {
      throw new Error(ERRORS.INCOMPLETE_INPUT);
    }

    const nominal = await Nominal.create({
      coinName,
      coinQuantity,
      price,
    });

    return nominal;
  };

  static getAllNominal = async () => {
    const nominal = await Nominal.find();

    if (!nominal) {
      throw new Error(ERRORS.NOT_FOUND);
    }

    return nominal;
  };
}

export default NominalService;
