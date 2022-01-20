const an_authenticated_user = async userRole => {
  return {
    name: 'John Doe',
    role: userRole,
  };
};

module.exports = {
  an_authenticated_user,
};
