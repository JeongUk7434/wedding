/**
 * 결혼식 참석 여부 수집 Google Apps Script
 *
 * [배포 방법]
 * 1. https://script.google.com 접속 → 새 프로젝트
 * 2. 아래 코드 전체 붙여넣기
 * 3. SHEET_ID 를 본인 Google 스프레드시트 ID로 교체
 *    (스프레드시트 URL: https://docs.google.com/spreadsheets/d/★여기★/edit)
 * 4. 상단 메뉴 → 배포 → 새 배포
 *    - 유형: 웹 앱
 *    - 다음 사용자로 실행: 나(본인 계정)
 *    - 액세스 권한: 모든 사용자
 * 5. 배포 → URL 복사
 * 6. index.html 안의 RSVP_SCRIPT_URL 에 복사한 URL 붙여넣기
 */

var SHEET_ID = 'YOUR_GOOGLE_SHEET_ID'; // ← 여기에 스프레드시트 ID 입력

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var ss    = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheets()[0]; // 첫 번째 시트 사용

    // 헤더가 없으면 첫 행에 추가
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        '제출시각', '성함', '연락처', '참석여부', '측',
        '추가인원', '동행인성함', '식사여부', '전달사항'
      ]);
    }

    var now = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');

    sheet.appendRow([
      now,
      data.name        || '',
      data.hp          || '',
      data.attendance  || '',
      data.side        || '',
      data.companion   || '',
      data.companion2  || '',
      data.meal        || '',
      data.message     || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, msg: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 브라우저에서 직접 URL 접근 시 테스트용
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'RSVP Script is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
