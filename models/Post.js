class Post {
  constructor(id, title, images, userName, locationName, user_location_id) {
    this.id = id;
    this.title = title;
    this.user_location_id = user_location_id;
    this.images = images;
    this.userName = userName;
    this.locationName = locationName;
  }
}

export default Post;
