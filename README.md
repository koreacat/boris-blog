## TGC - UIX 기반 개발 이해 및 활용 방안

성능 최적화 세션 실습 프로젝트 입니다.

[과제 설명 링크](https://koreacat.notion.site/900dc9c238de41c3b53b7c236880e1e8)

## Boris's Blog

"Boris's Blog"는 창의적이고 호기심 많은 고양이 보리스가 만든 블로그입니다. 보리스는 코딩에 관심이 많아 자신만의 블로그를 만들었지만, 전문적인 지식이 부족하여 성능 문제가 많은 웹사이트를 구축했습니다. 

이 블로그는 재미있고 다양한 내용을 제공하지만, 느린 로딩 시간 문제로 인해 사용자 경험이 떨어집니다. "Boris's Blog"의 성능을 최적화 해 로딩 시간을 줄이고 사용자 경험을 향상시켜 보리스를 도와주세요.

### 실행

install dependencies

```
$ npm install
```

api 서버 실행

```
$ npm run server
```

프론트 개발 환경 서버 실행 

```
$ npm run start
```

배포 환경 서버 실행

```
$ npm run serve
```

번들 파일 생성

```
$ npm run analyzer
```

### 과제5 - [로딩 최적화 - 불필요한 css 제거]: 불필요한 css를 제거해야하는 상황과 방법에 대해 조사해 README.md 에 작성해주세요.
사용자가 방문할 페이지에서 사용되지 않거나, 참조되지 않는 불필요한 css인 경우에 CSS 최적화 과정을 통하여 로딩 최적화를 진행할 수 있습니다.

PurgeCSS를 사용하여 불필요한 CSS를 제거하거나, Webpack의 CssMinimizerWebpackPlugin을 사용하여 압축을 수행하거나,
code spliting 과정을 통하여 현재 화면에서 필요한 CSS만 불러오는 과정을 통해 최적화를 진행할 수 있습니다.