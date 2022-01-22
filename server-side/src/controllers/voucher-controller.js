import path from 'path';
import fs from 'fs';
import Category from '../models/category';
import Nominal from '../models/nominal';
import Voucher from '../models/voucher';
import config from '../config';
import VoucherService from '../services/voucher-service';

class VoucherController {
  static viewVoucher = async (req, res) => {
    try {
      const voucher = await VoucherService.getAllVoucher();

      res.render('admin/voucher', { voucher });
    } catch (err) {
      console.log(err);
    }
  };

  static formCreateVoucher = async (req, res) => {
    try {
      const category = await Category.find();
      const nominal = await Nominal.find();

      res.render('admin/voucher/create', { category, nominal });
    } catch (err) {
      console.log(err);
    }
  };

  static createVoucher = async (req, res) => {
    try {
      const { name, category, nominal } = req.body;

      if (req.file) {
        const tmpPath = req.file.path;
        const originalExt = req.file.originalname.split('.')[req.file.originalname.split('.').length - 1];
        const filename = `${req.file.filename}.${originalExt}`;
        const targetPath = path.resolve(config.rootPath, `public/uploads/${filename}`);

        const src = fs.createReadStream(tmpPath);
        const dest = fs.createWriteStream(targetPath);

        src.pipe(dest);

        src.on('end', async () => {
          try {
            const voucher = new Voucher({
              name,
              category,
              nominal,
              thumbnail: filename,
            });

            await voucher.save();

            res.redirect('/admin/voucher');
          } catch (err) {
            console.log(err);
          }
        });
      } else {
        const voucher = new Voucher({
          name,
          category,
          nominal,
        });
        await voucher.save();

        res.redirect('/admin/voucher');
      }
    } catch (err) {
      console.log(err);
      res.redirect('/admin/voucher');
    }
  };
}

export default VoucherController;
