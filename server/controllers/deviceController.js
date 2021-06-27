class DeviceController {
  async addDevice(req, res) {
    const { name, price, brandId, typeId, info } = req.body;
  };

  async getAllDevices(req, res) {
    
  };

  async getDeviceById(req, res) {
    
  };
};

module.exports = new DeviceController();