export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HomePartsFragmentDoc = gql`
    fragment HomeParts on Home {
  __typename
  hero {
    __typename
    headlineLine1
    headlineLine2
    headlineLine3
    subline
    socialProof
    imageDesktop
    imageMobile
    imageAlt
  }
  whatIsEMS {
    __typename
    eyebrow
    headlineLine1
    headlineLine2
    paragraph1
    paragraph2
    paragraph3
    ctaLabel
    image
    imageAlt
    stats {
      __typename
      value
      suffix
      label
    }
  }
  programs {
    __typename
    eyebrow
    headlineLine1
    headlineLine2
    intro1
    intro2
    intro3
  }
  whyMovus {
    __typename
    eyebrow
    headlineLine1
    headlineLine2Prefix
    reasons {
      __typename
      number
      title
      description
    }
  }
  howItWorks {
    __typename
    headlineLine1
    headlineLine2
    headlineLine3
    intro
    steps {
      __typename
      number
      title
      description
      image
    }
  }
  transformations {
    __typename
    eyebrow
    headlineLine1
    headlineLine2
    photos
  }
  community {
    __typename
    eyebrow
    headlinePlain
    headlineAccent
    body
    ctaLabel
    ctaHref
  }
  testimonials {
    __typename
    eyebrow
    headlineWord1
    headlineWord2Accent
    headlineLine2
    items {
      __typename
      quote
      name
      program
    }
  }
  faq {
    __typename
    helperText
    image
    imageAlt
    items {
      __typename
      question
      answer
    }
  }
  contact {
    __typename
    eyebrow
    headlineLine1
    headlineLine2
    body1
    body2
    submitLabel
    successHeading
    successMessage
  }
  instagram {
    __typename
    tickerText
    instagramUrl
    photos {
      __typename
      src
      alt
    }
  }
}
    `;
export const HomeDocument = gql`
    query home($relativePath: String!) {
  home(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeParts
  }
}
    ${HomePartsFragmentDoc}`;
export const HomeConnectionDocument = gql`
    query homeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFilter) {
  homeConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeParts
      }
    }
  }
}
    ${HomePartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    home(variables, options) {
      return requester(HomeDocument, variables, options);
    },
    homeConnection(variables, options) {
      return requester(HomeConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
