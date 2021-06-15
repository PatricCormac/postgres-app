const { Brand } = require('../models/models');
const ApiError = require('../error/ApiError');

class BrandController {
  async addBrand(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json({ brand });
  };

  async getAllBrands(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  };
};

module.exports = new BrandController();