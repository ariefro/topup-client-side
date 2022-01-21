import NominalService from '../services/nominal-service';

class NominalController {
  static createNominal = async (req, res) => {
    try {
      const { coinName, coinQuantity, price } = req.body;
      await NominalService.createNominal({ coinName, coinQuantity, price });

      res.redirect('/admin/nominal');
    } catch (err) {
      console.log(err);
    }
  };

  static formCreateNominalView = (req, res) => {
    res.render('admin/nominal/create');
  };

  static GetAllNominal = async (req, res) => {
    try {
      const nominal = await NominalService.getAllNominal();

      res.render('admin/nominal', { nominal });
    } catch (err) {
      console.log(err);
    }
  };
}

export default NominalController;
