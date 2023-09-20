"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[5833],{

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

/***/ 85833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateActionEE: () => (/* binding */ CreateActionEE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11047);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84495);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52624);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29728);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51277);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14293);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86896);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7761);







const CreateActionEE = ({ onClick }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
  const {
    license: { permittedSeats, shouldStopCreate },
    isError,
    isLoading
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useLicenseLimits */ .q5)();
  if (isError || isLoading) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Flex */ .k, { gap: 2 }, !lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(permittedSeats) && shouldStopCreate && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_5__/* .Tooltip */ .u,
    {
      description: formatMessage({
        id: "Settings.application.admin-seats.at-limit-tooltip",
        defaultMessage: "At limit: add seats to invite more users"
      }),
      position: "left"
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .Icon */ .J,
      {
        width: `${14 / 16}rem`,
        height: `${14 / 16}rem`,
        color: "danger500",
        as: _strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
      }
    )
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z,
    {
      "data-testid": "create-user-button",
      onClick,
      startIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, null),
      size: "S",
      disabled: shouldStopCreate
    },
    formatMessage({
      id: "Settings.permissions.users.create",
      defaultMessage: "Invite new user"
    })
  ));
};
CreateActionEE.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func).isRequired
};


/***/ })

}]);