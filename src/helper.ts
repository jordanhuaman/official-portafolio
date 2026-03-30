export interface IProyect {
  id: number
  src: string
  title: string
  description: string
  stack: string[],
  finished: boolean,
  github: string,
}

const proyects: Array<IProyect> = [
  {
    id: 1,
    src: "/proyects/grocery.png",
    description: "A application Full Stack using Expo and Neon Serverless, where you can create an account and save your tasks, you can also update and delete them",
    title: "Expo Grocery",
    github: "",
    finished: true,
    stack: ["React-Native", "Expo", "Clerk Auth", "Neon Serverless"]
  },
  {
    id: 2,
    src: "/imagenes/todo-no.png",
    description: "Java Todo list best practices, using DDD, Microservices, Cloud, CQRS and Event Driver Architecture, the frontend is made with React",
    title: "Todo List",
    github: "https://github.com/jordanhuaman/todo-app",
    finished: false,
    stack: ["Java", "DDD", "Microservices", "Cloud", "CQRS", "Event Driver Architecture", "React", "React Native"]
  }
]

export default proyects