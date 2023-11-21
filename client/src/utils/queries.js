import { gql } from "@apollo/client";

export const QUERY_MEALS = gql`
  query meals($name: String) {
    meals(name: $name) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($meals: [ID]!) {
    checkout(meals: $meals) {
      session
    }
  }
`;

export const QUERY_ALL_MEALS = gql`
  query allMeals {
    allMeals {
      _id
      name
      description
      price
      image
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        meals {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;
