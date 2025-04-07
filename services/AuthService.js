"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var AuthService = /** @class */ (function () {
    function AuthService(axios, config) {
        this.axios = axios;
        this.config = config;
    }
    /**
     * Update email address
     * @param params params
     */
    AuthService.prototype.updateEmail = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/auth/update-email', params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * return user location detail by user ip address
     * @return Observable
         */
    AuthService.prototype.locate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/auth/locate')];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Check if email already verified
         * @param res
          */
    AuthService.prototype.isAlreadyVerified = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/auth/is-email-verified', params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Basic auth, exchanges access details for a bearer access token to use in
     * subsequent requests.
     * @param  {string} email
     * @param  {string} password
     */
    AuthService.prototype.basicAuth = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/auth/login', {
                            headers: {
                                'Authorization': 'Basic ' + btoa("".concat(email, ":").concat(password)),
                            }
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Create account
     * @param params
     */
    AuthService.prototype.createAccount = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/auth/register', params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Redirect to google auth page in case google account
     * not available to login
     */
    AuthService.prototype.redirectToGoogleAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * Sign in with email and password
     * @param email
     * @param password
     *
    export async function signInWithEmailAndPassword(email, password) {
    
      basicAuth(email, password).then(async res => {
    
        if (res.operation == 'success') {
          const view = (res.new_user == 1) ? 'welcome' : 'view';
          setAccessToken(res, view);
        } else if (res.operation == 'error' && res.errorType == 'email-not-verified') {
    
          Storage.set({ 'key': 'unVerifiedToken', value: JSON.stringify(res.unVerifiedToken) });
    
          router.navigateByUrl('/verify-email', { state: { email: email } });
        } else {
          const alert = await _alertCtrl.create({
            header: translate.transform('Unable to Log In'),
            message: res.message,
            buttons: [translate.transform('Ok')],
          });
          await alert.present();
        }
    
      }, async err => {
    
        // Incorrect email or password
        if (err.status == 401) {
          const alert = await _alertCtrl.create({
            header: translate.transform('Invalid login credential'),
            message: translate.transform('The information entered is incorrect. Please try again.'),
            buttons: [translate.transform('Try Again')],
          });
          await alert.present();
    
        } else {
          /**
           * Error not accounted for. Show Message
           *
          const alert = await _alertCtrl.create({
            header: translate.transform('Unable to Log In'),
            message: translate.transform('There seems to be an issue connecting to servers. Please contact us if the issue persists.'),
            buttons: [translate.transform('Ok')],
          });
          await alert.present();
        }
      });
    }*/
    /**
     * Login by otp
     * @param otp
     *
    export async function loginByOtp(otp) {
    
      // Show Loading
    
      const loading = await _loadingCtrl.create({
        spinner: 'crescent',
        message: await translate.get('Logging in...').toPromise()
      });
      await loading.present();
    
      const url = environment.apiEndpoint + _urlLoginByOtp;
      const headers = _buildAuthHeaders();
    
      const params = {
        otp: otp,
        currency_pref: currency_pref
      };
    
      return _http.post(url, params, { headers: headers })
        .pipe(
          retryWhen(genericRetryStrategy()),
          catchError((err) => _handleError(err)),
          first(),
          map((res) => res)
        )
        .then(async response => {
    
          //document.cookie = 'otp=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=' + environment.cookieDomain + ';';
          //cookieService.delete('otp', '/', environment.cookieDomain);
    
          loading.dismiss();
    
          if (response.operation == 'success') {
    
            const view = (response.new_user == 1) ? 'welcome' : 'view';
            setAccessToken(response, view);
    
            if (response.new_user == 1) {
    
              /*socialAnalyticsService.eventEmitter('sign-up-by-google', {
                email: response.email
              });*./
    
              eventService.newUserSignedUp$.next();
    
            } else {
             /* socialAnalyticsService.eventEmitter('login-by-google', {
                email: response.email
              });*
            }
          } else if (response.operation == 'error') {
            const alert = await _alertCtrl.create({
              message: translate.transform('Error getting login by Google+ API'), // JSON.stringify(err)
              buttons: [translate.transform('Ok')]
            });
            await alert.present();
          }
        }, err => {
          loading.dismiss();
        });
    }
    
    /**
     * Login by google idToken
     *
    export async function useGoogleIdTokenForAuth(idToken: string, showLoader = true) {
    
      let loading;
    
      if (showLoader) {
        loading = await _loadingCtrl.create({
          spinner: 'crescent',
          message: translate.transform('Logging in...')
        });
        loading.present();
      }
    
      const url = environment.apiEndpoint + _urlLoginByGoogle;
      const headers = _buildAuthHeaders();
    
      return _http.post(url, {
        idToken: idToken,
        currency_pref: currency_pref,
        currency_label: currency_label
      }, {
        headers: headers
      })
        .pipe(
          retryWhen(genericRetryStrategy()),
          catchError((err) => _handleError(err)),
          first(),
          map((res) => res)
        )
        .then(async response => {
    
          if (response.operation == 'success') {
    
            handleLogin(response, 'google');
    
          } else if (response.operation == 'error') {
            const alert = await _alertCtrl.create({
              message: translate.transform('Error getting login by Google+ API'), // JSON.stringify(err)
              buttons: [translate.transform('Ok')]
            });
            await alert.present();
          }
    
          eventService.googleLoginFinished$.next();
    
        }, err => {
    
          eventService.googleLoginFinished$.next(err);
        },
        () => {
          if (loading) {
            loading.dismiss();
          }
        });
    }*/
    /**
     * handle login response
     * @param response
     
    async handleLogin(response: any) {
      store.dispatch('setAccessToken', response);
    }*/
    /**
     * Login by Google for mobile app
     *
    loginByGoogle() {
    
      Plugins.GoogleAuth.signIn().then(async googleUser => {
    
        if (googleUser && googleUser.authentication && googleUser.authentication.idToken) {
          useGoogleIdTokenForAuth(googleUser.authentication.idToken, false);
        } else {
          eventService.googleLoginFinished$.next();
    
          showLoginError('Error getting login by Google+ API');
        }
      }).catch(async err => {
    
        eventService.googleLoginFinished$.next();
    
        if (err = 'popup_closed_by_user') {
          return false;
        }
    
        showLoginError('Error getting login by Google+ API');
    
      });
    }
    
    async function showLoginError(err) {
    
      const alert = await _alertCtrl.create({
        message: translate.transform(err),
        buttons: [translate.transform('Ok')]
      });
      await alert.present();
    }
    
    /**
     * login with AppleJS for PWA
     *
    export async function loginByAppleJs() {
    
      appleAuthLoading = true;
    
      try {
        const data = await AppleID.auth.signIn();
    
        const params = {
          identityToken: data.authorization.id_token,
          'email': data.user.email,
          'familyName': data.user.name.familyName,
          'givenName': data.user.name.givenName
        };
    
        handleAppleLoginResponse(params);
    
      } catch ( error ) {
        // popup_closed_by_user
        appleAuthLoading = false;
      }
    }
    
    /**
     * login by Apple sign in
     *
    loginByApple() {
    
      appleAuthLoading = true;
    
      SignInWithApple.Authorize().then(async (data) => {
          handleAppleLoginResponse(data);
        })
        .catch(data => {
    
          // login/signup with private email
    
          handleAppleLoginResponse(data);
        });
    }*/
    /**
     * handle response from apple login popup
     * @param data
     *
    async function handleAppleLoginResponse(data: any) {
      if (!data || !data.response || !data.response.identityToken) {
        
          store.state.appleAuthLoading = false;
    
        if (data.message && data.message.indexOf('AuthorizationError') == -1) {
          showLoginError(data.message);//todo translation
        }
    
        return null;
      }
    
      let params = {
        currency_pref: store.state.currency_pref
      };
    
      if (data.response.givenName) {
    
        Storage.set({ key: 'appleUserDetail', value: JSON.stringify({
            'email': data.response.email,
            'familyName': data.response.familyName,
            'user': data.response.user,
            'givenName': data.response.givenName
          })
        });
    
        params = Object.assign(params, data.response);
      }
      else
      {
        const { value } = await Storage.get({ key: 'appleUserDetail' });
    
        const oldData = JSON.parse(value);
    
        params = Object.assign((oldData) ? oldData : {}, data.response);
      }
    
      useAppleIdTokenForAuth(params);
    }
    
    /**
     * login/sign up by apple auth code
     * @param params
     *
    export async function useAppleIdTokenForAuth(params) {
      const response = await axios.post('/auth/login-by-apple', params)
        .then((response: any) => {
          handleLogin(response, 'apple');
          store.state.appleAuthLoading = false;
        }, () => {
          store.state.appleAuthLoading = false;
        });
      return response.data;
    }
    
    /**
     * Request password reset token
     * @param email
     */
    AuthService.prototype.requestResetPassword = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/auth/request-reset-password', {
                            'email': email
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Update password
     * @param params
     */
    AuthService.prototype.updatePassword = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.patch('/auth/update-password', params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Resend verification email
     * @param email
     */
    AuthService.prototype.resendVerificationEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/auth/resend-verification-email', { 'email': email })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Verify email
     * @param email
     * @param code
     */
    AuthService.prototype.verifyEmail = function (email, code) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/auth/verify-email', { email: email, 'code': code })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
