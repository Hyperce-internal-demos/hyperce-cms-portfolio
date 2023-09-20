"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[6394],{

/***/ 7761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pl: () => (/* reexport */ hooks_useAuthProviders),
  aY: () => (/* reexport */ hooks_useLicenseLimitNotification),
  q5: () => (/* reexport */ useLicenseLimits/* useLicenseLimits */.q)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/strapi/node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 65 modules
var helper_plugin_esm = __webpack_require__(72848);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useAuthProviders/reducer.js

const initialState = {
  data: [],
  isLoading: true
};
const reducer = (state, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA_SUCCEEDED": {
      draftState.data = action.data;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useAuthProviders_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useAuthProviders/index.js



const useAuthProviders = ({ ssoEnabled }) => {
  const [state, dispatch] = (0,react.useReducer)(useAuthProviders_reducer, initialState);
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const { get } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  (0,react.useEffect)(() => {
    const fetchAuthProviders = async () => {
      try {
        if (!ssoEnabled) {
          dispatch({
            type: "GET_DATA_SUCCEEDED",
            data: []
          });
          return;
        }
        const { data } = await get("/admin/providers");
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data
        });
      } catch (err) {
        console.error(err);
        dispatch({
          type: "GET_DATA_ERROR"
        });
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    };
    fetchAuthProviders();
  }, [get, ssoEnabled, toggleNotification]);
  return state;
};
/* harmony default export */ const hooks_useAuthProviders = (useAuthProviders);

// EXTERNAL MODULE: ./node_modules/lodash/isNil.js
var isNil = __webpack_require__(14293);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./.cache/ee/admin/hooks/useLicenseLimits/index.js + 1 modules
var useLicenseLimits = __webpack_require__(71926);
;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useLicenseLimitNotification/index.js






const STORAGE_KEY_PREFIX = "strapi-notification-seat-limit";
const BILLING_STRAPI_CLOUD_URL = "https://cloud.strapi.io/profile/billing";
const BILLING_SELF_HOSTED_URL = "https://strapi.io/billing/request-seats";
const useLicenseLimitNotification = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  let { license, isError, isLoading } = (0,useLicenseLimits/* useLicenseLimits */.q)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const { enforcementUserCount, permittedSeats, licenseLimitStatus, isHostedOnStrapiCloud } = license;
  (0,react.useEffect)(() => {
    if (isError || isLoading) {
      return;
    }
    const shouldDisplayNotification = !isNil_default()(permittedSeats) && !window.sessionStorage.getItem(`${STORAGE_KEY_PREFIX}-${pathname}`) && (licenseLimitStatus === "AT_LIMIT" || licenseLimitStatus === "OVER_LIMIT");
    let notificationType;
    if (licenseLimitStatus === "OVER_LIMIT") {
      notificationType = "warning";
    } else if (licenseLimitStatus === "AT_LIMIT") {
      notificationType = "softWarning";
    }
    if (shouldDisplayNotification) {
      toggleNotification({
        type: notificationType,
        message: formatMessage(
          {
            id: "notification.ee.warning.over-.message",
            defaultMessage: "Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."
          },
          { licenseLimitStatus }
        ),
        title: formatMessage(
          {
            id: "notification.ee.warning.at-seat-limit.title",
            defaultMessage: "{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"
          },
          {
            licenseLimitStatus,
            enforcementUserCount,
            permittedSeats
          }
        ),
        link: {
          url: isHostedOnStrapiCloud ? BILLING_STRAPI_CLOUD_URL : BILLING_SELF_HOSTED_URL,
          label: formatMessage(
            {
              id: "notification.ee.warning.seat-limit.link",
              defaultMessage: "{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"
            },
            { isHostedOnStrapiCloud }
          )
        },
        blockTransition: true,
        onClose() {
          window.sessionStorage.setItem(`${STORAGE_KEY_PREFIX}-${pathname}`, true);
        }
      });
    }
  }, [
    toggleNotification,
    license,
    pathname,
    formatMessage,
    isLoading,
    permittedSeats,
    licenseLimitStatus,
    enforcementUserCount,
    isHostedOnStrapiCloud,
    isError
  ]);
};
/* harmony default export */ const hooks_useLicenseLimitNotification = (useLicenseLimitNotification);

;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/index.js





/***/ }),

/***/ 71926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* reexport */ useLicenseLimits)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/strapi/node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 65 modules
var helper_plugin_esm = __webpack_require__(72848);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useLicenseLimits/useLicenseLimits.js



function useLicenseLimits({ enabled } = { enabled: true }) {
  const { get } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  const { data, isError, isLoading } = (0,es.useQuery)(
    ["ee", "license-limit-info"],
    async () => {
      const {
        data: { data: data2 }
      } = await get("/admin/license-limit-information");
      return data2;
    },
    {
      enabled
    }
  );
  const license = data ?? {};
  const getFeature = react.useCallback(
    (name) => {
      const feature = (license?.features ?? []).find((feature2) => feature2.name === name);
      return feature?.options ?? {};
    },
    [license?.features]
  );
  return { license, getFeature, isError, isLoading };
}

;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useLicenseLimits/index.js



/***/ }),

/***/ 76394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginEE: () => (/* binding */ LoginEE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70004);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41580);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11047);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75515);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86896);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88972);
/* harmony import */ var _admin_src_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50745);
/* harmony import */ var _admin_src_pages_AuthPage_components_Login_BaseLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31640);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7761);
/* harmony import */ var _Providers_SSOProviders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80090);









const DividerFull = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Divider */ .i))`
  flex: 1;
`;
const LoginEE = (loginProps) => {
  const ssoEnabled = window.strapi.features.isEnabled(window.strapi.features.SSO);
  const { isLoading, data: providers } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAuthProviders */ .pl)({ ssoEnabled });
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
  if (!ssoEnabled || !isLoading && providers.length === 0) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_AuthPage_components_Login_BaseLogin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { ...loginProps }));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_AuthPage_components_Login_BaseLogin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, { ...loginProps }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .x, { paddingTop: 7 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .k, { direction: "column", alignItems: "stretch", gap: 7 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Flex */ .k, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DividerFull, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Box */ .x, { paddingLeft: 3, paddingRight: 3 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Typography */ .Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "Auth.login.sso.divider" }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DividerFull, null)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Providers_SSOProviders__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, { providers, displayAllProviders: false })))));
};
LoginEE.defaultProps = {
  onSubmit: (e) => e.preventDefault(),
  requestError: null
};
LoginEE.propTypes = {
  formErrors: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object).isRequired,
  modifiedData: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func).isRequired,
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func),
  requestError: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)
};


/***/ }),

/***/ 80090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11047);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84495);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75515);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11276);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67819);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73727);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88972);






const SSOButton = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.a`
  width: ${136 / 16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48 / 16}rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral150};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({ theme }) => theme.colors.neutral600};
`;
const SSOProvidersWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k))`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({ theme }) => theme.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({ theme }) => theme.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({ theme }) => theme.spaces[2]};
  }
`;
const SSOProviderButton = ({ provider }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Tooltip */ .u, { label: provider.displayName }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOButton, { href: `${window.strapi.backendURL}/admin/connect/${provider.uid}` }, provider.icon ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: provider.icon, "aria-hidden": true, alt: "", height: "32px" }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, null, provider.displayName)));
};
SSOProviderButton.propTypes = {
  provider: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    displayName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,
    uid: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired
  }).isRequired
};
const SSOProviders = ({ providers, displayAllProviders }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  if (displayAllProviders) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .r, { gap: 4 }, providers.map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .P, { key: provider.uid, col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { provider }))));
  }
  if (providers.length > 2 && !displayAllProviders) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .r, { gap: 4 }, providers.slice(0, 2).map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .P, { key: provider.uid, col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { provider }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .P, { col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Tooltip */ .u,
      {
        label: formatMessage({
          id: "global.see-more"
        })
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOButton, { as: react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .rU, to: "/auth/providers" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "aria-hidden": true }, "\u2022\u2022\u2022"))
    )));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProvidersWrapper, { justifyContent: "center" }, providers.map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { key: provider.uid, provider })));
};
SSOProviders.defaultProps = {
  displayAllProviders: true
};
SSOProviders.propTypes = {
  providers: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)).isRequired,
  displayAllProviders: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SSOProviders);


/***/ })

}]);