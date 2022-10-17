# TIL 

## 10/18 
- [도움받은 블로그](https://whiteknight3672.tistory.com/m/266)
- Node.js 왜 쓰는가? 
    - 자바스크립트를 사용
    - 단일 스레드 이벤트 루프 기반 
    - non-blocking I/O
    - 방대한 모듈 생태계 (npm)
- 어떤 프로젝트에 도입하면 좋은가? 
    - 작고 빈번한 요청을 처리하는 서비스 (네트워크 스트리밍, 채팅)
        - non-blocking 이기 때문에 응답 속도가 빠르다 (async, await의 등장으로 비동기 처리 로직을 작성하는 난이도가 쉬워짐)
    - 로직이 간단한 서비스 
        - 런타임에 에러 발생할 수 있는 단점이 있기에 프로그램 복잡도와 위험도가 비례 
            - 예외 처리를 제대로 하지 않는다면 앱이 종료되는 경우도 있음 
    - 빠르게 개발해야할 때 
    - 데이터 포맷으로 JSON을 사용할 때 
- 등등 여러가지 내용을 미루어 보아..이런 맵 서비스를 개발하기에는 node.js 를 사용하는것이 적합해 보임!
- 그렇다면 FE는??? 핫한 react native를 써..? 