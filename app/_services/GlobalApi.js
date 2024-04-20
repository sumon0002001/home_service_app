const { gql, default: request } = require("graphql-request");

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_MASTER_URL_KEY +
  "/master";

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const response = await request(MASTER_URL, query);
  return response;
};

const getAllBusinessDetails = async () => {
  const query = gql`
    query BusinessList {
      businessLists {
        about
        address
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;

  const response = await request(MASTER_URL, query);
  return response;
};

const getBusinessByCategory = async (category) => {
  const query =
    gql`
    query MyQuery {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;

  const response = await request(MASTER_URL, query);
  return response;
};

const getBusinessById = async (id) => {
  const query =
    gql`
  query GetBusinessById {
  businessList(where: {id: "` +
    id +
    `"}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}
  `;
  const response = await request(MASTER_URL, query);
  return response;
};

export default {
  getCategory,
  getAllBusinessDetails,
  getBusinessByCategory,
  getBusinessById,
};
