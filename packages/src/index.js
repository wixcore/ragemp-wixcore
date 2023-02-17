"use strict";

/**
  * Завантажує ігровий режим на стороні сервера.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

(async () => {
  await require('./wixcore/nucleus')();
  await require('./wixcore/feature')();
})();