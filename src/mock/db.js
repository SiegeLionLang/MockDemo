import Mock from "mockjs";

const data = Mock.mock({
  // 模拟用户数据
  "users|50": [
    {
      "id|+1": 1,
      name: "@name", // 随机生成名字
      age: "@integer(18, 60)", // 随机生成年龄
      email: "@email", // 随机生成邮箱
      address: "@city", // 随机生成城市
    },
  ],
  // 模拟文章数据
  // ｜后面为规则：在数组中，表示生成50个数组项
  "articles|50": [
    {
      "id|+1": 1,
      title: "@sentence(5, 10)", // 随机生成标题
      content: "@paragraph(2, 5)", // 随机生成内容
      author: "@name", // 随机生成作者名字
      "likes|0-100": 1, // 随机生成点赞数
    },
  ],
});

export default () => data;
