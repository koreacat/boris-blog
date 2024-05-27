const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

const header = {
  /*
   * TODO 2.
   * [로딩 최적화 - 텍스트 압축] 
   * 텍스트 파일들이 압축되지 않은 상태로 전송되고 있습니다.
   */

  /*
   * TODO 3.
   * [로딩 최적화 - 캐시 최적화] 
   * 요청에 대해 캐시가 적용되어 있지 않습니다.
   */

  setHeaders: (res, path) => {
    if(path.endsWit('.htnl')){
      res.setHeader('Cache-Control', 'no-cache');
    }else if(path.endsWith('.js') || path.endsWith('.css') || path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.jpeg') || path.endsWith('.gif') || path.endsWith('.svg') || path.endsWith('.ico'))
    {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }else{
      res.setHeader('Cache-Control', 'no-stroe');
    }
    // res.setHeader('Cache-Control', 'max-age=10');

    // res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    // res.setHeader('Expires', '-1');
    // res.setHeader('Pragma', 'no-cache');
  },
}

app.use(express.static(path.join(__dirname, '../build'), header));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(port, () => console.log(`express listening at http://localhost:${port}`));
