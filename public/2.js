(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Users",
  data: function data() {
    return {
      users: {},
      success: false,
      errors: [],
      form: {
        name: '',
        email: '',
        password: '',
        role: '',
        bio: '',
        photo: ''
      }
    };
  },
  methods: {
    loadUsers: function loadUsers() {
      var _this = this;

      axios.get('api/user').then(function (response) {
        return _this.users = response.data.data;
      })["catch"](function (error) {
        return console.error(error);
      });
    },
    createUser: function createUser() {
      var _this2 = this;

      this.$Progress.start();
      axios.post('api/user', this.form).then(function (response) {
        console.log(response.data.data);
        _this2.errors = [];

        _this2.resetFields();

        _this2.success = true;
        alert('true');

        _this2.$Progress.finish();

        EventBus.$emit('UserCreated'); // $(this.$refs.addNew).modal('hide');

        _this2.$toast.fire({
          type: 'success',
          title: 'User Created successfully!'
        });
      })["catch"](function (error) {
        alert('false');
        _this2.errors = error.response.data.errors;
        _this2.success = false;

        _this2.$Progress.fail();

        _this2.$toast.fire({
          type: 'error',
          title: 'User not Created!'
        });
      }); // $('#addNew').modal('hide');
      // this.$Progress.finish();
    },
    deleteUser: function deleteUser(id) {
      var _this3 = this;

      this.$swal.fire({
        title: 'Are You Sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('api/user/' + id).then(function (response) {
            alert(response);

            _this3.$swal.fire('Deleted', 'Record has been deleted!', 'success');
          })["catch"](function (error) {
            alert(444);

            _this3.$toast.fire({
              type: 'error',
              title: 'User not Deleted!'
            });
          });
          EventBus.$emit('UserCreated');
        }
      }); // .catch( ())
    },
    resetFields: function resetFields() {
      this.form.name = '';
      this.form.email = '';
      this.form.bio = '';
      this.form.role = '';
      this.form.password = '';
    }
  },
  created: function created() {
    var _this4 = this;

    this.loadUsers();
    EventBus.$on('UserCreated', function () {
      _this4.loadUsers();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users.vue?vue&type=template&id=91a5db62&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Users.vue?vue&type=template&id=91a5db62&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-responsive p-8" }, [
            _c("table", { staticClass: "table table-hover" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.users, function(user) {
                  return _c("tr", { key: user.id }, [
                    _c("td", [_vm._v(_vm._s(user.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(user.email))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm._f("capitalize")(user.role)))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm._f("momentDate")(user.created_at)))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._m(2, true),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              return _vm.deleteUser(user.id)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fa fa-trash" })]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "addNew",
        staticClass: "modal fade",
        attrs: {
          id: "addNew",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "addNewLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.createUser($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: [
                          "form-group",
                          _vm.errors.name ? "has-error" : ""
                        ]
                      },
                      [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-control",
                          class: [
                            "form-control",
                            _vm.errors.name ? "is-invalid" : ""
                          ],
                          attrs: {
                            type: "text",
                            name: "name",
                            placeholder: "Name",
                            id: "name"
                          },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.name
                          ? _c(
                              "span",
                              { class: ["label label-danger text-danger"] },
                              [_vm._v("@" + _vm._s(_vm.errors.name[0]))]
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: [
                          "form-group",
                          _vm.errors.email ? "has-error" : ""
                        ]
                      },
                      [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Email")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.email,
                              expression: "form.email"
                            }
                          ],
                          staticClass: "form-control",
                          class: [
                            "form-control",
                            _vm.errors.email ? "is-invalid" : ""
                          ],
                          attrs: {
                            type: "email",
                            name: "email",
                            placeholder: "Email",
                            id: "email"
                          },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.email
                          ? _c(
                              "span",
                              { class: ["label label-danger text-danger"] },
                              [_vm._v("@" + _vm._s(_vm.errors.email[0]))]
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: ["form-group", _vm.errors.bio ? "has-error" : ""]
                      },
                      [
                        _c("label", { attrs: { for: "bio" } }, [_vm._v("Bio")]),
                        _vm._v(" "),
                        _c(
                          "textarea",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.bio,
                                expression: "form.bio"
                              }
                            ],
                            staticClass: "form-control",
                            class: [
                              "form-control",
                              _vm.errors.bio ? "is-invalid" : ""
                            ],
                            attrs: {
                              name: "bio",
                              placeholder: "Bio",
                              id: "bio"
                            },
                            domProps: { value: _vm.form.bio },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "bio", $event.target.value)
                              }
                            }
                          },
                          [
                            _vm._v(
                              '                                        id="bio">\n                                '
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.errors.bio
                          ? _c(
                              "span",
                              { class: ["label label-danger text-danger"] },
                              [_vm._v("@" + _vm._s(_vm.errors.bio[0]))]
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: [
                          "form-group",
                          _vm.errors.role ? "has-error" : ""
                        ]
                      },
                      [
                        _c("label", { attrs: { for: "role" } }, [
                          _vm._v("Role")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.role,
                                expression: "form.role"
                              }
                            ],
                            staticClass: "form-control",
                            class: [
                              "form-control",
                              _vm.errors.role ? "is-invalid" : ""
                            ],
                            attrs: {
                              type: "text",
                              name: "role",
                              placeholder: "Role",
                              id: "role"
                            },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "role",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select User Role")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "admin" } }, [
                              _vm._v("Admin")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "user" } }, [
                              _vm._v("User")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "author" } }, [
                              _vm._v("Author")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm.errors.role
                          ? _c(
                              "span",
                              { class: ["label label-danger text-danger"] },
                              [_vm._v("@" + _vm._s(_vm.errors.role[0]))]
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group",
                        class: [
                          "form-group",
                          _vm.errors.password ? "has-error" : ""
                        ]
                      },
                      [
                        _c("label", { attrs: { for: "password" } }, [
                          _vm._v("Password")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          staticClass: "form-control",
                          class: [
                            "form-control",
                            _vm.errors.password ? "is-invalid" : ""
                          ],
                          attrs: {
                            type: "password",
                            name: "password",
                            placeholder: "Password",
                            id: "password"
                          },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.password
                          ? _c(
                              "span",
                              { class: ["label label-danger text-danger"] },
                              [_vm._v("@" + _vm._s(_vm.errors.password[0]))]
                            )
                          : _vm._e()
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _vm._m(4)
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Users")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-success",
            attrs: { "data-toggle": "modal", "data-target": "#addNew" }
          },
          [
            _vm._v(
              "\n                                Add New\n                                 \n                                "
            ),
            _c("i", { staticClass: "fas fa-fw fa-user-plus" })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Role")]),
        _vm._v(" "),
        _c("th", [_vm._v("Register date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Modify")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "" } }, [
      _c("i", { staticClass: "fa fa-edit text-red" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title", attrs: { id: "addNewLabel" } }, [
        _vm._v("Add New")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-danger",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Create")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Users.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Users.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_91a5db62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=91a5db62&scoped=true& */ "./resources/js/pages/Users.vue?vue&type=template&id=91a5db62&scoped=true&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/pages/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_91a5db62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_91a5db62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "91a5db62",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Users.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Users.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Users.vue?vue&type=template&id=91a5db62&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Users.vue?vue&type=template&id=91a5db62&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_91a5db62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=91a5db62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Users.vue?vue&type=template&id=91a5db62&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_91a5db62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_91a5db62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);