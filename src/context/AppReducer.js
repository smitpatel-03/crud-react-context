// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "ADD_USER":
      return {
        users: [action.payload, ...state.users],
      };
    case "EDIT_USER":
      console.log(action.payload);
      const updatedUser = action.payload;
      const updatedUsers = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        }
        return user;
      });
      console.log(updatedUsers);
      return {
        users: updatedUsers,
      };
    default:
      return state;
  }
};
