type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const Blogs: Blog[] = [
  {
    title: "Entry # 1",
    date: "2025",
    description: "The text of the blog",
    image: "./imports/istockphoto-517188688-612x612.jpg",
    imageAlt: "A picture of a guy on a chair",
    slug: "entry1",
  },
  {
    title: "Entry # 2",
    date: "2024",
    description: "The text of the blog",
    image: "./imports/landscape-with-a-lake-1493481278Ed8.jpg",
    imageAlt: "A picture of a guy on a chair",
    slug: "entry2",
  },
  {
    title: "Entry # 3",
    date: "2023",
    description: "The text of the blog",
    image: "./imports/photo-1506744038136-46273834b3fb.jpg",
    imageAlt: "A picture of a guy on a chair",
    slug: "entry3",
  },
  {
    title: "Entry # 4",
    date: "2022",
    description: "The text of the blog",
    image: "./imports/Yifeng-Ding-1800x1192.avif",
    imageAlt: "A picture of a guy on a chair",
    slug: "entry4",
  },
];
