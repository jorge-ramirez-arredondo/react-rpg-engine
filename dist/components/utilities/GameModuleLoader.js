import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useContext, useEffect, useCallback } from "react";
var GameModuleLoaderContext = React.createContext();
var Provider = GameModuleLoaderContext.Provider,
    Consumer = GameModuleLoaderContext.Consumer;

function useGameModuleLoader() {
  return useContext(GameModuleLoaderContext);
}

function GameModuleLoader(props) {
  var gameModules = props.gameModules,
      activeModuleKey = props.activeModuleKey,
      children = props.children;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeModule = _useState2[0],
      setActiveModule = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      success = _useState6[0],
      setSuccess = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1];

  var onLoading = useCallback(function () {
    setLoading(true);
  }, [setLoading]);
  var onSuccess = useCallback(function (newActiveModule, newActiveModuleKey) {
    setActiveModule(newActiveModule);
    setLoading(false);
    setSuccess(true);
    setError(null);
  }, [setActiveModule, setLoading, setSuccess, setError]);
  var onError = useCallback(function (newError) {
    setActiveModule(null);
    setLoading(false);
    setSuccess(false);
    setError(newError);
  }, [setActiveModule, setLoading, setSuccess, setError]); // Wrap getting of module in async function so it can be used with await safely.

  var loadModule = useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(newModuleKey) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", gameModules[newModuleKey]());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [gameModules]);
  var load = useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(newModuleKey) {
      var newModule;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              onLoading();
              _context2.prev = 1;
              _context2.next = 4;
              return loadModule(newModuleKey);

            case 4:
              newModule = _context2.sent;
              onSuccess(newModule, newModuleKey);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              onError(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(), [onLoading, loadModule, onSuccess, onError]);
  var clear = useCallback(function () {
    setActiveModule(null);
    setLoading(false);
    setSuccess(false);
    setError(null);
  }, [setActiveModule, setLoading, setSuccess, setError]);
  useEffect(function () {
    if (activeModuleKey === null) {
      clear();
    } else {
      load(activeModuleKey);
    }
  }, [activeModuleKey, clear, load]);
  return /*#__PURE__*/React.createElement(Provider, {
    value: {
      activeModuleKey: activeModuleKey,
      activeModule: activeModule,
      loading: loading,
      success: success,
      error: error
    }
  }, children);
}

GameModuleLoader.defaultProps = {
  activeModuleKey: null,
  children: null
};
export default GameModuleLoader;
export { Consumer, useGameModuleLoader };