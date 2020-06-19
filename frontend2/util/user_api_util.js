
export const updateUser = (user) => {

  let apromise = $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user }
  });
  return apromise;
}
