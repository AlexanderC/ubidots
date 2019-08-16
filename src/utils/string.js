module.exports.interpolate = (template, vars) => {
  for (const key in vars) {
    template = template.replace(
      // eslint-disable-next-line no-useless-escape
      new RegExp(`{\s*${ key }\s*}`, 'ig'),
      vars[key],
    );
  }

  return template;
};
