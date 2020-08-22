import Post from "../models/Post";
import PostDetails from "../models/PostDetails";
import Location from "../models/Location";
import Category from "../models/Category";

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
        id: 2,
        user_id: 1,
        body: "comment2",
        ref_comment_id: 1,
        user_name: "Edwin123",
        blog_id: 1,
      },
      {
        id: 3,
        user_id: 1,
        body: "comment3",
        ref_comment_id: 1,
        user_name: "Edwin123",
        blog_id: 1,
      },
    ],
    "Edwin123",
    "Art Lane",
    [{ id: 1, user_id: 1 }]
  ),
  new PostDetails(
    2,
    "Cruise Tour",

    "\n        Pre-dinner Sunset Cruise\n        • Watch the world's greatest view turns into the world's greatest light show\n        \n        Harbour Night Cruise\n        • Relax and enjoy the world famous glittering harbour views by night\n        \n        Symphony of Lights Cruise\n        • The cruise climatises as the Symphony of Lights show brightens up the skyline",
    2,
    [],
    [
      {
        category: "Outdoor",
      },
      {
        category: "Sports",
      },
    ],
    [],
    "Pullip123",
    "Western District Waterfront Pier",
    [
      {
        id: 2,
        user_id: 1,
      },
    ]
  ),
];

export const LOCATIONS = [
  new Location(1, "Art Lane", "上環壁畫街", 22.287205, 114.141426, "Lion Rock"),
  new Location(
    2,
    "Western District Waterfront Pier",
    "西環貨運碼頭",
    22.288322,
    114.13294,
    "Lion Rock"
  ),
  new Location(3, "Lion Rock", "獅子山", 22.3521, 114.17769, "Lion Rock"),
];

export const CATEGORIES = [
  new Category(1, "Art"),

  new Category(2, "Culture"),

  new Category(3, "Food"),

  new Category(4, "Outdoor"),

  new Category(5, "Sports"),

  new Category(6, "Shopping"),

  new Category(7, "Nature"),
];
