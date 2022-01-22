import ERRORS from '../config/errors';
import Voucher from '../models/voucher';

class VoucherService {
  static createVoucher = async ({ name, category, nominal }) => {
    if (!name || !category || !nominal) {
      throw new Error(ERRORS.INCOMPLETE_INPUT);
    }
    const voucher = await Voucher.create({ name, category, nominal });

    return voucher;
  };

  static getAllVoucher = async () => {
    const voucher = await Voucher.find().populate('category').populate('nominal');

    return voucher;
  };
}

export default VoucherService;
