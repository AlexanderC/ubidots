module.exports.interpolate = (template, vars) => {
  for (const key in vars) {
    template = template.replace(
      new RegExp(`{\s*${key}\s*}`, 'ig'),
      vars[key]
    );
  }

  return template;
};
