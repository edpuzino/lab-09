'use strict';

import requireAll from 'require-dir';

const models = requireAll('../models');





export default (req,res,next) => {
  let model = req.params.model;
  if(model && model[model] && models[model].default) {
    req.model = models[model].default;
    next();
  }
  else {
    next('Invalid Model');
  }
};

