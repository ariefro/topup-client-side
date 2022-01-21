import NominalService from '../services/nominal-service';

class NominalController {
  static nominalView = (req, res) => {
    res.render('admin/nominal');
  };

  static createNominal = async (req, res) => {
    try {
      const { coinName, coinQuantity, price } = req.body;
      await NominalService.createNominal({ coinName, coinQuantity, price });

      res.redirect('admin/nominal');
    } catch (err) {
      console.log(err);
    }
  };

  static formCreateNominalView = (req, res) => {
    res.render('admin/nominal/create');
  };
}

export default NominalController;
