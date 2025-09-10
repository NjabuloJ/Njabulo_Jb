function hi() {
  const _0x4c7043 = function () {
    let _0x3c7115 = true;
    return function (_0x3cbb39, _0x15fc7c) {
      const _0x50d90e = _0x3c7115 ? function () {
        if (_0x15fc7c) {
          const _0x27722c = _0x15fc7c.apply(_0x3cbb39, arguments);
          _0x15fc7c = null;
          return _0x27722c;
        }
      } : function () {};
      _0x3c7115 = false;
      return _0x50d90e;
    };
  }();
  const _0xe77807 = _0x4c7043(this, function () {
    return _0xe77807.toString().search("(((.+)+)+)+$").toString().constructor(_0xe77807).search("(((.+)+)+)+$");
  });
  _0xe77807();
  const _0x3d06e9 = function () {
    let _0x43b26c = true;
    return function (_0x54a71b, _0x26cd2b) {
      const _0x1de2c0 = _0x43b26c ? function () {
        if (_0x26cd2b) {
          const _0x498b46 = _0x26cd2b.apply(_0x54a71b, arguments);
          _0x26cd2b = null;
          return _0x498b46;
        }
      } : function () {};
      _0x43b26c = false;
      return _0x1de2c0;
    };
  }();
  const _0x256d58 = _0x3d06e9(this, function () {
    let _0x3c27d9;
    try {
      const _0x36ac0d = Function("return (function() {}.constructor(\"return this\")( ));");
      _0x3c27d9 = _0x36ac0d();
    } catch (_0x51d760) {
      _0x3c27d9 = window;
    }
    const _0x414be3 = _0x3c27d9.console = _0x3c27d9.console || {};
    const _0x20567f = ["log", "warn", "info", "error", 'exception', "table", 'trace'];
    for (let _0xa0f391 = 0x0; _0xa0f391 < _0x20567f.length; _0xa0f391++) {
      const _0x1f9e60 = _0x3d06e9.constructor.prototype.bind(_0x3d06e9);
      const _0x2d900c = _0x20567f[_0xa0f391];
      const _0x38ee54 = _0x414be3[_0x2d900c] || _0x1f9e60;
      _0x1f9e60.__proto__ = _0x3d06e9.bind(_0x3d06e9);
      _0x1f9e60.toString = _0x38ee54.toString.bind(_0x38ee54);
      _0x414be3[_0x2d900c] = _0x1f9e60;
    }
  });
  _0x256d58();
  console.log("Hello World!");
}
hi();
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function (_0x506305, _0x162f77, _0x4530b5, _0x25ed6) {
  if (_0x25ed6 === undefined) {
    _0x25ed6 = _0x4530b5;
  }
  var _0x1cdf65 = Object.getOwnPropertyDescriptor(_0x162f77, _0x4530b5);
  if (!_0x1cdf65 || ("get" in _0x1cdf65 ? !_0x162f77.__esModule : _0x1cdf65.writable || _0x1cdf65.configurable)) {
    _0x1cdf65 = {
      'enumerable': true,
      'get': function () {
        return _0x162f77[_0x4530b5];
      }
    };
  }
  Object.defineProperty(_0x506305, _0x25ed6, _0x1cdf65);
} : function (_0x4f027d, _0x226a28, _0x1fcad6, _0x2f33e4) {
  if (_0x2f33e4 === undefined) {
    _0x2f33e4 = _0x1fcad6;
  }
  _0x4f027d[_0x2f33e4] = _0x226a28[_0x1fcad6];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0xc01d6c, _0x2ca1c4) {
  Object.defineProperty(_0xc01d6c, "default", {
    'enumerable': true,
    'value': _0x2ca1c4
  });
} : function (_0x486e83, _0x41cec2) {
  _0x486e83["default"] = _0x41cec2;
});
var __importStar = this && this.__importStar || function (_0x5a52c9) {
  if (_0x5a52c9 && _0x5a52c9.__esModule) {
    return _0x5a52c9;
  }
  var _0x41390f = {};
  if (_0x5a52c9 != null) {
    for (var _0x49db33 in _0x5a52c9) if (_0x49db33 !== "default" && Object.prototype.hasOwnProperty.call(_0x5a52c9, _0x49db33)) {
      __createBinding(_0x41390f, _0x5a52c9, _0x49db33);
    }
  }
  __setModuleDefault(_0x41390f, _0x5a52c9);
  return _0x41390f;
};
var __importDefault = this && this.__importDefault || function (_0x265948) {
  return _0x265948 && _0x265948.__esModule ? _0x265948 : {
    'default': _0x265948
  };
};
Object.defineProperty(exports, "__esModule", {
  'value': true
});
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1["default"].child({});
logger.level = "silent";
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require('./set');
let fs = require('fs-extra');
let path = require("path");
const FileType = require('file-type');
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./bdd/antilien");
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require("./bdd/antibot");
let evt = require(__dirname + "/framework/zokou");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require("./bdd/banUser");
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require("./bdd/banGroup");
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require("./bdd/onlyAdmin");
let {
  reagir
} = require(__dirname + "/framework/app");
var session = conf.session.replace(/HEROKU-BT;;;/g, '');
const prefixe = conf.PREFIXE;
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + '/auth/creds.json')) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/auth/creds.json") && session != 'zokk') {
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    }
  } catch (_0x50121f) {
    console.log("Session Invalide " + _0x50121f);
    return;
  }
}
authentification();
0x0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
setTimeout(() => {
  async function _0x5e07ab() {
    0x0;
    const {
      version: _0x2f3170,
      isLatest: _0x4a564a
    } = await baileys_1.fetchLatestBaileysVersion();
    0x0;
    const {
      state: _0x116b53,
      saveCreds: _0x47fde9
    } = await baileys_1.useMultiFileAuthState(__dirname + "/auth");
    0x0;
    const _0x425b2d = {
      'version': _0x2f3170,
      'logger': pino({
        'level': 'silent'
      }),
      'browser': ["Zokou-Md", "safari", "1.0.0"],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0x116b53.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0x116b53.keys, logger)
      },
      'getMessage': async _0xd8e08 => {
        if (store) {
          const _0x124c05 = await store.loadMessage(_0xd8e08.remoteJid, _0xd8e08.id, undefined);
          return _0x124c05.message || undefined;
        }
        return {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0x0;
    const _0x4137ff = baileys_1["default"](_0x425b2d);
    store.bind(_0x4137ff.ev);
    setInterval(() => {
      store.writeToFile("store.json");
    }, 0xbb8);
    _0x4137ff.ev.on("messages.upsert", async _0x127f68 => {
      const {
        messages: _0x4cc5f0
      } = _0x127f68;
      const _0x35f8b6 = _0x4cc5f0[0x0];
      if (!_0x35f8b6.message) {
        return;
      }
      const _0x4bb6d7 = _0x113be9 => {
        if (!_0x113be9) {
          return _0x113be9;
        }
        if (/:\d+@/gi.test(_0x113be9)) {
          0x0;
          let _0x4b60c7 = baileys_1.jidDecode(_0x113be9) || {};
          return _0x4b60c7.user && _0x4b60c7.server && _0x4b60c7.user + '@' + _0x4b60c7.server || _0x113be9;
        } else {
          return _0x113be9;
        }
      };
      0x0;
      var _0x509105 = baileys_1.getContentType(_0x35f8b6.message);
      var _0x262e6a = _0x509105 == "conversation" ? _0x35f8b6.message.conversation : _0x509105 == 'imageMessage' ? _0x35f8b6.message.imageMessage?.["caption"] : _0x509105 == "videoMessage" ? _0x35f8b6.message.videoMessage?.['caption'] : _0x509105 == "extendedTextMessage" ? _0x35f8b6.message?.["extendedTextMessage"]?.["text"] : _0x509105 == "buttonsResponseMessage" ? _0x35f8b6?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] : _0x509105 == "listResponseMessage" ? _0x35f8b6.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] : _0x509105 == "messageContextInfo" ? _0x35f8b6?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x35f8b6.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] || _0x35f8b6.text : '';
      var _0x2d2514 = _0x35f8b6.key.remoteJid;
      var _0x9befd4 = _0x4bb6d7(_0x4137ff.user.id);
      var _0x27a63b = _0x9befd4.split('@')[0x0];
      const _0x1e22ae = _0x2d2514?.["endsWith"]('@g.us');
      var _0x1d9311 = _0x1e22ae ? await _0x4137ff.groupMetadata(_0x2d2514) : '';
      var _0x439ee5 = _0x1e22ae ? _0x1d9311.subject : '';
      var _0x4a54f0 = _0x35f8b6.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x4675ac = _0x4bb6d7(_0x35f8b6.message?.['extendedTextMessage']?.['contextInfo']?.['participant']);
      var _0x1b4d46 = _0x1e22ae ? _0x35f8b6.key.participant ? _0x35f8b6.key.participant : _0x35f8b6.participant : _0x2d2514;
      if (_0x35f8b6.key.fromMe) {
        _0x1b4d46 = _0x9befd4;
      }
      var _0x828850 = _0x1e22ae ? _0x35f8b6.key.participant : '';
      const {
        getAllSudoNumbers: _0x577b8f
      } = require("./bdd/sudo");
      const _0x1696ea = _0x35f8b6.pushName;
      const _0x126de8 = await _0x577b8f();
      const _0x116f10 = [_0x27a63b, "22559763447", "22543343357", "22564297888", "22891733300", conf.NUMERO_OWNER].map(_0x57f9ec => _0x57f9ec.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x47817 = _0x116f10.concat(_0x126de8);
      const _0x58f101 = _0x47817.includes(_0x1b4d46);
      var _0x1db84e = ["22559763447", "22543343357", "22564297888", "22891733300"].map(_0xc922de => _0xc922de.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x1b4d46);
      function _0x2a8421(_0x43f44e) {
        _0x4137ff.sendMessage(_0x2d2514, {
          'text': _0x43f44e
        }, {
          'quoted': _0x35f8b6
        });
      }
      console.log("\t [][]...{HEROKU-BT}...[][]");
      console.log("=========== Nouveau message ===========");
      if (_0x1e22ae) {
        console.log("message provenant du groupe : " + _0x439ee5);
      }
      console.log("message envoyé par : [" + _0x1696ea + " : " + _0x1b4d46.split('@s.whatsapp.net')[0x0] + " ]");
      console.log("type de message : " + _0x509105);
      console.log("------ contenu du message ------");
      console.log(_0x262e6a);
      function _0x29fbb7(_0x20c9a3) {
        let _0x5c4d7a = [];
        for (_0x127f68 of _0x20c9a3) {
          if (_0x127f68.admin == null) {
            continue;
          }
          _0x5c4d7a.push(_0x127f68.id);
        }
        return _0x5c4d7a;
      }
      var _0x378f4e = conf.ETAT;
      if (_0x378f4e == 0x1) {
        await _0x4137ff.sendPresenceUpdate('available', _0x2d2514);
      } else {
        if (_0x378f4e == 0x2) {
          await _0x4137ff.sendPresenceUpdate("composing", _0x2d2514);
        } else if (_0x378f4e == 0x3) {
          await _0x4137ff.sendPresenceUpdate("recording", _0x2d2514);
        } else {
          await _0x4137ff.sendPresenceUpdate("unavailable", _0x2d2514);
        }
      }
      const _0x42c5f2 = _0x1e22ae ? await _0x1d9311.participants : '';
      let _0x2c57a9 = _0x1e22ae ? _0x29fbb7(_0x42c5f2) : '';
      const _0x13a870 = _0x1e22ae ? _0x2c57a9.includes(_0x1b4d46) : false;
      var _0x3d2f10 = _0x1e22ae ? _0x2c57a9.includes(_0x9befd4) : false;
      const _0x4c04d2 = _0x262e6a ? _0x262e6a.trim().split(/ +/).slice(0x1) : null;
      const _0x4c4276 = _0x262e6a ? _0x262e6a.startsWith(prefixe) : false;
      const _0x186d34 = _0x4c4276 ? _0x262e6a.slice(0x1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x35e381 = conf.URL.split(',');
      function _0x99dddd() {
        const _0x31742f = Math.floor(Math.random() * _0x35e381.length);
        const _0x2e35d9 = _0x35e381[_0x31742f];
        return _0x2e35d9;
      }
      var _0x174e3a = {
        'superUser': _0x58f101,
        'dev': _0x1db84e,
        'verifGroupe': _0x1e22ae,
        'mbre': _0x42c5f2,
        'membreGroupe': _0x828850,
        'verifAdmin': _0x13a870,
        'infosGroupe': _0x1d9311,
        'nomGroupe': _0x439ee5,
        'auteurMessage': _0x1b4d46,
        'nomAuteurMessage': _0x1696ea,
        'idBot': _0x9befd4,
        'verifZokouAdmin': _0x3d2f10,
        'prefixe': prefixe,
        'arg': _0x4c04d2,
        'repondre': _0x2a8421,
        'mtype': _0x509105,
        'groupeAdmin': _0x29fbb7,
        'msgRepondu': _0x4a54f0,
        'auteurMsgRepondu': _0x4675ac,
        'ms': _0x35f8b6,
        'mybotpic': _0x99dddd
      };
      if (_0x35f8b6.message.protocolMessage && _0x35f8b6.message.protocolMessage.type === 0x0 && conf.ADM.toLocaleLowerCase() === "yes") {
        if (_0x35f8b6.key.fromMe || _0x35f8b6.message.protocolMessage.key.fromMe) {
          console.log("Message supprimer me concernant");
          return;
        }
        console.log("Message supprimer");
        let _0x103b8b = _0x35f8b6.message.protocolMessage.key;
        try {
          const _0x2c55fd = fs.readFileSync('./store.json', "utf8");
          const _0x36e485 = JSON.parse(_0x2c55fd);
          let _0x4c9732 = _0x36e485.messages[_0x103b8b.remoteJid];
          let _0x1c2485;
          for (let _0x45ad5d = 0x0; _0x45ad5d < _0x4c9732.length; _0x45ad5d++) {
            if (_0x4c9732[_0x45ad5d].key.id === _0x103b8b.id) {
              _0x1c2485 = _0x4c9732[_0x45ad5d];
              break;
            }
          }
          if (_0x1c2485 === null || !_0x1c2485 || _0x1c2485 === "undefined") {
            console.log("Message non trouver");
            return;
          }
          await _0x4137ff.sendMessage(_0x9befd4, {
            'image': {
              'url': "./media/deleted-message.jpg"
            },
            'caption': "        😈Anti-delete-message😈\n Message from @" + _0x1c2485.key.participant.split('@')[0x0] + '​',
            'mentions': [_0x1c2485.key.participant]
          }).then(() => {
            _0x4137ff.sendMessage(_0x9befd4, {
              'forward': _0x1c2485
            }, {
              'quoted': _0x1c2485
            });
          });
        } catch (_0x347f23) {
          console.log(_0x347f23);
        }
      }
      if (_0x35f8b6.key && _0x35f8b6.key.remoteJid === 'status@broadcast' && conf.AUTO_READ_STATUS === "yes") {
        await _0x4137ff.readMessages([_0x35f8b6.key]);
      }
      if (_0x35f8b6.key && _0x35f8b6.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === "yes") {
        if (_0x35f8b6.message.extendedTextMessage) {
          var _0x250d38 = _0x35f8b6.message.extendedTextMessage.text;
          await _0x4137ff.sendMessage(_0x9befd4, {
            'text': _0x250d38
          }, {
            'quoted': _0x35f8b6
          });
        } else {
          if (_0x35f8b6.message.imageMessage) {
            var _0x39b618 = _0x35f8b6.message.imageMessage.caption;
            var _0x215648 = await _0x4137ff.downloadAndSaveMediaMessage(_0x35f8b6.message.imageMessage);
            await _0x4137ff.sendMessage(_0x9befd4, {
              'image': {
                'url': _0x215648
              },
              'caption': _0x39b618
            }, {
              'quoted': _0x35f8b6
            });
          } else {
            if (_0x35f8b6.message.videoMessage) {
              var _0x39b618 = _0x35f8b6.message.videoMessage.caption;
              var _0x118980 = await _0x4137ff.downloadAndSaveMediaMessage(_0x35f8b6.message.videoMessage);
              await _0x4137ff.sendMessage(_0x9befd4, {
                'video': {
                  'url': _0x118980
                },
                'caption': _0x39b618
              }, {
                'quoted': _0x35f8b6
              });
            }
          }
        }
      }
      if (!_0x1db84e && _0x2d2514 == '120363158701337904@g.us') {
        return;
      }
      if (_0x262e6a && _0x1b4d46.endsWith("s.whatsapp.net")) {
        const {
          ajouterOuMettreAJourUserData: _0x2c6532
        } = require("./bdd/level");
        try {
          await _0x2c6532(_0x1b4d46);
        } catch (_0x5e7de7) {
          console.error(_0x5e7de7);
        }
      }
      try {
        if (_0x35f8b6.message[_0x509105].contextInfo.mentionedJid && (_0x35f8b6.message[_0x509105].contextInfo.mentionedJid.includes(_0x9befd4) || _0x35f8b6.message[_0x509105].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + "@s.whatsapp.net"))) {
          if (_0x2d2514 == '120363158701337904@g.us') {
            return;
          }
          ;
          if (_0x58f101) {
            console.log("hummm");
            return;
          }
          let _0x2da317 = require("./bdd/mention");
          let _0x112771 = await _0x2da317.recupererToutesLesValeurs();
          let _0xbbce01 = _0x112771[0x0];
          if (_0xbbce01.status === "non") {
            console.log("mention pas actifs");
            return;
          }
          let _0x13d547;
          if (_0xbbce01.type.toLocaleLowerCase() === "image") {
            _0x13d547 = {
              'image': {
                'url': _0xbbce01.url
              },
              'caption': _0xbbce01.message
            };
          } else {
            if (_0xbbce01.type.toLocaleLowerCase() === "video") {
              _0x13d547 = {
                'video': {
                  'url': _0xbbce01.url
                },
                'caption': _0xbbce01.message
              };
            } else {
              if (_0xbbce01.type.toLocaleLowerCase() === "sticker") {
                let _0x534374 = new Sticker(_0xbbce01.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x315fe7 = await _0x534374.toBuffer();
                _0x13d547 = {
                  'sticker': _0x315fe7
                };
              } else if (_0xbbce01.type.toLocaleLowerCase() === "audio") {
                _0x13d547 = {
                  'audio': {
                    'url': _0xbbce01.url
                  },
                  'mimetype': "audio/mp4"
                };
              }
            }
          }
          _0x4137ff.sendMessage(_0x2d2514, _0x13d547, {
            'quoted': _0x35f8b6
          });
        }
      } catch (_0x2f3fe8) {}
      try {
        const _0x4f34af = await verifierEtatJid(_0x2d2514);
        if (_0x262e6a.includes("https://") && _0x1e22ae && _0x4f34af) {
          console.log("lien detecté");
          var _0x26ffc6 = _0x1e22ae ? _0x2c57a9.includes(_0x9befd4) : false;
          if (_0x58f101 || _0x13a870 || !_0x26ffc6) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x48c344 = {
            'remoteJid': _0x2d2514,
            'fromMe': false,
            'id': _0x35f8b6.key.id,
            'participant': _0x1b4d46
          };
          var _0x54c1c9 = "lien detected, \n";
          var _0x309f4c = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Zoou-Md",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': '#000000'
          });
          await _0x309f4c.toFile("st1.webp");
          var _0x384919 = await recupererActionJid(_0x2d2514);
          if (_0x384919 === 'remove') {
            _0x54c1c9 += "message deleted \n @" + _0x1b4d46.split('@')[0x0] + " removed from group.";
            await _0x4137ff.sendMessage(_0x2d2514, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x4137ff.sendMessage(_0x2d2514, {
              'text': _0x54c1c9,
              'mentions': [_0x1b4d46]
            }, {
              'quoted': _0x35f8b6
            });
            try {
              await _0x4137ff.groupParticipantsUpdate(_0x2d2514, [_0x1b4d46], "remove");
            } catch (_0x305b3e) {
              console.log("antiien ") + _0x305b3e;
            }
            await _0x4137ff.sendMessage(_0x2d2514, {
              'delete': _0x48c344
            });
            await fs.unlink('st1.webp');
          } else {
            if (_0x384919 === 'delete') {
              _0x54c1c9 += "message deleted \n @" + _0x1b4d46.split('@')[0x0] + " avoid sending link.";
              await _0x4137ff.sendMessage(_0x2d2514, {
                'text': _0x54c1c9,
                'mentions': [_0x1b4d46]
              }, {
                'quoted': _0x35f8b6
              });
              await _0x4137ff.sendMessage(_0x2d2514, {
                'delete': _0x48c344
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x384919 === "warn") {
                const {
                  getWarnCountByJID: _0x35e9fc,
                  ajouterUtilisateurAvecWarnCount: _0x894ec7
                } = require("./bdd/warn");
                let _0x388d57 = await _0x35e9fc(_0x1b4d46);
                let _0x454f58 = conf.WARN_COUNT;
                if (_0x388d57 >= _0x454f58) {
                  var _0x43bb7b = "link detected , you will be remove because of reaching warn-limit";
                  await _0x4137ff.sendMessage(_0x2d2514, {
                    'text': _0x43bb7b,
                    'mentions': [_0x1b4d46]
                  }, {
                    'quoted': _0x35f8b6
                  });
                  await _0x4137ff.groupParticipantsUpdate(_0x2d2514, [_0x1b4d46], 'remove');
                  await _0x4137ff.sendMessage(_0x2d2514, {
                    'delete': _0x48c344
                  });
                } else {
                  var _0x2bcc4a = _0x454f58 - _0x388d57;
                  var _0x2d74bd = "Link detected , your warn_count was upgrade ;\n rest : " + _0x2bcc4a + " ";
                  await _0x894ec7(_0x1b4d46);
                  await _0x4137ff.sendMessage(_0x2d2514, {
                    'text': _0x2d74bd,
                    'mentions': [_0x1b4d46]
                  }, {
                    'quoted': _0x35f8b6
                  });
                  await _0x4137ff.sendMessage(_0x2d2514, {
                    'delete': _0x48c344
                  });
                }
              }
            }
          }
        }
      } catch (_0x1ca337) {
        console.log("bdd err " + _0x1ca337);
      }
      try {
        const _0x2a0943 = _0x35f8b6.key?.['id']?.["startsWith"]("BAES") && _0x35f8b6.key?.['id']?.["length"] === 0x10;
        const _0x4014e0 = _0x35f8b6.key?.['id']?.["startsWith"]("BAE5") && _0x35f8b6.key?.['id']?.['length'] === 0x10;
        if (_0x2a0943 || _0x4014e0) {
          if (_0x509105 === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0x57aa02 = await atbverifierEtatJid(_0x2d2514);
          if (!_0x57aa02) {
            return;
          }
          ;
          if (_0x13a870 || _0x1b4d46 === _0x9befd4) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x14c355 = {
            'remoteJid': _0x2d2514,
            'fromMe': false,
            'id': _0x35f8b6.key.id,
            'participant': _0x1b4d46
          };
          var _0x54c1c9 = "bot detected, \n";
          var _0x309f4c = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Zoou-Md",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': '#000000'
          });
          await _0x309f4c.toFile("st1.webp");
          var _0x384919 = await atbrecupererActionJid(_0x2d2514);
          if (_0x384919 === "remove") {
            _0x54c1c9 += "message deleted \n @" + _0x1b4d46.split('@')[0x0] + " removed from group.";
            await _0x4137ff.sendMessage(_0x2d2514, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x4137ff.sendMessage(_0x2d2514, {
              'text': _0x54c1c9,
              'mentions': [_0x1b4d46]
            }, {
              'quoted': _0x35f8b6
            });
            try {
              await _0x4137ff.groupParticipantsUpdate(_0x2d2514, [_0x1b4d46], 'remove');
            } catch (_0xdc8de5) {
              console.log("antibot ") + _0xdc8de5;
            }
            await _0x4137ff.sendMessage(_0x2d2514, {
              'delete': _0x14c355
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x384919 === 'delete') {
              _0x54c1c9 += "message delete \n @" + _0x1b4d46.split('@')[0x0] + " Avoid sending link.";
              await _0x4137ff.sendMessage(_0x2d2514, {
                'text': _0x54c1c9,
                'mentions': [_0x1b4d46]
              }, {
                'quoted': _0x35f8b6
              });
              await _0x4137ff.sendMessage(_0x2d2514, {
                'delete': _0x14c355
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x384919 === "warn") {
                const {
                  getWarnCountByJID: _0x24a684,
                  ajouterUtilisateurAvecWarnCount: _0x475a73
                } = require("./bdd/warn");
                let _0x3767fb = await _0x24a684(_0x1b4d46);
                let _0x3b939f = conf.WARN_COUNT;
                if (_0x3767fb >= _0x3b939f) {
                  var _0x43bb7b = "bot detected ;you will be remove because of reaching warn-limit";
                  await _0x4137ff.sendMessage(_0x2d2514, {
                    'text': _0x43bb7b,
                    'mentions': [_0x1b4d46]
                  }, {
                    'quoted': _0x35f8b6
                  });
                  await _0x4137ff.groupParticipantsUpdate(_0x2d2514, [_0x1b4d46], "remove");
                  await _0x4137ff.sendMessage(_0x2d2514, {
                    'delete': _0x14c355
                  });
                } else {
                  var _0x2bcc4a = _0x3b939f - _0x3767fb;
                  var _0x2d74bd = "bot detected , your warn_count was upgrade ;\n rest : " + _0x2bcc4a + " ";
                  await _0x475a73(_0x1b4d46);
                  await _0x4137ff.sendMessage(_0x2d2514, {
                    'text': _0x2d74bd,
                    'mentions': [_0x1b4d46]
                  }, {
                    'quoted': _0x35f8b6
                  });
                  await _0x4137ff.sendMessage(_0x2d2514, {
                    'delete': _0x14c355
                  });
                }
              }
            }
          }
        }
      } catch (_0x3308ca) {
        console.log(".... " + _0x3308ca);
      }
      if (_0x4c4276) {
        const _0x4d5204 = evt.cm.find(_0x45b008 => _0x45b008.nomCom === _0x186d34);
        if (_0x4d5204) {
          try {
            if (conf.MODE.toLocaleLowerCase() != "yes" && !_0x58f101) {
              return;
            }
            if (!_0x58f101 && _0x2d2514 === _0x1b4d46 && conf.PM_PERMIT === "yes") {
              _0x2a8421("You don't have acces to commands here");
              return;
            }
            if (!_0x58f101 && _0x1e22ae) {
              let _0x516a4c = await isGroupBanned(_0x2d2514);
              if (_0x516a4c) {
                return;
              }
            }
            if (!_0x13a870 && _0x1e22ae) {
              let _0x29ab57 = await isGroupOnlyAdmin(_0x2d2514);
              if (_0x29ab57) {
                return;
              }
            }
            if (!_0x58f101) {
              let _0x138ee3 = await isUserBanned(_0x1b4d46);
              if (_0x138ee3) {
                _0x2a8421("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x2d2514, _0x4137ff, _0x35f8b6, _0x4d5204.reaction);
            _0x4d5204.fonction(_0x2d2514, _0x4137ff, _0x174e3a);
          } catch (_0x1334ea) {
            console.log("😡😡 " + _0x1334ea);
            _0x4137ff.sendMessage(_0x2d2514, {
              'text': "😡😡 " + _0x1334ea
            }, {
              'quoted': _0x35f8b6
            });
          }
        }
      }
    });
    const {
      recupevents: _0x696dfd
    } = require("./bdd/welcome");
    _0x4137ff.ev.on('group-participants.update', async _0x177366 => {
      console.log(_0x177366);
      let _0x3e6712;
      try {
        _0x3e6712 = await _0x4137ff.profilePictureUrl(_0x177366.id, 'image');
      } catch {
        _0x3e6712 = "https://files.catbox.moe/zotx9t.jpg";
      }
      try {
        const _0x102d7e = await _0x4137ff.groupMetadata(_0x177366.id);
        if (_0x177366.action == "add" && (await _0x696dfd(_0x177366.id, 'welcome')) == 'on') {
          let _0x37eb28 = "╔════◇◇◇═════╗\n║ welcome to new(s) member(s)\n║ *New(s) Member(s) :*\n";
          let _0x487e84 = _0x177366.participants;
          for (let _0x6b9bb0 of _0x487e84) {
            _0x37eb28 += "║ @" + _0x6b9bb0.split('@')[0x0] + "\n";
          }
          _0x37eb28 += "║\n╚════◇◇◇═════╝\n◇ *Descriptioon*   ◇\n\n" + _0x102d7e.desc;
          _0x4137ff.sendMessage(_0x177366.id, {
            'image': {
              'url': _0x3e6712
            },
            'caption': _0x37eb28,
            'mentions': _0x487e84
          });
        } else {
          if (_0x177366.action == 'remove' && (await _0x696dfd(_0x177366.id, 'goodbye')) == 'on') {
            let _0x1f1994 = "one or somes member(s) left group;\n";
            let _0x6f3fa6 = _0x177366.participants;
            for (let _0x20bfca of _0x6f3fa6) {
              _0x1f1994 += '@' + _0x20bfca.split('@')[0x0] + "\n";
            }
            _0x4137ff.sendMessage(_0x177366.id, {
              'text': _0x1f1994,
              'mentions': _0x6f3fa6
            });
          } else {
            if (_0x177366.action == "promote" && (await _0x696dfd(_0x177366.id, "antipromote")) == 'on') {
              if (_0x177366.author == _0x102d7e.owner || _0x177366.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x177366.author == decodeJid(_0x4137ff.user.id) || _0x177366.author == _0x177366.participants[0x0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x4137ff.groupParticipantsUpdate(_0x177366.id, [_0x177366.author, _0x177366.participants[0x0]], "demote");
              _0x4137ff.sendMessage(_0x177366.id, {
                'text': '@' + _0x177366.author.split('@')[0x0] + " has violated the anti-promotion rule, therefore both " + _0x177366.author.split('@')[0x0] + " and @" + _0x177366.participants[0x0].split('@')[0x0] + " have been removed from administrative rights.",
                'mentions': [_0x177366.author, _0x177366.participants[0x0]]
              });
            } else {
              if (_0x177366.action == "demote" && (await _0x696dfd(_0x177366.id, "antidemote")) == 'on') {
                if (_0x177366.author == _0x102d7e.owner || _0x177366.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x177366.author == decodeJid(_0x4137ff.user.id) || _0x177366.author == _0x177366.participants[0x0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x4137ff.groupParticipantsUpdate(_0x177366.id, [_0x177366.author], 'demote');
                await _0x4137ff.groupParticipantsUpdate(_0x177366.id, [_0x177366.participants[0x0]], "promote");
                _0x4137ff.sendMessage(_0x177366.id, {
                  'text': '@' + _0x177366.author.split('@')[0x0] + " has violated the anti-demotion rule by removing @" + _0x177366.participants[0x0].split('@')[0x0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x177366.author, _0x177366.participants[0x0]]
                });
              }
            }
          }
        }
      } catch (_0x956efb) {
        console.error(_0x956efb);
      }
    });
    async function _0x133195() {
      const _0xa8f76 = require("node-cron");
      const {
        getCron: _0x5dd048
      } = require("./bdd/cron");
      let _0x252780 = await _0x5dd048();
      console.log(_0x252780);
      if (_0x252780.length > 0x0) {
        for (let _0x488dcf = 0x0; _0x488dcf < _0x252780.length; _0x488dcf++) {
          if (_0x252780[_0x488dcf].mute_at != null) {
            let _0x1ccc49 = _0x252780[_0x488dcf].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0x252780[_0x488dcf].group_id + " a " + _0x1ccc49[0x0] + " H " + _0x1ccc49[0x1]);
            _0xa8f76.schedule(_0x1ccc49[0x1] + " " + _0x1ccc49[0x0] + " * * *", async () => {
              await _0x4137ff.groupSettingUpdate(_0x252780[_0x488dcf].group_id, "announcement");
              _0x4137ff.sendMessage(_0x252780[_0x488dcf].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Hello, it's time to close the group; sayonara."
              });
            }, {
              'timezone': "Africa/Abidjan"
            });
          }
          if (_0x252780[_0x488dcf].unmute_at != null) {
            let _0x3e841f = _0x252780[_0x488dcf].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x3e841f[0x0] + " H " + _0x3e841f[0x1] + " ");
            _0xa8f76.schedule(_0x3e841f[0x1] + " " + _0x3e841f[0x0] + " * * *", async () => {
              await _0x4137ff.groupSettingUpdate(_0x252780[_0x488dcf].group_id, "not_announcement");
              _0x4137ff.sendMessage(_0x252780[_0x488dcf].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Good morning; It's time to open the group."
              });
            }, {
              'timezone': "Africa/Dodoma"
            });
          }
        }
      } else {
        console.log("Les crons n'ont pas été activés");
      }
      return;
    }
    _0x4137ff.ev.on('contacts.upsert', async _0x36026f => {
      const _0x354068 = _0x3160c9 => {
        for (const _0x1b27b5 of _0x3160c9) {
          if (store.contacts[_0x1b27b5.id]) {
            Object.assign(store.contacts[_0x1b27b5.id], _0x1b27b5);
          } else {
            store.contacts[_0x1b27b5.id] = _0x1b27b5;
          }
        }
        return;
      };
      _0x354068(_0x36026f);
    });
    _0x4137ff.ev.on("connection.update", async _0x515370 => {
      const {
        lastDisconnect: _0x1f0c45,
        connection: _0x506544
      } = _0x515370;
      if (_0x506544 === "connecting") {
        console.log("ℹ️ HEROKU-BT CONNECTING...");
      } else {
        if (_0x506544 === "open") {
          console.log("✅ Heroku-bt Connection Established! ☺️");
          console.log('--');
          0x0;
          await baileys_1.delay(0xc8);
          console.log("------");
          0x0;
          await baileys_1.delay(0x12c);
          console.log("------------------/-----");
          console.log("Heroku-bt is Online 🕸\n\n");
          console.log("Loading Commands ...\n");
          fs.readdirSync(__dirname + '/commandes').forEach(_0x1cd82e => {
            if (path.extname(_0x1cd82e).toLowerCase() == ".js") {
              try {
                require(__dirname + '/commandes/' + _0x1cd82e);
                console.log(_0x1cd82e + " installed ✔️");
              } catch (_0x123335) {
                console.log(_0x1cd82e + " n'a pas pu être chargé pour les raisons suivantes : " + _0x123335);
              }
              0x0;
              baileys_1.delay(0x12c);
            }
          });
          0x0;
          baileys_1.delay(0x2bc);
          var _0x5e3df9;
          if (conf.MODE.toLocaleLowerCase() === "yes") {
            _0x5e3df9 = "public";
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0x5e3df9 = "private";
          } else {
            _0x5e3df9 = "undefined";
          }
          console.log("All Commands Installed ✅");
          await _0x133195();
          if (conf.DP.toLowerCase() === "yes") {
            let _0x46c4dd = "\n╔════◇\n║. HEROKU-BT CONNECTED 🌟\n║    Prefix : [ " + prefixe + " ]\n║    Mode :" + _0x5e3df9 + "\n║   Total Commands : " + evt.cm.length + "︎\n║    owner Rahmani 💫\n╚════════════════╝\nour channel supporter ✅\nhttps://whatsapp.com/channel/0029VatokI45EjxufALmY32X\n\n";
            await _0x4137ff.sendMessage(_0x4137ff.user.id, {
              'text': _0x46c4dd
            });
          }
        } else {
          if (_0x506544 == 'close') {
            let _0x58dcf6 = new boom_1.Boom(_0x1f0c45?.["error"])?.['output']["statusCode"];
            if (_0x58dcf6 === baileys_1.DisconnectReason.badSession) {
              console.log("Session id érronée veuillez rescanner le qr svp ...");
            } else {
              if (_0x58dcf6 === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connexion fermée, reconnexion en cours ...");
                _0x5e07ab();
              } else {
                if (_0x58dcf6 === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connexion au serveur perdue 😞 ,,, reconnexion en cours ... ");
                  _0x5e07ab();
                } else {
                  if (_0x58dcf6 === baileys_1.DisconnectReason?.["connectionReplaced"]) {
                    console.log("connexion réplacée ,,, une sesssion est déjà ouverte veuillez la fermer svp !!!");
                  } else {
                    if (_0x58dcf6 === baileys_1.DisconnectReason.loggedOut) {
                      console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
                    } else {
                      if (_0x58dcf6 === baileys_1.DisconnectReason.restartRequired) {
                        console.log("redémarrage en cours ▶️");
                        _0x5e07ab();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0x58dcf6);
                        const {
                          exec: _0x40a018
                        } = require("child_process");
                        _0x40a018("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x506544);
            _0x5e07ab();
          }
        }
      }
    });
    _0x4137ff.ev.on("creds.update", _0x47fde9);
    _0x4137ff.downloadAndSaveMediaMessage = async (_0x4d0829, _0x49fb1e = '', _0x502639 = true) => {
      let _0x632235 = _0x4d0829.msg ? _0x4d0829.msg : _0x4d0829;
      let _0x3a7933 = (_0x4d0829.msg || _0x4d0829).mimetype || '';
      let _0x4502f5 = _0x4d0829.mtype ? _0x4d0829.mtype.replace(/Message/gi, '') : _0x3a7933.split('/')[0x0];
      0x0;
      const _0x290cd8 = await baileys_1.downloadContentFromMessage(_0x632235, _0x4502f5);
      let _0x103258 = Buffer.from([]);
      for await (const _0x31e8ef of _0x290cd8) {
        _0x103258 = Buffer.concat([_0x103258, _0x31e8ef]);
      }
      let _0x5dcfa5 = await FileType.fromBuffer(_0x103258);
      let _0xd2c124 = './' + _0x49fb1e + '.' + _0x5dcfa5.ext;
      await fs.writeFileSync(_0xd2c124, _0x103258);
      return _0xd2c124;
    };
    _0x4137ff.awaitForMessage = async (_0x46514c = {}) => {
      return new Promise((_0x5512f2, _0x2bbe1d) => {
        if (typeof _0x46514c !== 'object') {
          _0x2bbe1d(new Error("Options must be an object"));
        }
        if (typeof _0x46514c.sender !== "string") {
          _0x2bbe1d(new Error("Sender must be a string"));
        }
        if (typeof _0x46514c.chatJid !== "string") {
          _0x2bbe1d(new Error("ChatJid must be a string"));
        }
        if (_0x46514c.timeout && typeof _0x46514c.timeout !== "number") {
          _0x2bbe1d(new Error("Timeout must be a number"));
        }
        if (_0x46514c.filter && typeof _0x46514c.filter !== 'function') {
          _0x2bbe1d(new Error("Filter must be a function"));
        }
        const _0x5d6a35 = _0x46514c?.["timeout"] || undefined;
        const _0xc96cf7 = _0x46514c?.["filter"] || (() => true);
        let _0x853849 = undefined;
        let _0x2d6e98 = _0x36e891 => {
          let {
            type: _0x424f85,
            messages: _0xda99a1
          } = _0x36e891;
          if (_0x424f85 == "notify") {
            for (let _0x3ada63 of _0xda99a1) {
              const _0x34e364 = _0x3ada63.key.fromMe;
              const _0xfc60eb = _0x3ada63.key.remoteJid;
              const _0x377436 = _0xfc60eb.endsWith("@g.us");
              const _0x247a51 = _0xfc60eb == "status@broadcast";
              const _0x55228c = _0x34e364 ? _0x4137ff.user.id.replace(/:.*@/g, '@') : _0x377436 || _0x247a51 ? _0x3ada63.key.participant.replace(/:.*@/g, '@') : _0xfc60eb;
              if (_0x55228c == _0x46514c.sender && _0xfc60eb == _0x46514c.chatJid && _0xc96cf7(_0x3ada63)) {
                _0x4137ff.ev.off('messages.upsert', _0x2d6e98);
                clearTimeout(_0x853849);
                _0x5512f2(_0x3ada63);
              }
            }
          }
        };
        _0x4137ff.ev.on("messages.upsert", _0x2d6e98);
        if (_0x5d6a35) {
          _0x853849 = setTimeout(() => {
            _0x4137ff.ev.off("messages.upsert", _0x2d6e98);
            _0x2bbe1d(new Error('Timeout'));
          }, _0x5d6a35);
        }
      });
    };
    return _0x4137ff;
  }
  let _0x7bbfcd = require.resolve(__filename);
  fs.watchFile(_0x7bbfcd, () => {
    fs.unwatchFile(_0x7bbfcd);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x7bbfcd];
    require(_0x7bbfcd);
  });
  _0x5e07ab();
}, 0x1388);