var _ = require('lodash');

module.exports = {
  getDataAttributesFromProps: function() {
    return _.mapKeys(this.props.data, function(value, key) {
       return 'data-' + _.kebabCase(key);
    });
  }
};
