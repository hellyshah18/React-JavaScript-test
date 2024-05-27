export const UserRequest = () => ({
    type: 'UserRequest',
    
  })
  
  export const UserSuc = (payload) => ({
    type: 'UserSuc',
    payload
  })
  
  export const UserError = (payload) => ({
    type: 'UserError',
    payload
  })