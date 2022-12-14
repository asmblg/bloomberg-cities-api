const { config } = require('../models');

module.exports = {
  findByProject: ({ query: { project } }, res) => {
    config
      .find({ project })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
