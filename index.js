var _ = {
  mapKeys: require('lodash.mapKeys'),
  kebabCase: require('lodash.kebabCase')
};

module.exports = {
  getDataAttributesFromProps: function() {
    return _.mapKeys(this.props.data, function(value, key) {
       return 'data-' + _.kebabCase(key);
    });
  }
};
