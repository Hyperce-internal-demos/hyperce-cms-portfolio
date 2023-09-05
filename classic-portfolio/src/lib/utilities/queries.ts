export const navbar_query = `query {
    navbars(filters: {isFinal: {eq: true}}) {
    data{
        attributes{
        navbar_items{
            placeholder,
            redirect_link,
            phrase
        }
        navbar_menus{
            icon,
            title,
            description
        }
        callback_button{
            placeholder,
            redirect_link,
            phrase
        }
        brand_name,
        navbar_menus_heading
        }
    }
    }
}`;

export const about_query = `query{
    aboutPage(id: 1) {
      data{
        attributes{
          hero {
            id
            title
            description
            button{
              placeholder
              redirect_link
              phrase
            }
            media{
              data{
                attributes{
                  url
                }
              }
            }
          }
          heading
          content
        }
      }
    }
}`;

export const navigation_query = `query {
    navbars(filters: {isFinal: {eq: true}}) {
      data{
        attributes{
          navbar_items{
            placeholder,
            redirect_link,
            phrase
          }
          navbar_menus{
            icon,
            title,
            description
          }
          callback_button{
            placeholder,
            redirect_link,
            phrase
          }
          brand_name,
          navbar_menus_heading
        }
      }
    }
}`;

export const contactPage_query = `query{
    contactPages(filters: {isFinal: {eq: true}}) {
        data{
        attributes{
          isFinal,
          heading,
          description,
          features{
            heading,
            features_list,
            description
          },
          receiver_mail,
          terms_and_conditions{
            placeholder,
            redirect_link,
            phrase
          },
          existing_users{
            data{
              attributes{
                avatar{
                  data{
                    attributes{
                      url,
                      alternativeText
                    }
                  }
                }
                username
              }
            }
          },
          clients{
            heading,
            clients_logo{
              data{
                attributes{
                  url,
                  alternativeText
                }
              }
            }
          }
          
        }
      }
    }
}`;

export const pricingPage_query = `query{
    pricingPages(filters: {isFinal: {eq: true}}) {
        data{
        attributes{
          isFinal,
          card{
            title,
            description,
            phrase,
            pricing,
            features_list,
            button{
              placeholder,
              redirect_link,
              phrase
            },
          },
          sections{
            ...on ComponentComponentsFaq {
              title,
              description
              question_answer {
                question,
                answer
              }
            }
          }
        }
      }
    }
}`;

export const footer_query = `query{
    footers(filters: {isFinal: {eq: true}}) {
          data{
        attributes{
          brand_name,
          brand_description,
          socials{
            href,
            name,
            link_title,
            social_icon
          }
          columns{
            column_heading,
            footer_items{
              placeholder,
              redirect_link,
              phrase
            }
          }
          form {
            title,
            description,
            receiver_mail
          }
        }
      }
    }
}`;

export const landingPage_query = `query {
  landingPages(filters: { isFinal: { eq: true } }) {
    data {
      attributes {
        isFinal
        ... on LandingPage {
          sections {
            ... on ComponentSectionsHero {
              component_type_Hero: component_type
              HeroTitle: title
              HeroDescription: description
              media {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              button {
                placeholder
                redirect_link
                phrase
              }
            }
            ... on ComponentSectionsFeatureCards {
              component_type_FeatureCards: component_type
              FeatureCardsTitle: title
              cards {
                title
                icon
                description
                button {
                  placeholder
                  redirect_link
                  phrase
                }
              }
            }
            ... on ComponentSectionsFeaturesGeneral {
              component_type_FeaturesGeneral: component_type
              heading
              features_list
              FeaturesGeneralDescription: description
            }
            ... on ComponentSectionsClients {
              component_type_Clients: component_type
              ClientsHeading: heading
              clients_logo {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
            ... on ComponentSectionsStatistics {
              component_type_Testimonial: component_type
              StatisticCards: cards{
                data_heading
                description
              }
              testimonial {
                title
                description
                testimonial
                author {
                  data {
                    attributes {
                      name
                      position
                      avatar {
                        data {
                          attributes {
                            url
                            alternativeText
                          }
                        }
                      }
                      email
                    }
                  }
                }
              }
            }
            ... on ComponentSectionsClientCallback {
              component_type_ClientCallback: component_type
              mini_caption
              title
              button {
                placeholder
                redirect_link
                phrase
              }
              existing_user_heading
              existing_user_description
              existing_users {
                data {
                  attributes {
                    username
                    name
                    avatar {
                      data {
                        attributes {
                          name
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;