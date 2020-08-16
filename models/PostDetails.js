class PostDetails {
  constructor(
    id,
    title,
    body,
    user_location_id,
    images,
    categories,
    comments,
    userName,
    locationName,
    favUsers
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.user_location_id = user_location_id;
    this.images = images;
    this.categories = categories;
    this.comments = comments;
    this.userName = userName;
    this.locationName = locationName;
    this.favUsers = favUsers;
  }
}

export default PostDetails;
