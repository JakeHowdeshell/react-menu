const typeDefs = `
type Category {
    _id: ID
    name: String
  }

  type Meal {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    meals: [Meal]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    password: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input MealInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
  }

  type Query {
    categories: [Category]
    allMeals: [Meal]
    meals(name: String): [Meal]
    meal(_id: ID!): Meal
    user: User
    order(_id: ID!): Order
    checkout(meals: [MealInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, phoneNumber: String!, password: String!): Auth
    addOrder(meals: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, phoneNumber: String, password: String): User
    updateMeal(_id: ID!, quantity: Int!): Meal
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
