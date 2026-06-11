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
export const ProgramPartsFragmentDoc = gql`
    fragment ProgramParts on Program {
  __typename
  title
  shortDescription
  duration
  tag
  tags
  ctaLabel
  heroBody
  benefitsTitle
  benefits
  howItWorks
  subPrograms {
    __typename
    name
    tagline
    category
    audience
    description
    ctaLabel
  }
  faqs {
    __typename
    question
    answer
  }
  image
  imageAlt
  imagePosition
  metaTitle
  metaDescription
}
    `;
export const SettingsPartsFragmentDoc = gql`
    fragment SettingsParts on Settings {
  __typename
  tagline
  email
  phoneDisplay
  address {
    __typename
    street
    city
    region
    postalCode
    country
  }
  hours {
    __typename
    weekdays {
      __typename
      label
      closed
      sessions {
        __typename
        open
        close
      }
    }
    saturday {
      __typename
      label
      closed
      sessions {
        __typename
        open
        close
      }
    }
    sunday {
      __typename
      label
      closed
      sessions {
        __typename
        open
        close
      }
    }
  }
  social {
    __typename
    instagram
    instagramHandle
  }
  ctaBand {
    __typename
    hook
    body
    cta
  }
}
    `;
export const AboutPartsFragmentDoc = gql`
    fragment AboutParts on About {
  __typename
  meta {
    __typename
    title
    description
  }
  hero {
    __typename
    eyebrow
    headlineLine1Orange
    headlineLine1Plain
    breadcrumbHome
    breadcrumbCurrent
  }
  story {
    __typename
    image
    imageAlt
    heading
    paragraph1Prefix
    paragraph1StrongWord
    paragraph1Suffix
    paragraph1Em1
    paragraph1Em2
    paragraph1Rest
    paragraph2
    paragraph3
    paragraph4Strong
  }
  cta {
    __typename
    eyebrow
    headlineLine1
    headlineLine2Black
    body
    quote
    quoteAuthor
    ctaLabel
    ctaHref
  }
  programs {
    __typename
    eyebrow
    heading
  }
  faq {
    __typename
    image
    imageAlt
    helperText
    items {
      __typename
      question
      answer
    }
  }
}
    `;
export const ContactPartsFragmentDoc = gql`
    fragment ContactParts on Contact {
  __typename
  hero {
    __typename
    breadcrumbHome
    breadcrumbCurrent
    headlineLine1
    headlineLine2
    subline
  }
  formSection {
    __typename
    heading
    labelName
    placeholderName
    labelEmail
    placeholderEmail
    labelPhone
    placeholderPhone
    labelMessage
    placeholderMessage
    submitLabel
    submittingLabel
    successHeading
    successMessage
  }
  infoSection {
    __typename
    heading
    labelAddress
    labelPhone
    labelEmail
    labelHours
    labelInstagram
    mapHeading
  }
  faq {
    __typename
    image
    imageAlt
    helperText
    items {
      __typename
      question
      answer
    }
  }
}
    `;
export const PersonalTrainingPartsFragmentDoc = gql`
    fragment PersonalTrainingParts on PersonalTraining {
  __typename
  meta {
    __typename
    title
    description
    canonical
  }
  breadcrumb {
    __typename
    parent
    current
  }
  hero {
    __typename
    eyebrow
    headlineLine1
    headlineLine2
    body
  }
  whatYouGet {
    __typename
    eyebrow
    headlineLine1
    body
    items
  }
  formats {
    __typename
    eyebrow
    headline
    ctaLabel
    items {
      __typename
      name
      tagline
      body
      href
    }
  }
  whoItsFor {
    __typename
    eyebrow
    headline
    paragraphs
  }
  cta {
    __typename
    eyebrow
    headline
    body
    contactLabel
    contactHref
    addressLine
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
export const ProgramDocument = gql`
    query program($relativePath: String!) {
  program(relativePath: $relativePath) {
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
    ...ProgramParts
  }
}
    ${ProgramPartsFragmentDoc}`;
export const ProgramConnectionDocument = gql`
    query programConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProgramFilter) {
  programConnection(
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
        ...ProgramParts
      }
    }
  }
}
    ${ProgramPartsFragmentDoc}`;
export const SettingsDocument = gql`
    query settings($relativePath: String!) {
  settings(relativePath: $relativePath) {
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
    ...SettingsParts
  }
}
    ${SettingsPartsFragmentDoc}`;
export const SettingsConnectionDocument = gql`
    query settingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SettingsFilter) {
  settingsConnection(
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
        ...SettingsParts
      }
    }
  }
}
    ${SettingsPartsFragmentDoc}`;
export const AboutDocument = gql`
    query about($relativePath: String!) {
  about(relativePath: $relativePath) {
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
    ...AboutParts
  }
}
    ${AboutPartsFragmentDoc}`;
export const AboutConnectionDocument = gql`
    query aboutConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AboutFilter) {
  aboutConnection(
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
        ...AboutParts
      }
    }
  }
}
    ${AboutPartsFragmentDoc}`;
export const ContactDocument = gql`
    query contact($relativePath: String!) {
  contact(relativePath: $relativePath) {
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
    ...ContactParts
  }
}
    ${ContactPartsFragmentDoc}`;
export const ContactConnectionDocument = gql`
    query contactConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactFilter) {
  contactConnection(
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
        ...ContactParts
      }
    }
  }
}
    ${ContactPartsFragmentDoc}`;
export const PersonalTrainingDocument = gql`
    query personalTraining($relativePath: String!) {
  personalTraining(relativePath: $relativePath) {
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
    ...PersonalTrainingParts
  }
}
    ${PersonalTrainingPartsFragmentDoc}`;
export const PersonalTrainingConnectionDocument = gql`
    query personalTrainingConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PersonalTrainingFilter) {
  personalTrainingConnection(
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
        ...PersonalTrainingParts
      }
    }
  }
}
    ${PersonalTrainingPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    home(variables, options) {
      return requester(HomeDocument, variables, options);
    },
    homeConnection(variables, options) {
      return requester(HomeConnectionDocument, variables, options);
    },
    program(variables, options) {
      return requester(ProgramDocument, variables, options);
    },
    programConnection(variables, options) {
      return requester(ProgramConnectionDocument, variables, options);
    },
    settings(variables, options) {
      return requester(SettingsDocument, variables, options);
    },
    settingsConnection(variables, options) {
      return requester(SettingsConnectionDocument, variables, options);
    },
    about(variables, options) {
      return requester(AboutDocument, variables, options);
    },
    aboutConnection(variables, options) {
      return requester(AboutConnectionDocument, variables, options);
    },
    contact(variables, options) {
      return requester(ContactDocument, variables, options);
    },
    contactConnection(variables, options) {
      return requester(ContactConnectionDocument, variables, options);
    },
    personalTraining(variables, options) {
      return requester(PersonalTrainingDocument, variables, options);
    },
    personalTrainingConnection(variables, options) {
      return requester(PersonalTrainingConnectionDocument, variables, options);
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
