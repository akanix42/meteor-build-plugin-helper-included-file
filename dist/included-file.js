'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _sha = require('sha1');

var _sha2 = _interopRequireDefault(_sha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IncludedFile = function () {
  function IncludedFile(filePath, backingInputFile, pluginOptions) {
    (0, _classCallCheck3.default)(this, IncludedFile);

    this.path = filePath;
    this.inputFile = backingInputFile;
    this.extension = _path2.default.extname(this.path);
    this.basename = _path2.default.basename(this.path);
  }

  (0, _createClass3.default)(IncludedFile, [{
    key: 'prepInputFile',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(file) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                file.referencedImportPaths = [];

                _context.next = 3;
                return new _promise2.default(function (resolve, reject) {
                  return _fs2.default.readFile(file.path, 'utf-8', function (err, result) {
                    if (err) reject(err);
                    resolve(result);
                  });
                });

              case 3:
                file.contents = _context.sent;


                if (pluginOptions.globalVariablesText) {
                  file.contents = pluginOptions.globalVariablesText + '\n\n' + file.contents;
                }
                file.rawContents = file.contents;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function prepInputFile(_x) {
        return _ref.apply(this, arguments);
      }

      return prepInputFile;
    }()
  }, {
    key: 'addJavaScript',
    value: function addJavaScript(options) {
      this.inputFile.addJavaScript(options);
    }
  }, {
    key: 'addStylesheet',
    value: function addStylesheet(options) {
      this.inputFile.addStylesheet(options);
    }
  }, {
    key: 'error',
    value: function error(data) {
      data.message = 'Error in explicitly included file: ' + data.message;
      this.inputFile.error(data);
    }
  }, {
    key: 'getArch',
    value: function getArch() {
      return this.inputFile.getArch();
    }
  }, {
    key: 'getBasename',
    value: function getBasename() {
      return this.basename;
    }
  }, {
    key: 'getContentsAsString',
    value: function getContentsAsString() {
      return this.contents;
    }
  }, {
    key: 'getDisplayPath',
    value: function getDisplayPath() {
      return this.path;
    }
  }, {
    key: 'getExtension',
    value: function getExtension() {
      return this.extension;
    }
  }, {
    key: 'getFileOptions',
    value: function getFileOptions() {
      return {};
    }
  }, {
    key: 'getPackageName',
    value: function getPackageName() {
      return null;
    }
  }, {
    key: 'getPathInPackage',
    value: function getPathInPackage() {
      return this.path;
    }
  }, {
    key: 'getSourceHash',
    value: function getSourceHash() {
      return (0, _sha2.default)(this.getContentsAsString());
    }
  }]);
  return IncludedFile;
}();

exports.default = IncludedFile;
;
//# sourceMappingURL=included-file.js.map
