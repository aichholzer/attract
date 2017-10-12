module.exports = (options = {}) => {
  global.attract = (...args) => {
    const modules = [];
    args.forEach((arg) => {
      try {
        modules.push(require.call(null, arg));
      } catch (error) {
        if (options.basePath) {
          arg = `${options.basePath}/${arg}`;
        }

        modules.push(require.call(null, arg));
      }
    });

    return modules.length === 1 ? modules[0] : modules;
  };
};
