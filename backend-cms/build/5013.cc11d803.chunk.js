"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[5013],{

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

/***/ 65013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminSeatInfoEE: () => (/* binding */ AdminSeatInfoEE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67819);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75515);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11047);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(84495);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(52624);
/* harmony import */ var _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36182);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72848);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51277);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17772);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86896);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86706);
/* harmony import */ var _admin_src_pages_App_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36364);
/* harmony import */ var _hooks_useLicenseLimits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71926);









const BILLING_STRAPI_CLOUD_URL = "https://cloud.strapi.io/profile/billing";
const BILLING_SELF_HOSTED_URL = "https://strapi.io/billing/request-seats";
const AdminSeatInfoEE = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
  const permissions = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(_admin_src_pages_App_selectors__WEBPACK_IMPORTED_MODULE_3__/* .selectAdminPermissions */ ._);
  const {
    isLoading: isRBACLoading,
    allowedActions: { canRead, canCreate, canUpdate, canDelete }
  } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .useRBAC */ .ss)(permissions.settings.users);
  const {
    license: { licenseLimitStatus, enforcementUserCount, permittedSeats, isHostedOnStrapiCloud },
    isError,
    isLoading: isLicenseLoading
  } = (0,_hooks_useLicenseLimits__WEBPACK_IMPORTED_MODULE_4__/* .useLicenseLimits */ .q)({
    // TODO: this creates a waterfall which we should avoid to render earlier, but for that
    // we will have to move away from data-fetching hooks to query functions.
    // Short-term we could at least implement a loader, for the user to have visual feedback
    // in case the requests take a while
    enabled: !isRBACLoading && canRead && canCreate && canUpdate && canDelete
  });
  const isLoading = isRBACLoading || isLicenseLoading;
  if (isError || isLoading || !permittedSeats) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_6__/* .GridItem */ .P, { col: 6, s: 12 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({
    id: "Settings.application.admin-seats",
    defaultMessage: "Admin seats"
  })), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .k, { gap: 2 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .k, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .Z, { as: "p" }, formatMessage(
    {
      id: "Settings.application.ee.admin-seats.count",
      defaultMessage: "<text>{enforcementUserCount}</text>/{permittedSeats}"
    },
    {
      permittedSeats,
      enforcementUserCount,
      // eslint-disable-next-line react/no-unstable-nested-components
      text: (chunks) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .Z,
        {
          fontWeight: "semiBold",
          textColor: enforcementUserCount > permittedSeats ? "danger500" : null
        },
        chunks
      )
    }
  ))), licenseLimitStatus === "OVER_LIMIT" && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system__WEBPACK_IMPORTED_MODULE_9__/* .Tooltip */ .u,
    {
      description: formatMessage({
        id: "Settings.application.ee.admin-seats.at-limit-tooltip",
        defaultMessage: "At limit: add seats to invite more users"
      })
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_10__/* .Icon */ .J,
      {
        width: `${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(14)}rem`,
        height: `${(0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__/* .pxToRem */ .Q1)(14)}rem`,
        color: "danger500",
        as: _strapi_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
      }
    )
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system_v2__WEBPACK_IMPORTED_MODULE_12__/* .Link */ .r,
    {
      href: isHostedOnStrapiCloud ? BILLING_STRAPI_CLOUD_URL : BILLING_SELF_HOSTED_URL,
      isExternal: true,
      endIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, null)
    },
    formatMessage(
      {
        id: "Settings.application.ee.admin-seats.add-seats",
        defaultMessage: "{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"
      },
      { isHostedOnStrapiCloud }
    )
  ));
};


/***/ })

}]);