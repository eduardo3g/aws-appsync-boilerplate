const user_exists_in_UsersTable = async id => {
  const userFromTable = {
    id,
    name: 'John Doe',
    createdAt: new Date().toJSON(),
  };

  return userFromTable;
};

module.exports = {
  user_exists_in_UsersTable,
};
