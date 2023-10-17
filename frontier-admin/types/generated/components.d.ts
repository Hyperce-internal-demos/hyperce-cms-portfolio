import type { Schema, Attribute } from '@strapi/strapi';

export interface ActionsButton extends Schema.Component {
  collectionName: 'components_actions_buttons';
  info: {
    displayName: 'Button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    placeholder: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Button'>;
    redirect_link: Attribute.String;
    phrase: Attribute.String;
  };
}

export interface ComponentsCardsFeatured extends Schema.Component {
  collectionName: 'components_components_cards_featureds';
  info: {
    displayName: 'cards_featured';
    icon: 'connector';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    button: Attribute.Component<'actions.button'>;
    icon: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::heroicons-field.icon-picker'>;
  };
}

export interface ComponentsFaqList extends Schema.Component {
  collectionName: 'components_components_faq_lists';
  info: {
    displayName: 'faq-list';
    icon: 'bulletList';
  };
  attributes: {
    question: Attribute.String & Attribute.Required;
    answer: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsFaq extends Schema.Component {
  collectionName: 'components_components_faqs';
  info: {
    displayName: 'Faq';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Frequently asked questions'>;
    question_answer: Attribute.Component<'components.faq-list', true>;
    description: Attribute.String &
      Attribute.DefaultTo<'Answers to the most frequently asked questions.'>;
    component_type: Attribute.Enumeration<['Faq']> &
      Attribute.Required &
      Attribute.DefaultTo<'Faq'>;
  };
}

export interface ComponentsForm extends Schema.Component {
  collectionName: 'components_footer_forms';
  info: {
    displayName: 'Form';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Stay up to date'>;
    description: Attribute.String & Attribute.Required;
    receiver_mail: Attribute.Email & Attribute.Required;
  };
}

export interface ComponentsPricingCard extends Schema.Component {
  collectionName: 'components_components_pricing_cards';
  info: {
    displayName: 'Pricing Card';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Starter'>;
    phrase: Attribute.String & Attribute.DefaultTo<'Most popular'>;
    pricing: Attribute.String & Attribute.Required & Attribute.DefaultTo<'$0'>;
    description: Attribute.String;
    features_list: Attribute.JSON;
    button: Attribute.Component<'actions.button'>;
  };
}

export interface ComponentsStatisticCard extends Schema.Component {
  collectionName: 'components_components_statistic_cards';
  info: {
    displayName: 'Statistic_card';
    icon: 'apps';
    description: '';
  };
  attributes: {
    data_heading: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsTestimonial extends Schema.Component {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'quote';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    testimonial: Attribute.Text & Attribute.Required;
    author: Attribute.Relation<
      'components.testimonial',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface FooterFooter extends Schema.Component {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer-columns';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    column_heading: Attribute.String & Attribute.Required;
    footer_items: Attribute.Component<'actions.button', true> &
      Attribute.Required;
  };
}

export interface NavbarNavbarDropdown extends Schema.Component {
  collectionName: 'components_components_navbar_dropdowns';
  info: {
    displayName: 'navbar-dropdown';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    icon: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::heroicons-field.icon-picker'>;
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface NavbarNavbar extends Schema.Component {
  collectionName: 'components_components_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'stack';
    description: '';
  };
  attributes: {
    navbar_items: Attribute.Component<'actions.button', true> &
      Attribute.Required;
    navbar_menus: Attribute.Component<'navbar.navbar-dropdown', true>;
    callback_button: Attribute.Component<'actions.button'>;
  };
}

export interface SectionsClientCallback extends Schema.Component {
  collectionName: 'components_sections_client_callbacks';
  info: {
    displayName: 'Client_Callback';
    icon: 'phone';
    description: '';
  };
  attributes: {
    mini_caption: Attribute.String &
      Attribute.DefaultTo<'Small business solutions'>;
    title: Attribute.String & Attribute.Required;
    button: Attribute.Component<'actions.button'>;
    existing_user_heading: Attribute.String &
      Attribute.DefaultTo<'Trust pilot'>;
    existing_user_description: Attribute.String &
      Attribute.DefaultTo<'Rated best over 37k reviews'>;
    existing_users: Attribute.Relation<
      'sections.client-callback',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    component_type: Attribute.Enumeration<
      [
        'Hero',
        'FeatureCards',
        'FeaturesGeneral',
        'Clients',
        'Testimonials',
        'Blogs',
        'ClientCallback'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'ClientCallback'>;
  };
}

export interface SectionsClients extends Schema.Component {
  collectionName: 'components_sections_clients';
  info: {
    displayName: 'Clients';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    clients_logo: Attribute.Media & Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    component_type: Attribute.Enumeration<
      [
        'Hero',
        'FeatureCards',
        'FeaturesGeneral',
        'Clients',
        'Testimonials',
        'Blogs',
        'ClientCallback'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Clients'>;
  };
}

export interface SectionsFeatureCards extends Schema.Component {
  collectionName: 'components_sections_feature_cards';
  info: {
    displayName: 'feature_cards';
    icon: 'brush';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    component_type: Attribute.Enumeration<
      [
        'Hero',
        'FeatureCards',
        'FeaturesGeneral',
        'Clients',
        'Testimonials',
        'Blogs',
        'ClientCallback'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'FeatureCards'>;
    cards: Attribute.Component<'components.cards-featured', true>;
  };
}

export interface SectionsFeaturesGeneral extends Schema.Component {
  collectionName: 'components_sections_features_generals';
  info: {
    displayName: 'Feature_General';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    features_list: Attribute.JSON;
    description: Attribute.String;
    component_type: Attribute.Enumeration<
      [
        'Hero',
        'FeatureCards',
        'FeaturesGeneral',
        'Clients',
        'Testimonials',
        'Blogs',
        'ClientCallback'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'FeaturesGeneral'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    button: Attribute.Component<'actions.button'>;
    media: Attribute.Media;
    component_type: Attribute.Enumeration<
      [
        'Hero',
        'FeatureCards',
        'FeaturesGeneral',
        'Clients',
        'Testimonials',
        'Blogs',
        'ClientCallback'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Hero'>;
  };
}

export interface SectionsStatistics extends Schema.Component {
  collectionName: 'components_sections_statistics';
  info: {
    displayName: 'Testimonials';
    icon: 'book';
    description: '';
  };
  attributes: {
    testimonial: Attribute.Component<'components.testimonial'> &
      Attribute.Required;
    cards: Attribute.Component<'components.statistic-card', true> &
      Attribute.Required;
    component_type: Attribute.Enumeration<
      [
        'Hero',
        'FeatureCards',
        'FeaturesGeneral',
        'Clients',
        'Testimonials',
        'Blogs',
        'ClientCallback'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Testimonials'>;
  };
}

export interface SeoSeoInformations extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'seo-informations';
    icon: 'cast';
    description: '';
  };
  attributes: {
    Socials: Attribute.Component<'seo.socials'>;
    site_information: Attribute.Component<'seo.site-information'>;
  };
}

export interface SeoSiteInformation extends Schema.Component {
  collectionName: 'components_seo_site_informations';
  info: {
    displayName: 'Site_information';
    icon: 'hashtag';
  };
  attributes: {
    site_name: Attribute.String & Attribute.Required;
    language: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'en-US'>;
    author: Attribute.String & Attribute.Required;
    website: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface SeoSocials extends Schema.Component {
  collectionName: 'components_seo_socials';
  info: {
    displayName: 'Socials';
    icon: 'earth';
    description: '';
  };
  attributes: {
    social_icon: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::heroicons-field.icon-picker'>;
    name: Attribute.String & Attribute.Required;
    href: Attribute.String & Attribute.Required;
    link_title: Attribute.String & Attribute.Required;
    active: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'actions.button': ActionsButton;
      'components.cards-featured': ComponentsCardsFeatured;
      'components.faq-list': ComponentsFaqList;
      'components.faq': ComponentsFaq;
      'components.form': ComponentsForm;
      'components.pricing-card': ComponentsPricingCard;
      'components.statistic-card': ComponentsStatisticCard;
      'components.testimonial': ComponentsTestimonial;
      'footer.footer': FooterFooter;
      'navbar.navbar-dropdown': NavbarNavbarDropdown;
      'navbar.navbar': NavbarNavbar;
      'sections.client-callback': SectionsClientCallback;
      'sections.clients': SectionsClients;
      'sections.feature-cards': SectionsFeatureCards;
      'sections.features-general': SectionsFeaturesGeneral;
      'sections.hero': SectionsHero;
      'sections.statistics': SectionsStatistics;
      'seo.seo-informations': SeoSeoInformations;
      'seo.site-information': SeoSiteInformation;
      'seo.socials': SeoSocials;
    }
  }
}
