const {data} = require('../models');

module.exports = {
  findByProject: ({query: {project, select}}, res) => {
    console.log('Getting Data for', project )
    console.log('Selecting', select);
    data.find({project: project})
      .select(`project ${select || 'data'}`)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}
