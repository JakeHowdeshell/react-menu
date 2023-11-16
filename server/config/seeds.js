const db = require("./connection");
const { User, Meal, Category } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Category", "categories");
  await cleanDB("Meal", "meal");
  await cleanDB("User", "users");

  const categories = await Category.insertMany([
    { name: "Breakfast" },
    { name: "Lunch" },
    { name: "Dinner" },
  ]);

  console.log("categories seeded");

  const meals = await Meal.insertMany([
    {
      name: "Eggs-traordinary Fiesta Taco",
      description:
        "A festive blend of scrambled eggs, chorizo, and melted cheese, all wrapped up in a warm tortilla. Served with a side of salsa and joy.",
      image: "",
      category: categories[0]._id,
      price: 8.99,
    },
    {
      name: "Sunrise Salsa Supreme",
      description:
        "Start your day with a bang! This taco features sunny-side-up eggs, crispy bacon, avocado, and a zesty tomato salsa.",
      image: "",
      category: categories[0]._id,
      price: 9.49,
    },
    {
      name: "Ham-azing Breakfast Bliss",
      category: categories[0]._id,
      description:
        "Delight in the harmony of ham, fluffy scrambled eggs, and cheddar cheese, drizzled with a maple-infused glaze for that touch of sweetness.",
      image: "",
      price: 7.99,
    },
    {
      name: 'Cheese "n" Chive Morning Delight',
      category: categories[0]._id,
      description:
        "Dive into a blend of creamy scrambled eggs, shredded cheese, and fresh chives, all hugged by a soft tortilla. A classic twist on breakfast happiness!",
      image: "",
      price: 8.29,
    },
    {
      name: "Avocado Sunrise Sensation",
      category: categories[0]._id,
      description:
        "Healthy meets hearty with this taco featuring avocado slices, poached eggs, and a sprinkle of feta cheese. A burst of freshness in every bite!",
      image: "",
      price: 9.99,
    },
    {
      name: "Sausage Serenade Supreme",
      category: categories[0]._id,
      description:
        "Let the sausages sing in harmony with scrambled eggs, peppers, and onions, creating a symphony of flavors that will make your taste buds dance.",
      image: "",
      price: 8.79,
    },
    {
      name: "Veggie Victory Delight",
      category: categories[0]._id,
      description:
        "A taco for champions! Packed with sautéed veggies, scrambled tofu, and a dollop of guacamole. A triumph of taste for your breakfast table.",
      image: "",
      price: 8.49,
    },
    {
      name: "Bountiful Bean Fiesta",
      category: categories[0]._id,
      description:
        "For our vegetarian aficionados! Black beans, scrambled eggs, and Monterey Jack cheese combine in a fiesta of flavors that will keep you fueled all day.",
      image: "",
      price: 7.99,
    },
    {
      name: "Bacon Bonanza Breakfast Bomb",
      category: categories[0]._id,
      description:
        "Brace yourself for the bacon explosion! Crispy bacon, fluffy eggs, and a dash of hot sauce, all nestled in a tortilla. It's a flavor bomb you won't want to miss.",
      image: "",
      price: 9.29,
    },
    {
      name: "Cinnamon Swirl Morning Delight",
      category: categories[0]._id,
      description:
        "A sweet twist on tradition! Indulge in the goodness of cinnamon-spiced apples, cream cheese, and a drizzle of honey, all wrapped up in a warm tortilla.",
      image: "",
      price: 8.99,
    },
    {
      name: "Salsa-ry Enchiladas",
      category: categories[1]._id,
      description: "These enchiladas bring the heat with a spicy salsa twist.",
      image: "",
      price: 12.99,
    },
    {
      name: "Guaca-Molé Burgers",
      category: categories[1]._id,
      description:
        "A burger with a guacamole infusion, guaranteed to make your taste buds do the salsa.",
      image: "",
      price: 10.99,
    },
    {
      name: "Quesa-Dilla Delight",
      category: categories[1]._id,
      description:
        "A delightful quesadilla filled with a cheesy surprise in every bite",
      image: "",
      price: 9.99,
    },
    {
      name: "Taco Bout Delicious Tamales",
      category: categories[1]._id,
      description: `These tamales are so good, you will be saying, "Let's taco 'bout it!".`,
      image: "",
      price: 8.99,
    },
    {
      name: "Cilantro Cremosa Chicken",
      category: categories[1]._id,
      description:
        "ender chicken coated in a cilantro-infused creamy sauce, a flavor fiesta!",
      image: "",
      price: 13.99,
    },
    {
      name: "Burrito Brilliance",
      category: categories[1]._id,
      description:
        "A brilliant burrito bursting with beans, rice, and savory goodness.",
      image: "",
      price: 10.99,
    },
    {
      name: "Fajita Fiesta Fries",
      category: categories[1]._id,
      description:
        "Fajita-spiced fries that turn your ordinary side into a flavor fiesta.",
      image: "",
      price: 8.99,
    },
    {
      name: "Chili Con Carnival Cornbread",
      category: categories[1]._id,
      description:
        "Cornbread with a carnival of chili flavors, a spicy and sweet sensation.",
      image: "",
      price: 5.99,
    },
    {
      name: "Tortilla Twilight Tostadas",
      category: categories[1]._id,
      description:
        "Tostadas so good, they'll have you dreaming of a tortilla twilight.",
      image: "",
      price: 9.99,
    },
    {
      name: "Habanero Heatwave Nachos",
      category: categories[1]._id,
      description:
        "Nachos with a habanero kick, a heatwave of flavor in every cheesy bite.",
      image: "",
      price: 12.99,
    },
    {
      name: "Carnitas Crunchwrap Supreme",
      category: categories[2]._id,
      description:
        "A crunchy twist on the classic with carnitas, veggies, and supreme satisfaction.",
      image: "",
      price: 11.49,
    },
    {
      name: "Sizzlin' Salsa Verde Shrimp",
      category: categories[2]._id,
      description:
        "Shrimp cooked to perfection in a sizzling salsa verde, a seafood sensation.",
      image: "",
      price: 9.99,
    },
    {
      name: "Macho Mango Queso Quesadillas",
      category: categories[2]._id,
      description:
        "Quesadillas with a macho mango twist, combining sweet and savory in every bite.",
      image: "",
      price: 10.99,
    },
    {
      name: "Tango de Pollo Tacos",
      category: categories[2]._id,
      description:
        "These chicken tacos will make your taste buds dance the tango.",
      image: "",
      price: 8.99,
    },
    {
      name: "Tamale Twist Tofu Bowl",
      category: categories[2]._id,
      description:
        "A tantalizing twist on tamales, served in a bowl with savory tofu.",
      image: "",
      price: 12.99,
    },
    {
      name: "Adobo Avocado Al Pastor",
      category: categories[2]._id,
      description:
        "Avocado meets al pastor in an adobo adventure, a match made in Mexican food heaven.",
      image: "",
      price: 13.99,
    },
    {
      name: "Jalapeño Jamboree Jambalaya",
      category: categories[2]._id,
      description:
        "A jambalaya with a jalapeño jamboree, a spicy celebration of flavors.",
      image: "",
      price: 9.99,
    },
    {
      name: "Sopes Supreme",
      category: categories[2]._id,
      description:
        "Sopes loaded with supreme toppings, a taste of Mexican street food heaven.",
      image: "",
      price: 7.99,
    },
    {
      name: "Crispy Churro Chimichangas",
      category: categories[2]._id,
      description:
        "A crispy churro twist on the classic chimichanga, a dessert lover's dream",
      image: "",
      price: 11.99,
    },
    {
      name: "Sour Cream Serenade Sopapillas",
      category: categories[2]._id,
      description:
        "Sopapillas serenaded with a dollop of sour cream, a sweet and creamy symphony.",
      image: "",
      price: 6.99,
    },
  ]);

  console.log("meals seeded");

  await User.create({
    firstName: "Kenney",
    lastName: "Zhang",
    email: "kenny.zhang12138@gmail.com",
    password: "password12345",
    phoneNumber: 832 - 444 - 5555,
    orders: [
      {
        meals: [meals[0]._id, meals[3]._id, meals[25]._id],
      },
    ],
  });

  await User.create({
    firstName: "Jake",
    lastName: "Howdeshell",
    email: "jakehowdy@gmail.com",
    password: "password12345",
    phoneNumber: 832 - 555 - 5555,
  });

  await User.create({
    firstName: "Chase ",
    lastName: "Ostien",
    email: "chase.ostien@gmail.com",
    password: "password12345",
    phoneNumber: 832 - 666 - 5555,
  });

  await User.create({
    firstName: "Richard",
    lastName: "Warden",
    email: "richard.warden@gmail.com",
    password: "password12345",
    phoneNumber: 832 - 666 - 5555,
  });

  console.log("users seeded");

  process.exit();
});
