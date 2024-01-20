
enum AdminPermission {
  canAccessAdminDashboard = "canAccessAdminDashboard",
  isSuperAdmin = "isSuperAdmin",
  canAccessClientDashboard = 'canAccessClientDashboard',
}
enum ClientPermission {
  canBookTour = "canBookTour",
  canAccesClientsProfile = "canAccesClientsProfile",
}


enum PostsPermission {
  DeletePost = 'DeletePost'
}
 
const Permission = {
  ...AdminPermission,
  ...PostsPermission,
  ...ClientPermission,
}

type Permission = AdminPermission|ClientPermission |PostsPermission ;

export default Permission;