import { gql } from '@apollo/client';

export const QUERY_MEALS = gql`
  query getMeals($category: ID) {
    meals(category: $category) {
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
  {
    meals {
      _id
      name
      description
      price
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
