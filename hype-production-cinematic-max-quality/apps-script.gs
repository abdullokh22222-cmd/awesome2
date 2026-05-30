/**
 * HYPE PRODUCTION — form-to-Sheet endpoint.
 *
 * SETUP (one time):
 *   1. Open your Google Sheet:
 *      https://docs.google.com/spreadsheets/d/1g92GN2V9_7_eEESI00jRWcnHd0NF9EXpsT2q4VHsWL4
 *   2. Extensions → Apps Script.
 *   3. Replace any existing code with the contents of this file.
 *   4. Edit the CONFIG block below: set NOTIFY_EMAIL to where you want lead alerts.
 *   5. Save (disk icon).
 *   6. Deploy → New deployment → type "Web app".
 *        - Execute as: Me
 *        - Who has access: Anyone
 *   7. Click Deploy. Copy the Web app URL (looks like
 *      https://script.google.com/macros/s/AKfycb.../exec).
 *   8. Send that URL to me — I will paste it into the site's form.
 *
 * IMPORTANT: every time you change this code, re-deploy as a NEW version
 *            (Deploy → Manage deployments → edit → New version).
 *            Old URLs keep working.
 */

// ---------- CONFIG ----------
var CONFIG = {
  // Tab/sheet name inside the spreadsheet where rows get appended.
  // If you don't have a tab with this name, the script will create it.
  SHEET_TAB:    'leads',

  // Where to send email notification on every new lead.
  // Set to '' to disable email alerts.
  NOTIFY_EMAIL: 'johnaltmanandco@gmail.com',

  // Subject line of the notification email.
  EMAIL_SUBJECT: 'HYPE — новая заявка',
};
// -----------------------------

/**
 * POST handler — receives form data from the website.
 */
function doPost(e) {
  try {
    var body = {};
    if (e && e.postData && e.postData.contents) {
      try { body = JSON.parse(e.postData.contents); }
      catch (err) { body = e.parameter || {}; }
    } else if (e && e.parameter) {
      body = e.parameter;
    }

    var name    = String(body.name    || '').trim();
    var phone   = String(body.phone   || '').trim();
    var project = String(body.project || '').trim();
    var lang    = String(body.lang    || 'ru').trim();
    var mode    = String(body.mode    || '').trim();  // landing | multipage | cinematic
    var source  = String(body.source  || 'site').trim();

    if (!name || !phone) {
      return jsonResponse({ ok: false, error: 'name_or_phone_missing' });
    }

    var sheet = getOrCreateSheet(CONFIG.SHEET_TAB);
    var row = [
      new Date(),         // Дата
      name,               // Имя
      phone,              // Контакт
      project,            // Проект
      lang,               // Язык
      mode,               // Формат сайта (landing/multipage/cinematic)
      source              // Откуда заявка
    ];
    sheet.appendRow(row);

    if (CONFIG.NOTIFY_EMAIL) {
      try {
        var msg =
          'Имя: ' + name + '\n' +
          'Контакт: ' + phone + '\n' +
          'Проект: ' + (project || '—') + '\n' +
          'Язык: ' + lang + '\n' +
          'Формат: ' + (mode || '—') + '\n' +
          'Откуда: ' + source + '\n\n' +
          'Открыть таблицу: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl();
        MailApp.sendEmail(CONFIG.NOTIFY_EMAIL, CONFIG.EMAIL_SUBJECT, msg);
      } catch (mailErr) {
        // Don't fail the request if email fails — the lead is already saved.
      }
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err && err.message || err) });
  }
}

/**
 * GET handler — health check + helpful info for whoever opens the URL.
 */
function doGet() {
  return jsonResponse({
    ok: true,
    service: 'HYPE PRODUCTION lead endpoint',
    method: 'POST application/json with {name, phone, project, lang, mode}'
  });
}

// ---------- helpers ----------

function getOrCreateSheet(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(['Дата', 'Имя', 'Контакт', 'Проект', 'Язык', 'Формат', 'Источник']);
    sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
