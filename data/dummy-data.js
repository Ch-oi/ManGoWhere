import Post from "../models/Post";
import PostDetails from "../models/PostDetails";

export const POSTS = [
  new Post(
    1,
    "Tung Chung Day Tour",
    [{ url: "https://picsum.photos/200/300" }],
    "Edwin123",
    "Art Lane",
    1
  ),
  new Post(
    2,
    "Cruise Tour",
    [],
    "Pullip123",
    "Western District Waterfront Pier",
    2
  ),
  new Post(
    3,
    "Cruise Tour",
    [],
    "Pullip123",
    "Western District Waterfront Pier",
    3
  ),
  new Post(
    4,
    "Cruise Tour",
    [],
    "Pullip123",
    "Western District Waterfront Pier",
    4
  ),
  new Post(
    5,
    "Cruise Tour",
    [],
    "Pullip123",
    "Western District Waterfront Pier",
    5
  ),
];

export const POSTDETAILS = [
  new PostDetails(
    1,
    "Tung Chung Day Tour",
    "\n        • Visit Tung Chung North Park\n        • Learn more about Chinese Medicine at Pok Oi Hospital Chinese Medicine Culture and Health Museum\n        • Lunch at Tai O\n        • Experience fisherfolk life in Tai O fishing village",
    1,
    [{ url: "https://picsum.photos/200/300" }],
    [{ category: "Art" }, { category: "Culture" }, { category: "Food" }],
    [
      {
        id: 1,
        user_id: 1,
        body: "comment1",
        user_name: "Edwin123",
        blog_id: 1,
      },
      {
        id: 1,
        user_id: 1,
        body: "comment1",
        user_name: "Edwin123",
        blog_id: 1,
      },
    ],
    "Edwin123",
    "Art Lane",
    [{ id: 1, user_id: 1 }]
  ),
];
